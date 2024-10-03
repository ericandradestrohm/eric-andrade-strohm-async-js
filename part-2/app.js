const maindiv = document.getElementById('container');
const newh1 = document.createElement('h1');

// const fetchPromise = fetch(
//     "bad-scheme://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
// );
async function fetchProducts() {
    const response = await fetch(
        "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
    );
    if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
    }
    const data = await response.json();
    return data;
}
// const fetchPromise = fetch(
//     "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
// );



// fetchPromise.then((response) => {
//     const jsonPromise = response.json();
//     jsonPromise.then((data) => {
//         newh1.textContent = data[0].name;
//         console.log(data[0].name);
//     });
// });
const fetchPromise = fetchProducts();

console.log(fetchPromise);
fetchPromise
    // .then((response) => {
    //     if (!response.ok) {
    //         throw new Error(`HTTP error: ${response.status}`);
    //     }
    //     return response.json();
    // })
    .then((data) => {
        newh1.textContent = data[0].name;
        console.log(data[0].name);
    })
    .catch((error) => {
        console.error(`Could not get products: ${error}`);
    });

console.log("Started request…");

maindiv.appendChild(newh1);