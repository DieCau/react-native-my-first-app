import { Image, StyleSheet, Text, View } from 'react-native';
import { homeStyles } from './styles/HomeStyles';

export default function App() {
  return (
    <View style={homeStyles.container}>
      <View>
        <Text style={homeStyles.titulo}>Este es el título</Text>
      </View>
      <Text>Hola me llamo Diego!</Text>
      <Image source={{ uri: 'https://www.infobae.com/resizer/v2/IRE5TJ2RXRFFXEQBIDCUEVORAM.jpg?auth=6d100eb097084544152f4b32bc6ffd3b099a346234206c2397a652fd7dbd4788&smart=true&width=1200&height=1200&quality=85'  }} 
      height={300} width={300}/>
    </View>
  );
}

const styles = StyleSheet.create({
  
});
