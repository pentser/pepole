var pepole_ar = [];


window.onload = () => {

    doRestApi();

}




const doRestApi = (cat_id = 1) => {

    let url = "https://randomuser.me/api/?results=9&seed=" + cat_id;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            pepole_ar = data.results;
            console.log(data.results);
            renderAllPepoles(pepole_ar);
        })


}


const renderAllPepoles = (arr) => {

    document.querySelector("#id_row").innerHTML = "";
    arr.map((item) => {

        let pepole = new Pepole(id_row, item.name, item.location, item.picture.large, item.dob.age, item.phone, item.cell, item.email);

        pepole.renderToHtml();
    });
}


const onCloseDarkWindow = () => {

    document.querySelector("#id_dark").className = "d-none";
}


const OnSearchPepole = () => {

    let searchKey = document.querySelector("#id_search").value;
    let sortQ = document.querySelector("#id_sort").value;


    pepole_ar.sort(compareValues(sortQ));


    // מייצר מערך פיקטיבי בשביל לעשות עליו פילטר
    let temp_ar = pepole_ar.filter((item) => (item.name.first.indexOf(searchKey) > -1 || item.name.last.indexOf(searchKey) > -1));

    renderAllPepoles(temp_ar);
}



const onChangeCat = (e) => {

    let cat_id = e.target.dataset.cat
    doRestApi(cat_id);
}


//Sort function for object properties
const compareValues = (key, order = 'asc') => {

    return function innerSort(a, b) {
        if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) return 0;
        const comparison = String(a[key]).localeCompare(String(b[key]));

        console.log(comparison);

        return (
            (order === 'desc') ? (comparison * -1) : comparison
        );
    };
}