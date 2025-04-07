import React from 'react'

import './foldertree.css';
import FloderTreeRoot from './FloderTreeRoot';


// Folder Tree Data
// Example data
//  const folderTreeData =[{
//    id:1,
//    name:"Root node name",
//    onClick:function (rootNodeEvent,
//      rootNodeIndex,rootNodeSelfData){},
//    childern:[{
//        id:10001,name:"Child node 1",
//        onClick:function (nodeEvent,nodeSelfData){},
//          children:[
//            {id:10001001,name:"Grand child node 1",onClick:function (nodeEvent,nodeSelfData){},children:[{...},...]},
//            {...}
//            ]},
//      {...}
//     ]},
//  ...];

export default function FolderTree({data}) {
  return (
    <div className="folder-tree">
        <FloderTreeRoot key="tree-root" item={data} />
    </div>
  )
}
