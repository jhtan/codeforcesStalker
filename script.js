const ul = document.getElementById('subs');
const user = 'jhtan';
const url = 'https://codeforces.com/api/user.status?handle=' + user;

fetch(url)
.then( resp => resp.json() )
.then( data => getSubs(data) )
.catch( error => console.log(error) );

function getSubs(data) {
    console.log("== showData ==");
    console.log(data);

    let subs = data.result.map(sub => ({
        "subId": sub.id,
        "contestId": sub.contestId,
        "time": sub.creationTimeSeconds,
        "problemIndex": sub.problem.index,
        "problemName": sub.problem.name,
        "problemVerdict": sub.verdict
    }));
    console.log("--> subs");
    console.log(subs);

    showSubs(subs);
}

function showSubs(subs) {
    subs.forEach(sub => {
        let li = createNode('li'),
        a = createNode('span');

        a.innerHTML = `${new Date(sub.time * 1000)} ${sub.contestId} ${sub.problemIndex} ${sub.problemName} ${sub.problemVerdict}`;

        append(li, a);
        append(ul, li);    
    });
}

function createNode(element) {
    return document.createElement(element); // Create the type of element you pass in the parameters
 }

function append(parent, el) {
    return parent.appendChild(el); // Append the second parameter(element) to the first one
}