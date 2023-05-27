<script>
    import Barbarian from "../../components/Classes/Barbarian.svelte";
    import Dwarf from "../../components/Races/Dwarf.svelte";
    import Basic from "../../components/Basic.svelte";
    import { myUsername } from "../../stores/globalStore";

    console.log("Current user logged in: " + $myUsername + " on createCharacter");

    const choices = [
        {id: 0, text: "...", component: Basic},
        {id: 1, text: "Dwarf", component: Dwarf},
        {id: 2, text: "Barbarian", component: Barbarian}
    ];

    let selected;
    let answer = "";

    function handleSubmit() {
        alert("Du har valgt ${selected.text}");
    }

</script>

<section class="bg-gray-50 bg-gray-300">
<div class="container mx-auto px-4 bg-slate-500 text-center">
<h2>Choose a character to create!</h2>

    <form on:submit={handleSubmit}>
     <select bind:value={selected}>
         {#each choices as choice}
                <option value={choice}>
                   {choice.text}
              </option>
          {/each}
        </select>
    </form>
</div>

{#if selected}
    <svelte:component this={selected.component} />
{/if}

</section>