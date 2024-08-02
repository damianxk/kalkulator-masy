import React, { useState, useEffect, useCallback } from "react";
import {FloatLabel} from 'primereact/floatlabel';
import {InputNumber} from 'primereact/inputnumber';

const ProfilZamknietyKwadratowy = ({ density, onWeightChange }) => {
  const [width, setWidth] = useState("");
  const [thickness, setThickness] = useState("");
  const [length, setLength] = useState("");
  const [count, setCount] = useState(1);

  const calculateWeight = useCallback(() => {
    const outerVolume = Math.pow(width / 1000, 2) * 1000;
    const innerVolume = Math.pow((width - 2 * thickness) / 1000, 2) * 1000;
    const volume = outerVolume - innerVolume;
    const weightPerMeter = volume * density * count; // Assuming the density of aluminium is density g/cm^3
    const totalWeight = weightPerMeter * length * count;

    onWeightChange({
      totalWeight: totalWeight.toFixed(3),
      totalWeightPerKg: weightPerMeter.toFixed(3),
    });
  }, [width, thickness, length, count, density, onWeightChange]);

  useEffect(() => {
    calculateWeight();
  }, [calculateWeight]);

  return (
    <div className="obliczenia">
      <section style={{ display: "flex", gap: "50px" }}>
        <FloatLabel className="textinputlabel">
          <InputNumber id="width-input" value={width} onChange={(e) => setWidth(e.value)} />
          <label htmlFor="width-input">[A] Wpisz szerokość profilu (mm)</label>
        </FloatLabel>
        <FloatLabel className="textinputlabel">
          <InputNumber id="thickness-input" value={thickness} onChange={(e) => setThickness(e.value)} />
          <label htmlFor="thickness-input">[B] Wpisz grubość ścianki (mm)</label>
        </FloatLabel>
        <FloatLabel className="textinputlabel">
          <InputNumber id="length-input" value={length} onChange={(e) => setLength(e.value)} />
          <label htmlFor="length-input">[C] Wpisz długość profilu (m)</label>
        </FloatLabel>
        <FloatLabel className="textinputlabel">
          <InputNumber id="count-input" value={count} onChange={(e) => setCount(e.value)} />
          <label htmlFor="count-input">Wpisz ilość (szt.)</label>
        </FloatLabel>
      </section>
    </div>
  );
};

export default ProfilZamknietyKwadratowy;
