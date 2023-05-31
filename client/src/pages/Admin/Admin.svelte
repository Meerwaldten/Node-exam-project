<script>
    import SuggestionList from "../../components/Sockets/SuggestionList.svelte";
    import { verifyUser } from "../../components/VerifyUser";
    import { onMount } from "svelte";
    import { isUserAdmin, myUsername } from "../../stores/globalStore";
    import Signin from "../Signin/Signin.svelte";
    import showToastify from "../../stores/Toastify";

    function errorMessage(){
        showToastify("You dont have access here, please sign in")
    }

    onMount(verifyUser)
    
</script>

{#if $myUsername && isUserAdmin}
<section class="bg-gray-50 dark:bg-gray-300">
    <div class="flex flex-col items-right justify-center px-6 py-8 mx-auto lg:py-0">
        <h1 class="text-center">Suggestions from the users:</h1>
        <div class="flex flex-wrap justify-center">
            <SuggestionList/>
        </div>
    </div>
</section>
{:else}
    <Signin/>
    {errorMessage()}
{/if}

