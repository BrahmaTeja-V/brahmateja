var url=require('url');
var adr='https://www.facebook.com/default.html';
var q=url.parse(adr,true);
console.log(q.host);
console.log(q.pathname);

var qdata=q.query;
console.log(qdata.month);