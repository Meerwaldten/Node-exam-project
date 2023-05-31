<script>
    import Navbar from "./components/Navbar.svelte";
    import TailwindCss from "./TailwindCSS.svelte";
    import { Route, Router } from "svelte-navigator";
    import Signin from "../src/pages/Signin/Signin.svelte";
    import Home from "../src/pages/Home/Home.svelte";
    import Signup from "../src/pages/Signup/Signup.svelte";
    import CreateCharacter from "../src/pages/CreateCharacter/CreateCharacter.svelte";
    import FindCharacter from "./pages/FindCharacter/FindCharacter.svelte";
    import Suggestion from "./pages/Suggestion/Suggestion.svelte";
    import Admin from "./pages/Admin/Admin.svelte";
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
  <Route path="createcharacter">
    <CreateCharacter/>
  </Route>
  <Route path="/findcharacter">
    <FindCharacter/>
  </Route>
  <Route path="/suggestion">
    <Suggestion/>
  </Route>
  <Route path ="/admin">
    <Admin/>
  </Route>
</Router>
