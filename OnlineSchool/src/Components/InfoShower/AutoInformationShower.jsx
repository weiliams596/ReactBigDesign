import React from "react";

import InputBox from "./InputBox";


export default function AutoInformationShower({formatData}) {
  return (<div>
    <h1>{formatData.title}</h1>
    <form className="auto-info-form">
        {formatData.data.map((item,index)=>{
         <InputBox key={index} label={item.label} value={item.value} />  
        })}
    </form>
  </div>);
}
