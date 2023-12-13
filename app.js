const searchBar=document.querySelector('input');
const resultsBar=document.getElementById('results-bar');
const resultsList=document.querySelector('ul');
const fruits=[
'Apple','Apricot','Avocado','Banana','Bilberry','Blackberry',
'Blackcurrant','Blueberry','Boysenberry','Currant','Cherry','Coconut','Cranberry',
'Cucumber','Custard apple','Damson','Date','Dragonfruit','Durian','Elderberry',
'Feijoa','Fig','Gooseberry','Grape','Raisin','Grapefruit','Guava','Honeyberry',
'Huckleberry','Jabuticaba','Jackfruit','Jambul','Juniper berry','Kiwifruit',
'Kumquat','Lemon','Lime','Loquat','Longan','Lychee','Mango','Mangosteen',
'Marionberry','Melon','Cantaloupe','Honeydew','Watermelon','Miracle fruit',
'Mulberry','Nectarine','Nance','Olive','Orange','Clementine','Mandarine',
'Tangerine','Papaya','Passionfruit','Peach','Pear','Persimmon','Plantain','Plum',
'Pineapple','Pomegranate','Pomelo','Quince','Raspberry','Salmonberry','Rambutan',
'Redcurrant','Salak','Satsuma','Soursop','Star fruit','Strawberry','Tamarillo',
'Tamarind','Yuzu'
];

const results=[];
function search(query){
    let searchTerm=query.toLowerCase();
    let results=[];
    fruits.forEach(fruitName=>{
        if(fruitName.toLowerCase().includes(searchTerm)){
            results.push(fruitName);
        }
    });
    return results;
}
function searchHandler(e){
    const inputVal=e.target.value.toLowerCase();
    if(inputVal===''){
        resultsList.innerHTML='';
        return;
    }
    const searchResults=search(inputVal);
    searchResults.forEach(result=>{
        const listItem=document.createElement('li');
        listItem.textContent=result;
        resultsList.appendChild(listItem);
    });
}
searchBar.addEventListener('keyup',searchHandler);