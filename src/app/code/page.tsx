import React from "react";
import NavBar from "../components/Navbar";
import styles from "../page.module.css";
import { promises as fs } from "fs";

const EventCode = async () => {
  const file = await fs.readFile(
    process.cwd() + "/public/assets/code.json",
    "utf8"
  );
  const data = JSON.parse(file);

  const randomCodeZalo =
    data.zalo[Math.floor(Math.random() * data.zalo.length)];

  return (
    <div className="pt-20">
      <>
        <div className={styles.contents}>
          <div></div>
          <h1>HƯỚNG DẪN NHẬN FULL CODE TÂN THỦ</h1>
          <div className={styles.buttons}>
            <button>CODE ZALO</button>
            <span>:</span>
            <p>{randomCodeZalo}</p>
          </div>

          <br />
          {/* <div className={styles.buttons}>
            <button>XS</button>
            <button>XS</button>
          </div> */}
        </div>
      </>
    </div>
  );
};

export default EventCode;
