import React, { useReducer } from "react";
import Works from "./components/Works/Works";

const App = () => {
  const initialState = {
    work: "",
    works: [],
  };
  const workReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SETWORK": {
        return { ...state, work: action.work };
      }
      case "PUSHWORK": {
        const works = [...state.works];
        const work = {
          id: Math.floor(Math.random() * 999999),
          workName: state.work,
        };
        works.push(work);
        return { ...state, works, work: "" };
      }
      case "DELETEWORK": {
        const { works: allWork } = state;
        const works = allWork.filter((w) => w.id !== action.id);
        return { ...state, works };
      }
      case "EDITWORK": {
        const works = [...state.works];
        const index = works.findIndex((w) => w.id === action.id);
        const work = works[index];
        work.workName = action.name;
        return { ...state, works };
      }
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(workReducer, initialState);
  const setWork = (e) => dispatch({ type: "SETWORK", work: e.target.value });
  const handleSetWork = () => dispatch({ type: "PUSHWORK" });
  const handleDeleteWork = (id) => dispatch({ type: "DELETEWORK", id });
  const handleChangeNewWork = (event, id,callback) => {
    dispatch({ type: "EDITWORK", id, name: event.target.value });
    return callback(event.target.value)
  };

  const { work, works } = state;
  return (
    <React.Fragment>
      <Works
        changeNewWork={handleChangeNewWork}
        handleSetWork={handleSetWork}
        deleteWork={handleDeleteWork}
        workItems={works}
        setWork={setWork}
        work={work}
      />
    </React.Fragment>
  );
};

export default App;
