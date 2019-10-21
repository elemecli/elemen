let Mock=require("mockjs");
Mock.mock( '/user', 'get', require('./json/data'));
Mock.mock("/aa","get",require("./json/data1.json"));
