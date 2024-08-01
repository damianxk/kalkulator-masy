import React, { useState, useEffect, useCallback } from "react";
import {FloatLabel} from 'primereact/floatlabel';
import {InputNumber} from 'primereact/inputnumber';

const Katowniki = ({ density, onWeightChange }) => {
  const [x, setX] = useState("");
  const [y, setY] = useState("");
  const [zBox, setZBox] = useState("");
  const [length, setLength] = useState("");
  const [count, setCount] = useState(1);

  const calculateWeight = useCallback(() => {
    const calculatedWeight = ((x * zBox + (y - zBox) * zBox) * density) / 1000;
    const weight = calculatedWeight * count;
    const weightPerMeter = weight * length * count;

    onWeightChange({
      totalWeight: weight.toFixed(3),
      totalWeightPerKg: weightPerMeter.toFixed(3),
    });
  }, [x, y, zBox, length, density, onWeightChange]);

  useEffect(() => {
    calculateWeight();
  }, [calculateWeight]);

  return (
    <div className="obliczenia">
      <section style={{ display: "flex", gap: "50px" }}>
        
        <FloatLabel className="textinputlabel">
          <InputNumber id="X-input" value={x} onValueChange={(e) => setX(e.value)} />
          <label htmlFor="X-input">[A] Wpisz szerokość (mm)</label>
        </FloatLabel>
        <FloatLabel className="textinputlabel">
          <InputNumber id="Y-input" value={y} onValueChange={(e) => setY(e.value)} />
          <label htmlFor="Y-input">[B] Wpisz wysokość (mm)</label>
        </FloatLabel>
        <FloatLabel className="textinputlabel">
          <InputNumber id="zBox-input" value={length} onValueChange={(e) => setZBox(e.value)} />
          <label htmlFor="zBox-input">[C] Wpisz grubość ścianki (mm)</label>
        </FloatLabel>
        <FloatLabel className="textinputlabel">
          <InputNumber id="length-input" value={length} onValueChange={(e) => setLength(e.value)} />
          <label htmlFor="length-input">[D] Wpisz długość kątownika (m)</label>
        </FloatLabel>
        <FloatLabel className="textinputlabel">
          <InputNumber id="count-input" value={count} onValueChange={(e) => setCount(e.value)} />
          <label htmlFor="count-input">Wpisz ilość (szt.)</label>
        </FloatLabel>
      </section>
    </div>
  );
};

export default Katowniki;
