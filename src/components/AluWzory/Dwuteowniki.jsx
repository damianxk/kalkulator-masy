import React, { useState, useEffect, useCallback } from "react";
import {FloatLabel} from 'primereact/floatlabel';
import {InputNumber} from 'primereact/inputnumber'

const DwuteownikAlu = ({ onWeightChange }) => {
  const [length, setLength] = useState("");
  const [type, setType] = useState("");
  const [data, setData] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const [count, setCount] = useState(1);

  const fetchData = useCallback(() => {
    let url;
    switch (type) {
      case "I":
        url = "data/dwuteowniki-i.json";
        break;
      case "IPE":
        url = "data/dwuteowniki-ipe.json";
        break;
      case "HE":
        url = "data/dwuteowniki-he.json";
        break;
      default:
        url = "";
    }

    if (url) {
      fetch(url)
        .then((response) => response.json())
        .then((data) => setData(data))
        .catch((error) => console.error(error));
    } else {
      setData([]);
    }
  }, [type]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    if (selectedOption) {
      const item = data.find((item) => item.Oznaczenie === selectedOption);
      setSelectedItem(item);
    } else {
      setSelectedItem(null);
    }
  }, [selectedOption, data]);

  const calculateWeight = useCallback(() => {
    if (selectedItem && selectedItem.waga * count !== null) {
      onWeightChange({
        totalWeight: selectedItem.waga.toFixed(3),
        totalWeightPerKg: (selectedItem.waga * length).toFixed(3),
      });
    } else {
      onWeightChange({
        totalWeight: "0.000",
        totalWeightPerKg: "0.000",
      });
    }
  }, [selectedItem, length, count, onWeightChange]);

  useEffect(() => {
    calculateWeight();
  }, [calculateWeight]);

  return (
    <div className="obliczenia">
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <select
          name="dwuteowniki"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="">Wybierz typ</option>
          <option value="I">Dwuteowniki IPN</option>
          <option value="IPE">Dwuteowniki IPE</option>
          <option value="HE">Dwuteowniki HE</option>
        </select>

        <select
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
          name="rodzaj"
        >
          <option value="">Wybierz rodzaj dwuteownika</option>
          {data.map((item, index) => (
            <option key={index} value={item.Oznaczenie}>
              {item.Oznaczenie}
            </option>
          ))}
        </select>
        <section style={{ display: "flex", gap: "50px", marginLeft: "-10px" }}>
          <FloatLabel className="textinputlabel">
            <InputNumber id="length-input" value={length} onChange={(e) => setLength(e.value)} />
            <label htmlFor="length-input">[D] Wpisz długość dwuteownika (m)</label>
          </FloatLabel>
          <FloatLabel className="textinputlabel">
            <InputNumber id="count-input" value={count} onChange={(e) => setCount(e.value)} />
            <label htmlFor="count-input">Wpisz ilość (szt.)</label>
          </FloatLabel>
          </section>
        {selectedItem && (
          <p style={{ margin: 0 }}>
            Oznaczenie:{" "}
            <span style={{ fontWeight: "600" }}>{selectedItem.Oznaczenie}</span>
            <br />
            Wysokość:{" "}
            <span style={{ fontWeight: "600" }}>
              {selectedItem.wysokosc} mm
            </span>
            <br />
            Szerokość:{" "}
            <span style={{ fontWeight: "600" }}>
              {selectedItem.szerokosc} mm
            </span>
            <br />
            Grubość:{" "}
            <span style={{ fontWeight: "600" }}>{selectedItem.grubosc} mm</span>
            <br />
            Ścianka:{" "}
            <span style={{ fontWeight: "600" }}>{selectedItem.scianka} mm</span>
            <br />
            Łączenie:{" "}
            <span style={{ fontWeight: "600" }}>
              {selectedItem.laczenie} mm
            </span>
            <br />
            Waga:{" "}
            <span style={{ fontWeight: "600" }}>{selectedItem.waga} kg/m</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default DwuteownikAlu;
