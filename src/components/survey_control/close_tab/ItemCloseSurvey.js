import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList, Pressable, View } from 'react-native';
import ListCloseSurveys from './ListCloseSurvey';


const ItemCloseSurveys = ({ data }) => {
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
                        <ListCloseSurveys survey={item} />
                    </Pressable>
                }
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
};


export default ItemCloseSurveys;