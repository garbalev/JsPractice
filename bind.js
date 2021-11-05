//1/simple func bind(using .bind)

function simpleBind(func, context, ...args) {
  return func.bind(context, ...args);
}

//

//2/ func bind(bound only arguments)

function bindArgs(func, ...args) {
  return function (...param) {
    return func(...args, ...param);
  };
}

function logPerson(name, mood, num) {
  return `My name is: '${name}', i am: '${mood}', my nums are: '${num}'`;
}

const logPersonSasha = bindArgs(logPerson, "Sasha");
console.log(logPersonSasha("Baddd", "3392432454"));

function sumNum(a, b, c) {
  let sumBound = `${a} + ${b} + ${c}`;
  return sumBound;
}

const summaAB = bindArgs(sumNum, "10");
console.log(summaAB("30", "20"));

//3/ func bind(bound args & context)

let objForBind = {
    name: 'Alexander',
    age: 'twenty',
    mood: 'superCool',
};

let objForBind2 = {
    name: 'Sasha',
    age: 'twentyOne',
    mood: 'notBad',
}

function funcForBind(arg1, arg2) {
    return `Name: ${this.name}, age: ${this.age}, mood: ${this.mood}, arg1: ${arg1}, arg2: ${arg2}`;
}

function bindArgsAndContext(func, context, ...args) {
  return function (...param) {
    const contextKey = Date.now().toString();
    context[contextKey] = func;
    // console.log(context[contextKey]());
    let newFunc = context[contextKey];
    return context[contextKey](...args, ...param);
  };
}

const boundArg1 = bindArgsAndContext(funcForBind, objForBind2, 'аргумент1');
alert(boundArg1('аргумент2'));
