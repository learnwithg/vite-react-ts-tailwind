import React, { SetStateAction, useState } from "react";
import moment from "moment";

const useTime = () => {
  const [timeNow, setTimeNow] = useState<string>();
  const [dateNow, setDateNow] = useState<string>();

  setInterval(() => {
    const time = moment().add().format("h:mm:ss A");
    const date = moment().format("dddd, MMMM Do YYYY");
    setTimeNow(time);
    setDateNow(date);
  }, 1000);

  return { timeNow, dateNow };
};

export default useTime;
