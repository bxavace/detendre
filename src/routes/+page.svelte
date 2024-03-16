<script lang="ts">
    import Overlay from "../Overlay.svelte";
    import Background from "../Background.svelte";
    import { GlobeSolid } from 'flowbite-svelte-icons';
    import { Button } from 'flowbite-svelte';
    let selectedCountry: string = "Austria";
    let selectedMode: string = "Drive";

    const countryChange = (event: any) => {
        selectedCountry = event.detail.selectedCountry;
    }

    const modeChange = (event: any) => {
        selectedMode = event.detail.selectedMode;
    }

    let hidden1 = true;

</script>
<div class="main-container">

    <div class="btn-overlay text-center">
        <Button on:click={() => (hidden1 = false)}><GlobeSolid /></Button>
    </div>
    <Overlay on:countryChange={countryChange} on:modeChange={modeChange} bind:hidden={hidden1} />
    
    <Background {selectedCountry}  {selectedMode} />
</div>
<style>
    .main-container {
        padding: 0;
    }

    .btn-overlay {
        z-index: 11;
        position: absolute;
        top: 10px;
        left: 10px;
    }
</style>