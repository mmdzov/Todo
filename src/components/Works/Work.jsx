import React, { useState, useCallback } from "react";
import "./Work.css";
import Button from "../Buttons/Button";
import EditWork from "./EditWork";
const Work = (props) => {
  const [state, setState] = useState({
    toggle: true,
    status: "active",
    isValid: false,
  });
  const handleComplete = useCallback(() => {
    setState((prev) => ({ ...prev, status: "completed" }));
  }, [setState]);
  const editWork = useCallback(
    () => setState((prev) => ({ ...prev, toggle: false, status: "editing" })),
    [setState]
  );
  const submitEditWork = useCallback(() => {
    setState((prev) => ({ ...prev, toggle: true, status: "edited" }));
  }, [setState]);
  const handleChangeCallback = (value) => {
    console.log(value);
  };

  const { status } = state;
  return (
    <div style={{ display: "flex" }}>
      <div className='' style={{ marginRight: 5 }}>
        status: {state.status}
      </div>
      <Button style={{ marginRight: 10 }} click={editWork} children='Edit' />
      {state.toggle ? (
        <div
          className={status === "completed" ? "completed" : "active"}
          onClick={handleComplete}>
          {props.workName}
        </div>
      ) : (
        <EditWork
          change={(e) => props.changeNewWork(e, props.id, handleChangeCallback)}
          workName={props.workName}
          submit={submitEditWork}
        />
      )}
      <Button click={() => props.deleteWork(props.id)} children='DELETE' />
    </div>
  );
};

export default Work;
