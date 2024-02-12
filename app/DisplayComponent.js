import React, { useReducer } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const reducer = (state, action) => {
  switch (action.type) {
    case 'compute_min':
      return { ...state, min: Math.min(...action.payload) };
    case 'compute_max':
      return { ...state, max: Math.max(...action.payload) };
    case 'compute_avg':
      const avg = action.payload.reduce((acc, curr) => acc + curr, 0) / action.payload.length;
      return { ...state, avg };
    case 'compute_grade':
      const avg1 = action.payload.reduce((acc, curr) => acc + curr, 0) / action.payload.length;
      
      let grade = '';
      if (avg1 >= 90) {
        grade = 'A';
      } else if (avg1 >= 80) {
        grade = 'B';
      } else if (avg1 >= 70) {
        grade = 'C';
      } else if (avg1 >= 60) {
        grade = 'D';
      } else {
        grade = 'F';
      }
      return { ...state, grade };
    default:
      return state
  }
};

const DisplayComponent = ({ scores, buttonclick }) => {
  const initialState = { min: null, max: null, avg: null, grade: null };
  const [state, dispatch] = useReducer(reducer, initialState);

  React.useEffect(() => {
    if(buttonclick.compute_min)
      dispatch({ type: 'compute_min', payload: scores });
    if(buttonclick.compute_max)
    dispatch({ type: 'compute_max', payload: scores });
    if(buttonclick.compute_avg)
    dispatch({ type: 'compute_avg', payload: scores });
    if(buttonclick.compute_grade)
    dispatch({ type: 'compute_grade', payload: scores });
  }, [buttonclick]);

  return (
    <View>
      <View style={styles.row}>
        <Text>Min Score:</Text>
        <TextInput 
          style={styles.input}
          placeholder='-'
          value={(state.min && state.min !== null ? state.min : '-').toString()}
        />
      </View>
      <View style={styles.row}>
        <Text>Max Score:</Text>
        <TextInput 
          style={styles.input}
          placeholder='-'
          value={(state.max && state.max !== null ? state.max : '-').toString()}
        />
      </View>
      <View style={styles.row}>
        <Text>Avg Score:</Text>
        <TextInput 
          style={styles.input}
          placeholder='-'
          value={state.avg && state.avg != null ? state.avg.toFixed(2) : '-'}
        />
      </View>
      <View style={styles.row}>
        <Text>Grade:</Text>
        <TextInput 
          style={styles.input}
          placeholder='-'
          value={(state.grade && state.grade !== null ? state.grade : '-')}
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

export default DisplayComponent;
