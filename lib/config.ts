export const config = {
    coupleNames: process.env.NEXT_PUBLIC_COUPLE_NAMES || "Default Names",
    eventDate: process.env.NEXT_PUBLIC_EVENT_DATE || "2026-10-31T00:00:00",
    groom: process.env.NEXT_PUBLIC_GROOM_NAME || "Default Groom",
    groomNickName: process.env.NEXT_PUBLIC_GROOM_NICKNAME || "Default Nickname",
    bride: process.env.NEXT_PUBLIC_BRIDE_NAME || "Default Bride",
    brideNickName: process.env.NEXT_PUBLIC_BRIDE_NICKNAME || "Default Nickname",
    weddingReception: {
        enabled: process.env.NEXT_PUBLIC_WEDDING_RECEPTION === 'true',
        time: process.env.NEXT_PUBLIC_WEDDING_RECEPTION_TIME || "00:00",
        place: process.env.NEXT_PUBLIC_WEDDING_RECEPTION_PLACE || "Default Venue",
        place_details: process.env.NEXT_PUBLIC_WEDDING_RECEPTION_PLACE_DETAILS || "Default Street",
        googleMapsLink: process.env.NEXT_PUBLIC_WEDDING_RECEPTION_GOOGLE_MAPS || "https://maps.app.goo.gl/fQGiC37iEx6fcuNq8",
    },
    rsvp: {
        enabled: process.env.NEXT_PUBLIC_RSVP === 'true',
        detail: process.env.NEXT_PUBLIC_RSVP_DETAIL || "Default RSVP Detail",
    },
    thankyou: process.env.NEXT_PUBLIC_THANKYOU || "Default Thank You",
    thankyouDetail: process.env.NEXT_PUBLIC_THANKYOU_DETAIL || "Default Thank You Detail",
};
