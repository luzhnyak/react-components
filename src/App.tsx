import Table, { Row } from "./components/Table/Table";
import { usersData } from "./data/users";
import "./index.css";

function App() {
  const data = usersData as Row[];

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
  ];

  return (
    <div className="container">
      <Table rows={data} columns={columns} />
    </div>
  );
}

export default App;
