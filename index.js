fetch("https://striveschool-api.herokuapp.com/books")
  .then((response) => response.json())
  .then((books) => {
    console.log(books);

    const grid = document.getElementById("books-container");
    grid.innerHTML = "";

    books.forEach((book) => {
      const col = document.createElement("div");
      col.className = "col";
      col.innerHTML = `          
                     <div class="card mw-100% mt-4 mb-4 border border-light border border-1 bg-secondary text-white ">                     
                         <div class="card-body">
                         <img src="${book.img}" alt="${book.title}" class="img-fluid d-block mx-auto"/>                                 
                             <h5 class="card-title mt-2">${book.title}</h5>
                             <p class="card-text mt-2">${book.price}&euro;</p>
                             <button class="btn btn-dark" onclick="discard(event)">Scarta</button>

                         </div>
                     </div>
                         `;
      grid.appendChild(col);
    });
  })
  .catch((err) => console.log(err));

function discard(event) {
  const cardBody = event.target.parentNode;
  const card = cardBody.parentNode;
  card.remove();
}
