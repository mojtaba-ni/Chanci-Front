import { Button } from "@mantine/core";
import React from "react";
import style from "./header.module.scss";

const Header = () => {
  return (
    <div className={style.wrapper}>
      <h4 className={style.headerTitle}>Want to become an event sponsor?</h4>
      <Button className={style.btn}>
        {" "}
        Become a student ambassador at your university!
      </Button>
    </div>
  );
};

export default Header;
