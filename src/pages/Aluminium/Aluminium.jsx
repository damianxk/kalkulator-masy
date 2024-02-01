import AluList from "../../components/AluList/AluList";
import items from "../../data/alu.json";

const Aluminium = ({activeComponent, density, setDensity}) => {
  return (
        <AluList items={items} activeComponent={activeComponent} density={density} setDensity={setDensity} />
  );
};
export default Aluminium;
