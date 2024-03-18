import { ASSETS } from "./assets";

export const GIFTS = {
  gift1: {
    title: "Espejo doble cara",
    imageSrc: ASSETS.gift1.src,
    imageAlt: ASSETS.gift1.alt,
    description:
      "Ideal para usar cuando te maquillas o depilas las cejas, con 10 luces, altura de 18cm y ancho de 15cm. Alimentación por cable USB. Cuenta con espejo doble cara 1 con ampliación de 10x en un lado y aumento de cara completa del lado opuesto",
    id: "gift1",
    conditions: "Abrazo de 30 segundos para recibir el regalo",
    size: "Pequeño",
    hrefPrimary: 'gift-two',
    textCTAprimary: 'Ver segundo regalo',
    hrefSecondary: '/',
    textCTAsecondary: 'Volver al inicio'
  },
  gift2: {
    title: "Placard",
    imageSrc: ASSETS.gift2.src,
    imageAlt: ASSETS.gift2.alt,
    description: "Descripcion regalo 2",
    id: "gift2",
    conditions: "Condiciones de regalo 2",
    size: "Grande",
    hrefPrimary: 'gift-three',
    textCTAprimary: 'Ver tercer regalo',
    hrefSecondary: '/',
    textCTAsecondary: 'Volver al inicio'
  },
  gift3: {
    title: "Torta",
    imageSrc: ASSETS.gift3.src,
    imageAlt: ASSETS.gift3.alt,
    description: "Descripcion regalo 3",
    id: "gift3",
    conditions: "Condiciones de regalo 3",
    size: "Mediano",
    hrefPrimary: 'gift-four',
    textCTAprimary: 'Ver cuarto regalo',
    hrefSecondary: '/',
    textCTAsecondary: 'Volver al inicio'
  },
};
