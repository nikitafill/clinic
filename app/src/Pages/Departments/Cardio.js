import React from "react";
import { cardioData } from "../../Scripts/cardioList";
//import "../../Styles/Depatment.css";
import "../../Styles/Table.css";
import Department from "../../Components/Department";

function CardioDep() {
    return (
        <Department 
        title ="Кардиология"
        text = "абоба"
        data = {cardioData}/>
    );
  }
  
  export default CardioDep;