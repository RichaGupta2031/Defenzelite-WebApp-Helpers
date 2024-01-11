function bookLowerSeats() {
    var selectedSeats = document.querySelectorAll('.seat.selected');
    var totalPrice = 0;

    if (selectedSeats.length > 0) {

        selectedSeats.forEach(function (seat) {

            var price = parseInt(seat.getAttribute('title').split('-')[1].replace('rs', ''));
            totalPrice += price;
        });


        document.getElementById('totalLowerTicketPrice').textContent = 'Total Price: ' + totalPrice + ' rs';


    } else {
        alert('Please select at least one seat.');
    }
}

function bookUpperSeats() {
    var selectedSeats = document.querySelectorAll('.selected.upperSelected');
    var totalPrice = 0;

    if (selectedSeats.length > 0) {

        selectedSeats.forEach(function (seat) {

            var price = parseInt(seat.getAttribute('title').split('-')[1].replace('rs', ''));
            totalPrice += price;
        });


        document.getElementById('totalUpperTicketPrice').textContent = 'Total Price: ' + totalPrice + ' rs';


    } else {
        alert('Please select at least one seat.');
    }
}

function clearSelection() {
    var selectedSeats = document.querySelectorAll('.seat.selected');
    selectedSeats.forEach(function (seat) {
        seat.classList.remove('selected');
    });
    document.getElementById('totalLowerTicketPrice').textContent = '';

    
}

function clearUpperSelection() {
    var selectedSeats = document.querySelectorAll('.seat.upperSelected.selected');
    selectedSeats.forEach(function (seat) {
        seat.classList.remove('selected');
    });
    document.getElementById('totalUpperTicketPrice').textContent = '';
}


document.addEventListener('DOMContentLoaded', function () {

    var seats = document.querySelectorAll('.seat');


    seats.forEach(function (seat) {
        seat.addEventListener('click', function () {

            if (!seat.classList.contains('occupied')) {

                seat.classList.toggle('selected');
            }
        });
    });
});        