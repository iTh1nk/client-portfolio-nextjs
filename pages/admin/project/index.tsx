import React, { useState } from "react";
import AdminContainer from "../../../components/AdminContainer";

interface Props {}

const AdminProjectHome: React.FunctionComponent<Props> = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <AdminContainer>
      <h1>We0m Custom AdminProjectHome</h1>
    </AdminContainer>
  );
};

export default AdminProjectHome;
