
const counter = {
    value: 0,
    increment() {
        console.log("this -> this", this);
        this.value += 1;
    },
    decrement() {
        console.log("this -> this", this);
        this.value -= 1;
    },
};

const decrementBtn = document.querySelector('#counter button[data-action="decrement"]');
const incrementBtn = document.querySelector('#counter button[data-action="increment"]');
const counterValue = document.querySelector("#value");

    decrementBtn.addEventListener("click", () => {
        counter.decrement();
       value.textContent = counter.value;
    });
    incrementBtn.addEventListener("click", () => {
        counter.increment();
       value.textContent = counter.value;
    }); 



 
 