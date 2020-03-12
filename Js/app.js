//Take Thumbnail images in Array:
let catsImages = [
    '/GrumpyCat.jpg',
    '/DamCat.jpg',
    '/RealCat.jpg',
    '/StopCat.jpg',
    'IsItMeCat.jpg'
                ];

//Take our thumbnail list into Array:
let thumbnailList = document.getElementsByClassName('img-thumbnail');
    
for(let index = 0; index < thumbnailList.length; index++)
{
    thumbnailList[index].src = catsImages[index];
};

//CLICKING List options:
let soraka = document.querySelector('#soraka');
let swain = document.querySelector('#swain');
let amumu = document.querySelector('#amumu');
let elise = document.querySelector('#elise');
let lulu = document.querySelector('#lulu');

soraka.addEventListener('click', function(){
    grumpyKitty.src = soraka.src;
    grumpyKittyCounter.innerHTML="";
    grumpyCount = 0;
},false);
swain.addEventListener('click', function(){
    grumpyKitty.src = swain.src;
    grumpyKittyCounter.innerHTML="";
    grumpyCount = 0;
},false);
amumu.addEventListener('click', function(){
    grumpyKitty.src = amumu.src;
    grumpyKittyCounter.innerHTML="";
    grumpyCount = 0;
},false);
elise.addEventListener('click', function(){
    grumpyKitty.src = elise.src;
    grumpyKittyCounter.innerHTML="";
    grumpyCount = 0;
},false);
lulu.addEventListener('click', function(){
    grumpyKitty.src = lulu.src;
    grumpyKittyCounter.innerHTML="";
    grumpyCount = 0;
},false);




//Grumpy Kitty DOM
let grumpyKitty = document.querySelector('#grumpy-kitty-image');
let grumpyCount = 0;
let grumpyKittyCounter = document.querySelector('#grumpy-kitty-count');

//Sad Kitty DOM:
let sadKitty = document.querySelector('#sad-cat');
let sadCount = 0;
let sadKittycounter = document.querySelector('#sad-kitty-count');

//GRUPMY click counter:
grumpyKitty.addEventListener('click',function(){
   grumpyCount+=1;
   grumpyKittyCounter.innerHTML = `Stop,You Clicked Me ${grumpyCount} Time(s)`;
},false)


//SAD Click Counter:
sadKitty.addEventListener('click', function(){
    sadCount+=1;
    sadKittycounter.innerHTML =`You Dare Click ME ${sadCount} Time(s)!`;
},false);