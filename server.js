//expressモジュールの読み込み
const express = require("express");
//expressのインスタンス化
const app = express();

//!!!変数
const publicDir = __dirname + "/public/";

//8080番ポートでサーバーを待ちの状態にする。
//またサーバーが起動したことがわかるようにログを出力する
app.listen(8080, () => {
  console.log("サーバー起動中");
});

const loggerMiddleware = function (req, res, next) {
  console.log(`[${new Date()}] ${req.method} ${req.url}`);
  next();
};

app.use(express.static("public"));
app.use(loggerMiddleware);

//GETリクエストの設定
//'/get'でアクセスされた時に、JSONとログを出力するようにする
app.get("/", (req, res) => {
  // res.sendFile(publicDir + "index.html");
  console.log("GETリクエストを受け取りました");
  // res.end();
});
