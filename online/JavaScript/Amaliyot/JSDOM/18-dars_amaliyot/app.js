let API = "https://fakestoreapi.com/products"

let pro = fetch(API).then(res => res.json()).then(data => console.log(data))

// async function getData(apiUrl){
//     const request = await fetch(apiUrl);
//     const response = await request.json();
//     return response;
// }

// getData(API).then((data)=>{console.log(data);})