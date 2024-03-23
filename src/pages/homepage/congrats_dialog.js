import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, Modal, StyleSheet, Text, View } from 'react-native';

const CongratsDialog = () => {
    const navigation = useNavigation();
    return (
        <Modal
            animationType="fade"
            transparent={false}
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={styles.container}>
                <View style={styles.modalContent}>
                    <Text style={styles.title}>Login</Text>
                    <Button title="Home" onPress={() => navigation.navigate("Home", { screen: "HomeScreen" })} />
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: "90%",
        height: '90%',
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        marginBottom: 20,
    },

});

export default CongratsDialog;