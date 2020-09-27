import React, { useState } from 'react';

interface Props {

}

const Project: React.FunctionComponent<Props> = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <div>
      <h1>We0m Custom Project</h1>
    </div>
  )
}

export default Project