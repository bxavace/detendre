interface Videos {
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
                link: "https://www.youtube.com/embed/dd8Mw5Ay4uE?si=0dZuS5c5vvX43sGD",
                type: "driving"
            }
        ]
    },
    {
        name: "Belgium",
        videos: [
            {
                link: "https://www.youtube.com/embed/8t9VJ3rXbwc?si=XUDyHvrux5Xajwbg",
                type: "driving"
            }
        ]
    },
    {
        name: "Bulgaria",
        videos: [
            {
                link: "https://www.youtube.com/embed/qNqJVQPJAd8?si=sdE9D6nM6MnSTsaj",
                type: "driving"
            }
        ]
    },
    {
        name: "Croatia",
        videos: [
            {
                link: "https://www.youtube.com/embed/0oCXSUEl6Fk?si=T47dcewRVqvjHhr4",
                type: "driving"
            }
        ]
    },
    {
        name: "Cyprus",
        videos: [
            {
                link: "https://www.youtube.com/embed/rufeXCPoCwk?si=vPfo8-AFH3VYfi44",
                type: "driving"
            }
        ]
    },
    {
        name: "Czech Republic",
        videos: [
            {
                link: "https://www.youtube.com/embed/0nh7zkq9JZ4?si=njTYX8eB-qHssuar",
                type: "driving"
            }
        ]
    },
    {
        name: "Denmark",
        videos: [
            {
                link: "https://www.youtube.com/embed/XGd7opYnoZ4?si=t7mxLdkmMGlNaVVO",
                type: "driving"
            }
        ]
    },
    {
        name: "Estonia",
        videos: [
            {
                link: "https://www.youtube.com/embed/zSdRqcYYzR0?si=hNqYRo1SvRSRG_uf",
                type: "driving"
            }
        ]
    },
    {
        name: "Finland",
        videos: [
            {
                link: "https://www.youtube.com/embed/X_Gdgh07k8E?si=SifGhgTybdUUk4w4",
                type: "driving"
            }
        ]
    },
    {
        name: "France",
        videos: [
            {
                link: "https://www.youtube.com/embed/Ln40VRxItT4?si=Q1XMEZb6q9EVCgV2",
                type: "driving"
            }
        ]
    },
    {
        name: "Germany",
        videos: [
            {
                link: "https://www.youtube.com/embed/2054gi9TzcA?si=ybGI2iQzjKDrjNrY",
                type: "driving"
            }
        ]
    },
    {
        name: "Greece",
        videos: [
            {
                link: "https://www.youtube.com/embed/sIRpOIg4-vw?si=R3LvF-W8EBuCbZbi",
                type: "driving"
            }
        ]
    },
    {
        name: "Hungary",
        videos: [
            {
                link: "https://www.youtube.com/embed/IH4wGT1vjp8?si=e7Z-hdpkWlCORhnb",
                type: "driving"
            }
        ]
    },
    {
        name: "Ireland",
        videos: [
            {
                link: "https://www.youtube.com/embed/L0F9qzALGcY?si=qHM6OLedOCeMyEKI",
                type: "driving"
            }
        ]
    },
    {
        name: "Italy",
        videos: [
            {
                link: "https://www.youtube.com/embed/M9M1jt6ueok?si=m5z1nkz-BP--IJys",
                type: "driving"
            }
        ]
    },
    {
        name: "Latvia",
        videos: [
            {
                link: "https://www.youtube.com/embed/3QYFbHhXBCk?si=DuN11gQnjEJ06YEf",
                type: "driving"
            }
        ]
    },
    {
        name: "Lithuania",
        videos: [
            {
                link: "https://www.youtube.com/embed/LJeQH3rvWdY?si=Q4ioJXp2k9KErAfw",
                type: "driving"
            }
        ]
    },
    {
        name: "Luxembourg",
        videos: [
            {
                link: "https://www.youtube.com/embed/kXKC_nAKb8s?si=7JT96H4xGOiBF43Y",
                type: "driving"
            }
        ]
    },
    {
        name: "Malta",
        videos: [
            {
                link: "https://www.youtube.com/embed/6yu-ur02Oto?si=_Klj8mUCqd5cWBfK",
                type: "driving"
            }
        ]
    },
    {
        name: "Netherlands",
        videos: [
            {
                link: "https://www.youtube.com/embed/ha6MiYRMbhs?si=TfcmHJwMwFNgnCD5",
                type: "driving"
            }
        ]
    },
    {
        name: "Poland",
        videos: [
            {
                link: "https://www.youtube.com/embed/dEJhCItMi58?si=fXm0MAzSfOb9H4XQ",
                type: "driving"
            }
        ]
    },
    {
        name: "Portugal",
        videos: [
            {
                link: "https://www.youtube.com/embed/hFYNJNzOM9E?si=HL4rK13i2bEZarrc",
                type: "driving"
            }
        ]
    },
    {
        name: "Romania",
        videos: [
            {
                link: "https://www.youtube.com/embed/Fgdr2xEDuog?si=6xf_stXnpuAIsEED",
                type: "driving"
            }
        ]
    },
    {
        name: "Slovakia",
        videos: [
            {
                link: "https://www.youtube.com/embed/9xk7HR83oaE?si=OXKtikbSNXoFVVid",
                type: "driving"
            }
        ]
    },
    {
        name: "Slovenia",
        videos: [
            {
                link: "https://www.youtube.com/embed/9qpoAW1bceg?si=IFvae3mQRaqzqxvm",
                type: "driving"
            }
        ]
    },
    {
        name: "Spain",
        videos: [
            {
                link: "https://www.youtube.com/embed/rxeQiSezhyI?si=fSrPEqTqE10hsAaz",
                type: "driving"
            }
        ]
    },
    {
        name: "Sweden",
        videos: [
            {
                link: "https://www.youtube.com/embed/yV0qD9JltXw?si=IuxRKmIsNNF_45yq",
                type: "driving"
            }
        ]
    },
    {
        name: "United Kingdom",
        videos: [
            {
                link: "https://www.youtube.com/embed/zBteu7mmQ3s?si=0qsOcjn36MgNq-gI",
                type: "driving"
            }
        ]
    }
];

export default countries;