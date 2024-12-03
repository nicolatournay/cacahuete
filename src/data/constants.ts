export const gender = ["Femme", "Homme", "Autre"] as const;

export const age = [
  "Bébé (0-12 mois)",
  "Petit enfant (1-3 ans)",
  "Préscolaire (3-5 ans)",
  "Scolaire (6-12 ans)",
  "Adolescent (13-17 ans)",
  "Jeune adulte (18-25 ans)",
  "Adulte (26-59 ans)",
  "Senior (60 ans +)"
] as const;

export const status = [
  "Amant",
  "Ami",
  "Parent",
  "Collègue",
  "Autre"
] as const;

export const interest = [
  "Livres",
  "Sports",
  "Érotisme",
  "Voyages",
  "Musique",
  "Films",
  "Jeux Vidéos",
  "Arts Plastiques",
  "Bien-être et détente",
  "Autre"
] as const;

export const event = [
  "Anniversaire",
  "Noël",
  "Saint-Nicolas",
  "Saint-Valentin",
  "Nouvel An",
  "Hanouka",
  "Pessah",
  "Aïd el-Fitr",
  "Aïd el-Adha",
  "Pot de départ",
  "Petite Souris",
  "Remise de diplôme",
  "Pendaison de crémaillère",
  "Baby Shower",
  "Mariage",
  "Autre"
] as const;

export const defaultValues = {
  genderEnum: undefined,
  ageEnum: undefined,
  statusEnum: undefined,
  statusDetail: "",
  eventEnum: undefined,
  eventDetail: "",
  interestEnum: undefined,
  interestDetail: "",
  lifeStyle: ""
};
