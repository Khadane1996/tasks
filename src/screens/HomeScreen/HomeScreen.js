import { SafeAreaView } from 'react-native';
import TodoHeader from '../../components/TodoHeader';
import TodoList from '../../components/TodoList';

export default function HomeScreen({navigation}) {

  return (
    <SafeAreaView>
      <TodoHeader />
      <TodoList navigation={navigation}/>
    </SafeAreaView>
  );
}
