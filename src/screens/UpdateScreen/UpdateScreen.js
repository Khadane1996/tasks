import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import { useDispatch } from 'react-redux';
import { editTask } from '../../redux/taskSlice';

const UpdateScreen = ({route, navigation}) => {

  const { id, name } = route.params;

  const [todo, setTodo] = useState('');
  
  const dispatch = useDispatch();

  const onSubmitTask = () => {
    if (todo.trim().length === 0) {
      alert("S'il vous plait entrer tache");
      setTodo("");
      return;
    }
    dispatch(
      editTask({
        id: id,
        name: todo
      })
    )

    setTodo("");
    
    navigation.push('Home')
  }

  useEffect(() => {
    setTodo(name);
  }, []) 

  return (

    <SafeAreaView>
      <View>
        <Text style={{ 
          fontSize: 20,
          fontWeight: 'bold',
          textAlign: 'center',
          marginTop: 1
        }}>
          Modifier tache
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
            <Text style={{ color: 'white' }}>Modifier</Text>
          </TouchableOpacity>

        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({ 
  
});

export default UpdateScreen;
