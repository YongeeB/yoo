<script>
  import ContactIcon from "../../components/Contact/ContactIcon.svelte";
import Form from "../../components/Contact/Form.svelte";

</script>
<div class="page-container">
         <div class="pageName">
        <header>
            <h1 id="yoo"><a href="/" data-sveltekit-preload-data="tap">Yoo<br />Gallery</a></h1>
        </header>
    </div>
    <Form />
     <ContactIcon />
</div> 

<style>
    .page-container {
        margin: 0;
        padding: 0;
        height: 100vh;
        /* background-color: red; */
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .page-container div header {
        cursor: pointer;
    }
    .page-container div header h1 {
        text-align: center;
        font-family: 'Allura', cursive;
        letter-spacing: 0.2em;
        font-size: 2.5em;
        line-height: 0.9em;
        color: orange;
    }

    main div header h1:hover {
        opacity: 80%;
    }


    
</style>