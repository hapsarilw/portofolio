import React from "react";
import OutputItem from "./OutputItem";

export default function OutputList(props) {
//   console.log(
//     "OutputList: " +
//       props.listOfData.map((data) => JSON.stringify(data.shortLink))
//   );
  return (
    <>
      {props.listOfData.map((data, index) => {
          return props.listOfData[index].id === undefined ? null : <OutputItem key={JSON.stringify(data.id)} urlItem={data} />        
      })}
    </>
  );
}
