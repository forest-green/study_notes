/*
 * @Description: promise形式的操作
 * @Author: dongzhiwen
 * @since: 2021-04-07 12:55:57
 * @LastAuthor: dongzhiwen
 * @lastTime: 2021-04-07 13:04:26
 */

const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://42.192.130.44:27017/";

MongoClient.connect(url).then(coon => {
  console.log('数据库已经链接');
  const test = coon.db('load').collection('testData');
  test.insertOne({'site': 'test-data.com'}).then(res => {
    return test.find().toArray().then(arr => {
      console.log(arr);
      
    })
  }).then(res => {
    return test.updateMany({ "site": "runoob.com" },
    { $set: { "site": "example.com" } })
  }).then(res => {
    return test.find().toArray().then(arr => {
      console.log(arr);
      
    })
  }).then(() => {
    return test.deleteMany({site: 'https://www.google.com'});
  }).then(res => {
    return test.find().toArray().then(arr => {
      console.log(arr);
    })
  }).catch(err => {
    console.log('数据操作失败' + err.message);
  }).finally(()=> {
    coon.close()
  })
  
}).catch(err => {
  console.log('数据库连接失败');
  
})