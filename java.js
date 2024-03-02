
let main = document.querySelector('main');

let joke1 = 'A guy walks into a bar and asks for 1.4 root beers. The bartender says “I’ll have to charge you extra, that’s a root beer float”. The guy says “In that case, better make it a double.';
let joke2 = "Knock, knock. Who’s There? Very long pause… “Java.”";
let joke3 = "Programming is 10% writing code and 90% understanding why it’s not working";

let template = `
  <h1>My Jokes</h1>
  <ul>
    <li>${joke1}</li>
    <li>${joke2}</li>
    <li>${joke3}</li>
  </ul>
`;

main.innerHTML = template;
let para = document.createElement('p');
para.textContent = "That's all folks!";
document.body.appendChild(para);
