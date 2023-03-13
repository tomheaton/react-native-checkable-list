import React from 'react';

const useCheckedItems = () => {
  // TODO: allow items to start checked
  const [checked, setChecked] = React.useState<string[]>([]);

  return {
    checkedItems: checked,
    setCheckedItems: setChecked,
  };
};

export default useCheckedItems;
