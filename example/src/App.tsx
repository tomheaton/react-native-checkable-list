import Checkbox from 'expo-checkbox';
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
    { id: string; name: string; _checked: boolean }[]
  >([
    { id: 'apple', name: 'apple', _checked: false },
    { id: 'banana', name: 'banana', _checked: false },
    { id: 'orange', name: 'orange', _checked: false },
  ]);

  // TODO: fix this
  // const [itemsTest, _setItemsTest] = React.useState<
  //   { id: string; name: string; }[]
  // >([
  //   { id: 'apple', name: 'apple' },
  //   { id: 'banana', name: 'banana' },
  //   { id: 'orange', name: 'orange' },
  // ]);
  // const { data } = useCheckableList(itemsTest);

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
        onPressItem={(item) => {
          console.log('onPressItem', item.name);
        }}
        ListHeaderComponent={HeaderComponent}
        canCheckItem={(item) => item.name !== 'banana'}
      />

      <CheckableList
        items={items}
        setItems={setItems}
        renderItem={(item) => (
          <View style={styles.item}>
            <Text>{item.name}</Text>
          </View>
        )}
        onPressItem={(item) => {
          console.log('onPressItem', item.name);
        }}
        renderCheckbox={(checked, disabled) => (
          <Checkbox
            value={checked}
            style={styles.checkbox}
            disabled={disabled}
          />
        )}
        canCheckItem={(item) => item.name !== 'banana'}
        ListHeaderComponent={HeaderComponent}
      />

      <Text>{JSON.stringify(items, null, 2)}</Text>
      {/* <Text>{JSON.stringify(data, null, 2)}</Text> */}
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
  item: {
    flex: 1,
    borderWidth: 2,
    borderColor: 'red',
    padding: 8,
  },
  checkbox: {
    marginHorizontal: 10,
    borderRadius: 999,
  },
});
