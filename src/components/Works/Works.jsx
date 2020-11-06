import React from "react";
import SetWork from "./SetWork";
import Work from "./Work";

const Works = ({ workItems, deleteWork, ...otherProps }) => (
    <div className='works'>
      <div className=''>TODO LIST</div>
      <SetWork {...otherProps} />
      {workItems.map((work) => (
        <Work deleteWork={deleteWork} key={work.id} {...otherProps} {...work} />
      ))}
    </div>
  );

export default Works;
