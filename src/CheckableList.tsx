import React from 'react';
import { FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import Checkbox from './Checkbox';

type BaseItemType = {
  id: string;
  _checked: boolean;
};

// TODO: allow custom styling
type Props<T extends BaseItemType> = {
  items: T[];
  setItems: (items: T[]) => void;
  renderItem: (item: T) => React.ReactElement;
  onPressItem?: (item: T) => void;
  renderCheckbox?: (checked: boolean, disabled: boolean) => React.ReactElement;
  ListHeaderComponent?: React.ComponentType<any> | React.ReactElement;
  canCheckItem?: (item: T) => boolean;
};

// TODO: add custom id extractor
const CheckableList = <T extends BaseItemType>({
  items,
  setItems,
  onPressItem,
  renderItem,
  renderCheckbox,
  ListHeaderComponent,
  canCheckItem,
}: Props<T>): JSX.Element => {
  const [showCheckboxes, setShowCheckboxes] = React.useState<boolean>(false);

  return (
    <FlatList
      data={items}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.itemRow}
          onPress={() => {
            if (showCheckboxes) {
              if (canCheckItem && !canCheckItem(item)) return;
              setItems(
                items.map((i) => {
                  if (i.id === item.id) {
                    return { ...i, _checked: !i._checked };
                  }
                  return i;
                })
              );
            } else {
              onPressItem && onPressItem(item);
            }
          }}
          onLongPress={() => {
            setShowCheckboxes((prev) => !prev);
          }}
        >
          {renderItem(item)}
          {showCheckboxes && (
            <>
              {renderCheckbox ? (
                renderCheckbox(
                  item._checked,
                  canCheckItem ? !canCheckItem(item) : false
                )
              ) : (
                <Checkbox
                  value={item._checked}
                  setValue={() => {
                    setItems(
                      items.map((i) => {
                        if (i.id === item.id) {
                          return { ...i, _checked: !i._checked };
                        }
                        return i;
                      })
                    );
                  }}
                />
              )}
            </>
          )}
        </TouchableOpacity>
      )}
      ListHeaderComponent={ListHeaderComponent}
    />
  );
};

export default CheckableList;

const styles = StyleSheet.create({
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 2,
    borderColor: 'green',
  },
});
