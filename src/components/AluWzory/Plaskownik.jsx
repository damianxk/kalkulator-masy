import React, { useState, useEffect, useCallback } from "react";
import {FloatLabel} from 'primereact/floatlabel';
import {InputNumber} from 'primereact/inputnumber';

const Plaskownik = ({ density, onWeightChange }) => {
  const [width, setWidth] = useState("");
  const [thickness, setThickness] = useState("");
  const [length, setLength] = useState("");
  const [count, setCount] = useState(1);

  const calculateWeight = useCallback(() => {
    const volume = width * thickness * length * 100; // cm^3
    const weight = (volume * density) / 100000 * count; // kg
    const weightPerMeter = (width * thickness * 1 * 10 * density) / 10000 * count; // kg/m

    onWeightChange({
      totalWeight: weight.toFixed(3),
      totalWeightPerKg: weightPerMeter.toFixed(3),
    });
  }, [width, thickness, length, count, density, onWeightChange]);

  useEffect(() => {
    const handler = setTimeout(() => {
      calculateWeight();
    }, 100); // Opóźnienie 100ms

    return () => {
      clearTimeout(handler);
    };
  }, [calculateWeight]);

  return (
    <div className="obliczenia">
      <section style={{ display: "flex", gap: "50px" }}>
        <FloatLabel className="textinputlabel">
          <InputNumber id="width-input" value={width} onChange={(e) => setWidth(e.value)} />
          <label htmlFor="width-input">[A] Wpisz szerokość (mm)</label>
        </FloatLabel>
        <FloatLabel className="textinputlabel">
          <InputNumber id="thickness-input" value={thickness} onChange={(e) => setThickness(e.value)} />
          <label htmlFor="thickness-input">[B] Wpisz grubość (mm)</label>
        </FloatLabel>
        <FloatLabel className="textinputlabel">
          <InputNumber id="length-input" value={length} onChange={(e) => setLength(e.value)} />
          <label htmlFor="length-input">[C] Wpisz długość (m)</label>
        </FloatLabel>
        <FloatLabel className="textinputlabel">
          <InputNumber id="count-input" value={count} onChange={(e) => setCount(e.value)} />
          <label htmlFor="count-input">Wpisz ilość (szt.)</label>
        </FloatLabel>
      </section>
    </div>
  );
};

export default Plaskownik;
