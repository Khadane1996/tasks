import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSelector } from "react-redux";
import { deleteTask } from "../redux/taskSlice"
import { useDispatch } from 'react-redux';

const TodoList = ({navigation}) => {

  const dispatch = useDispatch();
  const todos = useSelector(state => state.tasks);
  
  const onDelete = (id) => {
    dispatch(
      deleteTask({
        id: id,
      })
    );
  }

  const renderItem = ({ item }) => {

    return (
      <SafeAreaView>
        <View style={styles.item}>
          <TouchableOpacity
            style={{width: '80%', padding: 10}}
            onPress={() => 
              navigation.navigate('Update', { id: item.id, name: item.name })
            }
          >
            <Text style={styles.title}> {item.name} </Text>
          </TouchableOpacity>

          <TouchableOpacity
              style={styles.deleteButton}
              onPress={() =>
                onDelete(item.id) 
              }
          >
            <Ionicons name="trash" size={30} color="red" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    )
  }

  return (
    <View>
      <FlatList 
          data={todos}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({ 
  item: {
    backgroundColor: '#e9e9e9',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  title: {
    fontSize: 20
  },
  delete: {
    fontSize: 24,
    color: 'red'
  }
});

export default TodoList;
