import React from "react";
import Department from "../../Components/Department";
import "../../Styles/Table.css";
import "../../Styles/Department.css";

function EndoDep() {
  return (
    <Department
      title="Эндокринология"
      text={
        <p>
          <br />
          Эндокринология – раздел медицины, изучающий заболевания эндокринной
          системы. Сбои в работе надпочечников, щитовидной железы, нарушения
          обмена веществ – это повод обратиться к специалисту. Если вам
          необходим эндокринолог в Могилеве, запишитесь на консультацию в клинику
          «Health +» - высокая квалификация врача, внимательное отношение к
          каждому пациенту и доступные цены гарантированы.
          <br />
          <br />
          Эндокринная система обеспечивает регуляцию деятельности внутренних
          органов, а также координирует нормальный рост и развитие организма
          посредством гормонов. Дисфункция эндокринных желез является причиной
          распространенных болезней – ожирения, сахарного диабета, остеопороза и
          т. д. Пройти обследование целесообразно в профилактических целях и при
          обнаружении следующих симптомов:
          <br />
          - избыточный вес;
          <br />
          - дефицит массы тела;
          <br />
          - повышенная потливость;
          <br />
          - учащенное сердцебиение;
          <br />
          - выпадение волос;
          <br />
          - сухость кожи;
          <br />
          - жажда;
          <br />
          - отеки и т.д.
          <br />
          <br />
          Мы позаботились о том, чтобы создать комфортные условия – уютные
          кабинеты, вежливый медицинский персонал, наличие высокоточного
          диагностического оборудования. Вы самостоятельно выбираете время
          посещения, что позволяет значительно сэкономить время и избежать
          длительного ожидания. Современные диагностические средства позволяют
          вовремя выявить нарушения, подобрать безопасное и действенное лечение,
          а также проконтролировать его эффективность, оценивая состояние
          пациента в динамике. Опытные врачи-эндокринологи клиники «Health +»
          помогут скорректировать текущий образ жизни и подберут подходящую
          диету.
        </p>
      }
      data={"Эндокринология"}
    />
  );
}

export default EndoDep;
