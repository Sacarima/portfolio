/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
       blue: "#2CBCE9",
       red: "#DC4492",
       yellow: "#FDCC49",
       one: "#1d2433",
       two: "#2f3b54",
       three: "#6679a4",
       four: "#8695b7",
       five: "#a2aabc",
       cinzento: "#d7dce2",
       amarelo: "#ffcc66",
       grey: "ededed",
       verde: "#397792",
       Navy:	'#0a192f',
      'Light-Navy':	'#112240',
      'Lightest-Navy':	'#233554',
      Slate:	'#8892b0',
      'Light-Slate': '#a8b2d1',
      'Lightest-Slate': '#ccd6f6',
      White:	'#e6f1ff',
      Green:	"#64ffda",
      "deep-blue": "#010026",
        hyper: "#2f3b54",
      // "deep-blue": "#1c2841",
       "dark-grey": "#757575",
       "opaque-black": "rgba(0,0,0,0.35)"
      },
      backgroundImage: (theme) => ({
        "gradient-rainbow": 
          "linear-gradient(81.66deg, #00B5EE 7.21%, #FF454 45.05%, #FFBA00 78.07%)",
        "gradient-rainblue":
          "linear-gradient(90deg, #24CBFF 14.53%, #FC59FF 69.36%, #FFBD0C 117.73%)",
    }),
    fontFamily: {
      playfair: ["playfair Display", "serif"],
      opensans: ["Open Sans", "sans-serif"]
    },
    content: {
      brush: "url('./assets/brush.png')",
      person1: "url('./assets/person-1.png')",
      person2: "url('./assets/person-2.png')",
      person3: "url('./assets/person-3.png')",
    }
  },
  screens: {
    xs: "480px",
    sm: "768px",
    md: "1060px"
  }
  }, 
  plugins: [],
}


