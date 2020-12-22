import React, { useEffect } from "react";
import HomeHeader from "../../layouts/HomeHeader";
import HomeLayout from "../../layouts/HomeLayout";
import "./styles.scss";

function HomePage() {
  useEffect(() => {
    const header = document.getElementById("myHeader");
    const sticky = header.offsetTop;
    const scrollCallBack = window.addEventListener("scroll", () => {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    });
    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };
  }, []);

  return (
    <div>
      <header id="myHeader" className="header">
        <HomeHeader />
      </header>
      <HomeLayout />
    </div>
  );
}

export default HomePage;
