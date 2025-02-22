<script lang="ts">
  import {afterUpdate, onMount} from "svelte";
  import { updatePass } from "@lib/appwriteUtils";
  import BoletoCard from "@components/boletaje/BoletoCard.svelte";
  import CountDate from "@components/boletaje/CountDate.svelte";

  export let boleto;
  export let boletaje;

  const collectionId = boletaje.acces;
  const documentId = boleto.$id;

  const dateEvent = new Date(boletaje.eventos.date);
  const now = new Date();

  const attributeToUpdate: string = 'ocupado';
  const newValue = true;


  afterUpdate(() => {

      if (dateEvent <= now) {
          updatePass(collectionId, documentId, attributeToUpdate, newValue)
              .then(response => {
                  console.log('Documento actualizado:');
              })
              .catch(error => {
                  console.error('Error al actualizar el documento:', error);
              })
      }
  });

</script>

    {#if boleto.ocupado}
     <div class="message">
        <img src='/icons/error.png' alt='icono de boleto valido'>
        <h2>Entrada No Valida</h2>
        <p>El asiento ya esta ocupado</p>
      </div>
      {:else}
      {#if boleto}
          <BoletoCard boleto={boleto}/>
          <div class="message">
            <img src='/icons/chek.png' alt='icono de boleto valido'>
            <h2>Entrada Valida</h2>
            <p>Disfrute la función</p>
          </div>
        {:else}
          <h2>Boleto no existe</h2>
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