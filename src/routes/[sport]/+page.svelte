<script>
    import LeagueList from "../../components/LeagueList.svelte";

    export let data;
</script>

<div class="px-16 py-2">
    <ul>
        {#each data?.countries as country}
            <li>
                <LeagueList leagueName="[{country.shortcut}] {country.name}">
                {#each country?.leagues as league}
                    <li class="bg-gray-100"><a href="{data.sport}/{country.id}/{league.id}">{league.name}</a></li>
                {/each}
                </LeagueList>
            </li>
        {/each}

    </ul>
</div>