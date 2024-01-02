import React from "react";
import "../Styles/Price.css";
import Table from "./Table";
import { analysesData } from "../Scripts/analysesList";
import { cardioData } from "../Scripts/cardioList";
import { urolData } from "../Scripts/urolList";
import { gynaecData } from "../Scripts/gynaecList";
import { endoData } from "../Scripts/endoList";
import { surgeryData } from "../Scripts/surgeryList";
import { orthData } from "../Scripts/orthList";
import { neuroData } from "../Scripts/neuroList";

function PriceList() {
  return (
    <div className="price-section" id="prices">
          <div className="price-title-content">
            <h3 className="price-title">Цены
            </h3>
            <p className="price-description">
            Медицинский центр «ГЕНЕЗ» — оказывает услуги на платной основе в Могилеве.  
            Здесь вы получите квалифицированную помощь, а также консультации лучших специалистов по направлениям: 
            УЗИ, гинекология, урология, кардиология, эндокринология, психотерапия, функциональная диагностика, неврология, 
            офтальмология, хирургия и педиатрия.
            </p>
          </div>
          <div className="price-content">
            <Table
            title="Кардиология"
            data={cardioData}
            /> 
            <Table
            title="Неврология"
            data={neuroData}
            />
            <Table
            title="Ортопедия"
            data={orthData}
            />
            <Table
            title="Урология"
            data={urolData}
            />
            <Table
            title="Гинекология"
            data={gynaecData}
            />
            <Table
            title="Эндокринология"
            data={endoData}
            />
            <Table
            title="Хирургия"
            data={surgeryData}
            />
            <Table
            title="Ультразвуковая диагностика"
            data={analysesData}
            />
          </div>
    </div>
  );
}

export default PriceList;