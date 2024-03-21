import {
    StyleSheet,
    View,
    Text,
    Image
} from "react-native";
const logoImg = require("../../assets/arroww.jpg")

const ListItem = ({ survey, onClickSurvey }) => {
    return (
        <View style={styles.item}>
            <View style={styles.textContainer}>
                <Text style={styles.textTitle}>{survey.title}</Text>
                <Text style={styles.textSubtitle}>{survey.description}</Text>
            </View>
            <View style={styles.iconContainer}>
                <Image style={styles.icon} source={logoImg} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#ffffff',
        marginHorizontal: 16,
        marginVertical:8,
        borderRadius: 10,
        borderWidth:1.5,
        borderColor:'black',
        padding: 16,
        flexDirection: 'row'
    },
    iconContainer: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
    },
    textContainer: {
        flex: 1,
        marginRight: 6
    },
    textTitle: {
        fontSize: 20,
        padding:4,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    textSubtitle: {
        fontSize: 16,
        padding:4,
        fontStyle:'normal',
        color: 'black'
    },
    icon: {
        height: 18,
        width: 18,
    }
});

export default ListItem;