import React from 'react';
import { InputPriceType, PriceRange } from '../types/filter.types';

interface UseFilterPriceProps {
  defaultValue?: PriceRange<number>;
  min: number;
  max: number;
}

function useFilterPrice({ defaultValue, min, max }: UseFilterPriceProps) {
  const [priceRange, setPriceRange] = React.useState<PriceRange<number>>(defaultValue ?? { from: min, to: max });
  const [inputValues, setInputValues] = React.useState<PriceRange<string>>(
    defaultValue
      ? { from: defaultValue.from.toString(), to: defaultValue.to.toString() }
      : { from: min.toString(), to: max.toString() }
  );
  const minStepsBetweenThumbs = max / 10;

  function onInputChange(value: string, type: InputPriceType) {
    switch (type) {
      case 'from':
        setInputValues((prev) => ({ from: value, to: prev.to }));
        break;
      case 'to':
        setInputValues((prev) => ({ from: prev.from, to: value }));
        break;
      default:
        const _exhaustiveCheck: never = type;
        return _exhaustiveCheck;
    }
  }

  function onInputBlur(value: string, type: InputPriceType) {
    let newValue = Number(value);
    const isNewValueInvalid = isNaN(newValue) || newValue < min || newValue > max;

    switch (type) {
      case 'from':
        if (isNewValueInvalid) {
          newValue = min;
          setInputValues((prev) => ({ from: newValue.toString(), to: prev.to }));
        }
        if (newValue > priceRange.to - minStepsBetweenThumbs) {
          newValue = priceRange.to - minStepsBetweenThumbs;
          setInputValues({ from: newValue.toString(), to: inputValues.to });
        }
        setPriceRange((prev) => ({ from: newValue, to: prev.to }));
        break;
      case 'to':
        if (isNewValueInvalid) {
          newValue = max;
          setInputValues((prev) => ({ from: prev.from, to: newValue.toString() }));
        }
        if (newValue < priceRange.from + minStepsBetweenThumbs) {
          newValue = priceRange.from + minStepsBetweenThumbs;
          setInputValues({ from: inputValues.from, to: newValue.toString() });
        }
        setPriceRange((prev) => ({ from: prev.from, to: newValue }));
        break;
      default:
        const _exhaustiveCheck: never = type;
        return _exhaustiveCheck;
    }
  }

  function onSliderChange(value: [number, number]) {
    setInputValues({ from: value[0].toString(), to: value[1].toString() });
  }

  function onSliderCommit(value: [number, number]) {
    setPriceRange({ from: value[0], to: value[1] });
  }

  return {
    priceRange,
    inputValues,
    minStepsBetweenThumbs,
    onInputChange,
    onInputBlur,
    onSliderChange,
    onSliderCommit
  };
}

export default useFilterPrice;
