/*
 * @Description: 链接mongoDB
 * @Author: dongzhiwen
 * @since: 2021-04-07 10:18:30
 * @LastAuthor: dongzhiwen
 * @lastTime: 2021-04-07 10:53:25
 */


const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://42.192.130.44:27017/load";
// const dbName = 'load'
// const client = new MongoClient(url);

MongoClient.connect(url,function(err, db) {
  if (err) throw err;
  console.log("数据库已创建!");
  // 如果url中包含了数据库名称，则直接调用db.db()就可以查询所链接数据库的表数据
  // 若url中没有包含数据库名，则需要在db()中添加库名，如db('testData'),则指定查询testData表下的数据
  let dbase = db.db('load');
  // let myObj = [{ name: '菜鸟工具', url: 'https://c.runoob.com', type: 'cn'},
  // { name: 'Google', url: 'https://www.google.com', type: 'en'},
  // { name: 'Facebook', url: 'https://www.google.com', type: 'en'}]
  // dbase.collection('testData').insertMany(myObj, (err, res) => {
  //   if (err) throw err;
  //   console.log('插入数据成功')
  //   db.close()
  // })
  let whereStr = {"name":'菜鸟工具'};
  // let updateStr = {$set: {url:'www.dongzhiwen.cn'}}
  // dbase.collection("testData").deleteMany(whereStr, function (err,res) {
  //   if (err) throw err
  //   db.close();
  // })
  dbase.collection("testData").find(whereStr).toArray(function(err, result) { // 返回集合中所有数据
    if (err) throw err;
    console.log(result);
    db.close();
  });
  // db.close();
});