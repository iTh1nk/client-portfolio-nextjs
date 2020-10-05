import React, { useEffect, useState } from "react";
import AdminContainer from "../../../components/AdminContainer";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperPlane,
  faSpinner,
  faUndo,
} from "@fortawesome/free-solid-svg-icons";
import AdminCKEditor from "../../../components/AdminCKEditor";
import Axios from "axios";

const schema = yup.object().shape({
  title: yup.string().required("Title is required"),
});

interface Props {}

interface IFormInputs {
  title: string;
  author: string;
}

const AdminIntro: React.FunctionComponent<Props> = ({}) => {
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [ckContent, setCkContent] = useState("");
  const [dataCheck, setDataCheck] = useState([]);

  const { register, handleSubmit, errors, reset } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    setSubmitting(true);
    let dataSubmit = {
      title: data.title,
      author: data.author,
      content: ckContent,
    };
    Axios.post(process.env.NEXT_PUBLIC_API + "/intro/post/", dataSubmit, {
      headers: { authorization: localStorage.getItem("auth") },
    })
      .then((resp) => {
        reset();
        setCkContent("");
        setSubmitting(false);
      })
      .catch((err) => {
        console.log(err, err.response);
        setSubmitting(false);
      });
  };
  const onSubmitUpdate = (data) => {
    setSubmitting(true);
    let dataSubmit = {
      title: data.title,
      author: data.author,
      content: ckContent,
    };
    Axios.put(
      process.env.NEXT_PUBLIC_API + "/intro/put/" + dataCheck[0]?.id + "/",
      dataSubmit,
      {
        headers: { authorization: localStorage.getItem("auth") },
      }
    )
      .then((resp) => {
        reset();
        setCkContent("");
        setSubmitting(false);
      })
      .catch((err) => {
        console.log(err, err.response);
        setSubmitting(false);
      });
  };

  useEffect(() => {
    Axios.get(process.env.NEXT_PUBLIC_API + "/intro/get/")
      .then((resp) => {
        setDataCheck(resp.data);
      })
      .catch((err) => {
        console.log(err, err.response);
      });
  }, []);

  return (
    <AdminContainer>
      {dataCheck.length !== 0 ? (
        <form onSubmit={handleSubmit(onSubmitUpdate)}>
          <div className="bg-white shadow-md rounded px-3 pt-6 pb-8 mb-4 flex flex-col dark:bg-gray-900">
            <div className="font-bold mb-5">Update</div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="title">
                Title
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 mb-1 dark:text-black"
                id="title"
                type="text"
                placeholder="Title"
                name="title"
                ref={register}
                defaultValue={dataCheck[0]?.title}
              />
              <p className="we-form-error">{errors.title?.message}</p>
            </div>
            <div className="mb-8">
              <label className="block text-sm font-bold mb-2" htmlFor="content">
                Content
              </label>
              <AdminCKEditor
                data={dataCheck[0]?.content}
                cb={(cbContent) => setCkContent(cbContent)}
              />
            </div>
            <div className="flex items-center justify-start">
              <button className="we-btn-blue" type="submit">
                Submit{" "}
                {submitting ? (
                  <FontAwesomeIcon className="animate-spin" icon={faSpinner} />
                ) : (
                  <FontAwesomeIcon icon={faPaperPlane} />
                )}
              </button>
              <button
                onClick={() => {
                  reset();
                  setCkContent("");
                }}
                className="we-btn-gray ml-3"
                type="submit"
              >
                Reset <FontAwesomeIcon icon={faUndo} />
              </button>
            </div>
          </div>
        </form>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="bg-white shadow-md rounded px-3 pt-6 pb-8 mb-4 flex flex-col dark:bg-gray-900">
            <div className="font-bold mb-5">Add</div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="title">
                Title
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 mb-1 dark:text-black"
                id="title"
                type="text"
                placeholder="Title"
                name="title"
                ref={register}
              />
              <p className="we-form-error">{errors.title?.message}</p>
            </div>
            <div className="mb-8">
              <label className="block text-sm font-bold mb-2" htmlFor="content">
                Content
              </label>
              <AdminCKEditor
                data={""}
                cb={(cbContent) => setCkContent(cbContent)}
              />
            </div>
            <div className="flex items-center justify-start">
              <button className="we-btn-blue" type="submit">
                Submit{" "}
                {submitting ? (
                  <FontAwesomeIcon className="animate-spin" icon={faSpinner} />
                ) : (
                  <FontAwesomeIcon icon={faPaperPlane} />
                )}
              </button>
              <button
                onClick={() => {
                  reset();
                  setCkContent("");
                }}
                className="we-btn-gray ml-3"
                type="submit"
              >
                Reset <FontAwesomeIcon icon={faUndo} />
              </button>
            </div>
          </div>
        </form>
      )}
    </AdminContainer>
  );
};

export default AdminIntro;
