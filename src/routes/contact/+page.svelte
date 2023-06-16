<script>
// @ts-nocheck
   import  Icon from "svelte-awesome/components/Icon.svelte"

    import {moonO, navicon} from "svelte-awesome/icons";

  import ContactIcon from "../../components/Contact/ContactIcon.svelte";
import Form from "../../components/Contact/Form.svelte";
  import { onMount } from "svelte";

let themeColor;
        onMount(() => {
            themeColor = localStorage.getItem("theme");
        })
        

function handleClick(theme){
    document.documentElement.setAttribute('data-theme', theme)
    themeColor = theme;
    localStorage.setItem("theme", theme);
}

</script>
<div class="page-container">
    <div class="nav-icon">
        <Icon data={navicon} scale="1.2" />
    </div>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="theme-icon" on:click={themeColor == "light" ? ()=>handleClick("dark") : ()=>handleClick("light") }>
        <Icon data={moonO} scale="1.5"/>
    </div>
         <div class="pageName">
        <header>
            <h1 id={themeColor == "light" ? "yoo-light" : "yoo"}><a href="/" data-sveltekit-preload-data="tap">Yoo<br />Gallery</a></h1>
        </header>
    </div>
    <Form {themeColor}/>
     <ContactIcon />
</div> 

<style>
    .nav-icon {
        position: absolute;
        top: 1em;
        left: 1em;
    }

    .theme-icon {
        position: absolute;
        top: 1em;
        right: 1em;
    }
    .page-container {
        margin: 0;
        padding: 0;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .page-container div header {
        cursor: pointer;
    }
    .page-container div header h1 {
        font-weight: 900;
        text-align: center;
        font-family: 'Allura', cursive;
        font-size: 2.5em;
        line-height: 0.9em;
        background: linear-gradient(antiquewhite, orange);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
    }

    main div header h1:hover {
        opacity: 80%;
    }

    #yoo-light{
        background: linear-gradient(black, orange);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
    }


    
</style>