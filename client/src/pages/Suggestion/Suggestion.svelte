<script>
  import Socket from "../../components/Sockets/Socket.svelte";
  import { myUsername } from "../../stores/globalStore";
  import Signin from "../Signin/Signin.svelte";
  import showToastify from "../../stores/Toastify";

  function errorMessage(){
        showToastify("You dont have access here, please sign in")
    }

</script>


{#if $myUsername}
<Socket/>
{:else}
<Signin/>
{errorMessage()}
{/if}