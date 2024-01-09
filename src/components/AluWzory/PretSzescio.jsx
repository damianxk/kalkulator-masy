import React, { useState, useEffect } from "react";

const PretSzescio = () => {
  const [sideLength, setSideLength] = useState(0);
  const [length, setLength] = useState(1);
  const [totalWeight, setTotalWeight] = useState(0);
  const [totalWeightPerMeter, setTotalWeightPerMeter] = useState(0);

  useEffect(() => {
    calculateWeight();
  }, [sideLength / 100, length]);

  const calculateWeight = () => {
    const sanitizedSideLength = sanitize(sideLength);
    // Obliczanie powierzchni sześciokątnego pręta
    const surfaceArea =
      (sanitizedSideLength * sanitizedSideLength * 0.8660311) / 10;

    // Obliczanie objętości pręta
    const volume = surfaceArea * length;

    // Obliczanie masy pręta
    const weight = (volume * 2.7) / 100;
    const weightPerMeter = (surfaceArea * 100 * 2.7) / 10000;

    setTotalWeight(`${weight.toFixed(3)}`);
    setTotalWeightPerMeter(`${weightPerMeter.toFixed(3)}`);
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
          Krótsza przekątna (mm):
          <input
            type="number"
            placeholder="wpisz długość boku pręta (mm)"
            value={sideLength}
            onChange={(e) => {
              setSideLength(e.target.value);
            }}
          />
        </label>
        <br />
        <label>
          Długość pręta (m):
          <input
            type="number"
            placeholder="wpisz długość pręta (m)"
            value={length}
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
        </label>
      </section>
      <br />
      <p>
        Przybliżona waga na metr pręta:{" "}
        <span style={{ color: "red", fontSize: "20px" }}>
          {totalWeightPerMeter}
        </span>{" "}
        kg/m
      </p>
      <p>
        Przybliżona całkowita waga pręta:{" "}
        <span style={{ color: "red", fontSize: "20px" }}>{totalWeight}</span> kg
      </p>
    </div>
  );
};

export default PretSzescio;
