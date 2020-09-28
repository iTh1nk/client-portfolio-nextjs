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

  return (
    <Container title="Projects">
      <div>
        <Profile />
      </div>
      <hr className="mt-3 mb-6" />
      <div className="flex flex-col justify-between">
        <div className="mb-6">
          <div className="font-semibold text-2xl">Welcome Home</div>
          <div className="py-2 text-gray-500 text-sm">September 2020 20:20</div>
          <div className="font-mono">
            Welcome to my new home! It is built with Next.js as frontend and
            Rust Actix handles backend.
          </div>
        </div>
        <ReactPaginate
          previousLabel={<FontAwesomeIcon icon={faAngleDoubleLeft} />}
          nextLabel={<FontAwesomeIcon icon={faAngleDoubleRight} />}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={5}
          marginPagesDisplayed={2}
          pageRangeDisplayed={2}
          // onPageChange={handlePageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
        />
      </div>
    </Container>
  );
};

export default Projects;
