import Table from "./components/Table/Table";
import { columnsUsers, users } from "./data/users";
import { columnsFoodProducts, foodProducts } from "./data/foodProducts";

import "./index.css";
import { useState } from "react";
import Modal from "./components/Modal/Modal";
import { Popconfirm } from "./components/Popconfirm/Popconfirm";

function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="container">
      <button onClick={() => setShowModal(true)}>Open modal</button>
      <Popconfirm
        title="Видалиння елементу"
        description="Ви впевнені, що хочете видалити цей елемент?"
        onConfirm={() => console.log("Deleted")}
      >
        <button>Open Popconfirm</button>
      </Popconfirm>
      {showModal && <Modal onClose={() => setShowModal(false)}>Text</Modal>}
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
