

for(let i=0;i<6;i++){

    const article=document.querySelector('article.a_main');
    const section=document.createElement('section');
    const title=document.createElement('div');
    const h1=document.createElement('h1');
    const preferiti=document.createElement('img');
    const img=document.createElement('img');
    const box_scritta=document.createElement('div');
    const button1=document.createElement('button');
    const scritta=document.createElement('p');
    const button2=document.createElement('button');

    article.appendChild(section);
    section.appendChild(title);
    title.appendChild(h1);
    title.appendChild(preferiti);
    section.appendChild(img);
    section.appendChild(box_scritta)
    box_scritta.appendChild(button1);
    box_scritta.appendChild(scritta);
    box_scritta.appendChild(button2);

    title.classList.add('box_titolo');
    preferiti.classList.add('preferiti');
    img.classList.add('img_centrale');
    box_scritta.classList.add('box_scritta');
    button1.classList.add('first');
    scritta.classList.add('scritta','hidden');
    button2.classList.add('second','hidden');
}

const preferiti= document.querySelectorAll('article.a_main section div img.preferiti')
const centrali=document.querySelectorAll('article.a_main section img.img_centrale')
const titoli=document.querySelectorAll('article.a_main section div h1')
const bottoni1=document.querySelectorAll('article.a_main section .box_scritta button.first')
const paragrafi=document.querySelectorAll('article.a_main section .box_scritta p')
const bottoni2=document.querySelectorAll('article.a_main section .box_scritta button.second')


for(let i=0;i<6;i++){
  preferiti[i].src='stella.png';
  centrali[i].src=images[i];
  titoli[i].textContent=titles[i];
  bottoni1[i].textContent='Mostra di più';
  paragrafi[i].textContent=descriptions[i];
  bottoni2[i].textContent='Mostra di meno';
} 

function rimuoviBott1(event){
    for(let i=0;i<6;i++){
        if((bottoni1[i]===event.target)){
    bottoni1[i].classList.add('hidden');
    paragrafi[i].classList.remove('hidden');
    bottoni2[i].classList.remove('hidden');
        }
    }
}

function rimuoviBott2(event){
   for(let i=0;i<6;i++){
    if((bottoni2[i]===event.target)){
       bottoni1[i].classList.remove('hidden');
      paragrafi[i].classList.add('hidden');
        bottoni2[i].classList.add('hidden');
    }
}
}

let cont=0;

function aggiungiPreferito(event){
    cont++;
    for(let i=0;i<6;i++){
      if(preferiti[i]===event.target){
          preferiti[i].src='stella_piena.png';
          preferiti[i].classList.remove('preferiti');
          preferiti[i].classList.add('selezionati');
          preferiti[i].removeEventListener('click', aggiungiPreferito);

          const section_preferito=document.querySelector('article.a_preferiti section');
          const box_preferito=document.createElement('div');
          const box_titolo=document.createElement('div');
          const titolo_preferito=document.createElement('h1');
          const img_rimuovi_preferito=document.createElement('img');
          const img_preferito=document.createElement('img');

          section_preferito.appendChild(box_preferito);
          box_preferito.appendChild(box_titolo);
          box_titolo.appendChild(titolo_preferito);
          box_titolo.appendChild(img_rimuovi_preferito);
          box_preferito.appendChild(img_preferito);
          
          box_preferito.classList.add('box_section_preferito')
          box_titolo.classList.add('box_titolo');
          titolo_preferito.classList.add('titolo_preferito');
          img_rimuovi_preferito.classList.add('img_preferito_selezionato');
          img_preferito.classList.add('img_centrale_preferito');

          titolo_preferito.textContent=titles[i];
          img_rimuovi_preferito.src='stella_piena_meno.png'
          img_preferito.src=images[i];

          const article_preferiti=document.querySelector('.a_preferiti');
          article_preferiti.classList.remove('hidden');

          img_rimuovi_preferito.addEventListener('click',rimuoviPreferito);

          
      }
    }
}



function rimuoviPreferito(event){
    cont--;
    if(cont===0){
        const articolo_preferito=document.querySelector('article.a_preferiti');
        articolo_preferito.classList.add('hidden');
    }
    const rimuovi_preferito=event.target;
    rimuovi_preferito.parentNode.parentNode.classList.add('hidden');
    const titolo=rimuovi_preferito.parentNode.querySelector('h1');
    for(let i=0;i<6;i++){
    if(titolo.textContent===titoli[i].textContent){
    const img_section=titoli[i].parentNode.querySelector('img');
    img_section.src='stella.png';
    img_section.addEventListener('click',aggiungiPreferito);
    preferiti[i].classList.remove('selezionati');
    preferiti[i].classList.add('preferiti');
     }
}
}
    

for(let bottone of bottoni1){
    bottone.addEventListener('click',rimuoviBott1);
}

for(let bottone of bottoni2){
    bottone.addEventListener('click',rimuoviBott2);
}

for(let preferito of preferiti){
    preferito.addEventListener('click',aggiungiPreferito);
}

function funzioneRicerca(){
const testo=barra_di_ricerca.value;
if(testo!==''){
for(let titolo of titoli){
if(titolo.textContent.toLowerCase().indexOf(testo)===-1){
    titolo.parentNode.parentNode.classList.add('hidden');
}
else titolo.parentNode.parentNode.classList.remove('hidden');
}
}
else for(let titolo of titoli){
    titolo.parentNode.parentNode.classList.remove('hidden');
}
}

const barra_di_ricerca=document.querySelector('article.a_ricerca input');
barra_di_ricerca.addEventListener('keyup', funzioneRicerca);

function menuFunction(event){
const sel=event.currentTarget;
sel.classList.add('hidden');
}

const menu=document.querySelector('#menu');
menu.addEventListener('click',menuFunction);






