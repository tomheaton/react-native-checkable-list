import React from 'react';
import { FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import Checkbox from './Checkbox';

// TODO: allow custom styling
type Props<T extends any> = {
  items: T[];
  renderItem: (item: T) => React.ReactElement;
  onPressItem?: (item: T) => void;
  renderCheckbox?: (checked: boolean, disabled: boolean) => React.ReactElement;
  ListHeaderComponent?: React.ComponentType<any> | React.ReactElement;
  // TODO: add default keyExtractor that uses index
  keyExtractor: (item: T) => string;
  canCheckItem?: (item: T) => boolean;
  // checkedItems?: Set<string>;
  // setCheckedItems?: (checked: Set<string>) => void;
  // TODO: use Set<string> instead of string[]?
  checkedItems?: string[];
  setCheckedItems?: (checked: string[]) => void;
};

const CheckableList = <T extends any>({
  items,
  // setItems,
  onPressItem,
  renderItem,
  renderCheckbox,
  ListHeaderComponent,
  keyExtractor,
  canCheckItem,
  checkedItems,
  setCheckedItems,
}: Props<T>): JSX.Element => {
  const [showCheckboxes, setShowCheckboxes] = React.useState<boolean>(false);

  return (
    <FlatList
      data={items}
      keyExtractor={keyExtractor}
      renderItem={({ item }) => {
        const key = keyExtractor(item);

        return (
          <TouchableOpacity
            style={styles.itemRow}
            onPress={() => {
              if (showCheckboxes) {
                if (canCheckItem && !canCheckItem(item)) return;

                if (!checkedItems || !setCheckedItems) return;
                if (!checkedItems.includes(key)) {
                  setCheckedItems([...checkedItems, key]);
                } else {
                  setCheckedItems(checkedItems.filter((i) => i !== key));
                }
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
                    checkedItems?.includes(key) ?? false,
                    canCheckItem ? !canCheckItem(item) : false
                  )
                ) : (
                  <Checkbox value={checkedItems?.includes(key) ?? false} />
                )}
              </>
            )}
          </TouchableOpacity>
        );
      }}
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
