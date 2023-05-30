<script>
  import Socket from "../../components/Sockets/Socket.svelte";
  import { myUsername } from "../../stores/globalStore";
  import Signin from "../Signin/Signin.svelte";

</script>


{#if $myUsername}
<Socket/>
{:else}
<Signin/>
{/if}