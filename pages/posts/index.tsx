import React, { useState } from "react";
import Profile from "../../componentss/Profile";
import { Container } from "../../componentss/Container";
import ReactPaginate from "react-paginate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
} from "@fortawesome/free-solid-svg-icons";
import { format } from "date-fns";
import Link from "next/link";

interface Props {
  dataProps: { results: Array<Post>; total: number };
  dataProject: Array<Project>;
}

type Post = {
  id: string;
  title: string;
  content: string;
  author: string;
  created_at: Date;
};
type Project = {
  id: string;
  title: string;
  content: string;
  created_at: Date;
};

const CONTENT_LENGTH = 200;

const Posts: React.FunctionComponent<Props> = ({ dataProps, dataProject }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // const handlePageClick = (e) => {
  //   dispatch({ type: "pageChange", page: e.selected });
  // };

  return (
    <Container
      title="Posts"
      content={"All Posts"}
      dataProps={dataProject?.slice(0, 3)}
    >
      <div className="">
        {/* <div className="md:w-1/2">
          <Profile />
        </div> */}
        <div className="inline md:hidden">
          <hr className="mt-3 mb-6" />
        </div>
        <div className="flex flex-col justify-between md:w-full md:mt-0">
          {dataProps?.results?.map((item, idx) => (
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
                parseInt(process.env.CONTENT_LENGTH) ? null : (
                  <Link href={`/posts/[postId]`} as={`/posts/${item.id}`}>
                    <a>Read More...</a>
                  </Link>
                )}
              </div>
            </div>
          ))}

          <ReactPaginate
            previousLabel={<FontAwesomeIcon icon={faAngleDoubleLeft} />}
            nextLabel={<FontAwesomeIcon icon={faAngleDoubleRight} />}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={Math.ceil(
              dataProps?.total / parseInt(process.env.NEXT_PUBLIC_PAGE)
            )}
            marginPagesDisplayed={2}
            pageRangeDisplayed={2}
            // onPageChange={handlePageClick}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}
          />
        </div>
      </div>
    </Container>
  );
};

export async function getStaticProps() {
  try {
    const res = await fetch(
      process.env.NEXT_PUBLIC_API +
        "/posts/get/page?page_size=" +
        process.env.NEXT_PUBLIC_PAGE
    );
    const dataProps = await res.json();
    const resProject = await fetch(
      process.env.NEXT_PUBLIC_API + "/projects/get"
    );
    const dataProject = await resProject.json();
    return {
      props: {
        dataProps,
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

export default Posts;
