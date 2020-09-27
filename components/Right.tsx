import React, { useState } from 'react';

interface Props {

}

const Right: React.FunctionComponent<Props> = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <div>
      <h1>We0m Custom Right</h1>
    </div>
  )
}

export default Right