

//Permet de changer le H1 et le nom des onglets des pages en function de l'URL de la page.

document.addEventListener("DOMContentLoaded", function (event) {

  // Récupération du titre de la page
  const pageTitle = document.getElementById("page-title");

  // Récupération du numéro de page à partir de l'URL
  const page = window.location.href.match(/page(\d)/)[1];

  // Mise à jour du titre de la page en fonction du numéro de page
  pageTitle.textContent = "PAGE " + page;



  const webTitle = document.getElementById("web-title");

  // Récupération du numéro de page à partir de l'URL
  const web = window.location.href.match(/page(\d)/)[1];

  // Mise à jour du titre de l'onglet' en fonction du numéro de page
  webTitle.textContent = "PAGE " + web;
});



// pour le modal et footer date change. 

window.onload = () => {
  let modalbtn = document.querySelector("#modalbtn");
  var aujd = new Date();
  var année = aujd.getFullYear();
  modalbtn.innerHTML = "Web design - GEA Geoffrey © " + année;

  modalbtn.addEventListener("click", () => {
    fetch("modal.html")
      .then(response =>{
        return response.text();
      })
      .then(data => {
        let modaltitre = document.querySelector("#staticBackdropLabel");
        modaltitre.innerHTML = "Lorem";
        let modalbody = document.querySelector("#modal-body");
        modalbody.innerHTML = data;
    });
    const modal = new bootstrap.Modal('#staticBackdrop', {
        backdrop: 'static',
        keyboard: false
      })

    modal.show();
  });
};
