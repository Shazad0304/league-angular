var count = 0;

$(document).ready(function ($) {
    $(".click-row").click(function () {
        window.location = $(this).data("href");
    });
});

var maintainNumbering = (function (tableId) {
    var select_playersTH = $('#select-players tbody tr').find('th');
    for (var i = 0; i < select_playersTH.length; i++) {
        select_playersTH[i].innerText = i + 1;
    }
    var my_teamTH = $('#my-team tbody tr').find('th');
    for (var i = 0; i < my_teamTH.length; i++) {
        my_teamTH[i].innerText = i + 1;
    }



});

$('#select-players tbody').on('click', 'tr', function (e) {
    if (count < 11) {
        $(this).find('i:first').removeClass('fa-plus-square');
        $(this).find('i:first').addClass('fa-minus-square');
        
        addPlayerinform(this);

        var row = $(this).closest('tr').html();
        $('#my-team tbody').append('<tr>' + row + '</tr>');
        $(this).closest('tr').remove();
        count++;
        
        maintainNumbering('#select-players');
    }
    else {
        alert('Your team is full.');
    }
});

$('#my-team tbody').on('click', 'tr', function (e) {
    $(this).find('i:first').removeClass('fa-minus-square');
    $(this).find('i:first').addClass('fa-plus-square');
    var row = $(this).closest('tr').html();
    var a = $(this).find('th:first').attr('id');
    checkPlayer(a);
    $('#select-players tbody').append('<tr>' + row + '</tr>');
    $(this).closest('tr').remove();
    maintainNumbering('#my-team');
    count--;
});

function checkPlayer(id) {
    var structure = "p";
    var array = [];
    for (var i = 0; i <= 10; i++) {
        var current = structure + i;
        var val = document.querySelector('#' + current).value;
        if (val != id && val != "" && val != undefined) {
            //document.querySelector('#' + current).value = "";
            array.push(val);
 
        }
    }
    console.log(array.length, " this is lenght");
    for (var i = 0; i <= array.length; i++) {
        var current = structure + i;
        document.querySelector('#' + current).value = array[i];
    }
    for (var i = array.length; i <= 10; i++) {
   
        document.querySelector('#' + current).value ="";
       
    }

}

function addPlayerinform(that){
    var a = $(that).find('th:first').attr('id');
    document.querySelector('#p'+count).value = a;
}