/*
 * JQuery Random Plugin
 * 
 * Adds two random number functions to jQuery -
 * one to find a random number and one to find a random number between a max and min limit.
 * 
 * Version 1.0
 * 
 * by Christian Bruun - 23. jan 2009
 * 
 * Like it/use it? Send me an e-mail: rockechris@rockechris.com
 * 
 * License: None. Use and abuse. Comes with no warranty, of course!
 * 
 * 
 * Usage:
 * $.random(int);
 * $.randomBetween(min, max);
 * 
 * Code found at:
 * http://www.merlyn.demon.co.uk/js-randm.htm
 * 
 */
jQuery.extend({
	random: function(X) {
	    return Math.floor(X * (Math.random() % 1));
	},
	randomBetween: function(MinV, MaxV) {
	  return MinV + jQuery.random(MaxV - MinV + 1);
	}
});
