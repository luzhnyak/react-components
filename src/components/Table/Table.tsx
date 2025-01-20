import ColumnHeader from "./ColumnHeader/ColumnHeader";
import css from "./Table.module.css";
import { FC, ReactElement, useEffect, useState } from "react";

export type Row = Record<string, string | number | ReactElement | undefined>;

export type Column = {
  title: string;
  dataIndex: string;
  key: string;
  type: string;
};

export type SortOptions = { name: string; asc: boolean };
export type FilterOptions = { name: string; filter: string };

type Props = {
  rows: Row[];
  columns: Column[];
  showFilter?: boolean;
};

const Table: FC<Props> = ({ rows, columns, showFilter = true }) => {
  const [filterOptions, setFilterOptions] = useState<FilterOptions[]>(
    columns.map((column: Column) => ({
      name: column.dataIndex,
      filter: "",
    }))
  );
  const [sortOptions, setSortOptions] = useState<SortOptions>({
    name: columns[0].dataIndex,
    asc: true,
  });
  const [filteredRows, setFilteredRows] = useState<Row[]>(rows);
  const [displayedRows, setDisplayedRows] = useState<Row[]>([]);

  useEffect(() => {
    if (!showFilter) return;
    setFilteredRows(
      rows?.filter((row: Row) => {
        return filterOptions.every((filterOption: FilterOptions) => {
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
  }, [rows, columns, filterOptions, showFilter]);

  useEffect(() => {
    const sortColumn = columns.find(
      (column: Column) => column.dataIndex === sortOptions.name
    );
    if (!sortColumn) return;
    if (sortColumn.type !== "number" && sortColumn.type !== "string") return;

    if (sortOptions.asc) {
      setDisplayedRows(
        [...filteredRows].sort((a, b) => {
          const aValue = a[sortOptions.name] || "";
          const bValue = b[sortOptions.name] || "";

          if (sortColumn.type === "number") {
            return Number(aValue) - Number(bValue);
          } else if (sortColumn.type === "string") {
            return aValue.toString().localeCompare(bValue.toString());
          } else {
            return 0;
          }
        })
      );
    } else {
      setDisplayedRows(
        [...filteredRows].sort((a, b) => {
          const aValue = a[sortOptions.name] || "";
          const bValue = b[sortOptions.name] || "";

          if (sortColumn.type === "number") {
            return Number(bValue) - Number(aValue);
          } else if (sortColumn.type === "string") {
            return bValue.toString().localeCompare(aValue.toString());
          } else {
            return 0;
          }
        })
      );
    }
  }, [filteredRows, sortOptions, columns]);

  return (
    <div className={css.wrapper}>
      <table className={css.table} cellPadding={0} cellSpacing={0}>
        <thead>
          <tr className={css.row}>
            {columns.map((column: Column, key: number) => (
              <th className={css.cell} key={key}>
                <ColumnHeader
                  column={column}
                  showFilter={showFilter}
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
