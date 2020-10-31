import React, { useReducer, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperPlane,
  faSpinner,
  faUndo,
} from "@fortawesome/free-solid-svg-icons";
import Axios from "axios";
import { Container } from "../../components/Container";

const schema = yup.object().shape({
  title: yup.string().required("Title is required"),
  author: yup.string().required("Author is required"),
  content: yup.string().required("Content is required"),
});

interface Props {
  dataProject: Array<Project>;
}

interface IFormInputs {
  title: string;
  author: string;
  content: string;
}
type MessageState = {
  isLoading: boolean;
  error: string;
  success: string;
};
type Project = {
  id: string;
  title: string;
  author: string;
  content: string;
  created_at: Date;
};

const initialState: MessageState = {
  isLoading: false,
  error: "",
  success: "",
};

type MessageAction =
  | { type: "submitting" }
  | { type: "success"; payload: string }
  | { type: "error"; payload: string }
  | { type: "reset" };

function reducer(state: MessageState, action: MessageAction) {
  switch (action.type) {
    case "submitting":
      return {
        ...state,
        isLoading: true,
      };
    case "success":
      return {
        ...state,
        isLoading: false,
        success: action.payload,
      };
    case "error":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case "reset":
      return {
        ...state,
        success: "",
        error: "",
      };
  }
}

const AdminPostAdd: React.FunctionComponent<Props> = ({ dataProject }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { isLoading, success, error } = state;

  const { register, handleSubmit, errors, reset } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    dispatch({ type: "submitting" });
    dispatch({ type: "reset" });
    let dataSubmit = {
      title: data.title,
      author: data.author,
      content: data.content,
    };
    Axios.post(process.env.NEXT_PUBLIC_API + "/messages/post/", dataSubmit)
      .then((resp) => {
        reset();
        dispatch({
          type: "success",
          payload: "Message has been sent successfully! Thank you!",
        });
      })
      .catch((err) => {
        console.log(err, err.response);
        dispatch({
          type: "error",
          payload:
            "Sorry, something went wrong on our side. Please try again later!",
        });
      });
  };

  return (
    <Container dataProps={dataProject?.slice(0, 3)}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="bg-white shadow-md px-3 pt-6 pb-8 mb-4 flex flex-col dark:bg-black">
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="title">
              About
            </label>
            <input
              className="shadow appearance-none border w-full py-2 px-3 mb-1 dark:text-black rounded-sm"
              id="title"
              type="text"
              placeholder="Brief Summary"
              name="title"
              ref={register}
              onChange={() => dispatch({ type: "reset" })}
            />
            <p className="we-form-error">{errors.title?.message}</p>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="author">
              Your Info
            </label>
            <input
              className="shadow appearance-none border w-full py-2 px-3 mb-1 dark:text-black rounded-sm"
              id="author"
              type="author"
              placeholder="Name or Email"
              name="author"
              ref={register}
              onChange={() => dispatch({ type: "reset" })}
            />
            <p className="we-form-error">{errors.author?.message}</p>
          </div>
          <div className="mb-8">
            <label className="block text-sm font-bold mb-2" htmlFor="content">
              Content
            </label>
            <textarea
              className="shadow appearance-none border w-full py-2 px-3 mb-1 dark:text-black rounded-sm"
              id="content"
              placeholder="Content"
              name="content"
              ref={register}
              onChange={() => dispatch({ type: "reset" })}
            />
            <p className="we-form-error">{errors.content?.message}</p>
          </div>
          <div className="flex items-center justify-start">
            <button className="we-btn-blue" type="submit">
              Submit{" "}
              {isLoading ? (
                <FontAwesomeIcon className="animate-spin" icon={faSpinner} />
              ) : (
                <FontAwesomeIcon icon={faPaperPlane} />
              )}
            </button>
            <button
              onClick={() => {
                reset();
                dispatch({ type: "reset" });
              }}
              className="we-btn-gray ml-3"
              type="submit"
            >
              Reset <FontAwesomeIcon icon={faUndo} />
            </button>
          </div>
          {success && <div className="text-green-500 py-3">{success}</div>}
          {error && <div className="text-red-500 py-3">{error}</div>}
        </div>
      </form>
    </Container>
  );
};

export async function getStaticProps() {
  try {
    const resProject = await fetch(
      process.env.NEXT_PUBLIC_API + "/projects/get"
    );
    const dataProject = await resProject.json();
    return {
      props: {
        dataProject,
      },
      revalidate: 1,
    };
  } catch (err) {
    console.log(err);
    return {
      props: {
        data: null,
      },
    };
  }
}

export default AdminPostAdd;
