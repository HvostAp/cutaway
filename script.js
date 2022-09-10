const st1 = document.querySelector('.start-t1');
const st2 = document.querySelector('.start-t2');
const st3 = document.querySelector('.start-t3');
const st4 = document.querySelector('.start-t4');
const st5 = document.querySelector('.start-t5');
const mainSlider = document.querySelector('.start-slider');

st1.addEventListener('click', () => {
    setTimeout(() => st1.classList.add('statecolor1'), 100);
    setTimeout(() => st2.classList.add('statecolor2'), 200);
    setTimeout(() => st3.classList.add('statecolor3'), 300);
    setTimeout(() => st4.classList.add('statecolor4'), 400);
    setTimeout(() => st5.classList.add('statecolor5'), 500);
    setTimeout(() => mainSlider.classList.add('start-slidernone'), 1000);
})
st2.addEventListener('click', () => {
    setTimeout(() => st1.classList.add('statecolor1'), 100);
    setTimeout(() => st2.classList.add('statecolor2'), 200);
    setTimeout(() => st3.classList.add('statecolor3'), 300);
    setTimeout(() => st4.classList.add('statecolor4'), 400);
    setTimeout(() => st5.classList.add('statecolor5'), 500);
    setTimeout(() => mainSlider.classList.add('start-slidernone'), 1000);
})

st3.addEventListener('click', () => {
    setTimeout(() => st1.classList.add('statecolor1'), 100);
    setTimeout(() => st2.classList.add('statecolor2'), 200);
    setTimeout(() => st3.classList.add('statecolor3'), 300);
    setTimeout(() => st4.classList.add('statecolor4'), 400);
    setTimeout(() => st5.classList.add('statecolor5'), 500);
    setTimeout(() => mainSlider.classList.add('start-slidernone'), 1000);
})
st4.addEventListener('click', () => {
    setTimeout(() => st1.classList.add('statecolor1'), 100);
    setTimeout(() => st2.classList.add('statecolor2'), 200);
    setTimeout(() => st3.classList.add('statecolor3'), 300);
    setTimeout(() => st4.classList.add('statecolor4'), 400);
    setTimeout(() => st5.classList.add('statecolor5'), 500);
    setTimeout(() => mainSlider.classList.add('start-slidernone'), 1000);
})
st5.addEventListener('click', () => {
    setTimeout(() => st1.classList.add('statecolor1'), 100);
    setTimeout(() => st2.classList.add('statecolor2'), 200);
    setTimeout(() => st3.classList.add('statecolor3'), 300);
    setTimeout(() => st4.classList.add('statecolor4'), 400);
    setTimeout(() => st5.classList.add('statecolor5'), 500);
    setTimeout(() => mainSlider.classList.add('start-slidernone'), 1000);
})

const offset = 100;
const scrollUp = document.querySelector('.scroll-up');
const scrollSvgPath = document.querySelector('.scroll-up__svg-path');
const pathLength = scrollSvgPath.getTotalLength();

scrollSvgPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
scrollSvgPath.style.transition = 'stroke-dashoffset 20ms';

const getTop = () => window.pageYOffset || document.documentElement.scrollTop;

const updateDashoffset = () => {
    const height = document.documentElement.scrollHeight - window.innerHeight;
    const dashoffset = pathLength - (getTop() * pathLength / height)
    scrollSvgPath.style.strokeDashoffset = dashoffset;
};

window.addEventListener('scroll', () => {
    updateDashoffset();
    if (getTop() > offset) {
        scrollUp.classList.add('scroll-up--active')
    } else {
        scrollUp.classList.remove('scroll-up--active')
    }
});

scrollUp.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

let counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 4){
        counter = 1;
    }
}, 5000);