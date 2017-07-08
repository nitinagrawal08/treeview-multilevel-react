## This is a simple light weight treeview react component. 

You can render any level of child components similar to directory structure. A callback is available to handle node click (select) of any level. 

![](http://imgur.com/gBU2bGV.png)

## How to use the component:

	//import TreeView and utils method
	import {TreeView, utils} from './Treeview'
	
	//Translate your DataSource
	const myDataSource = {
		id: 1,	//Mandatory
		val: 1, //optional
		childs: [{
		....
		}]
	}
	const treeViewDS = utils.getTreeViewObj(myDataSource,{
			"Key": "id",
			"value": "val",
			"childrens": "childs"})

	....

	//render TreeView by passing and action method for click on nodes
	<TreeView dataSource={treeViewDS} nodeClick={this.nodeClick}/>


## Data format accepted by TreeView
	[
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


