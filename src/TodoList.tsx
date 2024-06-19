

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















// import React from 'react';
// import { View, FlatList, StyleSheet } from 'react-native';
// import TodoItem from './TodoItem';

// interface TodoListProps {
//     todo: { id: number, title: string, completed: boolean };
//   onComplete: (id: string) => void;
//   onDelete: (id: string) => void;
// }

// const TodoList: React.FC<TodoListProps> = ({ todos, onComplete, onDelete }) => (
//   <View style={styles.todoList}>
//     <FlatList
//       data={todos}
//       renderItem={({ item }) => <TodoItem todo={item} onComplete={onComplete} onDelete={onDelete} />}
//       keyExtractor={(item) => item.id}
//     />
//   </View>
// );

// export default TodoList;

// const styles = StyleSheet.create({
//     todoList: {
//       flex: 1, // Make the todo list take up the full available space
//     },
//   });