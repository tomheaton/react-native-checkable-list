import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

type Props = {
  value: boolean;
  setValue?: () => void;
};

const Checkbox: React.FC<Props> = ({ value, setValue }) => {
  return (
    <TouchableOpacity onPress={setValue} style={styles.checkbox}>
      <Text>{value ? 'X' : 'O'}</Text>
    </TouchableOpacity>
  );
};

export default Checkbox;

const styles = StyleSheet.create({
  checkbox: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
