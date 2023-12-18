function swapBars(el1, el2) {
    console.log('In swap()');
    
    let tempHeight = el1.style.height;
    el1.style.height = el2.style.height;
    el2.style.height = tempHeight;
  
    let tempNum = el1.querySelector('.bar-length').textContent;
    el1.querySelector('.bar-length').textContent = el2.querySelector('.bar-length').textContent;
    el2.querySelector('.bar-length').textContent = tempNum;
  }
  
  async function bubbleSort() {
    console.log('In bubbleSort()');
    const ele = document.querySelectorAll("#bar-graph .bar");
  
    for (let i = 0; i < ele.length - 1; i++) {
      console.log('In outer loop');
      for (let j = 0; j < ele.length - i - 1; j++) {
        console.log('In inner loop');
  
        ele[j].style.background = 'blue';
        ele[j + 1].style.background = 'blue';
  
        await waitforme(delay);
  
        let value1 = parseInt(ele[j].style.height, 6);
        let value2 = parseInt(ele[j + 1].style.height, 6);
  
        if (value1 > value2) {
          await swapBars(ele[j], ele[j + 1]);
        }
  
        ele[j].style.background = 'turquoise';
        ele[j + 1].style.background = 'turquoise';
      }
  
      ele[ele.length - i - 1].style.background = 'green';
    }
  
    ele[0].style.background = 'green';
  }
  

function waitforme(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}


function disablebutton3() {

    document.querySelector(".insertionsort").disabled = true;
    document.querySelector(".selectionsort").disabled = true;
    document.querySelector(".mergesort").disabled = true;
    document.querySelector(".quicksort").disabled = true;

  }
  
  function enablebutton3() {

    document.querySelector(".insertionsort").disabled = false;
    document.querySelector(".selectionsort").disabled = false;
    document.querySelector(".mergesort").disabled = false;
    document.querySelector(".quicksort").disabled = false;

  }

  async function callbubble() {

    disablebutton3(); 
    await insertion();
    enablebutton3(); 

  }