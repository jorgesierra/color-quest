const enColors = [
  {
    name: "Black",
    hex: "#2C3E50",
  },
  {
    name: "Blue",
    hex: "#0984e3",
  },
  {
    name: "Brown",
    hex: "#A67A53",
  },
  {
    name: "Gold",
    hex: "#F1C40F",
  },
  {
    name: "Gray",
    hex: "#95A5A6",
  },
  {
    name: "Green",
    hex: "#2ECC71",
  },
  {
    name: "Indigo",
    hex: "#4B0082",
  },
  {
    name: "Orange",
    hex: "#E67E22",
  },
  {
    name: "Pink",
    hex: "#FFC0CB",
  },
  {
    name: "Red",
    hex: "#E74C3C",
  },
  {
    name: "Silver",
    hex: "#BDC3C7",
  },
  {
    name: "Sky Blue",
    hex: "#5DADE2",
  },
  {
    name: "Violet",
    hex: "#8E44AD",
  },
  {
    name: "White",
    hex: "#ECF0F1",
  },
  {
    name: "Yellow",
    hex: "#fff005",
  },
];

const itColors = [
  {
    name: "Nero",
    hex: "#2C3E50",
  },
  {
    name: "Blu",
    hex: "#0984e3",
  },
  {
    name: "Marrone",
    hex: "#A67A53",
  },
  {
    name: "Oro",
    hex: "#F1C40F",
  },
  {
    name: "Grigio",
    hex: "#95A5A6",
  },
  {
    name: "Verde",
    hex: "#2ECC71",
  },
  {
    name: "Indaco",
    hex: "#4B0082",
  },
  {
    name: "Arancione",
    hex: "#E67E22",
  },
  {
    name: "Rosa",
    hex: "#FFC0CB",
  },
  {
    name: "Rosso",
    hex: "#E74C3C",
  },
  {
    name: "Argento",
    hex: "#BDC3C7",
  },
  {
    name: "Azzurro",
    hex: "#5DADE2",
  },
  {
    name: "Viola",
    hex: "#8E44AD",
  },
  {
    name: "Bianco",
    hex: "#ECF0F1",
  },
  {
    name: "Giallo",
    hex: "#fff005",
  },
];

export const getColors = (lang) => {
  const map = {
    en: enColors,
    it: itColors,
  };

  return map[lang] ?? map.en;
};

export const SUPPORTED_LANG = {
  EN: "en",
  IT: "it",
};

export const getLang = () => {
  const queryParameters = new URLSearchParams(window.location.search);
  return queryParameters.get("lang") ?? SUPPORTED_LANG.EN;
};

export const shuffleArray = (array) => {
  let shuffled = array.slice();
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export const getParts = () => {
  return [
    { id: 1, name: "Horn" },
    { id: 2, name: "Face" },
    { id: 3, name: "Mouth" },
    { id: 4, name: "Ear" },
    { id: 5, name: "Hair 1" },
    { id: 6, name: "Hair 2" },
    { id: 7, name: "Hair 3" },
    { id: 8, name: "Hair 4" },
    { id: 9, name: "Hair 5" },
    { id: 10, name: "Hair 6" },
    { id: 11, name: "Tail 1" },
    { id: 12, name: "Tail 2" },
    { id: 13, name: "Tail 3" },
    { id: 14, name: "Tail 4" },
    { id: 15, name: "Tail 5" },
  ];
};

export const assignColorsToParts = (colors, parts) => {
  let shuffledColors = shuffleArray(colors);
  let colorIndex = 0;

  return parts.map((part) => {
    if (colorIndex >= shuffledColors.length) {
      shuffledColors = shuffleArray(colors); // Reshuffle colors
      colorIndex = 0;
    }
    const color = shuffledColors[colorIndex];
    colorIndex += 1;
    return { ...part, color };
  });
};

export const findBaseAssignment = (partId, data) => {
  return data.find((row) => row.id === partId);
};
