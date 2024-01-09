import React, { useState, useEffect } from "react";

const Blachy = () => {
  const [plotid, setPlotid] = useState("");
  const [storis, setStoris] = useState("");
  const [ilgis, setIlgis] = useState("");
  const [totalWeight, setTotalWeight] = useState(0);

  useEffect(() => {
    calculateWeight();
  }, [plotid / 1000, storis, ilgis / 1000]);

  const calculateWeight = () => {
    let volume = (plotid / 1000) * storis * (ilgis / 1000) * 8;
    const weight = volume;

    setTotalWeight(`${weight.toFixed(3)}`);
  };

  return (
    <div className="obliczenia">
      <section style={{ display: "flex", gap: "50px" }}>
        <label>
          Grubość (mm):
          <input
            type="number"
            placeholder="wpisz grubość (mm)"
            value={plotid}
            onChange={(e) => {
              setPlotid(e.target.value);
            }}
          />
        </label>
        <br />
        <label>
          Szerokość (mm):
          <input
            type="number"
            placeholder="wpisz szerokość (mm)"
            value={storis}
            onChange={(e) => {
              setStoris(e.target.value);
            }}
          />
        </label>
        <br />
        <label>
          Długość (mm):
          <input
            type="number"
            placeholder="wpisz długość (mm)"
            value={ilgis}
            onChange={(e) => {
              setIlgis(e.target.value);
            }}
          />
        </label>
      </section>
      <br />
      <p>
        Masa arkusza:{" "}
        <span style={{ color: "red", fontSize: "20px" }}>{totalWeight}</span>{" "}
        kg/arkusz
      </p>
    </div>
  );
};

export default Blachy;
