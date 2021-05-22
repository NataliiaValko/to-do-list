// let currentId = 0;

// const getTask = text => `
//      <li data-id=${currentId++}>
//      <span>${text}</span>
//      <button type="button" id="done-${currentId++}" class="done" aria-label="Done">
//          &radic;
//      </button>
//      <button type="button" class="close" aria-label="Close">
//          &times;
//      </button>
//      </li>
//  `;

// const list = document.querySelector('ul');
// const input = document.querySelector('#add-task-input');

// document.getElementById('add-btn').addEventListener('click', () => {
//   list.insertAdjacentHTML('beforeend', getTask(input.value));
//   input.value = '';
//   const todos = document.querySelectorAll('li');
//   const currentTODO = todos[todos.length - 1];
//   currentTODO.querySelector('.close').addEventListener('click', e => {
//     currentTODO.remove();
//   });
//   const doneEvent = () => {
//     currentTODO.style.background = 'green';
//     currentTODO.querySelector('.done').removeEventListener('click', doneEvent);
//   };
//   currentTODO.querySelector('.done').addEventListener('click', doneEvent);
// });

//===============================================================

// const inputRef = document.querySelector('#add-task-input');
// const addBtnRef = document.querySelector('#add-btn');
// const taskList = document.querySelector('#task__list');

// let id = 0;

// const getMarkupTask = text => {
  
//   const validText = text.trim()
//   const markup = `<li data-id=${id}>
//      <input type="checkbox" class="done">
//      </input>
//      <span class="text">${validText}</span>     
//      <button type="button" class="delete" aria-label="delete">
//          &#10007;
//      </button>
//      </li>`;
//   id++;
//     return markup;
  
// }

// const addTask = () => {
//   if (inputRef.value.trim() !== '') {
//     taskList.insertAdjacentHTML('beforeend', getMarkupTask(inputRef.value))
//   } else { alert('Enter your task please...'); return };
 
//   inputRef.value = '';
//   const taskAll = taskList.querySelectorAll('li');  
//   const doneCheckBoxRef = document.querySelectorAll('.done');
//   const deleteBtnRef = document.querySelectorAll('.delete');
//   const textTaskRef = document.querySelectorAll('.text');
//   const currentIndex = deleteBtnRef.length - 1;
  
//   doneCheckBoxRef[currentIndex].addEventListener('change', () => textTaskRef[currentIndex].classList.toggle('text--done'))

//   const deleteTask = () => {taskAll[currentIndex].remove() }
//   deleteBtnRef[currentIndex].addEventListener('click', deleteTask);
// }

// addBtnRef.addEventListener('click', addTask);

//===========================================================================



// const inputRef = document.querySelector('#add-task-input');
// const addBtnRef = document.querySelector('#add-btn');
// const taskList = document.querySelector('#task__list');

// let id = 0;

// const getMarkupTask = text => {  
//   const validText = text.trim()
//   const markup = `
//   <li class= "task__item" data-id=${id}>
//     <input type="checkbox" class="done">
//     </input>
//     <div class="text-thumb">
//       <p class="text" data-id=${id}>${validText}</p>
//       <textarea class="text__edit" data-id=${id}></textarea>
//     </div>
//     <ul class="buttons__list">
//       <li>
//         <button type="button" class="buttons__item edit" data-title="edit" data-id=${id} aria-label="delete">
//         &#128393;
//         </button>
//       </li>
//       <li>
//         <button type="button" class="buttons__item copy" data-title="copy" data-id=${id} aria-label="delete">
//          &#10697;
//         </button>
//       </li>
//       <li>
//         <button type="button" class="buttons__item delete" data-title="delete" aria-label="delete">
//         &#10007;
//         </button>
//       </li>
//     </ul>
//   </li>`;
//   id++;
//   return markup;  
// }

// const addTask = () => {
//   if (inputRef.value.trim() !== '') {
//     taskList.insertAdjacentHTML('beforeend', getMarkupTask(inputRef.value))
//   } else { alert('Enter your task please...'); return };
 
//   inputRef.value = '';
//   const taskAllRef = taskList.querySelectorAll('.task__item');  
//   const doneCheckBoxRef = document.querySelectorAll('.done');
//   const editBtnRef = document.querySelectorAll('.edit');
//   const copyBtnRef = document.querySelectorAll('.copy');
//   const deleteBtnRef = document.querySelectorAll('.delete');
//   const textTaskRef = document.querySelectorAll('.text');
//   const textareaNewTextRef = document.querySelectorAll('.text__edit');
//   const currentIndex = taskAllRef.length - 1;  
//   doneCheckBoxRef[currentIndex].addEventListener('change', () => textTaskRef[currentIndex].classList.toggle('text--done'));

