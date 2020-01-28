/*
    装饰器:装饰器是一种特殊类型的声明，它能够被附加到类声明，方法，属性或参数上，可以修改类的行为。
    通俗的讲装饰器就是一个方法，可以注入到类、方法、属性参数上来扩展类、属性、方法、参数的功能。

    常见的装饰器有：类装饰器、属性装饰器、方法装饰器、参数装饰器

    装饰器的写法：普通装饰器（无法传参） 、 装饰器工厂（可传参）

    装饰器是过去几年中js最大的成就之一，已是Es7的标准特性之一
*/

//1、类装饰器：类装饰器在类声明之前被声明（紧靠着类声明）。 类装饰器应用于类构造函数，可以用来监视，修改或替换类定义。 传入一个参数

//1.1 类装饰器:普通装饰器（无法传参）
/*
    function logClass(target: any) {
        console.log(target);
        // target 就是当前类
        target.prototype.apiUrl = '动态扩展的属性';
        target.prototype.run = function () {
            console.log('我是一个run方法');
        }
    }

    @logClass
    class HttpClient {
        constructor() {
        }
        getData() {

        }
    }
    var http: any = new HttpClient();
    console.log(http.apiUrl);
    http.run();
*/

//1.2 类装饰器:装饰器工厂（可传参）
/*
    function logClass(params: string) {
        return function (target: any) {
            console.log(target); //当前类
            console.log(params); //装饰器参数
            target.prototype.apiUrl = params;
        }
    }

    @logClass('http://www.itying.com/api')
    class HttpClient {
        constructor() {
        }

        getData() {

        }
    }

    var http: any = new HttpClient();
    console.log(http.apiUrl);
*/


/*
    1、类装饰器 
    下面是一个重载构造函数的例子。
    类装饰器表达式会在运行时当作函数被调用，类的构造函数作为其唯一的参数。
    如果类装饰器返回一个值，它会使用提供的构造函数来替换类的声明。
*/
/*
    function logClass(target: any) {
        console.log(target);
        return class extends target {
            apiUrl: any = '我是修改后的数据';
            getData() {
                this.apiUrl = this.apiUrl + '----';
                console.log(this.apiUrl);
            }
        }
    }

    @logClass
    class HttpClient {
        public apiUrl: string | undefined;
        constructor() {
            this.apiUrl = '我是构造函数里面的apiUrl';
        }
        getData() {
            console.log(this.apiUrl);
        }
    }

    var http = new HttpClient();
    http.getData();

*/

/*
    2、属性装饰器
        属性装饰器表达式会在运行时当作函数被调用，传入下列2个参数：
            1、对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
            2、成员的名字。
*/


//类装饰器
function logClass(params: string) {
    return function (target: any) {
        // console.log(target);
        // console.log(params);       
    }
}

//属性装饰器
function logProperty(params: any) {
    return function (target: any, attr: any) {
        console.log(target);
        console.log(attr);
        target[attr] = params;
    }
}
@logClass('xxxx')
class HttpClient {
    @logProperty('http://itying.com') 
    public url: any | undefined;
    constructor() {
    }
    getData() {
        console.log(this.url);
    }
}
var http = new HttpClient();
http.getData();


/*
    3、方法装饰器
        它会被应用到方法的 属性描述符上，可以用来监视，修改或者替换方法定义。

        方法装饰会在运行时传入下列3个参数：
            1、对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
            2、成员的名字。
            3、成员的属性描述符。
*/



/*
    4、方法参数装饰器
        参数装饰器表达式会在运行时当作函数被调用，传入下列3个参数：

            1、对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
            2、参数的名字。
            3、参数在函数参数列表中的索引。
*/





