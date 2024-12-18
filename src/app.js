/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  // console.log("Hello Rigo from the console!");
  const combinateDomaine = (pron, adj, noun) => {
    let domainesName = [];
    for (let i = 0; i < pron.length; i++) {
      for (let j = 0; j < adj.length; j++) {
        for (let k = 0; k < noun.length; k++) {
          domainesName.push(`${pron[i]}${adj[j]}${noun[k]}.com`);
        }
      }
    }
    return domainesName;
  };

  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];

  let combinateDomaineVariable = combinateDomaine(pronoun, adj, noun);

  let divElementDomaine = document.querySelector(".domaine");

  let ol = document.createElement("ol");

  for (let index of combinateDomaineVariable) {
    let li = document.createElement("li");

    li.innerHTML = index;
    ol.appendChild(li);
    divElementDomaine.appendChild(ol);
  }
  console.log(combinateDomaineVariable.join("\n"));
};
