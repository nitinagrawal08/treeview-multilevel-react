import React from "react";
import PropTypes from "prop-types";
import utils from "./utils";

const { isArray, isObject, separator } = utils
class TreeView extends React.PureComponent {
  propTypes: {};
  constructor(props) {
    super(props);

    this.state = {
      dataSource: this.props.dataSource,
      separator: this.props.separator ? this.props.separator : separator
    };
  }

  onExpandClick = event => {
    const data = event.target.dataset;
    const path = data.parentpath.split(this.state.separator);
    let dataSource = [...this.state.dataSource];
    updateNodeCollapse(dataSource, path);
    this.setState({ dataSource: dataSource });
  };
  nodeClick = event => {
    if (this.props.nodeClick) {
      const data = event.target.dataset;
      this.props.nodeClick(data["key"]);
    }
  };
  renderTreeView = (dataSource, level) => {
    if (!dataSource) {
      return;
    }
    let displayClass = "tree-view";
    if (level) {
      displayClass += ` level`;
    }
    return (
      <div className={displayClass}>
        {isArray(dataSource) &&
          dataSource.length > 0 &&
          this.renderNextLevel(dataSource)}
        {isObject(dataSource) && this.renderElement(dataSource)}
      </div>
    );
  };
  renderNextLevel = dataSource => {
    return (
      <div>
        {this.renderTreeView(dataSource[0])}
        {dataSource.length > 1 && this.renderTreeView(dataSource.slice(1))}
      </div>
    );
  };
  renderElement = dataSource => {
    let arrowClassName = "tree-view_arrow";
    if (dataSource["collapsed"]) {
      arrowClassName += " tree-view_arrow-collapsed";
    }
    return (
      <div>
        {dataSource["childrens"] &&
          <div
            className={arrowClassName}
            onClick={this.onExpandClick}
            data-key={dataSource["key"]}
            data-level={dataSource["level"]}
            data-parentPath={dataSource["parentPath"]}
          />}
        <span
          className="node"
          onClick={this.nodeClick}
          data-key={dataSource["key"]}
        >
          {dataSource["value"]}
        </span>
        
        {!dataSource["collapsed"] &&
          this.renderTreeView(dataSource["childrens"], dataSource["level"] + 1)}
      </div>
    );
  };

  render() {
    const { dataSource } = this.state;
    return (
      <div>
        {this.renderTreeView(dataSource, 0, this.onExpandClick)}
      </div>
    );
  }
}
function updateNodeCollapse(dataSource, parentPath) {
  if (isArray(dataSource)) {
    for (var i = 0; i < dataSource.length; i++) {
      let currentNode = dataSource[i];
      if (currentNode.key === parentPath[0]) {
        if (parentPath.length > 1 && currentNode.childrens) {
          updateNodeCollapse(currentNode.childrens, parentPath.slice(1));
        } else {
          currentNode["collapsed"] = !currentNode["collapsed"];
          return;
        }
      }
    }
  }
}
export default TreeView;