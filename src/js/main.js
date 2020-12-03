/*
console.log('bonjour tout le monde');
document.documentElement.classList.add('js-enabled');
let start=1;
function generateElements(start){
for(let i=start;i<end;i++){
    const end=start+10;
    if(i%3===0 && i%5===0){
    document.querySelector('#fizzbuzz').insertAdjacentHTML('beforeend',`<li class="fizzbuzz">FI<i>zz</i>BU<i>zz</i></li>`);
    }
    else if (i%3===0){
        document.querySelector('#fizzbuzz').insertAdjacentHTML('beforeend',`<li class="fizz">FI<i>zz</i></li>`);
    }
    else if (i%5===0){
        document.querySelector('#fizzbuzz').insertAdjacentHTML('beforeend',`<li class="buzz">BU<i>zz</i></li>`);
    }
    else{
        document.querySelector('#fizzbuzz').insertAdjacentHTML('beforeend',`${i}`);

    }

}

return end;
}

start=generateElements(start);

    document.addEventListener('scroll',function (event){

    if(window.innerHeight + window.scrollHeight >= document.body.scrollHeight){
        //console.log(window.scrollY,window.innerHeight,document.body.scrollHeight);
        start=generateElements(start);
    }
    });
*/

    const Fizzbuzz={
        init(){
            document.documentElement.classList.add('js-enabled');
            this.start=1;
            this.start=this.generateElements();
            document.addEventListener('scroll',(event) => {
                if(window.innerHeight + window.scrollHeight >= document.body.scrollHeight){
                    //console.log(window.scrollY,window.innerHeight,document.body.scrollHeight);
                    this.start=this.generateElements();
                }
            });
        },
        generateElements(){
            const end=this.start+10;
    for(let i=start;i<end;i++){

        if(i%3===0 && i%5===0){
            document.querySelector('#fizzbuzz').insertAdjacentHTML('beforeend',`<li class="fizzbuzz">FI<i>zz</i>BU<i>zz</i></li>`);
        }
        else if (i%3===0){
            document.querySelector('#fizzbuzz').insertAdjacentHTML('beforeend',`<li class="fizz">FI<i>zz</i></li>`);
        }
        else if (i%5===0){
            document.querySelector('#fizzbuzz').insertAdjacentHTML('beforeend',`<li class="buzz">BU<i>zz</i></li>`);
        }
        else{
            document.querySelector('#fizzbuzz').insertAdjacentHTML('beforeend',`${i}`);

        }

    }
            return end;

}

    }
    Fizzbuzz.init();


