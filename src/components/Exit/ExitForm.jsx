import React, { useState } from "react";
import SearchInput from "../common/SearchInput";
import Button from "../common/Button";

export default function ExitForm({ onFind }) {
  const [plate, setPlate] = useState("");

  return (
    <form
      className="exit-form"
      onSubmit={(e) => {
        e.preventDefault();
        onFind?.(plate);
      }}
    >
      <SearchInput value={plate} onChange={setPlate} placeholder="Enter plate number" />
      <Button type="submit" disabled={!plate}>Find vehicle</Button>
    </form>
  );
}
