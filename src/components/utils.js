const isArray = item => {
	return getType(item) === "[object Array]";
};

const isObject = item => {
	return getType(item) === "[object Object]";
};

const getType = item => {
	return Object.prototype.toString.call(item);
};

const separator = '-->>'
function getTreeViewObj(dataSource, config) {
	let tempDataSource = [...dataSource];
	let treeConfig = Object.assign(
		{},
		{
			separator: separator,
			key: "key",
			value: "key",
			children: "children", 
			level: 0
		},
		config
	);
	convertTreeViewObj(tempDataSource, treeConfig);
	return tempDataSource;
}
function convertTreeViewObj(dataSource, config) {
	if (isArray(dataSource)) {
		convertTreeViewObj(dataSource[0], config);
		if (dataSource.length > 1) {
			return convertTreeViewObj(
				dataSource.slice(1),config);
		}
		return;
	}
	if (isObject(dataSource)) {
		createTreeElement(dataSource, config);
		return;
	}
}

function createTreeElement(dataSource, config) {
	var path = "";
	if (config.parentPath) {
		path = config.parentPath + config.separator;
	}
	if(!dataSource["key"]){
		dataSource["key"] = dataSource[config.key]
	}
	if(dataSource[config.children] && !dataSource["children"]){
		dataSource["children"] = dataSource[config.children]
	}
	dataSource["value"] = dataSource[config.value];
	dataSource["level"] = config.level;
	dataSource["collapsed"] = false;
	dataSource["parentPath"] = path + dataSource["key"];

	if (dataSource["children"] && dataSource["children"].length>0) {
		convertTreeViewObj(
			dataSource["children"],
			Object.assign({},config,{parentPath:dataSource['parentPath'],level: config.level+1})
		);
	}
}
export default {
	isArray,
	isObject,
	getTreeViewObj,
	separator
};
