import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

type Props = {
  value: boolean;
  setValue: () => void;
};

const Checkbox: React.FC<Props> = ({ value, setValue }) => {
  return (
    <TouchableOpacity onPress={setValue}>
      {/* TODO: add proper checkbox (perhaps expo-checkbox?) */}
      <Text>{value ? 'Checked' : 'Not Checked'}</Text>
    </TouchableOpacity>
  );
};

export default Checkbox;
