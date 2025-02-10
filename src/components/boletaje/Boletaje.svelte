<script lang="ts">
  import { afterUpdate } from "svelte";
  import { updatePass } from "@lib/appwriteUtils";
  import BoletoCard from "@components/boletaje/BoletoCard.svelte";

    export let boleto;
    export let collectionId;


    const documentId = boleto[0].$id;
    const attributeToUpdate = 'ocupado'; // El atributo que quieres actualizar
    const newValue = true; // El nuevo valor para ese atributo

//    afterUpdate(
//        updatePass(collectionId, documentId, attributeToUpdate, newValue)
//          .then(response => {
//            console.log('Documento actualizado:');
//          })
//          .catch(error => {
//            console.error('Error al actualizar el documento:', error);
//          })
//    );

//{#if boleto[0].ocupado}
// <div class="message">
//    <img src='/icons/error.png' alt='icono de boleto valido'>
//    <h2>Entrada No Valida</h2>
//    <p>El asiento ya esta ocupado</p>
//  </div>
//  {:else}
//  {#if boleto.length > 0}
//    {#each boleto as b}
//      <BoletoCard boleto={b}/>
//    {/each}
//      <div class="message">
//        <img src='/icons/chek.png' alt='icono de boleto valido'>
//        <h2>Entrada Valida</h2>
//        <p>Disfrute la función</p>
//      </div>
//    {:else}
//      <h2>Boleto no existe</h2>
//    {/if}
//{/if}

</script>


  {#if boleto.length > 0}
    {#each boleto as b}
      <BoletoCard boleto={b}/>
    {/each}
      <div class="message">
        <img src='/icons/chek.png' alt='icono de boleto valido'>
        <p>Disfrute la función</p>
      </div>
    {:else}
      <h2>Boleto no existe</h2>
    {/if}


<style lang="sass">
  .message
    text-align: center
    padding: 0
    padding-top: 1em
    margin: auto
    img
      width: 4em
      height: auto
    h2
      padding: 0
      margin: 0

</style>
