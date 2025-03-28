export const randomNum = (min = 1, max = 6): number =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export const delay = (durationMS: number) =>
  new Promise((resolve) => setTimeout(resolve, durationMS));
