const Koa = require('koa');

const app = new Koa();

// context => ctx
app.use((ctx) => {
    const { path = '/' } = ctx;

    if (path === '/user/123') {
        ctx.body = '返回用户123的信息';
    }

    if (path === '/settings') {
        ctx.body = '返回一些设置的信息';
    }

});

app.listen(3000, () => {
    console.log('启动成功');
});