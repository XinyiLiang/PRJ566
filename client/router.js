const { Router } = require('express');
const router = Router();

router.get('/test', async (req, res) => {
    result = await getTesting();
    res.json({
        result
    });
});



router.post('/login', async (req, res) => {
    username = req.body.username;
    password = req.body.password;
    result = await getUserInfo(username, password);
    status = 'rejected';
    role = null;
    first_name = null;
    if (result.length > 0) {
        status = 'granted';
        role = result[0].role;
        first_name = result[0].first_name;
    }
    res.json({
        status,
        first_name,
        role
    });
 });

module.exports = router;