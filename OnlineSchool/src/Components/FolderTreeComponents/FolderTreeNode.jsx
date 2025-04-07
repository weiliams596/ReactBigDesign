import React, { useState } from "react";

import "bootstrap-icons/font/bootstrap-icons.css";

export default function FolderTreeNode({ name, item, childrens }) {
  const [isSelfOpen, setIsSelfOpen] = useState(true);
  const handleSelfClick = (e) => {
    setIsSelfOpen(!isSelfOpen);
    item.onClick && item.onClick(e,item);
  };
  return (
    <div className="folder-tree-node">
      <i className={childrens && isSelfOpen ? "bi bi-folder-minus" :!childrens ? "bi bi-file-earmark-text" : "bi bi-folder-fill"} onClick={(e) => handleSelfClick(e)}>
        {(name ? name : "") + (childrens && isSelfOpen ? " - " : childrens ? "+":"")}
      </i>
      {childrens &&
        isSelfOpen &&
        childrens.map((child, index) => {
          return (
            <FolderTreeNode
              key={child.id + child.name + index}
              name={child.name}
              item={child}
              childrens={child.children}
            />
          );
        })}
    </div>
  );
}
