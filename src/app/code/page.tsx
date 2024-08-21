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

  const fullCode = [
    { id: "1", title: "zalo", text: "Zalo", code: randomCodeZalo },
    { id: "2", title: "loantin", text: "Loan Tin", code: randomCodeZalo },
    { id: "3", title: "fancung", text: "Fan Cứng", code: randomCodeZalo },
  ];

  return (
    <div className="pt-20">
      <>
        <div className={styles.contents}>
          <div></div>
          <h1>HƯỚNG DẪN NHẬN FULL CODE</h1>
          {fullCode.map((item) => (
            <div key={item.id}>
              <div className={styles.buttons}>
                <button>CODE {item.text}</button>
                <span>:</span>
                <button>{item.code}</button>
              </div>
              <br />
            </div>
          ))}
        </div>
      </>
    </div>
  );
};

export default EventCode;
