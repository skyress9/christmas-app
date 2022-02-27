type Data = {
  num: string;
  name: string;
  count: string;
  year: string;
  shape: string;
  color: string;
  size: string;
  favorite: boolean;
};

type SliderType = {
  min: string;
  max: string;
};

type ButtonTypes = 'shape' | 'color' | 'size';

function toysSearch(data: Data[], search: string) {
  return data.filter((toy) => toy.name.toLowerCase().includes(search.toLowerCase()));
}

function toysSort(data: Data[], sort: string) {
  switch (sort) {
    case 'select-name-asc':
      return data.sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;

        return 0;
      });

    case 'select-name-desc':
      return data.sort((a, b) => {
        if (a.name > b.name) return -1;
        if (a.name < b.name) return 1;

        return 0;
      });

    case 'select-year-asc':
      return data.sort((a, b) => +a.year - +b.year);

    case 'select-year-desc':
      return data.sort((a, b) => +b.year - +a.year);

    default:
      return data;
  }
}

function toysButtonFilter(data: Data[], stateData: string[], type: string) {
  return stateData.length > 0 ? data.filter((e) => stateData.includes(e[<ButtonTypes>type])) : data;
}

function sliderFilter(data: Data[], slider: SliderType, type: string) {
  return data.filter((e) =>
    type === 'count'
      ? +slider.min <= +e.count && +e.count <= +slider.max
      : +slider.min <= +e.year && +e.year <= +slider.max
  );
}

function toysFavoriteFilter(data: Data[], fav: boolean) {
  return fav ? data.filter((e) => e.favorite) : data;
}

export default function toysFilter(
  data: Data[],
  search: string,
  sort: string,
  form: string[],
  sliderCount: SliderType,
  sliderYear: SliderType,
  color: string[],
  size: string[],
  isFavorite: boolean
): Data[] {
  const searchResult = toysSearch(data, search);
  const sortResult = toysSort(searchResult, sort);
  const filterFormResult = toysButtonFilter(sortResult, form, 'shape');
  const sliderCountResult = sliderFilter(filterFormResult, sliderCount, 'count');
  const sliderYearResult = sliderFilter(sliderCountResult, sliderYear, 'year');
  const filterColorResult = toysButtonFilter(sliderYearResult, color, 'color');
  const filterSizeResult = toysButtonFilter(filterColorResult, size, 'size');
  return toysFavoriteFilter(filterSizeResult, isFavorite);
}
