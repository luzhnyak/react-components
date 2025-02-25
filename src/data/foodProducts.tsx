import EditBtn from "../components/EditBtn/EditBtn";
import { Popconfirm } from "../components/Popconfirm/Popconfirm";

export const columnsFoodProducts = [
  {
    title: "Назва",
    dataIndex: "name",
    key: "name",
    type: "string",
  },
  {
    title: "Кількість",
    dataIndex: "quantity",
    key: "quantity",
    type: "number",
  },
  {
    title: "Ціна (грн)",
    dataIndex: "price",
    key: "price",
    type: "number",
  },
  {
    title: "Вага (грами)",
    dataIndex: "weight",
    key: "weight",
    type: "number",
  },
  {
    title: "Action",
    dataIndex: "action",
    key: "action",
    type: "component",
  },
];

export const foodProducts = [
  {
    name: "Яблуко",
    quantity: 50,
    price: 15.5,
    weight: 200,
    action: (
      <Popconfirm
        title="Видалиння елементу"
        description="Ви впевнені, що хочете видалити цей елемент?"
        onConfirm={() => console.log("Deleted")}
      >
        <EditBtn />
      </Popconfirm>
    ),
  },
  {
    name: "Хліб",
    quantity: 30,
    price: 25.0,
    weight: 500,
    action: (
      <Popconfirm
        title="Видалиння елементу"
        description="Ви впевнені, що хочете видалити цей елемент?"
        onConfirm={() => console.log("Deleted")}
      >
        <EditBtn />
      </Popconfirm>
    ),
  },
  {
    name: "Молоко",
    quantity: 20,
    price: 32.0,
    weight: 1000,
    action: (
      <Popconfirm
        title="Видалиння елементу"
        description="Ви впевнені, що хочете видалити цей елемент?"
        onConfirm={() => console.log("Deleted")}
      >
        <EditBtn />
      </Popconfirm>
    ),
  },
  {
    name: "Картопля",
    quantity: 100,
    price: 8.0,
    weight: 150,
    action: <EditBtn />,
  },
  {
    name: "Сир",
    quantity: 15,
    price: 200.0,
    weight: 300,
    action: <EditBtn />,
  },
  {
    name: "Яйця",
    quantity: 40,
    price: 3.5,
    weight: 60,
    action: <EditBtn />,
  },
  {
    name: "Морква",
    quantity: 70,
    price: 10.0,
    weight: 120,
    action: <EditBtn />,
  },
  {
    name: "Цукор",
    quantity: 25,
    price: 50.0,
    weight: 1000,
    action: <EditBtn />,
  },
  {
    name: "Олія соняшникова",
    quantity: 18,
    price: 75.0,
    weight: 920,
    action: <EditBtn />,
  },
  {
    name: "Банани",
    quantity: 60,
    price: 40.0,
    weight: 180,
    action: <EditBtn />,
  },
];
