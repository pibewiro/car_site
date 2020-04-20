let urls = {}
if (process.env.NODE_ENV === 'production') {
  console.log('env', process.env.NODE_ENV)
  urls.url = 'http://localhost:9000/api/v1';
} else if (process.env.NODE_ENV === 'development') {
  console.log('env', process.env.NODE_ENV)

  urls.url = 'https://carapp2020.herokuapp.com/api/v1';
  urls.url2 = 'https://carapp2020.herokuapp.com'
}

module.exports = urls;