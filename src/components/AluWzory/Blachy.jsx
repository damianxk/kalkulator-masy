import React, { useState, useEffect, useCallback } from "react";
import { FloatLabel} from "primereact/floatlabel";
import { InputNumber } from "primereact/inputnumber";

const Blachy = ({ density, onWeightChange }) => {
  const [plotid, setPlotid] = useState("");
  const [storis, setStoris] = useState("");
  const [ilgis, setIlgis] = useState("");
  const [count, setCount] = useState(1);

  const calculateWeight = useCallback(() => {
    let volume = (plotid / 1000) * storis * (ilgis / 1000) * density;
    const weight = volume * count;
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
        <FloatLabel className="textinputlabel">
          <InputNumber id="storis-input" value={storis} onChange={(e) => setStoris(e.value)} />
          <label htmlFor="storis-input">[B] Wpisz grubość (mm)</label>
        </FloatLabel>
        <FloatLabel className="textinputlabel">
          <InputNumber id="plotid-input" value={plotid} onChange={(e) => setPlotid(e.value)} />
          <label htmlFor="plotid-input">[B] Wpisz grubość (mm)</label>
        </FloatLabel>
        <FloatLabel className="textinputlabel">
          <InputNumber id="ilgis-input" value={ilgis} onChange={(e) => setIlgis(e.value)} />
          <label htmlFor="ilgis-input">[C] Wpisz długość (mm)</label>
        </FloatLabel>
        <FloatLabel className="textinputlabel">
          <InputNumber id="count-input" value={count} onChange={(e) => setCount(e.value)} />
          <label htmlFor="count-input">Wpisz ilość (szt.)</label>
        </FloatLabel>
      </section>
    </div>
  );
};

export default Blachy;
