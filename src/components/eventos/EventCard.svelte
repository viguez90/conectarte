<script>
// import Poster from "./Poster.svelte";
// export let obra;
// let showPoster = true;
export let evento;
</script>

<div class="card">
<ul>
  <li class="wrap-content time">
    <p class="font-xl">{evento.numberDay}</p>
    <p class="font-lg wrap-bottom month">{evento.month}</p>
  </li>
  <li class="wrap-content header">
    <h2 class="font-lg">{evento.title}</h2>
    <p class="font-sm wrap-bottom">{evento.address}</p>
  </li>
  <li class="font-2xl alon">{evento.time}</li>
  <!-- <div class="poster"> -->
  <!--   <Poster poster={evento.image} description={`${obra} en ${evento.title}`} showComponent={showPoster}  /> -->
  <!-- </div> -->
</ul>
</div>

<style lang="sass">
.card
  background-color: rgba(151, 119, 79, 0.8)
  max-width: 44em
  min-height: 4em 
  box-shadow: 0px 0px 20px 2px rgba(0,0,0,0.2)
  border-radius: 20px

ul
  position: relative
  margin: 0
  padding: 0
  max-height: 2em 
  font-size: 1em
  list-style: none
  left: 1.4em

li
  float: left
  margin-left: 1.2em
  margin-right: 1.2em

.font-sm
  font-size: 0.8em
  color: rgba(255,255,255,0.9)
  padding: 0
  margin: 0

.font-xl
  font-size: 1.8em
  padding: 0
  margin: 0

.font-lg
  font-size: 1.4em

.font-2xl
  font-size: 2em
  padding: 0
  margin: 0

.alon
  position: relative
  width: 54px
  height: auto
  top: 12px
  left: 1em

.wrap-content
  position: relative
  padding: 0

.wrap-bottom
  position: relative
  margin: 0
  padding: 0
  top: -1em

.header
  top: -12px
  left: 0.6em

.month
  top: -6px

.time
  top: 4px
</style>

