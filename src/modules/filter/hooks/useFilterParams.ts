import { PARAMS } from '@/constants/query-params.constants';
import { SearchParams } from '@/types/global';

function useFilterParams(searchParams: Awaited<SearchParams>) {
  function getParamSet(filterGroup: string) {
    const rawValue = searchParams[filterGroup];
    const values = Array.isArray(rawValue) ? rawValue : rawValue ? [rawValue] : [];
    const groupValues = values.flatMap((value) => value.split(',')).filter(Boolean);

    return new Set(groupValues);
  }

  const defaultFilterParams = {
    doughTypes: getParamSet(PARAMS.DOUGH_TYPES),
    ingredients: getParamSet(PARAMS.INGREDIENTS),
    sizes: getParamSet(PARAMS.SIZES)
  };

  return { defaultFilterParams };
}

export default useFilterParams;
