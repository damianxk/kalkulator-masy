import {
  PretOkraglyAlu,
  PretKwadrat,
  PretSzescio,
  Plaskownik,
  Rura,
  ProfilZamknietyKwadratowy,
  KatownikiRownoramienne,
  Katowniki,
  Ceowniki,
  Blachy,
  Dwuteownik,
} from "../AluWzory";
import ProfilZamkniety from "../AluWzory/ProfilZamkniety";
import gestoscalu from "../../data/gestoscalu.json";
import gestoscstali from "../../data/gestoscstali.json";
import gestoscnierdzewnej from "../../data/gestoscnierdzewnej.json";

const AluItemDetail = ({ item, activeComponent, density, setDensity, onWeightChange }) => {
  const handleChangeDensity = (event) => {
    setDensity(event.target.value);
  };

  return (
    <>
      <h2 className="itemName">{item.name}</h2>
      <div className="topItem">
        <div>
          <div
            style={{
              border: "1px solid #919191",
              minHeight: "250px",
              display: "flex",
            }}
          >
            <img
              loading="lazy"
              src={item.render}
              alt={item.name}
              style={{ margin: "auto", maxWidth: "400px", width: "100%" }}
            />
          </div>
        </div>
        <div className="topItemRight">
          {item.id === 8 ? '' : (<label
            className="label"
            style={{ textTransform: "uppercase", gap: "10px" }}
          >
            {activeComponent === "AluList" ? "" : ""}
            {activeComponent === "stal" ? "" : ""}
            {activeComponent === "StalList" ? "" : ""}
            {activeComponent === "AluList" && (
              <select name="gestosc" onChange={handleChangeDensity}>
                <option>Wybierz gęstość aluminium </option>
                {gestoscalu.map((g) => (
                  <option key={g.id} value={g.value}>
                    {g.name}
                  </option>
                ))}
              </select>
            )}
            {activeComponent === "stal" && (
              <select name="gestosc" onChange={handleChangeDensity}>
                <option>Wybierz gęstość stali</option>
                {gestoscstali.map((gs) => (
                  <option key={gs.id} value={gs.value}>
                    {gs.name}
                  </option>
                ))}
              </select>
            )}
            {activeComponent === "StalList" && (
              <select name="gestosc" onChange={handleChangeDensity}>
                <option>Wybierz gęstość stali nierdz.</option>
                {gestoscnierdzewnej.map((gn) => (
                  <option key={gn.id} value={gn.value}>
                    {gn.name}
                  </option>
                ))}
              </select>
            )}
          </label>)}
          {item.id === 10 ? <PretOkraglyAlu density={density} onWeightChange={onWeightChange} /> : null}
          {item.id === 9 ? (
            <PretKwadrat
              density={density}
              onWeightChange={onWeightChange}
            />
          ) : null}
          {item.id === 11 ? <PretSzescio density={density} onWeightChange={onWeightChange}/> : null}
          {item.id === 12 ? <Plaskownik density={density} onWeightChange={onWeightChange}/> : null}
          {item.id === 3 ? <Rura density={density} onWeightChange={onWeightChange}/> : null}
          {item.id === 1 ? (
            <ProfilZamknietyKwadratowy density={density} onWeightChange={onWeightChange}/>
          ) : null}
          {item.id === 2 ? <ProfilZamkniety density={density} onWeightChange={onWeightChange}/> : null}
          {item.id === 4 ? <KatownikiRownoramienne density={density} onWeightChange={onWeightChange}/> : null}
          {item.id === 5 ? <Katowniki density={density} onWeightChange={onWeightChange}/> : null}
          {item.id === 6 ? <Ceowniki density={density} onWeightChange={onWeightChange}/> : null}
          {item.id === 7 ? <Blachy density={density} onWeightChange={onWeightChange}/> : null}
          {item.id === 8 ? <Dwuteownik onWeightChange={onWeightChange}/> : null}
        </div>
      </div>
    </>
  );
};

export default AluItemDetail;
