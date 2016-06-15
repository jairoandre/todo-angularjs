/**
Configuração necessária para contemplar sintaxe ES6 utilizada nos testes.
**/
import angular from 'angular';
/**
Mock de dependências do angular
**/
import mocks from 'angular-mocks';

/**
Contexto considerado para execução dos testes
**/
let context = require.context('./components', true, /\.spec\.js/);

context.keys().forEach(context);