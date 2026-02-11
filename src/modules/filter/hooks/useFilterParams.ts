import { useSearchParams } from 'next/navigation';
import { PARAMS } from '@/constants/query-params.constants';

function useFilterParams() {
  const params = useSearchParams();

  function getParamSet(filterGroup: string) {
    const groupValues = params
      .getAll(filterGroup)
      .flatMap((value) => value.split(','))
      .filter(Boolean);
    return new Set(groupValues);
  }

  const defaultFilterParams = {
    doughTypes: getParamSet(PARAMS.DOUGH_TYPES),
    ingredients: getParamSet(PARAMS.INGREDIENTS),
    sizes: getParamSet(PARAMS.SIZES)
  };

  return { params, defaultFilterParams };
}

export default useFilterParams;
