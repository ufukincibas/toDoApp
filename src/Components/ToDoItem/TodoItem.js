import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import styles from "./TodoItem.styles"

const TodoItem = ({ todo, onToggleComplete, onLongPress }) => {
  return (
    <TouchableOpacity 
      style={[styles.todoItem, todo.completed && styles.completedTodo]}
      onPress={onToggleComplete}
      onLongPress={onLongPress}
    >
      <Text style={[styles.todoText, todo.completed && styles.completedText]}>
        {todo.text}
      </Text>
    </TouchableOpacity>
  );
};



export default TodoItem;