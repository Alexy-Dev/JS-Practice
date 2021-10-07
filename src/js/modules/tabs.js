const tabs = (headerSelector, tabsSelector, contentSelector, activeClass, display = 'block') => {
    const header = document.querySelector(headerSelector),
          tab = document.querySelectorAll(tabsSelector),
          content = document.querySelectorAll(contentSelector);

    function hideTabContent() {
        content.forEach(item => {
            item.style.display = 'none';
        });

        tab.forEach(item => {
            item.classList.remove(activeClass);
        });
    }
    function showTabContent(i = 0) {
        content[i].style.display = display;
        tab[i].classList.add(activeClass);
    }
    hideTabContent();
    showTabContent();

    header.addEventListener('click', (e) => {               //навешиваем обработчик события на общую область, со всеми табами
        const target = e.target;
        if (target &&
            (target.classList.contains(tabsSelector.replace(/\./, "")) ||        //проверяем действительно ли кликнули в таб
        target.parentNode.classList.contains(tabsSelector.replace(/\./, "")))) {  //регулярным выражением убираем точку из названия класса
           tab.forEach((item, i) => {                               //перебираем табы, чтобы узнать в какой кликнули и какой у него индекс
               if(target == item || target.parentNode == item) {
                   hideTabContent();
                   showTabContent(i);
               } 

           });
        }
    });
};

export default tabs;