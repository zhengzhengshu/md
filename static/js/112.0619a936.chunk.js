(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{783:function(e,t,n){!function(e){"use strict";e.defineMode("vb",function(t,n){var r="error";function i(e){return new RegExp("^(("+e.join(")|(")+"))\\b","i")}var a=new RegExp("^[\\+\\-\\*/%&\\\\|\\^~<>!]"),o=new RegExp("^[\\(\\)\\[\\]\\{\\}@,:`=;\\.]"),c=new RegExp("^((==)|(<>)|(<=)|(>=)|(<>)|(<<)|(>>)|(//)|(\\*\\*))"),u=new RegExp("^((\\+=)|(\\-=)|(\\*=)|(%=)|(/=)|(&=)|(\\|=)|(\\^=))"),d=new RegExp("^((//=)|(>>=)|(<<=)|(\\*\\*=))"),s=new RegExp("^[_A-Za-z][_A-Za-z0-9]*"),l=["class","module","sub","enum","select","while","if","function","get","set","property","try","structure","synclock","using","with"],h=["else","elseif","case","catch","finally"],m=["next","loop"],f=["and","andalso","or","orelse","xor","in","not","is","isnot","like"],p=i(f),g=["#const","#else","#elseif","#end","#if","#region","addhandler","addressof","alias","as","byref","byval","cbool","cbyte","cchar","cdate","cdbl","cdec","cint","clng","cobj","compare","const","continue","csbyte","cshort","csng","cstr","cuint","culng","cushort","declare","default","delegate","dim","directcast","each","erase","error","event","exit","explicit","false","for","friend","gettype","goto","handles","implements","imports","infer","inherits","interface","isfalse","istrue","lib","me","mod","mustinherit","mustoverride","my","mybase","myclass","namespace","narrowing","new","nothing","notinheritable","notoverridable","of","off","on","operator","option","optional","out","overloads","overridable","overrides","paramarray","partial","private","protected","public","raiseevent","readonly","redim","removehandler","resume","return","shadows","shared","static","step","stop","strict","then","throw","to","true","trycast","typeof","until","until","when","widening","withevents","writeonly"],b=["object","boolean","char","string","byte","sbyte","short","ushort","int16","uint16","integer","uinteger","int32","uint32","long","ulong","int64","uint64","decimal","single","double","float","date","datetime","intptr","uintptr"],w=i(g),v=i(b),y='"',k=i(l),x=i(h),I=i(m),E=i(["end"]),L=i(["do"]),z=null;function C(e,t){t.currentIndent++}function R(e,t){t.currentIndent--}function F(e,t){if(e.eatSpace())return null;var i=e.peek();if("'"===i)return e.skipToEnd(),"comment";if(e.match(/^((&H)|(&O))?[0-9\.a-f]/i,!1)){var l=!1;if(e.match(/^\d*\.\d+F?/i)?l=!0:e.match(/^\d+\.\d*F?/)?l=!0:e.match(/^\.\d+F?/)&&(l=!0),l)return e.eat(/J/i),"number";var h=!1;if(e.match(/^&H[0-9a-f]+/i)?h=!0:e.match(/^&O[0-7]+/i)?h=!0:e.match(/^[1-9]\d*F?/)?(e.eat(/J/i),h=!0):e.match(/^0(?![\dx])/i)&&(h=!0),h)return e.eat(/L/i),"number"}return e.match(y)?(t.tokenize=function(e){var t=1==e.length;return function(i,a){for(;!i.eol();){if(i.eatWhile(/[^'"]/),i.match(e))return a.tokenize=F,"string";i.eat(/['"]/)}if(t){if(n.singleLineStringErrors)return r;a.tokenize=F}return"string"}}(e.current()),t.tokenize(e,t)):e.match(d)||e.match(u)?null:e.match(c)||e.match(a)||e.match(p)?"operator":e.match(o)?null:e.match(L)?(C(0,t),t.doInCurrentLine=!0,"keyword"):e.match(k)?(t.doInCurrentLine?t.doInCurrentLine=!1:C(0,t),"keyword"):e.match(x)?"keyword":e.match(E)?(R(0,t),R(0,t),"keyword"):e.match(I)?(R(0,t),"keyword"):e.match(v)?"keyword":e.match(w)?"keyword":e.match(s)?"variable":(e.next(),r)}e.registerHelper("hintWords","vb",l.concat(h).concat(m).concat(f).concat(g).concat(b));var J={electricChars:"dDpPtTfFeE ",startState:function(){return{tokenize:F,lastToken:null,currentIndent:0,nextLineIndent:0,doInCurrentLine:!1}},token:function(e,t){e.sol()&&(t.currentIndent+=t.nextLineIndent,t.nextLineIndent=0,t.doInCurrentLine=0);var n=function(e,t){var n=t.tokenize(e,t),i=e.current();if("."===i)return"variable"===(n=t.tokenize(e,t))?"variable":r;var a="[({".indexOf(i);return-1!==a&&C(0,t),"dedent"===z&&R(0,t)?r:-1!==(a="])}".indexOf(i))&&R(0,t)?r:n}(e,t);return t.lastToken={style:n,content:e.current()},n},indent:function(e,n){var r=n.replace(/^\s+|\s+$/g,"");return r.match(I)||r.match(E)||r.match(x)?t.indentUnit*(e.currentIndent-1):e.currentIndent<0?0:e.currentIndent*t.indentUnit},lineComment:"'"};return J}),e.defineMIME("text/x-vb","vb")}(n(36))}}]);
//# sourceMappingURL=112.0619a936.chunk.js.map