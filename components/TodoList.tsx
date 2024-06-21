

import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import TodoItem from './TodoItem';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

interface TodoListProps {
  todos: Todo[];
  toggleCompleteTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleCompleteTodo, deleteTodo }) => {
  return (
    <FlatList
    data={todos}
    renderItem={({ item }) => (
      <TodoItem
        todo={item}
        toggleCompleteTodo={toggleCompleteTodo}
        deleteTodo={deleteTodo}
      />
    )}
    keyExtractor={(item) => item.id.toString()}
  />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
  }
});

export default TodoList;












