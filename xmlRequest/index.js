// https://jsonplaceholder.typicode.com/posts

let showHeading = document.querySelector("h1")
let showTitle = document.querySelector("h3")

const url = 'https://jsonplaceholder.typicode.com/posts';
const imageUrl = "https://jsonplaceholder.typicode.com/photos"


const getData = (url, fun) => {
    const instanceXml = new XMLHttpRequest();
    instanceXml.open("GET", url)
    instanceXml.send();
    instanceXml.onload = (res) => {
        // console.log(instanceXml.responseText);
        // console.log(res?.currentTarget?.response);
        let data = JSON.parse(res?.currentTarget?.response)
        fun(data)
    }
}

const setData = (data) => {
    const container = document.querySelector(".main");
    data.map(element => {
        const div = document.createElement("div")
        div.classList.add("item-contaner")
        const h1 = document.createElement("h1");
        h1.classList.add("h11")
        const h3 = document.createElement("h3")
        h3.classList.add("h12")

        h1.innerHTML = element.title;
        h3.innerHTML = element.body;

        div.appendChild(h1);
        div.appendChild(h3)

        container.appendChild(div)
    });
}

const imgFunc = (data) => {
    const container = document.querySelector(".main");
    data.forEach((item) => {

        const div = document.createElement("div");

        const img = document.createElement("img")
        img.classList.add("img")

        div.innerHTML = item.title;
        img.src = item.url;

        div.appendChild(img)
        
        container.appendChild(div)
    })
    console.log(data)
}

getData(imageUrl, imgFunc)
getData(url,setData);