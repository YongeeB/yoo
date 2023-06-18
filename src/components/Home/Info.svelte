<main>
    <section>
        <article>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates cum ad obcaecati, sint, blanditiis est cupiditate autem aut velit reprehenderit neque? Explicabo laborum, fugit necessitatibus atque quia in magnam nobis eius eligendi exercitationem, repellendus voluptate architecto fuga nulla vel ab facere aliquid, voluptates nisi iste! Fugiat iusto cupiditate voluptatum labore perspiciatis modi consequatur! Et itaque veniam ex, natus corporis veritatis ipsa provident officia, velit deleniti quidem harum accusantium rem labore id tempore dicta consectetur modi nisi corrupti. Cum, voluptate cumque?</p>
        </article>
    </section>
</main>

<style>
    main {
        margin: 30px 0;
    }

    main article {
        line-height: 2em;
        font-family: 'Mukta', sans-serif;
    }

    main article::first-letter{
        color: orange;
        font-weight: bolder;
        font-size: 1.4em;
        font-family: cursive;
    }

    @media(min-width: 650px){
        main article {
            font-size: 1.2em;
        }
    }

    @media(min-width: 900px){
        main article {
            font-size: 1.4em;
        }
    }
</style>