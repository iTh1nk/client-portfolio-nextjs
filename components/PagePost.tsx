import Link from "next/link";
import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { format } from "date-fns";
import Axios from "axios";

interface Props {
  dataProps: { results: Array<Post>; total: number };
  currentPage: number;
}

type Post = {
  id: string;
  title: string;
  content: string;
  author: string;
  created_at: Date;
};

const PagePost: React.FunctionComponent<Props> = ({
  dataProps,
  currentPage,
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const fetcher = async () => {
    const res = await fetch(
      process.env.NEXT_PUBLIC_API +
        "/posts/get/page/?page_size=" +
        process.env.NEXT_PUBLIC_PAGE +
        "&page=" +
        currentPage
    );
    const data = await res.json();
    return data;
  };
  const { data: dataSWR, error: errorSWR } = useSWR(
    "/api/v1/posts/get/page?page_size=" +
      process.env.NEXT_PUBLIC_PAGE +
      "&page=" +
      currentPage,
    fetcher,
    {
      initialData: dataProps,
      refreshInterval: 1000,
    }
  );
  return (
    <div>
      {dataSWR?.results?.map((item) => (
        <div className="mb-6" key={item.id}>
          <Link href={`/posts/[postId]`} as={`/posts/${item.id}`}>
            <a className="font-semibold text-2xl">{item.title}</a>
          </Link>
          <div className="py-2 text-gray-500 text-xs ">
            {format(new Date(item.created_at), "MM-dd-yyyy HH:mm")}
          </div>
          <div className="font-mono text-sm dark:text-gray-400">
            <div
              className="ck-content inline-block h-24 overflow-hidden"
              dangerouslySetInnerHTML={{
                __html: item.content,
              }}
            />
          </div>
          <div className="mt-3 font-serif text-gray-500">
            {item.content.length <
            parseInt(process.env.CONTENT_LENGTH) ? null : (
              <Link href={`/posts/[postId]`} as={`/posts/${item.id}`}>
                <a>Read More...</a>
              </Link>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PagePost;
