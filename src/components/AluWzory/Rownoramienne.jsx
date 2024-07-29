import React, { useState, useEffect, useCallback } from "react";

const KatownikiRownoramienne = ({ density, onWeightChange }) => {
  const [x, setX] = useState("");
  const [zBox, setZBox] = useState("");
  const [length, setLength] = useState("");

  const calculateWeight = useCallback(() => {
    const calculatedWeight = ((x * zBox + (x - zBox) * zBox) * density) / 1000;
    const weight = calculatedWeight;
    const weightPerMeter = weight * length;

    onWeightChange({
      totalWeight: weight.toFixed(3),
      totalWeightPerKg: weightPerMeter.toFixed(3),
    });
  }, [x, zBox, length, density, onWeightChange]);

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
            placeholder="[A] Wpisz szerokość (mm)"
            value={x}
            onChange={(e) => {
              setX(e.target.value);
            }}
            name="szerokosc"
          />
        </label>
        <label>
          <input
            inputMode="decimal"
            type="number"
            placeholder="[B] Wpisz grubość ścianki (mm)"
            value={zBox}
            onChange={(e) => {
              setZBox(e.target.value);
            }}
            name="grubosc"
          />
        </label>
        <label>
          <input
            inputMode="decimal"
            type="number"
            placeholder="[C] Wpisz długość kątownika (m)"
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

export default KatownikiRownoramienne;
