import React, { useState } from "react";
import { Container } from "../../layout/Container";

interface Props {}

const Projects: React.FunctionComponent<Props> = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <Container title="Projects">
      <div>We0m Custom Projects</div>
    </Container>
  );
};

export default Projects;
