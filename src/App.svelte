<script>
  import { List } from "./lib/models/List";
  import { lists } from "./stores";
  import ListList from "./lib/components/ListList.svelte";
  import AddListButton from "./lib/components/AddListButton.svelte";
  import { Navigate } from 'svelte-router-spa';
  import { Router } from "svelte-router-spa";
  import { routes } from "./routes";
</script>

<main class="w-screen min-h-screen flex flex-col">
  <div class="bg-slate-700 py-3">
    <Navigate to="/">
      <h1 class="px-3 text-slate-200 font-semibold text-3xl">ToDo's</h1>
    </Navigate>
  </div>

  <div class="flex flex-grow text-left">
    <div class="flex flex-col bg-slate-100 w-44 p-3">
      <ListList />

      <AddListButton
        callback={() => lists.update((l) => [...l, new List("", true)])}
      />
    </div>

    <div class="p-3 flex-grow">
      <Router {routes} />
    </div>
  </div>
</main>
