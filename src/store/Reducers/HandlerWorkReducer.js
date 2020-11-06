const HandlerWorkReducer = (state,action) => {
    switch (action.type) {
        case "COMPLETE":
          return { ...state, status: "completed" };
        case "EDITWORK":
          return { ...state, toggle: false, status: "editing" };
        case "SUBMITEDITWORK":
          return { ...state, toggle: true, status: "edited" };
        case "CHANGECALLBACK": {
          console.log(action.value);
          return { ...state };
        }
        default:
          return state;
      }
}

export default HandlerWorkReducer;