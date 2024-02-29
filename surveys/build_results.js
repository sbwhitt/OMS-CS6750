let res = document.getElementById("results");
let i = 0;
for (let r of responses) {
    i++;
    let question = document.createElement("div");
    question.setAttribute("class", "question");

    let title = document.createElement("h3");
    title.setAttribute("class", "title");
    title.appendChild(document.createTextNode("Q" + i + ": "));
    title.appendChild(document.createTextNode(r.text));
    question.appendChild(title);

    let answers = document.createElement("div");
    answers.setAttribute("class", "answers");
    question.appendChild(answers);

    for (let a of r.answers) {
        let ans = document.createElement("p");
        ans.setAttribute("class", "answer");
        ans.appendChild(document.createTextNode(a));
        answers.appendChild(ans);
    }

    res.appendChild(question);
}