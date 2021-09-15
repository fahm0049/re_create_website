const urlParams = new URLSearchParams(window.location.search);
const recipe = urlParams.get("recipe");

const url = "https://www.punchfork.com/recipe/Barbecue-Beer-Can-Cabbage-Epicurious" + recipe;
console.log(url);

fetch(url)
.then(function(res) {
    return res.json();
})
.then(function(data){
    handleProductList(data);
})

function handleProductList(data){
    console.log(data);
    data.forEach(showProduct);

}