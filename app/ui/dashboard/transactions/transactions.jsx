import React from "react";
import styles from "./transactions.module.css";
import Image from "next/image";

function Transactions() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Latest Transactions</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                John Doe
              </div>
            </td>
            <td className={`${styles.status} ${styles.pending}`}>Pending</td>
            <td>10.02.2024</td>
            <td>$452,25</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                John Doe
              </div>
            </td>
            <td className={`${styles.status} ${styles.done}`}>Done</td>
            <td>10.02.2024</td>
            <td>$452,25</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                John Doe
              </div>
            </td>
            <td className={`${styles.status} ${styles.cancelled}`}>
              Cancelled
            </td>
            <td>10.02.2024</td>
            <td>$452,25</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Transactions;
