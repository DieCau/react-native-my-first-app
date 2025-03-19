import FontAwesome from '@expo/vector-icons/FontAwesome';
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import { homeStyles } from './styles/HomeStyles';


export default function App() {

const loginWithFacebook = () => {
  console.log('Estas presionando el boton de Facebook');
};


  return (
    <View style={homeStyles.container}>
      
      <ImageBackground resizeMode='cover' source={{ uri: 'https://www.infobae.com/resizer/v2/IRE5TJ2RXRFFXEQBIDCUEVORAM.jpg?auth=6d100eb097084544152f4b32bc6ffd3b099a346234206c2397a652fd7dbd4788&smart=true&width=1200&height=1200&quality=85' }} >
        <View>
          <Text style={homeStyles.titulo}>Este es el título</Text>
        </View>
        <Text>Hola me llamo Diego!</Text>
      </ImageBackground>

      <FontAwesome.Button name="facebook" size={30} backgroundColor="#3b5998" borderRadius={10} onPress={loginWithFacebook}>
        Login con Facebook
      </FontAwesome.Button>

      <TouchableOpacity style={homeStyles.btn}>
        <Text style={homeStyles.txtBtn} onPress={()=> console.log('Estas presionando el botón personalizado') }>Esto es un botón personalizado</Text>
      </TouchableOpacity>
    </View>
  );
}

