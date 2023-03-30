<script>
    export let leagueName;

    let expanded = false;
</script>

<div>
    <button on:click={() => expanded = !expanded}>{leagueName}</button>
    <ul hidden={!expanded}>
        <slot></slot>
    </ul>
</div>