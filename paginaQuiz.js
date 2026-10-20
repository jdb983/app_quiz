import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';

import { style } from './estilo';
import PaginaResultado from './paginaResultado';
import { SafeAreaView } from 'react-native-safe-area-context';

const perguntas = [
  {
    pergunta: 'O que você mais gostaria de fazer na área de tecnologia?',
    opcoes: [
      {texto: '💻 Criar aplicativos e sites', categoria: 'programacao'},
      {texto: '📊 Trabalhar com números e dados', categoria: 'dados'},
      {texto: '🎨 Criar interfaces e layouts', categoria: 'design'},
      {texto: '🌐 Trabalhar com redes', categoria: 'redes'},
    ],
  },  
   
];

function contarRespostas(respostas) {
  const pontos = {
    programacao: 0,
    redes: 0,
    seguranca: 0,
    dados: 0,
    design:0
  };

  for (let resposta of respostas) {
    pontos[resposta]++;
  }

  return pontos;
}

export default function PaginaQuiz({ sair }) {
  const [perguntaAtual, setPerguntaAtual] = useState(0);
  const [respostaSelecionada, setRespostaSelecionada] = useState('');
  const [respostas, setRespostas] = useState([]);  
  const [resultado, setResultado] = useState(null);

  const pergunta = perguntas[perguntaAtual];

  function selecionarResposta(categoria) {
    setRespostaSelecionada(categoria);
  }
  
  function proximaPergunta() {
    setRespostas(respostas.concat(respostaSelecionada));

    if (perguntaAtual < perguntas.length - 1) {
      setPerguntaAtual(perguntaAtual + 1);
      setRespostaSelecionada('');} 
      
    else {
      const todasRespostas = respostas.concat(respostaSelecionada);
      
      const pontos = contarRespostas(todasRespostas);

      let maiorPontuacao = 0;
      
      for (let categoria in pontos) {
        if (pontos[categoria] > maiorPontuacao) {
          maiorPontuacao = pontos[categoria];
        }
      }
   
      const categoriasVencedoras = [];

      for (let categoria in pontos) {
        if (pontos[categoria] === maiorPontuacao) {
          categoriasVencedoras.push(categoria);
        }
      }
     
      setResultado(categoriasVencedoras);
    }
  }  
 
  if (resultado !== null) {
    return <PaginaResultado 
          resultado={resultado}
          sair={sair}/>;
  }
   
  return (
   <SafeAreaView style={{ flex: 1, backgroundColor: '#F4F6FC' }}> 
    <ScrollView
    style={style.scrollView}
    contentContainerStyle={style.conteudoScroll}
    keyboardShouldPersistTaps="handled">

      <Text style={style.tituloQuiz}>
        Pergunta {perguntaAtual + 1} de {perguntas.length}
      </Text>

      <Text style={style.perguntaQuiz}>
        {pergunta.pergunta}
      </Text>

      {pergunta.opcoes.map((opcao, index) => (
        <TouchableOpacity
          key={index}
          style={
            respostaSelecionada == opcao.categoria
              ? style.opcaoSelecionada
              : style.opcaoQuiz
          }
          onPress={() => selecionarResposta(opcao.categoria)}
          activeOpacity={0.75}>

          <Text style={style.textoOpcaoQuiz}>
            {opcao.texto}
          </Text>
        </TouchableOpacity>
      ))}

      <TouchableOpacity
        style={
          respostaSelecionada == ''
            ? style.botaoProximaDesabilitado
            : style.botaoProxima
        }
        onPress={proximaPergunta}
        disabled={respostaSelecionada == ''}
        activeOpacity={0.8}>

        <Text style={style.textoBotaoProxima}>
          {perguntaAtual === perguntas.length - 1
            ? 'VER MEU RESULTADO'
            : 'PRÓXIMA PERGUNTA →'}
        </Text>
      </TouchableOpacity>
    </ScrollView>
  </SafeAreaView>
);
}
