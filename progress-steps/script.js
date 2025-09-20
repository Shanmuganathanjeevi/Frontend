const progress = document.getElementById('progress')
const next = document.getElementById('next')
const prev = document.getElementById('prev')
const circles = document.querySelectorAll('.circle')

let currentActiveIndex = 1;

next.addEventListener('click', ()=>{
    currentActiveIndex++;
    if(currentActiveIndex > circles.length){
        currentActiveIndex = circles.length;
    }
    update();
})

prev.addEventListener('click', ()=>{
    currentActiveIndex--;
    if(currentActiveIndex < 1){
        currentActiveIndex = 1;
    }
    update();
})
function update() {
    circles.forEach((circle, idx) => {
        if(idx < currentActiveIndex) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    })

    progress.style.width = ((currentActiveIndex-1)/(circles.length-1)*100) + '%'
    if(currentActiveIndex == 1){
        prev.disabled = true;
        next.disabled = false;
    } else if(currentActiveIndex == circles.length){
        prev.disabled = false;
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
}