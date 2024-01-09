import React from "react";
import {PretOkragly, PretKwadrat, PretSzescio, Plaskownik, Rura, ProfilZamknietyKwadratowy, KatownikiRownoramienne, Katowniki, Ceowniki, Blachy} from "../StalWzory";
import ProfilZamkniety from "../StalWzory/ProfilZamkniety";


const StalItemDetail = ({ item }) => {
  return (
    <>
        
        <h2 style={{fontSize:'55px',}}>{item.name}</h2>
        <img src={item.image} alt={item.name} />
      
      {item.id === 1 ? <PretOkragly /> : null}
      {item.id === 2 ? <PretKwadrat /> : null}
      {item.id === 3 ? <PretSzescio /> : null}
      {item.id === 4 ? <Plaskownik /> : null}
      {item.id === 5 ? <Rura /> : null}
      {item.id === 6 ? <ProfilZamknietyKwadratowy /> : null}
      {item.id === 7 ? <ProfilZamkniety /> : null}
      {item.id === 8 ? <KatownikiRownoramienne /> : null}
      {item.id === 9 ? <Katowniki /> : null}
      {item.id === 10 ? <Ceowniki /> : null}
      {item.id === 11 ? <Blachy /> : null}
    </>
  );
};

export default StalItemDetail;
