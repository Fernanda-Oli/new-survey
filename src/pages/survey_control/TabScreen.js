import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import ItemListSurveys from '../../components/survey_control/active_tab/ItemAtiveSurveys';
import ItemCloseSurveys from '../../components/survey_control/close_tab/ItemCloseSurvey';


const TabScreen = () => {
    const data = [
        { id: 1, title: 'Item 1', description: 'lalallalalallalalal alallalalal lalal lalal  lallala alallalalal lalal lalal  lallala lalal lalal  lallalaalal lalal lalal  lallalala ', questionTitle: " 1 Title Titlee Testt", questionOptions: ['111', 'ab', 'abc'] },
        { id: 2, title: 'Item 2', description: 'lelel lele lelel lele loe', questionTitle: "2 Title Test Titlee Testt", questionOptions: ['22', 'cd', 'efg'] },
        { id: 3, title: 'Item 3', description: ' lulu l lelel  lulul llul', questionTitle: "3 Title Test Testt", questionOptions: ['33', 'hi', 'jkl'] },
        { id: 4, title: 'Item 4', description: 'adsaflskjdglf gslfdkjg fdkjslo', questionTitle: "4 Title Test Titlee Testt", questionOptions: ['44', 'mn', 'opq'] },
        { id: 5, title: 'Item 5', description: 'lalallalalal lalal lalal  lallalala ', questionTitle: " 1 Title Titlee Testt", questionOptions: ['111', 'ab', 'abc'] },
        { id: 6, title: 'Item 6', description: 'lelel lele lelel lele loe', questionTitle: "2 Title Test Titlee Testt", questionOptions: ['22', 'cd', 'efg'] },
        { id: 7, title: 'Item 7', description: ' lulu l lelel  lulul llul', questionTitle: "3 Title Test Testt", questionOptions: ['33', 'hi', 'jkl'] },
        { id: 8, title: 'Item 8', description: 'adsaflskjdglf gslfdkjg fdkjslo', questionTitle: "4 Title Test Titlee Testt", questionOptions: ['44', 'mn', 'opq'] },

    ];
    const [activeTab, setActiveTab] = useState('Ativos');

    const renderContent = () => {
        if (activeTab === 'Ativos') {
            return (<ItemListSurveys data={data} />)
        } else if (activeTab === 'Fechados') {
            return (<ItemCloseSurveys data={data} />)
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