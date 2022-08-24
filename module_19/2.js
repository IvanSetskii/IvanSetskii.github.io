let thereIsProperty;

function proFun(name, obj) {
    return thereIsProperty = name in obj;
}

const property = {
    a: "protoProperty"
}

const any = Object.create(property);
any.b = 10;
any.c = "string";
any.d = true;

proFun('a', any);
console.log(thereIsProperty)