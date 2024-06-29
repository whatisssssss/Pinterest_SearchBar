var arr=[
    {name:"Galaxy" , image:"https://images.unsplash.com/photo-1718905147097-418b73c620bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D"},
    {name:"Beach" , image:"https://images.unsplash.com/photo-1717145504452-eed476404296?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNnx8fGVufDB8fHx8fA%3D%3D"},
    {name:"Girls" , image:"https://plus.unsplash.com/premium_photo-1663054774427-55adfb2be76f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMDl8fHxlbnwwfHx8fHw%3D"},
    {name:"Food" , image:"https://plus.unsplash.com/premium_photo-1678897742200-85f052d33a71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMDV8fHxlbnwwfHx8fHw%3D"},
    {name:"Love" , image:"https://images.unsplash.com/photo-1718931216724-40371852f48b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMDR8fHxlbnwwfHx8fHw%3D"},
    {name:"Friends" , image:"https://plus.unsplash.com/premium_photo-1716999430646-4a5e75fd5a3f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMzd8fHxlbnwwfHx8fHw%3D"},
    {name:"Family" , image:"https://plus.unsplash.com/premium_photo-1718204437199-dca172980b40?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNjF8fHxlbnwwfHx8fHw%3D"},
    {name:"Burger" , image:"https://images.unsplash.com/photo-1718397172443-48185c6bb4e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOTN8fHxlbnwwfHx8fHw%3D"},
    {name:"Milky Way" , image:"https://images.unsplash.com/photo-1718905147097-418b73c620bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D"},
    {name:"Water" , image:"https://images.unsplash.com/photo-1717145504452-eed476404296?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNnx8fGVufDB8fHx8fA%3D%3D"},
    {name:"Best Friends" , image:"https://plus.unsplash.com/premium_photo-1663054774427-55adfb2be76f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMDl8fHxlbnwwfHx8fHw%3D"},
    {name:"Snacks" , image:"https://plus.unsplash.com/premium_photo-1678897742200-85f052d33a71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMDV8fHxlbnwwfHx8fHw%3D"},
    {name:"Lovie Dovie" , image:"https://images.unsplash.com/photo-1718931216724-40371852f48b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMDR8fHxlbnwwfHx8fHw%3D"},
    {name:"Friends forever" , image:"https://plus.unsplash.com/premium_photo-1716999430646-4a5e75fd5a3f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMzd8fHxlbnwwfHx8fHw%3D"},
    {name:"Family love" , image:"https://plus.unsplash.com/premium_photo-1718204437199-dca172980b40?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNjF8fHxlbnwwfHx8fHw%3D"},
    {name:"Burger king" , image:"https://images.unsplash.com/photo-1718397172443-48185c6bb4e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOTN8fHxlbnwwfHx8fHw%3D"},
]

function displayImages(){
    var clutter="";
    arr.forEach((obj)=>{
        clutter += `<div class="box">
                    <img class="cursor-pointer" src="${obj.image}" alt="image">
                    </div>`
    })
    // display the images in the container
    document.querySelector(".container").innerHTML=clutter;
}
function handleSearch(){
    //gives a dark background when the user is working on the search bar
    var searchInput = document.querySelector("#searchinput");
    searchInput.addEventListener("focus",function(){
        document.querySelector(".overlay").style.display="block";
    })
    searchInput.addEventListener("blur",function(){
        document.querySelector(".overlay").style.display="none";
    })

    searchInput.addEventListener("input", function(){
        const filteredArray = arr.filter(obj => obj.name.toLowerCase().startsWith(searchInput.value));
        var clutter = "";
        filteredArray.forEach(function(obj){
            clutter += `<div class="res flex px-8 py-3">
            <i class="ri-search-line font-semibold mr-5"></i>
            <h3 class="font-semibold">${obj.name}</h3>
        </div>`
        })
    document.querySelector(".searchdata").style.display = "block";
        document.querySelector(".searchdata").innerHTML = clutter;
    })
}
handleSearch();
displayImages();