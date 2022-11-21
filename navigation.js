// Production nav
const navigationData = [
 { title: "Home", link: "https://brendonmustdie.github.io/DVWebsite/index.html" },
 { title: "Data Visualization", link: "https://brendonmustdie.github.io/DVWebsite/Pages/data.html" },
 { title: "Blog posts", link: "https://brendonmustdie.github.io/DVWebsite/Blogs/blog.html" },
 { title: "Design Section", link: "https://brendonmustdie.github.io/DVWebsite/Pages/designpage.html" },
 { title: "Data Art", link: "https://brendonmustdie.github.io/DVWebsite/Pages/dataart.html" },
];

// // Development nav
// const navigationData = [
//   { title: "Home", link: "../index.html" },
//   { title: "Data Visualization", link: "../Pages/data.html" },
//   { title: "Blog posts", link: "../Blogs/blog.html" },
//   { title: "Design Section", link: "../Pages/designpage.html" },
//   { title: "Data Art", link: "../Pages/dataart.html" },
// ];

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
