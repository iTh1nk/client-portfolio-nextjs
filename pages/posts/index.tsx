import React, { useState } from "react";
import { Container } from "../../components/Container";
import ReactPaginate from "react-paginate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
} from "@fortawesome/free-solid-svg-icons";
import PagePost from "../../components/PagePost";

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
  author: string;
  content: string;
  created_at: Date;
};

const CONTENT_LENGTH = 200;

const Posts: React.FunctionComponent<Props> = ({ dataProps, dataProject }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handlePageClick = (e) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setCurrentPage(e.selected + 1);
  };

  return (
    <Container
      title="Posts"
      content={"All Posts"}
      dataProps={dataProject?.slice(0, 3)}
    >
      <div className="">
        <div className="inline md:hidden">
          <hr className="mt-3 mb-6" />
        </div>
        <div className="flex flex-col justify-between md:w-full md:mt-0">
          <PagePost dataProps={dataProps} currentPage={currentPage} />
          <div className="hidden">
            {Math.ceil(
              dataProps?.total / parseInt(process.env.NEXT_PUBLIC_PAGE)
            ) > currentPage ? (
              <PagePost dataProps={dataProps} currentPage={currentPage + 1} />
            ) : null}
          </div>
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
            onPageChange={handlePageClick}
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
        process.env.NEXT_PUBLIC_PAGE +
        "&page=1"
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
