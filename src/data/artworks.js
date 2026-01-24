const base = import.meta.env.BASE_URL;

// Add images per category slug here.
// paths are relative to /public
export const artworksByCategory = {
  illustrations: [
    { src: `${base}art/illustrations/01.jpg`, alt: "Illustration 01" },
    { src: `${base}art/illustrations/02.jpg`, alt: "Illustration 02" },
    { src: `${base}art/illustrations/03.jpg`, alt: "Illustration 03" },
  ],

  whiteboard: [
    { src: `${base}art/whiteboard/01.jpg`, alt: "Whiteboard 01" },
    { src: `${base}art/whiteboard/02.jpg`, alt: "Whiteboard 02" },
  ],

  sketchbook: [
    { src: `${base}art/sketchbook/01.jpg`, alt: "Sketchbook 01" },
  ],

  "wip": [
    { src: `${base}art/wip/01.jpg`, alt: "" },
    { src: `${base}art/wip/02.jpg`, alt: "" },
    { src: `${base}art/wip/03.jpg`, alt: "" },
    { src: `${base}art/wip/04.jpg`, alt: "" },
    { src: `${base}art/wip/05.jpg`, alt: "" },
    { src: `${base}art/wip/06.jpg`, alt: "" },
    { src: `${base}art/wip/07.jpg`, alt: "" },
    { src: `${base}art/wip/08.jpg`, alt: "" },
    { src: `${base}art/wip/09.jpg`, alt: "" },
  ],

  "notes-practice": [
    { src: `${base}art/notes-practice/01.jpg`, alt: "Notes / Practice 01" },
  ],

  "glow-art": [
    { src: `${base}art/glow-art/00.jpg`, alt: "Kaguya" },
    { src: `${base}art/glow-art/01.jpg`, alt: "Sugaku" },
    { src: `${base}art/glow-art/02.jpg`, alt: "Tomioka" },
    { src: `${base}art/glow-art/03.jpg`, alt: "Isagi/Nagi" },
    { src: `${base}art/glow-art/04.jpg`, alt: "Fuyukai Desu!" },
    { src: `${base}art/glow-art/05.jpg`, alt: "Orihime stan" },
    { src: `${base}art/glow-art/06.jpg`, alt: "Natsu" },
    { src: `${base}art/glow-art/07.jpg`, alt: "Rikka" },
  ],
};
