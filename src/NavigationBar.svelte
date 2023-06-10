<script>
// @ts-nocheck
    import { onMount } from "svelte";
    // import { Icon } from "svelte-awesome";
    import  Icon from "svelte-awesome/components/Icon.svelte"
    import { moonO } from "svelte-awesome/icons";



    let currentTheme = "light";

    $: whiteTheme = currentTheme == "light";
   function setTheme(theme){
    console.log(currentTheme)
    document.documentElement.setAttribute('data-theme', theme)
    currentTheme = theme;
    localStorage.setItem("theme", theme);
   } 

   onMount(()=> {
    const savedTheme = localStorage.getItem("theme")
    if(savedTheme) {
        setTheme(savedTheme);
        currentTheme = savedTheme;
    }
   })
</script>
<div class="nav-container">
    <div class="header">
        <header>
            <h1>Yoo</h1>
        </header>
    </div>
    <div class="nav-links">
        <nav id="active">home</nav>
        <nav>stores</nav>
        <nav>order</nav>
        <nav>contact</nav>
        <nav>info</nav>
    </div>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="theme" on:click={whiteTheme ? () => setTheme("dark") : () => setTheme("light")}>
        <Icon data={moonO} scale="1.5"/>
    </div>
</div>

<style>
    :global(:root[data-theme='light']) {
        background-color: var(--primary-background);
  }

  :global(:root[data-theme='dark']) {
     background-color: var(--secondary-background);
     color: antiquewhite;
  }
   .nav-container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1em;
    font-family: 'Fira Code', monospace;
   }

   .nav-container .header {
    flex-basis: 10%;
    text-align: left;
   }

   .header h1 {
    color: var(--primary-color);
   }

   .nav-container .nav-links {
    display: flex;
    justify-content: space-around;
    flex-basis: 85%;
    width: 100%;
    margin-right: 10px;
   }

   .nav-links nav {
    padding: 5px 7px;
    font-weight: bold;
    text-transform: capitalize;
    cursor: pointer;
   }

   .nav-links nav:hover {
    color: var(--primary-color);
   }

    .nav-links #active {
    background-color: var(--primary-color);
    border-radius: 5px;
    color: black;
   }

   .nav-links #active:hover {
    color: #000;
   }

   .theme {
    flex-basis: 5%;
    display: flex;
    justify-content: center;
    align-items: center;
   }

   @media(width < 550px){
    .nav-container .header{
        display: none;
    }
    .nav-container .nav-links{
        flex-basis: 80%;
    }

    .theme {
        flex-basis: 5%;
    }
   }
</style>