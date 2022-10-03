<script>
  import { Router, Route } from 'svelte-routing';
  import TaskList from '../lib/components/TaskList.svelte';
  import TaskDetails from '../lib/components/TaskDetails.svelte';

  export let url = '';
</script>

<Router {url}>
  <div>
    <Route path="/taskdetail/:id" component={TaskDetails} />
    <Route path="/" component={TaskList} />
  </div>
</Router>