import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import ItemList from '../../components/listHome/ItemList';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import LoginDialog from '../login_dialog/LoginDialog';

// const logo = require("../assets/login.png");
const menu = require("..\\assets\\menu.png");
const logoo = require("..\\assets\\login.png");

const HomeScreen = () => {
    const navigation = useNavigation();

    const handleImagePress = () => {
        console.log('Imagem clicada!');
    };
    const [dialogVisible, setDialogVisible] = useState(false);

    const handleOpenDialog = () => {
        setDialogVisible(true);
    };

    const handleCloseDialog = () => {
        setDialogVisible(false);
    };

    const data = [
        { id: 1, title: 'Item 1', description: 'lalallalalal lalal lalal  lallalala ', questionTitle: " 1 Title Titlee Testt", questionOptions: ['111', 'ab', 'abc'] },
        { id: 2, title: 'Item 2', description: 'lelel lele lelel lele loe', questionTitle: "2 Title Test Titlee Testt", questionOptions: ['22', 'cd', 'efg'] },
        { id: 3, title: 'Item 3', description: ' lulu l lelel  lulul llul', questionTitle: "3 Title Test Testt", questionOptions: ['33', 'hi', 'jkl'] },
        { id: 4, title: 'Item 4', description: 'adsaflskjdglf gslfdkjg fdkjslo', questionTitle: "4 Title Test Titlee Testt", questionOptions: ['44', 'mn', 'opq'] },
        { id: 5, title: 'Item 5', description: 'lalallalalal lalal lalal  lallalala ', questionTitle: " 1 Title Titlee Testt", questionOptions: ['111', 'ab', 'abc'] },
        { id: 6, title: 'Item 6', description: 'lelel lele lelel lele loe', questionTitle: "2 Title Test Titlee Testt", questionOptions: ['22', 'cd', 'efg'] },
        { id: 7, title: 'Item 7', description: ' lulu l lelel  lulul llul', questionTitle: "3 Title Test Testt", questionOptions: ['33', 'hi', 'jkl'] },
        { id: 8, title: 'Item 8', description: 'adsaflskjdglf gslfdkjg fdkjslo', questionTitle: "4 Title Test Titlee Testt", questionOptions: ['44', 'mn', 'opq'] },

    ];
    return (

        <View style={{ flex: 1 }}>
            <StatusBar backgroundColor='#121212' barStyle="light-content" translucent={false} />
            <View style={styles.toolbar}>
                <TouchableOpacity onPress={handleImagePress}>
                    <View style={styles.iconContainer}>
                        <Image style={styles.icon} source={menu} />
                    </View>
                </TouchableOpacity>

                <Text style={styles.headerText}>Home</Text>
                <TouchableOpacity onPress={handleOpenDialog}>
                    <View style={styles.iconContainer}>
                        <Image style={styles.icon} source={logoo} />
                    </View>
                        <LoginDialog visible={dialogVisible} onClose={handleCloseDialog} />
                </TouchableOpacity>
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
        color: "black"
    },
    toolbar: {
        width: '100%',
        flexDirection: 'row',
        height: 60,
        padding: 10,
        backgroundColor: '#ccc',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    icon: {
        height: 18,
        width: 18,
    },
    iconContainer: {
        justifyContent: 'space-evenly',
    },
});

export default HomeScreen;