document.addEventListener('DOMContentLoaded', function () {
  // Обработчик кликов для открытия меню
  const burgerMenuButton = document.querySelector('.menu-area');
  const menuCurtain = document.getElementById('menu-curtain');
  const body = document.body;
  const menuContainer = document.getElementById('menu-container');
  const menuContentOverlay = document.getElementById('menu-content-overlay');
  const menuRounder = document.getElementById('menu-rounder');
  const menuCascade = document.getElementById('menu-cascade');

  burgerMenuButton.addEventListener('click', () => {
    menuCurtain.classList.add('menu-curtain--opened', 'menu-curtain--animate');
    menuContainer.style.display = 'block';
    body.classList.add('menu--no-scroll');
    menuContentOverlay.classList.toggle('active');

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

  // Функция закрытия меню
  const closeMenu = () => {
    menuContentOverlay.classList.remove('active');
    menuCurtain.classList.remove(
      'menu-curtain--opened',
      'menu-curtain--animate'
    );
    body.classList.remove('menu--no-scroll');
    menuContainer.style.display = 'none';
    if (menuRounder) {
      menuRounder.classList.remove('menu-rounder--opened-all');
    }
    closeAllMenuLevels(); // Закрытие всех уровней меню при закрытии меню
  };

  // Закрытие меню при клике вне его
  document.addEventListener('click', event => {
    if (
      !menuContainer.contains(event.target) &&
      !burgerMenuButton.contains(event.target)
    ) {
      closeMenu();
    }
  });

  // Закрытие меню при клике на ссылки
  document.querySelectorAll('a').forEach(item => {
    item.addEventListener('click', closeMenu);
  });

  // Обработчики для стрелок и кнопок "назад"
  const menuItemArrows = document.querySelectorAll('.menu-item-arrow');
  const menuItemArrowsBack = document.querySelectorAll('.menu-btn-back__icon');

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

  menuItemArrows.forEach(arrow => {
    arrow.removeEventListener('click', toggleTransform);
    arrow.addEventListener('click', toggleTransform);
  });

  menuItemArrowsBack.forEach(backArrow => {
    backArrow.removeEventListener('click', toggleTransformBack);
    backArrow.addEventListener('click', toggleTransformBack);
  });
});

// Переменная для отслеживания текущего состояния меню
let currentState = 0;

// Обновляем трансформацию меню
const updateTransform = () => {
  const menuRounder = document.querySelector('.menu-rounder');
  const transformValues = [0, -272, -544]; // Массив трансформаций

  if (menuRounder) {
    menuRounder.style.transform = `translateX(${transformValues[currentState]}px)`;
  }
};

// Функция для обновления класса для элемента <ul> с классами "menu-root menu-level menu-level-0"
const updateParentClass = () => {
  const menuCascade = document.getElementById('menu-cascade');
  const targetElement = menuCascade.querySelector(
    'ul.menu-root.menu-level.menu-level-0'
  );

  if (targetElement) {
    if (currentState === 0) {
      targetElement.classList.add('first-layer');
    } else {
      targetElement.classList.remove('first-layer');
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
const handleMenuItemClick = e => {
  if (e.classList.contains('is-father')) {
    document.querySelectorAll('.menu-root').forEach(menuRoot => {
      menuRoot.classList.add('menu-level--opened');
    });

    // Открываем вложенное меню
    const menuLevel = e.querySelector('.menu-level');
    if (menuLevel) {
      menuLevel.classList.add('menu-level--opened');
      const parentUl = e.parentNode;
      if (parentUl.nodeName === 'UL') {
        parentUl.classList.remove('first-layer');
      }
    }
  }
};

// Функция для закрытия всех уровней меню
const closeAllMenuLevels = () => {
  document.querySelectorAll('.menu-root').forEach(menuRoot => {
    menuRoot.classList.remove('menu-level--opened');
  });
  document.querySelectorAll('.menu-level').forEach(menuLevel => {
    menuLevel.classList.remove('menu-level--opened');
  });
};

// Функция для логирования взаимодействия с меню
const logMenuInteraction = e => {
  const classList = e.classList;
  if (classList.contains('menu-btn-back')) {
    const backLabel = e.querySelector('.menu-btn-back__label');
    const parentItem = e.parentElement.querySelector(
      '.regua-navegacao-menu-item'
    );
    if (backLabel && parentItem) {
      console.log(
        `back | ${parentItem.textContent} > ${backLabel.textContent}`
      );
    }
  } else if (classList.contains('is-father')) {
    console.log(`navegacao | ${getBreadcrumb(e)}`);
  } else {
    const itemTitle = e.querySelector('.menu-item-title').textContent;
    const parentBreadcrumb = getBreadcrumb(e.parentElement.parentElement);
    console.log(
      `links clicaveis | ${
        parentBreadcrumb ? `${parentBreadcrumb} > ${itemTitle}` : itemTitle
      }`
    );
  }
};

// Функция для получения хлебных крошек (breadcrumb)
const getBreadcrumb = e => {
  const breadcrumbs = [];
  let currentElement = e;

  while (currentElement && currentElement.id !== 'menu-cascade') {
    const titleElement = currentElement.querySelector('.menu-item-title');
    if (titleElement) {
      breadcrumbs.push(titleElement.textContent);
    }
    if (currentElement.classList.contains('is-father')) {
      const backLabel = currentElement.querySelector('.menu-btn-back__label');
      if (backLabel) {
        breadcrumbs.push(backLabel.textContent);
      }
    }
    currentElement = currentElement.parentNode;
  }
  return breadcrumbs.reverse().join(' > ');
};

// Делегирование событий для элементов с классом 'is-father'
document.addEventListener('click', e => {
  const fatherElement = e.target.closest('.is-father');
  if (fatherElement) {
    toggleTransform();
    handleMenuItemClick(fatherElement);
  }
});

// Делегирование событий для кнопок "назад"
document.addEventListener('click', e => {
  const backIcon = e.target.closest('.menu-btn-back__icon');
  if (backIcon) {
    toggleTransformBack();
  }
});
