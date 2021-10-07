const modals = () => {
    function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {   //для того, чтобы убрать возможность закрыть модалку по клику в поле рядом добавляем селектор в позиции true
        const trigger = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              close = document.querySelector(closeSelector),
              windows = document.querySelectorAll('[data-modal]');      //для того чтобі при переходе от модалки к модалке закрівались ранее открытые окна в html добавляем селектор data-

        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }

                windows.forEach(item => {               //прописываем функционал закрытия модалки при переходе на новую модалку
                    item.style.display = 'none';
                });

                modal.style.display = "block";
                document.body.style.overflow = "hidden";
                // document.body.classList.add('modal-open');
            });
        });
        close.addEventListener('click', () => {
            windows.forEach(item => {                   //прописываем функционал закрытия модалки при переходе на новую модалку
                item.style.display = 'none';
            });

            modal.style.display = "none";
            document.body.style.overflow = "";
            // document.body.classList.remove('modal-open');
        });

        
        modal.addEventListener('click', (e) => {
            if (e.target === modal && closeClickOverlay) {
                windows.forEach(item => {                   //прописываем функционал закрытия модалки при переходе на новую модалку
                    item.style.display = 'none';
                });
                modal.style.display = "none";
                document.body.style.overflow = "";
                // document.body.classList.remove('modal-open');
            }

        });
    }

    // const callEngineerBtn = document.querySelector('.popup_engineer_btn'),
    //       modalEngineer = document.querySelector('.popup_engineer'),
    //       modalEngineerClose = document.querySelector('.popup_engineer .popup_close');

    function showModalByTime(selector, time) {
        setTimeout(() => {
            document.querySelector(selector).style.display = 'block';
            document.body.style.overflow = "hidden";
        }, time);
    }

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');                           //добавляем наборы селекторов для модальных окон с калькуляторами
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);     //для того, чтобы убрать возможность закрыть модалку по клику в поле рядом (overlay) переводим селектор в позицию false
    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
    // showModalByTime('.popup', 60000);


};

export default modals;