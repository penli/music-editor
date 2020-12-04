(this["webpackJsonpmusic-editor"]=this["webpackJsonpmusic-editor"]||[]).push([[0],{25:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var o,i,s,a,r,c=n(0),d=n(1),u=n.n(d),l=n(14),f=n.n(l),m=(n(25),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,49)).then((function(t){var n=t.getCLS,o=t.getFID,i=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),o(e),i(e),s(e),a(e)}))}),p=n(18),g=n(15),h=n(16),v=n(19),b=n(17),y=n(6),x=n(3);!function(e){e[e.Edit=0]="Edit",e[e.Split=1]="Split",e[e.View=2]="View"}(o||(o={})),function(e){e.Down="mousedown",e.Move="mousemove",e.Up="mouseup"}(i||(i={})),function(e){e.ColumnResizer="column-resizer",e.Editor="editor",e.EditorContainer="editor-container",e.Header="header",e.MusicEditor="music-editor",e.View="view",e.PrintButton="print-button"}(s||(s={})),function(e){e.Dragging="dragging",e.NoSelection="no-selection"}(a||(a={})),function(e){e.Mode="mode"}(r||(r={}));var M=[{type:o.Edit,label:"Edit",css:"edit"},{type:o.Split,label:"Split",css:"split"},{type:o.View,label:"View",css:"view"}],j=!1,w=new Map,E={mode:M[1],text:"options scale=1.0\n\ntabstave notation=true tablature=false\nnotes ",success:!1},S=function(e){Object(v.a)(n,e);var t=Object(b.a)(n);function n(e){var o;return Object(g.a)(this,n),(o=t.call(this,e)).editorKit=void 0,o.note=void 0,o.componentDidMount=function(){o.configureEditorKit(),o.configureResizer()},o.saveNote=function(){o.editorKit.onEditorValueChanged(o.state.text)},o.handleInputChange=function(e){var t=e.target.value;o.setState({text:t},(function(){o.saveNote(),o.state.mode!==M[0]&&o.renderMusic()}))},o.renderMusic=function(){var e=document.getElementById(s.View);e&&(e.innerHTML="");var t=x.Vex.Flow.Renderer,n=new t(e,t.Backends.SVG),i=new x.Artist(10,10,600,{scale:.8}),a=new x.VexTab(i);try{a.parse(o.state.text),i.render(n),o.state.success||o.setState({success:!0})}catch(r){o.setState({success:!1},(function(){if(e){e.innerHTML=r+'<br/><br/><hr/><br/>Need help? Check out the <a href="https://vexflow.com/vextab/tutorial.html" target="_blank" rel="nofollow noreferrer noopener">VexTab Tutorial</a>.'}}))}},o.loadSavedMode=function(){try{var e=o.editorKit.internal.componentManager.componentDataValueForKey(r.Mode);j,e&&o.setModeFromModeType(e),o.setState({platform:o.editorKit.internal.componentManager.platform},(function(){j}))}catch(t){j}},o.setModeFromModeType=function(e){var t,n=Object(p.a)(M);try{for(n.s();!(t=n.n()).done;){var i=t.value;if(i.type===e)return o.logDebugMessage("setModeFromModeType mode: ",i.type),void o.setState({mode:i},(function(){o.renderMusic()}))}}catch(s){n.e(s)}finally{n.f()}},o.changeMode=function(e){o.setState({mode:e},(function(){o.renderMusic()})),o.logDebugMessage("changeMode mode: ",e.type);try{o.editorKit.internal.componentManager.setComponentDataValueForKey(r.Mode,e.type)}catch(t){j}},o.removeSelection=function(){var e=window.getSelection();e&&e.removeAllRanges()},o.configureResizer=function(){var e=document.getElementById(s.MusicEditor),t=document.getElementById(s.Editor),n=document.getElementById(s.ColumnResizer),r=!1,c=0;n&&(c=n.offsetWidth),t&&n&&n.addEventListener(i.Down,(function(e){r=!0,n.classList.add(a.Dragging),t.classList.add(a.NoSelection)})),document.addEventListener(i.Move,(function(i){if(r){var s=i.clientX;e&&(s<c/2+15?s=c/2+15:s>e.offsetWidth-c-15&&(s=e.offsetWidth-c-15));var a=s-c/2;n&&(n.style.left=a+"px"),t&&(t.style.width=a-15+"px"),o.removeSelection()}})),document.addEventListener(i.Up,(function(e){r&&(r=!1,n&&n.classList.remove(a.Dragging),t&&t.classList.remove(a.NoSelection))}))},o.onKeyDown=function(e){w.set(e.key,!0),!w.get("Shift")&&w.get("Tab")?(e.preventDefault(),document.execCommand("insertText",!1,"\t")):w.get("Control")&&w.get("s")&&e.preventDefault()},o.onKeyUp=function(e){w.delete(e.key)},o.onBlur=function(){w.clear()},o.logDebugMessage=function(e,t){j},o.print=function(){o.renderMusic(),window.print()},o.state=E,o}return Object(h.a)(n,[{key:"configureEditorKit",value:function(){var e=this,t=new y.EditorKitDelegate({setEditorRawText:function(t){e.setState({text:t},(function(){e.state.text||e.setState({text:E.text}),e.renderMusic(),e.loadSavedMode()}))},clearUndoHistory:function(){},getElementsBySelector:function(){return[]}});this.editorKit=new y.EditorKit({delegate:t,mode:"plaintext",supportsFilesafe:!1})}},{key:"render",value:function(){var e=this;return Object(c.jsxs)("div",{className:"sn-component "+this.state.platform,id:s.MusicEditor,tabIndex:0,children:[Object(c.jsxs)("div",{id:s.Header,children:[Object(c.jsx)("div",{className:"segmented-buttons-container sk-segmented-buttons",children:Object(c.jsx)("div",{className:"buttons",children:M.map((function(t){return Object(c.jsx)("button",{onClick:function(){return e.changeMode(t)},className:"sk-button button "+(e.state.mode===t?"selected info":"sk-secondary-contrast"),children:Object(c.jsx)("div",{className:"sk-label",children:t.label})})}))})}),Object(c.jsx)("button",{className:"sk-button button sk-secondary-contrast",id:s.PrintButton,onClick:function(){return e.print()},children:Object(c.jsx)("div",{className:"sk-label",children:"Print"})})]}),Object(c.jsxs)("main",{id:s.EditorContainer,className:this.state.mode.css,children:[Object(c.jsx)("textarea",{autoCapitalize:"false",autoComplete:"false",className:this.state.mode.css,dir:"auto",id:s.Editor,onBlur:this.onBlur,onChange:this.handleInputChange,onKeyDown:this.onKeyDown,onKeyUp:this.onKeyUp,spellCheck:"false",value:this.state.text}),Object(c.jsx)("div",{className:this.state.mode.css,id:s.ColumnResizer}),Object(c.jsx)("section",{className:this.state.mode.css+(this.state.success?" success":""),id:s.View,tabIndex:0})]})]})}}]),n}(d.Component);n(47);f.a.render(Object(c.jsx)(u.a.StrictMode,{children:Object(c.jsx)(S,{})}),document.getElementById("root")),m()}},[[48,1,2]]]);
//# sourceMappingURL=main.f45419bf.chunk.js.map