<script lang="ts">
    import Lazy from "svelte-lazy"


    let images = [
        {
            name: "Yoo Photography",
            src:  "/camera.jpg",
        },
        {
            name: "Yoo Painting",
            src:  "/painting.jpg",
        },
        {
            name: "Yoo Tie And Dye",
            src:  "/tie-dye.jpg",
        },
        {
            name: "Yoo Aesthetics",
            src:  "/camera.jpg",
        },
        {
            name: "Yoo Stitches",
            src:  "/camera.jpg",
        },
        {
            name: "Yoo Resin",
            src:  "/camera.jpg",
        },
        {
            name: "Yoo Brand",
            src:  "/camera.jpg",
        },
        {
            name: "Yoo Sculptures",
            src:  "/camera.jpg",
        },
        {
            name: "Yoo Graphic design",
            src:  "/camera.jpg",
        },
        {
            name: "Yoo Seed And Grains",
            src:  "/camera.jpg",
        },
        {
            name: "Yoo Paws",
            src:  "/camera.jpg",
        },
         {
            name: "Yoo Scribblings",
            src:  "/camera.jpg",
        },
         {
            name: "Yoo Embroidery",
            src:  "/camera.jpg",
        },
         {
            name: "Yoo Pottery",
            src:  "/camera.jpg",
        },
         {
            name: "Yoo Batiks",
            src:  "/camera.jpg",
        },
    ]


</script>

<div class="cards-container">
<div class="grid">
{#each images as image}
<div class="card-container">
<!-- svelte-ignore a11y-img-redundant-alt -->
<div class="image-container">
<!-- <img  class="lazy-image" data-src={image.src} alt={image.name} /> -->
<Lazy height="300px">
    <img src={image.src} alt={image.name} />
</Lazy>
</div>
<h3 id="title">{image.name}</h3>
<p id="contents">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque magnam maxime optio tempore, quia, nisi deleniti soluta enim fugiat molestiae possimus natus fugit itaque quam architecto adipisci voluptatum a! Porro deserunt alias repellat eum quibusdam eius officia dolorum id ipsa.</p>
</div>
{/each}
</div>
</div>

<style>
    .cards-container {
        display: flex;
        flex-direction: column;
    }
    img {
        width: 90%;
        max-width: 400px;
        margin-bottom: 1em;
        border-radius: 20px;
    }

    .card-container {
        margin-bottom: 1em;
    }

    .cards-container .image-container {
        padding-top: 10px;
        display: flex;
        justify-content: center;
    }

    #title {
        cursor: pointer;
        color: orange;
        font-size: 1.5em;
        text-align: center;
        margin-bottom: 10px;
    }

    #title:hover {
        text-decoration: underline;
    }

    #contents {
        font-family: cursive;
        padding: 20px;
        line-height: 1.5em;
    }

    @media(min-width: 800px){
        .cards-container {
            display: flex;
            justify-content: center;
        }
        .grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
        }

        .image-container {
            align-self: center;
        }
    }

    @media(min-width: 1150px){
        .grid {
            grid-template-columns: 1fr 1fr 1fr;
        }
    }
</style>


