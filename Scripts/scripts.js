function scrollToSection() {
  document.getElementById('ticket-section').scrollIntoView({ behavior: 'smooth' });
}

const allBtn = document.querySelectorAll('#add-btn')
let count = 1;
let select = 0;
let clickCount = 0;
let ticketPrice = 550;
for(const btn of allBtn){
// console.log(btn)
    btn.addEventListener('click',function(e){
        if(clickCount < 4){
            // background color added

            btn.style.background = '#1DD100';
            btn.style.color = '#FFF';

            // seat left
            const allSeat = document.getElementById('seat-count').innerText;
            let allSeatText = parseInt(allSeat);
            allSeatText -=count
            setInnerText('seat-count', allSeatText);
            clickCount++;

            // seat added
            select = select + 1;
            setInnerText('seat-select',select);

            // show ticket list
            const seatName = e.target.innerText;
            const selectedContainer = document.querySelector('.slected-ticket-container')
            const tr = document.createElement('tr');
            const td = document.createElement('td');
            td.innerText=seatName;
            const td2 = document.createElement('td');
            td2.innerText = 'Economoy'
            const td3 = document.createElement('td');
            td3.innerText = '550';
            tr.appendChild(td);
            tr.appendChild(td2);
            tr.appendChild(td3);
            selectedContainer.appendChild(tr);

            // total-cost

            const totalCost = document.getElementById('total-cost').innerText;
            const totalCostConvert = parseInt(totalCost);
            const totalPrice = document.getElementById('total-cost').innerText = totalCostConvert + ticketPrice;

            // grand cost
            setInnerText('grand-cost',totalPrice)

            // button disable
            const button = e.target;
            button.disabled = true;
            
        }

    })

}

const couponCode = document.getElementById('coupon-btn').addEventListener('click',function(){
    // console.log('clicked')
    
    const couponInput = document.getElementById('coupon-input').value;
    if(couponInput == 'NEW15' || couponInput == 'Couple 20'){
        if(couponInput == 'NEW15'){
            const grandCost = document.getElementById('grand-cost').innerText;
            const discountOnNew = parseInt(grandCost) * (20/100);
            const discountTotal = parseInt(grandCost) - discountOnNew;
            setInnerText('grand-cost',discountTotal);
        }
        else if(couponInput == 'Couple 20'){
            const grandCost = document.getElementById('grand-cost').innerText;
            const discountOnNew = parseInt(grandCost) * (15/100);
            const discountTotal = parseInt(grandCost) - discountOnNew;
            setInnerText('grand-cost',discountTotal);
        }
        const couponContainer = document.getElementById('input-container');
        couponContainer.classList.add('hidden');

    }
    else{
        alert('Wrong Coupon Code')
    }
})
// set innner text
function setInnerText (id,value){
    document.getElementById(id).innerText = value;    
}

// refresh page
function refreshPage() {
    location.reload();
} 

// input field button enable


function checkInputs() {

    const inputField1 = document.getElementById('passenger-info-input-name');
    const inputField2 = document.getElementById('passenger-info-input-phone');
    const inputField3 = document.getElementById('passenger-info-input-email');
    const submitButton = document.getElementById('passenger-info-btn');
    

    if (inputField1.value !== '' && inputField2.value !== '' && inputField3.value !== '') {
      submitButton.disabled = false;
    } else {
      submitButton.disabled = true;
    }
}

