import React from "react";
import Input from "../../shared/input_group/Input";
import useConvertUtcToTimezone from "../../shared/timeConvater/useConvertUtcToTimezone";

const Form = () => {
  const utcTimeString = "2023-07-21T12:34:56Z"; // Replace this with your UTC time string
  const targetTimezoneOffset = -7;
  const times = useConvertUtcToTimezone(utcTimeString, targetTimezoneOffset);

  return (
    <div>
      <form action="">
        <Input
          label={"Current time"}
          text={"Current time"}
          name={"date"}
          type={"date"}
        />
      </form>
    </div>
  );
};

export default Form;
