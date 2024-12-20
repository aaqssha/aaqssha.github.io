function searchArticles() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  const articles = document.querySelectorAll("#blog article");
  articles.forEach((article) => {
    const title = article.querySelector("h3").innerText.toLowerCase();
    if (title.includes(query)) {
      article.style.display = "block";
    } else {
      article.style.display = "none";
    }
  });
}
