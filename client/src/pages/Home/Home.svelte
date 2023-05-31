<script>
    import { onMount } from "svelte";
    import WelcomePage from "../Welcome/WelcomePage.svelte";
    import { BASE_URL, myUsername, isUserAdmin } from "../../stores/globalStore";

    onMount(async() => {
        try {
            const response = await fetch(`${BASE_URL}/users`, {
            method: "GET",
            headers: {
            'Content-Type': 'application/json',
            },
             credentials: "include"
             });

            if (response.status === 200) {
            const data = await response.json();
            const { username, isAdmin } = data.data;
            myUsername.set(username);
            isUserAdmin.set(isAdmin);
            }
            } catch (error) {
            console.log(error);
            };
    })
</script>

<section class="bg-gray-300">

<WelcomePage/>

</section>


