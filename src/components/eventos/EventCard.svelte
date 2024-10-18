<script>
export let evento;
</script>

<article>
  <h2>{evento.title}</h2>
  <p>{evento.location}</p>
  <p>{evento.address}</p>
  <p>{evento.day}</p>
  <p>{evento.month}</p>
  <p>{evento.time}</p>
  <p>{evento.numberDay}</p>
  <img src={evento.image} alt={evento.title} style="height: 8em; width: auto;" />
</article>
