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
figure
  margin: 0
  padding: 0

img
  width: 100%
  height: auto
</style>

