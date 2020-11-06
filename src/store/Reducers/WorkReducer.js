const WorkReducer = (state, action) => {
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

export default WorkReducer;
