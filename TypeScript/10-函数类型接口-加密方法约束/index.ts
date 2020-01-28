// 加密的函数类型接口

interface encrypt {
    (key: string, value: string): string;
}

var md5: encrypt = function (key: string, value: string): string {
    //模拟操作
    return key + value;
}

console.log(md5('name', 'zhangsan'));

var sha1: encrypt = function (key: string, value: string): string {
    //模拟操作
    return key + '----' + value;
}

console.log(sha1('name', 'lisi'));