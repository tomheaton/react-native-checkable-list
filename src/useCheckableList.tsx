import React from 'react';

const useCheckableList = <T extends { id: string }>(
  list: T[],
  initialChecked: boolean = false
) => {
  if ('_checked' in list) {
    throw new Error("useCheckableList: list cannot contain '_checked' key");
  }

  console.log('useCheckableList', list, initialChecked);

  const [checked, setChecked] = React.useState<T[]>([]);

  const dataWithChecked = React.useMemo(() => {
    return list.map((item) => {
      return { ...item, _checked: initialChecked };
    });
  }, [list, initialChecked]);

  return {
    data: dataWithChecked,
    checked,
    setChecked,
  };
};

export default useCheckableList;
