
// Simple authentication logic without a database
export interface User {
  id: string;
  username: string;
  password: string;
  displayName: string;
  avatarId: number;
  themeColor: string;
}

// Predefined users
export const users: User[] = [
  {
    id: "1",
    username: "johnalves_deltarun",
    password: "@johnalvesRun2025",
    displayName: "John Alves",
    avatarId: 1,
    themeColor: "blue"
  },
  {
    id: "2",
    username: "gabriel_deltarun",
    password: "@gabrielRun2025",
    displayName: "Gabriel",
    avatarId: 2,
    themeColor: "blue"
  },
  {
    id: "3",
    username: "gabrielle_deltarun",
    password: "@gabrielleRun2025",
    displayName: "Gabrielle",
    avatarId: 3,
    themeColor: "blue"
  },
  {
    id: "4",
    username: "moana_deltarun",
    password: "@moanaRun2025",
    displayName: "Moana",
    avatarId: 4,
    themeColor: "blue"
  },
  {
    id: "5",
    username: "cailane_deltarun",
    password: "@cailaneRun2025",
    displayName: "Cailane",
    avatarId: 5,
    themeColor: "blue"
  },
  {
    id: "6",
    username: "mayara_deltarun",
    password: "@mayaraRun2025",
    displayName: "Mayara",
    avatarId: 6,
    themeColor: "blue"
  },
  {
    id: "7",
    username: "ciane_deltarun",
    password: "@cianeRun2025",
    displayName: "Ciane",
    avatarId: 7,
    themeColor: "blue"
  },
  {
    id: "8",
    username: "lucasferreira_deltarun",
    password: "@lucasferreiraRun2025",
    displayName: "Lucas Ferreira",
    avatarId: 8,
    themeColor: "blue"
  },
  {
    id: "9",
    username: "brunasanto_deltarun",
    password: "@brunasantoRun2025",
    displayName: "Bruna Santo",
    avatarId: 9,
    themeColor: "blue"
  },
  {
    id: "10",
    username: "anagodoy_deltarun",
    password: "@anagodoyRun2025",
    displayName: "Ana Godoy",
    avatarId: 10,
    themeColor: "blue"
  }
];

// Authentication context types
export type AuthContextType = {
  user: User | null;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
  updateUserPreferences: (updates: Partial<User>) => void;
};

// Function to authenticate user
export const authenticateUser = (username: string, password: string): User | null => {
  const user = users.find(u => u.username === username && u.password === password);
  return user || null;
};

// Available theme colors
export const themeColors = [
  { id: "blue", name: "Delta Blue", value: "#1E40AF" },
  { id: "neon", name: "Neon Aqua", value: "#00F5FF" },
  { id: "purple", name: "Neon Purple", value: "#8B5CF6" },
  { id: "pink", name: "Neon Pink", value: "#FF00FF" },
  { id: "green", name: "Neon Green", value: "#4ADE80" },
  { id: "orange", name: "Energetic Orange", value: "#F97316" },
  { id: "red", name: "Power Red", value: "#EF4444" },
];

// Fitness quotes
export const fitnessQuotes = [
  "Correr é metade física, metade mental. A batalha é contra você mesmo.",
  "Sem suor, sem glória. Sem dor, sem vitória.",
  "Limites existem apenas em sua mente.",
  "Um treino ruim é melhor que nenhum treino.",
  "O sucesso não é imediato, mas é inevitável se você continuar.",
  "Mude seu corpo, mude sua mente, mude sua vida.",
  "Forte é quem não desiste, mesmo quando a vontade é forte.",
  "Dê ao seu corpo os desafios que ele merece.",
  "Seu corpo pode suportar quase tudo. É sua mente que você precisa convencer.",
  "O Team Delta não conhece limites, só superação!",
  "Disciplina supera motivação todos os dias.",
  "Cada passo conta. Cada respiração importa. Cada treinamento vale a pena."
];

// Function to get a random quote
export const getRandomQuote = (): string => {
  const randomIndex = Math.floor(Math.random() * fitnessQuotes.length);
  return fitnessQuotes[randomIndex];
};
