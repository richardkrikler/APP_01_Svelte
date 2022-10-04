import TaskDetails from "./lib/components/TaskDetails.svelte";
//import Test from "./lib/components/Test.svelte";
import TaskList from "./lib/components/TaskList.svelte";

const routes = [
  {
    name: "/",
    component: TaskList,
  },
  {
    name: "taskdetails/:id",
    component: TaskDetails,
  },
];

export { routes };
