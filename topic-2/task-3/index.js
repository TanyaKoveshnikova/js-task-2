/**
 * Задача 3
 * В этой задаче вам необходимо дописать функцию,
 * которая проверяет группу на корректность
 * Функция принимает на вход строку содержащую символы (), {} или []
 * Должна вернуть True, если строка пустая или группа корректна
 * Или False, если группа неправильная
 * Правильная строка не может закрыть группу в неправильном порядке,
 * открыть группу, но не закрыть ее, или закрыть группу до ее открытия. 
 * 
 * Примеры корректных групп:
 * ([{}]), (), [], {}, {()}
 * Примеры некорректных:
 * )(), {(}), ([], [])
 * 
 * @param {*} group 
 */
function isGroup(group) {
    let correct = 0;
    const langKeys = {
        '(':')',
        '[':']',
        '{':'}'
    };
    for(let i = 0; i < group.length/ 2; i++){
        if(langKeys[group[i]] == group[group.length-i-1]){
            correct = 1;
        } else {
            return false;
        }
    }

    if(group.lenght == 0 || correct == 1){
        return true;
    }
}


module.exports.isGroup = isGroup;