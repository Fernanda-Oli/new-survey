import { FlatList, StyleSheet, View } from "react-native";
import { Button } from "react-native-elements/dist/buttons/Button";
import DetailListItem from "./DetailListItems";


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
                ListFooterComponent={renderFooter()}
            />
        </View>
    );
};

const renderFooter = () => {
    return (
        <View style={styles.buttonSend}>
            <Button title='Enviar' onPress={() => { console.log('botão enviar ok,') }} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonSend: {
        alignItems: 'center',
        borderRadius: 10,
        borderColor: "#E3E1E1",
        borderWidth: 2,
        backgroundColor: "green",
        width: 90,
        height: 40,
        margin: 16,
        justifyContent: "center",
        alignSelf: 'center'
    }
});

export default DetailItemList;

