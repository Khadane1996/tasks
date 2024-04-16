import { StyleSheet, View, SafeAreaView } from 'react-native';
import store from "./src/redux/store";
import { Provider } from 'react-redux';
import Routing from './src/components/Routing';


export default function App() {

  return (
    <View style={styles.container}>
      <Provider store={store}>
        <Routing />
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20
  },
});
