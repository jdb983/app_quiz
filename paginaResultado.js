
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity
} from 'react-native';

import { style } from './estilo';
import { SafeAreaView } from 'react-native-safe-area-context';

const perfis = {
  programacao: {
    titulo: 'Desenvolvedor(a) de Software',
    descricao:
      'Você gosta de criar aplicativos, sites e soluções por meio da programação.',
  },

  dados: {
    titulo: 'Analista de Dados',
    descricao:
      'Você gosta de analisar informações, encontrar padrões e ajudar na tomada de decisões.',
  },

  design: {
    titulo: 'Designer de Interfaces',
    descricao:
      'Você gosta de criatividade, organização visual e criação de experiências digitais.',
  },

  redes: {
    titulo: 'Analista de Redes',
    descricao:
      'Você gosta de conectar dispositivos e entender como os computadores se comunicam.',
  },

  seguranca: {
    titulo: 'Analista de Segurança da Informação',
    descricao:
      'Você gosta de identificar riscos, prevenir problemas e proteger informações e sistemas.',
  },
};

export default function PaginaResultado({ resultado, sair }) {
  
return (
 <SafeAreaView style={{ flex: 1, backgroundColor: '#F4F6FC' }}> 
  <ScrollView
    style={style.scrollView}
    contentContainerStyle={style.conteudoScroll}>

    <View style={style.cabecalho}>
      <Text style={style.saudacao}>
        Resultado do teste!
      </Text>

      <TouchableOpacity
        style={style.botaoSairCustomizado}
        onPress={sair}
        activeOpacity={0.8}>
        <Text style={style.textoBotaoSair}>
          Voltar
        </Text>
      </TouchableOpacity>
    </View>

    <Text style={style.tituloQuiz}>
      Seu perfil tecnológico:
    </Text>

    <Text style={style.textoQuiz}>
      Estas são as áreas que mais combinam
      com suas respostas.
    </Text>

    {resultado.map((categoria) => (
      <View
        key={categoria}
        style={style.cartaoResultado}>
        
        <Text style={style.tituloResultado}>
          {perfis[categoria].titulo}
        </Text>

        <Text style={style.descricaoResultado}>
          {perfis[categoria].descricao}
        </Text>
      </View>
    ))}

    <Text style={style.agradecimento}>
      Obrigado por participar! 💜
    </Text>
  </ScrollView>
 </SafeAreaView>
);

}
