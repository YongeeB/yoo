<script>
// @ts-nocheck

    import  Icon from "svelte-awesome/components/Icon.svelte"
    import { facebook, instagram, twitter, whatsapp } from "svelte-awesome/icons";
</script>
<div class="visit-container">
    <h4>visit us on</h4>
    <div class="icon-container">
        <Icon data={facebook} scale="1.5"  style="margin-right: 10px; color: blue;" />
        <Icon data={instagram} scale="1.5"  style="margin-right: 10px; color: orange;" />
        <Icon data={twitter} scale="1.5"  style="margin-right: 10px; color: lightblue" />
        <Icon data={whatsapp} scale="1.5"  style="color: lime;" />
    </div> 
    
</div>

<style>
    h4 {
        text-align: center;
        margin-bottom: 5px;
    }
    .visit-container {
        margin: 1.2em 0;
    }

</style>