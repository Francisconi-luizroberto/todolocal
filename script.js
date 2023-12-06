function add() {
    let li = document.createElement('li');
    let input_value = document.form_main.task.value;
    let input_text = document.createTextNode(input_value);
  
    li.appendChild(input_text);
    document.querySelector('ul').appendChild(li);
    document.form_main.task.value = "";
  
    createCloseButton(li);
    
    // Adiciona um event listener para marcar/desmarcar tarefa
    li.addEventListener('click', function() {
      this.classList.toggle('checked');
    });
  }
  
  function createCloseButton(li) {
    let span = document.createElement('span');
    let txt = document.createTextNode('\u00D7');
  
    span.className = 'close';
    span.appendChild(txt);
    li.appendChild(span);
  
    span.onclick = () => li.style.display = 'none';
  }
  