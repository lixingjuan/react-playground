import { useEffect } from "react";
import PouchDB from "pouchdb";

const db = new PouchDB("dbname");

const urlsArr = ["http://www.taobao.com/list"];

const targetUrl = "https://api.juejin.cn/user_api/v1/author/recommend*";

/**
 * @desc 发送请求前的拦截逻辑
 * 1. 判断本地是否有该数据
 * 2. 如果有，则直接返回数据，并取消请求
 */
const intercepeBeforeRequest = () => {
  chrome.webRequest.onBeforeRequest.addListener(
    (request) => {
      console.log({ request });
      const { url } = request;
      db.get(url).then((res: any) => {
        console.log({ res });
      });
    },
    {
      urls: urlsArr,
    },
    ["responseHeaders"]
  );
};

const initFunc = function () {
  intercepeBeforeRequest();

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

  db.get("juejin_list").then((res: any) => {
    console.log({ res });
  });
};

export default initFunc;
