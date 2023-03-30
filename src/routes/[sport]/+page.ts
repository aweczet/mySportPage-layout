import type {Load} from '@sveltejs/kit'
import {error} from '@sveltejs/kit';
import {MENU_ITEMS} from "../consts";

export const load: Load = ({params}) => {
    const isSupportedSport = MENU_ITEMS.filter((menuItem) =>
        menuItem.sportName.toLowerCase().replaceAll(' ', '-') === params?.sport);

    if (isSupportedSport.length <= 0) {
        throw error(404, "Sport not found")
    }

    if (!isSupportedSport[0]?.enabled) {
        throw error(405, "Sport not supported yet")
    }

    return {
        sport: params.sport,
        countries: [
            {
                id: 1,
                name: "Poland",
                shortcut: "PL",
                leagues: [
                    {
                        id: 1,
                        name: "Ekstraklasa",
                    },
                    {
                        id: 2,
                        name: "I Liga",
                    },
                ],
            },
            {
                id: 2,
                name: "England",
                shortcut: "EN",
                leagues: [
                    {
                        id: 1,
                        name: "Premier League",
                    },
                    {
                        id: 2,
                        name: "Championship",
                    },
                ],
            },
        ],
    }
}