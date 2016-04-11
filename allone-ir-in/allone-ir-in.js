/*
    Copyright (c) 2016, Thomas Herzog
    All rights reserved.
    Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following
    conditions are met:
    1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following
    disclaimer.
    2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following
    disclaimer in the documentation and/or other materials provided with the distribution.
    THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR
    IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
    FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR
    CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
    DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
    DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
    CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE
    USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

var NODE_NAME = "allone-ir-in";
/*
var connectionTest = function (orvibo) {
	
	// Four timers for repeating messages, as UDP doesn't guarantee delivery
	// These timers are cancelled once
	var timer1 // This timer is used for discovering devices
	var timer2 = [] // This timer is used to subscribe to a device
	var timer3 = [] // This timer is used to query a device
	var timer4 = [] // This timer is used to toggle a socket or learn / emit IR
	
	// We've listened, and now we're ready to go.
	orvibo.on("ready", function() {
	  timer1 = setInterval(function() { // Set up a timer to search for sockets every second until found
	    orvibo.discover()
	  }, 1000)
	})

	// A device has been found and added to our list of devices
	orvibo.on("deviceadded", function(device) {
	  clearInterval(timer1) // Clear our first timer, as we've found at least one socket
	  orvibo.discover() // Ask around again, just in case we missed something
	  timer2[device.macAddress] = setInterval(function() { // Set up a new timer for subscribing to this device. Repeat until we get confirmation of subscription
	    orvibo.subscribe(device)
	  }, 1000)
	})

	// We've asked to subscribe (control) a device, and now we've had a response.
	// Next, we will query the device for its name and such
	orvibo.on("subscribed", function(device) {
	  clearInterval(timer2[device.macAddress]) // Stop the second subscribe timer for this device
	  timer3[device.macAddress] = setInterval(function() { // Set up another timer, this time for querying
	    orvibo.query({
	      device: device, // Query the device we just subscribed to
	      table: "04" // See PROTOCOL.md for inforvibo. "04" = Device info, "03" = Timing info
	    })
	  }, 1000)
	})

	// Our device has responded to our query request
	orvibo.on("queried", function(device, table) {
	  clearInterval(timer3[device.macAddress]) // Stop the query timer
	  if (device.type == "Socket") { // If this is a socket
	    timer4[device.macAddress] = setInterval(function() { // Set up another timer that toggles the state of the unit every 5 seconds
	      orvibo.setState({
	        device: device,
	        state: !device.state // The inverse of the current state
	      })
	    }, 5000)
	  } else if (device.type == "AllOne") { // If we've got an AllOne instead
	    orvibo.enterLearningMode(device) // Put it into learning mode
	  }
	})

	orvibo.on("statechangeconfirmed", function(device) {
	  console.log("Socket %s confirming state change to", device.macAddress, device.state)
	})

	orvibo.on("ircode", function(device, ir) { // We've learned some IR

	  setTimeout(function() {
	    orvibo.emitIR({
	      device: device,
	      ir: ir
	    })
	  }, 2000)

	})

	// The AllOne has a button on top of it. A short press will
	// generate this event. Useful for programming sequences of commands etc.
	orvibo.on("buttonpress", function(device) {
	  setTimeout(function() { // After 2 seconds, emit some RF to turn a lightswitch on
	    orvibo.emitRF({
	      device: device,
	      state: true,
	      rfid: "22a3d4"
	    })
	  }, 2000)
	})

	orvibo.listen()
};*/

module.exports = function (RED) {
    "use strict";
    //var Orvibo = require("node-orvibo");
    //var o = new Orvibo();
    //connectionTest(o);
    
    // Set the allone-ir-in debug option from the environment variable
    /*var debugOption = {};
    if (process.env.hasOwnProperty("RED_DEBUG") && process.env.RED_DEBUG.indexOf(NODE_NAME) >= 0) {
        debugOption = {debug: true};
    }*/
    
    function constructNode(config) {
        RED.nodes.createNode(this, config);
        var node = this;
        this.on('input', function(msg) {
            msg.payload = msg.payload.toLowerCase();
            node.send(msg);
        });
    }
    
    RED.nodes.registerType(NODE_NAME, constructNode);
};
