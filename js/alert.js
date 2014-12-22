$(document).ready(function(){
    $('#dismissal').click(function(){
        $.cookie('dismissed','true');
    })
    if($.cookie('dismissed') == 'true'){
        $('.alert').hide();
        alert('cookie \'dismissed\' is set, alert hidden.');
    }
})