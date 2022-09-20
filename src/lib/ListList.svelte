<script>
  import { activeList, lists as listsState } from "../stores.js";
  import CheckIcon from "./icons/CheckIcon.svelte";
  import EditIcon from "./icons/EditIcon.svelte";
  import TrashIcon from "./icons/TrashIcon.svelte";

  $: lists = $listsState;
  $: console.log($listsState);
</script>

<ul class="flex-grow">
  {#each lists as list}
    <li
      class="list group bg-slate-200 hover:bg-slate-300 rounded-sm cursor-pointer my-3.5 flex"
    >
      {#if list.edit}
        <input
          bind:value={list.name}
          class="bg-transparent w-full py-1 px-2 outline-none"
          on:keydown={(k) => {
            if (k.key === "Enter" || k.key === "Escape") {
              list.edit = false;
            }
          }}
        />
        <div
          class="flex flex-col justify-center mx-1"
          on:click={() => (list.edit = false)}
        >
          <CheckIcon />
        </div>
      {:else}
        <button
          class="w-full py-1 px-2 text-left"
          on:click={() => ($activeList = list.id)}>{list.name}</button
        >
        <div
          class="flex flex-col justify-center mx-1 group-hover:visible invisible"
        >
          <div class="flex">
            <div class="hover:text-slate-500">
              <TrashIcon />
            </div>
            <div
              class="hover:text-slate-500"
              on:click={() => {
                lists.forEach((l) => (l.edit = false));
                list.edit = true;
              }}
            >
              <EditIcon />
            </div>
          </div>
        </div>
      {/if}
    </li>
  {/each}
</ul>
