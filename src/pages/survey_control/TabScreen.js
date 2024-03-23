import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const TabScreen = () => {
    const [activeTab, setActiveTab] = useState('Ativos');

    const renderContent = () => {
        if (activeTab === 'Ativos') {
            return <Text>Conteúdo da aba Ativos</Text>;
        } else if (activeTab === 'Fechados') {
            return <Text>Conteúdo da aba Fechados</Text>;
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.tabBar}>
                <TouchableOpacity
                    style={[styles.tabItem, activeTab === 'Ativos' && styles.activeTab]}
                    onPress={() => setActiveTab('Ativos')}
                >
                    <Text style={styles.tabText}>Ativos</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.tabItem, activeTab === 'Fechados' && styles.activeTab]}
                    onPress={() => setActiveTab('Fechados')}
                >
                    <Text style={styles.tabText}>Fechados</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.content}>
                {renderContent()}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tabBar: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#eee',
        paddingVertical: 10,
    },
    tabItem: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
    },
    activeTab: {
        backgroundColor: '#ccc',
    },
    tabText: {
        fontSize: 16,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default TabScreen;