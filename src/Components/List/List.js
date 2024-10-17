import React from 'react';
import { FlatList } from 'react-native';
import TodoItem from '../ToDoItem';

const TodoList = ({ todos, onToggleComplete, onLongPress }) => {
  return (
    <FlatList
      data={todos}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <TodoItem 
          todo={item} 
          onToggleComplete={() => onToggleComplete(item.id)} 
          onLongPress={() => onLongPress(item.id)}
        />
      )}
    />
  );
};

export default TodoList;