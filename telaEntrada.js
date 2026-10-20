import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';

import {style} from './estilo'
import ilustracao from './assets/telaInicial.jfif';

export default function TelaEntrada({ nome, setNome, aoEntrar}) { 
  return(
    <View style={style.containerTelaLogin}>

      <Text style={style.tituloTelaEntrada}>
        Boas-Vindas!
      </Text>

      <Image
        source={ilustracao}
        style={style.ilustracao}
        resizeMode="contain"
      />
      
      <Text style={style.subtituloTelaEntrada}>
        Vamos descobrir sua área na tecnologia?
      </Text>

      <TextInput
        style={style.campoInput}
        placeholder="Como podemos chamar você?"
        placeholderTextColor="#9299AD"
        value={nome}
        onChangeText={setNome}
        maxLength={40}
        autoCapitalize="words"
        returnKeyType="done"
        onSubmitEditing={() => {
          if (nome.trim().length > 0) {
            aoEntrar();
          }
        }}
      />

      <TouchableOpacity
        style={[
          style.botaoEntrarQuiz,
          { opacity: nome.trim() ? 1 : 0.5 },
        ]}
        onPress={aoEntrar}
        disabled={!nome.trim()}
        activeOpacity={0.8}
      >
        <Text style={style.textoBotaoEntrarQuiz}>
          COMEÇAR →
        </Text>
      </TouchableOpacity>
    </View>
  )
}
