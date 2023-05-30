<script>
    import { onDestroy } from "svelte";
    import { BASE_URL, myUsername, suggestionList, characterSuggestionList } from "../../stores/globalStore";
    import io from "socket.io-client";
    import showToastify from "../../stores/Toastify";

    const socket = io($BASE_URL);

    
  let characterSuggestion = "";
  let adminSuggestion = "";

  function sendCharacterSuggestion() {
    const trimmedSuggestion = characterSuggestion.trim();

    if (trimmedSuggestion === "") {
      showToastify("Nothing in suggestion, please type a suggestion before submitting");
    } else {
        showToastify("Thanks for suggesting a character to create!")
      socket.emit("character suggestion", { message: trimmedSuggestion, username: $myUsername });
      characterSuggestion = "";
    }
  }

  function sendAdminSuggestion() {
    const trimmedSuggestion = adminSuggestion.trim();

    if (trimmedSuggestion === "") {
      showToastify("Nothing in suggestion, please type a suggestion before submitting");
    } else {
        showToastify("Suggestion submitted to the admins, thank you!")
      socket.emit("suggestion to admin", { text: trimmedSuggestion, username: $myUsername });
      adminSuggestion = "";
    }
  }

  function handleUserCharacterSuggestion(data) {
    characterSuggestionList.update(list => {
      list.unshift({
        text: data.message,
        myUsername: $myUsername
      });
      if (list.length > 5) {
        list = list.slice(0, 5);
      }
      return list;
    });
  }

  function handleAdminReceivedSuggestion(data) {
    suggestionList.update(list => {
      list.push({
        text: data.text,
        username: $myUsername
      });
      return list;
    });
  }

  socket.on("user suggested a character", handleUserCharacterSuggestion);
  socket.on("admin received suggestion", handleAdminReceivedSuggestion);

  onDestroy(() => {
    // Clean up event listeners when component is destroyed
    socket.off("user suggested a character", handleUserCharacterSuggestion);
    socket.off("admin received suggestion", handleAdminReceivedSuggestion);
  });

</script>

<section class="bg-gray-50 dark:bg-gray-300">
    <div class="container mx-auto ">
        <div class="flex flex-wrap">
            <!-- Left side: Suggest character -->
            <div class="p-4 md:w-1/2 w-full">
                <div class="h-full bg-gray-200 p-8 rounded">
                    <div class="flex flex-col items-center justify-top px-6 py-8 mx-auto md:h-screen lg:py-0">
                        <h1 class="text-center">Suggest a character for others to make!</h1>
                        <br>
                        <input type="text" bind:value={characterSuggestion} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <br>
                        <button on:click={sendCharacterSuggestion} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Suggest a character</button>
                        <br>

                        {#each $characterSuggestionList as suggestion}
                            <div class="border border-black p-4 mb-4 bg-gray-300">
                            <p>Suggestion: {suggestion.text}</p>
                            <p>From user: {suggestion.myUsername}</p>
                            </div>
                        {/each}
                        </div>
                    </div>
                </div>
        <!-- Right side: Suggest to admins -->
        <div class="p-4 md:w-1/2 w-full">
          <div class="h-full bg-gray-200 p-8 rounded">
            <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <h1 class="text-center">If you have any suggestions for future things to add to the website or anything that could work better, feel free to enter them here!</h1>
                <br>
                <input type="text" bind:value={adminSuggestion} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <br>
                <button on:click={sendAdminSuggestion} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Send a suggestion to the admins</button>
            </div>
          </div>
         </div>
        </div>
    </div>
</section>

  