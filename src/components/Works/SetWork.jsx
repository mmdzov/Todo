import React from "react";
import Button from "../Buttons/Button";
import Input from "../inputs/Input";

const SetWork = ({ setWork, work, handleSetWork }) => {
  return (
    <div className='setWork'>
      <Input change={setWork} value={work} place='write a work' type='text' />
      <Button click={handleSetWork} children='SET' />
    </div>
  );
};
export default SetWork;
