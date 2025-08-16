import { apostleBio } from "./apostleData";

import imgApotre from "../assets/apotre.jpeg";
import hdbApotre from "../assets/hbd.jpg";

export const quizData = {
  title: "Connaissez-vous l'Apôtre William Houinsou ?",
  description: "Testez vos connaissances sur ce grand homme de Dieu",
  image: imgApotre,
  birthdayImage: hdbApotre,
  timePerQuestion: 30,
  questions: [
    {
      id: 1,
      type: "biography",
      question:
        "Quelle est la date de naissance de l'Apôtre William's Houissou ?",
      options: [
        "13 août 1972",
        apostleBio.birthDate,
        "13 août  1975",
        "13 août 1973",
      ],
      correctAnswer: 1,
      explanation: `Il est né le ${apostleBio.birthDate}.`,
    },
    {
      id: 2,
      type: "family",
      question: "Quel est le nom de son épouse ?",
      options: [
        "ATTOLOU Caroline Marie Grâce",
        "ATTOLOU Carine Marie Immaculée",
        apostleBio.spouse,
        "ATTOLOU Clarisse Marie Immaculée",
      ],
      correctAnswer: 2,
      explanation: `Son épouse est ${apostleBio.spouse}.`,
    },
    {
      id: 3,
      type: "family",
      question: "Combien d’enfants a-t-il et quels sont leurs prénoms ?",
      options: [
        "4 enfants : Esdras, Jedida, Jemina, Grâce",
        "4 enfants : Esdras, Jecica, Jemima, Consolée ",
        `4 enfants : ${apostleBio.children.join(", ")}`,
        "3 enfants : Esdras, Jemima,Consolée",
      ],
      correctAnswer: 2,
      explanation: `Il a ${
        apostleBio.children.length
      } enfants : ${apostleBio.children.join(", ")}.`,
    },
    {
      id: 4,
      type: "calling",
      question: "À quel âge a-t-il reçu son appel ?",
      options: ["16 ans", "18 ans", apostleBio.callAge.toString(), "19 ans"],
      correctAnswer: 2,
      explanation: `Il a reçu son appel à ${apostleBio.callAge} ans.`,
    },
    {
      id: 5,
      type: "spiritual",
      question: "Quelle expérience a marqué le début de son ministère ?",
      options: [
        "Un rêve où il voyait des multitudes marcher dans le désert",
        apostleBio.spiritualExperience,
        "Une vision d’anges chantant autour de lui",
        "Une révélation prophétique reçue dans son sommeil",
      ],
      correctAnswer: 1,
      explanation: `${apostleBio.spiritualExperience}`,
    },
    {
      id: 6,
      type: "ministry",
      question: "En quelle année a-t-il commencé la Mission Chrétienne Rhema ?",
      options: ["2008", "2012", apostleBio.ministryStart.toString(), "2009"],
      correctAnswer: 2,
      explanation: `Il a commencé la Mission Chrétienne Rhema en ${apostleBio.ministryStart}.`,
    },
    {
      id: 7,
      type: "church",
      question: "Combien d’églises a-t-il implantées ?",
      options: ["13", "15", apostleBio.churches.length.toString(), "12"],
      correctAnswer: 2,
      explanation: `Il a implanté ${
        apostleBio.churches.length
      } églises : ${apostleBio.churches.join(", ")}.`,
    },
    {
      id: 8,
      type: "education",
      question: "Quel diplôme détient-il dans le domaine biblique ?",
      options: [
        "Deux doctorats : Ph.D et Doctorat en théologie",
        "Ph.D, Doctorat en philosophie et théologie",
        apostleBio.diploma.join(", "),
        "Ph.D, Doctorat en leadership pastoral et théologie",
      ],
      correctAnswer: 2,
      explanation: `Il détient ${apostleBio.diploma.join(", ")}.`,
    },
    {
      id: 9,
      type: "books",
      question: "Quel est le titre de son premier livre ?",
      options: [
        "La maternité divine",
        apostleBio.books.first,
        "La Clé du Royaume",
        "Les Secrets du ciel",
      ],
      correctAnswer: 1,
      explanation: `Son premier livre s'intitule "${apostleBio.books.first}".`,
    },
    {
      id: 10,
      type: "books",
      question: "Quel est le dernier livre qu’il a publié ?",
      options: [
        apostleBio.books.last,
        "La bénédiction de l’effort",
        "La bénédiction divine du travail",
        "Travail et prospérité spirituelle",
      ],
      correctAnswer: 0,
      explanation: `Son dernier livre est "${apostleBio.books.last}".`,
    },
    {
      id: 11,
      type: "personal",
      question: "Quel est son plat préféré ?",
      options: [
        "Poisson Akpavi frit - Manh",
        "Poisson Akpavi braisé - Riz blanc",
        apostleBio.favoriteFood,
        "Poisson braisé - Manh épicé",
      ],
      correctAnswer: 2,
      explanation: `Il aime manger ${apostleBio.favoriteFood}.`,
    },
    {
      id: 12,
      type: "music",
      question: "Quel genre de musique aime-t-il écouter ?",
      options: [
        "Gospel nigérian (Sinach, Ada Ehi…)",
        "Adoration internationale (Bethel, Elevation)",
        apostleBio.favoriteMusic,
        "Gospel francophone doux (Dan Luiten, Glorious)",
      ],
      correctAnswer: 2,
      explanation: `Il aime écouter ${apostleBio.favoriteMusic}.`,
    },
    {
      id: 13,
      type: "music",
      question: "Quelle est sa chanson préférée ?",
      options: [
        "Jésus je t’adore",
        apostleBio.favoriteSong,
        "Seigneur je t’aime",
        "Jésus je t’appartiens",
      ],
      correctAnswer: 1,
      explanation: `Sa chanson préférée est "${apostleBio.favoriteSong}".`,
    },
    {
      id: 14,
      type: "mission",
      question: "Quelle est la mission principale de son enseignement ?",
      options: [
        "Amener les âmes à marcher dans la sainteté",
        apostleBio.mainMission,
        "Former les leaders spirituels et politiques",
        "Implanter des églises et former des disciples",
      ],
      correctAnswer: 1,
      explanation: `${apostleBio.mainMission}.`,
    },
  ],
  birthdayMessage: {
    title: "Joyeux Anniversaire à l'Apôtre William Houinsou !",
    message:
      "Que Dieu vous bénisse abondamment et vous accorde de nombreuses années de vie en santé pour continuer l'œuvre du ministère.",
    confettiColors: ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff"],
    scripture:
      "Psaume 91:16 - 'Je le rassasierai de longs jours, Et je lui ferai voir mon salut.'",
  },
  socialMedia: {
    facebook: "https://www.facebook.com/RHEMABENIN?_rdc=1&_rdr#",
    whatsapp:
      "https://api.whatsapp.com/message/XGQ2AO4IS4EYD1?autoload=1&app_absent=0",
    youtube: "https://www.youtube.com/channel/UCMQyFSRP0AF7a42fPPtzOGA",
  },
};
