import { Pressable, StyleSheet, View, FlatList } from "react-native";
import DetailListItem from "./DetailListItems";
import { useState } from "react";
import { CheckBox } from "react-native-elements";

const DetailItemList = ({ data }) => {
    return (
        <View >
            <FlatList
                data={data}
                renderItem={({ item }) =>
                    <DetailListItem
                        id={item.id}
                        questionOptions={item.questionOptions}
                        questionTitle={item.questionTitle} />
                }
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
};

export default DetailItemList;