import React from 'react';
import Nouislider from 'nouislider-react';
import 'nouislider-react/node_modules/nouislider/distribute/nouislider.css';
import './_Slider.scss';

type Props = {
  options: {
    title: string;
    step: number;
    min: number;
    max: number;
  };

  slider: {
    value: {
      min: string;
      max: string;
    };
    setValue: React.Dispatch<React.SetStateAction<{ min: string; max: string }>>;
  };
};

function Slider({ options, slider }: Props): JSX.Element {
  return (
    <div className="toys-item toys-slider">
      <div className="toys-count__title">{options.title}</div>
      <Nouislider
        step={options.step}
        range={{ min: options.min, max: options.max }}
        start={[slider.value.min, slider.value.max]}
        format={{
          to(value) {
            return String(Math.floor(value));
          },
          from(value) {
            return Math.floor(+value);
          },
        }}
        tooltips
        onSlide={(value) => {
          slider.setValue({
            min: value[0].split('.')[0],
            max: value[1].split('.')[0],
          });
        }}
        connect
      />
    </div>
  );
}

export default Slider;
