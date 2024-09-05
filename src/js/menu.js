const burgerMenuButton = document.querySelector('.menu-area');
const menuCurtain = document.getElementById('menu-curtain');
const body = document.body;
const menuContainer = document.getElementById('menu-container');
const menuContentOverlay = document.getElementById('menu-content-overlay');
const menuRounder = document.getElementById('menu-rounder');
const menuCascade = document.getElementById('menu-cascade');
let currentState = 0;

// Функция для обновления трансформации
const updateTransform = () => {
    const transformValues = [0, -272, -544 ];
    if (menuRounder) {
        menuRounder.style.transform = `translateX(${transformValues[currentState]}px)`;
    }
};

// Функция для обновления класса для родительских элементов
const updateParentClass = () => {
    if (menuRounder && menuCascade) {
        let parentElement = menuRounder.parentElement;

        while (parentElement && parentElement !== menuCascade) {
            parentElement = parentElement.parentElement;
        }

        if (parentElement === menuCascade) {
            if (currentState === 0) {
                parentElement.classList.add('first-layer');
            } else {
                parentElement.classList.remove('first-layer');
            }
        }
    }
};

// Переход на следующий уровень меню
const toggleTransform = () => {
    currentState = (currentState + 1) % 4;
    updateTransform();
    updateParentClass();
};

// Возврат на предыдущий уровень меню
const toggleTransformBack = () => {
    currentState = (currentState - 1 + 4) % 4;
    updateTransform();
    updateParentClass();
};

// Функция для обработки клика по элементу меню
const handleMenuItemClick = (e) => {
    if (e.classList.contains("is-father")) {
        console.log('Handling menu item click...'); // Для отладки
        console.log('Adding class to .menu-root elements...'); // Для отладки
        
        // Добавляем класс "menu-level--opened" ко всем элементам с классом "menu-root"
        document.querySelectorAll('.menu-root').forEach(menuRoot => {
            console.log(`Adding class to element: ${menuRoot}`); // Для отладки
            menuRoot.classList.add("menu-level--opened");
        });

        // Если есть элемент с классом "menu-level", открываем его
        const menuLevel = e.querySelector(".menu-level");
        if (menuLevel) {
            menuLevel.classList.add("menu-level--opened");
            const parentUl = e.parentNode;
            if (parentUl.nodeName === "UL") {
                parentUl.classList.remove("first-layer");
            }
        }
    }
};

// Функция для удаления класса у всех элементов меню
const closeAllMenuLevels = () => {
    console.log('Closing all menu levels...'); // Для отладки
    document.querySelectorAll('.menu-root').forEach(menuRoot => {
        menuRoot.classList.remove("menu-level--opened");
    });
    document.querySelectorAll('.menu-level').forEach(menuLevel => {
        menuLevel.classList.remove("menu-level--opened");
    });
};

// Функция для логирования взаимодействия с меню
const logMenuInteraction = (e) => {
    const classList = e.classList;
    if (classList.contains("menu-btn-back")) {
        const backLabel = e.querySelector(".menu-btn-back__label");
        const parentItem = e.parentElement.querySelector(".regua-navegacao-menu-item");
        if (backLabel && parentItem) {
            console.log(`back | ${parentItem.textContent} > ${backLabel.textContent}`);
        }
    } else if (classList.contains("is-father")) {
        console.log(`navegacao | ${getBreadcrumb(e)}`);
    } else {
        const itemTitle = e.querySelector(".menu-item-title").textContent;
        const parentBreadcrumb = getBreadcrumb(e.parentElement.parentElement);
        console.log(`links clicaveis | ${parentBreadcrumb ? `${parentBreadcrumb} > ${itemTitle}` : itemTitle}`);
    }
};

// Функция для получения хлебных крошек
const getBreadcrumb = (e) => {
    const breadcrumbs = [e.querySelector(".menu-item-title").textContent];
    let currentElement = e;
    while (currentElement && currentElement.id !== "menu-cascade") {
        if (currentElement.classList.contains("is-father")) {
            const backLabel = currentElement.querySelector(".menu-btn-back__label");
            if (backLabel) {
                breadcrumbs.push(backLabel.textContent);
            }
        }
        currentElement = currentElement.parentNode;
    }
    return breadcrumbs.reverse().join(" > ");
};

// Открытие меню
burgerMenuButton.addEventListener('click', () => {
    menuCurtain.classList.add('menu-curtain--opened', 'menu-curtain--animate');
    menuContainer.style.display = 'block';
    body.classList.add('menu--no-scroll');
    menuContentOverlay.classList.toggle("active");

    // Обработчики кликов по элементам меню
    document.querySelectorAll('.menu-item').forEach(item => {
        item.removeEventListener('click', handleMenuItemClick);
        item.removeEventListener('click', logMenuInteraction);
        item.addEventListener('click', () => {
            handleMenuItemClick(item);
            logMenuInteraction(item);
        });
    });

    if (menuRounder) {
        menuRounder.classList.add('menu-rounder--opened-all');
    }
});

// Закрытие меню
const closeMenu = () => {
    menuContentOverlay.classList.remove("active");
    menuCurtain.classList.remove('menu-curtain--opened', 'menu-curtain--animate');
    body.classList.remove('menu--no-scroll');
    menuContainer.style.display = 'none';
    if (menuRounder) {
        menuRounder.classList.remove('menu-rounder--opened-all');
    }
    closeAllMenuLevels(); // Закрыть все уровни меню при закрытии меню
};

// Закрытие меню при клике вне него
document.addEventListener('click', (event) => {
    if (!menuContainer.contains(event.target) && !burgerMenuButton.contains(event.target)) {
        closeMenu();
    }
});

// Закрытие меню при клике на ссылки
document.querySelectorAll('a').forEach(item => {
    item.addEventListener('click', closeMenu);
});

// Обработчики для стрелок и кнопок "назад"
document.querySelectorAll('.is-father').forEach(arrow => {
    arrow.removeEventListener('click', toggleTransform);
    arrow.addEventListener('click', toggleTransform);
});

document.querySelectorAll('.menu-btn-back__icon').forEach(backArrow => {
    backArrow.removeEventListener('click', toggleTransformBack);
    backArrow.addEventListener('click', toggleTransformBack);
});
