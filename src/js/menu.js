document.addEventListener('DOMContentLoaded', function () {
  const burgerMenuButton = document.querySelector('.menu-area');
  const menuCurtain = document.getElementById('menu-curtain');
  const body = document.body;
  const menuContainer = document.getElementById('menu-container');
  const menuContentOverlay = document.getElementById('menu-content-overlay');
  const menuRounder = document.getElementById('menu-rounder');


  burgerMenuButton.addEventListener('click', () => {
    menuCurtain.classList.add('menu-curtain--opened', 'menu-curtain--animate');
    menuContainer.style.display = 'block';
    body.classList.add('menu--no-scroll');
    menuContentOverlay.classList.toggle('active');

    
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
    closeAllMenuLevels();
    currentState = 0;
    
    // Обновляем позицию и классы
    updateTransform();
    updateParentClass();
  };

  
  document.addEventListener('click', event => {
    if (
      !menuContainer.contains(event.target) &&
      !burgerMenuButton.contains(event.target)
    ) {
      closeMenu();
    }
  });

  
  document.querySelectorAll('a').forEach(item => {
    item.addEventListener('click', closeMenu);
  });

 
  const menuItemArrows = document.querySelectorAll('.menu-item-arrow');
  const menuItemArrowsBack = document.querySelectorAll('.menu-btn-back__icon');

  
  const toggleTransform = () => {
    currentState = (currentState + 1) % 4;
    updateTransform();
    updateParentClass();
  };

  
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


let currentState = 0;


const updateTransform = () => {
  const menuRounder = document.querySelector('.menu-rounder');
  const transformValues = [0, -272, -544]; 

  if (menuRounder) {
    menuRounder.style.transform = `translateX(${transformValues[currentState]}px)`;
  }
};


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


const toggleTransform = () => {
  currentState = (currentState + 1) % 4;
  updateTransform();
  updateParentClass();
};


const toggleTransformBack = () => {
  currentState = (currentState - 1 + 4) % 4;
  updateTransform();
  updateParentClass();
};


const handleMenuItemClick = e => {
  if (e.classList.contains('is-father')) {
    document.querySelectorAll('.menu-root').forEach(menuRoot => {
      menuRoot.classList.add('menu-level--opened');
    });


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


const closeAllMenuLevels = () => {
  document.querySelectorAll('.menu-root').forEach(menuRoot => {
    menuRoot.classList.remove('menu-level--opened');
  });
  document.querySelectorAll('.menu-level').forEach(menuLevel => {
    menuLevel.classList.remove('menu-level--opened');
  });
};


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


document.addEventListener('click', e => {
  const fatherElement = e.target.closest('.is-father');
  if (fatherElement) {
    toggleTransform();
    handleMenuItemClick(fatherElement);
  }
});


document.addEventListener('click', e => {
  const backIcon = e.target.closest('.menu-btn-back__icon');
  if (backIcon) {
    toggleTransformBack();
  }
});
