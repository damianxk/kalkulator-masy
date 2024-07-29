import React, { useState, useEffect, useCallback } from "react";

const PretKwadratowy = ({ density, onWeightChange }) => {
  const [sideLength, setSideLength] = useState("");
  const [length, setLength] = useState("");

  const calculateWeight = useCallback(() => {
    const volume = Math.pow(sideLength / 100, 2) * length * 10; // Obliczam objętość
    const weight = volume * density; // Obliczam masę
    const volumeMeter = Math.pow(sideLength / 100, 2) * 10 * density; // Waga na metr

    // Przekazanie wyników do komponentu nadrzędnego
    onWeightChange({
      totalWeight: weight.toFixed(3),
      totalWeightPerKg: volumeMeter.toFixed(3),
    });
  }, [sideLength, length, density, onWeightChange]);

  useEffect(() => {
    calculateWeight();
  }, [calculateWeight]);

  return (
    <div className="obliczenia">
      <section style={{ display: "flex", gap: "50px" }}>
        <label>
          <input
            inputMode="decimal"
            type="number"
            placeholder="[A] Wpisz długość boku pręta (mm)"
            value={sideLength}
            onChange={(e) => {
              setSideLength(e.target.value);
            }}
            name="bok"
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

export default PretKwadratowy;
