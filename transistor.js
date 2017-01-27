var Transistor = require('transistor');

new Transistor({
    debug:true,
    routes: [
        {
            path: '/',
            template: 'index.html',
        },
        {
            path: '/projects/:slug',
            template: 'projects/projects.html',
             model: 'projects.*'
        }
    ]
});

