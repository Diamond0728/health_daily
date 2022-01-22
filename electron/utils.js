module.exports = {
  fireKeyEvent: function (element, evtType, keyChar) { // 模拟键盘输入
		element.focus();
		var KeyboardEventInit = {key:keyChar, code:"", location:0, repeat:false, isComposing:false};
		var evtObj = new KeyboardEvent(evtType, KeyboardEventInit);
		element.dispatchEvent(evtObj);
	},

  sleep: async function (ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }
}