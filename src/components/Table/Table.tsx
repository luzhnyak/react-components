import ColumnHeader from "./ColumnHeader/ColumnHeader";
import css from "./Table.module.css";
import { FC } from "react";
// import ColumnHeader from "../ColumnHeader/ColumnHeader";
// import { IUser } from "../../types";

export type DataSource = Record<string, string | number>;

type Column = {
  title: string;
  dataIndex: string;
  key: string;
};

export type Sort = { name: string; asc: boolean };

type Props = {
  dataSource: DataSource[];
  columns: Column[];
};

const Table: FC<Props> = ({ dataSource, columns }) => {
  // const users = data;
  // const [filteredUsers, setFilteredUsers] = useState<IUser[]>(users);
  // const [displayedUsers, setDisplayedUsers] = useState<IUser[]>([]);
  const sort: Sort = { name: "name", asc: true };
  // const filters = { name: "", username: "", email: "", phone: "" };

  // useEffect(() => {
  //   setFilteredUsers(
  //     users.filter((user: IUser) => {
  //       return (
  //         user.name.toLowerCase().includes(filters.name.toLowerCase()) &&
  //         user.username
  //           .toLowerCase()
  //           .includes(filters.username.toLowerCase()) &&
  //         user.email.toLowerCase().includes(filters.email.toLowerCase()) &&
  //         user.phone.toLowerCase().includes(filters.phone.toLowerCase())
  //       );
  //     })
  //   );
  // }, [filters, users]);

  // useEffect(() => {
  //   if (sort.asc) {
  //     setDisplayedUsers(
  //       [...filteredUsers].sort((a, b) => {
  //         return a[sort.name].toString().localeCompare(b[sort.name].toString());
  //       })
  //     );
  //   } else {
  //     setDisplayedUsers(
  //       [...filteredUsers].sort((a, b) => {
  //         return b[sort.name].toString().localeCompare(a[sort.name].toString());
  //       })
  //     );
  //   }
  // }, [filteredUsers, sort]);

  return (
    <div className={css.wrapper}>
      <table className={css.table} cellPadding={0} cellSpacing={0}>
        <thead>
          <tr className={css.row}>
            {columns.map(({ title, key }) => (
              <th className={css.cell} key={key}>
                <ColumnHeader columnName={title} sort={sort} />
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dataSource.map((row: DataSource, id) => {
            return (
              <tr key={id} className={css.row}>
                {columns.map(({ dataIndex, key }) => (
                  <td className={css.cell} key={key}>
                    {key in row && row[dataIndex as keyof DataSource]}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
