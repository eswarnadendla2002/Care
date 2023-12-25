import React, { useState } from "react";
import Transtibial from "./transibi_patient";
import TransFerPatient from "./transfermal_patient";

const Sidebar = () => {
  const [selectedPatient, setSelectedPatient] = useState("");

  const handleSelectChange = (event) => {
    setSelectedPatient(event.target.value);
  };

  return (
    <div>
      <aside className="sidebar">
        <div className="navigator">
          <select value={selectedPatient} onChange={handleSelectChange}>
            <option value="Transfemoral Patient">Transfemoral Patient</option>
            <option value="Transtibial Patient">Transtibial Patient</option>
          </select>
        </div>

        {selectedPatient === "Transtibial Patient" ? (
          <Transtibial />
        ) : (
          <TransFerPatient />
        )}
      </aside>
    </div>
  );
};

export default Sidebar;
