import {
  faAngleDoubleRight,
  faFontAwesomeLogoFull,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { useState } from "react";
import { format } from "date-fns";

interface Props {
  dataProps: Array<Post>;
}

type Post = {
  id: number;
  title: string;
  content: string;
  author: string;
  created_at: Date;
};

const BriefPosts: React.FunctionComponent<Props> = ({ dataProps }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <div className="flex flex-col md:h-full justify-between">
      {dataProps?.map((item, idx) => (
        <div className="mb-6" key={item.id}>
          <Link href={`/posts/[postId]`} as={`/posts/${item.id}`}>
            <a className="font-semibold text-2xl">{item.title}</a>
          </Link>
          <div className="py-2 text-gray-500 text-xs">
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
            parseInt(process.env.NEXT_PUBLIC_CONTENT_LENGTH) ? null : (
              <Link href={`/posts/[postId]`} as={`/posts/${item.id}`}>
                <a>Read More...</a>
              </Link>
            )}
          </div>
        </div>
      ))}
      <Link href="/posts">
        <a className="transform hover:translate-x-1 duration-500 w-24">
          <FontAwesomeIcon icon={faAngleDoubleRight} />
          <span className="ml-2">All Posts</span>
        </a>
      </Link>
    </div>
  );
};

export default BriefPosts;
