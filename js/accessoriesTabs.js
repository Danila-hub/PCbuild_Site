const tabsParent = document.querySelector('.accessories__tabs');
const tabs = document.querySelectorAll('.accessories__tab');
const tabsContent = document.querySelectorAll('.tab__content');
function hideTabsContent() {
  tabsContent.forEach((item) => {
    item.classList.add('hide');
    item.classList.remove('show', 'fade');
  });

  tabs.forEach((item) => {
    item.classList.remove('tab__active');
  });
}

function showTabsContent(i = 0) {
  tabsContent[i].classList.add('show', 'fade');
  tabsContent[i].classList.remove('hide');
  tabs[i].classList.add('tab__active');
}
hideTabsContent();
showTabsContent();

tabsParent.addEventListener('click', (event) => {
  const target = event.target;
  if (target && target.classList.contains('accessories__tab')) {
    tabs.forEach((item, i) => {
      if (target === item) {
        hideTabsContent();
        showTabsContent(i);
      }
    });
  }
});
