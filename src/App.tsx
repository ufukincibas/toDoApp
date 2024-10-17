import React, { useState } from 'react';
import { View, Text, StyleSheet , Alert } from 'react-native';
import TodoCounter from './Components/Counter';
import TodoInput from './Components/Input';
import TodoList from './Components/List';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { id: Date.now().toString(), text: newTodo, completed: false }]);
      setNewTodo('');
    }
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const activeTodosCount = todos.filter(todo => !todo.completed).length;

  const handleLongPress = (id) => {
    Alert.alert(
      "Todo'yu sil",
      "Bu todo'yu silmek istediğine emin misin?",
      [
        { text: "İptal", style: "cancel" },
        { text: "Evet", onPress: () => deleteTodo(id) }
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Todo List</Text>
      <TodoCounter count={activeTodosCount} />
      <TodoInput 
        value={newTodo}
        onChangeText={setNewTodo}
        onAdd={addTodo}
      />
      <TodoList 
        todos={todos} 
        onToggleComplete={toggleComplete} 
        onLongPress={handleLongPress}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  }
});

export default App;