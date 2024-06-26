const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruits = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

const typeEvent = input.addEventListener('input', function(e){
	const searchValue = e.target.value;
	console.log(searchValue);
	const results = search(searchValue);
	//console.log(results);
	showSuggestions(results, searchValue);
	//console.log(searchValue);
	//return searchValue;
})

function search(str) {
	// TODO
	//let s1 = input.value; str === s1
	let searchArr = fruits.filter(val => val.toLowerCase().includes(str.toLowerCase()));
	return(searchArr)
}

function showSuggestions(results, inputVal) {
    suggestions.innerHTML = '';
    if (inputVal === "") {
        return;
    } else {
        results.forEach(val => {
            let fruitli = document.createElement('li');
            fruitli.textContent = val;
            suggestions.appendChild(fruitli);
        });
    }
}

suggestions.addEventListener('click', function(e) {
	//console.log(e.target.innerText);
    if (e.target.tagName === 'LI') {
        useSuggestion(e);
    }
});

function useSuggestion(e) {
	input.value = e.target.innerText;
	suggestions.innerHTML = '';
};