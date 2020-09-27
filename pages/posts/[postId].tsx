import React, { useState } from 'react';

interface Props {

}

const Post: React.FunctionComponent<Props> = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <div>
      <h1>We0m Custom Post</h1>
    </div>
  )
}

export default Post