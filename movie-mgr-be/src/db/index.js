/*
const mongoose = require('mongoose');

//给哪个数据库的
//哪个集合
//添加什么格式的文档

//Schema
//Modal 可以理解成根据Schema生成的一套方法集合，这套方法用来操作MongoDB下的集合和集合下的文档

const UserSchema = new mongoose.Schema({
    nickname: String,
    password: String,
    age: Number,
});

const UserModal = mongoose.model('User', UserSchema);

const connect = () => {
    //连接数据库
    mongoose.connect('mongodb://127.0.0.1:27017/movie-mgr');


    //当数据库被打开的时候 做一些事情
    mongoose.connection.on('open', () => {
        console.log('连接成功');

        //创建文档
        const user = UserModal({
            nickname: '小明',
            password: '123456',
            age: 12
        });

        user.age = 99;

        //保存，同步到MongDB
        user.save();
    });
};

connect();
*/

const Koa = require('koa');

const app = new Koa();

app.listen(3000, () => {
    console.log('启动成功');
});

console.log('112233');