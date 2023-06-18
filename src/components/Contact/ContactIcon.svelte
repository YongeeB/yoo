<script>
// @ts-nocheck

  import { createEventDispatcher, onMount } from "svelte";

// @ts-nocheck

    import { Icon } from "svelte-awesome";
    import {phone} from "svelte-awesome/icons";
    
    let theme;

    onMount(()=>{
        theme = localStorage.getItem("theme")
    })

    const platformsIcons = [
        {
            name: "Instagram",
            src: "/instagram.png",
            link: "https://instagram.com/yooaesthetics?igshid=MzNINGNkZWQ4Mg=="
        },
        {
            name: "WhatsApp",
            src: "/whatsapp.png",
            link: ""
        },
        {
            name: "TikTok",
            src: "/tiktok.png",
            link: "https://www.tiktok.com/@yoo_gallery?_t=8dD4UoGxDQT&_r=1"
        },
        {
            name: "Snapchat",
            src: "/snapchat.png",
            link: ""
        }
    ]

    let h3Ref;
    let name;
   
    function handleHover(e){
        const eName = e.target.childNodes[0].childNodes[0].alt;
        h3Ref.textContent = eName;
        name = eName;

    }


</script>
<div class="visit-container">
    <h4>visit us on</h4>
    <div class="icons">
         {#each platformsIcons as icon}
    <div on:mouseenter={(e)=>handleHover(e)} class="link">
    <a href={icon.link}}>
        <img alt={icon.name} src={icon.src}/>
        <h3 bind:this={h3Ref} class="name">{""}</h3>
    </a>
    </div>
    {/each}
    </div>
    <div id="call">
        <div class="circle" id={theme=="light" ? "light" : ""}>
        <a href="tel:+2348171983663">
        <Icon data={phone} class={theme=="dark" ? "phone" : "phone-light"} scale="1"/>
        </a>
        </div>
    </div>
    
</div>

<style>
    h4 {
        text-align: center;
        margin: 10px 0;
        font-family: "Fira Code";
    }

    a {
        text-decoration: none;
    }

    .icons {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    img {
        width: 25px;
        height: 25px;
        border-radius: 50%;
        margin: 0 1.2em;
        transition: all .5s linear;
    }

    img[alt="Instagram"]{
         border-radius: 7px;
         background-color: blue;
    }

    img[alt="Snapchat"]{
         width: 30px;
         height: 30px;
    }

    img:hover{
        transform: scale(1.1);
    }

     .name {
        position: absolute;
        top: 1em;
        left: 0;
        text-align: center;
        width: 100vw;
        opacity: 0;
        transition:all .5s linear;
        font-family: 'Arimo', sans-serif;
    }

     div:hover h3{
        opacity: 1;
    }

    #call {
        position: absolute;
        top: 0;
        height: 100vh;
        display: flex;
        align-items: center;
        right: 1em;
    }

    .circle {
        width: 30px;
        height: 30px;
        background-color: orange;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        /* align-items: center; */
    }

    a :global(.phone){
        color: black;
        height: 100%;
    }

    a :global(.phone-light){
        color: green;
        height: 100%;
        font-weight: bolder;
    }

    #light {
        background: antiquewhite;
        font-weight: bolder;
    }


</style>