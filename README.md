# Activity 3.1: Creating an App to Output Your Goals for This Book


SThis activity builds upon Activity 2.2 from the previous chapter. If you followed along there, you can use your existing code and enhance it by adding props.

The aim here is to build reusable GoalItem components that can be configured via props. Every GoalItem component should receive and output a goal title and a short description text with extra information about the goal.

Perform the following steps to complete this activity:

1.-Finish Activity 2.2 from the previous chapter.
2.- Add a new component to the src/components folder, a component function named GoalItem, in a new GoalItem.js file.
3.- Copy the component function (including the returned JSX code) from FirstGoal.js and add a new props parameter to the       function. Remove the title and description text from the JSX code: