
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Olá Mundo</Text>

      <Text>Meu nome é Neuza e este é o meu primeiro APP em React!</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CCC',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'start',
  },
  titulo:{
    backgroundColor: "#ff6984",
    padding: 10,
    borderRadius: 5
  }
});
