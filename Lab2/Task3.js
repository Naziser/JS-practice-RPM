    // Функция имеет параметр number (по умолчанию - 0)
    // Функция должна вернуть объект, у которого должно быть несколько методов:
    // - sum - складывает number с переданными аргументами
    // - dif - вычитает из number переданные аргументы
    // - div - делит number на первый аргумент. Результат делится на следующий аргумент
    // (если передан) и так далее
    // - mul - умножает number на первый аргумент. Результат умножается на следующий
    // аргумент (если передан) и так далее
    // Количество передаваемых в методы аргументов заранее неизвестно
    // Необходимо выбрасывать исключение в случаях:
    // - number не является числом (с текстом "number is not a number")
    // - какой-либо из аргументов div является нулем (с текстом "division by 0")

function func(number = 0) {

    if (typeof number != 'number') {
        throw new Error("number is not a number");
    }
    
    const obj = {
        sum: function () {
            for (let i = 0; i < arguments.length; i++) {
                number += arguments[i];
            }
            return number;
        },
        dif: function () {
            for (let i = 0; i < arguments.length; i++) {
                number -= arguments[i];
            }
            return number;
        },
        div: function () {
            for (let i = 0; i < arguments.length; i++) {
                if (arguments[i] === 0) {
                    throw new Error("division by 0");
                }
                number /= arguments[i];
            }
            return number;
        },
        mul: function () {
            for (let i = 0; i < arguments.length; i++) {
                number *= arguments[i];
            }
            return number;
        }
    }
    return obj;
}
