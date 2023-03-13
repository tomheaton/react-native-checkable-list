import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CheckableList from 'react-native-checkable-list';

const HeaderComponent: React.FC = () => (
  <Text>
    This is a list of fruits. Long press on an item to show checkboxes.
  </Text>
);

const App: React.FC = () => {
  const [items, setItems] = React.useState<
    { name: string; checked: boolean }[]
  >([
    { name: 'apple', checked: false },
    { name: 'banana', checked: false },
    { name: 'orange', checked: false },
  ]);

  return (
    <View style={styles.container}>
      <CheckableList
        items={items}
        setItems={setItems}
        renderItem={(item) => (
          <View style={styles.item}>
            <Text>{item.name}</Text>
          </View>
        )}
        ListHeaderComponent={HeaderComponent}
      />
      <Text>{JSON.stringify(items, null, 2)}</Text>
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
  item: {
    flex: 1,
    borderWidth: 2,
    borderColor: 'red',
    padding: 8,
  },
});
