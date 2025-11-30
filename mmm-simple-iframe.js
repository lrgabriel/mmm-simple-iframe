/* global Module */

/* Magic Mirror
 * Module: iFrame
 *
 * By Ben Williams http://desertblade.com
 * MIT Licensed.
 */

Module.register("mmm-simple-iframe",{
		// Default module config.
		defaults: {
				height:"100%",
				width:"1080px"
			    divheight: "100%"
				divwidth: "1080px"
		},


	// Override dom generator.
	getDom: function() {
        var div = document.createElement("div")
        div.style = "height:" + this.config.divheight + ";overflow:hidden"
		div.style = "width:" + this.config.divwidth + ";overflow:hidden"
		var iframe = document.createElement("iframe");
		iframe.style = "border:0"
		iframe.width = this.config.width;
		iframe.height = this.config.height;
		iframe.src =  this.config.url;
        div.appendChild(iframe)
		return div;
	}

});
