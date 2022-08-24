function proFun(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(key + ": " + obj[key]);
        }
    }
}

const man = {
    name: "Джун",
    patronymic: "Миддлович",
    surname: "Синьёров"
}

const property = Object.create(man);
property.age = 32;
property['growth'] = 185;

proFun(property);