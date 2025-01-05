"use client";
import React from "react";
import Image from "next/image";
import righRoom1 from "@public/image/file/righRoom.png";
import righRoom2 from "@public/image/file/righRoom2.png";
import styles from "./rightRoom.module.scss";

const RightRoom = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.leftSection}>
          <span className={styles.tag}>Events</span>
          <h2>Step Into the Right Room</h2>
          <p>
            Discover NGN events designed for your goals, including professional
            networking, co-founder matching, and industry-focused gatherings.
            Become part of the NGN network to access exclusive offers and expand
            your company's opportunities.
          </p>
          <button className={styles.button}>
            Explore Upcoming Events
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </button>
        </div>
        <div className={styles.rightSection}>
          <div className={styles.imageTop}>
            <Image
              src={righRoom1}
              alt="Networking Event"
              width={400}
              height={240}
            />
          </div>
          <div className={styles.imageBottom}>
            <Image
              src={righRoom2}
              alt="Conference Event"
              width={400}
              height={240}
            />
          </div>
        </div>
        <div className={styles.decorativeLine} />
      </div>
    </div>
  );
};

export default RightRoom;
