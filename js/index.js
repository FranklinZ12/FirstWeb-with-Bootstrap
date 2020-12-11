<script >
        $(function () {
            $('[data-toggle="tooltip"]').tooltip()
            $('[data-toggle="popover"]').popover()
            $('.carousel').carousel({
                interval:2000
            });
            $('#contacto').on('show.bs.modal', function (e){
                console.log('el modal se esta mostrando');
                $('#contactoBnt').removeClass('btn-outline-success');
                $('#contactoBnt').addClass('btn-primary');
                $('#contactoBnt').prop('disabled', true);
            });
            $('#contacto').on('shown.bs.modal', function (e){
                console.log('el modal se  mostro');
            });
             $('#contacto').on('hide.bs.modal', function (e){
                console.log('el modal se esta cerrando');
            });
            $('#contacto').on('hidden.bs.modal', function (e){
                console.log('el modal se cerro');
                $('#contactoBnt').prop('disabled', false);
            });