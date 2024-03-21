import { Text, View } from 'react-native';


const ListItem = ({ id, title }) => {
    return (
        <View>
            <Text>ID: {id}</Text>
            <Text>Title: {title}</Text>
        </View>
    );
};

export default ListItem;