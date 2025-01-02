import React from "react";
import Logo from "@public/LogoNGN.svg";
import Image from "next/image";
import style from "./navbar.module.scss";
import { Button, Group } from "@mantine/core";

const Navbar = () => {
  return (
    <div className={style.wrapper}>
      <ul className={style.navList}>
        <li>
          <Image src={Logo} alt="NGNlogo" />
        </li>
        <li>Home</li>
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

export default Navbar;
