const tabList = document.querySelector('[role="tablist"]');
const tabs = tabList.querySelectorAll('[role="tab"]');
const articles = document.getElementsByTagName("Article");
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

    if (e.keyCode === keydownRight) {
        tabFocus++;
        if (tabFocus >= tabs.length) {
            tabFocus = 0;
        }
    }

    if (e.keyCode === keydownLeft) {
        tabFocus--;
        if (tabFocus < 0) {
            tabFocus = tabs.length - 1;
        }
    }

  }

  tabs[tabFocus].setAttribute("tabindex", 0);
  tabs[tabFocus].focus();
  tabs[tabFocus].ariaSelected = "true";
  hideContent();
  showContent(tabs[tabFocus].getAttribute('aria-controls'));
}

function changeTabPanel(e){
  currentTab.ariaSelected = "false";
  currentTab = e.target;
  hideContent();
  showContent(e.target.getAttribute('aria-controls'));
  currentTab.ariaSelected = "true";
}

function hideContent(){
  currentArticle.hidden = true;
  currentImage.hidden = true;
}

function showContent(tab){
  currentArticle = document.querySelector(`#${tab}`);
  currentImage = document.querySelector(`#${tab}-img`);
  currentArticle.hidden = false;
  currentImage.hidden = false;
}
