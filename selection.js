function swapBars(el1, el2) {
  console.log('In swap()');
    
  let tempHeight = el1.style.height;
  let tempContent = el1.querySelector('.bar-length').textContent;
  
  el1.style.height = el2.style.height;
  el1.querySelector('.bar-length').textContent = el2.querySelector('.bar-length').textContent;
  
  el2.style.height = tempHeight;
  el2.querySelector('.bar-length').textContent = tempContent;
}


  
async function selection() {
  console.log("In selectionSort()");

  const ele = document.querySelectorAll("#bar-graph .bar");

  for (let i = 0; i < ele.length; i++) {
    console.log("In ith loop");
    let min_index = i;

    ele[i].style.background = "blue";
    for (let j = i + 1; j < ele.length; j++) {
      console.log("In jth loop");

      ele[j].style.background = "red";

      await waitforme(delay);

      if (parseInt(ele[j].style.height, 10) < parseInt(ele[min_index].style.height, 10)) {
        console.log("In if condition height comparison");
        if (min_index !== i) {
          ele[min_index].style.background = "turquoise";
        }
        min_index = j;
      } else {
        ele[j].style.background = "turquoise";
      }
    }
    await waitforme(delay);
    await swapBars(ele[min_index], ele[i]);

    ele[min_index].style.background = "turquoise";

    ele[i].style.background = "green";
  }
}
  
  function waitforme(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  } 
  
  function disablebutton2() {
    document.querySelector(".insertionsort").disabled = true;
    document.querySelector(".bubblesort").disabled = true;
    document.querySelector(".mergesort").disabled = true;
    document.querySelector(".quicksort").disabled = true;
  }
  
  function enablebutton2() {
    document.querySelector(".insertionsort").disabled = false;
    document.querySelector(".bubblesort").disabled = false;
    document.querySelector(".mergesort").disabled = false;
    document.querySelector(".quicksort").disabled = false;
  }

  async function callselection() {

    disablebutton2(); 
    await selection();
    enablebutton2(); 

  }