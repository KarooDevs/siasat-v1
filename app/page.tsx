"use client";

import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  if (typeof window !== "undefined") {
    window.location.href = "/murid/dashboard/";
  }

  return null;
  // return (
  //   <main>
  //     <h1>Welcome to homepage</h1>
  //   </main>
  // );
}
