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
    const weight = (volume * density) / 100000; // kg
    const weightPerMeter =
      (Math.PI *
        (Math.pow(outerRadius, 2) - Math.pow(innerRadius, 2)) *
        100 *
        density) /
      100000; // kg/m

    onWeightChange({
      totalWeight: weight.toFixed(3) * count,
      totalWeightPerKg: weightPerMeter.toFixed(3) * count,
    });
  }, [diameter, thickness, length, density, onWeightChange]);

  useEffect(() => {
    calculateWeight();
  }, [calculateWeight]);

  return (
    <div className="obliczenia">
      <section style={{ display: "flex", gap: "50px" }}>
        <label>
          <input
            inputMode="decimal"
            type="number"
            placeholder="[A] Wpisz średnicę (mm)"
            value={diameter}
            onChange={(e) => {
              setDiameter(e.target.value);
            }}
            name="srednica"
          />
        </label>
        <FloatLabel className="textinputlabel">
          <InputNumber id="diameter-input" value={length} onValueChange={(e) => setDiameter(e.value)} />
          <label htmlFor="diameter-input">[A] Wpisz średnicę (mm)</label>
        </FloatLabel>
        <FloatLabel className="textinputlabel">
          <InputNumber id="thickness-input" value={length} onValueChange={(e) => setThickness(e.value)} />
          <label htmlFor="thickness-input">[B] Wpisz grubość ścianki (mm)</label>
        </FloatLabel>
        <FloatLabel className="textinputlabel">
          <InputNumber id="length-input" value={length} onValueChange={(e) => setLength(e.value)} />
          <label htmlFor="length-input">[C] Wpisz długość rury (m)</label>
        </FloatLabel>
        <FloatLabel className="textinputlabel">
          <InputNumber id="count-input" value={count} onValueChange={(e) => setCount(e.value)} />
          <label htmlFor="count-input">Wpisz ilość (szt.)</label>
        </FloatLabel>
      </section>
    </div>
  );
};

export default Rura;
