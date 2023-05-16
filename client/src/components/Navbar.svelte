<script>
    import {Router, Route, Link} from "svelte-navigator";
    import Login from "../pages/Login/Login.svelte";
    import Home from "../pages/Home/Home.svelte";
    import Signup from "../pages/Signup/Signup.svelte";
</script>

<Router>
    <nav class="nav-container">
      <Link to="/"> Home </Link>
      <Link to="/login"> Login </Link>
      <Link to="/signup"> Signup </Link>
    </nav>
    <Route path="/">
      <Home/>
    </Route>
    <Route path="/login">
      <Login/>
    </Route>
    <Route path="/signup">
        <Signup/>
    </Route>
</Router>