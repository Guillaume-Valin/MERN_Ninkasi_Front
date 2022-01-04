module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'rouge': '#6D071A'
      },
      borderRadius: {
        'perso' : '20px',
      },
      backgroundImage: {
        'section1-home' : "url('/images/vigne-graphic-v2.png')",
        'couleur-vin' : "url('/images/bg-couleur-vin.jpg')",
        'couleur-champagne' : "url('/images/bg-champagne.jpg')",
        'couleur-whisky' : "url('/images/bg-whisky.jpg')",
        'ombre-bottle' : "url('/images/ombre-bouteille.png')",
        'img-footer' : "url('/images/grimaud-fonce-1920-700.jpg')",
        'img-footer-mob' : "url('/images/grimaud-fonce-mob.jpg')",
        'raisin' : "url('/images/raisin_presentation_V2.png')",
        'moulin' : "url('/images/moulin_graphic_v3.png')",
      },
      backgroundColor: {
        'fond-bleu': '#051121',
      },
      maxWidth: {
        'yom-sm' : '524px',
      },
      ringColor: ['hover', 'active'],
      ringWidth: ['hover', 'active'],
      underline: ['active'],
    },
    
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
