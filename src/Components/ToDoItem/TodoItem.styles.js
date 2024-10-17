import { StyleSheet } from "react-native";

export default StyleSheet.create({
    todoItem: {
      padding: 15,
      backgroundColor: '#f9f9f9',
      borderBottomColor: '#ddd',
      borderBottomWidth: 1,
    },
    completedTodo: {
      backgroundColor: '#d3d3d3',
    },
    todoText: {
      fontSize: 18,
    },
    completedText: {
      textDecorationLine: 'line-through',
      color: '#888',
    },
  });