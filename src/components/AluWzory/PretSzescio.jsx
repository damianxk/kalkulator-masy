import React, { useState, useEffect, useCallback } from "react";

const PretSzescio = ({ density, onWeightChange }) => {
  const [sideLength, setSideLength] = useState();
  const [length, setLength] = useState();

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
      totalWeight: weight.toFixed(3),
      totalWeightPerKg: weightPerMeter.toFixed(3),
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
