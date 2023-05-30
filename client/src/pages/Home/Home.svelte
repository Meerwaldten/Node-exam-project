<script>
    import { onMount } from "svelte";
    import { BASE_URL, myUsername, isUserAdmin} from "../../stores/globalStore";
    import Signin from "../Signin/Signin.svelte";
    import WelcomePage from "../Welcome/WelcomePage.svelte";

    onMount(async () => {
        try {
            const response = await fetch( $BASE_URL + "/users",{
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: "include"
            })
        if (response.status === 200) {
            const data = await response.json();
            const { username, isAdmin } = data.data;
            myUsername.set(username);
            isUserAdmin.set(isAdmin)
            console.log($isUserAdmin)
            }
        } catch (error) {
            console.log(error);
        }
    })
</script>

<section class="bg-gray-300">

<WelcomePage/>

</section>


