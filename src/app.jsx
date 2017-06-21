import React from 'react';
import dataSource from './playground/dataSource'
import './styles/index.scss'
import utils from './components/utils'
import {TreeView} from './Treeview'



export default class App extends React.PureComponent {
	constructor(props) {
    super(props)
    this.state = {
      selected: null,
      data:utils.getTreeViewObj(dataSource) //use UTILS to convert your data to treeview friendly format
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
