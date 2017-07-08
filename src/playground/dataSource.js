let dataSource = [
  {
    "key": "fruits",
    "value": "fruits",
    "childrens": [{
      "key": "Apple"
    },
    {
      "key": "Orange",
      "value": "Orange",
      "childrens": [{
        "key": "variety",
        "childrens":[{
          "key": "nagpur"
        },{
          "key": "exported"
        }]
      },
      {
        "key": "size",
        "childrens":[{
          "key": 'large'
        },{
          "key": 'medium'
        },{
          "key": 'small'
        }]
      }
      ]
    }]
  },
  {
    "key": "vegis",
    "value": "vegis",
    "childrens": [{
      "key": "potato",
    },
    {
      "key": "cabbage",
    },{
      "key": "beans"
    }]
  }
]

export default dataSource