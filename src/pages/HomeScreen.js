import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ItemList from '../components/ItemList';


const HomeScreen = ({ navigation }) => {
    const data = [
        { id: 1, title: 'Item 1' },
        { id: 2, title: 'Item 2' },
        { id: 3, title: 'Item 3' },
        { id: 4, title: 'Item 4' },

    ];
    return (

            <View style={{ flex: 1 }}>
                <StatusBar backgroundColor='#121212' barStyle="light-content" translucent={false} />
                <View style={styles.toolbar}>
                    <Text style={styles.headerText}>Home</Text>
                </View>
                <ItemList data={data} />
            </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: "center",
        color: "#ccc"
    },
    toolbar: {
        width: '100%',
        height: 60,
        padding: 10,
        backgroundColor: '#121212',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default HomeScreen;