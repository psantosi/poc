(function() {

    PocApp.controller('ModalConfirmacaoController', ModalConfirmacaoController);

    ModalConfirmacaoController.$inject = ['$modalInstance', 'enderecos'];
    function ModalConfirmacaoController($modalInstance, enderecos) {
        var vm = this;

        vm.fecharModal = function() {
            $modalInstance.dismiss('cancel');
        };
    
        function init() {
            vm.enderecos = enderecos;
        }

        init();
    }
})();