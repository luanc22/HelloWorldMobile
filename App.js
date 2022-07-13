import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <StatusBar style="auto" />

      <Text style={estilosTextos.textoTitulo}>Hello World!</Text>
      
      <Image 
      source={ { uri: 'https://cdn-icons-png.flaticon.com/512/25/25231.png' } }
      style={estilosImagem.imgLogo}
      /> 

      <View style={styles.quadrado}>
        <Text style={estilosTextos.texto}>Esse é meu primeiro aplicativo.</Text>
        <Text style={estilosTextos.texto}>Criado por Luan Cabral.</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    },
  quadrado: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    height: 100,
    borderRadius: 8,
    borderStyle: 'solid',
    borderWidth: 2,
    },
});

const estilosTextos = StyleSheet.create({
  textoTitulo: {
    margin: 10,
    padding: 20,
    fontSize: 36,
    borderWidth: 2,
    borderRadius: 3,
    backgroundColor: '#fff',
  },
  texto: {
    margin: 10,
    fontSize: 18,
  },
});

const estilosImagem = StyleSheet.create({
  imgLogo: {
    margin: 20,
    width: 100,
    height: 100,
  },
});
