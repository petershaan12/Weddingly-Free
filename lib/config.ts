export const config = {
    coupleNames: process.env.NEXT_PUBLIC_COUPLE_NAMES || "Default Names",
    eventDate: process.env.NEXT_PUBLIC_EVENT_DATE || "2026-10-31T00:00:00",
    groom: process.env.NEXT_PUBLIC_GROOM_NAME || "Default Groom",
    groomNickName: process.env.NEXT_PUBLIC_GROOM_NICKNAME || "Default Nickname",
    bride: process.env.NEXT_PUBLIC_BRIDE_NAME || "Default Bride",
    brideNickName: process.env.NEXT_PUBLIC_BRIDE_NICKNAME || "Default Nickname",

    bibleVerse:
        process.env.NEXT_PUBLIC_BIBLE_VERSE || "Ecclesiastes 4:9–12",

    bibleVerseContent:
        process.env.NEXT_PUBLIC_BIBLE_VERSE_CONTENT ||
        "Two are better than one, because they have a good return for their labor: If either of them falls down, one can help the other up. But pity anyone who falls and has no one to help them up. Also, if two lie down together, they will keep warm. But how can one keep warm alone? Though one may be overpowered, two can defend themselves. A cord of three strands is not quickly broken.",

    weddingReception: {
        enabled: process.env.NEXT_PUBLIC_WEDDING_RECEPTION === "true",
        time: process.env.NEXT_PUBLIC_WEDDING_RECEPTION_TIME || "00:00",
        place: process.env.NEXT_PUBLIC_WEDDING_RECEPTION_PLACE || "Default Venue",
        place_details:
            process.env.NEXT_PUBLIC_WEDDING_RECEPTION_PLACE_DETAILS ||
            "Default Street",
        googleMapsLink:
            process.env.NEXT_PUBLIC_WEDDING_RECEPTION_GOOGLE_MAPS ||
            "https://maps.app.goo.gl/m9UQtkbDSyUCgy6f9",
    },

    rsvp: {
        enabled: process.env.NEXT_PUBLIC_RSVP === "true",
        detail: process.env.NEXT_PUBLIC_RSVP_DETAIL || "Default RSVP Detail",
    },

    thankyou: process.env.NEXT_PUBLIC_THANKYOU || "Default Thank You",
    thankyouDetail:
        process.env.NEXT_PUBLIC_THANKYOU_DETAIL || "Default Thank You Detail",
};
