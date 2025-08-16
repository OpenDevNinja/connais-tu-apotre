import { apostleBio } from "./apostleData";

import imgApotre from "../assets/apotre.jpeg";
import hdbApotre from "../assets/hbd.jpg";

export const quizData = {
  title: "Connaissez-vous l'Apôtre William's Houissou ?",
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
        "15 janvier 1970",
        apostleBio.birthDate,
        "10 décembre 1972",
        "5 juillet 1968",
      ],
      correctAnswer: 1,
      explanation: `L'Apôtre est né le ${apostleBio.birthDate} à ${apostleBio.birthPlace}.`,
    },
    {
      id: 2,
      type: "ministry",
      question: "En quelle année a-t-il commencé son ministère ?",
      options: ["1990", apostleBio.ministryStart.toString(), "2001", "2005"],
      correctAnswer: 1,
      explanation: `Il a commencé son ministère en ${apostleBio.ministryStart}.`,
    },
    {
      id: 3,
      type: "family",
      question: "Qui est l'épouse de l'Apôtre William's Houissou ?",
      options: [
        "Esther Houissou",
        apostleBio.spouse,
        "Ruth Houissou",
        "Deborah Houissou",
      ],
      correctAnswer: 1,
      explanation: `Son épouse se nomme ${apostleBio.spouse}.`,
    },
    {
      id: 4,
      type: "church",
      question: "Quel est le nom de son église principale ?",
      options: [
        "Centre de Réveil Spirituel",
        apostleBio.mainChurch.name,
        "Temple du Réveil",
        "Église de la Foi Triomphante",
      ],
      correctAnswer: 1,
      explanation: `L'église principale s'appelle "${apostleBio.mainChurch.name}" et se trouve à ${apostleBio.mainChurch.location}.`,
    },
    {
      id: 5,
      type: "branches",
      question: "Quelle ville NE possède PAS une église annexe du CCRS ?",
      options: [
        "Lomé",
        apostleBio.branches[0].location.split(",")[0],
        apostleBio.branches[1].location.split(",")[0],
        apostleBio.branches[2].location.split(",")[0],
      ],
      correctAnswer: 0,
      explanation: `Les églises annexes se trouvent à: ${apostleBio.branches
        .map((b) => b.location)
        .join(", ")}.`,
    },
    {
      id: 6,
      type: "events",
      question: "Quel événement majeur a eu lieu en 2018 ?",
      options: [
        "Ouverture de l'orphelinat",
        apostleBio.keyEvents[2].event,
        "Première conférence internationale",
        "Publication de son premier livre",
      ],
      correctAnswer: 1,
      explanation: `En 2018: "${apostleBio.keyEvents[2].event}"`,
    },
    {
      id: 7,
      type: "education",
      question: "Où a-t-il étudié la théologie ?",
      options: [
        apostleBio.education[0],
        "Université de Harvard",
        "Séminaire Théologique de Genève",
        "Institut Biblique de Jérusalem",
      ],
      correctAnswer: 0,
      explanation: `Formation: ${apostleBio.education.join(" et ")}.`,
    },
    {
      id: 8,
      type: "books",
      question: "Lequel de ces livres n'a PAS été écrit par l'Apôtre ?",
      options: [
        "Les Clés de la Prospérité",
        apostleBio.books[0],
        apostleBio.books[1],
        apostleBio.books[2],
      ],
      correctAnswer: 0,
      explanation: `Livres publiés: ${apostleBio.books.join(", ")}.`,
    },
  ],
  birthdayMessage: {
    title: "Joyeux Anniversaire Apôtre William's Houissou !",
    message:
      "Que Dieu vous bénisse abondamment et vous accorde de nombreuses années de vie en santé pour continuer l'œuvre du ministère.",
    confettiColors: ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff"],
    scripture:
      "Psaume 91:16 - 'Je le rassasierai de longs jours, Et je lui ferai voir mon salut.'",
  },
  socialMedia: {
    facebook: "https://www.facebook.com/RHEMABENIN?_rdc=1&_rdr#",
    whatsapp:"https://api.whatsapp.com/message/XGQ2AO4IS4EYD1?autoload=1&app_absent=0",
    youtube: "https://www.youtube.com/channel/UCMQyFSRP0AF7a42fPPtzOGA",
  },
};
