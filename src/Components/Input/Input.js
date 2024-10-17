import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import styles from "./Input.styles"

const TodoInput = ({ value, onChangeText, onAdd }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput 
        style={styles.input}
        placeholder="Yeni bir todo ekle..."
        value={value}
        onChangeText={onChangeText}
      />
      <Button title="Ekle" onPress={onAdd} />
    </View>
  );
};

;

export default TodoInput;