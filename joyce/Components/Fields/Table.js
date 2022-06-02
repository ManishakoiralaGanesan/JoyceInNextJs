import styles from "../../styles/Table.module.css";
import { useEffect, useState } from "react";
export default function Table(props) {
  // const headers = props.tableProps.headers;
  //const list = props.tableProps.list;
  const {
    headers,
    list,
    next,
    previous,
    isNextDisable,
    isPreviousDisable,
    selectItemPerpage,
    totalitems,
    itemsPerPage,
    page,
  } = props;

  return (
    <div>
      <table className={styles.joyceTable}>
        <thead className={styles.joyceTabHead}>
          <tr className={styles.joyceTabRow}>
            {headers.map((header) => {
              return (
                <th className={styles.joyceTabTh} key={header.title}>
                  {header.title}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody className={styles.joyceTabBody}>
          {list.map((item, i) => {
            return (
              <tr key={i} className={styles.joyceTabRow}>
                {headers.map((header, i) => {
                  return (
                    <td key={i} className={styles.joyceTabTd}>
                      {item[header.value]}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className={styles.tableFooterContainer}>
        <div className={styles.tableFooter}>
          <div className={styles.tableItem}>
            <div style={{ width: "50%" }}>
              <label>Rows Per Page:</label>
            </div>
            <div style={{ width: "50%" }}>
              <select
                className={styles.tabItemsSelect}
                onChange={selectItemPerpage}
                defaultValue={itemsPerPage}
              >
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
              </select>
            </div>
          </div>
          <div className={styles.tableItemCount}>1-10 of {totalitems}</div>
          <div className={styles.tableFooterBtns}>
            <button
              onClick={previous}
              className={styles.previousBtn}
              disabled={isPreviousDisable}
            >
              {" "}
              {"<"}
            </button>
            <button
              onClick={next}
              className={styles.nextButton}
              disabled={isNextDisable}
            >
              {" "}
              {">"}{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
