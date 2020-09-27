import React, { useState } from 'react';

interface Props {

}

const Posts: React.FunctionComponent<Props> = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <div>
      <h1>We0m Custom Posts</h1>
    </div>
  )
}

export default Posts