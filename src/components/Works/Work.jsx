import React, { useCallback, useContext, useReducer } from "react";
import "./Work.css";
import Button from "../Buttons/Button";
import EditWork from "./EditWork";
import workContext from "../../context";
import HandlerWorkReducer from "../../store/Reducers/HandlerWorkReducer";
import initialState from "../../store/states/state";
const Work = ({ workName, id }) => {
  const wrk = useContext(workContext);
  const [state, dispatch] = useReducer(HandlerWorkReducer, initialState);
  const handleComplete = useCallback(() => {
    dispatch({ type: "COMPLETE" });
  }, [dispatch]);
  const editWork = useCallback(() => dispatch({ type: "EDITWORK" }), [
    dispatch,
  ]);
  const submitEditWork = useCallback(() => {
    dispatch({ type: "SUBMITEDITWORK" });
  }, [dispatch]);
  const handleChangeCallback = useCallback(
    (value) => {
      dispatch({ type: "CHANGECALLBACK", value });
    },
    [dispatch]
  );
  const { status } = state;
  const EDIT = (
    <EditWork
      change={(e) => wrk.changeNewWork(e, id, handleChangeCallback)}
      workName={workName}
      submit={submitEditWork}
    />
  );
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
        EDIT
      )}
      <Button click={() => wrk.deleteWork(id)} children='DELETE' />
    </div>
  );
};

export default Work;
