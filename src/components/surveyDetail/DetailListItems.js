import { useState } from "react";
import { Pressable, StyleSheet, View, Text } from "react-native";
import { CheckBox } from "react-native-elements";

const DetailListItem = ({ id, title, description, questionTitle, questionOptions }) => {
    const [checkedItems, setCheckedItems] = useState({});
    const handleItemPress = (itemId) => {
        const newCheckedItems = { ...checkedItems };
        newCheckedItems[itemId] = !newCheckedItems[itemId];
        setCheckedItems(newCheckedItems);
    };
    return (
        <View  style={styles.paddingBottom}>
            <View style={styles.container}>
                <Text>QuestionTitle: {questionTitle}</Text>
                {questionOptions.map((option, index) => (
                    <View key={index} style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <CheckBox
                            checked={checkedItems[option] || false}
                            onPress={() => handleItemPress(option)}
                        />
                        <Text>{index + 1}:   {option}</Text>
                    </View>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 8, // Adicione um espaçamento vertical para evitar que os itens da lista fiquem muito próximos uns dos outros
        marginHorizontal: 0, // Adicione um espaçamento horizontal para evitar que os itens da lista toquem nas bordas laterais da tela
        backgroundColor: '#ccc',
        padding: 16,
        borderRadius: 10,
        borderColor: 'black',
        borderWidth: 1.5
    },
    text: {
        fontSize: 24,
        textAlign: "center"
    },
    paddingBottom:{
        paddingBottom:20
    }
});

export default DetailListItem;