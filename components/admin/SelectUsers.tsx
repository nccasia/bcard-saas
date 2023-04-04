import React from "react";

import { getUsers } from "../../api/admin/apiUsers";

function SelectUsers(): JSX.Element {
  const [users, setUsers] = React.useState<any>([]);
  React.useEffect(() => {
    getUsers().then((data) => setUsers(data));
  }, []);

  return (
    <div
      style={{
        padding: "20px 0 0 0",
        border: "1px dotted #80808059",
        borderRadius: "10px",
      }}
    >
      <br></br>
      <table
        style={{
          width: "100%",
        }}
      >
        <thead>
          <tr
            style={{
              textAlign: "center",
              border: "1px dotted #80808059",
              backgroundColor: "#9ca3af94",
            }}
          >
            <th>Avatar</th>
            <th>Name</th>
            <th>Email</th>
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
                    <td style={{ display: "flex", justifyContent: "center" }}>
                      <img
                        src={item.image}
                        alt="empty"
                        width="50px"
                        height="50px"
                        style={{ borderRadius: "50%" }}
                      />
                    </td>
                    <td>
                      <p>{item.name}</p>
                    </td>
                    <td>
                      <p>{item.email}</p>
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

export default SelectUsers;
