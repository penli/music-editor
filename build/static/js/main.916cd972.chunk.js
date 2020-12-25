(this["webpackJsonpmusic-editor"]=this["webpackJsonpmusic-editor"]||[]).push([[0],{26:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var o,i,s,a,r=n(0),c=n(1),d=n.n(c),u=n(14),l=n.n(u),m=(n(26),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,52)).then((function(t){var n=t.getCLS,o=t.getFID,i=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),o(e),i(e),s(e),a(e)}))}),f=n(19),p=n(15),v=n(16),g=n(20),h=n(18),b=n(6),y=n(3),x=n(17);!function(e){e.Mode="mode"}(o||(o={})),function(e){e.ColumnResizer="column-resizer",e.Editor="editor",e.EditorContainer="editor-container",e.Header="header",e.MusicEditor="music-editor",e.View="view",e.PrintButton="print-button"}(i||(i={})),function(e){e.Dragging="dragging",e.NoSelection="no-selection"}(s||(s={})),function(e){e[e.Edit=0]="Edit",e[e.Split=1]="Split",e[e.View=2]="View"}(a||(a={}));var M,j=[{type:a.Edit,label:"Edit",css:"edit"},{type:a.Split,label:"Split",css:"split"},{type:a.View,label:"View",css:"view"}];!function(e){e.Down="mousedown",e.Move="mousemove",e.Up="mouseup"}(M||(M={}));var w,E=!1,S={mode:j[1],success:!1,text:"options scale=1.0\n\ntabstave notation=true tablature=false\nnotes "},T=new Map,C=function(e){Object(g.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(p.a)(this,n),(a=t.call(this,e)).editorKit=void 0,a.note=void 0,a.saveTimer=void 0,a.componentDidMount=function(){a.configureEditorKit(),a.configureResizer()},a.configureEditorKit=function(){var e=new b.EditorKitDelegate({setEditorRawText:function(e){a.setState({text:e},(function(){a.state.text||a.setState({text:S.text}),a.renderMusic(),a.loadSavedMode()}))},clearUndoHistory:function(){},getElementsBySelector:function(){return[]}});a.editorKit=new b.EditorKit({delegate:e,mode:"plaintext",supportsFilesafe:!1})},a.saveNote=function(e){try{a.editorKit.onEditorValueChanged(e)}catch(t){console.log("Error saving note:",t)}},a.handleInputChange=function(e){var t=e.target.value;a.saveText(t)},a.saveText=function(e){a.saveNote(e),a.setState({text:e},(function(){a.state.mode!==j[0]&&(a.saveTimer&&clearTimeout(a.saveTimer),Object(x.debounce)((function(){a.renderMusic()}),300),a.saveTimer=setTimeout((function(){a.renderMusic()}),350))}))},a.renderMusic=function(){try{var e=document.getElementById(i.View);e&&(a.state.success&&(w=e.scrollTop),e.innerHTML="");var t=y.Vex.Flow.Renderer,n=new t(e,t.Backends.SVG),o=new y.Artist(10,10,600,{scale:.8});new y.VexTab(o).parse(a.state.text),o.render(n),a.state.success||a.setState({success:!0}),e&&(e.scrollTop=w)}catch(s){a.setState({success:!1},(function(){var e=document.getElementById(i.View);if(e){e.innerHTML=s+'<br/><br/><hr/><br/>Need help? Check out the <a href="https://vexflow.com/vextab/tutorial.html" target="_blank" rel="nofollow noreferrer noopener">VexTab Tutorial</a>.'}}))}},a.loadSavedMode=function(){try{var e=a.editorKit.internal.componentManager.componentDataValueForKey(o.Mode);E,"number"===typeof e&&a.setModeFromModeType(e),a.setState({platform:a.editorKit.internal.componentManager.platform},(function(){E}))}catch(t){E}},a.setModeFromModeType=function(e){var t,n=Object(f.a)(j);try{for(n.s();!(t=n.n()).done;){var o=t.value;if(o.type===e)return a.logDebugMessage("setModeFromModeType mode: ",o.type),void a.setState({mode:o},(function(){a.renderMusic()}))}}catch(i){n.e(i)}finally{n.f()}},a.changeMode=function(e){a.setState({mode:e},(function(){a.renderMusic()})),a.logDebugMessage("changeMode mode: ",e.type);try{a.editorKit.internal.componentManager.setComponentDataValueForKey(o.Mode,e.type)}catch(t){E}},a.removeSelection=function(){var e=window.getSelection();e&&e.removeAllRanges()},a.configureResizer=function(){var e=document.getElementById(i.MusicEditor),t=document.getElementById(i.Editor),n=document.getElementById(i.ColumnResizer),o=!1,r=0;n&&(r=n.offsetWidth),t&&n&&n.addEventListener(M.Down,(function(e){o=!0,n.classList.add(s.Dragging),t.classList.add(s.NoSelection)})),document.addEventListener(M.Move,(function(i){if(o){var s=i.clientX;e&&(s<r/2+15?s=r/2+15:s>e.offsetWidth-r-15&&(s=e.offsetWidth-r-15));var c=s-r/2;n&&(n.style.left=c+"px"),t&&(t.style.width=c-15+"px"),a.removeSelection()}})),document.addEventListener(M.Up,(function(e){o&&(o=!1,n&&n.classList.remove(s.Dragging),t&&t.classList.remove(s.NoSelection))}))},a.onBlur=function(){T.clear()},a.onFocus=function(e){},a.onKeyDown=function(e){T.set(e.key,!0),!T.get("Shift")&&T.get("Tab")?(e.preventDefault(),document.execCommand("insertText",!1,"\t")):T.get("Control")&&T.get("s")&&e.preventDefault()},a.onKeyUp=function(e){T.delete(e.key)},a.logDebugMessage=function(e,t){E},a.print=function(){a.renderMusic(),window.print()},a.state=S,a}return Object(v.a)(n,[{key:"render",value:function(){var e=this;return Object(r.jsxs)("div",{className:"sn-component "+this.state.platform,id:i.MusicEditor,tabIndex:0,children:[Object(r.jsxs)("div",{id:i.Header,children:[Object(r.jsx)("div",{className:"segmented-buttons-container sk-segmented-buttons",children:Object(r.jsx)("div",{className:"buttons",children:j.map((function(t){return Object(r.jsx)("button",{onClick:function(){return e.changeMode(t)},className:"sk-button button "+(e.state.mode===t?"selected info":"sk-secondary-contrast"),children:Object(r.jsx)("div",{className:"sk-label",children:t.label})})}))})}),Object(r.jsx)("button",{className:"sk-button button sk-secondary-contrast",id:i.PrintButton,onClick:function(){return e.print()},children:Object(r.jsx)("div",{className:"sk-label",children:"Print"})})]}),Object(r.jsxs)("main",{id:i.EditorContainer,className:this.state.mode.css,children:[Object(r.jsx)("textarea",{autoCapitalize:"false",autoComplete:"false",className:this.state.mode.css,dir:"auto",id:i.Editor,onBlur:this.onBlur,onChange:this.handleInputChange,onKeyDown:this.onKeyDown,onKeyUp:this.onKeyUp,spellCheck:"false",value:this.state.text}),Object(r.jsx)("div",{className:this.state.mode.css,id:i.ColumnResizer}),Object(r.jsx)("section",{className:this.state.mode.css+(this.state.success?" success":""),id:i.View,tabIndex:0})]})]})}}]),n}(d.a.Component);n(50);l.a.render(Object(r.jsx)(d.a.StrictMode,{children:Object(r.jsx)(C,{})}),document.getElementById("root")),m()}},[[51,1,2]]]);
//# sourceMappingURL=main.916cd972.chunk.js.map