<script>
import Poster from "./Poster.svelte";
export let evento;
export let obra;

let showPoster = true;
</script>

<article>
  <h2>{evento.title}</h2>
  <p>{evento.location}</p>
  <p>{evento.address}</p>
  <p>{evento.day}</p>
  <p>{evento.month}</p>
  <p>{evento.time}</p>
  <p>{evento.numberDay}</p>
  <div class="poster">
    <Poster poster={evento.image} description={`${obra} en ${evento.title}`} showComponent={showPoster}  />
  </div>
</article>

<style lang="sass">
.poster
  position: fixed
  z-index: 999
</style>


