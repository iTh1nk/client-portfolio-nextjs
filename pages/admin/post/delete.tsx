import React, { useState } from "react";
import AdminContainer from "../../../components/AdminContainer";

interface Props {}

const AdminPostDelete: React.FunctionComponent<Props> = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <AdminContainer>
      <h1>We0m Custom AdminPostDelete</h1>
    </AdminContainer>
  );
};

export default AdminPostDelete;
