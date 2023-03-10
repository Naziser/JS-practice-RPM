    // Функция принимает массив и фильтрующую функцию и должна вернуть true или false
    // Функция должна вернуть true только если fn вернула true для всех элементов массива
    // Необходимо выбрасывать исключение в случаях:
    // - array не массив или пустой массив (с текстом "empty array")
    // - fn не является функцией (с текстом "fn is not a function")
    // Запрещено использовать встроенные методы для работы с массивами

function trueFunc(arr, fn) {
    let success = 0;
    let failure = 0;

    if ((arr.length === 0) || (!Array.isArray(arr))){
        throw new Error('empty array');
    } else if (typeof fn !== 'function') {
        throw new Error('fn is not a function');
    } else {
        for (let i = 0; i < arr.length; i++) {
            let checker = fn(arr[i]);
            if (checker == true) {
                success++;
            } else if (checker == false) {
                failure++;
            }
            if (success === arr.length){
                return true;
            } else if (failure > 0) {
                return false;
            }
        }
    }
}
