import React, { useState, useEffect } from "react";

const PretKwadratowy = ({ density, onWeightChange }) => {
  const [sideLength, setSideLength] = useState("");
  const [length, setLength] = useState("");
  const [totalWeight, setTotalWeight] = useState(0);
  const [totalWeightPerKg, setTotalWeightPerKg] = useState(0);

  useEffect(() => {
    calculateWeight();
  }, [sideLength / 100, length, density]);

  const calculateWeight = () => {
    const volume = Math.pow(sideLength / 100, 2) * length * 10; // Obliczam objętość
    const weight = volume * density; // Obliczam masę
    const volumeMeter = Math.pow(sideLength / 100, 2) * 10 * density; // Waga na metr

    setTotalWeight(`${weight.toFixed(3)}`);
    setTotalWeightPerKg(`${volumeMeter.toFixed(3)}`);
    // Przekazanie wyników do komponentu nadrzędnego
    onWeightChange({
      totalWeight: weight.toFixed(3),
      totalWeightPerKg: volumeMeter.toFixed(3),
    });
  };

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
