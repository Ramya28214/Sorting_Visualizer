async function merge(ele, low, mid, high) {
  console.log('In merge()');
  console.log(`low=${low}, mid=${mid}, high=${high}`);
  const n1 = mid - low + 1;
  const n2 = high - mid;
  console.log(`n1=${n1}, n2=${n2}`);
  let left = new Array(n1);
  let right = new Array(n2);

  for (let i = 0; i < n1; i++) {
    await waitforme(delay);
    console.log('In merge left loop');
    ele[low + i].style.background = 'orange';
    left[i] = ele[low + i].style.height;
    ele[low + i].querySelector('.bar-length').textContent = parseInt(left[i]) / 6;
  }
  for (let i = 0; i < n2; i++) {
    await waitforme(delay);
    console.log('In merge right loop');
    ele[mid + 1 + i].style.background = 'yellow';
    right[i] = ele[mid + 1 + i].style.height;
    ele[mid + 1 + i].querySelector('.bar-length').textContent = parseInt(right[i]) / 6;
  }
  await waitforme(delay);
  let i = 0, j = 0, k = low;
  while (i < n1 && j < n2) {
    await waitforme(delay);
    console.log('In merge while loop');

    if (parseInt(left[i]) <= parseInt(right[j])) {
      console.log('In merge while loop if');

      if ((n1 + n2) === ele.length) {
        ele[k].style.background = 'green';
      } else {
        ele[k].style.background = 'lightgreen';
      }

      ele[k].style.height = left[i];
      ele[k].querySelector('.bar-length').textContent = parseInt(left[i]) / 6;
      i++;
      k++;
    } else {
      console.log('In merge while loop else');

      if ((n1 + n2) === ele.length) {
        ele[k].style.background = 'green';
      } else {
        ele[k].style.background = 'lightgreen';
      }
      ele[k].style.height = right[j];
      ele[k].querySelector('.bar-length').textContent = parseInt(right[j]) / 6;
      j++;
      k++;
    }
  }
  while (i < n1) {
    await waitforme(delay);
    console.log("In while if n1 is left");

    if ((n1 + n2) === ele.length) {
      ele[k].style.background = 'green';
    } else {
      ele[k].style.background = 'lightgreen';
    }
    ele[k].style.height = left[i];
    ele[k].querySelector('.bar-length').textContent = parseInt(left[i]) / 6;
    i++;
    k++;
  }
  while (j < n2) {
    await waitforme(delay);
    console.log("In while if n2 is left");

    if ((n1 + n2) === ele.length) {
      ele[k].style.background = 'green';
    } else {
      ele[k].style.background = 'lightgreen';
    }
    ele[k].style.height = right[j];
    ele[k].querySelector('.bar-length').textContent = parseInt(right[j]) / 6;
    j++;
    k++;
  }
}


 
async function mergeSort(ele, l, r) {
    console.log('In mergeSort()');
    if (l >= r) {

      return;
    }
    const m = l + Math.floor((r - l) / 2);
    
    await mergeSort(ele, l, m);
    await mergeSort(ele, m + 1, r);
    await merge(ele, l, m, r);
    
  }
  
let ele; 

async function callmergesort() {
  ele = document.querySelectorAll('.bar');
  let l = 0;
  let r = parseInt(ele.length) - 1;
  mergeSort(ele, l, r);
  
  
}