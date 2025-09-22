const bg = document.querySelector('.bg');
const loader = document.querySelector('.loading-text')

let load = 0;

let int = setInterval(loading, 30)

function loading() {
    load ++;
    
    if(load > 99)
        clearInterval(int);

    loader.innerHTML = `${load}%`
    loader.style.opacity = `${scale(load,0,100,1,0)}`
    bg.style.filter = `blur(${scale(load,0,100,30,0)}px)`


}


function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}