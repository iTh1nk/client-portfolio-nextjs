import React, { useState } from "react";
import Profile from "../../components/Profile";
import { Container } from "../../layout/Container";
import ReactPaginate from "react-paginate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
} from "@fortawesome/free-solid-svg-icons";

interface Props {}

const Projects: React.FunctionComponent<Props> = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // const handlePageClick = (e) => {
  //   dispatch({ type: "pageChange", page: e.selected });
  // };

  return (
    <Container title="Projects">
      <div className="md:flex md:flex-row md:justify-center md:max-w-4xl md:m-auto">
        <div className="md:w-1/2">
          <Profile />
        </div>
        <div className="inline md:hidden">
          <hr className="mt-3 mb-6" />
        </div>
        <div className="flex flex-col justify-between md:w-full md:mt-0">
          <div className="mb-6">
            <div className="font-semibold text-2xl mb-3">
              Projects
            </div>
            <div className="font-mono">
              Brief introduction of projects. Welcome to my new home! It is
              built with Next.js as frontend and Rust Actix handles backend.
            </div>
          </div>
          <ReactPaginate
            previousLabel={<FontAwesomeIcon icon={faAngleDoubleLeft} />}
            nextLabel={<FontAwesomeIcon icon={faAngleDoubleRight} />}
            breakLabel={"..."}
            pageCount={5}
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

export default Projects;
