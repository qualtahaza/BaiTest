async function api() {
    let resStoryID = await fetch("https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple")
    let story = await resStoryID.json();

    let listContent = document.getElementById("listContent")
    let html = ``;
    let data = [];
    data.push(story);

    let getData = data[0].results
    console.log(getData[0]);
}
api()