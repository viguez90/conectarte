<script>
// import Poster from "./Poster.svelte";
// export let obra;
// let showPoster = true;
export let evento;
</script>

<div class="card">
<ul>
  <li id="day">
    <span class="font-xl">{evento.numberDay}</span>
    <span class="font-xl space-void">{evento.month}</span>
  </li>
  <li id="location">
    <h2 class="font-lg">{evento.title}</h2>
    <p class="font-sm wrap-bottom">{evento.address}</p>
  </li>
  <li id="time" class="font-2xl">{evento.time}</li>
  <!-- <div class="poster"> -->
  <!--   <Poster poster={evento.image} description={`${obra} en ${evento.title}`} showComponent={showPoster}  /> -->
  <!-- </div> -->
</ul>
</div>

<style lang="sass">
.card
  background-color: rgba(219,134,43,1.0)
  max-width: 90%
  min-height: 4em 
  box-shadow: 0px 0px 20px 2px rgba(0,0,0,0.2)
  border-radius: 20px
  margin: auto
  margin-bottom: 2em

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
  padding: 0
  margin: 0

.font-2xl
  font-size: 2em
  padding: 0
  margin: 0

ul
  display: flex
  list-style: none
  width: 100%
  margin: auto
  min-height: 4.5em
  padding: 0
  flex-flow: row wrap
  justify-content: space-around
  align-items: center  

li
  padding: 0
  margin: 0
  margin-left: 0.8em
  margin-right: 0.8em

.space-void
  padding-left: 8px


#day  
  min-width: 3em

#location
  max-width: 800px 
  border: rgba(255,255,255,0) 1px solid 
  border-left-color: rgba(255,255,255,1.0)
  border-right-color: rgba(255,255,255,1.0)
  padding-left: 0.8em
  padding-right: 0.8em
  p
    margin-top: 6px

#time
  min-width: 4.4em


@media (max-width: 724px)
  #location
    border: rgba(255,255,255,0) 1px solid 
    border-bottom-color: rgba(255,255,255,1.0)
    border-top-color: rgba(255,255,255,1.0)

  .font-sm
    font-size: 0.6em

  .font-xl
    font-size: 1.2em

  .font-lg
    font-size: 1em

  .font-2xl
    font-size: 1.2em

  .space-void
    padding-left: 0

  #location
    text-align: center
</style>

