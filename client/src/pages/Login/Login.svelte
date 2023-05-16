<script>
    import { BASE_URL, myUsername } from "../../stores/globalStore.js";
    import { navigate } from "svelte-navigator";

    let username = '';
    let password = '';
    
    async function handleSubmit() {
      if (!username || !password) {
        alert('Please fill in all fields');
      }
      
      const response = await fetch($BASE_URL + "/login", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        console.log(username);
        myUsername.set(username);
        alert("Login successful, redirecting");
        navigate("/")
      } else {
        alert("Login failed, try again");
        navigate("/login")
      }
    }
</script>

  

<div class="form-container">
    <form on:submit|preventDefault={handleSubmit}>
        <label for="username">Username:</label>
        <input type="text" bind:value={username} id="Username">
    
        <label for="password">Password:</label>
        <input type="password" bind:value={password} id="password">
    
        <button type="submit">Submit</button>
     </form>
</div>

  
<style>
    input{
      display: block; 
      margin-bottom: 1rem;
    }
    .form-container {
    display: flex; 
    justify-content: center;
    align-items: center; 
    height: 100vh;
    }
</style>