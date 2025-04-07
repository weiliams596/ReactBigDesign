import React from 'react'

import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import FolderTree from '../Components/FolderTreeComponents/FolderTree';

// Folder Tree Data
// Example data
const folderTreeData =[{
    name: 'Folder_1',
    id:1,
    //  e : event
    //  index: root index
    //  item : this node
    onClick: (e,index,item) => {console.log('Folder_1 clicked')},
    children: [
        { id:1001,name: 'Folder_1.1',onClick: (e) => {console.log('Folder_1.1 clicked')}, children:[
            { id:100101, name: 'Folder_1.1.1' ,onClick: (e) => {console.log('Folder_1.1.1 clicked')}},
            { id:100102, name: 'Folder_1.1.2' ,onClick: (e) => {console.log('Folder_1.1.2 clicked')}},
            { id:100103, name: 'Folder_1.1.3',onClick: (e) => {console.log('Folder_1.1.3 clicked')}},
        ] },
        { id:1002, name: 'Folder_1.2',onClick: (e) => {console.log('Folder_1.2 clicked')} },
        { id:1003,name: 'Folder_1.3' ,onClick: (e) => {console.log('Folder_1.3 clicked')} },
    ],
},{
    name: 'Folder_2',
    id:2,
    children: [
        { id:2001, name: 'Folder_2.1' },
        { id:2002, name: 'Folder_2.2' },
        { id:2003, name: 'Folder_2.3' },
    ],
}];

export default function Test() {
  console.log(folderTreeData);
  return (
    <div>
        <Header />
        {/* <Admin /> */}
        <FolderTree data={folderTreeData} />

        <Footer />
    </div>
  )
}
