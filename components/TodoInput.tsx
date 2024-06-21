import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Text } from "react-native";

interface TodoInputProps {
  addTodo: (title: string) => void;
}

const TodoInput: React.FC<TodoInputProps> = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [error, showError] = useState<Boolean>(false);

  const handleAddTodo = () => {
    if (title.trim()) {
      addTodo(title);
      setTitle("");
    } else {
      showError(true);
    }
  };

  return (
    <View style={styles.inputContainer}>
      <View style={styles.inboxContainer}>
        <TextInput
          style={styles.inputBox}
          placeholder="Add Todo"
          value={title}
          onChangeText={(value) => {
            setTitle(value);
            showError(false);
          }}
        />
        {error && (
          <Text style={styles.error}>Error: Input field is empty...</Text>
        )}
      </View>
      <View style={styles.addView}>
        <Button title="Add" onPress={handleAddTodo} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",

    height: 100,
  },
  inboxContainer: {
    flexDirection: "column",

    height: 80,
    marginLeft: 20,
    marginTop: 20,
  },
  inputBox: {
    justifyContent: "center",
    width: 300,
    height: 40,
    borderColor: "#5AD86F",
    borderRadius: 8,
    borderWidth: 2,
    paddingLeft: 8,
  },
  addView: {
    marginTop: 20,
  },
  error: {
    color: "red",
  },
});

export default TodoInput;
