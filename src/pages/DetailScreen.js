import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DetailItemList from '../components/surveyDetail/DetailItemList';

const DetailScreen = () => {
  const data = [
    { id: 1, title: 'Item 1', description: 'lalallalalal lalal lalal  lallalala ', questionTitle: " 1 Title Titlee Testt", questionOptions: ['111', 'ab', 'abc'] },
    { id: 2, title: 'Item 2', description: 'lelel lele lelel lele loe', questionTitle: "2 Title Test Titlee Testt", questionOptions: ['22', 'cd', 'efg'] },
    { id: 3, title: 'Item 3', description: ' lulu l lelel  lulul llul', questionTitle: "3 Title Test Testt", questionOptions: ['33', 'hi', 'jkl'] },
    { id: 4, title: 'Item 4', description: 'adsaflskjdglf gslfdkjg fdkjslo', questionTitle: "4 Title Test Titlee Testt", questionOptions: ['44', 'mn', 'opq'] },

  ];
  return (

    <View style={styles.container}>
      <Text style={styles.headerText}>Title</Text>
      <Text style={styles.descriptionText}>description</Text>
      <DetailItemList data={data} />
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    padding: 16,
    marginBottom: 20,
    marginTop: 20,
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: "center",
    color: "black"
  },
  descriptionText: {
    fontSize: 18,
    fontWeight: 'normal',
    textAlign: "center",
    color: "gray"
  },
  teste: {
    width: 100,
    height: 60
  }
});

export default DetailScreen;