import "react-toastify/dist/ReactToastify.css";

import Link from "next/link";
import React from "react";
import { ToastContainer } from "react-toastify";

import { deleteCard, getCardAll } from "../../api/admin/apiCard";
import DeleteButton from "../button/DeleteButton";
function SelectCard(): JSX.Element {
  const [users, setUsers] = React.useState<any>([]);
  React.useEffect(() => {
    getCardAll().then((main) => {
      setUsers(main);
    });
  }, []);

  //console.log(users);

  return (
    <div
      style={{
        padding: "40px 0 0 0",
        border: "1px dotted #80808059",
        borderRadius: "10px",
      }}
    >
      <ToastContainer position="bottom-right" />
      <Link href="/cards/createcard">
        <button
          style={{ float: "right" }}
          className="bg-gray-400 text-white rounded-md px-4 py-2 hover:bg-gray-600 my-2 active:bg-green-900"
        >
          Create
        </button>
      </Link>
      <table
        style={{
          width: "100%",
        }}
      >
        <thead>
          <tr
            style={{
              textAlign: "center",
              border: "1px dotted gray",
              backgroundColor: "#9ca3af94",
            }}
          >
            <th>Id</th>
            <th>Name</th>
            <th>Active</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users
            ? users.map((item: any) => {
                return (
                  <tr
                    key={item.id}
                    style={{
                      border: "1px dotted #80808059",
                      textAlign: "center",
                    }}
                  >
                    <td>
                      <p>{item.id}</p>
                    </td>
                    <td>
                      <p>{item.name}</p>
                    </td>
                    <td>
                      <p>{String(item.image)}</p>
                    </td>
                    <td style={{ display: "flex", justifyContent: "center", gap: 3 }}>
                      <Link href={`/cards/${item.id}`}>
                        <button className="bg-gray-400 text-white rounded-md px-4 py-2 hover:bg-gray-600 my-2 active:bg-green-900">
                          Edit
                        </button>
                      </Link>
                      <DeleteButton
                        name={item?.name}
                        handelDelete={() => {
                          deleteCard(item?.id).then((main: any) => {
                            if (main) {
                              const list = users.filter((main1: any) => main1.id !== item?.id);
                              setUsers(list);
                            }
                          });
                        }}
                      />
                    </td>
                  </tr>
                );
              })
            : null}
        </tbody>
      </table>
    </div>
  );
}

export default SelectCard;
