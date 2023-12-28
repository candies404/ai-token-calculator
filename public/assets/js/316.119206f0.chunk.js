"use strict";(self.webpackChunkonboard=self.webpackChunkonboard||[]).push([[316],{7441:function(e,n,t){t.d(n,{SL:function(){return s},vs:function(){return r},b6:function(){return i}});var r,i,a=t(43334),o=t(40057),c=t(81163);function s(e){var n=e.id,t=void 0===n?"":n,s=e.className,l=e.options,u=e.onChange,d=e.currentValue,h=void 0===d?null:d,p=e.orientation,k=void 0===p?r.Horizontal:p,f=e.theme,x=void 0===f?i.Default:f,m=(0,a.useCallback)((function(e){var n=l.find((function(n){return n.value===e.target.value}));u((null==n?void 0:n.value)||null)}),[l,u]);return(0,c.jsx)("div",{id:t,className:(0,o.Z)("switch-field","switch-orientation-".concat(k),"switch-theme-".concat(x),s),children:l.map((function(e,n){return(0,c.jsxs)(a.Fragment,{children:[(0,c.jsx)("input",{type:"radio",id:"".concat(t,"-radio-").concat(e.value),name:"".concat(t,"-switch"),value:String(e.value),checked:h?h===e.value:void 0,onChange:m}),(0,c.jsx)("label",{htmlFor:"".concat(t,"-radio-").concat(e.value),children:e.label})]},n)}))})}!function(e){e.Horizontal="horizontal",e.Vertical="vertical"}(r||(r={})),function(e){e.Default="default",e.Large="large"}(i||(i={}))},99316:function(e,n,t){t.r(n),t.d(n,{default:function(){return b}});var r=t(29439),i=t(43334),a=t(40057),o=t(1293),c=t(49609),s=t(81163);function l(e){return(0,s.jsx)("div",{className:"page-header",children:e.children})}var u=t(83013),d=t(7441),h=t(65720),p=t(17958);function k(e){var n=e.i,t=e.token,r="tokenizer-tkn tokenizer-tkn-".concat(n%5);if(t.includes("\n")){var i=[],a=t.split("\n");return a.forEach((function(e,n){""!==e&&i.push((0,s.jsx)("span",{className:r,children:e},"sub-".concat(n))),n!==a.length-1&&i.push((0,s.jsx)("br",{},"br-".concat(n)))})),(0,s.jsx)("span",{children:i})}return(0,s.jsx)("span",{className:r,children:t})}var f=t(94983),x="\n模型爱好者，你好呀👋\n\nMany words map to one token, but some don't: indivisible.\n\nUnicode characters like emojis may be split into many tokens containing the underlying bytes: 🤚🏾\n\nSequences of characters commonly found next to each other may be grouped together: 1234567890".trim(),m={current:{label:"GPT-3.5 & GPT-4",encoding:"cl100k_base"},gpt3:{label:"GPT-3 (Legacy)",encoding:"gpt2"}},v={text:"text",bpe:"bpe"},g=[{value:v.text,label:"Text"},{value:v.bpe,label:"Token IDs"}],b=function(){var e=(0,o.UO)(),n=(0,i.useState)(""),t=(0,r.Z)(n,2),b=t[0],j=t[1],z=(0,i.useState)(!1),T=(0,r.Z)(z,2),y=T[0],N=T[1],C=(0,i.useState)(v["bpe"===e.view?"bpe":"text"]?e.view:v.text),w=(0,r.Z)(C,2),S=w[0],P=w[1],Z=(0,f.h)(m[e.encoding]?e.encoding:m.current.encoding),G=Z.isLoading,_=Z.isTokenizing,E=Z.tokens,L=Z.charCount,O=Z.encodingType,I=Z.setEncodingType,M=Z.tokenizer,D=Z.runTokenizer;(0,i.useEffect)((function(){M&&b&&(b.length>5e4?(N(!0),D(M,"")):(N(!1),D(M,b)))}),[M,D,b]);var A=(0,i.useCallback)((function(e){j(e)}),[]),H=(0,i.useCallback)((function(e){A(e.target.value)}),[A]),V=(0,i.useCallback)((function(){A("")}),[A]),q=(0,i.useCallback)((function(){A(x)}),[A]),F=(0,i.useCallback)((function(e){P(e)}),[]),U=b===x,J=(0,i.useMemo)((function(){return E&&E.text.some((function(e){return e.includes(String.fromCharCode(65533))}))}),[E]);return(0,s.jsxs)("div",{className:"page-body page-tokenizer",children:[(0,s.jsx)(l,{children:(0,s.jsx)("h1",{children:"分词器 (Tokenizer)"})}),(0,s.jsxs)("p",{children:["程序汉化自 ",(0,s.jsx)("a",{href:"https://platform.openai.com/tokenizer",target:"_blank",rel:"noopener noreferrer",children:" OpenAI Tokenizer"})," 页面，汉化作者：苏洋 (soulteary)。"]}),(0,s.jsxs)("p",{className:"welcome", children:["欢迎在 ",(0,s.jsx)("a",{href:"https://link.baai.ac.cn/@21",target:"_blank",rel:"noopener noreferrer",children:"智源社区",className:"link-baai",}),"，",(0,s.jsx)("a",{href:"https://www.zhihu.com/people/soulteary",target:"_blank",rel:"noopener noreferrer",children:"知乎专栏",className:"link-zhihu"})," 或 ",(0,s.jsx)("a",{href:"https://github.com/soulteary/ai-token-calculator",target:"_blank",rel:"noopener noreferrer",children:"GitHub Issue",className:"link-github"})," 反馈关于这个小工具的问题。"]}),(0,s.jsx)("h3",{children:"让我们来学习和了解大语言模型的分词机制 (tokenization)"}),(0,s.jsxs)("p",{children:["OpenAI 的大型语言模型（也被称为 GPT）使用",(0,s.jsx)("strong",{children:" 词元 (tokens) "}),"来对文本内容进行处理，词元可以是任何一组文本中能够被找到的常见字符序列。大语言模型学习和理解这些词元之间的统计关系，并且擅长于根据文本中当前词元的情况，生成序列中的下一个词元。"]}),(0,s.jsx)("p",{children:"你可以使用下面的工具来了解任意文本内容是如何被语言模型进行分词的，以及在该文本片段中的总词元数量。"}),(0,s.jsx)("p",{children:"需要注意的是，词元数量的计算因不同模型分词算法而有区别。比如在 GPT-3.5 和 GPT-4 中的计算方式，和比较旧的模型，诸如 GPT-3 和 Codex 中是不同的。"}),(0,s.jsx)("div",{className:"tokenizer-encodings",children:Object.keys(m).map((function(e){var n=m[e],t=(0,s.jsx)(p.zx,{size:"small",color:p.rp.primary,variant:p.Wu.minimal,onClick:function(){return I(n.encoding)},className:O===n.encoding?"selected":"",children:n.label},e);return"gpt3"===e&&(t=(0,s.jsx)(c.ZP,{content:"旧版 GPT-3 模型使用的词表比 GPT-3.5 和 GPT-4 更小，回带来更多的分词结果。",children:t},e)),t}))}),(0,s.jsx)("div",{className:"tokenizer-input",children:(0,s.jsx)(u.oi,{textarea:!0,onChange:H,value:b,disabled:G,placeholder:"试试看，输入一些内容"})}),(0,s.jsxs)("div",{className:"tokenizer-input-actions",children:[(0,s.jsx)(p.zx,{size:"small",color:p.rp.neutral,onClick:V,children:"清空"}),(0,s.jsx)(p.zx,{size:"small",color:y?p.rp.negative:p.rp.neutral,onClick:q,disabled:U,children:y?"哦，要不是试试短一些的例子":"举个例子 🌰"})]}),(0,s.jsxs)("div",{className:(0,a.Z)("tokenizer-stats",_&&"tokenizer-dim"),children:[(0,s.jsxs)("div",{className:"tokenizer-stat",children:[(0,s.jsx)("div",{className:"tokenizer-stat-title",children:"词数量 (Tokens)"}),(0,s.jsx)("div",{className:"tokenizer-stat-val",children:(0,h.OD)(E?E.bpe.length:0)})]}),(0,s.jsxs)("div",{className:"tokenizer-stat",children:[(0,s.jsx)("div",{className:"tokenizer-stat-title",children:"字符数量 (Characters)"}),(0,s.jsx)("div",{className:"tokenizer-stat-val",children:L||0})]})]}),(0,s.jsxs)("div",{className:(0,a.Z)("tokenizer-output",_&&"tokenizer-dim"),children:[E&&E.text.length?S===v.bpe?(0,s.jsx)("span",{className:"tokenizer-bpe",children:"[".concat(E.bpe.join(", "),"]")}):E.text.map((function(e,n){return(0,s.jsx)(k,{i:n,token:e},"tok".concat(n))})):null,(0,s.jsx)(d.SL,{id:"tokenizer-view-switch",className:E&&E.text.length?"visible":void 0,options:g,onChange:F,currentValue:S})]}),!U&&J&&S===v.text&&(0,s.jsxs)("div",{className:"tokenizer-char-warning",children:[(0,s.jsx)("strong",{children:"Note:"})," Your input contained one or more unicode characters that map to multiple tokens. The output visualization may display the bytes in each token in a non-standard way."]}),(0,s.jsx)("p",{children:"一个小经验，一个 Token 通常约等于常见英文文本的四个字符长，相当于大约 ¾ 个单词（因此 100 个 Token ~= 75 个单词）。而对于中文，通常情况下一个中文字符会消耗两个 Token。"}),(0,s.jsxs)("p",{children:["如果你需要在程序中来计算 Token 数量，可以使用 OpenAI 提供的 "," ",(0,s.jsx)("a",{href:"https://github.com/openai/tiktoken",target:"_blank",rel:"noopener noreferrer",children:"tiktoken"})," ","Python 软件包。如果你是 JavaScript 爱好者，可以使用社区维护的 "," ",(0,s.jsx)("a",{href:"https://www.npmjs.com/package/tiktoken",target:"_blank",rel:"noopener noreferrer",children:"@dbdq/tiktoken"})," ","软件包，它们支持绝大多数的 GPT 模型。"]})]})}},94983:function(e,n,t){t.d(n,{h:function(){return o}});var r=t(29439),i=t(89427),a=t(43334);function o(e){var n=(0,a.useState)(!0),o=(0,r.Z)(n,2),c=o[0],s=o[1],l=(0,a.useState)(!1),u=(0,r.Z)(l,2),d=u[0],h=u[1],p=(0,a.useState)(null),k=(0,r.Z)(p,2),f=k[0],x=k[1],m=(0,a.useState)(null),v=(0,r.Z)(m,2),g=v[0],b=v[1],j=(0,a.useState)(null),z=(0,r.Z)(j,2),T=z[0],y=z[1],N=(0,a.useState)(e),C=(0,r.Z)(N,2),w=C[0],S=C[1];(0,a.useEffect)((function(){t.e(823).then(t.bind(t,91823)).then((function(e){x(e)})).catch((function(e){console.error(e)})).finally((function(){s(!1)}))}),[]);var P=(0,a.useMemo)((function(){return f?f.getEncoding(w):null}),[f,w]),Z=(0,a.useMemo)((function(){return(0,i.debounce)((function(e,n){var t=e.encode(n),r=t.map((function(n){return e.decode([n])}));b({bpe:t,text:r}),y(n.length),h(!1)}),200)}),[]),G=(0,a.useMemo)((function(){return function(e,n){h(!0),Z(e,n)}}),[Z]);return{isLoading:c,isTokenizing:d,tokens:g,charCount:T,encodingType:w,setEncodingType:S,tokenizer:P,runTokenizer:G}}}}]);