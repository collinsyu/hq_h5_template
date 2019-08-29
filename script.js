var fs = require("fs");
var path = require("path");


var rootPath = path.join(__dirname);
var _rootPath = rootPath+"/dist"

readDirSync(_rootPath)

function readDirSync(path){
	var pa = fs.readdirSync(path);
	var _arr = []
	pa.forEach(function(ele,index){
		var info = fs.statSync(path+"/"+ele)
		if(info.isDirectory()){
			// console.log(">>>>>>>>>>>>>>>>>>>>>>>> dir: "+ele)

			readDirSync(path+"/"+ele);
		}else{
			var _traget_js = ele.match(/umi\..*\.js$/);
			var _traget_css = ele.match(/umi\..*\.css$/);

			if(_traget_js){
				var _new_name_js = ele.replace(/(umi\.)(.*)(\.js)$/ig,"umi.js")
				fs.renameSync(path+"/"+ele,path+"/"+_new_name_js);
			}
			if(_traget_css){
				var _new_name_css = ele.replace(/(umi\.)(.*)(\.css)$/ig,"umi.css")
				fs.renameSync(path+"/"+ele,path+"/"+_new_name_css);
			}

		}
	});
	// console.log("read end");

}
