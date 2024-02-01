import React, { useState, useEffect } from "react";

const PretSzescio = ({ density, onWeightChange }) => {
  const [sideLength, setSideLength] = useState();
  const [length, setLength] = useState();
  const [totalWeight, setTotalWeight] = useState();
  const [totalWeightPerMeter, setTotalWeightPerMeter] = useState();

  useEffect(() => {
    calculateWeight();
  }, [sideLength / 100, length, density]);

  const calculateWeight = () => {
    const sanitizedSideLength = sanitize(sideLength);
    // Obliczanie powierzchni sześciokątnego pręta
    const surfaceArea =
      (sanitizedSideLength * sanitizedSideLength * 0.8660311) / 10;

    // Obliczanie objętości pręta
    const volume = surfaceArea * length;

    // Obliczanie masy pręta
    const weight = (volume * density) / 100;
    const weightPerMeter = (surfaceArea * 100 * density) / 10000;

    setTotalWeight(`${weight.toFixed(3)}`);
    setTotalWeightPerMeter(`${weightPerMeter.toFixed(3)}`);
    onWeightChange({
      totalWeight: weight.toFixed(3),
      totalWeightPerKg: weightPerMeter.toFixed(3),
    });
  };

  // Funkcja do czyszczenia danych
  const sanitize = (value) => {
    // Implementuj swoją funkcję sanitize, np. parsowanie wartości do liczby
    return parseFloat(value);
  };

  return (
    <div className="obliczenia">
      <section style={{ display: "flex", gap: "50px" }}>
        <label>
          <input
            inputMode="decimal"
            type="number"
            placeholder="[A] Wpisz przekątną pręta (mm)"
            value={sideLength}
            onChange={(e) => {
              setSideLength(e.target.value);
            }}
            name="przekatna"
          />
        </label>
        <label>
         
          <input
            inputMode="decimal"
            type="number"
            placeholder="[B] Wpisz długość pręta (m)"
            value={length}
            onChange={(e) => {
              setLength(e.target.value);
            }}
            name="dlugosc"
          />
        </label>
      </section>

    </div>
  );
};

export default PretSzescio;
