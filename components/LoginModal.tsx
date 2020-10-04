import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";
import Axios from "axios";
import useLoggedIn from "./hook/useLoggedIn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faPaperPlane,
  faPlane,
  faSpinner,
  faUndo,
} from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

const schema = yup.object().shape({
  email: yup
    .string()
    .required("Username is required")
    .min(3, "Username is too short")
    .matches(
      /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
      "Email address is not valid"
    ),
  password: yup
    .string()
    .required("Password is required")
    .min(3, "Password is too short"),
});

interface Props {}

const LoginModal: React.FunctionComponent<Props> = ({}) => {
  const [loginError, setLoginError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    setIsLoading(true);
    Axios.post(process.env.NEXT_PUBLIC_API + "/auth/login/", data)
      .then((resp) => {
        localStorage.setItem("auth", resp.data.token);
        setIsLoading(false);
        router.push("/admin");
      })
      .catch((err) => {
        console.log(err, err.response);
        setIsLoading(false);
        setLoginError(
          "We are experiencing internal error, please try again later"
        );
      });
  };

  return (
    <div className="absolute z-50 top-0 w-full py-16 px-5 bg-blue-700 dark:bg-black h-full">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col dark:bg-gray-800 rounded-lg">
          <div className="mb-4">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker mb-1"
              id="email"
              type="text"
              placeholder="Email"
              name="email"
              ref={register}
            />
            <p className="we-form-error">{errors.email?.message}</p>
          </div>
          <div className="mb-6">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-1"
              id="password"
              type="password"
              placeholder="**********"
              name="password"
              ref={register}
            />
            <p className="we-form-error">{errors.password?.message}</p>
          </div>
          <div className=" relative flex items-center justify-start">
            <button className="we-btn-blue" type="submit">
              Sign In{" "}
              {isLoading ? (
                <FontAwesomeIcon className="animate-spin" icon={faSpinner} />
              ) : (
                <FontAwesomeIcon icon={faPaperPlane} />
              )}
            </button>
            <button className="we-btn-gray ml-3" type="submit">
              Reset <FontAwesomeIcon icon={faUndo} />
            </button>
            <FontAwesomeIcon
              onClick={() => router.push("/")}
              className="right-0 absolute text-xl"
              icon={faHome}
            />
          </div>
          {loginError && <div className="we-form-error mt-5">{loginError}</div>}
        </div>
      </form>
    </div>
  );
};

export default LoginModal;
