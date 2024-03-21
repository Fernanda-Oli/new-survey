import { Pressable, StyleSheet, View, FlatList } from "react-native";
import DetailListItem from "./DetailListItems";

const DetailItemList = ({ data }) => {

    return (
        <View >
            <FlatList
                data={data}
                renderItem={({ item }) =>
                    <Pressable style={styles.container} >
                        <DetailListItem 
                        id={item.id} 
                        title={item.title} 
                        description={item.description} 
                        questionOptions={item.questionOptions} 
                        questionTitle={item.questionTitle} />
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

export default DetailItemList;