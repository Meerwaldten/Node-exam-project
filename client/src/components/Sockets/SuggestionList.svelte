<script>
  import { suggestionList } from "../../stores/globalStore";
</script>

<section class="bg-gray-50 dark:bg-gray-300">
  <div class="container mx-auto">
    {#each $suggestionList as suggestionFromList}
      <div class="border border-gray-800 p-4 mb-4">
        <p>Suggestion: {suggestionFromList.text}</p>
        <p>From: {suggestionFromList.username}</p>
      </div>
    {/each}
  </div>
</section>