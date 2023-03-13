import React from 'react';

const useCheckedItems = () => {
  const [checked, setChecked] = React.useState<string[]>([]);

  return {
    checkedItems: checked,
    setCheckedItems: setChecked,
  };
};

export default useCheckedItems;
