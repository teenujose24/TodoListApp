import TodoInput from "@/src/TodoInput";
import TodoList from "@/src/TodoList";
import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, FlatList } from "react-native";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const initialData: Todo[] = [
      { id: 1, title: "Learn React Native", completed: false },
      { id: 2, title: "Write Todo App", completed: false },
      { id: 3, title: "Test the App", completed: false },
    ];
    setTodos(initialData);
  }, []);

  const addTodo = (title: string) => {
    const newTodo: Todo = {
      id: todos.length ? todos[todos.length - 1].id + 1 : 1,
      title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleCompleteTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <SafeAreaView style={styles.container}>
      <TodoInput addTodo={addTodo} />
      <TodoList
        todos={todos}
        toggleCompleteTodo={toggleCompleteTodo}
        deleteTodo={deleteTodo}
      />
      {/* <FlatList
        data={todos}
        renderItem={({ item }) => (
          <TodoList
            todos={todos}
            toggleCompleteTodo={toggleCompleteTodo}
            deleteTodo={deleteTodo}
          />
        )}
        keyExtractor={item => item.id.toString()}
      /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default App;
