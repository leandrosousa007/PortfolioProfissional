const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.nav-links');

function closeMenu() {
    if (!menuButton || !navigation) return;
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Abrir menu');
    navigation.classList.remove('is-open');
    document.body.classList.remove('menu-open');
}

if (menuButton && navigation) {
    menuButton.addEventListener('click', () => {
        const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
        menuButton.setAttribute('aria-expanded', String(!isOpen));
        menuButton.setAttribute('aria-label', isOpen ? 'Abrir menu' : 'Fechar menu');
        navigation.classList.toggle('is-open', !isOpen);
        document.body.classList.toggle('menu-open', !isOpen);
    });

    navigation.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') closeMenu();
    });
    window.addEventListener('resize', () => {
        if (window.innerWidth > 760) closeMenu();
    });
}

const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px' });
    revealItems.forEach((item) => observer.observe(item));
} else {
    revealItems.forEach((item) => item.classList.add('is-visible'));
}

const spellForm = document.getElementById('spell-form');
const spellList = document.getElementById('spell-list');

function updateEmptyState() {
    if (!spellList) return;
    const hasSpells = spellList.querySelector('tr:not(.empty-state)');
    if (!hasSpells && !spellList.querySelector('.empty-state')) {
        const row = document.createElement('tr');
        row.className = 'empty-state';
        const cell = document.createElement('td');
        cell.colSpan = 3;
        cell.textContent = 'Sua lista está vazia.';
        row.appendChild(cell);
        spellList.appendChild(row);
    }
}

if (spellForm && spellList) {
    spellForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const spellInput = document.getElementById('fet');
        const levelInput = document.getElementById('nvl');
        const spell = spellInput.value.trim();
        const level = levelInput.value.trim();
        if (!spell || !level) return;

        spellList.querySelector('.empty-state')?.remove();
        const row = document.createElement('tr');
        const spellCell = document.createElement('td');
        const levelCell = document.createElement('td');
        const actionCell = document.createElement('td');
        const removeButton = document.createElement('button');
        spellCell.textContent = spell;
        levelCell.textContent = level;
        removeButton.type = 'button';
        removeButton.className = 'remove-spell';
        removeButton.setAttribute('aria-label', `Remover ${spell}`);
        removeButton.textContent = '×';
        removeButton.addEventListener('click', () => {
            row.remove();
            updateEmptyState();
        });
        actionCell.appendChild(removeButton);
        row.append(spellCell, levelCell, actionCell);
        spellList.appendChild(row);
        spellForm.reset();
        spellInput.focus();
    });
}

const year = document.getElementById('current-year');
if (year) year.textContent = new Date().getFullYear();
