import Front from "./components/Front/Front";
import Navbar from "./components/navbar/Navbar";
import React from "react";
import "./page.css";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Front></Front>
    </>
  );
}
