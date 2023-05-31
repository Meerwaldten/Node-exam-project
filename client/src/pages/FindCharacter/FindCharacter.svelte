<script>
    import { onMount } from "svelte";
    import { BASE_URL, myUsername } from "../../stores/globalStore";
    import { createEventDispatcher } from "svelte";
    import showToastify from "../../stores/Toastify";
    import Signin from "../Signin/Signin.svelte";
  

  

    let characters = [];
    let characterToDelete = null;
    let showModal = false;
    const dispatch = createEventDispatcher();


    async function fetchCharacters() {
    try {
      const response = await fetch($BASE_URL + "/findcharacters", {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include'
      });

      if (response.ok) {
        const charactersResponse = await response.json();
        characters = charactersResponse;
      }
    } catch (error) {
      console.log(error)
    }
  }


    onMount(fetchCharacters)

    async function confirmDelete(character) {
    characterToDelete = character;
    showModal = true;
    }
    

    async function handleDelete() {
    if (characterToDelete) {
      try {
        const response = await fetch($BASE_URL + "/deletecharacter", {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(characterToDelete),
          credentials: 'include'
        });

        if (response.ok) {
          dispatch("characterDeleted", characterToDelete);
          fetchCharacters();
        }
      } catch (error) {
        console.log(error);
      }
    }

    closeModal();
  }

  function closeModal() {
    showModal = false;
    characterToDelete = null;
  }

  function errorMessage(){
        showToastify("You dont have access here, please sign in")
    }

</script>

{#if $myUsername}
<section class="bg-gray-50 dark:bg-gray-300">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto">
      <div class="container mx-auto">
          {#each characters as character}
              <div class="border border-black p-4 mb-4 text-center">
                  <h3>Name of your character: {character.name}</h3>
                  <p>Race of your character: {character.race}</p>
                  <p>Class of your character: {character.class}</p>
                  <button on:click={() => confirmDelete(character)} class="bg-red-500 text-black hover:bg-red-600 hover:text-white py-2 px-4 rounded">Delete character</button>
              </div>
          {/each}
      </div>
  </div>
  {#if showModal}
  <div class="fixed inset-0 flex items-center justify-center z-50">
    <div class="absolute inset-0 bg-gray-800 opacity-50"></div>
    <div class="bg-white p-6 rounded-lg z-10">
      <h2 class="text-lg font-semibold mb-4">Confirm Deletion</h2>
      <p class="mb-4">Are you sure you want to delete the character?</p>
      <div class="flex justify-end">
        <button on:click={handleDelete} class="bg-red-500 text-white hover:bg-red-600 py-2 px-4 rounded mr-2">Delete</button>
        <button on:click={closeModal} class="bg-gray-400 text-white hover:bg-gray-500 py-2 px-4 rounded">Cancel</button>
      </div>
    </div>
  </div>
{/if}
</section>
{:else}
<Signin/>
{errorMessage()}
{/if}