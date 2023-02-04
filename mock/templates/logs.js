module.exports = [
  {
    url: '/api/get_list',
    type: 'POST',
    response: req => {
      return {
        r: 0,
        e: '',
        data: []
      }
    }
  }
]
