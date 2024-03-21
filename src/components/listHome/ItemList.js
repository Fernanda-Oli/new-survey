import React from 'react';
import { View, FlatList, StyleSheet, Pressable } from 'react-native';
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
          <Pressable onPress={() => handleItemPress(item.id)}>
            <ListItem survey={item} />
          </Pressable>
        }
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};


export default ItemList;