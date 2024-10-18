<script>
import { onMount } from "svelte";
import { appwriteDatabases, appwriteStorage } from "../../lib/appwrite";

import EventCard from "./EventCard.svelte";

let events = [];

onMount(async () => {
  try {
    const response = await appwriteDatabases.listDocuments(
      import.meta.env.PUBLIC_APPWRITE_DB_ID,
      import.meta.env.PUBLIC_APPWRITE_EVENTS_COLLECTION_ID
    );
    events = response.documents.map(async (doc) => {
      return doc;
    });
    events = await Promise.all(events);
  } catch (error) {
    console.log('Error al consultar los datos de appwrite', error);
  }
})
</script>


{#if events.length > 0}
  {#each events as evento}
    <EventCard {evento} />
  {/each}
{:else}
  <p>No events available.</p>
{/if}
