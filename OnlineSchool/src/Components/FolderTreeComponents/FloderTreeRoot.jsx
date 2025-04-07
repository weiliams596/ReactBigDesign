import React, { useEffect, useState } from "react";

import FolderTreeNode from "./FolderTreeNode";

export default function FloderTreeRoot({ item }) {
  const [isNodeOpen, setIsNodeOpen] = useState([]);
  const handleClick = (e,index) => {
    const newIsNodeOpen = [...isNodeOpen];
    newIsNodeOpen[index] = !newIsNodeOpen[index];
    setIsNodeOpen(newIsNodeOpen);
    item.onClick && item.onClick(e,index,item);
  };

  return (
    <div key={item.id}>
      {item.length > 0 &&
        item.map((child, index) => {
          return (
            <div key={child.id}>
              <i
                key={child.id + "." + index}
                className="bi bi-database"
                onClick={(e)=>{handleClick(e,index)}}>
                {(child.name? child.name : "") + (isNodeOpen[index] ? "-" : "+")}
              </i>
              {isNodeOpen[index] && 
              <FolderTreeNode
                key={item.id + "_" + index}
                item={child}
                name={child.name}
                childrens={child.children}
              />}
            </div>
          );
        })}
    </div>
  );
}
