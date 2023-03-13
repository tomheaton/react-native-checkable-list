import Checkbox from 'expo-checkbox';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import CheckableList, { useCheckedItems } from 'react-native-checkable-list';

const HeaderComponent: React.FC = () => (
  <Text>
    This is a list of fruits. Long press on an item to show checkboxes.
  </Text>
);

export default function App() {
  const [items, setItems] = React.useState<{ name: string; amount: number }[]>([
    { name: 'apple', amount: 1 },
    { name: 'banana', amount: 2 },
    { name: 'orange', amount: 3 },
  ]);

  // const [checkedItems, setCheckedItems] = React.useState<string[]>([]);
  const { checkedItems, setCheckedItems } = useCheckedItems();

  return (
    <View style={styles.container}>
      <CheckableList
        items={items}
        keyExtractor={(item) => item.name}
        renderItem={(item) => (
          <View style={styles.item}>
            <Text>
              {item.name} x {item.amount}
            </Text>
          </View>
        )}
        onPressItem={(item) => {
          console.log('onPressItem', item.name);
        }}
        ListHeaderComponent={HeaderComponent}
        canCheckItem={(item) => item.name !== 'banana'}
        checkedItems={checkedItems}
        setCheckedItems={setCheckedItems}
      />

      <CheckableList
        items={items}
        keyExtractor={(item) => item.name}
        renderItem={(item) => (
          <View style={styles.item}>
            <Text>
              {item.name} x {item.amount}
            </Text>
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
        checkedItems={checkedItems}
        setCheckedItems={setCheckedItems}
        ListHeaderComponent={HeaderComponent}
        leftCheckboxes
      />

      <Button
        title={'Delete checked items'}
        onPress={() => {
          setItems(items.filter((item) => !checkedItems.includes(item.name)));
        }}
        color={'red'}
      />

      <Button
        title={'Clear checked items'}
        onPress={() => {
          setCheckedItems([]);
        }}
        color={'red'}
      />

      <Text>{JSON.stringify(items, null, 2)}</Text>
      <Text>{JSON.stringify(checkedItems, null, 2)}</Text>
    </View>
  );
}

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