//   //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
//   //+++++++++++EDIT++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
//   const editTask = (e) => {
//     const currentIdItem = e.target.dataset.id;
//     textareaNewTextRef[currentIdItem].classList.add('text__edit--visible');
//     const textCurrentTask = textTaskRef[currentIdItem].textContent ;
//     textareaNewTextRef[currentIdItem].value = textCurrentTask;    
//     const changeTextTask = () => {
//       const newTextTask = textareaNewTextRef[currentIdItem].value;
//       textTaskRef[currentIdItem].textContent = newTextTask;
//       textareaNewTextRef[currentIdItem].classList.remove('text__edit--visible');
//     }
//     textareaNewTextRef[currentIdItem].addEventListener('change', changeTextTask)
//   };
//   editBtnRef[currentIndex].addEventListener('click', editTask);
  

//   //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
//   //+++++++++++COPY++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
//    const copyTask = (e) => {
//     const currentIdItem = e.target.dataset.id;
//     inputRef.value = textTaskRef[currentIdItem].textContent;
//   };
//   copyBtnRef[currentIndex].addEventListener('click', copyTask);


//   //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
//   //+++++++++++DELETE++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
//   const deleteTask = () => taskAllRef[currentIndex].remove();
//   deleteBtnRef[currentIndex].addEventListener('click', deleteTask); 
// }
// addBtnRef.addEventListener('click', addTask);




//=======================================================================================================================================================

const inputRef = document.querySelector('#add-task-input');
const addBtnRef = document.querySelector('#add-btn');
const taskList = document.querySelector('#task__list');

let id = 0;

const getMarkupTask = text => {  
  const validText = text.trim()
  const markup = `
  <li class= "task__item" data-id=${id}>
    <input type="checkbox" class="done">
    </input>
    <div class="text-thumb">
      <p class="text" data-id=${id}>${validText}</p>
      <textarea class="text__edit" data-id=${id}></textarea>
    </div>
    <ul class="buttons__list">
      <li>
        <button type="button" class="buttons__item edit" data-title="edit" data-id=${id} aria-label="delete">
        &#128393;
        </button>
      </li>
      <li>
        <button type="button" class="buttons__item copy" data-title="copy" data-id=${id} aria-label="delete">
         &#10697;
        </button>
      </li>
      <li>
        <button type="button" class="buttons__item delete" data-title="delete" aria-label="delete">
        &#10007;
        </button>
      </li>
    </ul>
  </li>`;
  id++;
  return markup;  
}

const addTask = () => {
  if (inputRef.value.trim() !== '') {
    taskList.insertAdjacentHTML('beforeend', getMarkupTask(inputRef.value))
  } else { alert('Enter your task please...'); return };
 
  inputRef.value = '';
  const taskAllRef = taskList.querySelectorAll('.task__item');  
  const doneCheckBoxRef = document.querySelectorAll('.done');
  const editBtnRef = document.querySelectorAll('.edit');
  const copyBtnRef = document.querySelectorAll('.copy');
  const deleteBtnRef = document.querySelectorAll('.delete');
  const textTaskRef = document.querySelectorAll('.text');
  const textareaNewTextRef = document.querySelectorAll('.text__edit');
  const currentIndex = taskAllRef.length - 1;  
  doneCheckBoxRef[currentIndex].addEventListener('change', () => textTaskRef[currentIndex].classList.toggle('text--done'));

  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
  //+++++++++++EDIT++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
  const editTask = (e) => {
    const currentIdItem = e.target.dataset.id;
    textareaNewTextRef[currentIdItem].classList.add('text__edit--visible');
    const textCurrentTask = textTaskRef[currentIdItem].textContent ;
    textareaNewTextRef[currentIdItem].value = textCurrentTask;
    
    
    const changeTextTask = () => {
      const newTextTask = textareaNewTextRef[currentIdItem].value;
      textTaskRef[currentIdItem].textContent = newTextTask;
      textareaNewTextRef[currentIdItem].classList.remove('text__edit--visible');
    }
    textareaNewTextRef[currentIdItem].addEventListener('change', changeTextTask)
  };
  editBtnRef[currentIndex].addEventListener('click', editTask);
  

  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
  //+++++++++++COPY++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
   const copyTask = (e) => {
    const currentIdItem = e.target.dataset.id;
    inputRef.value = textTaskRef[currentIdItem].textContent;
  };
  copyBtnRef[currentIndex].addEventListener('click', copyTask);


  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
  //+++++++++++DELETE++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
  const deleteTask = () => taskAllRef[currentIndex].remove();
  deleteBtnRef[currentIndex].addEventListener('click', deleteTask); 
}
addBtnRef.addEventListener('click', addTask);