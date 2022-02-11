import React from "react";

const StatisticsLine=(props)=>{
    if(props.text=="positive")
    return(
        <div>
            <table>
                <tr>
             <td>{props.text}</td>
             <td>{props.val}%</td>
             </tr>
             </table>
        </div>
        )
        else{
            return(
                <div>
                    <table>
                        <tr>
                     <td>{props.text}</td>
                     <td>{props.val}</td>
                     </tr>
                     </table>
                </div>
                )
   }
}

export default StatisticsLine