import React from 'react';
import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native';
import Checkbox from './Checkbox';

type Props = {
  items: { name: string; checked: boolean }[];
  setItems: (items: { name: string; checked: boolean }[]) => void;
  renderItem: (item: { name: string; checked: boolean }) => React.ReactElement;
  onPress?: () => void;
  ListHeaderComponent?: React.ComponentType<any> | React.ReactElement;
};

const CheckableList: React.FC<Props> = ({
  items,
  setItems,
  onPress,
  renderItem,
  ListHeaderComponent,
}) => {
  const [showCheckboxes, setShowCheckboxes] = React.useState<boolean>(false);

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.itemRow}
            onPress={() => {
              if (showCheckboxes) {
                setItems(
                  items.map((i) => {
                    if (i.name === item.name) {
                      return { ...i, checked: !i.checked };
                    }
                    return i;
                  })
                );
              } else {
                onPress && onPress();
              }
            }}
            onLongPress={() => {
              setShowCheckboxes((prev) => !prev);
            }}
          >
            {renderItem(item)}
            {showCheckboxes && (
              <Checkbox
                value={item.checked}
                setValue={() => {
                  setItems(
                    items.map((i) => {
                      if (i.name === item.name) {
                        return { ...i, checked: !i.checked };
                      }
                      return i;
                    })
                  );
                }}
              />
            )}
          </TouchableOpacity>
        )}
        ListHeaderComponent={ListHeaderComponent}
      />
    </View>
  );
};

export default CheckableList;

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: 'blue',
    width: '100%',
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 2,
    borderColor: 'green',
  },
});
