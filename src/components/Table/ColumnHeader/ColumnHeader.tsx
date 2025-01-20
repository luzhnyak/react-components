import { FC } from "react";

import x from "../img/x.svg";
import css from "./ColumnHeader.module.css";
import { Column, FilterOptions, SortOptions } from "../Table";

interface IProps {
  column: Column;
  showFilter: boolean;
  sortOptions: SortOptions;
  setSortOptions: (sortOptions: SortOptions) => void;
  filterOptions: FilterOptions[];
  setFilterOptions: (filterOptions: FilterOptions[]) => void;
}

const ColumnHeader: FC<IProps> = ({
  column,
  showFilter,
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
        onClick={() => {
          if (column.type !== "number" && column.type !== "string") return;
          setSortOptions({ name: column.dataIndex, asc: !sortOptions.asc });
        }}
        title={`Sort by ${column.title}`}
      >
        <span className={css.title}>{column.title}</span>
        {sortOptions.name === column.dataIndex && (
          <span className={css.ascSymbol}>{ascSymbol}</span>
        )}
      </button>
      {showFilter && (
        <div className={css.inputWrapper}>
          <input
            type="text"
            className={css.inputFilter}
            id={column.dataIndex}
            name={column.dataIndex}
            value={
              filterOptions.filter(
                (filter) => filter.name === column.dataIndex
              )[0]?.filter
            }
            onChange={(event) => {
              setFilterOptions([
                ...filterOptions.filter(
                  (filter) => filter.name !== column.dataIndex
                ),
                { name: column.dataIndex, filter: event.target.value },
              ]);
            }}
          />
          <button
            className={css.clearInputBtn}
            type="button"
            onClick={() => {
              setFilterOptions([
                ...filterOptions.filter(
                  (filter) => filter.name !== column.dataIndex
                ),
                { name: column.dataIndex, filter: "" },
              ]);
            }}
            title="Clear filter"
          >
            <img src={x} alt="Clear filter" width={24} height={24} />
          </button>
        </div>
      )}
    </>
  );
};

export default ColumnHeader;
