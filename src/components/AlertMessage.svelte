<script>
  export let message = '';
  export let type = 'success'; // 'success' o 'error'

  const isVisible = message.length > 0;
</script>

<style>
  .message {
    padding: 1em;
    margin: 1em 0;
    border-radius: 5px;
    transition: opacity 0.5s;
  }
  .success {
    background-color: #d4edda;
    color: #155724;
    border: 1px solid #c3e6cb;
  }
  .error {
    background-color: #f8d7da;
    color: #721c24;
    border: 1px solid #f5c6cb;
  }
</style>

{#if isVisible}
  <div class="message {type}">
    {message}
  </div>
{/if}
