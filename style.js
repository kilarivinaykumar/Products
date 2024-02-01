const maindiv=document.getElementById('cock')


fetch('https://dummyjson.com/products')
.then(function(dummy){
    return dummy.json()
}).then(function(x){
    console.log(x)
    displaydata(x)
})

function displaydata(x)
{
    x.products.forEach(function(data)
     {
        const divv=document.createElement('div')
        const h=document.createElement('h2')
        const p1=document.createElement('p')
        const p3=document.createElement('p')
        const p2=document.createElement('a')
        const image=document.createElement('img')
        image.classList.add('image')
        image.src=data.images[0]
        image.height="170"
        image.width="300"
        const p=document.createElement('p')
        p.textContent="Price:"+ data.price+" $"
        h.textContent="Brand:"+data.brand
        p3.textContent="Description:"+data.description
        p2.href=data.stock
        p2.textContent="Available "+data.stock+" peices only"
        p1.textContent="Category:"+data.category
        divv.append(image,h,p1,p3,p,p2)
        divv.classList.add('pro')
        maindiv.appendChild(divv)


        
    });
}
