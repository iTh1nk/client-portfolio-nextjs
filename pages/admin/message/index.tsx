import React, { useState } from 'react';

interface Props {

}

const AdminMessageHome: React.FunctionComponent<Props> = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <div>
      <h1>We0m Custom AdminMessageHome</h1>
    </div>
  )
}

export default AdminMessageHome