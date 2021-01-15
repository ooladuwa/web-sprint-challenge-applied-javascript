const Header = (title1, date1, temp1) => {
  // instantiate elements
  let header = document.createElement("div");
  let date = document.createElement("span");
  let title = document.createElement("h1");
  let temp = document.createElement("span");

  // assign classes/attributes/text
  header.classList.add("header");
  date.classList.add("date");
  temp.classList.add("temp");

  date.textContent = date1;
  title.textContent = title1;
  temp.textContent = temp1;

  // set hierarchy
  header.appendChild(date);
  header.appendChild(title);
  header.appendChild(temp);
  console.log(header);
  //return
  return header;
};

// TASK 1
// ---------------------
// Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
// The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
// The text inside elements will be set using their `textContent` property (NOT `innerText`).
//
//  <div class="header">
//    <span class="date">{ date }</span>
//    <h1>{ title }</h1>
//    <span class="temp">{ temp }</span>
//  </div>
//

const headerAppender = (selector) => {
  document
    .querySelector(selector)
    .appendChild(Header("Lambda Times", "January 12, 2021", "98"));
};

// TASK 2
// ---------------------
// Implement this function taking a css selector as its only argument.
// It should create a header using the Header component above, passing arguments of your choosing.
// It should append the header to the element in the DOM that matches the given selector.
//

export { Header, headerAppender };
