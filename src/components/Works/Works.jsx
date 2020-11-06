import React, { useContext } from "react";
import workContext from "../../context";
import SetWork from "./SetWork";
import Work from "./Work";

const Works = () => {
  const wk = useContext(workContext);
  const { works } = wk.state;
  return (
    <div className='works'>
      <div className=''>TODO LIST</div>
      <SetWork />
      {works.map((wrk) => (
        <Work key={wrk.id} {...wrk} />
      ))}
    </div>
  );
};

export default Works;
