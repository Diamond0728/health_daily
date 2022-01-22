const request = require('request');
const cheerio = require('cheerio')
const dayjs = require('dayjs')
const yestoday = dayjs().subtract(1, 'day').add(1,'hour')

const username = ""
const password = ""
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
      username,
      password,
      'enter': 'true'
    }
  };
  request(options, (error, response) => {
    if (error) throw new Error(error);
    console.log('logined: ' );
    console.log(response)
    
  });

}

main().then(() => {
  console.log('done')
  // process.exit(0)
}).catch(err => {
  console.log(err)
  // process.exit(-1)
})