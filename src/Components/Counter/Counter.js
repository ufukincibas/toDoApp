import React from 'react';
import { Text, StyleSheet } from 'react-native';
import styles from "./Counter.styles";

const TodoCounter = ({ count }) => {
  return (
    <Text style={styles.counter}>{count}</Text>
  );
};



export default TodoCounter;