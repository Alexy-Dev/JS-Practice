import "./slider";
import modals from './modules/modals';
import tabs from './modules/tabs';
import forms from './modules/forms';
import changeModalState from './modules/changeModalState';
import timer from './modules/timer';

window.addEventListener('DOMContentLoaded', () => {
    "use strict";

    let modalState = {};        //объект состояния модального окна, где пользователь что-то выбирает
    let deadline = '2021-12-05';

    changeModalState(modalState);

    modals();                                       //все действия с модальными окнами скрыты внутри данной функции
    tabs('.glazing_slider','.glazing_block', '.glazing_content', 'active');
    tabs('.decoration_slider','.no_click', '.decoration_content > div > div', 'after_click');  //> div > div - строгое соответствие
    tabs('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline-block');
    forms(modalState);  //добавляем данные стейта аргументом в форму пользователя
    timer('.container1', deadline);
});