import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

interface TodoItemProps {
  todo: Todo;
  toggleCompleteTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleCompleteTodo, deleteTodo }) => {
  return (
    <View style={styles.todoContainer}>
      <Text
        style={[styles.todoText, todo.completed && styles.completed]}
        onPress={() => toggleCompleteTodo(todo.id)}
      >
        {todo.title}
      </Text>
      <Button title="Delete" onPress={() => deleteTodo(todo.id)} />
    </View>
  );
};

const styles = StyleSheet.create({
  todoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  todoText: {
    fontSize: 18,
  },
  completed: {
    textDecorationLine: 'line-through',
    color: 'gray',
  }
});

export default TodoItem;
