import React, { useState, useEffect, useCallback } from "react";

const ProfilZamknietyKwadratowy = ({ density, onWeightChange }) => {
  const [width, setWidth] = useState("");
  const [thickness, setThickness] = useState("");
  const [length, setLength] = useState("");

  const calculateWeight = useCallback(() => {
    const outerVolume = Math.pow(width / 1000, 2) * 1000;
    const innerVolume = Math.pow((width - 2 * thickness) / 1000, 2) * 1000;
    const volume = outerVolume - innerVolume;
    const weightPerMeter = volume * density; // Assuming the density of aluminium is density g/cm^3
    const totalWeight = weightPerMeter * length;

    onWeightChange({
      totalWeight: totalWeight.toFixed(3),
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
            placeholder="[A] Wpisz szerokość profilu (mm)"
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
            placeholder="[C] Wpisz długość profilu (m)"
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

export default ProfilZamknietyKwadratowy;
