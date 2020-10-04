import React, { useState } from "react";
import AdminContainer from "../../components/AdminContainer";

interface Props {}

const Admin: React.FunctionComponent<Props> = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <AdminContainer>
      <div>Admin Homepage</div>
    </AdminContainer>
  );
};

export default Admin;
