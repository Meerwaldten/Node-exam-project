<script>
    import { BASE_URL, isUserAdmin, myUsername, suggestionList } from "../../stores/globalStore";
    import Signin from "../Signin/Signin.svelte";
    import showToastify from "../../stores/Toastify";
    import io from "socket.io-client";
    import { onMount } from "svelte";

    const socket = io($BASE_URL);


    function errorMessage(){
        showToastify("You dont have access here, please sign in")
    }

    console.log($suggestionList.length);

    onMount(() => {
    socket.on("initial admin suggestions", (adminSuggestions) => {
    suggestionList.set(adminSuggestions);
    });
    });
    
</script>

{#if $myUsername && $isUserAdmin}
<section class="bg-gray-50 dark:bg-gray-300">
  <div class="flex flex-col items-right justify-center px-6 py-8 mx-auto lg:py-0">
    <h1 class="text-center">Suggestions from the users:</h1>
    <div class="flex flex-wrap justify-center">
        {#each $suggestionList as suggestion}
        <div class="border border-gray-800 p-4 mb-4">
          <p>Suggestion: {suggestion.text}</p>
          <p>From: {suggestion.username}</p>
        </div>
      {/each}
    </div>
  </div>
</section>
{:else}
<Signin />
{errorMessage()}
{/if}