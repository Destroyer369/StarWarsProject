async function fillTable(url, table){
    const tableHead = table.querySelector('thead');
    const tableBody = table.querySelector('tbody');
    const response = await fetch(url);
    const data = await response.json();

    console.log(data);
}

fillTable('https://swapi.dev/api/planets/',document.querySelector('table'));