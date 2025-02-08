<script>
  export let poster;
  export let description;
  export let showComponent;
</script>

{#if showComponent}
  <figure>
    <img src={poster} alt={description}>
  </figure>
{/if}

<style lang="sass">
  img
    margin: auto
    padding: 0
</style>

