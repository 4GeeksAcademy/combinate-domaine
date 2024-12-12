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
  console.log(result.join("\n"));