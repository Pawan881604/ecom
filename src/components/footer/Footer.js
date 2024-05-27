import React from "react";
import Widgets_1 from "./Widgets_1";
import { Widgets_2 } from "./Widgets_2";
import { Widgets_3 } from "./Widgets_3";
import { Widgets_4 } from "./Widgets_4";
import { Copyright } from "./Copyright";

export const Footer = () => {
  return (
    <>
      <footer>
        <div className="container mx-auto p-2" style={{ maxWidth: "1000px" }}>
          <div className="flex gap-4 ">
            <Widgets_1 />
            <Widgets_2 />
            <Widgets_3 />
            <Widgets_4 />
          </div>
          <Copyright />
        </div>
      </footer>
    </>
  );
};
