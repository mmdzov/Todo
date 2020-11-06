import React, { useReducer } from "react";
import Works from "./components/Works/Works";
import {workContext} from "./context";
import WorkReducer from "./store/Reducers/WorkReducer";
import initialState from "./store/states/state";

const App = () => {
  const [state, dispatch] = useReducer(WorkReducer, initialState);
  const setWork = (e) => dispatch({ type: "SETWORK", work: e.target.value });
  const handleSetWork = () => dispatch({ type: "PUSHWORK" });
  const deleteWork = (id) => dispatch({ type: "DELETEWORK", id });
  const changeNewWork = (event, id, callback) => {
    dispatch({ type: "EDITWORK", id, name: event.target.value });
    return callback(event.target.value);
  };
  return (
    <workContext.Provider
      value={{
        state,
        setWork,
        handleSetWork,
        changeNewWork,
        deleteWork,
      }}>
      <Works />
    </workContext.Provider>
  );
};

export default App;
