import React from "react";
import {
  PretKwadrat,
  ProfilZamknietyKwadratowy,
  KatownikiRownoramienne,
  Katowniki,
  Ceowniki,
  Blachy,
} from "../AluWzory";
import ProfilZamkniety from "../AluWzory/ProfilZamkniety";

const AluItemDetail = ({ item }) => {
  return (
    <>
      <div className="topItem">
        {/* <h2 style={{ fontSize: "55px" }}>{item.name}</h2> */}
        <img
          src={item.image}
          alt={item.name}
          style={{ maxWidth: "120px", margin: "0 auto" }}
        />
      </div>
      {item.id === 2 ? <PretKwadrat /> : null}
      {item.id === 6 ? <ProfilZamknietyKwadratowy /> : null}
      {item.id === 7 ? <ProfilZamkniety /> : null}
      {item.id === 8 ? <KatownikiRownoramienne /> : null}
      {item.id === 9 ? <Katowniki /> : null}
      {item.id === 10 ? <Ceowniki /> : null}
      {item.id === 11 ? <Blachy /> : null}
      {item.id === 12 ? <Blachy /> : null}
    </>
  );
};

export default AluItemDetail;
