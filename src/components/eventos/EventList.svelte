<script lang="ts">
  import { onMount } from "svelte";
  import { appwriteFetchData } from "@lib/appwriteUtils";

  import EventCard from "@components/eventos/EventCard.svelte";
  import Loading from "@components/Loading.svelte";

  let events: any[] = [];

  let loading: boolean = true;
  onMount(async () => {
    try {
      events = await appwriteFetchData(
        import.meta.env.PUBLIC_APPWRITE_DB_ID,
        import.meta.env.PUBLIC_APPWRITE_EVENTS_COLLECTION_ID
      );
    } catch (error) {
      console.log('Error fetching events:', error);
    }
    loading = false;
  });
</script>

{#if loading}
  <Loading />
  {:else}
    {#if events.length > 0}
      {#each events as evento}
        <EventCard {evento} />
      {/each}
    {:else}
      <p>No events available</p>
    {/if}
{/if}


