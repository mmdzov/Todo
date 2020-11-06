import { createContext } from "react";

const workContext = createContext({
  state: {},
  setWork: () => {},
  changeNewWork: () => {},
  deleteWork: () => {},
  handleSetWork: () => {},
});
export { workContext };
