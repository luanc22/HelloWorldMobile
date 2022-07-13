import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.barraTitulo}>
      <Text style={estilosTextos.textoTitulo}>Hello World!</Text>
      </View>
      
      <StatusBar style="auto" />

      <Image 
      source={ { uri: 'https://cdn-icons-png.flaticon.com/512/25/25231.png' } }
      style={estilosImagem.imgLogo}
      /> 

      <View style={styles.quadrado}>
        <Text style={estilosTextos.texto}>Esse é meu primeiro aplicativo.</Text>
        <Text style={estilosTextos.texto}>Criado por <Text style={ estilosTextos.destaque }>Luan Cabral</Text>.</Text>
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
    barraTitulo: {
      backgroundColor: '#fff',
      height: 100,
      alignItems: 'center',
      justifyContent: 'center',
    },
});

const estilosTextos = StyleSheet.create({
  textoTitulo: {
    margin: 10,
    padding: 20,
    fontSize: 36,
    borderWidth: 2,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  texto: {
    margin: 10,
    fontSize: 18,
  },
  destaque: {
    fontStyle: 'italic',
    fontWeight: 'bold',
  }
});

const estilosImagem = StyleSheet.create({
  imgLogo: {
    margin: 20,
    width: 100,
    height: 100,
  },
});
