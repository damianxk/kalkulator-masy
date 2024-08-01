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
    const weightPerMeter = (volume * density) / 1000000; // Assuming the density of aluminium is density g/cm^3
    const totalWeight = weightPerMeter * length;

    onWeightChange({
      totalWeight: totalWeight.toFixed(3) * count,
      totalWeightPerKg: weightPerMeter.toFixed(3) * count,
    });
  }, [x, y, zBox, length, density, onWeightChange]);

  useEffect(() => {
    calculateWeight();
  }, [calculateWeight]);

  return (
    <div className="obliczenia">
      <section style={{ display: "flex", gap: "50px" }}>
        
        <FloatLabel className="textinputlabel">
          <InputNumber id="x-input" value={x} onValueChange={(e) => setX(e.value)} />
          <label htmlFor="x-input">[A] Wpisz szerokość profilu (mm)</label>
        </FloatLabel>
        <FloatLabel className="textinputlabel">
          <InputNumber id="y-input" value={y} onValueChange={(e) => setY(e.value)} />
          <label htmlFor="y-input">[B] Wpisz wysokość profilu (mm)</label>
        </FloatLabel>
        <FloatLabel className="textinputlabel">
          <InputNumber id="zBox-input" value={zBox} onValueChange={(e) => setZBox(e.value)} />
          <label htmlFor="zBox-input">[C] Wpisz grubość ścianki (mm)</label>
        </FloatLabel>
        <FloatLabel className="textinputlabel">
          <InputNumber id="length-input" value={length} onValueChange={(e) => setLength(e.value)} />
          <label htmlFor="length-input">[D] Wpisz długość profilu (m)</label>
        </FloatLabel>
        <FloatLabel className="textinputlabel">
          <InputNumber id="count-input" value={count} onValueChange={(e) => setCount(e.value)} />
          <label htmlFor="count-input">Wpisz ilość (szt.)</label>
        </FloatLabel>
      </section>
    </div>
  );
};

export default ProfilZamkniety;
