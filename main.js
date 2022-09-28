const aliceTumbling = [
    { transform: 'rotate(0) scale(1)' },
    { transform: 'rotate(360deg) scale(0)' }
  ];
  
const aliceTiming = {
duration: 2000,
iterations: 1,
fill: 'forwards'
}

const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");

anim1 = alice1.animate(aliceTumbling, aliceTiming);
console.log(anim1)
console.dir(anim1)

anim1.finished.then(() => {
    anim2 = alice2.animate(aliceTumbling, aliceTiming);
    anim2.finished.then(() => {
        alice3.animate(aliceTumbling, aliceTiming);
    })
})