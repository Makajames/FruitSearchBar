const inputBar = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');


const fruits = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

const currentSearch = inputBar.addEventListener('input', function(e){
    const searchText = e.target.value;
    const results = search(searchText);
    //console.log(searchText);
    displaySuggestions(results);
    return searchText;
    });

function search(str) {
    // TODO
    let srch = inputBar.value.toLowerCase();
    if (srch === fruits.filter(fruit)){
    // let searchstr = fruits.filter(fruit => {
    //     fruit.toLowerCase().includes(str.toLowerCase())
    //     });
    console.log(searchstr);
    console.log(srch);
    return searchstr;
    };


function searchbarText(){
/*    
    if (fruits.includes(text))
        return suggestions.appendChild(document.createElement('li'));
*/
};

function displaySuggestions(results) {
    suggestions.innerHTML = '';
    results.forEach(function(result) {
        const fruitli = document.createElement('li');
        fruitli.textContent = result;
        suggestions.appendChild(fruitli);
    });
};

function useSuggestions(){
    const sugClick = e.target.value;
    let searchClick = sugClick.addEventListener('click', function(){ 
        console.log(sugClick);
        return searchClick;
    })
}