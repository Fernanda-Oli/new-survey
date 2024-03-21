import { Pressable, StyleSheet, View, Text } from "react-native";

const DetailListItem = ({ id, title, description, questionTitle, questionOptions }) => {
    return (
        <View>
            <Text>ID: {id}</Text>
            <Text>Title: {title}</Text>
            <Text>Description: {description}</Text>
            <Text>QuestionTitle: {questionTitle}</Text>
            <Text>QuestionOptions: {questionOptions[1]}</Text>
            <Text>QuestionOptions: {questionOptions[2]}</Text>
            <Text>QuestionOptions: {questionOptions[3]}</Text>
        </View>
    );
};

export default DetailListItem;