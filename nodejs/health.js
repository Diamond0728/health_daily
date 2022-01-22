const request = require('request');
const cheerio = require('cheerio')
const dayjs = require('dayjs')
const yestoday = dayjs().subtract(1, 'day').add(1,'hour')

const userName = ""
const passWord = ""
const nianji = "2019级"
const banji = "计算机科学与技术1905"

async function main() {

  var options = {
    'method': 'POST',
    'url': 'https://ca.csu.edu.cn/authserver/login?service=https%3A%2F%2Fwxxy.csu.edu.cn%2Fa_csu%2Fapi%2Fcas%2Findex%3Fredirect%3Dhttps%253A%252F%252Fwxxy.csu.edu.cn%252Fncov%252Fwap%252Fdefault%252Findex%253Ffrom%253Dhistory%26from%3Dwap',
    'headers': {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    formData: {
      userName,
      passWord,
      'enter': 'true'
    }
  };
  request(options, (error, response) => {
    if (error) throw new Error(error);
    console.log('logined: ' );
    let opts = {
      url: "http://ca.its.csu.edu.cn/SysInfo/SsoService/215",
      headers: {
        'User-Agent': `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36`,
        Cookie: response.headers['set-cookie'],
      }
    };
    request(opts, (e, r, b) => {
      if (e) throw new Error(e);
      console.log('SsoService/215: ');
      let $ = cheerio.load(r.body)
      const url = $('[name="myForm"]').attr('action')
      const tokenId = $('[name="tokenId"]').val()
      const Thirdsys = $('[name="Thirdsys"]').val()
      var opts = {
        'method': 'POST',
        url,
        'headers': {
          'User-Agent': `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36`,
        },
        formData: {
          tokenId,
          account: userName,
          Thirdsys
        }
      };
      console.log('valid: ')

      request(opts, function (error, res) {
        if (error) throw new Error(error);
        console.log(res.headers['set-cookie']);
        var ops = {
          'method': 'POST',
          'url': 'https://wxxy.csu.edu.cn/ncov/wap/default/save',
          headers: {
            'Content-Type': 'application/json',
            'User-Agent': `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36`,
            Cookie: res.headers['set-cookie'], //这里是登陆后得到的cookie,(重点)
          },
          formData: {
            "jcjgqr": "0", 
            "sfjcjwggry": "0", 
            "szgjcs": "", 
            "szcs": "", 
            "szgj": "", 
            "sfcysjh": "0", 
            "dqszyqfxdj": "", 
            "dzjkmys": "", 
            "sffx": "1", 
            "nj": nianji, 
            "njqt": "", 
            "zybj": banji, 
            "xslb": "硕士研究生", 
            "sfbys": "0", 
            "cjtw": "", 
            "wjtw": "", 
            "wujtw": "", 
            "sfywcxyxd": "0", 
            "sffdypz": "0", 
            "cxsj": "", 
            "fxsj": "", 
            "cxyy": "", 
            "ddd": "", 
            "tjd": "", 
            "cxjtfs": [ ], 
            "cxjtfsqt": "", 
            "ywqtsm": "0", 
            "xxqk": "", 
            "sfjcyqzgfxdq": "0", 
            "sfjtyqzgfxdq": 0, 
            "uid": "347024", 
            "created": yestoday.unix(), 
            "date": yestoday.format('YYYYMMDD'), 
            "tw": "3", 
            "sfcxtz": "0", 
            "sfjcbh": "0", 
            "sfcxzysx": "0", 
            "qksm": "", 
            "sfyyjc": "0", 
            "remark": "", 
            "address": "湖南省长沙市岳麓区岳麓街道中南大学本部北校区计算机楼", 
            "geo_api_info": "{\"type\":\"complete\",\"info\":\"SUCCESS\",\"status\":1,\"$Da\":\"jsonp_256210_\",\"position\":{\"Q\":28.1708,\"R\":112.9314,\"lng\":112.9314,\"lat\":28.1708},\"message\":\"Get ipLocation success.Get address success.\",\"location_type\":\"ip\",\"accuracy\":null,\"isConverted\":true,\"addressComponent\":{\"citycode\":\"0731\",\"adcode\":\"430104\",\"businessAreas\":[],\"neighborhoodType\":\"\",\"neighborhood\":\"\",\"building\":\"\",\"buildingType\":\"\",\"street\":\"麓山南路\",\"streetNumber\":\"56号\",\"country\":\"中国\",\"province\":\"湖南省\",\"city\":\"长沙市\",\"district\":\"岳麓区\",\"township\":\"岳麓街道\"},\"formattedAddress\":\"湖南省长沙市岳麓区岳麓街道中南大学本部北校区计算机楼\",\"roads\":[],\"crosses\":[],\"pois\":[]}", 
            "area": "湖南省 长沙市 岳麓区", 
            "province": "湖南省", 
            "city": "长沙市", 
            "sfzx": "1", 
            "sfjcwhry": "0", 
            "sfjchbry": "0", 
            "sfcyglq": "0", 
            "gllx": "", 
            "glksrq": "", 
            "jcbhlx": "", 
            "jcbhrq": "", 
            "bztcyy": "", 
            "sftjhb": "0", 
            "sftjwh": "0", 
            "cysjh": "", 
            "jcjg": "", 
            "jcqzrq": "", 
            "sfjcqz": "", 
            "szsqsfybl": 0, 
            "sfsqhzjkk": 0, 
            "sqhzjkkys": "", 
            "sfygtjzzfj": 0, 
            "gtjzzfjsj": "", 
            "created_uid": 0, 
            "id": 15335229, 
            "gwszdd": "", 
            "sfyqjzgc": "", 
            "jrsfqzys": "", 
            "jrsfqzfy": "", 
            "ismoved": 0
          },
        };
        request(ops, function (error, response) {
          if (error) throw new Error(error);
          console.log('submit:'+response.body+ '<br>');
        });
      });
    });
  });

}

main().then(() => {
  console.log('done')
  // process.exit(0)
}).catch(err => {
  console.log(err)
  // process.exit(-1)
})