function scrollToSection() {
  document.getElementById('ticket-section').scrollIntoView({ behavior: 'smooth' });
}

const allBtn = document.getElementsById('add-btn');
let count = 1;
let clickCount = 0;
for(const btn of allBtn){
// console.log(btn)
    btn.addEventListener('click',function(){
        
        if(clickCount < 4){
            const allSeat = document.getElementById('seat-count').innerText;
            let allSeatText = parseInt(allSeat);
            allSeatText -=count
            setInnerText('seat-count', allSeatText);
            clickCount++;
            setBackgroundColorById('add-btn')
        }

    })

}


function setInnerText (id,value){
    document.getElementById(id).innerText = value;    
}

function setBackgroundColorById (elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-[#1DD100]');
    element.classList.add('text-white')
}