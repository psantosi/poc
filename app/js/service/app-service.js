(function() {

    PocApp.factory('AppService', AppService);

    AppService.$inject = ['$http'];
    function AppService($http) {
        var service = {
            listar: listar
        }

        return service

        function listar() {
            return [
                {
                    rua: 'Rua 1',
                    colunas: [
                        {
                            coluna: 'Coluna 1',
                            niveis: [
                                {   
                                    enderecoLogisticoKey: 1,
                                    nivel: 'Nivel 1'
                                },
                                {
                                    enderecoLogisticoKey: 2,
                                    nivel: 'Nivel 2'
                                },
                                {
                                    enderecoLogisticoKey: 3,
                                    nivel: 'Nivel 3'
                                },
                                {
                                    enderecoLogisticoKey: 4,
                                    nivel: 'Nivel 4'
                                }
                            ]
                        },
                        {
                            coluna: 'Coluna 2',
                            niveis: [
                                {
                                    enderecoLogisticoKey: 5,
                                    nivel: 'Nivel 1'
                                },
                                {
                                    enderecoLogisticoKey: 6,
                                    nivel: 'Nivel 2'
                                },
                                {
                                    enderecoLogisticoKey: 7,
                                    nivel: 'Nivel 3'
                                },
                                {
                                    enderecoLogisticoKey: 8,
                                    nivel: 'Nivel 4'
                                }
                            ]
                        },
                        {
                            coluna: 'Coluna 3',
                            niveis: [
                                {
                                    enderecoLogisticoKey: 9,
                                    nivel: 'Nivel 1'
                                },
                                {
                                    enderecoLogisticoKey: 10,
                                    nivel: 'Nivel 2'
                                },
                                {
                                    enderecoLogisticoKey: 11,
                                    nivel: 'Nivel 3'
                                },
                                {
                                    enderecoLogisticoKey: 12,
                                    nivel: 'Nivel 4'
                                }
                            ]
                        },
                        {
                            coluna: 'Coluna 4',
                            niveis: [
                                {
                                    enderecoLogisticoKey: 13,
                                    nivel: 'Nivel 1'
                                },
                                {
                                    enderecoLogisticoKey: 14,
                                    nivel: 'Nivel 2'
                                },
                                {
                                    enderecoLogisticoKey: 15,
                                    nivel: 'Nivel 3'
                                },
                                {
                                    enderecoLogisticoKey: 16,
                                    nivel: 'Nivel 4'
                                }
                            ]
                        }
                    ]
                },
                {
                    rua: 'Rua 2',
                    colunas: [
                        {
                            coluna: 'Coluna 1',
                            niveis: [
                                {
                                    enderecoLogisticoKey: 17,
                                    nivel: 'Nivel 1'
                                },
                                {
                                    enderecoLogisticoKey: 18,
                                    nivel: 'Nivel 2'
                                },
                                {
                                    enderecoLogisticoKey: 19,
                                    nivel: 'Nivel 3'
                                },
                                {
                                    enderecoLogisticoKey: 20,
                                    nivel: 'Nivel 4'
                                }
                            ]
                        },
                        {
                            coluna: 'Coluna 2',
                            niveis: [
                                {
                                    enderecoLogisticoKey: 21,
                                    nivel: 'Nivel 1'
                                },
                                {
                                    enderecoLogisticoKey: 22,
                                    nivel: 'Nivel 2'
                                },
                                {
                                    enderecoLogisticoKey: 23,
                                    nivel: 'Nivel 3'
                                },
                                {
                                    enderecoLogisticoKey: 24,
                                    nivel: 'Nivel 4'
                                }
                            ]
                        },
                        {
                            coluna: 'Coluna 3',
                            niveis: [
                                {
                                    enderecoLogisticoKey: 25,
                                    nivel: 'Nivel 1'
                                },
                                {
                                    enderecoLogisticoKey: 26,
                                    nivel: 'Nivel 2'
                                },
                                {
                                    enderecoLogisticoKey: 27,
                                    nivel: 'Nivel 3'
                                },
                                {
                                    enderecoLogisticoKey: 28,
                                    nivel: 'Nivel 4'
                                }
                            ]
                        },
                        {
                            coluna: 'Coluna 4',
                            niveis: [
                                {
                                    enderecoLogisticoKey: 29,
                                    nivel: 'Nivel 1'
                                },
                                {
                                    enderecoLogisticoKey: 30,
                                    nivel: 'Nivel 2'
                                },
                                {
                                    enderecoLogisticoKey: 31,
                                    nivel: 'Nivel 3'
                                },
                                {
                                    enderecoLogisticoKey: 32,
                                    nivel: 'Nivel 4'
                                }
                            ]
                        }
                    ]
                },
            ]
        }
    }
})();