import React from 'react';
import { StyleSheet, View } from 'react-native';
import CheckableList from 'react-native-checkable-list';

const App: React.FC = () => {
  const [_checked, _setChecked] = React.useState<boolean>(false);

  const items = ['apple', 'banana', 'carrot'];

  return (
    <View style={styles.container}>
      <CheckableList items={items} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 25,
    padding: 20,
    borderWidth: 2,
    borderColor: 'red',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
