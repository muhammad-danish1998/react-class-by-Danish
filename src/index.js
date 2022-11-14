import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { MediaCard } from "./MediaCard";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <App
      name="Danish Tanoli"
      age={24}
      btn_name="Delete Btn"
      student={{ s_name: "Ayesha", age: 22 }}
    />
    {/* <MediaCard 
    isOpen = {false}
    title = "Jadu"
    body = "This Movie is New"
    imgUrl = "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2019-honda-civic-sedan-1558453497.jpg?crop=1xw:0.9997727789138833xh;center,top&resize=480:*"
    /> */}
  </>
);
