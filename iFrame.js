/* global Module */

/* Magic Mirror
 * Module: iFrame
 *
 * By Ben Williams http://desertblade.com
 * MIT Licensed.
 */

Module.register("iFrame",{
		// Default module config.
		defaults: {
				height:"300px",
				width:"100%"
		},


	// Override dom generator.
	getDom: function() {
        var div = document.createElement("div")
        div.style = "height:" + this.config.divheight + ";overflow:hidden"
		var iframe = document.createElement("iframe");
		iframe.style = "border:0"
		iframe.width = this.config.width;
		iframe.height = this.config.height;
		iframe.src =  this.config.url;
        div.appendChild(iframe)
		return div;
	}

});
