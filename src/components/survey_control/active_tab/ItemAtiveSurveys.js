import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList, Pressable, View } from 'react-native';
import ListItemSurveys from './ListItemSurveys';

const ItemListSurveys = ({ data }) => {
    const navigation = useNavigation();

    const handleItemPress = (itemId) => {
        navigation.navigate('Detail', { itemId: itemId });
    };

    return (
        <View>
            <FlatList
                data={data}
                renderItem={({ item }) =>
                    // <Pressable onPress={() => handleItemPress(item.id)}>
                    <Pressable onPress={() => console.log('ItemListSurveys ok')}>
                        <ListItemSurveys survey={item} />
                    </Pressable>
                }
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
};


export default ItemListSurveys;