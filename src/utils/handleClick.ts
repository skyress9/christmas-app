import State from '../types/State';

type Filter = State<string[]>;

const handleClick = (title: string, filter: Filter): void => {
  const newForm = filter.value.slice(0);
  if (newForm.includes(title)) {
    filter.setValue(newForm.filter((n: string) => n !== title));
  } else {
    newForm.push(title);
    filter.setValue(newForm);
  }
};

export default handleClick;
