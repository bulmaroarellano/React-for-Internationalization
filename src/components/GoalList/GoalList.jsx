import React from "react";
import FirstGoal  from "../FirstGoal/FirstGoal";
import SecondGoal from '../SecondGoal/SecondGoal'
import  ThirdGoal  from "../ThirdGoal/ThirdGoal";



export default function GoalList() {  return (
  <ul>
    <FirstGoal />
    <SecondGoal />
    <ThirdGoal />
  </ul>
  );
}
