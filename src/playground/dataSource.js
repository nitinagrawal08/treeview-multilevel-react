let dataSource = [
  {
    level: 0, 
    key: "fruits",
    value: "fruits",
    collapsed: false,
    parentPath: "fruits",
    childrens: [{
      level: 1, 
      key: "Apple",
      value: "Apple",
      parentPath: "fruits-->>Apple"
    },
    {
      level: 1, 
      key: "Orange",
      value: "Orange",
      parentPath: "fruits-->>Orange",
      collapsed: false,
      childrens: [{
        level: 2,
        key: "sweet",
        value: "sweet",
        parentPath: "fruits-->>Orange-->>sweet",
        collapsed: false,
        childrens:[{
          level: 3,
          key: "happy",
          value: "happy",
          parentPath: "fruits-->>Orange-->>sweet-->>happy"
        }]
      },
      {
        level: 2,
        key: "soure",
        value: "soure",
        parentPath: "fruits-->>Orange-->>soure"
      }
      ]
    }]
  },
  {
    level: 0, 
    key: "vegis",
    value: "vegis",
    collapsed: false,
    parentPath: "vegis",
    childrens: [{
      level: 1, 
      key: "potato",
      value: "potato",
      parentPath: "vegis-->>potato"
    },
    {
      level: 1, 
      key: "cauli",
      value: "cauli",
      parentPath: "vegis-->>cauli"
    },{
      level: 1, 
      key: "tolli",
      value: "tolli",
      parentPath: "vegis-->>tolli"
    }]
  }
  
];

export default dataSource