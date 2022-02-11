import React from "react";
import StatisticsLine from "./StatisticLine";

const Statistics=(props)=>{
   if((props.good+props.bad+props.neutral)==0)
   return <p>No feedback given</p>;
   else{
    return (
        <div>
            <StatisticsLine text="good" val={props.good} />
            <StatisticsLine text="neutral" val={props.neutral} />
            <StatisticsLine text="bad" val={props.bad} />
            <StatisticsLine text="average" val={(props.good+((-1)*props.bad))/(props.good+props.bad+props.neutral)} />
            <StatisticsLine text="positive" val={(props.good*100)/(props.good+props.bad+props.neutral)} />
      
        </div>
    )
   }
}

export default Statistics