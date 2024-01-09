import React from "react";
import { endoData } from "../Scripts/endoList";
import "../Styles/Depatment.css";
import "../Styles/Table.css";
import Department from "../../Components/Department";"../Components/Depatment"

function EndoDep() {
    return (
        <Department 
        title ="Эндокринология"
        text = "абоба"
        data = {endoData}/>
    );
  }
  
  export default EndoDep;