    // Функция принимает заранее неизвестное количество аргументов, первым из которых
    // является функция fn
    // Функция должна поочередно запусти fn для каждого переданного аргумента (кроме
    // самой fn)
    // Функция должна вернуть массив аргументов, для которых fn выбросила исключение
    // Необходимо выбрасывать исключение в случаях:
    // - fn не является функцией (с текстом "fn is not a function")

function func(fn) {
    var storage = new Array();
    var str = '';
    if (typeof fn != 'function') {
        throw new Error("fn is not a function");
    }
    for (let i = 1; i < arguments.length; i++) {
        try {
            str = fn(arguments[i]);
        } catch (e) {
            storage.push(arguments[i]);
        }
    }
    return storage;
}
    