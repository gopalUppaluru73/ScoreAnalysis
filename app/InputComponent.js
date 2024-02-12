import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

const InputComponent = ({ onChange }) => {
  const [studentName, setStudentName] = useState('');
  const [scores, setScores] = useState([0, 0, 0, 0, 0]);

  const handleScoreChange = (index, value) => {
    let newValue = parseInt(value);
    if (isNaN(newValue) || newValue < 0) {
      newValue = 0;
    } else if (newValue > 100) {
      newValue = 0;
    }
    const newScores = [...scores];
    newScores[index] = newValue;
    setScores(newScores);
    onChange(studentName, newScores);
    
  };

  return (
    <View style={styles.inputCom}>
      <View style={styles.row}>
        <Text>Student:</Text>
        <TextInput
          style={styles.input}
          placeholder="Student Name"
          value={studentName}
          onChangeText={text => setStudentName(text)}
        />
      </View>
      {[1, 2, 3, 4, 5].map((subject, index) => (
        <View key={index} style={styles.row}>
          <Text>Subject {subject}:</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            onChangeText={value => handleScoreChange(index, value)}
            value={scores[index].toString()}
          />
        </View>
      ))}
    </View>
  );
};


const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    textAlign: "left",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  input: {
    height: 42,
    width: 120,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: '#1834d5',
    borderRadius: 10,
    textAlign: 'center'
  },
});

export default InputComponent;
