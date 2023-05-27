<script>
    import Navbar from "./components/Navbar.svelte";
    import TailwindCss from "./TailwindCSS.svelte";
    import { Route, Router } from "svelte-navigator";
    import Signin from "../src/pages/Signin/Signin.svelte";
    import Home from "../src/pages/Home/Home.svelte";
    import Signup from "../src/pages/Signup/Signup.svelte";
    import Dwarf from "../src/components/Races/Dwarf.svelte";
    import Barbarian from "../src/components/Classes/Barbarian.svelte";
    import CreateCharacter from "../src/pages/CreateCharacter/CreateCharacter.svelte";
 


</script>

<Navbar/>
<Router>
<Route path="/">
    <Home/>
  </Route>
  <Route path="/signin">
    <Signin/>
  </Route>
  <Route path="/signup">
      <Signup/>
  </Route>
  <Route>
    <Route path="createcharacter">
      <CreateCharacter/>
    </Route>
  </Route>
  <Route path="/dwarf">
    <Dwarf/>
  </Route>
  <Route path="/barbarian">
    <Barbarian/>
  </Route>
</Router>
