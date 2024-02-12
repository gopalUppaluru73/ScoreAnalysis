import React, { useReducer } from 'react';
import { View, StyleSheet, Button } from 'react-native';

const reducer = (state, action) => {
  switch (action.type) {
    case 'compute_min':
      return Math.min(...action.payload);
    case 'compute_max':
      return Math.max(...action.payload);
    case 'compute_avg':
      return action.payload.reduce((acc, curr) => acc + curr, 0) / action.payload.length;
    case 'compute_grade':
      const avg = action.payload.reduce((acc, curr) => acc + curr, 0) / action.payload.length;
      let grade = '';
      if (avg >= 90) {
        grade = 'A';
      } else if (avg >= 80) {
        grade = 'B';
      } else if (avg >= 70) {
        grade = 'C';
      } else if (avg >= 60) {
        grade = 'D';
      } else {
        grade = 'F';
      }
      return grade;
    default:
      throw new Error('Invalid action type');
  }
};

const ButtonsComponent = ({ onChange, scores }) => {
  const [state, dispatch] = useReducer(reducer, 0);

  const handleButtonClick = type => {
    onChange(type)
    dispatch({ type, payload: scores });
  };

  return (
    <View style={styles.row}>
      <View style={styles.btnstyles}>
        <Button 
          style={styles.btn}
          title="Min" 
          onPress={() => handleButtonClick('compute_min')}
          color='#fff' 
        />
      </View>
      <View style={styles.btnstyles}>
        <Button 
          style={styles.btn}
          title="Max" 
          onPress={() => handleButtonClick('compute_max')}
          color='#fff'
        />
      </View>
      <View style={styles.btnstyles}>
        <Button 
          style={styles.btn}
          title="Avg"
          onPress={() => handleButtonClick('compute_avg')}
          color='#fff' 
        />
      </View>
      <View style={styles.btnstyles}>
        <Button 
          style={styles.btn}
          title="Grade" 
          onPress={() => handleButtonClick('compute_grade')}
          color='#fff'
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    textAlign: "left",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    marginTop: 20
  },
  btn: {
    width: '100%',
    height: 40,
    borderRadius: 5,
    fontWeight: 'bold'
  },
  btnstyles: {
    height: 60,
    width: '24%',
    backgroundColor: '#4a73c4',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 2,
    borderRadius: 10,
    marginTop: 12,
    marginBottom: 12,
    marginRight: 8
  }
});

export default ButtonsComponent;
