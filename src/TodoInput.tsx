import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

interface TodoInputProps {
  addTodo: (title: string) => void;
}

const TodoInput: React.FC<TodoInputProps> = ({ addTodo }) => {
  const [title, setTitle] = useState('');

  const handleAddTodo = () => {
    if (title.trim()) {
      addTodo(title);
      setTitle('');
    }
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Add Todo"
        value={title}
        onChangeText={setTitle}
      />
      <Button title="Add" onPress={handleAddTodo} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    flex: 1,
    marginRight: 10
  }
});

export default TodoInput;
