const personGenerator = {
    surnameJson: `{  
        "count": 16,
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
        "count": 11,
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
            "id_10": "Андрей",
            "id_11": "Евгений"
        }
    }`,

    firstNameFemaleJson: `{
        "count": 11,
        "list": {
            "id_1": "Анна",
            "id_2": "Мария",
            "id_3": "Елена",
            "id_4": "Кристина",
            "id_5": "Татьяна",
            "id_6": "Вероника",
            "id_7": "Екатерина",
            "id_8": "Светлана",
            "id_9": "Ирина",
            "id_10": "Анастасия",
            "id_11": "Полина"
        }
    }`,
    
    patronymicJson: `{
        "count": 12,
        "list": {
            "id_1": "Александрович",
            "id_2": "Максимович",
            "id_3": "Иванович",
            "id_4": "Артемович",
            "id_5": "Дмитриевич",
            "id_6": "Никитич",
            "id_7": "Михайлович",
            "id_8": "Даниилович",
            "id_9": "Егорович",
            "id_10": "Андреевич",
            "id_11": "Евгеньевич",
            "id_12": "Ильич"
        }
    }`,
    
    /*
    patronymicJson: `{
        "count": 2,
        "list": {
            "id_1": "Никитич",
            "id_2": "Ильич"
        }
    }`,
    */

    professionMaleJson: `{
        "count": 14,
        "list": {
            "id_1": "Слесарь",
            "id_2": "Солдат",
            "id_3": "Шахтёр",
            "id_4": "Сварщик",
            "id_5": "Механик",
            "id_6": "Токарь",
            "id_7": "Электрик",
            "id_8": "Плотник",
            "id_9": "Пожарный",
            "id_10": "Нефтяник",
            "id_11": "Капитан воздушного судна",
            "id_12": "Капитан дальнего плавания",
            "id_13": "Нелегал-разведчик || 🚫 Top Secret! 🚫",
            "id_14": "Хоккеист"
        }
    }`,

    professionFemaleJson: `{
        "count": 10,
        "list": {
            "id_1": "Медсестра",
            "id_2": "Воспитатель",
            "id_3": "Библиотекарь",
            "id_4": "Швея",
            "id_5": "Парикмахер",
            "id_6": "Косметолог",
            "id_7": "Флорист",
            "id_8": "Секретарь",
            "id_9": "Бухгалтер",
            "id_10": "Учительница"
        }
    }`,

    professionUniversalJson: `{
        "count": 11,
        "list": {
            "id_1": "Программист",
            "id_2": "Врач",
            "id_3": "Преподаватель",
            "id_4": "Менеджер",
            "id_5": "Юрист",
            "id_6": "Экономист",
            "id_7": "Дизайнер",
            "id_8": "Психолог",
            "id_9": "Журналист",
            "id_10": "Повар",
            "id_11": "Блогер"
        }
    }`,

    monthsJson: `{
        "count": 12,
        "list": {
            "id_1": "января",
            "id_2": "февраля",
            "id_3": "марта",
            "id_4": "апреля",
            "id_5": "мая",
            "id_6": "июня",
            "id_7": "июля",
            "id_8": "августа",
            "id_9": "сентября",
            "id_10": "октября",
            "id_11": "ноября",
            "id_12": "декабря"
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;
        return obj.list[prop];
    },

    randomGender: function() {
        return this.randomIntNumber(1, 0) === 0 ? this.GENDER_MALE : this.GENDER_FEMALE;
    },

    randomFirstName: function() {
        const firstNameMale = this.randomValue(this.firstNameMaleJson);
        const firstNameFemale = this.randomValue(this.firstNameFemaleJson);
        if (this.person.gender === this.GENDER_MALE) {
            return firstNameMale;
        } else {
            return firstNameFemale;
        }
    },

    randomSurname: function() {
        const surname = this.randomValue(this.surnameJson);
        if (this.person.gender === this.GENDER_FEMALE) {
            return surname + 'а';
        } else {
            return surname;
        }
    },

    /* govno
    randomPatronymic: function() {
        const patronymic = this.randomValue(this.patronymicJson);
        if (this.person.gender === this.GENDER_FEMALE) {
            if (patronymic.endsWith('ич')) {
                return patronymic.slice(0, -2) + 'на';
            } else if (patronymic.endsWith('итна')) {
                return patronymic.replace('ична');
            }
            return patronymic + 'на';
        } else {
            return patronymic;
        }
    },
    */

    /* план Б
    randomPatronymic: function() {
        const patronymic = this.randomValue(this.patronymicJson);
        if (this.person.gender === this.GENDER_FEMALE) {
            if (patronymic.endsWith('ич')) {
                return patronymic.slice(0, -2) + 'на';
            }
            return patronymic + 'на';
        } else {
            return patronymic;
        }
    },
    */

    // норм
    randomPatronymic: function() {
    const patronymic = this.randomValue(this.patronymicJson);
        if (this.person.gender === this.GENDER_FEMALE) {
            if (patronymic.endsWith('ич' !== 'вич')) {
                return patronymic.slice(0, -2) + 'ична';
            } else if (patronymic.endsWith('вич')) {
                return patronymic.slice(0, -3) + 'вна';
            }
            return patronymic + 'на';
        } else {
            return patronymic;
        }
    },

    randomProfession: function() {
        const rand = this.randomIntNumber(2, 0);
        const professionMaleJson = this.randomValue(this.professionMaleJson);
        const professionFemaleJson = this.randomValue(this.professionFemaleJson);
        const professionUniversalJson = this.randomValue(this.professionUniversalJson);
        
        if (rand === 0) {
            return professionUniversalJson;
        } else if (this.person.gender === this.GENDER_MALE) {
            return professionMaleJson;
        } else {
            return professionFemaleJson;
        }
    },

    randomBirthDate: function() {
        const year = this.randomIntNumber(2002, 1950);
        const monthId = this.randomIntNumber(12, 1);
        const monthObj = JSON.parse(this.monthsJson);
        const monthName = monthObj.list[`id_${monthId}`];
        
        let maxDay;
        if (monthId === 2) {
            maxDay = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0) ? 29 : 28;
        } else if ([4, 6, 9, 11].includes(monthId)) {
            maxDay = 30;
        } else {
            maxDay = 31;
        }
        
        const day = this.randomIntNumber(maxDay, 1);
        
        return `${day} ${monthName} ${year} г.`;
    },

    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.surname = this.randomSurname();
        this.person.patronymic = this.randomPatronymic();
        this.person.birthDate = this.randomBirthDate();
        this.person.profession = this.randomProfession();
        return this.person;
    }
};