(function() {

    PocApp.controller('AppController', AppController);

    AppController.$inject = ['AppService'];
    function AppController(Service) {
        var vm = this;

        vm.selecionar = function(nivel) {
            if (!vm.enderecos.origem) {
                vm.enderecos.origem = nivel;
                return;
            } else if (vm.enderecos.origem.enderecoLogisticoKey === nivel.enderecoLogisticoKey) {
                delete vm.enderecos.origem;
                return;
            }
            
            if (!vm.enderecos.destino) {
                vm.enderecos.destino = nivel;
                abriModal();
                return;
            } else if (vm.enderecos.destino.enderecoLogisticoKey === nivel.enderecoLogisticoKey) {
                delete vm.enderecos.destino;
                return;
            }
            
            vm.enderecos.origem = nivel;
            delete vm.enderecos.destino;
        };

        // function abriModal() {
        //     var modalInstance = $modal.open({
        //         templateUrl: '_shared/modal-confimacao-template.html',
        //         controller: 'ModalConfirmacaoController',
        //         resolve: {
        //           enderecos: function () {
        //             return vm.enderecos;
        //           }
        //         }
        //       });
        // }

        function listar() {
            vm.lista = Service.listar();
        }

        function init() {
            vm.enderecos = { };

            listar();
        }

        init();
    }
})();