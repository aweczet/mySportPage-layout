<script>
    import {MENU_ITEMS} from "./consts.ts";
</script>

<header class="flex justify-between items-center px-16 py-4 bg-blue-500 text-white">
    <a href="/" class="flex gap-2 items-center">
        <i class="fa-solid fa-broom-ball text-20"></i>
        <div class="text-12 italic">My Sport Page</div>
    </a>
    <div>
        <i class="fa-solid fa-user"></i>
        Profile
    </div>
</header>
<nav class="flex justify-between items-center gap-8 whitespace-nowrap px-16 pt-2 bg-blue-600 text-white">
    {#each MENU_ITEMS as item}
        <a href={`/${item.sportName.toLowerCase().replaceAll(' ', '-')}`}
            class="flex flex-col text-center">
            <i class='fa-solid {item.icon} text-12'></i>
            {item.sportName}
        </a>
    {/each}
</nav>
<slot></slot>