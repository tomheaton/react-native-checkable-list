# react-native-checkable-list

react native checkable list

## Installation

```sh
npm install react-native-checkable-list
```

## Usage

```jsx
import CheckableList from 'react-native-checkable-list';

export default function App() {
  const [items, setItems] = React.useState<
    { id: string; name: string; _checked: boolean }[]
  >([
    { id: 'apple', name: 'apple', _checked: false },
    { id: 'banana', name: 'banana', _checked: false },
    { id: 'orange', name: 'orange', _checked: false },
  ]);

  return (
    <View>
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
        canCheckItem={(item) => item.name !== 'banana'}
      />
    </View>
  );
}
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
