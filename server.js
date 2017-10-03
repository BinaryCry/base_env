import http  from 'http';
console.log(http);

class News {
    static foo(str){
        process.stdout.write(str);
    }
}

News.foo('\nstr\n');