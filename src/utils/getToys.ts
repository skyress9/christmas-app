import data from '../data/data';
import images from '../assets/toys/images';

export default function getToys(toys: string[]): { name: string; img: string; count: number; num: string }[] {
  const toysData =
    toys.length > 0
      ? data.filter((e) => {
          return toys.includes(e.name);
        })
      : data.filter(({ num }) => +num <= 20);

  return toysData.map(({ name, num, count }) => {
    return {
      name,
      num,
      img: images[num],
      count: +count,
    };
  });
}
