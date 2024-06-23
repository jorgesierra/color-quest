const enColors = [
  {
    name: "Black",
    hex: "#000000",
  },
  {
    name: "Blue",
    hex: "#0000FF",
  },
  {
    name: "Brown",
    hex: "#A52A2A",
  },
  {
    name: "Gold",
    hex: "#FFD700",
  },
  {
    name: "Gray",
    hex: "#808080",
  },
  {
    name: "Green",
    hex: "#008000",
  },
  {
    name: "Indigo",
    hex: "#4B0082",
  },
  {
    name: "Orange",
    hex: "#FFA500",
  },
  {
    name: "Pink",
    hex: "#FFC0CB",
  },
  {
    name: "Red",
    hex: "#FF0000",
  },
  {
    name: "Silver",
    hex: "#C0C0C0",
  },
  {
    name: "Sky Blue",
    hex: "#87CEEB",
  },
  {
    name: "Violet",
    hex: "#EE82EE",
  },
  {
    name: "White",
    hex: "#FFFFFF",
  },
  {
    name: "Yellow",
    hex: "#FFFF00",
  },
];

const itColors = [
  {
    name: "Nero",
    hex: "#000000",
  },
  {
    name: "Blu",
    hex: "#0000FF",
  },
  {
    name: "Marrone",
    hex: "#A52A2A",
  },
  {
    name: "D'Oro",
    hex: "#FFD700",
  },
  {
    name: "Grigio",
    hex: "#808080",
  },
  {
    name: "Verde",
    hex: "#008000",
  },
  {
    name: "Indaco",
    hex: "#4B0082",
  },
  {
    name: "Arancione",
    hex: "#FFA500",
  },
  {
    name: "Rosa",
    hex: "#FFC0CB",
  },
  {
    name: "Rosso",
    hex: "#FF0000",
  },
  {
    name: "Argento",
    hex: "#C0C0C0",
  },
  {
    name: "Azzurro",
    hex: "#87CEEB",
  },
  {
    name: "Viola",
    hex: "#EE82EE",
  },
  {
    name: "Bianco",
    hex: "#FFFFFF",
  },
  {
    name: "Giallo",
    hex: "#FFFF00",
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
