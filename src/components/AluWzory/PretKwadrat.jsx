import React, { useState, useEffect, useCallback } from "react";
import {FloatLabel} from 'primereact/floatlabel';
import {InputNumber} from 'primereact/inputnumber';

const PretKwadratowy = ({ density, onWeightChange }) => {
  const [sideLength, setSideLength] = useState("");
  const [length, setLength] = useState("");
  const [count,setCount] = useState(1);

  const calculateWeight = useCallback(() => {
    const volume = Math.pow(sideLength / 100, 2) * length * 10; // Obliczam objętość
    const weight = volume * density * count; // Obliczam masę
    const volumeMeter = Math.pow(sideLength / 100, 2) * 10 * density * count; // Waga na metr

    // Przekazanie wyników do komponentu nadrzędnego
    onWeightChange({
      totalWeight: weight.toFixed(3),
      totalWeightPerKg: volumeMeter.toFixed(3),
    });
  }, [sideLength, length, count, density, onWeightChange]);

  useEffect(() => {
    calculateWeight();
  }, [calculateWeight]);

  return (
    <div className="obliczenia">
      <section style={{ display: "flex", gap: "50px" }}>
        
        <FloatLabel className="textinputlabel">
          <InputNumber id="sideLength-input" value={sideLength} onChange={(e) => setSideLength(e.value)} />
          <label htmlFor="sideLength-input">[A] Wpisz długość boku pręta (mm)</label>
        </FloatLabel>
        <FloatLabel className="textinputlabel">
          <InputNumber id="length-input" value={length} onChange={(e) => setLength(e.value)} />
          <label htmlFor="length-input">[B] Wpisz długość pręta (m)</label>
        </FloatLabel>
        <FloatLabel className="textinputlabel">
          <InputNumber id="count-input" value={count} onChange={(e) => setCount(e.value)} />
          <label htmlFor="count-input">Wpisz ilość (szt.)</label>
        </FloatLabel>
      </section>
    </div>
  );
};

export default PretKwadratowy;
