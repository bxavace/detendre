interface Videos {
    id: number,
    title: string,
    link: string,
    type: string,
}

interface Country {
    name: string,
    videos: Videos[],
}

const countries: Country[] = [
    {
        name: "Austria",
        videos: [
            {
                id: 1,
                title: "Driving in Austria 1: Grossglockner High Alpine Road | 4K 60fps",
                link: "https://www.youtube.com/embed/dd8Mw5Ay4uE?si=0dZuS5c5vvX43sGD",
                type: "driving"
            }
        ]
    },
    {
        name: "Belgium",
        videos: [
            {
                id: 2099,
                title: "Driving in Belgium (Bruges) 🚗 Sunset Drive in Bruges City Centre | Driving in Europe [4K HDR]",
                link: "https://www.youtube.com/embed/8t9VJ3rXbwc?si=XUDyHvrux5Xajwbg",
                type: "driving"
            }
        ]
    },
    {
        name: "Bulgaria",
        videos: [
            {
                id: 4901,
                title: "DRIVING around PRIMORSKO TOWN in BULGARIA 4K (60fps)",
                link: "https://www.youtube.com/embed/qNqJVQPJAd8?si=sdE9D6nM6MnSTsaj",
                type: "driving"
            }
        ]
    },
    {
        name: "Croatia",
        videos: [
            {
                id: 4011,
                title: "Driving in Croatia in September 2023 from Ploče to Split on the highway",
                link: "https://www.youtube.com/embed/0oCXSUEl6Fk?si=T47dcewRVqvjHhr4",
                type: "driving"
            }
        ]
    },
    {
        name: "Cyprus",
        videos: [
            {
                id: 3009,
                title: "DRIVING in NICOSIA CITY *Lefkosia* in CYPRUS in 4K (60fps)",
                link: "https://www.youtube.com/embed/rufeXCPoCwk?si=vPfo8-AFH3VYfi44",
                type: "driving"
            }
        ]
    },
    {
        name: "Czech Republic",
        videos: [
            {
                id: 1031,
                title: "Driving in Prague, Czechia - the Heart of Europe - 4K City Drive",
                link: "https://www.youtube.com/embed/0nh7zkq9JZ4?si=njTYX8eB-qHssuar",
                type: "driving"
            }
        ]
    },
    {
        name: "Denmark",
        videos: []
    },
    {
        name: "Estonia",
        videos: []
    },
    {
        name: "Finland",
        videos: []
    },
    {
        name: "France",
        videos: []
    },
    {
        name: "Germany",
        videos: []
    },
    {
        name: "Greece",
        videos: []
    },
    {
        name: "Hungary",
        videos: []
    },
    {
        name: "Ireland",
        videos: []
    },
    {
        name: "Italy",
        videos: [
            {
                id: 34999,
                title: "Driving the Sella Pass, Italy",
                link: "https://www.youtube.com/embed/M9M1jt6ueok?si=m5z1nkz-BP--IJys",
                type: "driving"
            }
        ]
    },
    {
        name: "Latvia",
        videos: []
    },
    {
        name: "Lithuania",
        videos: []
    },
    {
        name: "Luxembourg",
        videos: []
    },
    {
        name: "Malta",
        videos: []
    },
    {
        name: "Netherlands",
        videos: []
    },
    {
        name: "Poland",
        videos: []
    },
    {
        name: "Portugal",
        videos: []
    },
    {
        name: "Romania",
        videos: []
    },
    {
        name: "Slovakia",
        videos: []
    },
    {
        name: "Slovenia",
        videos: []
    },
    {
        name: "Spain",
        videos: []
    },
    {
        name: "Sweden",
        videos: []
    },
    {
        name: "United Kingdom",
        videos: []
    }
];

export default countries;