import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ItemList from '../components/listHome/ItemList';


const HomeScreen = ({ navigation }) => {
    const data = [
        { id: 1, title: 'Item 1', description: 'lalallalalal lalal lalal  lallalala ', questionTitle: " 1 Title Titlee Testt", questionOptions: ['111', 'ab', 'abc'] },
        { id: 2, title: 'Item 2', description: 'lelel lele lelel lele loe', questionTitle: "2 Title Test Titlee Testt", questionOptions: ['22', 'cd', 'efg'] },
        { id: 3, title: 'Item 3', description: ' lulu l lelel  lulul llul', questionTitle: "3 Title Test Testt", questionOptions: ['33', 'hi', 'jkl'] },
        { id: 4, title: 'Item 4', description: 'adsaflskjdglf gslfdkjg fdkjslo', questionTitle: "4 Title Test Titlee Testt", questionOptions: ['44', 'mn', 'opq'] },
        { id: 1, title: 'Item 1', description: 'lalallalalal lalal lalal  lallalala ', questionTitle: " 1 Title Titlee Testt", questionOptions: ['111', 'ab', 'abc'] },
        { id: 2, title: 'Item 2', description: 'lelel lele lelel lele loe', questionTitle: "2 Title Test Titlee Testt", questionOptions: ['22', 'cd', 'efg'] },
        { id: 3, title: 'Item 3', description: ' lulu l lelel  lulul llul', questionTitle: "3 Title Test Testt", questionOptions: ['33', 'hi', 'jkl'] },
        { id: 4, title: 'Item 4', description: 'adsaflskjdglf gslfdkjg fdkjslo', questionTitle: "4 Title Test Titlee Testt", questionOptions: ['44', 'mn', 'opq'] },

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