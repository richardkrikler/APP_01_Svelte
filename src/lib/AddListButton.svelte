<script>
  import AddIcon from './icons/AddIcon.svelte'
  export let callback
</script>

<div class="flex hover:bg-slate-300 rounded-sm cursor-pointer py-1.5 px-2" on:click={callback()}>
  <AddIcon classes="w-6 mr-2" />

  <input type="button" value="Neue Liste" class="cursor-pointer" />
</div>
