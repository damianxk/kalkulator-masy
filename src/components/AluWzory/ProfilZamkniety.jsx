import React, { useState, useEffect, useCallback } from "react";
import {FloatLabel} from 'primereact/floatlabel';
import {InputNumber} from 'primereact/inputnumber';

const ProfilZamkniety = ({ density, onWeightChange }) => {
  const [x, setX] = useState("");
  const [y, setY] = useState("");
  const [zBox, setZBox] = useState("");
  const [length, setLength] = useState("");
  const [count, setCount] = useState(1);

  const calculateWeight = useCallback(() => {
    const outerVolume = x * y * 1000;
    const innerVolume = (x - 2 * zBox) * (y - 2 * zBox) * 1000;
    const volume = outerVolume - innerVolume;
    const weightPerMeter = (volume * density) / 1000000 * count; // Assuming the density of aluminium is density g/cm^3
    const totalWeight = weightPerMeter * length * count;

    onWeightChange({
      totalWeight: totalWeight.toFixed(3),
      totalWeightPerKg: weightPerMeter.toFixed(3),
    });
  }, [x, y, zBox, length, count, density, onWeightChange]);

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
          <InputNumber id="x-input" value={x} onChange={(e) => setX(e.value)} />
          <label htmlFor="x-input">[A] Wpisz szerokość profilu (mm)</label>
        </FloatLabel>
        <FloatLabel className="textinputlabel">
          <InputNumber id="y-input" value={y} onChange={(e) => setY(e.value)} />
          <label htmlFor="y-input">[B] Wpisz wysokość profilu (mm)</label>
        </FloatLabel>
        <FloatLabel className="textinputlabel">
          <InputNumber id="zBox-input" value={zBox} onChange={(e) => setZBox(e.value)} />
          <label htmlFor="zBox-input">[C] Wpisz grubość ścianki (mm)</label>
        </FloatLabel>
        <FloatLabel className="textinputlabel">
          <InputNumber id="length-input" value={length} onChange={(e) => setLength(e.value)} />
          <label htmlFor="length-input">[D] Wpisz długość profilu (m)</label>
        </FloatLabel>
        <FloatLabel className="textinputlabel">
          <InputNumber id="count-input" value={count} onChange={(e) => setCount(e.value)} />
          <label htmlFor="count-input">Wpisz ilość (szt.)</label>
        </FloatLabel>
      </section>
    </div>
  );
};

export default ProfilZamkniety;
