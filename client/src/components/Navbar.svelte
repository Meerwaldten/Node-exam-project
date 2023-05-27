<script>
    import { BASE_URL, myUsername } from "../stores/globalStore";
    import {Link, Router, Route, navigate} from "svelte-navigator";

    async function handleLogout() {
        try {
            const response = await fetch( $BASE_URL + "/logout", {
                method: 'POST',
                credentials: 'include', // Include credentials for sending cookies
            });

            if (response.status === 200) {
              localStorage.setItem("myUsername", "");
              myUsername.set("");
              console.log("You've logged out")
              navigate("/");
            } else {
                // Handle logout error
            }
        } catch (error) {
            // Handle logout error
        }
    }

    let isDropdownOpen = false;

    const handleDropdownClick = () => {
      isDropdownOpen = !isDropdownOpen;
    }
</script>

<Router>
  <nav class="bg-gray-800">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden"></div>
        <div class="flex flex-1 items-center justify-start">
          <div class="flex flex-shrink-0 items-center">
            <img class="hidden h-8 w-auto lg:block" src="images/Eagle.png" alt="Eagle" />
          </div>
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
              <Link to="/"class="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"aria-current="page"> Home </Link>
              <Link to="/createcharacter" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" >Create a new character </Link>
            </div>
          </div>
        </div>
        <div class="relative inline-block text-left right-0">
          <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" 
          type="button" on:click={handleDropdownClick}> Profile <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> 
            <path stroke-linecap="round" stroke-linejoin="round"stroke-width="2" d="M19 9l-7 7-7-7" ></path></svg></button>
          {#if isDropdownOpen}
          <div class="origin-top-right absolute right-0 mt-2 w-44 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 dark:bg-gray-700" > 
            <div class="py-2 text-sm text-gray-700 dark:text-gray-200">
              <Link to="/signin" on:click={handleDropdownClick} class="block px-4 py-2 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white" > Sign in</Link>
              <Link to="/signup" on:click={handleDropdownClick} class="block px-4 py-2 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white" > Sign up </Link>
              <Link to="/" on:click={handleLogout} on:click={handleDropdownClick} class="block px-4 py-2 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"> Sign out </Link>
            </div>
          </div>
          {/if}
        </div>
      </div>
    </div>
  </nav>
</Router>