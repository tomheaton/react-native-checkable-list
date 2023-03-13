import React from 'react';

const useCheckableList = (list: any[], initialChecked: boolean[]) => {
  if ('_checked' in list) {
    throw new Error("useCheckableList: list cannot contain '_checked' key");
  }

  const [checked, setChecked] = React.useState<boolean[]>(initialChecked);

  React.useEffect(() => {
    setChecked(initialChecked);
  }, [initialChecked]);

  React.useEffect(() => {
    if (list.length !== checked.length) {
      setChecked(list.map(() => false));
    }
  }, [list, checked.length]);

  return {
    checked,
    setChecked,
  };
};

export default useCheckableList;
