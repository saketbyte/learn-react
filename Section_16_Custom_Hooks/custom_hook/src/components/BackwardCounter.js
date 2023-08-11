import Card from "./Card";
import useCounter from "../hooks/custom-hook";

const BackwardCounter = () => {
  const counter = useCounter();
  return <Card>{counter}</Card>;
};

export default BackwardCounter;
