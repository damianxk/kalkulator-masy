import React, { useState, useEffect, useCallback } from "react";

const Rura = ({ density, onWeightChange }) => {
  const [diameter, setDiameter] = useState("");
  const [thickness, setThickness] = useState("");
  const [length, setLength] = useState("");

  const calculateWeight = useCallback(() => {
    const outerRadius = diameter / 2; // cm
    const innerRadius = outerRadius - thickness; // cm
    const volume =
      Math.PI *
      (Math.pow(outerRadius, 2) - Math.pow(innerRadius, 2)) *
      length *
      100; // cm^3
    const weight = (volume * density) / 100000; // kg
    const weightPerMeter =
      (Math.PI *
        (Math.pow(outerRadius, 2) - Math.pow(innerRadius, 2)) *
        100 *
        density) /
      100000; // kg/m

    onWeightChange({
      totalWeight: weight.toFixed(3),
      totalWeightPerKg: weightPerMeter.toFixed(3),
    });
  }, [diameter, thickness, length, density, onWeightChange]);

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
            placeholder="[A] Wpisz średnicę (mm)"
            value={diameter}
            onChange={(e) => {
              setDiameter(e.target.value);
            }}
            name="srednica"
          />
        </label>
        <label>
          <input
            inputMode="decimal"
            type="number"
            placeholder="[B] Wpisz grubość ścianki (mm)"
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
            placeholder="[C] Wpisz długość rury (m)"
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

export default Rura;
