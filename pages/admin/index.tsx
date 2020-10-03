import React, { useState } from "react";
import AdminContainer from "../../components/AdminContainer";

interface Props {}

const Admin: React.FunctionComponent<Props> = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <AdminContainer>
      <div>We0m Custom Admin We0m Custom Admin We0m Custom Admin</div>
    </AdminContainer>
  );
};

export default Admin;
