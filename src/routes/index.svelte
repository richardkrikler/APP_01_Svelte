<script>
  import { Router, Route } from 'svelte-routing';
  import TaskList from '../lib/components/TaskList.svelte';
  import TaskDetail from '../lib/components/TaskDetail.svelte';

  export let url = '';
</script>

<Router {url}>
  <div>
    <Route path="/taskdetail/:id" component={TaskDetail} />
    <Route path="/" component={TaskList} />
  </div>
</Router>