import { useState, useMemo, useEffect } from "react";
import Button from "../Fields/Button1";
import Table from "../Fields/Table";

import AddUser from "./../User/AddUser";
import Dialog from "../Fields/Dialog";

export default function UserList() {
  const [data, setData] = useState([]);
  const [itemsPerPage, setItemPerPage] = useState(10);
  const [totalitems, setTotalItems] = useState(null);
  const [isPreviousDisable, setisPreviousDisable] = useState();
  const [page, setPage] = useState(1);
  const headers = [
    {
      title: "ID",
      value: "id",
    },
    {
      title: "Name",
      value: "name",
    },
    {
      title: "Email",
      value: "email",
    },
    {
      title: "Role",
      value: "role",
    },
  ];
  //total page next ->disable page=1 prev- disable page
  useEffect(() => {
    async function fetchUserList() {
      const response = await fetch(`http://localhost:3000/api/user`, {
        method: "GET",
      });
      const dataList = await response.json();
      const total = dataList.length;
      setData(dataList);
      setTotalItems(total);
    }

    fetchUserList();
  }, [data]);

  const displayData = useMemo(() => {
    const start = (page - 1) * itemsPerPage;
    return data.slice(start, start + itemsPerPage);
  }, [data]);
  function selectItemPerpage(e) {
    setItemPerPage(e.target.value);
  }
  function next() {
    console.log(page);
    const page_no = page + 1;
    setPage(page_no);
  }
  function previous() {
    console.log(page);
    setPage(page - 1);
  }
  const [open, setOpen] = useState(false);
  function handleOpenForm() {
    setOpen(true);
  }
  function handleClose() {
    window.location.reload();
    setOpen(false);
  }

  return (
    <div>
      <div
        align="right"
        style={{ position: "relative", right: "30px", top: "10px" }}
      >
        <Button name="Add User" clickFunction={handleOpenForm} />
      </div>
      <Dialog visible={open}>
        <AddUser handleClose={handleClose} />
      </Dialog>
      <h2 className="tabTitle">User List</h2>
      <Table
        headers={headers}
        list={displayData}
        title="Users"
        next={next}
        previous={previous}
        selectItemPerpage={selectItemPerpage}
        totalitems={totalitems}
        itemsPerPage={itemsPerPage}
        page={page}
        isPreviousDisable={isPreviousDisable}
      />
    </div>
  );
}
