const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,

    secondNameJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александро",
            "id_2": "Максимо",
            "id_3": "Ивано",
            "id_4": "Артемо",
            "id_5": "Дмитрие",
            "id_6": "Никито",
            "id_7": "Михайло",
            "id_8": "Даниило",
            "id_9": "Егоро",
            "id_10": "Андрее"
        }
    }`,

    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александра",
            "id_2": "Мария",
            "id_3": "Ирина",
            "id_4": "Арина",
            "id_5": "Дарья",
            "id_6": "Нина",
            "id_7": "Мила",
            "id_8": "Анна",
            "id_9": "Елена",
            "id_10": "Галина"
        }
    }`,

    profFemaleJson: `{
        "count": 10,
        "list": {     
           "id_1": "Блогерка",
            "id_2": "Писательница",
            "id_3": "Стюардесса",
            "id_4": "Медсестра",
            "id_5": "Учительница",
            "id_6": "Массажистка",
            "id_7": "Танцовщица",
            "id_8": "Врач",
            "id_9": "Швея",
            "id_10": "Крановщица"
        }
    }`,

    profMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Водитель",
            "id_2": "Врач",
            "id_3": "Военный",
            "id_4": "Слесарь",
            "id_5": "Космонавт",
            "id_6": "Спасатель",
            "id_7": "Полицейский",
            "id_8": "Строитель",
            "id_9": "Инженер",
            "id_10": "Ученый"
        }
    }`,

    monthOfJson: `{  
        "count": 12,
        "list": {
            "id_1": "Января",
            "id_2": "Февраля",
            "id_3": "Марта",
            "id_4": "Апреля",
            "id_5": "Мая",
            "id_6": "Июня",
            "id_7": "Июля",
            "id_8": "Августа",
            "id_9": "Сентября",
            "id_10": "Октября",
            "id_11": "Ноября",
            "id_12": "Декабря"
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomFirstName: function() {
        if (this.person.gender == 'Мужчина') {
        return this.randomValue(this.firstNameMaleJson);
        } else {
            return this.randomValue(this.firstNameFemaleJson);
        }
    },

    randomSurname: function() {
        if (this.person.gender == 'Мужчина') {
            return this.randomValue(this.surnameJson);
        } else {
            return this.randomValue(this.surnameJson) + 'а';
        }
    },

    randomSecondName: function() {
        if (this.person.gender == 'Мужчина') {
            return this.randomValue(this.secondNameJson) + 'вич';
        } else {
            return this.randomValue(this.secondNameJson) + 'вна';
        }
    },

    randomGender: function() {
        return Math.floor(Math.random()*2) == 1 ? this.GENDER_MALE : this.GENDER_FEMALE
    },

    randomDate: function() {
        if (this.person.monthOfBirthday == 'Января' || this.person.monthOfBirthday == 'Марта' || this.person.monthOfBirthday == 'Мая' || this.person.monthOfBirthday == 'Июля' || this.person.monthOfBirthday == 'Августа' || this.person.monthOfBirthday == 'Октября' || this.person.monthOfBirthday == 'Декабря' ) {
            return this.randomIntNumber(1, 31);
        } else if (this.person.monthOfBirthday ==  'Февраля') {
                return this.randomIntNumber(1, 28);
            } else {
                    return this.randomIntNumber(1, 30);
        }
    },

    randomMonth: function() {
        return this.randomValue(this.monthOfJson);
   },

    randomProf: function() {
        if (this.person.gender == 'Мужчина') {
            return this.randomValue(this.profMaleJson);
        } else {
            return this.randomValue(this.profFemaleJson);
        }
    },

    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.secondName = this.randomSecondName();
        this.person.surname = this.randomSurname();
        this.person.monthOfBirthday = this.randomMonth();
        this.person.dateOfBirthday = this.randomDate();
        this.person.yearOfBirthday = this.randomIntNumber(1960, 2000) + ' г. р.' ;
        this.person.professia = this.randomProf();
        return this.person;
    }
};
