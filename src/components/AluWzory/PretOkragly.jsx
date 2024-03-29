import React, { useState, useEffect } from "react";

const PretOkraglyAlu = ({  density, onWeightChange  }) => {
  const [diameter, setDiameter] = useState("");
  const [length, setLength] = useState("");
  const [weightPerMeter, setWeightPerMeter] = useState(0);
  const [totalWeight, setTotalWeight] = useState(0);

  useEffect(() => {
    calculateWeight();
  }, [diameter, length, density]);

  const calculateWeight = () => {
    const radius = diameter / 2; // przeliczam średnicę na promień
    const volume = Math.PI * Math.pow(radius, 2) * length * 100 * density; // Masa
    const volumeKg = volume / 100000;
    const volumeMeter = (Math.PI * Math.pow(radius, 2) * 1 * density) / 1000;

    setWeightPerMeter(` ${volumeMeter.toFixed(3)}`);
    setTotalWeight(` ${volumeKg.toFixed(3)}`);
    onWeightChange({
      totalWeight: volumeKg.toFixed(3),
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
            placeholder="[A] Wpisz średnicę pręta (mm)"
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

export default PretOkraglyAlu;
