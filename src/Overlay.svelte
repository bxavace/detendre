<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import { Label, Select, Drawer, Footer, FooterCopyright, FooterLinkGroup, FooterLink, Badge } from 'flowbite-svelte';
    import { sineIn } from 'svelte/easing';

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

    export let hidden: boolean;
    let transitionParams = {
        x: -320,
        duration: 200,
        easing: sineIn
    };
</script>

<Drawer transitionType="fly" {transitionParams} bind:hidden={hidden} id="sidebar1">
    <div class="text">
        <h2 class="text-4xl font-extrabold dark:text-white">détendre</h2>
        <p>unwind and travel at Europe.</p>
    </div>

    <br>

    <Label class="label">
        <p class="text-base font-semibold py-1">Country</p>
        <Select on:change={handleCountryChange} class="select">
            {#each countries as country}
                <option value={country}>{country}</option>
            {/each}
        </Select>
    </Label>

    <br>

    <Label class="label">
        <p class="text-base font-semibold py-1">Mode <Badge color="yellow">Available soon!</Badge></p>
        <Select on:change={handleModeChange} class="select" disabled>
            {#each travelModes as mode}
                <option value={mode}>{mode}</option>
            {/each}
        </Select>
    </Label>

    <Footer>
        <FooterCopyright href="https://github.com/bxavace" by="bxavace" year={new Date().getFullYear()} />
        <FooterLinkGroup ulClass="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
          <FooterLink href="/about">About</FooterLink>
        </FooterLinkGroup>
      </Footer>
</Drawer>

<style>

#sidebar1 {
    z-index: 12;
}
</style>