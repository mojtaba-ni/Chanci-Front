import React from "react";
import Logo from "@public/LogoNav.svg";
import Image from "next/image";
import style from "./navbarMain.module.scss";
import { Button, Group } from "@mantine/core";

const NavbarMain = () => {
  return (
    <div className={style.wrapper}>
      <ul className={style.navList}>
        <li>
          <Image src={Logo} alt="NGNlogo" />
        </li>
        <li style={{ marginLeft: "1rem" }}>Home</li>
        <li>Employers</li>
        <li>Candidates</li>
        <li>Events</li>
        <li>Academy</li>
        <li>About us</li>
      </ul>
      <Group className={style.btnGroup}>
        <Button className={style.btnLogin}>Log in</Button>
        <Button className={style.btnGet}>Get in Touch</Button>
      </Group>
    </div>
  );
};

export default NavbarMain;
