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
        videos: [
            {
                id: 3122,
                title: "Copenhagen - Driving in Denmark - 4k UHD 60 fps",
                link: "https://www.youtube.com/embed/XGd7opYnoZ4?si=t7mxLdkmMGlNaVVO",
                type: "driving"
            }
        ]
    },
    {
        name: "Estonia",
        videos: [
            {
                id: 9904,
                title: "Driving in Estonia. Põltsamaa – Jõgeva. 4K",
                link: "https://www.youtube.com/embed/zSdRqcYYzR0?si=hNqYRo1SvRSRG_uf",
                type: "driving"
            }
        ]
    },
    {
        name: "Finland",
        videos: [
            {
                id: 10,
                title: "Driving from Helsinki city center to Espoo, Finland - 4K",
                link: "https://www.youtube.com/embed/X_Gdgh07k8E?si=SifGhgTybdUUk4w4",
                type: "driving"
            }
        ]
    },
    {
        name: "France",
        videos: [
            {
                id: 11,
                title: "French Countryside Drive 4K - French Villages and Small Forrest Driving",
                link: "https://www.youtube.com/embed/Ln40VRxItT4?si=Q1XMEZb6q9EVCgV2",
                type: "driving"
            }
        ]
    },
    {
        name: "Germany",
        videos: [
            {
                id: 12,
                title: "Frankfurt Evening Drive | Driving in Europe's Financial Capital | Roads of Germany [4K HDR]",
                link: "https://www.youtube.com/embed/2054gi9TzcA?si=ybGI2iQzjKDrjNrY",
                type: "driving"
            }
        ]
    },
    {
        name: "Greece",
        videos: [
            {
                id: 133,
                title: "SANTORINI Greece 4K | Amazing views by car",
                link: "https://www.youtube.com/embed/sIRpOIg4-vw?si=R3LvF-W8EBuCbZbi",
                type: "driving"
            }
        ]
    },
    {
        name: "Hungary",
        videos: [
            {
                id: 422,
                title: "Budapest Hungary 🇭🇺 4K Drive",
                link: "https://www.youtube.com/embed/IH4wGT1vjp8?si=e7Z-hdpkWlCORhnb",
                type: "driving"
            }
        ]
    },
    {
        name: "Ireland",
        videos: [
            {
                id: 501,
                title: "🇮🇪[4K DASHCAM] SUMMER EVENING DRIVE ACROSS DUBLIN CITY CENTRE 4K DRIVING TOUR IRELAND DASH CAM 2022",
                link: "https://www.youtube.com/embed/L0F9qzALGcY?si=qHM6OLedOCeMyEKI",
                type: "driving"
            }
        ]
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
        videos: [
            {
                id: 1029,
                title: "Riga, Latvia. Driving in the city center. 4K",
                link: "https://www.youtube.com/embed/3QYFbHhXBCk?si=DuN11gQnjEJ06YEf",
                type: "driving"
            }
        ]
    },
    {
        name: "Lithuania",
        videos: [
            {
                id: 2643,
                title: "Drive in Kaunas • Autumn in Lithuania • 🇱🇹",
                link: "https://www.youtube.com/embed/LJeQH3rvWdY?si=Q4ioJXp2k9KErAfw",
                type: "driving"
            }
        ]
    },
    {
        name: "Luxembourg",
        videos: [
            {
                id: 2777,
                title: "DRIVING in LUXEMBOURG, Grand Duchy of Luxembourg I 4K 60fps",
                link: "https://www.youtube.com/embed/kXKC_nAKb8s?si=7JT96H4xGOiBF43Y",
                type: "driving"
            }
        ]
    },
    {
        name: "Malta",
        videos: [
            {
                id: 3911,
                title: "Driving in Malta 🇲🇹 Scenic Drive Across Malta and Gozo Island.",
                link: "https://www.youtube.com/embed/6yu-ur02Oto?si=_Klj8mUCqd5cWBfK",
                type: "driving"
            }
        ]
    },
    {
        name: "Netherlands",
        videos: [
            {
                id: 4333,
                title: "Driving in Holland 🇳🇱 From Amsterdam to Hoorn",
                link: "https://www.youtube.com/embed/ha6MiYRMbhs?si=TfcmHJwMwFNgnCD5",
                type: "driving"
            }
        ]
    },
    {
        name: "Poland",
        videos: [
            {
                id: 1213,
                title: "Warsaw - Evening Drive Through Downtown - 4K",
                link: "https://www.youtube.com/embed/dEJhCItMi58?si=fXm0MAzSfOb9H4XQ",
                type: "driving"
            }
        ]
    },
    {
        name: "Portugal",
        videos: [
            {
                id: 9911,
                title: " DRIVING SINTRA, Lisbon District, Estremadura, PORTUGAL I 4K 60fps ",
                link: "https://www.youtube.com/embed/hFYNJNzOM9E?si=HL4rK13i2bEZarrc",
                type: "driving"
            }
        ]
    },
    {
        name: "Romania",
        videos: [
            {
                id: 7111,
                title: " Driving Downtown - Bucharest 4K - Romania | Pipera to Palace of the Parliament - Weekend Drive ",
                link: "https://www.youtube.com/embed/Fgdr2xEDuog?si=6xf_stXnpuAIsEED",
                type: "driving"
            }
        ]
    },
    {
        name: "Slovakia",
        videos: [
            {
                id: 2999,
                title: " Driving in Slovakia from Kosice(Košice) to Presov(Prešov) | 4K | fall 2023 ",
                link: "https://www.youtube.com/embed/9xk7HR83oaE?si=OXKtikbSNXoFVVid",
                type: "driving"
            }
        ]
    },
    {
        name: "Slovenia",
        videos: [
            {
                id: 9902,
                title: " Driving in Ljubljana , Slovenia ",
                link: "https://www.youtube.com/embed/9qpoAW1bceg?si=IFvae3mQRaqzqxvm",
                type: "driving"
            }
        ]
    },
    {
        name: "Spain",
        videos: [
            {
                id: 4446,
                title: " Driving from Andorra 🇦🇩 to Spain 🇪🇸 | Drive from the City of Andorra la Vella to the Town of Toses ",
                link: "https://www.youtube.com/embed/rxeQiSezhyI?si=fSrPEqTqE10hsAaz",
                type: "driving"
            }
        ]
    },
    {
        name: "Sweden",
        videos: [
            {
                id: 6112,
                title: " Sweden Drives: Countryside, autumn colors and sedative Swedish radio P1 ",
                link: "https://www.youtube.com/embed/yV0qD9JltXw?si=IuxRKmIsNNF_45yq",
                type: "driving"
            }
        ]
    },
    {
        name: "United Kingdom",
        videos: [
            {
                id: 8661,
                title: " London Drive - Feb 2023 | Driving to Ilford from Central London [4K HDR] ",
                link: "https://www.youtube.com/embed/zBteu7mmQ3s?si=0qsOcjn36MgNq-gI",
                type: "driving"
            }
        ]
    }
];

export default countries;