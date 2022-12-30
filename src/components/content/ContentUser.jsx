import React, { useContext } from "react";
import Style from "../../style/content.module.css";
import { Main, StoreContext } from "../cartBook/CartLibrary";
import { updateBook } from "../store/action";
import Context from "../store/Context";
import { useStore } from "../store/hook";

function Content(props) {
  return (
    <>

      <div style={props.style}>
        <div className={Style.contentUser}>
          <div className={Style.contentForYou1}>
            <Main />
          </div>
        </div>
      </div>
    </>
  );
}

export default Content;
