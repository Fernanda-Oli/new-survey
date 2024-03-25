import {
    StyleSheet,
    View,
    Text,
    Image,
    Button
} from "react-native";
const logoImg = require("..\\..\\assets\\arroww.jpg")

const ListItemSurveys = ({ survey, onClickSurvey }) => {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row' }}>
                <View style={styles.containerItem}>
                    <Text style={{ textAlign: 'right' }}>Respostas: 05</Text>
                    <Text>{survey.title}</Text>
                    <Text>{survey.description}</Text>
                </View>
                <View style={styles.iconContainer}>
                    <Image style={styles.icon} source={logoImg} />
                </View>

            </View>
            <View style={{ flexDirection: 'row', flex: 1, width: '80%', alignItems: 'center' }}>
                <Text style={styles.button} onPress={() => { console.log('botão Deletar ok,') }} >Deletar</Text>
                <Text style={styles.button} onPress={() => { console.log('botão Editar ok,') }} >Editar</Text>
                <Text style={styles.button} onPress={() => { console.log('botão Fechar ok,') }} >Fechar</Text>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        marginHorizontal: 16,
        marginVertical: 8,
        borderRadius: 10,
        borderWidth: 1.5,
        borderColor: 'black',
        padding: 16,
    },
    containerItem: {
        width: "90%",
        backgroundColor: '#ffffff',
        marginVertical: 8,
        padding: 16,
        flexDirection: 'column'
    },
    iconContainer: {
        justifyContent: 'space-evenly',
    },
    button: {
        borderRadius: 10,
        borderColor: 'green',
        borderWidth: 2,
        padding: 8,
        width: 90,
        height: 40,
        margin: 8,
        textAlign: 'center',
    }
});

export default ListItemSurveys;