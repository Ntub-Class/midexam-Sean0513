// 題目說明: 請建立兩個class, Animal跟Bird, Bird繼承自Animal
// Anical class說明: 有型態為string的name屬性，跟eat方法, 呼叫eat方法時請輸出 I'm {name} , I can eat~~
// Bird class說明: 有型態為string的color屬性，跟fly方法， 呼叫fly方法時請輸出 I can fly
// Bird class說明: 請複寫父類別的eat方法，呼叫Bird的eat方法時必須先印出 I override it，
//  然後再呼叫父類別的eat 輸出 I'm {name} , I can eat~~
// 最後請建立一個Bird實體，並呼叫eat跟fly方法
class Animal {
    constructor(public name: string) {
        this.name = name;
    }

    eat() {
        console.log(`I'm ${this.name} , I can eat~~`);
    }
}

class Bird extends Animal {
    public color: string = '';
    constructor(name:string){
        super(name);
    }
    fly(){
        console.log('I can fly');
    }

    eat(){
        console.log('I override it');
        super.eat();
    }
}

let myBird = new Bird('我是隻小小鳥');
myBird.eat();
myBird.fly();