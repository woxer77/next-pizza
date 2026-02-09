import React from 'react';

function useSet(initialSet: Set<string>) {
  const [values, setValues] = React.useState<Set<string>>(initialSet);

  function toggle(id: string) {
    setValues((prev) => {
      const newValues = new Set(prev);

      if (values.has(id)) {
        newValues.delete(id);
      } else {
        newValues.add(id);
      }

      return newValues;
    });
  }

  return { toggle, values };
}

export default useSet;
