import React, { useState } from "react";
import AdminContainer from "../../../components/AdminContainer";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faPaperPlane,
  faSpinner,
  faUndo,
} from "@fortawesome/free-solid-svg-icons";
import AdminCKEditor from "../../../components/AdminCKEditor";
import Axios from "axios";

const schema = yup.object().shape({
  title: yup.string().required("Title is required"),
  author: yup.string().required("Author is required"),
});

interface Props {}

const AdminPostAdd: React.FunctionComponent<Props> = ({}) => {
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [ckContent, setCkContent] = useState("");

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    setSubmitting(true);
    let dataSubmit = {
      title: data.title,
      author: data.author,
      content: ckContent,
    };
    Axios.post(process.env.NEXT_PUBLIC_API + "/posts/post/", dataSubmit, {
      headers: { authorization: localStorage.getItem("auth") },
    })
      .then((resp) => {
        setSubmitting(false);
      })
      .catch((err) => {
        console.log(err, err.response);
        setSubmitting(false);
      });
  };

  return (
    <AdminContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="bg-white shadow-md rounded px-3 pt-6 pb-8 mb-4 flex flex-col dark:bg-gray-900">
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
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="author">
              Author
            </label>
            <input
              className="shadow appearance-none border border-red rounded w-full py-2 px-3 mb-1 dark:text-black"
              id="author"
              type="author"
              placeholder="Author"
              name="author"
              ref={register}
            />
            <p className="we-form-error">{errors.author?.message}</p>
          </div>
          <div className="mb-8">
            <label className="block text-sm font-bold mb-2" htmlFor="content">
              Content
            </label>
            <AdminCKEditor
              data={ckContent}
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
            <button className="we-btn-gray ml-3" type="submit">
              Reset <FontAwesomeIcon icon={faUndo} />
            </button>
          </div>
        </div>
      </form>
    </AdminContainer>
  );
};

export default AdminPostAdd;
