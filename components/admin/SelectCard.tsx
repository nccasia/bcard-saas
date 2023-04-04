import Link from "next/link";
import React from "react";

import { getCard } from "../../api/admin/apiCard";

function SelectCard(): JSX.Element {
  const [users, setUsers] = React.useState<any>([]);
  React.useEffect(() => {
    getCard().then((main) => {
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
      <Link href="/card/createcard">
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
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users
            ? users.map((item: any) => {
                //console.log((item.card));
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
                      <Link href={`/card/${item.id}`}>
                        <button className="bg-gray-400 text-white rounded-md px-4 py-2 hover:bg-gray-600 my-2 active:bg-green-900">
                          Edit
                        </button>
                      </Link>
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
