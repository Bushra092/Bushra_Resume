const abtMe = document.querySelector(".tabtitles");
const tabContains = document.querySelectorAll(".tabContains");

abtMe.addEventListener("click", (e) => {
  let targetElem = e.target;
  let cssClass = targetElem.classList.contains("activeLink");

  let idElem = targetElem.innerText.toLowerCase();
  if (e.target.classList.contains("tablinks")) {
    if (!cssClass) {
      let oldActiveTab = document.querySelector(".activeLink");
      oldActiveTab.classList.remove("activeLink");
      targetElem.classList.add("activeLink");
    }

    for (let i = 0; i < tabContains.length; i++) {
      tabContains[i].id === idElem
        ? (tabContains[i].style.display = "block")
        : (tabContains[i].style.display = "none");
    }
  }
});
