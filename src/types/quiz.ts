export type Option = {
  id: string;
  title: string;
  isCorrect: boolean;
};

export type Question = {
  id: string;
  title: string;
  options: Option[];
};
