import { useState, useEffect } from "react";

import Card from "./Card";
import useCounter from "../hooks/custom-hook";

const ForwardCounter = () => {
  const counter = useCounter(false); // send props here like function argument

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
