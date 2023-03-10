    // Функция должна перебрать все дочерние узлы элемента where
    // и удалить из него все текстовые узлы
    // Без рекурсии!
    // Будьте внимательны при удалении узлов,
    // можно получить неожиданное поведение при переборе узлов
    // @param {Element} where - где искать

function func(where) {
    var smth = where.childNodes;
    for (let i = 0; i < smth.length; i++) {
        if (smth[i].nodeType === 3) {
            smth[i].parentNode.removeChild(smth[i]);
        }
    }
}
