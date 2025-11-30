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
				refreshInterval: 60000
		},


    start: function() {
        if (this.config.refreshInterval <= 0) {
            return;
        }

        var self = this;
        setInterval(function() {
                document.getElementById('fancy-iframe').src += '';
        }, this.config.refreshInterval);
    },

	// Override dom generator.
	getDom: function() {
        var div = document.createElement("div")
        div.style = "height:" + this.config.divheight + ";overflow:hidden"
		var iframe = document.createElement("iframe");
		iframe.style = "border:0"
		iframe.id = 'fancy-iframe';
		iframe.width = this.config.width;
		iframe.height = this.config.height;
		iframe.src =  this.config.url;
        div.appendChild(iframe)
		return div;
	}

});
