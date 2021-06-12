 async function api() {
     //get api
     let resStoryID = await fetch("https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple")
     let story = await resStoryID.json();
     let data = [];
     data.push(story);
     let listContent = document.getElementById("container")
     let getData = Object.values(data[0].results);
     let html = ``;
     for (i = 0; i < getData.length; i++) {
         //get incorect answer from api to new array
         let getData1 = Object.values(getData[i].incorrect_answers);
         //push correct answer to new array
         getData1.push(getData[i].correct_answer)
         console.log(getData1);
         // create new array with all value random position in getData1 array 
         let getData2 = []
         for (a = 0; a < 4; a++) {
             const random = Math.floor(Math.random() * getData1.length);
             getData2.push(getData1[random])
             getData1.splice(getData1.indexOf(getData1[random]), 1)
         }
         console.log(getData[i].correct_answer);
         console.log(getData2);
         html = html + `<div class="element">
    <div class="question">
        <h3>${getData[i].question}</h3>
        <button><i class="fas fa-plus-circle"></i></button>
    </div>
    <div class="answer hideText">
    <div class="form-check">
    <label class="form-check-label">
      <input type="radio" class="form-check-input" name="optradio"> ${getData2[1]}
    </label>
  </div>
  <div class="form-check">
    <label class="form-check-label">
      <input type="radio" class="form-check-input" name="optradio"> ${getData2[2]}
    </label>
  </div>
  <div class="form-check">
    <label class="form-check-label">
      <input type="radio" class="form-check-input" name="optradio"> ${getData2[0]}
    </label>
  </div>
  <div class="form-check">
    <label class="form-check-label">
      <input type="radio" class="form-check-input" name="optradio"> ${getData2[3]}
    </label>
  </div>
  <br>
  <button type="submit" class="btn btn-primary">Submit</button>
  </div>
        
    
    </div>
    `
     }

     listContent.innerHTML = html;

     const elements = document.querySelectorAll('.element');
     elements.forEach(element => {
         let btn = element.querySelector('.question button');
         let icon = element.querySelector('.question button i');
         var answer = element.lastElementChild;
         var answers = document.querySelectorAll('.element .answer');
         btn.addEventListener('click', () => {
             answers.forEach(ans => {
                 let ansIcon = ans.parentElement.querySelector('button i');
                 if (answer !== ans) {
                     ans.classList.add('hideText');
                     ansIcon.className = 'fas fa-plus-circle';
                 }
             });
             answer.classList.toggle('hideText');
             icon.className === 'fas fa-plus-circle' ? icon.className = 'fas fa-minus-circle' :
                 icon.className = 'fas fa-plus-circle';
         });
     });
 }
 api()