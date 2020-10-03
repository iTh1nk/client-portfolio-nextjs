import React, { useState } from 'react';

interface Props {

}

const AdminProjectHome: React.FunctionComponent<Props> = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <div>
      <h1>We0m Custom AdminProjectHome</h1>
    </div>
  )
}

export default AdminProjectHome