import React from 'react';
import { View, Text, Button, TouchableOpacity} from 'react-native';

import { style } from './estilo';


export default function PaginaInicioQuiz({ nome, iniciarQuiz, sair }) {

  return (
    <View style={style.containerInicioQuiz}>

      <View style={style.cabecalho}>
        <Text style={style.saudacao}>
          Olá, {nome}! 👋
        </Text>

        <TouchableOpacity 
          style={style.botaoSairCustomizado} 
          onPress={sair}>
          <Text style={style.textoBotaoSair}>Voltar</Text>
        </TouchableOpacity>
      </View>

      
      <Text style={style.avisoQuiz}>
        Descubra seu perfil na Tecnologia 💻
      </Text>

      <Text style={style.textoQuiz}>
        Você já imaginou qual carreira de tecnologia
        combina mais com você?
      </Text>

      <Text style={style.textoQuiz}>
        Responda a algumas perguntas sobre suas
        preferências e situações do dia a dia para
        conhecer áreas que podem combinar com seu perfil.
      </Text>

      <Text style={style.avisoQuiz}>
        Não existem respostas certas ou erradas!
      </Text>

      <TouchableOpacity
        style={style.botaoEntrarQuiz}
        onPress={iniciarQuiz}
        activeOpacity={0.8}>
        <Text style={style.textoBotaoEntrarQuiz}>
          COMEÇAR TESTE →
        </Text>
      </TouchableOpacity>


    </View>
  );
}