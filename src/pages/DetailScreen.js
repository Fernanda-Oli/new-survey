import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DetailItemList from '../components/surveyDetail/DetailItemList';

const DetailScreen = () => {
  const data = [ 
    { id: 1, title: 'Item 1', description: 'lalallalalal lalal lalal  lallalala ', questionTitle: "Title Titlee Testt", questionOptions: ['111', '2222', '3333'] },
    { id: 2, title: 'Item 2', description: 'lalallalalal  lalal lalal lallalala lallala', questionTitle: "Title Test Titlee Testt", questionOptions: ['11', '222','333'] },
    { id: 3, title: 'Item 3', description: ' lalal lalal lalal lallalala lallala', questionTitle: "Title Test Testt", questionOptions: ['1', '22',  '33'] },
    { id: 4, title: 'Item 4', description: 'lalallalalal lalal lalal lalal lallala', questionTitle: "Title Test Titlee Testt", questionOptions: ['10', '2', '3'] },

];
  return (
      <View style={styles.headerText}>
        <Text>Title</Text>
        <Text>description</Text>
        <DetailItemList data={data}/>
      </View>


  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: "center",
    color: "#ccc"
  },
});

export default DetailScreen;