'use strict';
var defaultMenuItems = [
    { title: 'Sair', url: '/', icon: 'fas fa-sign-out-alt' }
];

var asideMenu = {};
asideMenu.renderMenu = function (menuItems) {
    menuItems = (menuItems || []).concat(defaultMenuItems);

    var asideMenu = document.getElementsByTagName('aside-menu')[0] || {};
    asideMenu.innerHTML = `
        <aside>
            <nav class="aside-menu">
                <ul>
                    ${ menuItems.map(function(i) { return createMenuItem(i) }).join('') }
                </ul>
            </nav>
        </aside>
    `
    
    function createMenuItem(config) {
        return `
            <li title="${config.title}">
                <a href="${config.url}"><i class="${config.icon}"></i></a>
            </li>
        `
    }
}
