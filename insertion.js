async function insertion() {
  console.log('In insertion()');
  const ele = document.querySelectorAll("#bar-graph .bar");

  ele[0].style.background = 'green';
  for (let i = 1; i < ele.length; i++) {
    console.log('In ith loop');
    let j = i - 1;
    let key = parseInt(ele[i].style.height);

    ele[i].style.background = 'blue';

    await waitforme(delay);

    while (j >= 0 && parseInt(ele[j].style.height) > key) {
      console.log('In while loop');

      ele[j].style.background = 'blue';
      ele[j + 1].style.height = ele[j].style.height;

      ele[j + 1].querySelector('.bar-length').textContent = parseInt(ele[j + 1].style.height) / 6;

      j--;

      for (let k = i; k >= 0; k--) {
        ele[k].style.background = 'green';
      }
    }

    ele[j + 1].style.height = `${key}px`;
    ele[j + 1].querySelector('.bar-length').textContent = key / 6;

    ele[i].style.background = 'green';
  }
}



/*async function insertion(){
  console.log('In insertion()');
  const ele = document.querySelectorAll("#bar-graph .bar");
  
  ele[0].style.background = 'green';
  for(let i = 1; i < ele.length; i++){
      console.log('In ith loop');
      let j = i - 1;
      let key = ele[i].style.height;
      
      ele[i].style.background = 'blue';

      await waitforme(delay);

      while(j >= 0 && (parseInt(ele[j].style.height) > parseInt(key))){
          console.log('In while loop');

          ele[j].style.background = 'blue';
          ele[j + 1].style.height = ele[j].style.height;
          j--;

          await waitforme(delay);

          
          for(let k = i; k >= 0; k--){
              ele[k].style.background = 'green';
          }
      }
      ele[j + 1].style.height = key;
     
      ele[i].style.background = 'green';
  }
}*/


async function callinsertion() {

  disablebutton1(); 
  insertion();
  enablebutton1(); 

}

function disablebutton1() {
  document.querySelector(".selectionsort").disabled = true;
  document.querySelector(".bubblesort").disabled = true;
  document.querySelector(".mergesort").disabled = true;
  document.querySelector(".quicksort").disabled = true;
}

function enablebutton1() {
  document.querySelector(".selectionsort").disabled = false;
  document.querySelector(".bubblesort").disabled = false;
  document.querySelector(".mergesort").disabled = false;
  document.querySelector(".quicksort").disabled = false;
}


function waitforme(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}