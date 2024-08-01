import React, { useState, useEffect, useCallback } from "react";
import {FloatLabel} from 'primereact/floatlabel';
import {InputNumber} from 'primereact/inputnumber';

const PretSzescio = ({ density, onWeightChange }) => {
  const [sideLength, setSideLength] = useState();
  const [length, setLength] = useState();
  const [count,setCount] = useState(1);

  const calculateWeight = useCallback(() => {
    const sanitizedSideLength = sanitize(sideLength);
    // Obliczanie powierzchni sześciokątnego pręta
    const surfaceArea =
      (sanitizedSideLength * sanitizedSideLength * 0.8660311) / 10;

    // Obliczanie objętości pręta
    const volume = surfaceArea * length;

    // Obliczanie masy pręta
    const weight = (volume * density) / 100;
    const weightPerMeter = (surfaceArea * 100 * density) / 10000;

    onWeightChange({
      totalWeight: weight.toFixed(3) * count,
      totalWeightPerKg: weightPerMeter.toFixed(3) * count,
    });
  }, [sideLength, length, density, onWeightChange]);

  useEffect(() => {
    calculateWeight();
  }, [calculateWeight]);

  // Funkcja do czyszczenia danych
  const sanitize = (value) => {
    // Implementuj swoją funkcję sanitize, np. parsowanie wartości do liczby
    return parseFloat(value);
  };

  return (
    <div className="obliczenia">
      <section style={{ display: "flex", gap: "50px" }}>
        <FloatLabel className="textinputlabel">
          <InputNumber id="sideLengt-input" value={sideLength} onValueChange={(e) => setSideLength(e.value)} />
          <label htmlFor="sideLengt-input">[A] Wpisz przekątną pręta (mm)</label>
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

export default PretSzescio;
