import "./App.css";
import Table, { DataSource } from "./components/Table/Table";
import { usersData } from "./data/users";

function App() {
  const data = usersData as DataSource[];

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
    <div>
      <Table dataSource={data} columns={columns} />
    </div>
  );
}

export default App;
