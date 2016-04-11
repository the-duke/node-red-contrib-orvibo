node-red-contrib-orvibo
========================

A collection of <a href="http://nodered.org" target="_new">Node-RED</a> nodes to send and receive home automation
commands and data using an
[Orvibo Allone WiFi smart remote remote](http://www.orvibo.com/product_30.html)
home automation controller. Also compatible with the other Orvibo Devices.

Install
-------

Use npm to install this package locally in the Node-RED data directory (by default, `$HOME/.node-red`):

	cd $HOME/.node-red
	npm install node-red-contrib-orvibo

Alternatively, it can be installed globally:

    npm install -g node-red-contrib-orvibo

The nodes will be added to the palette the next time node-RED is started.

Nodes included in the package
-----------------------------

**allone-ir-in** Receives IR messages from 'allone' devices such as remote controls

**allone-ir-out** Sends messages to 'allone' devices to emits IR commands. Use this node to control IR receivers.
