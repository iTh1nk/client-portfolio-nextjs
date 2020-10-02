import React, { useState } from "react";
import Profile from "../../components/Profile";
import { Container } from "../../layout/Container";
import ReactPaginate from "react-paginate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

interface Props {
  dataProps: { results: Array<Post>; total: number };
}

type Post = {
  id: string;
  title: string;
  content: string;
  created_at: Date;
};

const Projects: React.FunctionComponent<Props> = ({ dataProps }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // const handlePageClick = (e) => {
  //   dispatch({ type: "pageChange", page: e.selected });
  // };

  return (
    <Container title="Projects">
      <div className="md:flex md:flex-row md:justify-center md:max-w-6xl md:m-auto py-8 px-6 md:px-20">
        <div className="md:w-1/2">
          <Profile />
        </div>
        <div className="inline md:hidden">
          <hr className="mt-3 mb-6" />
        </div>
        <div className="flex flex-col justify-between md:w-full md:mt-0">
          {dataProps?.results?.map((item, idx) => (
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
          <ReactPaginate
            previousLabel={<FontAwesomeIcon icon={faAngleDoubleLeft} />}
            nextLabel={<FontAwesomeIcon icon={faAngleDoubleRight} />}
            breakLabel={"..."}
            pageCount={Math.ceil(
              dataProps?.total / parseInt(process.env.NEXT_PUBLIC_PAGE)
            )}
            marginPagesDisplayed={2}
            pageRangeDisplayed={2}
            // onPageChange={handlePageClick}
            breakClassName={"break-me"}
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
        "/projects/get/page?page_size=" +
        process.env.NEXT_PUBLIC_PAGE
    );
    const dataProps = await res.json();
    return {
      props: {
        dataProps,
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

export default Projects;
