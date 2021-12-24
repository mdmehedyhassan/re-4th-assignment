function ticketHandler(isIncrease, id) {
    const ticketInput = document.getElementById(id +'-ticket');
    let ticketNumber = parseInt(ticketInput.value);
    let newCount = 0;
    if (isIncrease) {
        newCount = ticketNumber + 1;
    }
    if (!isIncrease && ticketNumber > 0) {
        newCount = ticketNumber - 1;
    }
    ticketInput.value = newCount;
    ticketPrice()
}


function ticketPrice() {
    const firstClassTicket = parseInt(document.getElementById('first-class-ticket').value) * 150;
    const economyTicket = parseInt(document.getElementById('economy-ticket').value) * 100;
    const subtotalPrice = firstClassTicket + economyTicket;
    document.getElementById('subtotal').innerText = subtotalPrice;
    const vat = subtotalPrice * 0.1;
    document.getElementById('vat').innerText = vat;
    const total = subtotalPrice + vat;
    document.getElementById('total').innerText = total;
}

function bookNow() {
    const flyingFrom = document.getElementById('flying-from').value;
    const flyingTo = document.getElementById('flying-to').value;
    const departure = document.getElementById('departure').value;
    const returns = document.getElementById('return').value;
    const firstClassTicket = document.getElementById('first-class-ticket').value;
    const economyTicket = document.getElementById('economy-ticket').value;
    if(flyingFrom == '' || flyingTo == '' || departure == '' || returns == '' || firstClassTicket == 0 && economyTicket == 0){
        alert("Your ticket has not been booked properly. Please rewrite the form.")
    }
    else{
        document.getElementById('confirmation').style.display = 'block';
        document.getElementById('ticket-booking').style.display = 'none';

        document.getElementById('c-flying-from').innerText = flyingFrom;
        document.getElementById('c-flying-to').innerText = flyingTo;
        document.getElementById('c-departure').innerText = departure;
        document.getElementById('c-return').innerText = returns;
        document.getElementById('c-first-class-ticket').innerText = firstClassTicket;
        document.getElementById('c-economy-ticket').innerText = economyTicket;
        document.getElementById('c-subtotal').innerText = document.getElementById('subtotal').innerText;
        document.getElementById('c-vat').innerText = document.getElementById('vat').innerText;
        document.getElementById('c-total').innerText = document.getElementById('total').innerText;
    }
}