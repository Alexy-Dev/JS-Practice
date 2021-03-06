import checkNumInputs from './checkNumInputs';

const forms = (state) => {
    const form = document.querySelectorAll('form'),         //получаем эллементы, которые понадобятся
          inputs = document.querySelectorAll('input');

    checkNumInputs('input[name="user_phone"]');

    // phoneInputs.forEach(item => {
    //     item.addEventListener('input', () => {
    //         item.value = item.value.replace(/\D/, '');    //простая проверка на не число
    //     });
    // });

    const message = {                                       //объект с сообщениями для пользователя
        loading: 'Loading...',
        success: ' Thank you! Soon we will send to you.',
        failure: 'Something error...'
    };

    const postData = async (url, data) => {                             //функция отправки асинхронного запроса, если запросов несколько, то они выносятся в файл сервисов.
        document.querySelector('.status').textContent = message.loading;
        let res = await fetch(url, {
            method: "POST",
            body: data
        });
        return await res.text();
    };
    const clearInputs = () => {
        inputs.forEach(item => {
            item.value = '';                    //способ очистить инпуты после отправки
        });
    };

    form.forEach( item => {                     //перебираем все формы и навешиваем обработчик события.
        item.addEventListener('submit', (e) => {
            e.preventDefault();                 //чтобы не перегружать страницу

            let statusMessage = document.createElement('div');  //создаем форму для показа сообщений
            statusMessage.classList.add('status');
            item.appendChild(statusMessage);

            const formData = new FormData(item);            //собираем данные введенные в форму пользователем
            if (item.getAttribute('data-calc') === "end") { //в html добавляем атрибут формы data-calc="end" для добавления данных в форму пользователя и проверяем та ли это форма
                for (let key in state) {                    //добавляем данные из формы в отправляемую форму пользователя для записи в стейт
                    formData.append(key, state[key]);
                }
            }

            postData('assets/server.php', formData)         //отправляем запрос на сервер
            .then(res => {
                console.log(res);
                statusMessage.textContent = message.success;
            })
            .catch(() => statusMessage.textContent = message.failure)
            .finally(() => {
                clearInputs();
                setTimeout(() => {
                    statusMessage.remove();
                },  5000);
            });




        });
    });

};

export default forms;