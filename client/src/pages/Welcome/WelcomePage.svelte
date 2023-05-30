<script>
    import Barbarian from "../../components/Classes/Barbarian.svelte";
    import Druid from "../../components/Classes/Druid.svelte";
    import Wizard from "../../components/Classes/Wizard.svelte";
    import Dwarf from "../../components/Races/Dwarf.svelte";
    import Elf from "../../components/Races/Elf.svelte";
    import Human from "../../components/Races/Human.svelte";
    import Basic from "../../components/Basic.svelte";
    import Modal from "../../components/Modal.svelte";

    const choices = [
        {id: 0, text: "The basics", component: Basic},
        {id: 1, text: "Barbarian", component: Barbarian},
        {id: 2, text: "Druid", component: Druid},
        {id: 3, text: "Wizard", component: Wizard},
        {id: 4, text: "Dwarf", component: Dwarf},
        {id: 5, text: "Elf", component: Elf},
        {id: 6, text: "Human", component: Human},

    ];

    let selected;
    let showModal = false;


</script>

<section class="bg-gray-300 ">
<div class="container mx-auto text-center">
<h1>What would you like to learn more about?</h1>
    <select bind:value={selected} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >
        {#each choices as choice}
            <option value={choice} class="block px-4 py-2 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white">
                {choice.text}
            </option>
        {/each}
    </select>
    <br>
    <br>
    <button on:click={() => (showModal = true)} class="bg-red-500 text-black hover:bg-red-600 hover:text-white py-2 px-4 rounded"> Link to more detailed info </button>
    
    <Modal bind:showModal>
	    <h2 slot="header"> Link to the official page for Dungeon and Dragons! </h2>
      <a href="https://dnd.wizards.com/" target="_blank"> Click here </a>
    </Modal>
</div>

{#if selected}
    <svelte:component this={selected.component} />
{/if}

</section>