import React, { useContext, useReducer } from "react";
import "./Work.css";
import Button from "../Buttons/Button";
import EditWork from "./EditWork";
import { workContext } from "../../context";
import HandlerWorkReducer from "../../store/Reducers/HandlerWorkReducer";
import initialState from "../../store/states/state";
const Work = ({ workName, id }) => {
  const work = useContext(workContext);
  const [state, dispatch] = useReducer(HandlerWorkReducer, initialState);
  const handleComplete = () => {
    dispatch({ type: "COMPLETE" });
  };
  const editWork = () => {
    dispatch({ type: "EDITWORK" });
  };
  const submitEditWork = () => {
    dispatch({ type: "SUBMITEDITWORK" });
  };
  const handleChangeCallback = (value) => {
    dispatch({ type: "CHANGECALLBACK", value });
  };
  const { status } = state;

  return (
    <div style={{ display: "flex" }}>
      <div className='' style={{ marginRight: 5 }}>
        status: {status}
      </div>
      <Button click={editWork} children='Edit' />
      {state.toggle ? (
        <div
          className={status === "completed" ? "completed" : "active"}
          onClick={handleComplete}>
          {workName}
        </div>
      ) : (
        <EditWork
          change={(e) => work.changeNewWork(e, id, handleChangeCallback)}
          workName={workName}
          submit={submitEditWork}
        />
      )}
      <Button click={() => work.deleteWork(id)} children='DELETE' />
    </div>
  );
};

export default Work;
