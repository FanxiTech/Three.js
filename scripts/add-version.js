const fs = require('fs');
const path = require('path');

const version = require('../package.json').version;
const indexPath = '../build/index.html'

fs.readFile(indexPath, 'utf8', function (err, data) {
  if (err) {
    return console.log(err);
  }

  // 找尋 </head> 標籤
  const index = data.indexOf('</head>');
  if (index === -1) {
    return console.log('找不到 </head> 標籤');
  }

  // 插入版本號
  const versionedData = `${data.slice(0, index)}
    <script>window.VERSION="${version}";</script>
    ${data.slice(index)}`;

  // 將版本號寫入 index.html 檔案
  fs.writeFile(indexPath, versionedData, 'utf8', function (err) {
    if (err) {
      return console.log(err);
    }
    console.log('版本號已加入 index.html');
  });
});
