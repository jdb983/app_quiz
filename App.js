import React, {useState} from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {View, Text, Button, TouchableOpacity} from 'react-native';

import {style} from './estilo';
import TelaEntrada from './telaEntrada';
import PaginaInicioQuiz from './paiginaInicialQuiz';
import PaginaQuiz from './paginaQuiz'

export default function AppHome() {
  const [nome, setNome] = useState('');  

  const [entrou, setEntrou] = useState(false)

  const [quizIniciado, setQuizIniciado] = useState(false);

  if (entrou == false) { 
    return (
    <SafeAreaProvider>
      <TelaEntrada
        nome={nome}
        setNome={setNome}
        aoEntrar={() => setEntrou(true)}
      />
     </SafeAreaProvider> 
    ); 
  }

  if (quizIniciado == false) {
    return (
    <SafeAreaProvider>
      <PaginaInicioQuiz
        nome={nome}
        iniciarQuiz={() => setQuizIniciado(true)}
        sair={() => setEntrou(false)}
      />
     </SafeAreaProvider> 
    );
}

  return (
   <SafeAreaProvider>
    <PaginaQuiz
      sair={() => setQuizIniciado(false)}/>
  </SafeAreaProvider>
  )
}

