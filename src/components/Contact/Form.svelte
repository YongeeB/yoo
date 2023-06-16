<script>
// @ts-nocheck

    import {onMount} from "svelte";

    let inputRef;

    onMount(()=> {
        inputRef.focus();
    })

    export let themeColor;
</script>
<div class="form-container" id={themeColor == "light" && "light"}>
        <input type="text" placeholder="Full Name" bind:this={inputRef}/>
        <input type="text" placeholder="Email">
        <input type="text" placeholder="Message">
        <button>send</button>
</div>

<style> 
    .form-container {
        width: 100%;
        margin: 20px 0;
        margin-bottom: 0px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

   

    input {
        caret-color: orange;
        padding: 5px 15px;
        width: 60%;
        max-width: 250px;
        height: 30px;
        margin: 10px 0;
        background-color: transparent;
        border: 1px solid var antiquewhite;
        font-size: 1em;
        color: gray;
        font-family: "Fira Code", sans-serif;
        border-radius: 5px;
        outline: none;
    }

     #light input {
        caret-color: #333;
        color: black;
        border: 2px solid black;
        
    }

    input:focus {
        outline: none;
    } 


    input::placeholder {
        color: antiquewhite;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        opacity: 80%;
    }

    #light input::placeholder {
        color: black;
        opacity: 80%;
    }

    button {
        width: 60px;
        margin: 10px 0;
        padding: 7px;
        background-color: antiquewhite;
        font-size: 1.1 em;
        border-radius: 10px;
        border: none;
        font-weight: bolder;
        transition: all .5s linear;
    }

    #light button:hover, button:hover{
        background-color: orange;
    }

    #light button {
        background-color: black;
        color: #fff;
    }
</style>
