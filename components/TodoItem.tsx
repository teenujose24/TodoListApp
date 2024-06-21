import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

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

const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  toggleCompleteTodo,
  deleteTodo,
}) => {
  return (
    <View style={styles.todoContainer}>
      <Text
        style={[styles.todoText, todo.completed && styles.completed]}
        onPress={() => toggleCompleteTodo(todo.id)}
      >
        {todo.title}
      </Text>
      <TouchableOpacity onPress={() => deleteTodo(todo.id)}>
        <Ionicons name="remove-circle-outline" size={24} color="red" />
      </TouchableOpacity>
      {/* <Button title="Delete" onPress={() => deleteTodo(todo.id)} color="red" /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  todoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  todoText: {
    fontSize: 18,
  },
  completed: {
    textDecorationLine: "line-through",
    color: "gray",
  },
});

export default TodoItem;
