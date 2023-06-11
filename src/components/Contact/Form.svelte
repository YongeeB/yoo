<script>

</script>
<div class="form-container">
        <input type="text" placeholder="Full Name" />
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
        border: 1px solid var(--primary-color);
        font-size: 1em;
        color: orange;
        font-family: "Fira Code", sans-serif;
        font-weight: bold;
        border-radius: 10px;
    }

    input:focus {
        outline: none;
    }


    input::placeholder {
        color: orange;
        opacity: 80%;
    }

    button {
        margin: 10px 0;
        padding: 7px;
        background-color: var(--primary-color);
        font-size: 1.1em;
        border-radius: 10px;
        border: none;
        font-weight: bolder;
    }
</style>
