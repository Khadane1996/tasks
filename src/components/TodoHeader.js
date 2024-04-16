import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/taskSlice';

const TodoHeader = () => {

  const [todo, setTodo] = useState("");

  const dispatch = useDispatch();

  const onSubmitTask = () => {
    if (todo.trim().length === 0) {
      alert("S'il vous plait entrer tache");
      setTodo("");
      return;
    }
    dispatch(
      addTask({
        task: todo
      })
    )
    setTodo("");
  }

  return (
    <View>
      
      <Text style={{ 
          fontSize: 20,
          fontWeight: 'bold',
          textAlign: 'center',
          marginTop: 1
        }}>
        Gestion des taches
      </Text>
       
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <TextInput 
          style={{
            borderColor: 'gray',
            borderWidth: 1,
            padding: 10,
            margin: 10,
            width: '90%',
            borderRadius: 5
          }}
          placeholder='Ajouter tache'
          onChangeText={setTodo}
          value={todo}
        />

        <TouchableOpacity
          style={{
            backgroundColor: 'black',
            padding: 10,
            margin: 10,
            width: '90%',
            borderRadius: 5,
            alignItems: 'center'
          }}
          onPress={onSubmitTask}
        >
          <Text style={{ color: 'white' }}>Ajouter tache</Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({ 
  
});

export default TodoHeader;
