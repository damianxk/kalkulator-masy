import React, { useState, useEffect, useCallback } from "react";

const Plaskownik = ({ density, onWeightChange }) => {
  const [width, setWidth] = useState("");
  const [thickness, setThickness] = useState("");
  const [length, setLength] = useState("");

  const calculateWeight = useCallback(() => {
    const volume = width * thickness * length * 100; // cm^3
    const weight = (volume * density) / 100000; // kg
    const weightPerMeter = (width * thickness * 1 * 10 * density) / 10000; // kg/m

    onWeightChange({
      totalWeight: weight.toFixed(3),
      totalWeightPerKg: weightPerMeter.toFixed(3),
    });
  }, [width, thickness, length, density, onWeightChange]);

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
            placeholder="[A] Wpisz szerokość płaskownika (mm)"
            value={width}
            onChange={(e) => {
              setWidth(e.target.value);
            }}
            name="szerokosc"
          />
        </label>
        <label>
          <input
            inputMode="decimal"
            type="number"
            placeholder="[B] Wpisz grubość płaskownika (mm)"
            value={thickness}
            onChange={(e) => {
              setThickness(e.target.value);
            }}
            name="grubosc"
          />
        </label>
        <label>
          <input
            inputMode="decimal"
            type="number"
            placeholder="[C] Wpisz długość płaskownika(m)"
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

export default Plaskownik;
