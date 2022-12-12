//------------------WE CALL ON THE API THAT CONTAINS THE PRODUCTS------------------

//Ask fetch to retrieve the data from the API url:
fetch('http://localhost:3000/api/products')
    // first .then promise that will retrieve the response (in staged)
    // by transforming it into json to facilitate interpretation by the browser:
  .then(res => res.json())

    // second .then promise that will display (online)
    // the data contained in my showProducts function:
  .then(data => { 
    showProducts(data);
  })

  // Add a message in case the server does not respond
  .catch(_error => {
    alert('Oops ! The server does not respond, follow the instructions in READ.me.');
  });

  //---------WE DISPLAY ALL PRODUCTS---------
  
function showProducts(data) {
    // for my product variable of my promise .then data
    for (product of data) {
        // find the #items element in index.html...
        const itemCard = document.getElementById('items');
      
        // ... and modify it with the contents between ``
        // the + is used to add all the elements as long as there are
        itemCard.innerHTML +=`
        <a href="./product.html?id=${product._id}">
        <article>
          <img src="${product.imageUrl}" alt="${product.altTxt}">
          <h3 class="productName">${product.name.toUpperCase()}</h3>
          <p class="productDescription">${product.description}</p>
        </article>
        </a>
      `; // the dollar+braces is a new form of concatenation
      // which allows you to directly combine variables and keys
      // in an object or array
    }
}

// End of index.js
