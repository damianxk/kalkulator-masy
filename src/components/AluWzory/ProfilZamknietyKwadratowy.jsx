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
    const weightPerMeter = volume * density; // Assuming the density of aluminium is density g/cm^3
    const totalWeight = weightPerMeter * length;

    onWeightChange({
      totalWeight: totalWeight.toFixed(3) * count,
      totalWeightPerKg: weightPerMeter.toFixed(3) * count,
    });
  }, [width, thickness, length, density, onWeightChange]);

  useEffect(() => {
    calculateWeight();
  }, [calculateWeight]);

  return (
    <div className="obliczenia">
      <section style={{ display: "flex", gap: "50px" }}>
        <FloatLabel className="textinputlabel">
          <InputNumber id="width-input" value={width} onValueChange={(e) => setWidth(e.value)} />
          <label htmlFor="width-input">[A] Wpisz szerokość profilu (mm)</label>
        </FloatLabel>
        <FloatLabel className="textinputlabel">
          <InputNumber id="thickness-input" value={thickness} onValueChange={(e) => setThickness(e.value)} />
          <label htmlFor="thickness-input">[B] Wpisz grubość ścianki (mm)</label>
        </FloatLabel>
        <FloatLabel className="textinputlabel">
          <InputNumber id="length-input" value={length} onValueChange={(e) => setLength(e.value)} />
          <label htmlFor="length-input">[C] Wpisz długość profilu (m)</label>
        </FloatLabel>
        <FloatLabel className="textinputlabel">
          <InputNumber id="count-input" value={count} onValueChange={(e) => setCount(e.value)} />
          <label htmlFor="count-input">Wpisz ilość (szt.)</label>
        </FloatLabel>
      </section>
    </div>
  );
};

export default ProfilZamknietyKwadratowy;
