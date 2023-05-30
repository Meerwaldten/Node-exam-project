<script>
    import { BASE_URL, myUsername } from "../../stores/globalStore.js";
    import { navigate } from "svelte-navigator";
    import showToastify from "../../stores/Toastify.js";

    console.log("Current user logged in: " + $myUsername + " on signin");

    let username = '';
    let password = '';
    
    async function handleSubmit() {
      if (!username || !password) {
        showToastify('Please fill in all fields');
      }
      
      const response = await fetch($BASE_URL + "/login", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: "include",
        body: JSON.stringify({ username, password })
      });

      if (response.ok) {
        const data = await response.json();
        myUsername.set(username);
        showToastify("Login successful");
        } else {
        showToastify("Login failed, try again");
        setTimeout(() => {
        navigate("/signin");
        }, 3000);
      }
    }
</script>

  
<section class="bg-gray-50 dark:bg-gray-300">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign in to your account
              </h1>
              <form on:submit|preventDefault={handleSubmit} class="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label for="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                      <input type="text" bind:value={username} id="Username" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required={true}>
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" bind:value={password} id="password" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required={true}>
                  </div>
                  <button type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                    <p class="text-sm font-light text-gray-500 dark:text-gray-400"> Click here to sign up! 
                     <a href="/signup" class="font-medium text-primary-600 hover:underline dark:text-primary-500"> Sign up </a> 
                   </p>
              </form>
          </div>
      </div>
  </div>
</section>