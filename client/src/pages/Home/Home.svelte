<script>
    import { onMount } from "svelte";
    import { BASE_URL, myUsername } from "../../stores/globalStore";
    import WelcomePage from "../Welcome/WelcomePage.svelte";
    console.log("Current user logged in: " + $myUsername + " on homepage");
</script>

<section class="bg-gray-300">
{#if $myUsername}
<h1 class="text-gray-400">Hej {$myUsername}, du er sej!</h1>
<WelcomePage/>
{:else}
<WelcomePage/>
{/if}
</section>


