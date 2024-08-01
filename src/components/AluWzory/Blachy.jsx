import React, { useState, useEffect, useCallback } from "react";

const Blachy = ({ density, onWeightChange }) => {
  const [plotid, setPlotid] = useState("");
  const [storis, setStoris] = useState("");
  const [ilgis, setIlgis] = useState("");
  const [count, setCount] = useState(1);

  const calculateWeight = useCallback(() => {
    let volume = (plotid / 1000) * storis * (ilgis / 1000) * density;
    const weight =  count * volume;

    onWeightChange({
      totalBlacha: weight.toFixed(3)
    });
  }, [plotid, storis, ilgis, count, density, onWeightChange]);

  useEffect(() => {
    calculateWeight();
  }, [calculateWeight]);

  return (
    <div className="obliczenia">
      <section style={{ display: "flex", gap: "50px" }}>
        <label name="szerokosc">
          <input
            inputMode="decimal"
            type="number"
            placeholder="[A] Wpisz szerokość (mm)"
            value={storis}
            onChange={(e) => {
              setStoris(e.target.value);
            }}
            name="szerokosc"
          />
        </label>
        <label>
          <input
            inputMode="decimal"
            type="number"
            placeholder="[B] Wpisz grubość (mm)"
            value={plotid}
            onChange={(e) => {
              setPlotid(e.target.value);
            }}
            name="grubosc"
            />
        </label>
        <label>
          <input
            inputMode="decimal"
            type="number"
            placeholder="[C] Wpisz długość (mm)"
            value={ilgis}
            onChange={(e) => {
              setIlgis(e.target.value);
            }}
            name="dlugosc"
            />
        </label>
        <label>
          <p className="countlabel">Ilość:</p>
          <input
            inputMode="decimal"
            type="number"
            placeholder="Wpisz ilość (szt.)"
            value={count}
            onChange={(e) => {
              setCount(e.target.value);
            }}
            name="ilosc"
            />
        </label>
      </section>
    </div>
  );
};

export default Blachy;
