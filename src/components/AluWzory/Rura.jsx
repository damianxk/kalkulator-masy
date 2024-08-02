import React, { useState, useEffect, useCallback } from "react";
import {FloatLabel} from 'primereact/floatlabel';
import {InputNumber} from 'primereact/inputnumber';

const Rura = ({ density, onWeightChange }) => {
  const [diameter, setDiameter] = useState("");
  const [thickness, setThickness] = useState("");
  const [length, setLength] = useState("");
  const [count,setCount] = useState(1);

  const calculateWeight = useCallback(() => {
    const outerRadius = diameter / 2; // cm
    const innerRadius = outerRadius - thickness; // cm
    const volume =
      Math.PI *
      (Math.pow(outerRadius, 2) - Math.pow(innerRadius, 2)) *
      length *
      100; // cm^3
    const weight = (volume * density) / 100000 * count; // kg
    const weightPerMeter =
      (Math.PI *
        (Math.pow(outerRadius, 2) - Math.pow(innerRadius, 2)) *
        100 *
        density) /
      100000 * count; // kg/m

    onWeightChange({
      totalWeight: weight.toFixed(3),
      totalWeightPerKg: weightPerMeter.toFixed(3),
    });
  }, [diameter, thickness, length, count, density, onWeightChange]);

  useEffect(() => {
    calculateWeight();
  }, [calculateWeight]);

  return (
    <div className="obliczenia">
      <section style={{ display: "flex", gap: "50px" }}>
        <FloatLabel className="textinputlabel">
          <InputNumber id="diameter-input" value={diameter} onChange={(e) => setDiameter(e.value)} />
          <label htmlFor="diameter-input">[A] Wpisz średnicę (mm)</label>
        </FloatLabel>
        <FloatLabel className="textinputlabel">
          <InputNumber id="thickness-input" value={thickness} onChange={(e) => setThickness(e.value)} />
          <label htmlFor="thickness-input">[B] Wpisz grubość ścianki (mm)</label>
        </FloatLabel>
        <FloatLabel className="textinputlabel">
          <InputNumber id="length-input" value={length} onChange={(e) => setLength(e.value)} />
          <label htmlFor="length-input">[C] Wpisz długość rury (m)</label>
        </FloatLabel>
        <FloatLabel className="textinputlabel">
          <InputNumber id="count-input" value={count} onChange={(e) => setCount(e.value)} />
          <label htmlFor="count-input">Wpisz ilość (szt.)</label>
        </FloatLabel>
      </section>
    </div>
  );
};

export default Rura;
