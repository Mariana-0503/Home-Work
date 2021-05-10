//Создать массив аудиторий академии. Объект-аудитория состоит из названия, 
//количества посадочных мест (от 10 до 20) и названия факультета, для которого 
//она предназначена. Написать несколько функций для работы с ним^

// Вывод на экран всех аудиторий;
// Вывод на экран аудиторий для указанного факультета;
// Вывод на экран только тех аудиторий, которые подходят для переданной группы. 
//Объект-группа состоит из названия, количества студентов и названия факультета;
// Функция сортировки аудиторий по количеству мест;
// Функция сортировки аудиторий по названию (по алфавиту)
function Auditory(name = '', placesCount = 10, fakultet = '') {
    this.name = name;
    this.placesCount = placesCount;
    if (placesCount < 10) {
        this.placesCount = 10;
    }
    if (placesCount > 20) {
        this.placesCount = 20;
    }
    this.fakultet = fakultet;
};
function Group(name = '', studentsCount = 0, fakultet = '') {
    this.name = name;
    this.studentsCount = studentsCount;
    this.fakultet = fakultet;
}
​
let auditoryArray = [
    new Auditory('№1', 15, 'ФІКТ'),
    new Auditory('№2', 20, 'ФЕМ'),
    new Auditory('№3', 11, 'ФІКТ'),
    new Auditory('№4', 17, 'МІ'),
    new Auditory('№5', 19, 'МА'),
    new Auditory('№6', 8, 'МІ'),
];
​
function log(auditories) {
    auditories.forEach(function({ name, placesCount, fakultet }) {
        console.log(`Аудиторія: ${name}`);
        console.log(`Кількість місця: ${placesCount}`);
        console.log(`Факультутет: ${fakultet}`);
        console.log('');
    });
}
​
function logForFakultet(auditories, fakultet) {
    let filteredAuditories = auditories.filter(function(auditory) {
        return auditory.fakultet === fakultet;
    });
    if (filteredAuditories.length > 0) {
        log(filteredAuditories);
    } else {
        console.log('Аудиторії такого факультету не існує');
    }
}
​
function logForGroup(auditories, group) {
    let filteredAuditories = auditories.filter(function(auditory) {
        return auditory.fakultet === group.fakultet
            && auditory.placesCount >= group.studentsCount;
​
    });
    if (filteredAuditories.length > 0) {
        log(filteredAuditories);
    } else {
        console.log('Аудиторії для такої групи не існує');
    }
}
​
let groupPI55 = new Group('PI55', 14, 'ФІКТ');
let groupMA204 = new Group('MA204', 20, 'МА');
​
logForGroup(auditoryArray, groupMA204);
​
// auditoryArray.sort(function(auditory1, auditory2) {
//     if (auditory1.placesCount < auditory2.placesCount) {
//         return 1;
//     }
//     return -1;
// });
auditoryArray.sort(function(auditory1, auditory2) {
    if (auditory1.name < auditory2.name) {
        return 1;
    }
    return -1;
});
​
console.log(auditoryArray);