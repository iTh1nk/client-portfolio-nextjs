import Link from "next/link";
import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { format } from "date-fns";
import Axios from "axios";

interface Props {
  dataProps: { results: Array<Project>; total: number };
  currentPage: number;
}

type Project = {
  id: string;
  title: string;
  content: string;
  author: string;
};

const PageProject: React.FunctionComponent<Props> = ({
  dataProps,
  currentPage,
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const fetcher = async () => {
    const res = await fetch(
      process.env.NEXT_PUBLIC_API +
        "/projects/get/page/?page_size=" +
        process.env.NEXT_PUBLIC_PAGE +
        "&page=" +
        currentPage
    );
    const data = await res.json();
    return data;
  };
  const { data: dataSWR, error: errorSWR } = useSWR(
    "/api/v1/projects/get/page?page_size=" +
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
      {dataSWR?.results?.map((item, idx) => (
        <div className="mb-6" key={item.id}>
          <Link href={`/projects/[postId]`} as={`/projects/${item.id}`}>
            <a className="font-semibold text-2xl">{item.title}</a>
          </Link>
          <div className="mt-3 font-mono text-sm dark:text-gray-400">
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
              <Link href={`/projects/[postId]`} as={`/projects/${item.id}`}>
                <a>Read More...</a>
              </Link>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PageProject;
