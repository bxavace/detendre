<script lang="ts">
    import { createEventDispatcher } from "svelte";

    let countries = [
        "Austria",
        "Belgium",
        "Bulgaria",
        "Croatia",
        "Cyprus",
        "Czech Republic",
        "Denmark",
        "Estonia",
        "Finland",
        "France",
        "Germany",
        "Greece",
        "Hungary",
        "Ireland",
        "Italy",
        "Latvia",
        "Lithuania",
        "Luxembourg",
        "Malta",
        "Netherlands",
        "Poland",
        "Portugal",
        "Romania",
        "Slovakia",
        "Slovenia",
        "Spain",
        "Sweden",
        "United Kingdom"
    ];

    let travelModes = ["Drive", "Walk"];

    let selectedCountry;
    let selectedMode;
    const dispatch = createEventDispatcher();

    function handleCountryChange(event: any) {
        selectedCountry = event.target.value;
        dispatch("countryChange", {selectedCountry});
    }

    function handleModeChange(event: any) {
        selectedMode = event.target.value;
        dispatch("modeChange", {selectedMode})
    }
</script>
<div class="overlay">
    <h1>Travel App Settings</h1>
    <button>Display</button>

    <h2>Select a country!</h2>
    <select on:change={handleCountryChange}>
        {#each countries as country}
            <option value={country}>{country}</option>
        {/each}
    </select>

    <h2>Select a mode!</h2>
    <select on:change={handleModeChange}>
        {#each travelModes as mode}
            <option value={mode}>{mode}</option>
        {/each}
    </select>
</div>
<style>
* {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.overlay {
    z-index: 11;
    position: absolute;
    top: 0;
    right: 0;
    width: 20vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    padding: 1rem;
    backdrop-filter: blur(1px);
}

</style>