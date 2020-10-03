import React, { useState } from 'react';

interface Props {

}

const AdminPostHome: React.FunctionComponent<Props> = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <div>
      <h1>We0m Custom AdminPostHome</h1>
    </div>
  )
}

export default AdminPostHome