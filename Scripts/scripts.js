function scrollToSection() {
  document.getElementById('ticket-section').scrollIntoView({ behavior: 'smooth' });
}

const allBtn = document.querySelectorAll('.btn')
let count = 1;
let select = 0;
let clickCount = 0;
for(const btn of allBtn){
// console.log(btn)
    btn.addEventListener('click',function(e){
        if(clickCount < 4){
            console.log(e.target.innerText);
            const allSeat = document.getElementById('seat-count').innerText;
            let allSeatText = parseInt(allSeat);
            allSeatText -=count
            setInnerText('seat-count', allSeatText);
            clickCount++;
            select = select + 1;
            setInnerText('seat-select',select);
            const seatName = e.target.innerText;
            const selectedContainer = document.getElementById('slected-ticket-container')
            const tr = document.createElement('tr');
            const td = document.createElement('td').innerText=seatName;
            const td2 = document.createElement('td').innerText = 'Economoy';
            const td3 = document.createElement('td').innerText = '500';
            tr.appendChild(td);
            tr.appendChild(td2);
            tr.appendChild(td3);
            selectedContainer.appendChild(tr)
        }

    })

}


function setInnerText (id,value){
    document.getElementById(id).innerText = value;    
}

function setBackgroundColorById (elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-[#1DD100]');
    element.classList.add('text-white');
}