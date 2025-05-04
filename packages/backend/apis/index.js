// 本地开发使用
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

// 使用 JSON 解析中间件
app.use(bodyParser.json());

// 模拟一个简单的用户数据（在实际生产环境中，你应该使用数据库）
const users = [
  { email: 'dummy@email.com', password: 'password' }, // 示例用户
  { email: 'user@example.com', password: 'password123' },
];

// 启用 CORS，允许来自 http://localhost:3000 http://localhost:3002的请求
const allowedOrigins = ['http://localhost:3000', 'http://localhost:3002'];

app.use(
  cors({
    origin: function (origin, callback) {
      // 允许无 origin 的请求（如 curl）
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      } else {
        return callback(new Error('Not allowed by CORS'));
      }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  })
);

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// 登录 API
app.post('/api/login', (req, res) => {
  const { email, password } = req.body; // 前端发送的是 username 和 password

  // 验证用户名和密码
  const user = users.find((u) => u.email === email && u.password === password);

  if (user) {
    return res.json({ success: true, message: 'Login successful' });
  } else {
    return res
      .status(401)
      .json({ success: false, message: 'Invalid username or password' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
