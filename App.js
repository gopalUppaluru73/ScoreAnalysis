import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import InputComponent from './app/InputComponent';
import ButtonsComponent from './app/ButtonsComponent';
import DisplayComponent from './app/DisplayComponent';

const App = () => {
  const [studentData, setStudentData] = useState({ name: '', scores: [0, 0, 0, 0, 0] });
  const [butonClick, setButtonClick] = useState({"compute_min":'', "compute_max":'', "compute_avg":'', "compute_grade":''})
  const handleDataChange = (name, scores) => {
    setStudentData({ name, scores });
  };

  const handleButtonClick = ( val ) =>{
    let a = {...butonClick, [val]:true}
    setButtonClick(a)
  }

  return (
    <View style={styles.container}>
      <InputComponent onChange={handleDataChange} />
      <ButtonsComponent onChange={handleButtonClick} scores={studentData.scores}/>
      <DisplayComponent scores={studentData.scores} buttonclick = {butonClick} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});

export default App;
