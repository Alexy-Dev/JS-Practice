import checkNumInputs from './checkNumInputs';

const changeModalState = (state) => {
    const windowForm = document.querySelectorAll('.balcon_icons_img'),
          windowWidth = document.querySelectorAll('#width'),
          windowHeight = document.querySelectorAll('#height'),
          windowType = document.querySelectorAll('#view_type'),
          windowProfile = document.querySelectorAll('.checkbox');

    checkNumInputs('#width');  //валидируем данные, только числа
    checkNumInputs('#height');

    function bindActionToElems (event, elem, prop) {        //функция на определенный эллемент навязывает определенный обработчик события и записывает в определенное свойство.
        elem.forEach((item, i) => {
            item.addEventListener(event, () => {
                // if (elem.length >1) {
                //     state[prop] = i;
                // } else {
                //     state[prop] = item.value;
                // }
                // console.log(state);
                switch(item.nodeName) {                 //если элемент span записываем в стайт номер
                    case 'SPAN' :
                        state[prop] = i;
                        break;
                    case 'INPUT' :                          //если элемент input записываем в стайт:
                        if (item.getAttribute('type') === 'checkbox') {         //название checkbox
                            i === 0 ? state[prop] = "cold" : state[prop] = "warm";
                            elem.forEach((box, j) => {
                                box.checked = false;
                                if (i == j) {
                                    box.checked = true;     //убираем возможность отметить более 1 checkbox
                                }
                            });
                        } else {
                            state[prop] = item.value;       //содержимое input.value
                        }
                        break;
                    case 'SELECT' :
                        state[prop] = item.value;           //селекты также собраны на value
                        break;
                }
                // console.log(state);
            });
        });
    }

    bindActionToElems('click', windowForm, 'form');
    bindActionToElems('input', windowWidth, 'width');
    bindActionToElems('input', windowHeight, 'height');
    bindActionToElems('change', windowType, 'type');
    bindActionToElems('change', windowProfile, 'profile');

     
};

export default changeModalState;