<script lang="ts">
  import BoletoCard from "@components/boletaje/BoletoCard.svelte";
  import CountDate from "@components/boletaje/CountDate.svelte";

  export let boleto;
  export let boletaje;

  const dateEvent = new Date(boletaje.eventos.date);
  //const dateEvent = new Date(2025,1,26,14,6,0);
  const now = new Date();
</script>


{#if now <= dateEvent}
    <CountDate dateEvent={dateEvent} />
    {:else}
    {#if boleto.ocupado}
     <div class="message">
        <img src='/icons/error.png' alt='icono de boleto valido'>
        <h2>Entrada No Valida</h2>
        <p>El asiento ya esta ocupado</p>
      </div>
      {:else}
      {#if boleto}
          <BoletoCard
                  boleto={boleto}
                  collectionId={boletaje.acces}
                  documentId={boleto.$id}
                  dateEvent={dateEvent}
                  now={now}
          />
          <div class="message">
            <img src='/icons/chek.png' alt='icono de boleto valido'>
            <h2>Entrada Valida</h2>
            <p>Disfrute la función</p>
          </div>
        {:else}
          <h2>Boleto no existe</h2>
        {/if}
    {/if}
    {/if}


<style lang="sass">
  .message
    text-align: center
    padding: 0
    padding-top: 2em
    margin: auto
    img
      width: 4em
      height: auto
    h2
      padding: 0
      margin: 0

</style>