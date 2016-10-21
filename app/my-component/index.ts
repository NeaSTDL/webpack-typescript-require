declare function require(name:string);
var exportedModules = {
	Something: require("my-component/Something")
};
export default exportedModules;