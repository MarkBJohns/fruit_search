const searchBar=document.querySelector('input');
const resultsBar=document.getElementById('results-bar');
const resultList=document.querySelector('ul');
const suggestions=document.querySelectorAll('li');
const fruits=[
'Apple','Apricot','Avocado','Banana','Bilberry','Blackberry',
'Blackcurrant','Blueberry','Boysenberry','Currant','Cherry','Coconut','Cranberry',
'Cucumber','Custard apple','Damson','Date','Dragonfruit','Durian','Elderberry',
'Feijoa','Fig','Gooseberry','Grape','Grapefruit','Guava','Honeyberry',
'Huckleberry','Jabuticaba','Jackfruit','Jambul','Juniper berry','Kiwifruit',
'Kumquat','Lemon','Lime','Loquat','Longan','Lychee','Mango','Mangosteen',
'Marionberry','Melon','Cantaloupe','Honeydew','Watermelon','Miracle fruit',
'Mulberry','Nectarine','Nance','Olive','Orange','Clementine','Mandarine',
'Tangerine','Papaya','Passionfruit','Peach','Pear','Persimmon','Plantain','Plum',
'Pineapple','Pomegranate','Pomelo','Quince','Raisin','Raspberry','Rambutan',
'Redcurrant','Salmonberry','Salak','Satsuma','Soursop','Star fruit','Strawberry',
'Tamarillo','Tamarind','Yuzu'
];

function search(query){
    let searchTerm=query.toLowerCase();
    let results=[];
    if(searchTerm===''){
        return results;
    }
    fruits.forEach(fruitName=>{
        if(fruitName.toLowerCase().includes(searchTerm)){
            results.push(fruitName);
        }
    });
    return results;
}
function searchHandler(e){
    let query=searchBar.value;
    let results=search(query)
    resultList.innerHTML='';
    results.forEach(result=>{
        let listItem=document.createElement('li');
        listItem.textContent=result;
        resultList.appendChild(listItem);
    })
}
function showSuggestions(){
    resultList.addEventListener('mouseover',function(e){
        if(e.target.tagName==='LI'){
            e.target.classList.add('hover');
        }
    }); 
    resultList.addEventListener('mouseout',function(e){
        if(e.target.tagName==='LI'){
            e.target.classList.remove('hover');
        }
    });
}
function useSuggestion(e){
    if(e.target.tagName==='LI'){
        let selected=e.target.textContent;
        searchBar.value=selected;
        resultList.innerHTML='';
    }
}
searchBar.addEventListener('keyup',function(e){
    searchHandler(e);
    showSuggestions();
});
resultList.addEventListener('click', useSuggestion);
