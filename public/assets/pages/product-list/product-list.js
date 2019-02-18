  'use strict';
 $(document).ready(function() {
        $('#e-product-list').DataTable({
            "paging":   true,
            "ordering": false,
            "bLengthChange": false,
            "info":     false,
            "searching": false
        });
        $(".save_btn").on("click", function() {

				$('.pname').val('');
				$('.jFiler-items').css('display','none');
				$('.stock').val('');
				$('.pamount').val('');
				$("#modal-13").modal('hide');

			});
        $(".close_btn").on("click", function() {
				$('.pname').val('');
				$('.jFiler-items').css('display','none');
				$('.stock').val('');
				$('.pamount').val('');
			});
    } );


  // document.getElementById('btn-delete').onclick = function () {
  //     if (confirm('Are you sure?')) {
  //         $.ajax({
  //             url: 'http://localhost:5000/admin/product/' + 'id',
  //             type: 'DELETE',
  //             data: {'_id': 'id'},
  //             success: function (response) {
  //                 alert('Success.');
  //             },
  //             error: function (response, message) {
  //                 alert('Error. ' + message);
  //             }
  //         });
  //     }
  // };