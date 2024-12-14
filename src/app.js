/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  // console.log("Hello Rigo from the console!");
  const combinateDomaine = (pron, adj, noun) => {
    let domaines = [];
    for (let i = 0; i < pron.length; i++) {
      for (let j = 0; j < adj.length; j++) {
        for (let k = 0; k < noun.length; k++) {
          domaines.push(`${pron[i]}${adj[j]}${noun[k]}.com`);
        }
      }
    }
    return domaines;
  };

  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];

  let result = combinateDomaine(pronoun, adj, noun);

  let domaine = document.querySelector(".domaine");

  let ol = document.createElement("ol");

  for (let r of result) {
    let li = document.createElement("li");

    li.innerHTML = r;
    ol.appendChild(li);
    domaine.appendChild(ol);
  }
  //console.log(result.join("\n"));
};
