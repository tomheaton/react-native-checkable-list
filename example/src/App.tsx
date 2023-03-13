import Checkbox from 'expo-checkbox';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import CheckableList, { useCheckedItems } from 'react-native-checkable-list';

export default function App() {
  const [items, setItems] = React.useState<{ name: string; amount: number }[]>([
    { name: 'apple', amount: 1 },
    { name: 'banana', amount: 2 },
    { name: 'orange', amount: 3 },
    { name: 'pear', amount: 4 },
    { name: 'grape', amount: 5 },
    { name: 'pineapple', amount: 6 },
    { name: 'strawberry', amount: 7 },
    { name: 'watermelon', amount: 8 },
    { name: 'kiwi', amount: 9 },
    { name: 'mango', amount: 10 },
    { name: 'peach', amount: 11 },
    { name: 'cherry', amount: 12 },
    { name: 'lemon', amount: 13 },
    { name: 'lime', amount: 14 },
    { name: 'blueberry', amount: 15 },
  ]);

  const { checkedItems, setCheckedItems } = useCheckedItems();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>react-native-checkable-list</Text>
      <Text style={styles.description}>
        This is a list of fruits. Long press on an item to show checkboxes.
      </Text>

      <CheckableList
        data={items}
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
            color={'#2b2d42'}
          />
        )}
        canCheckItem={(item) => item.name !== 'banana'}
        checkedItems={checkedItems}
        setCheckedItems={setCheckedItems}
      />

      <View style={styles.buttonContainer}>
        {checkedItems.length > 0 && (
          <Button
            title={'Clear checked items'}
            onPress={() => {
              setCheckedItems([]);
            }}
            color={'#2b2d42'}
          />
        )}

        <Button
          title={'Delete checked items'}
          onPress={() => {
            setItems(items.filter((item) => !checkedItems.includes(item.name)));
            setCheckedItems([]);
          }}
          color={'#ef233c'}
        />
      </View>

      {/* <Text>{JSON.stringify(items)}</Text> */}
      {/* <Text>{JSON.stringify(checkedItems)}</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 48,
    paddingHorizontal: 24,
    backgroundColor: '#edf2f4',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 12,
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 24,
  },
  item: {
    flex: 1,
    borderWidth: 2,
    borderColor: '#2b2d42',
    borderRadius: 10,
    margin: 4,
    padding: 12,
  },
  checkbox: {
    marginHorizontal: 10,
    borderRadius: 999,
  },
  buttonContainer: {
    width: '100%',
    rowGap: 12,
    marginTop: 24,
  },
});
