<script>
    import { onMount } from "svelte";
    import WelcomePage from "../Welcome/WelcomePage.svelte";
    import { verifyUser } from "../../components/VerifyUser";

    onMount(verifyUser)
</script>

<section class="bg-gray-300">

<WelcomePage/>

</section>


