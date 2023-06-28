document.addEventListener("DOMContentLoaded", function () {
  var currentPage = 1;
  var totalPages = 10; // Nombre total de pages
  var displayPages = 10; // Nombre de pages à afficher dans la pagination

  var previousButton = document.getElementById("previous");
  var nextButton = document.getElementById("next");
  var pagesContainer = document.getElementById("pages");

  function generatePagination() {
    var startPage = Math.max(1, currentPage - Math.floor(displayPages / 2));
    var endPage = Math.min(totalPages, startPage + displayPages - 1);

    if (endPage - startPage + 1 < displayPages) {
      startPage = Math.max(1, endPage - displayPages + 1);
    }

    pagesContainer.innerHTML = "";

    for (var i = startPage; i <= endPage; i++) {
      var pageButton = document.createElement("button");
      pageButton.innerText = i;
      if (i === currentPage) {
        pageButton.classList.add("active");
      }
      pageButton.addEventListener("click", function () {
        var page = parseInt(this.innerText);
        goToPage(page);
      });
      pagesContainer.appendChild(pageButton);
    }

    previousButton.disabled = currentPage === 1;
    nextButton.disabled = currentPage === totalPages;
  }

  function goToPage(page) {
    currentPage = page;
    generatePagination();
  }

  previousButton.addEventListener("click", function () {
    if (currentPage > 1) {
      goToPage(currentPage - 1);
    }
  });

  nextButton.addEventListener("click", function () {
    if (currentPage < totalPages) {
      goToPage(currentPage + 1);
    }
  });

  generatePagination();
});
