import { useEffect, useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import styles from  "../styles/MainPage.module.css"

const {
  bob
} = styles

function MainPage() {

  return (
    <div>
      <Header />
      <div className={bob}>
        <h1>Main Page</h1>
      </div>
    </div>
  );
}

export default MainPage;
