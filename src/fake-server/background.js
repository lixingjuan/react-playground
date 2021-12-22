// 需要拦截的接口
const targetUrl = "https://api.juejin.cn/user_api/v1/author/recommend*";

var db = new PouchDB("dbname");

// 发送前拦截
chrome.webRequest.onheader.addListener(
  function (list) {
    db.put({
      _id: "juejin_list",
      data: list,
    });

    console.log("onHeadersReceived", list); //请求baidu .png文件时会拦截
    return list;
  },
  // { urls: ["*://*.baidu.com/*.png*"] },
  { urls: [targetUrl] },
  ["responseHeaders", "blocking"]
);

// 返回数据
chrome.webRequest.onHeadersReceived.addListener(
  function (list) {
    db.put({
      _id: "juejin_list",
      data: list,
    });

    console.log("onHeadersReceived", list); //请求baidu .png文件时会拦截
    return list;
  },
  // { urls: ["*://*.baidu.com/*.png*"] },
  { urls: [targetUrl] },
  ["responseHeaders", "blocking"]
);

// db.put({
//   _id: "dave@gmail.com",
//   name: "David",
//   age: 69,
// });

// db.changes().on("change", function () {
//   console.log("Ch-Ch-Changes");
// });

db.get("juejin_list").then((res) => {
  console.log({ res });
});
