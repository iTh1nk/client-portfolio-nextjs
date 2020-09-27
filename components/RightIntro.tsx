import React, { useState } from 'react';

interface Props {

}

const RightIntro: React.FunctionComponent<Props> = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <div>
      <h1>We0m Custom RightIntro</h1>
    </div>
  )
}

export default RightIntro