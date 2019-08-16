/*
 * @Description: Do not edit
 * @Author: dongzhiwen
 * @since: 2019-08-15 09:19:56
 * @LastAuthor: Do not edit
 * @lastTime: 2019-08-16 09:51:34
 */

var str = `<pre>
<ol>
<li><pre>begin began begun bigins begining</pre></li>
<li><pre>google gooogle goooogle goooooogle</pre></li>
<li><pre>coloured color coloring  colouring colored</pre></li>
<li><pre>never ever verb however everest</pre></li>
<li><pre>520 52000 5200000 520000000 520000000000</pre></li>
<li><pre>error wonderer achroiocythaemia achroiocythemia</pre></li>
<li><pre>The white dog wears a black hat.</pre></li>
<li><pre>Handel, Händel, Haendel</pre></li>
</ol>
<dl>(843) 542-4256</dl> <dl>(431) 270-9664</dl>
<dl>3336741162</dl> <dl>3454953965</dl>
<ul>
<li>peoplesr@live.com</li> <li>jaxweb@hotmail.com</li>
<li>dhwon@comcast.net</li> <li>krueger@me.com</li>
</ul>
<h3>URLs</h3>
https://docs.python.org/3/howto/regex.html
https://docs.python.org/3/library/re.html
<h3>passwords</h3>
Pasw0rd~
i*Eh,GF67E
a$4Bh9XE&E
<h3>duplicate words</h3>
<p>It's very very big.</p>
<p>Keep it simple, simple, simple!</p>
</pre>`


// var rgex = /\d{3}-\d{4}/g;
// var rgex = /beg[aiu]n/g;
// var rgex = /go*gle/g;
// var rgex = /colou*r?/g;
// var rgex = /[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|(10|20|30|31))\d{3}[0-9Xx]/g;
// var rgex = /[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|(10|20|30|31))\d{2}[0-9Xx]/g;
var rgex = /1[3-9]\d{9}/g;

/**
 * search 返回的是下标
 * [] 里面是或的语法
 * * 匹配符号前的字符出现的次数 >= 0
 * + 匹配符号前的字符出现的次数 >= 1
 * g 遍历所需要验证的字符串之后返回一个数组
 */
console.log(str.match(rgex))