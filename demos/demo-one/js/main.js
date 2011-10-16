
(function($){

	// forgot where I grabbed this average function 
	Array.prototype.avg = function() {
		var av = 0;
		var cnt = 0;
		var len = this.length;
		for (var i = 0; i < len; i++) {
			var e = +this[i];
			if(!e && this[i] !== 0 && this[i] !== '0') e--;
			if (this[i] == e) {av += e; cnt++;}
		}
		return av/cnt;
	}

	var minval = 0;
	var maxval = 0;

	sampleRate = 120; // how fast should the number be refreshed from the network and redrawn on screen?
	threshold = 1; // a fake number for demo purposes, lower than the threshold triggers visualization
	boxmax = 300; // limit the box size
	boxratio = 2; // multiply the box height if necessary
	queueSize = 10; // quick running average size for demo
	debug = false; // output debug info to console.log?
	data = new Array; //  array to store samples for average/threshold

	
	var refreshId = setInterval(function() {

		var minval = parseFloat($("#minval").text());
		var maxval = parseFloat($("#maxval").text());

		sample = $.random(2143) + 160;
		uv = parseFloat((sample - 1200) / 5.53).toFixed(1);
		height = uv;
		


		if (uv < minval) { $("#minval").text(uv); }
		if (uv > maxval) { $("#maxval").text(uv); }
		

		if (height > boxmax) { height = boxmax; } // cap the height of the box

		if (debug == true) {
			console.log(data);
		}
		if (data.length > queueSize) { 
			data.pop(); 
		}


		var average = Math.round(data.avg()).toFixed(2);
		
		$("#timeval").html(uv);
		$("#avgval").html(average);



		$("#box").animate({
			height: height * boxratio + "px",
			// width: height * boxratio + "px"
			}, sampleRate);
		$("#avg").animate({
			height: average * boxratio + "px"
			}, sampleRate);			
		
		if (average < threshold) {
			$("#reward").css("background-color", "orange");
		} else {
			$("#reward").css("background-color", "white");
		}

		data.unshift(height);
		
	}, sampleRate);


})(jQuery);
