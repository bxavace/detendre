interface VideosDrive {
    link: string,
}

interface VideosWalk {
    link: string,
}

interface Country {
    name: string,
    videos_drive: VideosDrive[],
    videos_walk: VideosWalk[]
}

const countries: Country[] = [
    {
        name: "Austria",
        videos_drive: [
            {
                link: "https://www.youtube.com/embed/dd8Mw5Ay4uE?si=0dZuS5c5vvX43sGD",
            }
        ],
        videos_walk: []
    },
    {
        name: "Belgium",
        videos_drive: [
            {
                link: "https://www.youtube.com/embed/8t9VJ3rXbwc?si=XUDyHvrux5Xajwbg",
            }
        ],
        videos_walk: []
    },
    {
        name: "Bulgaria",
        videos_drive: [
            {
                link: "https://www.youtube.com/embed/qNqJVQPJAd8?si=sdE9D6nM6MnSTsaj",
            }
        ],
        videos_walk: []
    },
    {
        name: "Croatia",
        videos_drive: [
            {
                link: "https://www.youtube.com/embed/0oCXSUEl6Fk?si=T47dcewRVqvjHhr4",
            }
        ],
        videos_walk: []
    },
    {
        name: "Cyprus",
        videos_drive: [
            {
                link: "https://www.youtube.com/embed/rufeXCPoCwk?si=vPfo8-AFH3VYfi44",
            }
        ],
        videos_walk: []
    },
    {
        name: "Czech Republic",
        videos_drive: [
            {
                link: "https://www.youtube.com/embed/0nh7zkq9JZ4?si=njTYX8eB-qHssuar",
            }
        ],
        videos_walk: []
    },
    {
        name: "Denmark",
        videos_drive: [
            {
                link: "https://www.youtube.com/embed/XGd7opYnoZ4?si=t7mxLdkmMGlNaVVO",
            }
        ],
        videos_walk: []
    },
    {
        name: "Estonia",
        videos_drive: [
            {
                link: "https://www.youtube.com/embed/zSdRqcYYzR0?si=hNqYRo1SvRSRG_uf",
            }
        ],
        videos_walk: []
    },
    {
        name: "Finland",
        videos_drive: [
            {
                link: "https://www.youtube.com/embed/X_Gdgh07k8E?si=SifGhgTybdUUk4w4",
            }
        ],
        videos_walk: []
    },
    {
        name: "France",
        videos_drive: [
            {
                link: "https://www.youtube.com/embed/Ln40VRxItT4?si=Q1XMEZb6q9EVCgV2",
            }
        ],
        videos_walk: []
    },
    {
        name: "Germany",
        videos_drive: [
            {
                link: "https://www.youtube.com/embed/2054gi9TzcA?si=ybGI2iQzjKDrjNrY",
            }
        ],
        videos_walk: []
    },
    {
        name: "Greece",
        videos_drive: [
            {
                link: "https://www.youtube.com/embed/sIRpOIg4-vw?si=R3LvF-W8EBuCbZbi",
            }
        ],
        videos_walk: []
    },
    {
        name: "Hungary",
        videos_drive: [
            {
                link: "https://www.youtube.com/embed/IH4wGT1vjp8?si=e7Z-hdpkWlCORhnb",
            }
        ],
        videos_walk: []
    },
    {
        name: "Ireland",
        videos_drive: [
            {
                link: "https://www.youtube.com/embed/L0F9qzALGcY?si=qHM6OLedOCeMyEKI",
            }
        ],
        videos_walk: []
    },
    {
        name: "Italy",
        videos_drive: [
            {
                link: "https://www.youtube.com/embed/M9M1jt6ueok?si=m5z1nkz-BP--IJys",
            }
        ],
        videos_walk: [
            {
                link: "https://www.youtube.com/embed/KcYDl5mB9rs?si=639KzjD4DYTK84Vq",
            }
        ]
    },
    {
        name: "Latvia",
        videos_drive: [
            {
                link: "https://www.youtube.com/embed/3QYFbHhXBCk?si=DuN11gQnjEJ06YEf",
            }
        ],
        videos_walk: []
    },
    {
        name: "Lithuania",
        videos_drive: [
            {
                link: "https://www.youtube.com/embed/LJeQH3rvWdY?si=Q4ioJXp2k9KErAfw",
            }
        ],
        videos_walk: []
    },
    {
        name: "Luxembourg",
        videos_drive: [
            {
                link: "https://www.youtube.com/embed/kXKC_nAKb8s?si=7JT96H4xGOiBF43Y",
            }
        ],
        videos_walk: []
    },
    {
        name: "Malta",
        videos_drive: [
            {
                link: "https://www.youtube.com/embed/6yu-ur02Oto?si=_Klj8mUCqd5cWBfK",
            }
        ],
        videos_walk: []
    },
    {
        name: "Netherlands",
        videos_drive: [
            {
                link: "https://www.youtube.com/embed/ha6MiYRMbhs?si=TfcmHJwMwFNgnCD5",
            }
        ],
        videos_walk: []
    },
    {
        name: "Poland",
        videos_drive: [
            {
                link: "https://www.youtube.com/embed/dEJhCItMi58?si=fXm0MAzSfOb9H4XQ",
            }
        ],
        videos_walk: []
    },
    {
        name: "Portugal",
        videos_drive: [
            {
                link: "https://www.youtube.com/embed/hFYNJNzOM9E?si=HL4rK13i2bEZarrc",
            }
        ],
        videos_walk: []
    },
    {
        name: "Romania",
        videos_drive: [
            {
                link: "https://www.youtube.com/embed/Fgdr2xEDuog?si=6xf_stXnpuAIsEED",
            }
        ],
        videos_walk: []
    },
    {
        name: "Slovakia",
        videos_drive: [
            {
                link: "https://www.youtube.com/embed/9xk7HR83oaE?si=OXKtikbSNXoFVVid",
            }
        ],
        videos_walk: []
    },
    {
        name: "Slovenia",
        videos_drive: [
            {
                link: "https://www.youtube.com/embed/9qpoAW1bceg?si=IFvae3mQRaqzqxvm",
            }
        ],
        videos_walk: []
    },
    {
        name: "Spain",
        videos_drive: [
            {
                link: "https://www.youtube.com/embed/rxeQiSezhyI?si=fSrPEqTqE10hsAaz",
            }
        ],
        videos_walk: []
    },
    {
        name: "Sweden",
        videos_drive: [
            {
                link: "https://www.youtube.com/embed/yV0qD9JltXw?si=IuxRKmIsNNF_45yq",
            }
        ],
        videos_walk: []
    },
    {
        name: "United Kingdom",
        videos_drive: [
            {
                link: "https://www.youtube.com/embed/zBteu7mmQ3s?si=0qsOcjn36MgNq-gI",
            }
        ],
        videos_walk: []
    }
];

export default countries;