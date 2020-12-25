(this["webpackJsonpmusic-editor"]=this["webpackJsonpmusic-editor"]||[]).push([[0],{26:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var o,i,s,r,a=n(0),c=n(1),d=n.n(c),l=n(14),u=n.n(l),f=(n(26),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,52)).then((function(t){var n=t.getCLS,o=t.getFID,i=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),o(e),i(e),s(e),r(e)}))}),m=n(19),p=n(15),v=n(16),g=n(20),h=n(18),b=n(6),x=n(3),j=n(17),M=function(e){var t=e.fill,n=e.role;return Object(a.jsx)("svg",{"aria-label":"print icon",role:n,width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(a.jsx)("path",{d:"M15.0001 2.5H5.00008V5.83333H15.0001V2.5ZM15.8334 10C15.6124 10 15.4004 9.9122 15.2442 9.75592C15.0879 9.59964 15.0001 9.38768 15.0001 9.16667C15.0001 8.94565 15.0879 8.73369 15.2442 8.57741C15.4004 8.42113 15.6124 8.33333 15.8334 8.33333C16.0544 8.33333 16.2664 8.42113 16.4227 8.57741C16.579 8.73369 16.6668 8.94565 16.6668 9.16667C16.6668 9.38768 16.579 9.59964 16.4227 9.75592C16.2664 9.9122 16.0544 10 15.8334 10ZM13.3334 15.8333H6.66675V11.6667H13.3334V15.8333ZM15.8334 6.66667H4.16675C3.50371 6.66667 2.86782 6.93006 2.39898 7.3989C1.93014 7.86774 1.66675 8.50363 1.66675 9.16667V14.1667H5.00008V17.5H15.0001V14.1667H18.3334V9.16667C18.3334 8.50363 18.07 7.86774 17.6012 7.3989C17.1323 6.93006 16.4965 6.66667 15.8334 6.66667Z",fill:t||"var(--sn-stylekit-foreground-color)"})})};!function(e){e.Mode="mode"}(o||(o={})),function(e){e.ColumnResizer="column-resizer",e.Editor="editor",e.EditorContainer="editor-container",e.Header="header",e.MusicEditor="music-editor",e.View="view",e.PrintButton="print-button"}(i||(i={})),function(e){e.Dragging="dragging",e.NoSelection="no-selection"}(s||(s={})),function(e){e[e.Edit=0]="Edit",e[e.Split=1]="Split",e[e.View=2]="View"}(r||(r={}));var y,w=[{type:r.Edit,label:"Edit",css:"edit"},{type:r.Split,label:"Split",css:"split"},{type:r.View,label:"View",css:"view"}];!function(e){e.Down="mousedown",e.Move="mousemove",e.Up="mouseup"}(y||(y={}));var C,E=!1,S={mode:w[1],success:!1,text:"options scale=1.0\n\ntabstave notation=true tablature=false\nnotes "},O=new Map,T=function(e){Object(g.a)(n,e);var t=Object(h.a)(n);function n(e){var r;return Object(p.a)(this,n),(r=t.call(this,e)).editorKit=void 0,r.note=void 0,r.saveTimer=void 0,r.componentDidMount=function(){r.configureEditorKit(),r.configureResizer()},r.configureEditorKit=function(){var e=new b.EditorKitDelegate({setEditorRawText:function(e){r.setState({text:e},(function(){r.state.text||r.setState({text:S.text}),r.renderMusic(),r.loadSavedMode()}))},clearUndoHistory:function(){},getElementsBySelector:function(){return[]}});r.editorKit=new b.EditorKit({delegate:e,mode:"plaintext",supportsFilesafe:!1})},r.saveNote=function(e){try{r.editorKit.onEditorValueChanged(e)}catch(t){console.log("Error saving note:",t)}},r.handleInputChange=function(e){var t=e.target.value;r.saveText(t)},r.saveText=function(e){r.saveNote(e),r.setState({text:e},(function(){r.state.mode!==w[0]&&(r.saveTimer&&clearTimeout(r.saveTimer),Object(j.debounce)((function(){r.renderMusic()}),300),r.saveTimer=setTimeout((function(){r.renderMusic()}),350))}))},r.renderMusic=function(){try{var e=document.getElementById(i.View);e&&(r.state.success&&(C=e.scrollTop),e.innerHTML="");var t=x.Vex.Flow.Renderer,n=new t(e,t.Backends.SVG),o=new x.Artist(10,10,600,{scale:.8});new x.VexTab(o).parse(r.state.text),o.render(n),r.state.success||r.setState({success:!0}),e&&(e.scrollTop=C)}catch(s){r.setState({success:!1},(function(){var e=document.getElementById(i.View);if(e){e.innerHTML=s+'<br/><br/><hr/><br/>Need help? Check out the <a href="https://vexflow.com/vextab/tutorial.html" target="_blank" rel="nofollow noreferrer noopener">VexTab Tutorial</a>.'}}))}},r.loadSavedMode=function(){try{var e=r.editorKit.internal.componentManager.componentDataValueForKey(o.Mode);E,"number"===typeof e&&r.setModeFromModeType(e),r.setState({platform:r.editorKit.internal.componentManager.platform},(function(){E}))}catch(t){E}},r.setModeFromModeType=function(e){var t,n=Object(m.a)(w);try{for(n.s();!(t=n.n()).done;){var o=t.value;if(o.type===e)return r.logDebugMessage("setModeFromModeType mode: ",o.type),void r.setState({mode:o},(function(){r.renderMusic()}))}}catch(i){n.e(i)}finally{n.f()}},r.changeMode=function(e){r.setState({mode:e},(function(){r.renderMusic()})),r.logDebugMessage("changeMode mode: ",e.type);try{r.editorKit.internal.componentManager.setComponentDataValueForKey(o.Mode,e.type)}catch(t){E}},r.removeSelection=function(){var e=window.getSelection();e&&e.removeAllRanges()},r.configureResizer=function(){var e=document.getElementById(i.MusicEditor),t=document.getElementById(i.Editor),n=document.getElementById(i.ColumnResizer),o=!1,a=0;n&&(a=n.offsetWidth),t&&n&&n.addEventListener(y.Down,(function(e){o=!0,n.classList.add(s.Dragging),t.classList.add(s.NoSelection)})),document.addEventListener(y.Move,(function(i){if(o){var s=i.clientX;e&&(s<a/2+15?s=a/2+15:s>e.offsetWidth-a-15&&(s=e.offsetWidth-a-15));var c=s-a/2;n&&(n.style.left=c+"px"),t&&(t.style.width=c-15+"px"),r.removeSelection()}})),document.addEventListener(y.Up,(function(e){o&&(o=!1,n&&n.classList.remove(s.Dragging),t&&t.classList.remove(s.NoSelection))}))},r.onBlur=function(){O.clear()},r.onFocus=function(e){},r.onKeyDown=function(e){O.set(e.key,!0),!O.get("Shift")&&O.get("Tab")?(e.preventDefault(),document.execCommand("insertText",!1,"\t")):O.get("Control")&&O.get("s")&&e.preventDefault()},r.onKeyUp=function(e){O.delete(e.key)},r.logDebugMessage=function(e,t){E},r.print=function(){r.renderMusic(),window.print()},r.state=S,r}return Object(v.a)(n,[{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{className:"sn-component "+this.state.platform,id:i.MusicEditor,tabIndex:0,children:[Object(a.jsxs)("div",{id:i.Header,children:[Object(a.jsx)("div",{className:"segmented-buttons-container sk-segmented-buttons",children:Object(a.jsx)("div",{className:"buttons",children:w.map((function(t){return Object(a.jsx)("button",{onClick:function(){return e.changeMode(t)},className:"sk-button button "+(e.state.mode===t?"selected info":"sk-secondary-contrast"),title:"Turn on "+t.label+" Mode",children:Object(a.jsx)("div",{className:"label",children:t.label})})}))})}),Object(a.jsxs)("button",{className:"sk-button button sk-secondary-contrast icon-button",id:i.PrintButton,onClick:function(){return e.print()},title:"Print rendered music",children:[Object(a.jsx)("span",{children:"\xa0"}),Object(a.jsx)(M,{role:"button"}),Object(a.jsx)("span",{children:"\xa0"})," "]})]}),Object(a.jsxs)("main",{id:i.EditorContainer,className:this.state.mode.css,children:[Object(a.jsx)("textarea",{autoCapitalize:"false",autoComplete:"false",className:this.state.mode.css,dir:"auto",id:i.Editor,onBlur:this.onBlur,onChange:this.handleInputChange,onKeyDown:this.onKeyDown,onKeyUp:this.onKeyUp,spellCheck:"false",value:this.state.text}),Object(a.jsx)("div",{className:this.state.mode.css,id:i.ColumnResizer}),Object(a.jsx)("section",{className:this.state.mode.css+(this.state.success?" success":""),id:i.View,tabIndex:0})]})]})}}]),n}(d.a.Component);n(50);u.a.render(Object(a.jsx)(d.a.StrictMode,{children:Object(a.jsx)(T,{})}),document.getElementById("root")),f()}},[[51,1,2]]]);
//# sourceMappingURL=main.aaade9d8.chunk.js.map