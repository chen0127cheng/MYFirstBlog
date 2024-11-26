const homeSection = document.getElementById("homeContent");
const workSection = document.getElementById("workContent");
const articleSection = document.getElementById("articleContent");
const dateSection = document.getElementById("dateContent");

function showHomeSection() {
  homeSection.style.display = "block";
  workSection.style.display = "none";
  articleSection.style.display = "none";
  dateSection.style.display = "none";
}
function showworkSection() {
  homeSection.style.display = "none";
  workSection.style.display = "grid";
  articleSection.style.display = "none";
  dateSection.style.display = "none";
}
function showArticleSection() {
  homeSection.style.display = "none";
  workSection.style.display = "none";
  articleSection.style.display = "grid";
  dateSection.style.display = "none";
}
function showdateSection() {
  homeSection.style.display = "none";
  workSection.style.display = "none";
  articleSection.style.display = "none";
  dateSection.style.display = "flex";
}

document
  .getElementById("homeLinkNav")
  .addEventListener("click", showHomeSection);
document.getElementById("homeLink").addEventListener("click", showHomeSection);
document
  .getElementById("workLinkNav")
  .addEventListener("click", showworkSection);
document
  .getElementById("articleLinkNav")
  .addEventListener("click", showArticleSection);
document
  .getElementById("dateLinkNav")
  .addEventListener("click", showdateSection);

showHomeSection();
