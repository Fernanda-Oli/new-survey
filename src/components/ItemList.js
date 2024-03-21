import React from 'react';
import { View, FlatList, Pressable, StyleSheet } from 'react-native';
import ListItem from './ListItems';
import { useNavigation } from '@react-navigation/native';


const ItemList = ({ data }) => {
  const navigation = useNavigation();

  const handleItemPress = (itemId) => {
    navigation.navigate('Detail', { itemId: itemId });
  };

  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item }) =>
          <Pressable style={styles.container} onPress={() => handleItemPress(item.id)}>
            <ListItem id={item.id} title={item.title} />
          </Pressable>
        }
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
      flexDirection: 'row',
      margin: 16,
      backgroundColor: 'red',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 100,
      borderBottomWidth: 1.5,
      borderRadius: 10,
      borderBottomColor: '#ccc',
  },
});

export default ItemList;