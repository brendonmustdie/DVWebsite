
const navigationData = [
  { title: "Home", link: "../DVWebsite/index.html" },
  { title: "Data Visualization", link: "../DVWebsite/Pages/data.html" },
  { title: "Blog posts", link: "../DVWebsite/Blogs/blog.html" },
  { title: "Design Section", link: "../DVWebsite/Pages/designpage.html" },
];

const navigations = document.getElementsByClassName("navigation");

for (var i = 0; i < navigations.length; i++) {
  let list = document.createElement("ul");

  for (var j = 0; j < navigationData.length; j++) {
    let listItemLink = document.createElement("a");
    listItemLink.innerText = navigationData[j].title;
    listItemLink.setAttribute("href", navigationData[j].link);
    let listItem = document.createElement("li");
    listItem.appendChild(listItemLink);
    list.appendChild(listItem);
  }

  navigations[i].appendChild(list);
}
