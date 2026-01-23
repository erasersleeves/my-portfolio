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

  "digital-sketches": [
    { src: `${base}art/digital-sketches/01.jpg`, alt: "Digital Sketch 01" },
  ],

  "notes-practice": [
    { src: `${base}art/notes-practice/01.jpg`, alt: "Notes / Practice 01" },
  ],

  "glow-art": [
    { src: `${base}art/glow-art/01.jpg`, alt: "Glow Art 01" },
  ],
};
