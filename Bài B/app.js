async function api() {
    let resStoryID = await fetch("https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple")
    let story = await resStoryID.json();


    let data = [];
    data.push(story);
    let listContent = document.getElementById("container")
    let getData = Object.values(data[0].results);
    console.log(getData);

    let html = ``;

    for (i = 0; i < getData.length; i++) {
        html = html + `<div class="element">
    <div class="question">
        <h3>${getData[i].question}</h3>
        <button><i class="fas fa-plus-circle"></i></button>
    </div>
    <div class="answer hideText">
        
        <p>${getData[i].incorrect_answers}</p>
        <p>${getData[i].incorrect_answers}</p>
        <p>${getData[i].incorrect_answers}</p>
        <p>${getData[i].correct_answer}</p>
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