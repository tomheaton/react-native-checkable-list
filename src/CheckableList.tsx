import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Checkbox from './Checkbox';

type Props = {
  items: string[];
};

const CheckableList: React.FC<Props> = ({ items }) => {
  const [showCheckboxes, _setShowCheckboxes] = React.useState<boolean>(true);
  const [checked, setChecked] = React.useState<boolean>(false);

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.itemRow}>
            <View style={styles.item}>
              <Text>{item}</Text>
            </View>
            {showCheckboxes && (
              <Checkbox
                value={checked}
                setValue={() => setChecked((prev) => !prev)}
              />
            )}
          </TouchableOpacity>
        )}
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
    borderWidth: 2,
    borderColor: 'green',
  },
  item: {
    flex: 1,
    borderWidth: 2,
    borderColor: 'red',
  },
});
