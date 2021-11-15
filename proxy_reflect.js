let dictionary = {
    'Hello': 'Привет',
    'Bye' : 'Пока',
    'Good' : 'Хорошо',
}

dictionary = new Proxy(dictionary, {
    get(target, phrase, receiver) {
        if (phrase in target) {
            return Reflect.get(target, phrase, receiver);
        } else {
            const denial = `Нет перевода '${phrase}'`;
            return denial;
        }
    },
    set() {
        alert('Forbidden')
    }
})


// dictionary['Bye'] = 'hhhh';
// alert(dictionary.Good)

/// Reflect

class Stud {
    constructor(name) {
        this.name = name;
    }
    greet() {
        alert(this.name);
    }
}


const stud1 = Reflect.construct(Stud, ['ALEx']);




