import axios from "axios";

const Card = (article) => {
  // instantiate elements
  const card = document.createElement("div");
  const headline = document.createElement("div");
  const author = document.createElement("div");
  const imgContainer = document.createElement("div");
  const img = document.createElement("img");
  const byline = document.createElement("span");

  card.classList.add("card");
  headline.classList.add("headline");
  author.classList.add("author");
  imgContainer.classList.add("img-container");
  img.setAttribute("src", article.authorPhoto);
  headline.textContent = article.headline;
  author.textContent = article.authorName;

  card.addEventListener("click", () => {
    console.log(headline);
  });

  card.appendChild(headline);
  card.appendChild(author);
  author.appendChild(imgContainer);
  author.appendChild(byline);
  imgContainer.appendChild(img);

  // return
  return card;
};

const cardAppender = (selector) => {
  const cardsContainer = document.querySelector(selector);
  axios
    .get("https://lambda-times-api.herokuapp.com/articles")
    .then((res) => {
      const {
        javascript,
        bootstrap,
        technology,
        jquery,
        node,
      } = res.data.articles;
      const articlesArray = [
        ...javascript,
        ...bootstrap,
        ...technology,
        ...jquery,
        ...node,
      ];

      console.log(articlesArray);
      articlesArray.forEach((article) => {
        cardsContainer.append(Card(article));
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
cardAppender();

// for (let key in response.data.articles) {
//   //console.log(key);
//   for (let i = 0; i < response.data.articles[key].length; i++) {
//     const newCard = Card(response.data.articles[key][i]);

// TASK 5
// ---------------------
// Implement this function, which should return the markup you see below.
// It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
// The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
// The text inside elements will be set using their `textContent` property (NOT `innerText`).
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// <div class="card">
//   <div class="headline">{ headline }</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={ authorPhoto }>
//     </div>
//     <span>By { authorName }</span>
//   </div>
// </div>
//

// TASK 6
// ---------------------
// Implement this function that takes a css selector as its only argument.
// It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
// However, the articles do not come organized in a single, neat array. Inspect the response closely!
// Create a card from each and every article object in the response, using the Card component.
// Append each card to the element in the DOM that matches the selector passed to the function.
//

export { Card, cardAppender };
