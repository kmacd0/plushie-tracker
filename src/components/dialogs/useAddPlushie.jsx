import { useState } from "react";

export const useAddPlushie = () => {
  const [name, setName] = useState("");
  // Photo
  // Category
  const [date, setDate] = useState("");
  const [isOnDisplay, setIsOnDisplay] = useState(false);

  const handleNameChange = (event) => setName(event.target.value);
  const handleDateChange = (event) => setDate(event.target.value);
  const handleDisplayChange = () => setIsOnDisplay(!isOnDisplay);

  const handleSubmit = () => {
    console.log({
      Date: name,
      Name: date,
      Displayed: isOnDisplay,
    });
  };

  return {
    name,
    date,
    isOnDisplay,
    handleNameChange,
    handleDateChange,
    handleDisplayChange,
    handleSubmit,
  };
};
