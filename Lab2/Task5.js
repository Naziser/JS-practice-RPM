    // Функция должна перебрать все дочерние элементы элемента where
    // и вернуть массив, состоящий из тех дочерних элементов
    // следующим соседом которых является элемент с тегом P
    // Рекурсия - по желанию
    // @param {Element} where - где искать
    // @return {Array<Element>}

function func(where) {
    var child = where.children;
    var arr = [];
    for (let i = 0; i < child.length - 1; i++) {
        if (child[i].nextElementSibling.nodeName === 'P') {
            arr.push(child[i]);
        }
    }
    return arr;
}
