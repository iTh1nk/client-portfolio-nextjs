import React, { useState } from "react";
import AdminContainer from "../../../components/AdminContainer";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";

const schema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required(),
});

interface Props {}

const AdminPostAdd: React.FunctionComponent<Props> = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);

  return (
    <AdminContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
          <div className="mb-4">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker mb-1"
              id="username"
              type="text"
              placeholder="Username"
              name="username"
              ref={register}
            />
            <p className="we-form-error">{errors.firstName?.message}</p>
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
            <p className="we-form-error">{errors.age?.message}</p>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-600 hover:bg-blue-dark text-white font-bold py-1 px-2 rounded-md"
              type="submit"
            >
              Sign In
            </button>
          </div>
        </div>
      </form>
    </AdminContainer>
  );
};

export default AdminPostAdd;
