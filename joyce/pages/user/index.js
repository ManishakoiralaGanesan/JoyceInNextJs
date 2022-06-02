import Card from "../../Components/Fields/Card";
import UserList from "../../Components/User/UserList";
import { useCallback, useEffect, useMemo, useState } from "react";

export default function user() {
  const style = {
    margin: "20px",
    padding: "10px",
    transition: "0.3s",
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
  };

  return (
    <Card style={style}>
      <UserList />
    </Card>
  );
}
/*export async function getServerSideProps() {
  const response = await fetch(`http://localhost:3000/api/user`, {
    method: "GET",
  });
  const data = await response.json();
  return { props: { data } };
}*/
