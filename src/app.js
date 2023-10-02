let pronouns = ['the', 'our', 'my'];
let adjectives = ['great', 'big', 'small'];
let nouns = ['jogger', 'racoon', 'cat'];

let domainNames = [];

for (let pronoun of pronouns) {
    for (let adjective of adjectives) {
        for (let noun of nouns) {
            // Concatenate the elements to form a domain name
            let domainName = `${pronoun}${adjective}${noun}.com`;
            domainNames.push(domainName);
        }
    }
}

console.log(domainNames);

// Get the <div> element by its id
let domainList = document.getElementById('domain-list');

// Loop through the domainNames array and add each name to the <div> element
let domainListContent = '';
for (let domain of domainNames) {
    domainListContent += `<p>${domain}</p>`;
}

domainList.innerHTML = domainListContent;




