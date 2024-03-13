<script lang="ts">
    import Overlay from "../Overlay.svelte";
    import Background from "../Background.svelte";

    let selectedCountry: string = "Austria";
    let selectedMode: string = "Drive";

    const countryChange = (event: any) => {
        selectedCountry = event.detail.selectedCountry;
    }

    const modeChange = (event: any) => {
        selectedMode = event.detail.selectedMode;
    }

    let countryLink = {
        name: "Italy",
        videos: [
            {
                id: 34999,
                title: "Driving the Sella Pass, Italy",
                link: "https://www.youtube.com/embed/M9M1jt6ueok?si=m5z1nkz-BP--IJys",
                type: "driving"
            }
        ]
    };

    // let vidLink = countryLink.videos[0].link;
</script>
<div class="main-container">
    <Overlay on:countryChange={countryChange} on:modeChange={modeChange} />
    
    <Background {selectedCountry} />
</div>
<style>
    .main-container {
        padding: 0;
    }
</style>