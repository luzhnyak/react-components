import ColumnHeader from "./ColumnHeader/ColumnHeader";
import css from "./Table.module.css";
import { FC, useEffect, useState } from "react";
// import ColumnHeader from "../ColumnHeader/ColumnHeader";
// import { IUser } from "../../types";

export type Row = Record<string, string | number>;

type Column = {
  title: string;
  dataIndex: string;
  key: string;
};

export type SortOptions = { name: string; asc: boolean };
export type FilterOptions = { name: string; filter: string };

type Props = {
  rows: Row[];
  columns: Column[];
};

const Table: FC<Props> = ({ rows, columns }) => {
  // const users = data;
  const [filterOptions, setFilterOptions] = useState<FilterOptions[]>(
    columns.map((column: Column) => ({
      name: column.dataIndex,
      filter: "",
    }))
  );
  const [sortOptions, setSortOptions] = useState<SortOptions>({
    name: "name",
    asc: true,
  });
  const [filteredRows, setFilteredRows] = useState<Row[]>(rows);
  const [displayedRows, setDisplayedRows] = useState<Row[]>([]);

  // const filters = { name: "", username: "", email: "", phone: "" };

  useEffect(() => {
    console.log("filterOption.filter", filterOptions);

    setFilteredRows(
      rows?.filter((row: Row) => {
        return filterOptions.some((filterOption: FilterOptions) => {
          const value = row[filterOption.name as keyof Row];
          return (
            value &&
            value
              .toString()
              .toLowerCase()
              .includes(filterOption.filter.toLowerCase())
          );
        });
      })
    );
  }, [rows, columns, filterOptions]);
  //         user[filterOptions.name].toLowerCase().includes(filterOptions.filter.toLowerCase()) &&
  //         user.username
  //           .toLowerCase()
  //           .includes(filters.username.toLowerCase()) &&
  //         user.email.toLowerCase().includes(filters.email.toLowerCase()) &&
  //         user.phone.toLowerCase().includes(filters.phone.toLowerCase())
  //       );
  //     })
  //   );
  // }, [filters, users]);

  useEffect(() => {
    console.log("filteredRows", filteredRows);

    if (sortOptions.asc) {
      setDisplayedRows(
        [...filteredRows].sort((a, b) => {
          return a[sortOptions.name]
            .toString()
            .localeCompare(b[sortOptions.name].toString());
        })
      );
    } else {
      setDisplayedRows(
        [...filteredRows].sort((a, b) => {
          return b[sortOptions.name]
            .toString()
            .localeCompare(a[sortOptions.name].toString());
        })
      );
    }
  }, [filteredRows, sortOptions]);

  return (
    <div className={css.wrapper}>
      <table className={css.table} cellPadding={0} cellSpacing={0}>
        <thead>
          <tr className={css.row}>
            {columns.map(({ title, dataIndex, key }) => (
              <th className={css.cell} key={key}>
                <ColumnHeader
                  columnName={title}
                  dataIndex={dataIndex}
                  sortOptions={sortOptions}
                  setSortOptions={setSortOptions}
                  filterOptions={filterOptions}
                  setFilterOptions={setFilterOptions}
                />
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {displayedRows.map((row: Row, id: number) => {
            return (
              <tr key={id} className={css.row}>
                {columns.map(({ dataIndex, key }) => (
                  <td className={css.cell} key={key}>
                    {key in row && row[dataIndex as keyof Row]}
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
