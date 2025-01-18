import { FC } from "react";

import x from "../img/x.svg";
import css from "./ColumnHeader.module.css";
import { DataSource, Sort } from "../Table";

interface IProps {
  columnName: keyof Omit<DataSource, "id">;
  sort: Sort;
}

const ColumnHeader: FC<IProps> = ({ columnName, sort }) => {
  const ascSymbol = sort.asc ? "△" : "▽";

  return (
    <>
      <button className={css.btnSort} onClick={() => console.log(!sort.asc)}>
        <span className={css.title}>{columnName}</span>
        {sort.name === columnName && (
          <span className={css.ascSymbol}>{ascSymbol}</span>
        )}
      </button>
      <div className={css.inputWrapper}>
        <input
          type="text"
          className={css.inputFilter}
          id={columnName}
          name={columnName}
          value={"filters"}
          onChange={(event) => {
            console.log(event);
          }}
        />
        <button
          className={css.clearInputBtn}
          type="button"
          onClick={() => {
            console.log("Clear input");
          }}
        >
          <img src={x} alt="Clear" width={24} height={24} />
        </button>
      </div>
    </>
  );
};

export default ColumnHeader;
