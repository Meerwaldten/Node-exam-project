<script>
    import { navigate } from "svelte-navigator";
    import { BASE_URL, myUsername } from "../../stores/globalStore";
    import Signin from "../Signin/Signin.svelte";
    import showToastify from "../../stores/Toastify";
  import Dwarf from "../../components/Races/Dwarf.svelte";
  import { barbarianDescription, druidDescription, dwarfDescription, elfDescription, humanDescription, wizardDescription } from "../../stores/descriptionStore";

    let characterName = ''
    let characterRace = '';
    let characterClass = '';

    const races = [
        "Dwarf", "Elf", "Human"
    ];
    
    const classes = [
        "Barbarian", "Druid", "Wizard"
    ]

    async function handleSubmit() {
        const response = await fetch( $BASE_URL + "/createcharacter", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({ characterName, characterRace, characterClass})
        });
        if (response.ok) {
            showToastify("Character created, check your mail!");
            navigate("/");
        } else {
            showToastify("Something failed!")
            navigate("/createcharacter")
        };
    }

</script>


{#if $myUsername}
<section class="bg-gray-50 dark:bg-gray-300">
    <section class="text-gray-600 body-font bg-gray-300">
        <div class="container px-5 py-18 mx-auto">
          <h1 class="text-3xl font-medium title-font text-gray-900 mb-5 text-center">Create a new character!</h1>
          <div class="flex flex-wrap -m-4">
            <div class="p-4 md:w-1/2 w-full">
              <div class="h-full bg-gray-200 p-8 rounded">
                <h1 class="text-3xl font-medium title-font text-gray-900 mb-5 text-center">Races</h1>
                <div class="font-small font-bold title-font text-gray-900 mb-5 text-center">Dwarf</div>
                <p class="text-center mb-5">{dwarfDescription}</p>
                <div class="font-small font-bold text-gray-900 mb-5 text-center">Elf</div>
                <p class="text-center mb-5">{elfDescription}</p>
                <div class="font-small font-bold text-gray-900 mb-5 text-center">Human</div>
                <p class="text-center mb-5">{humanDescription}</p>
    
                <h1 class="text-3xl font-medium title-font text-gray-900 mb-5 text-center">Classes</h1>
    
                <div class="font-small font-bold text-gray-900 mb-5 text-center">Barbarian</div>
                <p class="text-center mb-5">{barbarianDescription}</p>
                <div class="font-small font-bold text-gray-900 mb-5 text-center">Druid</div>
                <p class="text-center mb-5">{druidDescription}</p>
                <div class="font-small font-bold text-gray-900 mb-5 text-center">Wizard</div>
                <p class="text-center mb-5">{wizardDescription}</p>
                
              </div>
            </div>
            <div class="p-4 md:w-1/2 w-full">
              <div class="h-full bg-gray-200 p-8 rounded">
                <section class="bg-gray-50 dark:bg-gray-200">
                    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                        <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                                <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                    Character creation
                                </h1>
                                <form on:submit|preventDefault={handleSubmit} class="space-y-4 md:space-y-6" action="#">
                                    <div>
                                        <label for="characterName" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name of your character</label>
                                        <input type="text" bind:value={characterName} id="characterName" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required={true}>
                                    </div>
                                    <div>
                                        <label for="characterRace" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Race of your character</label>
                                        <select bind:value={characterRace} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required={true}>
                                            {#each races as race}
                                                <option value={race} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                    {race}
                                                </option>
                                            {/each}
                                        </select>
                                      <label for="characterClass" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Class of your character</label>
                                      <select bind:value={characterClass} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required={true}>
                                        {#each classes as classes}
                                            <option value={classes} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                {classes}
                                            </option>
                                        {/each}
                                    </select>
                                    </div>
                                    <button type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create character!</button>
                                </form>
                            </div>
                        </div>
                    </div>
                  </section>
                
                </div>
            </div>
          </div>
        </div>
    </section>
</section>
{:else}
<Signin/>
{/if}
