function* gen(num) {
    for(let i = 0; i< num; i++) {
        yield i;
    }
}

const iter = gen(5);
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());


let companies = ['apple', 'samsung', 'huawei', 'xiaomi']

const phones = {
    values: companies,
    [Symbol.iterator]() {
        let i = 0;
        return {
            next: () => {
                const value = this.values[i];
                i++;
                return {
                    done: i >this.values.length,
                    value
                }
            }
        }
    }
}

let phonesArray = [];

for (let phone of phones) {
    phonesArray.push(phone);
}
// console.log(phonesArray);