<script>
    import { onMount } from "svelte";
    import { BASE_URL, myUsername } from "../../stores/globalStore";
    import Login from "../Login/Login.svelte";

    onMount(async () => {
    const response = await fetch(`{$BASE_URL}/users/me`, {
    credentials: "include"
    });

    const result = await response.json();
    console.log(result);

    myUsername.set(result.data.username);
    });
</script>

{#if $myUsername}
<h1>Hej {($myUsername)}</h1>
{:else}
<Login/>
{/if}


