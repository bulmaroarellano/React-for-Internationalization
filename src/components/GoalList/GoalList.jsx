import React from "react";
import GoalItem  from "../GoalItem/GoalItem";


export default function GoalList() {  return (
  <ul>
    <GoalItem title="Learn React Fundamentals">Understand in its entirety the fundamentals of rect: components, props, state, etc</GoalItem>
    <GoalItem title="Challenges that take me out of the comfort zone">From these courses I hope: challenges that challenge me and allow me to achieve a higher level of understanding with respect to React</GoalItem>
    <GoalItem title="I hope to enjoy, laugh, even cry ...">It is normal to feel frustrated, it's fine if I discourage me ... The only thing I am not allowed is not to get up. The great geniuses were formed based on discipline and constancy.</GoalItem>
  </ul>
  );
}
