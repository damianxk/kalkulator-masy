import React, { useState, useEffect, useCallback } from "react";
import {FloatLabel} from 'primereact/floatlabel';
import {InputNumber} from 'primereact/inputnumber';

const PretOkraglyAlu = ({ density, onWeightChange }) => {
  const [diameter, setDiameter] = useState("");
  const [length, setLength] = useState("");
  const [count,setCount] = useState(1);

  const calculateWeight = useCallback(() => {
    const radius = diameter / 2; // przeliczam średnicę na promień
    const volume = Math.PI * Math.pow(radius, 2) * length * 100 * density; // Masa
    const volumeKg = volume / 100000;
    const volumeMeter = (Math.PI * Math.pow(radius, 2) * 1 * density) / 1000;

    onWeightChange({
      totalWeight: volumeKg.toFixed(3) * count,
      totalWeightPerKg: volumeMeter.toFixed(3) * count,
    });
  }, [diameter, length, density, onWeightChange]);

  useEffect(() => {
    calculateWeight();
  }, [calculateWeight]);

  return (
    <div className="obliczenia">
      <section style={{ display: "flex", gap: "50px" }}>
        
        <FloatLabel className="textinputlabel">
          <InputNumber id="diameter-input" value={diameter} onValueChange={(e) => setDiameter(e.value)} />
          <label htmlFor="diameter-input">[A] Wpisz średnicę pręta (mm)</label>
        </FloatLabel>
        <FloatLabel className="textinputlabel">
          <InputNumber id="length-input" value={length} onValueChange={(e) => setLength(e.value)} />
          <label htmlFor="length-input">[B] Wpisz długość pręta (m)</label>
        </FloatLabel>
        <FloatLabel className="textinputlabel">
          <InputNumber id="count-input" value={count} onValueChange={(e) => setCount(e.value)} />
          <label htmlFor="count-input">Wpisz ilość (szt.)</label>
        </FloatLabel>
      </section>
    </div>
  );
};

export default PretOkraglyAlu;
