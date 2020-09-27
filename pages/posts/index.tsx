import React, { useState } from "react";
import Profile from "../../components/Profile";
import { Container } from "../../layout/Container";

interface Props {}

const Posts: React.FunctionComponent<Props> = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <Container title="Posts">
      <div>
        <Profile />
      </div>
      <hr className="mt-3 mb-6" />
      <div>We0m Custom Posts</div>
    </Container>
  );
};

export default Posts;
