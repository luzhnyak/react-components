import Table from "./components/Table/Table";
import { columnsUsers, users } from "./data/users";
import { columnsFoodProducts, foodProducts } from "./data/foodProducts";

import "./index.css";

function App() {
  return (
    <div className="container">
      <h2>Users</h2>
      <Table rows={users} columns={columnsUsers} />
      <h2>Food Products</h2>
      <Table
        rows={foodProducts}
        columns={columnsFoodProducts}
        showFilter={false}
      />
    </div>
  );
}

export default App;
