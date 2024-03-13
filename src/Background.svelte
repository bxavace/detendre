<script lang="ts">
    import countries from "$lib/list";

    export let selectedCountry: string;
    let selectedCountryLink: string = "";
    
    let additionalSettings: string = "controls=0&autoplay=1&mute=1&start=60&vq=large";
    let staticNoise = true;
    setTimeout(() => {
        staticNoise = false;
    }, 5000);

    function delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    async function updateBackground(event: any) {
        staticNoise = true;
        for (let country of countries) {
            if (country.name == event) {
                selectedCountryLink = country.videos[Math.random() * country.videos.length | 0].link;
                await delay(6500);
                staticNoise = false;
            }
        }
    }

    $: updateBackground(selectedCountry);
</script>

<div class:staticNoise></div>

<div class="blockbox"></div>

<iframe width="1920" height="1080" src="{selectedCountryLink + "&amp;" + additionalSettings}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
<style>
    .staticNoise {
        width: 100vw;
        height: 100vh;
        background: repeating-radial-gradient(#000 0 0.0001%,#fff 0 0.0002%) 50% 0/2500px 2500px,
    repeating-conic-gradient(#000 0 0.0001%,#fff 0 0.0002%) 60% 60%/2500px 2500px;
        background-blend-mode: difference;
        animation: b .2s infinite alternate;
    }

    .blockbox {
        z-index: 10;
        position: absolute;
        background-color: rgba(0, 0, 0, 0);
        width: 100vw;
        height: 100vh;
        user-select: none;
    }

    iframe {
        z-index: 9;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        user-select: none;
    }

    @keyframes b {
        100% {background-position: 50% 0, 60% 50%}
    }
</style>