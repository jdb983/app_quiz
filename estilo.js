
import { StyleSheet, Platform } from 'react-native';

const cores = {
  fundo: '#F4F6FC',
  branco: '#FFFFFF',
  principal: '#5546E8',
  principalEscuro: '#4335C9',
  destaque: '#EAE8FF',
  texto: '#202442',
  textoSecundario: '#68708A',
  borda: '#E0E4F0',
  sucesso: '#15803D',
  erro: '#DC4545',
  desabilitado: '#BFC4D2',
};

export const style = StyleSheet.create({

  // ESTILO GERAL

  containerTelaLogin: {
    flex: 1,
    backgroundColor: cores.fundo,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 32,
  },

  // TELA DE ENTRADA

  tituloTelaEntrada: {
    fontSize: 30,
    fontWeight: '800',
    color: cores.texto,
    textAlign: 'center',
    marginBottom: 12,
  },

  subtituloTelaEntrada: {
    fontSize: 16,
    color: cores.textoSecundario,
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 28,
  },

  campoInput: {
    width: '100%',
    maxWidth: 420,
    minHeight: 54,
    backgroundColor: cores.branco,
    borderWidth: 1,
    borderColor: cores.borda,
    borderRadius: 14,
    paddingHorizontal: 16,
    fontSize: 16,
    color: cores.texto,
    ...(Platform.OS == 'web'
      ? { outlineStyle: 'none' }
      : {}),
  },

  ilustracao: {
    width: '100%',
    maxWidth: 280,
    height: 190,
    alignSelf: 'center',
    marginVertical: 12,
  },

  // CONTEÚDO DAS TELAS

  containerInicioQuiz: {
    flex: 1,
    backgroundColor: cores.fundo,
    paddingHorizontal: 22,
    paddingVertical: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },

  // CABEÇALHO

  cabecalho: {
    width: '100%',
    maxWidth: 600,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 28,
  },

  saudacao: {
    flex: 1,
    fontSize: 21,
    fontWeight: '800',
    color: cores.texto,
    marginRight: 12,
  },

  // BOTÃO SAIR

  botaoSairCustomizado: {
    backgroundColor: '#FDEBEC',
    paddingVertical: 10,
    paddingHorizontal: 17,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },

  textoBotaoSair: {
    color: cores.erro,
    fontSize: 14,
    fontWeight: '700',
  },

  // TELA INICIAL DO QUIZ

  avisoQuiz: {
    width: '100%',
    maxWidth: 520,
    fontSize: 23,
    lineHeight: 31,
    textAlign: 'center',
    marginTop: 16,
    marginBottom: 14,
    fontWeight: '800',
    color: cores.texto,
  },

  textoQuiz: {
    width: '100%',
    maxWidth: 520,
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
    lineHeight: 26,
    color: cores.textoSecundario,
  },

  botaoEntrarQuiz: {
    width: '100%',
    maxWidth: 340,
    minHeight: 54,
    backgroundColor: cores.principal,
    paddingVertical: 16,
    paddingHorizontal: 22,
    borderRadius: 15,
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },

  textoBotaoEntrarQuiz: {
    color: cores.branco,
    fontSize: 16,
    fontWeight: '800',
    textAlign: 'center',
    letterSpacing: 0.4,
  },

  // ÁREA DO QUIZ

  conteudo: {
    flex: 1,
    backgroundColor: cores.fundo,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },

  scrollView: {
    flex: 1,
    backgroundColor: cores.fundo,
  },

  conteudoScroll: {
    flexGrow: 1,
    alignItems: 'center',
    paddingHorizontal: 22,
    paddingTop: 28,
    paddingBottom: 40,
  },

  // TÍTULO E PERGUNTA

  tituloQuiz: {
    width: '100%',
    maxWidth: 600,
    fontSize: 25,
    fontWeight: '800',
    textAlign: 'center',
    color: cores.texto,
    marginBottom: 18,
    lineHeight: 34,
  },

  textoProgresso: {
    fontSize: 14,
    fontWeight: '700',
    color: cores.principal,
    textAlign: 'center',
    marginBottom: 12,
  },

  perguntaQuiz: {
    width: '100%',
    maxWidth: 600,
    fontSize: 19,
    lineHeight: 29,
    fontWeight: '600',
    color: cores.texto,
    textAlign: 'center',
    marginBottom: 28,
  },

  // OPÇÕES DE RESPOSTA

  opcaoQuiz: {
    width: '100%',
    maxWidth: 560,
    minHeight: 66,
    paddingVertical: 18,
    paddingHorizontal: 18,
    borderWidth: 1.5,
    borderColor: cores.borda,
    borderRadius: 16,
    marginBottom: 13,
    backgroundColor: cores.branco,
    justifyContent: 'center',
  },

  opcaoSelecionada: {
    width: '100%',
    maxWidth: 560,
    minHeight: 66,
    paddingVertical: 18,
    paddingHorizontal: 18,
    borderWidth: 2,
    borderColor: cores.principal,
    borderRadius: 16,
    marginBottom: 13,
    backgroundColor: cores.destaque,
    justifyContent: 'center',
  },

  textoOpcaoQuiz: {
    fontSize: 16,
    lineHeight: 24,
    color: cores.texto,
    textAlign: 'center',
  },

  // BOTÃO PRÓXIMA

  botaoProxima: {
    width: '100%',
    maxWidth: 340,
    minHeight: 54,
    padding: 15,
    backgroundColor: cores.principal,
    borderRadius: 15,
    marginTop: 12,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },

  botaoProximaDesabilitado: {
    width: '100%',
    maxWidth: 340,
    minHeight: 54,
    padding: 15,
    backgroundColor: cores.desabilitado,
    borderRadius: 15,
    marginTop: 12,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },

  textoBotaoProxima: {
    color: cores.branco,
    fontSize: 16,
    fontWeight: '800',
  },

  // RESULTADO

  cartaoResultado: {
    width: '100%',
    maxWidth: 560,
    backgroundColor: cores.branco,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: cores.borda,
    padding: 22,
    marginBottom: 18,
    alignSelf: 'center',
  },

  tituloResultado: {
    fontSize: 21,
    lineHeight: 29,
    color: cores.principal,
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: 12,
  },

  descricaoResultado: {
    fontSize: 16,
    lineHeight: 26,
    color: cores.textoSecundario,
    textAlign: 'center',
  },

  agradecimento: {
    fontSize: 16,
    color: cores.texto,
    textAlign: 'center',
    marginTop: 12,
    marginBottom: 20,
    fontWeight: '600',
  },
});
