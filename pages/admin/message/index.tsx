import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import AdminContainer from "../../../components/AdminContainer";
import { format } from "date-fns";

interface Props {}

type Post = {
  id: string;
  title: string;
  author: string;
  content: string;
  created_at: Date;
};

const AdminPostEdit: React.FunctionComponent<Props> = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [dataMessage, setDataMessage] = useState<Array<Post>>([]);
  const [topNotify, setTopNotify] = useState<boolean>(undefined);
  const notify = (bool: boolean, time?: number) => {
    setTopNotify(true);
    setTimeout(() => {
      setTopNotify(undefined);
    }, time || 3000);
  };

  useEffect(() => {
    Axios.get(process.env.NEXT_PUBLIC_API + "/messages/get/")
      .then((resp) => {
        setDataMessage(resp.data);
      })
      .catch((err) => {
        console.log(err, err.response);
      });
  });

  const handleDelete = (id) => {
    Axios.delete(process.env.NEXT_PUBLIC_API + "/messages/delete/" + id + "/", {
      headers: { authorization: localStorage.getItem("auth") },
    })
      .then((resp) => {
        notify(true);
      })
      .catch((err) => {
        console.log(err, err.response);
        notify(false);
      });
  };

  return (
    <AdminContainer topNotifyBool={topNotify}>
      {dataMessage
        ? "No Data"
        : dataMessage?.map((item, idx) => (
            <div className="" key={item.id}>
              <div className="font-bold mt-3">
                {idx + 1}: {item.title}{" "}
                <FontAwesomeIcon
                  onClick={() => {
                    handleDelete(item.id);
                  }}
                  className="text-red-500 ml-2"
                  icon={faTrashAlt}
                />
              </div>
              <div className="ml-5 py-2 text-gray-500 text-xs">
                {format(new Date(item.created_at), "MM-dd-yyyy HH:mm")}
              </div>
            </div>
          ))}
    </AdminContainer>
  );
};

export default AdminPostEdit;
