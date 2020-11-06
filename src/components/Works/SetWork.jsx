import React, { useContext } from "react";
import {workContext} from "../../context";
import Button from "../Buttons/Button";
import Input from "../inputs/Input";

const SetWork = () => {
  const setWk = useContext(workContext)
  return (
    <div className='setWork'>
      <Input change={setWk.setWork} value={setWk.state.work} place='write a work' type='text' />
      <Button click={setWk.handleSetWork} children='SET' />
    </div>
  );
};
export default SetWork;
