type Init = {
  search: string;
  sort: string;
  form: string[];
  sliderCount: {
    min: string;
    max: string;
  };
  sliderYear: {
    min: string;
    max: string;
  };
  color: string[];
  size: string[];
  isFavorite: boolean;

  bg: string;
  tree: string;
  isFall: boolean;
  garlandColor: string;
  isPlay: boolean;
};

export default function setLocalStorage<T>(initState: Partial<Init>, states: T[]): void {
  const obj = Object.keys(initState);
  states.forEach((e, i) => {
    localStorage.setItem(obj[i], JSON.stringify(e));
  });
}
