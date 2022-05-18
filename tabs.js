const tabList = document.querySelector('[role="tablist"]');
const tabs = tabList.querySelectorAll('[role="tab"]');
const articles = document.getElementsByClassName("destination-info");
const images = document.getElementsByTagName("picture");

let tabFocus = 0;
let currentTab = tabs[0];
let currentArticle = articles[0];
let currentImage = images[0];

tabList.addEventListener('keydown', changeTabFocus);

tabs.forEach((tab) => {
    tab.addEventListener('click', changeTabPanel)
});

function changeTabFocus(e) {
  const keydownLeft = 37;
  const keydownRight = 39;


  if (e.keyCode === keydownLeft || e.keyCode === keydownRight) {
    tabs[tabFocus].setAttribute("tabindex", -1);
    tabs[tabFocus].ariaSelected = "false";
  }

  if(e.keyCode === keydownRight) {
    if(tabFocus < tabs.length - 1){
      tabFocus++;
    } else {
      tabFocus = 0;
    }
  }

  if (e.keyCode === keydownLeft) {
    if(tabFocus > 0){
      tabFocus--;
    } else {
      tabFocus = tabs.length - 1;
    }
  }

  tabs[tabFocus].setAttribute("tabindex", 0);
  tabs[tabFocus].focus();
  tabs[tabFocus].ariaSelected = "true";

  selectPlanet(tabs[tabFocus].textContent.toLowerCase());
}

function changeTabPanel(e){
  currentTab.ariaSelected = "false";
  currentTab = e.target;
  selectPlanet(e.target.textContent.toLowerCase());
  currentTab.ariaSelected = "true";
}

function selectPlanet(planet){
  currentArticle.hidden = true;
  currentImage.hidden = true;
  currentArticle = document.querySelector(`#${planet}`);
  currentImage = document.querySelector(`#${planet}-img`);
  currentArticle.hidden = false;
  currentImage.hidden = false;
}
