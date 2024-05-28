const allowedCors = [
    'https://practicum.yandex.ru',
    'https://students-projects.ru',
    'http://localhost:3000',
    'http://localhost:3001',
	'https://18karatpindie.nomoredomainswork.ru',
    'https://18karatservera.nomoredomainswork.ru',
    'https://18karatservera.nomoredomainswork.ru/api/auth/login',
  ];

function cors(req, res, next) {
    const { origin } = req.headers;
    
    if (allowedCors.includes(origin)) { // Если это наш друг
        res.header('Access-Control-Allow-Origin', origin);
    }
    
    next();
}

module.exports = {
    cors: cors,
}