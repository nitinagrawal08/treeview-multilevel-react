import React from 'react';
import dataSource from './playground/dataSource'
import './styles/index.scss'
import utils from './components/utils'
import {TreeView} from './Treeview'
import axios from 'axios'

//sample config which can be used to convert data source in treeview friendly format
const config={
        'children':'my-datasource-children-key',
        'key':'my-datasource-key-or-id',
        'value':'my-datasource-display-value' //if display value and id are same ignore this
      }
export default class App extends React.PureComponent {
	constructor(props) {
    super(props)
    
    this.state = {
      selected: null,
      data:utils.getTreeViewObj(dataSource, {children: 'childrens'}) //use UTILS to convert your data to treeview friendly format
    }
  }
  nodeClick= (key)=> {
  	this.setState({'selected': key})
  }

  
  render() {
  	return (
    	<div>
    		<TreeView dataSource={this.state.data} nodeClick={this.nodeClick}/>
    		{this.state.selected && <div>
    			selected value: <span>{this.state.selected}</span>
    		</div>
    		}
    	</div>
    );
  }
}
