const nameUndefined = {
    name: 'OBJECTE1',
    sayHello: function() {
        setTimeout(function() {
            alert(this);
        })
    }
}
// nameUndefined.sayHello();

const nameDefinedWithAssignedThis = {
    name: 'OBJECTE2',
    sayHello: function() {
        const oldThis = this;
        setTimeout(function() {
            alert(oldThis.name);
        })
    }
}
// nameDefinedWithAssignedThis.sayHello();

const nameDefinedWithArrowFunc = {
    name: 'OBJECTE3',
    sayHello: function() {
        setTimeout(() => {
            alert(this.name);
        })
    }
}
// nameDefinedWithArrowFunc.sayHello();

const object11 = {

}

function argumentsUndefined() {
    return function() {
        alert(arguments);
    }
}

// argumentsUndefined()('arg1','arg2')

function argumentsDefined() {
    return () => {
        console.log(arguments);
    }
}

// argumentsDefined('arg1','arg2')()


function hey1 () {
    console.log(this);
}


const hey2 = () => {
    console.log(this);
}

hey1();
hey2();


