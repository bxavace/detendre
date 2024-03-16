<script lang="ts">
    import countries from "$lib/list";

    export let selectedCountry: string;
    export let selectedMode: string;
    let selectedCountryLink: string = "";
    
    let additionalSettings: string = "autohide=1&controls=0&autoplay=1&mute=1&start=100&vq=large&showinfo=0&enablejsapi=1&widgetid=1&rel=0&playsinline=1";
    let staticNoise = true;
    setTimeout(() => {
        staticNoise = false;
    }, 5000);

    function delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    async function updateBackground(selectedCountry: string, selectedMode: string) {
        staticNoise = true;
        for (let country of countries) {
            if (country.name == selectedCountry) {
                if (selectedMode == "Walk")
                    selectedCountryLink = country.videos_walk[Math.random() * country.videos_walk.length | 0].link;
                else if (selectedMode == "Drive") {
                    selectedCountryLink = country.videos_drive[Math.random() * country.videos_drive.length | 0].link;
                }
                await delay(6500);
                staticNoise = false;
            }
        }
    }

    $: updateBackground(selectedCountry, selectedMode);
</script>

<div class:staticNoise></div>

<div class="blockbox"></div>

<div class="video-player">
    <div class="video-layout">
        <iframe width="100%" height="100%" src="{selectedCountryLink + "&amp;" + additionalSettings}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
</div>
<style>
    .staticNoise {
        width: 200vw;
        height: 200vh;
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

    .video-player {
        z-index: 9;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        user-select: none;
    }

    .video-layout {
        /* position: absolute; */
        -moz-transform: scale(1.135);
        -webkit-transform: scale(1.135);
        -o-transform: scale(1.135);
        -ms-transform: scale(1.135);
        transform: scale(1.135);
        width: 100vw;
        height: 100%;
    }

    @keyframes b {
        100% {background-position: 50% 0, 60% 50%}
    }
</style>