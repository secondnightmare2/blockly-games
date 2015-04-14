/**
* Blockly Games: Meclab
/**
* @author weifen@mijotech.net
*/
'use strict';
goog.provide('Meclab');
goog.require('Meclab.soy');
goog.require('Meclab.Blocks');
goog.require('BlocklyDialogs');
goog.require('BlocklyGames');
goog.require('BlocklyInterface');
goog.require('goog.math');
BlocklyGames.NAME = 'Meclab';
/**
* Initialize Blockly and the Meclab. Called on page load.
*/
Meclab.init = function() {
// Render the Soy template.
document.body.innerHTML = Meclab.soy.start({}, null,
{lang: BlocklyGames.LANG,
html: BlocklyGames.IS_HTML});
BlocklyInterface.init();
var rtl = BlocklyGames.isRtl();
var blocklyDiv = document.getElementById('blockly');
var onresize = function(e) {
blocklyDiv.style.width = (window.innerWidth - 20) + 'px';
blocklyDiv.style.height =
(window.innerHeight - blocklyDiv.offsetTop - 15) + 'px';
};
onresize();
window.addEventListener('resize', onresize);
Blockly.inject(document.getElementById('blockly'),
{toolbox: document.getElementById('toolbox')});
};
window.addEventListener('load', Meclab.init);