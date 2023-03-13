import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

type Props = {
  // TODO: allow () => boolean
  value: boolean;
  setValue?: () => void;
};

const Checkbox: React.FC<Props> = ({ value, setValue }) => {
  return (
    <TouchableOpacity onPress={setValue}>
      <Text>{value ? 'X' : 'O'}</Text>
    </TouchableOpacity>
  );
};

export default Checkbox;
