import React from "react";
import Button from "../Buttons/Button";
import Input from "../inputs/Input";
import "./EditWork.css"
const EditWork = ({ change, workName, submit }) => (
  <div className='editWork'>
    <Input
      change={change}
      value={workName}
      place={"enter a work"}
      className='edit'
      type='text'
    />
    <Button click={submit} children='EDIT' />
  </div>
);

export default EditWork;
