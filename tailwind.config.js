module.exports = {
  darkMode: "media",
  purge: ["./files/public/index.html"],
  theme: {
    fontFamily: {
      gotham: ["Gotham Narrow A", "Gotham Narrow B"],
      "knockout-heavy": ['"Knockout 52 A"', '"Knockout 52 B"'],
      "knockout-light": ['"Knockout 49 A"', '"Knockout 49 B"'],
      ornamental: [
        "Sentinel Ornaments Bright A",
        "Sentinel Ornaments Bright B",
      ],
      sentinel: ["Sentinel A", "Sentinel B"],
    },
    fontSize: {
      h1: ["2.85rem", "1.15"],
      h2: ["1.9rem", "1.3"],
      li: ["1.3rem", "1.6"],
      p: "1.3rem",
    },
    extend: {
      maxWidth: {
        body: "46ch",
      },
      screens: {
        print: {
          raw: "print",
        },
      },
    },
  },
};
