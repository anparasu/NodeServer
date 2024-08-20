const routes = (app) => {
    app.route('/contact').get((req, res) => {
        res.send('Get request succesful')
    }).post((req, res) => {
        res.send('POst request succesful')
    })

    app.route('/contact/:contact').put((req, res) => {
        res.send('Put request succesful')
    }).delete((req, res) => {
        res.send('Delete request succesful')
    })
};

export default routes;