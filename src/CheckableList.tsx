import React from 'react';
import {
  FlatList,
  StyleSheet,
  TouchableOpacity,
  type StyleProp,
  type ViewStyle,
} from 'react-native';
import Checkbox from './Checkbox';

type Props<T extends any> = {
  data: T[];
  renderItem: (item: T) => React.ReactElement;
  onPressItem?: (item: T) => void;
  renderCheckbox?: (checked: boolean, disabled: boolean) => React.ReactElement;
  // TODO: add default keyExtractor that uses index
  keyExtractor: (item: T) => string;
  canCheckItem?: (item: T) => boolean;
  checkedItems?: string[];
  setCheckedItems?: (checked: string[]) => void;
  leftCheckboxes?: boolean;
  ItemRowStyle?: StyleProp<ViewStyle>;
  // TODO: add more props?
} & Pick<
  React.ComponentProps<typeof FlatList>,
  | 'style'
  | 'contentContainerStyle'
  | 'refreshing'
  | 'onRefresh'
  | 'ListHeaderComponent'
  | 'ListHeaderComponentStyle'
  | 'ListFooterComponent'
  | 'ListFooterComponentStyle'
>;

const CheckableList = <T extends any>({
  data,
  onPressItem,
  renderItem,
  renderCheckbox,
  keyExtractor,
  canCheckItem,
  checkedItems,
  setCheckedItems,
  leftCheckboxes = false,
  ItemRowStyle,
  style,
  ...rest
}: Props<T>): JSX.Element => {
  const [showCheckboxes, setShowCheckboxes] = React.useState<boolean>(false);

  return (
    <FlatList
      style={[styles.container, style]}
      data={data}
      keyExtractor={keyExtractor}
      renderItem={({ item }) => {
        const key = keyExtractor(item);
        return (
          <TouchableOpacity
            style={[styles.itemRow, ItemRowStyle]}
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
            {!leftCheckboxes && renderItem(item)}
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
            {leftCheckboxes && renderItem(item)}
          </TouchableOpacity>
        );
      }}
      {...rest}
    />
  );
};

export default CheckableList;

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
