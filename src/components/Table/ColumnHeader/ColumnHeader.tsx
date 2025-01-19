import { FC } from "react";

import x from "../img/x.svg";
import css from "./ColumnHeader.module.css";
import { FilterOptions, Row, SortOptions } from "../Table";

interface IProps {
  columnName: string;
  dataIndex: keyof Omit<Row, "id">;
  sortOptions: SortOptions;
  setSortOptions: (sortOptions: SortOptions) => void;
  filterOptions: FilterOptions[];
  setFilterOptions: (filterOptions: FilterOptions[]) => void;
}

const ColumnHeader: FC<IProps> = ({
  columnName,
  dataIndex,
  sortOptions,
  setSortOptions,
  filterOptions,
  setFilterOptions,
}) => {
  const ascSymbol = sortOptions.asc ? "△" : "▽";

  return (
    <>
      <button
        className={css.btnSort}
        onClick={() =>
          setSortOptions({ name: sortOptions.name, asc: !sortOptions.asc })
        }
      >
        <span className={css.title}>{columnName}</span>
        {sortOptions.name === dataIndex && (
          <span className={css.ascSymbol}>{ascSymbol}</span>
        )}
      </button>
      <div className={css.inputWrapper}>
        <input
          type="text"
          className={css.inputFilter}
          id={dataIndex}
          name={dataIndex}
          value={
            filterOptions.filter((filter) => filter.name === dataIndex)[0]
              ?.filter
          }
          onChange={(event) => {
            setFilterOptions([
              ...filterOptions.filter((filter) => filter.name !== dataIndex),
              { name: dataIndex, filter: event.target.value },
            ]);
          }}
        />
        <button
          className={css.clearInputBtn}
          type="button"
          onClick={() => {
            console.log("Clear input");
            setFilterOptions([
              ...filterOptions.filter((filter) => filter.name !== dataIndex),
              { name: dataIndex, filter: "" },
            ]);
          }}
        >
          <img src={x} alt="Clear" width={24} height={24} />
        </button>
      </div>
    </>
  );
};

export default ColumnHeader;
