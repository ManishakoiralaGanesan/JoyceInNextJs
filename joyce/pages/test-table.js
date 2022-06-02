import { useMemo, useState } from "react";

const Table = () => {
  const itemsPerPage = 10;
  const [page, setPage] = useState(1);

  const data = [
    { name: "Rara", profile: "profile1", comment: "comra" },
    { name: "Rara", profile: "profile1", comment: "comra" },
    { name: "Dada", profile: "profile2", comment: "comda" },
    { name: "Gaga", profile: "profile1", comment: "comga" },
    { name: "Mama", profile: "profile3", comment: "comma" },
    { name: "Papa", profile: "profile4", comment: "compa" },
    { name: "Rara", profile: "profile1", comment: "comra" },
    { name: "Dada", profile: "profile2", comment: "comda" },
    { name: "Gaga", profile: "profile1", comment: "comga" },
    { name: "Mama", profile: "profile3", comment: "comma" },
    { name: "Papa", profile: "profile4", comment: "compa" },
    { name: "Rara", profile: "profile1", comment: "comra" },
    { name: "Dada", profile: "profile2", comment: "comda" },
    { name: "Gaga", profile: "profile1", comment: "comga" },
    { name: "Mama", profile: "profile3", comment: "comma" },
    { name: "Papa", profile: "profile4", comment: "compa" },
    { name: "Dada", profile: "profile2", comment: "comda" },
    { name: "Gaga", profile: "profile1", comment: "comga" },
    { name: "Mama", profile: "profile3", comment: "comma" },
    { name: "Papa", profile: "profile4", comment: "compa" },
    // ...
  ];

  const columns = [
    { id: 1, title: "Name", accessor: "name" },
    { id: 2, title: "Profile", accessor: "profile" },
    { id: 3, title: "Comment", accessor: "comment" },
  ];
  const displayData = useMemo(() => {
    const start = (page - 1) * itemsPerPage;
    return data.slice(start, start + itemsPerPage);
  }, [data]);

  return (
    <>
      <button onClick={() => setPage(page - 1)}> Prev Page </button>
      <button onClick={() => setPage(page + 1)}> Next Page </button>
      <table>
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col.id}>{col.title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {displayData.map((user, i) => (
            <tr key={i}>
              {columns.map((col) => (
                <td key={col.id}>{user[col.accessor]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
export default Table;
