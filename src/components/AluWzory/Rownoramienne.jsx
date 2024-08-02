import React, { useState, useEffect, useCallback } from "react";
import {FloatLabel} from 'primereact/floatlabel';
import {InputNumber} from 'primereact/inputnumber';

const KatownikiRownoramienne = ({ density, onWeightChange }) => {
  const [x, setX] = useState("");
  const [zBox, setZBox] = useState("");
  const [length, setLength] = useState("");
  const [count,setCount] =useState(1);

  const calculateWeight = useCallback(() => {
    const calculatedWeight = ((x * zBox + (x - zBox) * zBox) * density) / 1000;
    const weight = calculatedWeight * count;
    const weightPerMeter = weight * length * count;

    onWeightChange({
      totalWeight: weight.toFixed(3),
      totalWeightPerKg: weightPerMeter.toFixed(3),
    });
  }, [x, zBox, length, count, density, onWeightChange]);

  useEffect(() => {
    calculateWeight();
  }, [calculateWeight]);

  return (
    <div className="obliczenia">
      <section style={{ display: "flex", gap: "50px" }}>
        <FloatLabel className="textinputlabel">
          <InputNumber id="x-input" value={x} onChange={(e) => setX(e.value)} />
          <label htmlFor="x-input">[A] Wpisz szerokość (mm)</label>
        </FloatLabel>
        <FloatLabel className="textinputlabel">
          <InputNumber id="zBox-input" value={zBox} onChange={(e) => setZBox(e.value)} />
          <label htmlFor="zBox-input">[B] Wpisz grubość ścianki (mm)</label>
        </FloatLabel>
        <FloatLabel className="textinputlabel">
          <InputNumber id="length-input" value={length} onChange={(e) => setLength(e.value)} />
          <label htmlFor="length-input">[C] Wpisz długość kątownika (m)</label>
        </FloatLabel>
        <FloatLabel className="textinputlabel">
          <InputNumber id="count-input" value={count} onChange={(e) => setCount(e.value)} />
          <label htmlFor="count-input">Wpisz ilość (szt.)</label>
        </FloatLabel>
      </section>
    </div>
  );
};

export default KatownikiRownoramienne;
