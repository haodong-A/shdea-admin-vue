import{b as z,N as H,d as he,P as ye,T as C,p as Te}from"./@lezer_common@1.2.3-CP7NCNqd.js";import{s as fe,t as p,T as De}from"./@lezer_highlight@1.2.1-DwVMghhY.js";class O{static create(e,s,r,n,i){let o=n+(n<<8)+e+(s<<4)|0;return new O(e,s,r,o,i,[],[])}constructor(e,s,r,n,i,o,a){this.type=e,this.value=s,this.from=r,this.hash=n,this.end=i,this.children=o,this.positions=a,this.hashProp=[[H.contextHash,n]]}addChild(e,s){e.prop(H.contextHash)!=this.hash&&(e=new C(e.type,e.children,e.positions,e.length,this.hashProp)),this.children.push(e),this.positions.push(s)}toTree(e,s=this.end){let r=this.children.length-1;return r>=0&&(s=Math.max(s,this.positions[r]+this.children[r].length+this.from)),new C(e.types[this.type],this.children,this.positions,s-this.from).balance({makeTree:(n,i,o)=>new C(z.none,n,i,o,this.hashProp)})}}var l;(function(t){t[t.Document=1]="Document",t[t.CodeBlock=2]="CodeBlock",t[t.FencedCode=3]="FencedCode",t[t.Blockquote=4]="Blockquote",t[t.HorizontalRule=5]="HorizontalRule",t[t.BulletList=6]="BulletList",t[t.OrderedList=7]="OrderedList",t[t.ListItem=8]="ListItem",t[t.ATXHeading1=9]="ATXHeading1",t[t.ATXHeading2=10]="ATXHeading2",t[t.ATXHeading3=11]="ATXHeading3",t[t.ATXHeading4=12]="ATXHeading4",t[t.ATXHeading5=13]="ATXHeading5",t[t.ATXHeading6=14]="ATXHeading6",t[t.SetextHeading1=15]="SetextHeading1",t[t.SetextHeading2=16]="SetextHeading2",t[t.HTMLBlock=17]="HTMLBlock",t[t.LinkReference=18]="LinkReference",t[t.Paragraph=19]="Paragraph",t[t.CommentBlock=20]="CommentBlock",t[t.ProcessingInstructionBlock=21]="ProcessingInstructionBlock",t[t.Escape=22]="Escape",t[t.Entity=23]="Entity",t[t.HardBreak=24]="HardBreak",t[t.Emphasis=25]="Emphasis",t[t.StrongEmphasis=26]="StrongEmphasis",t[t.Link=27]="Link",t[t.Image=28]="Image",t[t.InlineCode=29]="InlineCode",t[t.HTMLTag=30]="HTMLTag",t[t.Comment=31]="Comment",t[t.ProcessingInstruction=32]="ProcessingInstruction",t[t.Autolink=33]="Autolink",t[t.HeaderMark=34]="HeaderMark",t[t.QuoteMark=35]="QuoteMark",t[t.ListMark=36]="ListMark",t[t.LinkMark=37]="LinkMark",t[t.EmphasisMark=38]="EmphasisMark",t[t.CodeMark=39]="CodeMark",t[t.CodeText=40]="CodeText",t[t.CodeInfo=41]="CodeInfo",t[t.LinkTitle=42]="LinkTitle",t[t.LinkLabel=43]="LinkLabel",t[t.URL=44]="URL"})(l||(l={}));class Xe{constructor(e,s){this.start=e,this.content=s,this.marks=[],this.parsers=[]}}class Fe{constructor(){this.text="",this.baseIndent=0,this.basePos=0,this.depth=0,this.markers=[],this.pos=0,this.indent=0,this.next=-1}forward(){this.basePos>this.pos&&this.forwardInner()}forwardInner(){let e=this.skipSpace(this.basePos);this.indent=this.countIndent(e,this.pos,this.indent),this.pos=e,this.next=e==this.text.length?-1:this.text.charCodeAt(e)}skipSpace(e){return x(this.text,e)}reset(e){for(this.text=e,this.baseIndent=this.basePos=this.pos=this.indent=0,this.forwardInner(),this.depth=1;this.markers.length;)this.markers.pop()}moveBase(e){this.basePos=e,this.baseIndent=this.countIndent(e,this.pos,this.indent)}moveBaseColumn(e){this.baseIndent=e,this.basePos=this.findColumn(e)}addMarker(e){this.markers.push(e)}countIndent(e,s=0,r=0){for(let n=s;n<e;n++)r+=this.text.charCodeAt(n)==9?4-r%4:1;return r}findColumn(e){let s=0;for(let r=0;s<this.text.length&&r<e;s++)r+=this.text.charCodeAt(s)==9?4-r%4:1;return s}scrub(){if(!this.baseIndent)return this.text;let e="";for(let s=0;s<this.basePos;s++)e+=" ";return e+this.text.slice(this.basePos)}}function K(t,e,s){if(s.pos==s.text.length||t!=e.block&&s.indent>=e.stack[s.depth+1].value+s.baseIndent)return!0;if(s.indent>=s.baseIndent+4)return!1;let r=(t.type==l.OrderedList?G:Q)(s,e,!1);return r>0&&(t.type!=l.BulletList||Z(s,e,!1)<0)&&s.text.charCodeAt(s.pos+r-1)==t.value}const de={[l.Blockquote](t,e,s){return s.next!=62?!1:(s.markers.push(c(l.QuoteMark,e.lineStart+s.pos,e.lineStart+s.pos+1)),s.moveBase(s.pos+(S(s.text.charCodeAt(s.pos+1))?2:1)),t.end=e.lineStart+s.text.length,!0)},[l.ListItem](t,e,s){return s.indent<s.baseIndent+t.value&&s.next>-1?!1:(s.moveBaseColumn(s.baseIndent+t.value),!0)},[l.OrderedList]:K,[l.BulletList]:K,[l.Document](){return!0}};function S(t){return t==32||t==9||t==10||t==13}function x(t,e=0){for(;e<t.length&&S(t.charCodeAt(e));)e++;return e}function Y(t,e,s){for(;e>s&&S(t.charCodeAt(e-1));)e--;return e}function ue(t){if(t.next!=96&&t.next!=126)return-1;let e=t.pos+1;for(;e<t.text.length&&t.text.charCodeAt(e)==t.next;)e++;if(e<t.pos+3)return-1;if(t.next==96){for(let s=e;s<t.text.length;s++)if(t.text.charCodeAt(s)==96)return-1}return e}function pe(t){return t.next!=62?-1:t.text.charCodeAt(t.pos+1)==32?2:1}function Z(t,e,s){if(t.next!=42&&t.next!=45&&t.next!=95)return-1;let r=1;for(let n=t.pos+1;n<t.text.length;n++){let i=t.text.charCodeAt(n);if(i==t.next)r++;else if(!S(i))return-1}return s&&t.next==45&&ge(t)>-1&&t.depth==e.stack.length&&e.parser.leafBlockParsers.indexOf(Se.SetextHeading)>-1||r<3?-1:1}function ce(t,e){for(let s=t.stack.length-1;s>=0;s--)if(t.stack[s].type==e)return!0;return!1}function Q(t,e,s){return(t.next==45||t.next==43||t.next==42)&&(t.pos==t.text.length-1||S(t.text.charCodeAt(t.pos+1)))&&(!s||ce(e,l.BulletList)||t.skipSpace(t.pos+2)<t.text.length)?1:-1}function G(t,e,s){let r=t.pos,n=t.next;for(;n>=48&&n<=57;){r++;if(r==t.text.length)return-1;n=t.text.charCodeAt(r)}return r==t.pos||r>t.pos+9||n!=46&&n!=41||r<t.text.length-1&&!S(t.text.charCodeAt(r+1))||s&&!ce(e,l.OrderedList)&&(t.skipSpace(r+1)==t.text.length||r>t.pos+1||t.next!=49)?-1:r+1-t.pos}function ke(t){if(t.next!=35)return-1;let e=t.pos+1;for(;e<t.text.length&&t.text.charCodeAt(e)==35;)e++;if(e<t.text.length&&t.text.charCodeAt(e)!=32)return-1;let s=e-t.pos;return s>6?-1:s}function ge(t){if(t.next!=45&&t.next!=61||t.indent>=t.baseIndent+4)return-1;let e=t.pos+1;for(;e<t.text.length&&t.text.charCodeAt(e)==t.next;)e++;let s=e;for(;e<t.text.length&&S(t.text.charCodeAt(e));)e++;return e==t.text.length?s:-1}const j=/^[ \t]*$/,me=/-->/,Le=/\?>/,$=[[/^<(?:script|pre|style)(?:\s|>|$)/i,/<\/(?:script|pre|style)>/i],[/^\s*<!--/,me],[/^\s*<\?/,Le],[/^\s*<![A-Z]/,/>/],[/^\s*<!\[CDATA\[/,/\]\]>/],[/^\s*<\/?(?:address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h1|h2|h3|h4|h5|h6|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul)(?:\s|\/?>|$)/i,j],[/^\s*(?:<\/[a-z][\w-]*\s*>|<[a-z][\w-]*(\s+[a-z:_][\w-.]*(?:\s*=\s*(?:[^\s"'=<>`]+|'[^']*'|"[^"]*"))?)*\s*>)\s*$/i,j]];function be(t,e,s){if(t.next!=60)return-1;let r=t.text.slice(t.pos);for(let n=0,i=$.length-(s?1:0);n<i;n++)if($[n][0].test(r))return n;return-1}function W(t,e){let s=t.countIndent(e,t.pos,t.indent),r=t.countIndent(t.skipSpace(e),e,s);return r>=s+5?s+1:r}function w(t,e,s){let r=t.length-1;r>=0&&t[r].to==e&&t[r].type==l.CodeText?t[r].to=s:t.push(c(l.CodeText,e,s))}const N={LinkReference:void 0,IndentedCode(t,e){let s=e.baseIndent+4;if(e.indent<s)return!1;let r=e.findColumn(s),n=t.lineStart+r,i=t.lineStart+e.text.length,o=[],a=[];for(w(o,n,i);t.nextLine()&&e.depth>=t.stack.length;)if(e.pos==e.text.length){w(a,t.lineStart-1,t.lineStart);for(let h of e.markers)a.push(h)}else{if(e.indent<s)break;{if(a.length){for(let d of a)d.type==l.CodeText?w(o,d.from,d.to):o.push(d);a=[]}w(o,t.lineStart-1,t.lineStart);for(let d of e.markers)o.push(d);i=t.lineStart+e.text.length;let h=t.lineStart+e.findColumn(e.baseIndent+4);h<i&&w(o,h,i)}}return a.length&&(a=a.filter(h=>h.type!=l.CodeText),a.length&&(e.markers=a.concat(e.markers))),t.addNode(t.buffer.writeElements(o,-n).finish(l.CodeBlock,i-n),n),!0},FencedCode(t,e){let s=ue(e);if(s<0)return!1;let r=t.lineStart+e.pos,n=e.next,i=s-e.pos,o=e.skipSpace(s),a=Y(e.text,e.text.length,o),h=[c(l.CodeMark,r,r+i)];o<a&&h.push(c(l.CodeInfo,t.lineStart+o,t.lineStart+a));for(let d=!0;t.nextLine()&&e.depth>=t.stack.length;d=!1){let u=e.pos;if(e.indent-e.baseIndent<4)for(;u<e.text.length&&e.text.charCodeAt(u)==n;)u++;if(u-e.pos>=i&&e.skipSpace(u)==e.text.length){for(let k of e.markers)h.push(k);h.push(c(l.CodeMark,t.lineStart+e.pos,t.lineStart+u)),t.nextLine();break}else{d||w(h,t.lineStart-1,t.lineStart);for(let g of e.markers)h.push(g);let k=t.lineStart+e.basePos,f=t.lineStart+e.text.length;k<f&&w(h,k,f)}}return t.addNode(t.buffer.writeElements(h,-r).finish(l.FencedCode,t.prevLineEnd()-r),r),!0},Blockquote(t,e){let s=pe(e);return s<0?!1:(t.startContext(l.Blockquote,e.pos),t.addNode(l.QuoteMark,t.lineStart+e.pos,t.lineStart+e.pos+1),e.moveBase(e.pos+s),null)},HorizontalRule(t,e){if(Z(e,t,!1)<0)return!1;let s=t.lineStart+e.pos;return t.nextLine(),t.addNode(l.HorizontalRule,s),!0},BulletList(t,e){let s=Q(e,t,!1);if(s<0)return!1;t.block.type!=l.BulletList&&t.startContext(l.BulletList,e.basePos,e.next);let r=W(e,e.pos+1);return t.startContext(l.ListItem,e.basePos,r-e.baseIndent),t.addNode(l.ListMark,t.lineStart+e.pos,t.lineStart+e.pos+s),e.moveBaseColumn(r),null},OrderedList(t,e){let s=G(e,t,!1);if(s<0)return!1;t.block.type!=l.OrderedList&&t.startContext(l.OrderedList,e.basePos,e.text.charCodeAt(e.pos+s-1));let r=W(e,e.pos+s);return t.startContext(l.ListItem,e.basePos,r-e.baseIndent),t.addNode(l.ListMark,t.lineStart+e.pos,t.lineStart+e.pos+s),e.moveBaseColumn(r),null},ATXHeading(t,e){let s=ke(e);if(s<0)return!1;let r=e.pos,n=t.lineStart+r,i=Y(e.text,e.text.length,r),o=i;for(;o>r&&e.text.charCodeAt(o-1)==e.next;)o--;(o==i||o==r||!S(e.text.charCodeAt(o-1)))&&(o=e.text.length);let a=t.buffer.write(l.HeaderMark,0,s).writeElements(t.parser.parseInline(e.text.slice(r+s+1,o),n+s+1),-n);o<e.text.length&&a.write(l.HeaderMark,o-r,i-r);let h=a.finish(l.ATXHeading1-1+s,e.text.length-r);return t.nextLine(),t.addNode(h,n),!0},HTMLBlock(t,e){let s=be(e,t,!1);if(s<0)return!1;let r=t.lineStart+e.pos,n=$[s][1],i=[],o=n!=j;for(;!n.test(e.text)&&t.nextLine();){if(e.depth<t.stack.length){o=!1;break}for(let d of e.markers)i.push(d)}o&&t.nextLine();let a=n==me?l.CommentBlock:n==Le?l.ProcessingInstructionBlock:l.HTMLBlock,h=t.prevLineEnd();return t.addNode(t.buffer.writeElements(i,-r).finish(a,h-r),r),!0},SetextHeading:void 0};class je{constructor(e){this.stage=0,this.elts=[],this.pos=0,this.start=e.start,this.advance(e.content)}nextLine(e,s,r){if(this.stage==-1)return!1;let n=r.content+`
`+s.scrub(),i=this.advance(n);return i>-1&&i<n.length?this.complete(e,r,i):!1}finish(e,s){return(this.stage==2||this.stage==3)&&x(s.content,this.pos)==s.content.length?this.complete(e,s,s.content.length):!1}complete(e,s,r){return e.addLeafElement(s,c(l.LinkReference,this.start,this.start+r,this.elts)),!0}nextStage(e){return e?(this.pos=e.to-this.start,this.elts.push(e),this.stage++,!0):(e===!1&&(this.stage=-1),!1)}advance(e){for(;;){if(this.stage==-1)return-1;if(this.stage==0){if(!this.nextStage(He(e,this.pos,this.start,!0)))return-1;if(e.charCodeAt(this.pos)!=58)return this.stage=-1;this.elts.push(c(l.LinkMark,this.pos+this.start,this.pos+this.start+1)),this.pos++}else if(this.stage==1){if(!this.nextStage(xe(e,x(e,this.pos),this.start)))return-1}else if(this.stage==2){let s=x(e,this.pos),r=0;if(s>this.pos){let n=Me(e,s,this.start);if(n){let i=X(e,n.to-this.start);i>0&&(this.nextStage(n),r=i)}}return r||(r=X(e,this.pos)),r>0&&r<e.length?r:-1}else return X(e,this.pos)}}}function X(t,e){for(;e<t.length;e++){let s=t.charCodeAt(e);if(s==10)break;if(!S(s))return-1}return e}class $e{nextLine(e,s,r){let n=s.depth<e.stack.length?-1:ge(s),i=s.next;if(n<0)return!1;let o=c(l.HeaderMark,e.lineStart+s.pos,e.lineStart+n);return e.nextLine(),e.addLeafElement(r,c(i==61?l.SetextHeading1:l.SetextHeading2,r.start,e.prevLineEnd(),[...e.parser.parseInline(r.content,r.start),o])),!0}finish(){return!1}}const Se={LinkReference(t,e){return e.content.charCodeAt(0)==91?new je(e):null},SetextHeading(){return new $e}},_e=[(t,e)=>ke(e)>=0,(t,e)=>ue(e)>=0,(t,e)=>pe(e)>=0,(t,e)=>Q(e,t,!0)>=0,(t,e)=>G(e,t,!0)>=0,(t,e)=>Z(e,t,!0)>=0,(t,e)=>be(e,t,!0)>=0],Ue={text:"",end:0};class qe{constructor(e,s,r,n){this.parser=e,this.input=s,this.ranges=n,this.line=new Fe,this.atEnd=!1,this.reusePlaceholders=new Map,this.stoppedAt=null,this.rangeI=0,this.to=n[n.length-1].to,this.lineStart=this.absoluteLineStart=this.absoluteLineEnd=n[0].from,this.block=O.create(l.Document,0,this.lineStart,0,0),this.stack=[this.block],this.fragments=r.length?new Ve(r,s):null,this.readLine()}get parsedPos(){return this.absoluteLineStart}advance(){if(this.stoppedAt!=null&&this.absoluteLineStart>this.stoppedAt)return this.finish();let{line:e}=this;for(;;){for(let r=0;;){let n=e.depth<this.stack.length?this.stack[this.stack.length-1]:null;for(;r<e.markers.length&&(!n||e.markers[r].from<n.end);){let i=e.markers[r++];this.addNode(i.type,i.from,i.to)}if(!n)break;this.finishContext()}if(e.pos<e.text.length)break;if(!this.nextLine())return this.finish()}if(this.fragments&&this.reuseFragment(e.basePos))return null;e:for(;;){for(let r of this.parser.blockParsers)if(r){let n=r(this,e);if(n!=!1){if(n==!0)return null;e.forward();continue e}}break}let s=new Xe(this.lineStart+e.pos,e.text.slice(e.pos));for(let r of this.parser.leafBlockParsers)if(r){let n=r(this,s);n&&s.parsers.push(n)}e:for(;this.nextLine()&&e.pos!=e.text.length;){if(e.indent<e.baseIndent+4){for(let r of this.parser.endLeafBlock)if(r(this,e,s))break e}for(let r of s.parsers)if(r.nextLine(this,e,s))return null;s.content+=`
`+e.scrub();for(let r of e.markers)s.marks.push(r)}return this.finishLeaf(s),null}stopAt(e){if(this.stoppedAt!=null&&this.stoppedAt<e)throw new RangeError("Can't move stoppedAt forward");this.stoppedAt=e}reuseFragment(e){if(!this.fragments.moveTo(this.absoluteLineStart+e,this.absoluteLineStart)||!this.fragments.matches(this.block.hash))return!1;let s=this.fragments.takeNodes(this);return s?(this.absoluteLineStart+=s,this.lineStart=Pe(this.absoluteLineStart,this.ranges),this.moveRangeI(),this.absoluteLineStart<this.to?(this.lineStart++,this.absoluteLineStart++,this.readLine()):(this.atEnd=!0,this.readLine()),!0):!1}get depth(){return this.stack.length}parentType(e=this.depth-1){return this.parser.nodeSet.types[this.stack[e].type]}nextLine(){return this.lineStart+=this.line.text.length,this.absoluteLineEnd>=this.to?(this.absoluteLineStart=this.absoluteLineEnd,this.atEnd=!0,this.readLine(),!1):(this.lineStart++,this.absoluteLineStart=this.absoluteLineEnd+1,this.moveRangeI(),this.readLine(),!0)}moveRangeI(){for(;this.rangeI<this.ranges.length-1&&this.absoluteLineStart>=this.ranges[this.rangeI].to;)this.rangeI++,this.absoluteLineStart=Math.max(this.absoluteLineStart,this.ranges[this.rangeI].from)}scanLine(e){let s=Ue;if(s.end=e,e>=this.to)s.text="";else if(s.text=this.lineChunkAt(e),s.end+=s.text.length,this.ranges.length>1){let r=this.absoluteLineStart,n=this.rangeI;for(;this.ranges[n].to<s.end;){n++;let i=this.ranges[n].from,o=this.lineChunkAt(i);s.end=i+o.length,s.text=s.text.slice(0,this.ranges[n-1].to-r)+o,r=s.end-s.text.length}}return s}readLine(){let{line:e}=this,{text:s,end:r}=this.scanLine(this.absoluteLineStart);for(this.absoluteLineEnd=r,e.reset(s);e.depth<this.stack.length;e.depth++){let n=this.stack[e.depth],i=this.parser.skipContextMarkup[n.type];if(!i)throw new Error("Unhandled block context "+l[n.type]);if(!i(n,this,e))break;e.forward()}}lineChunkAt(e){let s=this.input.chunk(e),r;if(this.input.lineChunks)r=s==`
`?"":s;else{let n=s.indexOf(`
`);r=n<0?s:s.slice(0,n)}return e+r.length>this.to?r.slice(0,this.to-e):r}prevLineEnd(){return this.atEnd?this.lineStart:this.lineStart-1}startContext(e,s,r=0){this.block=O.create(e,r,this.lineStart+s,this.block.hash,this.lineStart+this.line.text.length),this.stack.push(this.block)}startComposite(e,s,r=0){this.startContext(this.parser.getNodeType(e),s,r)}addNode(e,s,r){typeof e=="number"&&(e=new C(this.parser.nodeSet.types[e],A,A,(r??this.prevLineEnd())-s)),this.block.addChild(e,s-this.block.from)}addElement(e){this.block.addChild(e.toTree(this.parser.nodeSet),e.from-this.block.from)}addLeafElement(e,s){this.addNode(this.buffer.writeElements(q(s.children,e.marks),-s.from).finish(s.type,s.to-s.from),s.from)}finishContext(){let e=this.stack.pop(),s=this.stack[this.stack.length-1];s.addChild(e.toTree(this.parser.nodeSet),e.from-s.from),this.block=s}finish(){for(;this.stack.length>1;)this.finishContext();return this.addGaps(this.block.toTree(this.parser.nodeSet,this.lineStart))}addGaps(e){return this.ranges.length>1?we(this.ranges,0,e.topNode,this.ranges[0].from,this.reusePlaceholders):e}finishLeaf(e){for(let r of e.parsers)if(r.finish(this,e))return;let s=q(this.parser.parseInline(e.content,e.start),e.marks);this.addNode(this.buffer.writeElements(s,-e.start).finish(l.Paragraph,e.content.length),e.start)}elt(e,s,r,n){return typeof e=="string"?c(this.parser.getNodeType(e),s,r,n):new Ae(e,s)}get buffer(){return new Ee(this.parser.nodeSet)}}function we(t,e,s,r,n){let i=t[e].to,o=[],a=[],h=s.from+r;function d(u,k){for(;k?u>=i:u>i;){let f=t[e+1].from-i;r+=f,u+=f,e++,i=t[e].to}}for(let u=s.firstChild;u;u=u.nextSibling){d(u.from+r,!0);let k=u.from+r,f,g=n.get(u.tree);g?f=g:u.to+r>i?(f=we(t,e,u,r,n),d(u.to+r,!1)):f=u.toTree(),o.push(f),a.push(k-h)}return d(s.to+r,!1),new C(s.type,o,a,s.to+r-h,s.tree?s.tree.propValues:void 0)}class V extends ye{constructor(e,s,r,n,i,o,a,h,d){super(),this.nodeSet=e,this.blockParsers=s,this.leafBlockParsers=r,this.blockNames=n,this.endLeafBlock=i,this.skipContextMarkup=o,this.inlineParsers=a,this.inlineNames=h,this.wrappers=d,this.nodeTypes=Object.create(null);for(let u of e.types)this.nodeTypes[u.name]=u.id}createParse(e,s,r){let n=new qe(this,e,s,r);for(let i of this.wrappers)n=i(n,e,s,r);return n}configure(e){let s=_(e);if(!s)return this;let{nodeSet:r,skipContextMarkup:n}=this,i=this.blockParsers.slice(),o=this.leafBlockParsers.slice(),a=this.blockNames.slice(),h=this.inlineParsers.slice(),d=this.inlineNames.slice(),u=this.endLeafBlock.slice(),k=this.wrappers;if(B(s.defineNodes)){n=Object.assign({},n);let f=r.types.slice(),g;for(let L of s.defineNodes){let{name:m,block:Re,composite:y,style:I}=typeof L=="string"?{name:L}:L;if(f.some(D=>D.name==m))continue;y&&(n[f.length]=(D,Oe,ze)=>y(Oe,ze,D.value));let T=f.length,J=y?["Block","BlockContext"]:Re?T>=l.ATXHeading1&&T<=l.SetextHeading2?["Block","LeafBlock","Heading"]:["Block","LeafBlock"]:void 0;f.push(z.define({id:T,name:m,props:J&&[[H.group,J]]})),I&&(g||(g={}),Array.isArray(I)||I instanceof De?g[m]=I:Object.assign(g,I))}r=new he(f),g&&(r=r.extend(fe(g)))}if(B(s.props)&&(r=r.extend(...s.props)),B(s.remove))for(let f of s.remove){let g=this.blockNames.indexOf(f),L=this.inlineNames.indexOf(f);g>-1&&(i[g]=o[g]=void 0),L>-1&&(h[L]=void 0)}if(B(s.parseBlock))for(let f of s.parseBlock){let g=a.indexOf(f.name);if(g>-1)i[g]=f.parse,o[g]=f.leaf;else{let L=f.before?R(a,f.before):f.after?R(a,f.after)+1:a.length-1;i.splice(L,0,f.parse),o.splice(L,0,f.leaf),a.splice(L,0,f.name)}f.endLeaf&&u.push(f.endLeaf)}if(B(s.parseInline))for(let f of s.parseInline){let g=d.indexOf(f.name);if(g>-1)h[g]=f.parse;else{let L=f.before?R(d,f.before):f.after?R(d,f.after)+1:d.length-1;h.splice(L,0,f.parse),d.splice(L,0,f.name)}}return s.wrap&&(k=k.concat(s.wrap)),new V(r,i,o,a,u,n,h,d,k)}getNodeType(e){let s=this.nodeTypes[e];if(s==null)throw new RangeError(`Unknown node type '${e}'`);return s}parseInline(e,s){let r=new Qe(this,e,s);e:for(let n=s;n<r.end;){let i=r.char(n);for(let o of this.inlineParsers)if(o){let a=o(r,i,n);if(a>=0){n=a;continue e}}n++}return r.resolveMarkers(0)}}function B(t){return t!=null&&t.length>0}function _(t){if(!Array.isArray(t))return t;if(t.length==0)return null;let e=_(t[0]);if(t.length==1)return e;let s=_(t.slice(1));if(!s||!e)return e||s;let r=(o,a)=>(o||A).concat(a||A),n=e.wrap,i=s.wrap;return{props:r(e.props,s.props),defineNodes:r(e.defineNodes,s.defineNodes),parseBlock:r(e.parseBlock,s.parseBlock),parseInline:r(e.parseInline,s.parseInline),remove:r(e.remove,s.remove),wrap:n?i?(o,a,h,d)=>n(i(o,a,h,d),a,h,d):n:i}}function R(t,e){let s=t.indexOf(e);if(s<0)throw new RangeError(`Position specified relative to unknown parser ${e}`);return s}let Ce=[z.none];for(let t=1,e;e=l[t];t++)Ce[t]=z.define({id:t,name:e,props:t>=l.Escape?[]:[[H.group,t in de?["Block","BlockContext"]:["Block","LeafBlock"]]],top:e=="Document"});const A=[];class Ee{constructor(e){this.nodeSet=e,this.content=[],this.nodes=[]}write(e,s,r,n=0){return this.content.push(e,s,r,4+n*4),this}writeElements(e,s=0){for(let r of e)r.writeTo(this,s);return this}finish(e,s){return C.build({buffer:this.content,nodeSet:this.nodeSet,reused:this.nodes,topID:e,length:s})}}class P{constructor(e,s,r,n=A){this.type=e,this.from=s,this.to=r,this.children=n}writeTo(e,s){let r=e.content.length;e.writeElements(this.children,s),e.content.push(this.type,this.from+s,this.to+s,e.content.length+4-r)}toTree(e){return new Ee(e).writeElements(this.children,-this.from).finish(this.type,this.to-this.from)}}class Ae{constructor(e,s){this.tree=e,this.from=s}get to(){return this.from+this.tree.length}get type(){return this.tree.type.id}get children(){return A}writeTo(e,s){e.nodes.push(this.tree),e.content.push(e.nodes.length-1,this.from+s,this.to+s,-1)}toTree(){return this.tree}}function c(t,e,s,r){return new P(t,e,s,r)}const Ie={resolve:"Emphasis",mark:"EmphasisMark"},Be={resolve:"Emphasis",mark:"EmphasisMark"},E={},U={};class b{constructor(e,s,r,n){this.type=e,this.from=s,this.to=r,this.side=n}}const ee="!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";let v=/[!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~\xA1\u2010-\u2027]/;try{v=new RegExp("[\\p{S}|\\p{P}]","u")}catch{}const F={Escape(t,e,s){if(e!=92||s==t.end-1)return-1;let r=t.char(s+1);for(let n=0;n<ee.length;n++)if(ee.charCodeAt(n)==r)return t.append(c(l.Escape,s,s+2));return-1},Entity(t,e,s){if(e!=38)return-1;let r=/^(?:#\d+|#x[a-f\d]+|\w+);/i.exec(t.slice(s+1,s+31));return r?t.append(c(l.Entity,s,s+1+r[0].length)):-1},InlineCode(t,e,s){if(e!=96||s&&t.char(s-1)==96)return-1;let r=s+1;for(;r<t.end&&t.char(r)==96;)r++;let n=r-s,i=0;for(;r<t.end;r++)if(t.char(r)==96){if(i++,i==n&&t.char(r+1)!=96)return t.append(c(l.InlineCode,s,r+1,[c(l.CodeMark,s,s+n),c(l.CodeMark,r+1-n,r+1)]))}else i=0;return-1},HTMLTag(t,e,s){if(e!=60||s==t.end-1)return-1;let r=t.slice(s+1,t.end),n=/^(?:[a-z][-\w+.]+:[^\s>]+|[a-z\d.!#$%&'*+/=?^_`{|}~-]+@[a-z\d](?:[a-z\d-]{0,61}[a-z\d])?(?:\.[a-z\d](?:[a-z\d-]{0,61}[a-z\d])?)*)>/i.exec(r);if(n)return t.append(c(l.Autolink,s,s+1+n[0].length,[c(l.LinkMark,s,s+1),c(l.URL,s+1,s+n[0].length),c(l.LinkMark,s+n[0].length,s+1+n[0].length)]));let i=/^!--[^>](?:-[^-]|[^-])*?-->/i.exec(r);if(i)return t.append(c(l.Comment,s,s+1+i[0].length));let o=/^\?[^]*?\?>/.exec(r);if(o)return t.append(c(l.ProcessingInstruction,s,s+1+o[0].length));let a=/^(?:![A-Z][^]*?>|!\[CDATA\[[^]*?\]\]>|\/\s*[a-zA-Z][\w-]*\s*>|\s*[a-zA-Z][\w-]*(\s+[a-zA-Z:_][\w-.:]*(?:\s*=\s*(?:[^\s"'=<>`]+|'[^']*'|"[^"]*"))?)*\s*(\/\s*)?>)/.exec(r);return a?t.append(c(l.HTMLTag,s,s+1+a[0].length)):-1},Emphasis(t,e,s){if(e!=95&&e!=42)return-1;let r=s+1;for(;t.char(r)==e;)r++;let n=t.slice(s-1,s),i=t.slice(r,r+1),o=v.test(n),a=v.test(i),h=/\s|^$/.test(n),d=/\s|^$/.test(i),u=!d&&(!a||h||o),k=!h&&(!o||d||a),f=u&&(e==42||!k||o),g=k&&(e==42||!u||a);return t.append(new b(e==95?Ie:Be,s,r,(f?1:0)|(g?2:0)))},HardBreak(t,e,s){if(e==92&&t.char(s+1)==10)return t.append(c(l.HardBreak,s,s+2));if(e==32){let r=s+1;for(;t.char(r)==32;)r++;if(t.char(r)==10&&r>=s+2)return t.append(c(l.HardBreak,s,r+1))}return-1},Link(t,e,s){return e==91?t.append(new b(E,s,s+1,1)):-1},Image(t,e,s){return e==33&&t.char(s+1)==91?t.append(new b(U,s,s+2,1)):-1},LinkEnd(t,e,s){if(e!=93)return-1;for(let r=t.parts.length-1;r>=0;r--){let n=t.parts[r];if(n instanceof b&&(n.type==E||n.type==U)){if(!n.side||t.skipSpace(n.to)==s&&!/[(\[]/.test(t.slice(s+1,s+2)))return t.parts[r]=null,-1;let i=t.takeContent(r),o=t.parts[r]=Ze(t,i,n.type==E?l.Link:l.Image,n.from,s+1);if(n.type==E)for(let a=0;a<r;a++){let h=t.parts[a];h instanceof b&&h.type==E&&(h.side=0)}return o.to}}return-1}};function Ze(t,e,s,r,n){let{text:i}=t,o=t.char(n),a=n;if(e.unshift(c(l.LinkMark,r,r+(s==l.Image?2:1))),e.push(c(l.LinkMark,n-1,n)),o==40){let h=t.skipSpace(n+1),d=xe(i,h-t.offset,t.offset),u;d&&(h=t.skipSpace(d.to),h!=d.to&&(u=Me(i,h-t.offset,t.offset),u&&(h=t.skipSpace(u.to)))),t.char(h)==41&&(e.push(c(l.LinkMark,n,n+1)),a=h+1,d&&e.push(d),u&&e.push(u),e.push(c(l.LinkMark,h,a)))}else if(o==91){let h=He(i,n-t.offset,t.offset,!1);h&&(e.push(h),a=h.to)}return c(s,r,a,e)}function xe(t,e,s){if(t.charCodeAt(e)==60){for(let n=e+1;n<t.length;n++){let i=t.charCodeAt(n);if(i==62)return c(l.URL,e+s,n+1+s);if(i==60||i==10)return!1}return null}else{let n=0,i=e;for(let o=!1;i<t.length;i++){let a=t.charCodeAt(i);if(S(a))break;if(o)o=!1;else if(a==40)n++;else if(a==41){if(!n)break;n--}else a==92&&(o=!0)}return i>e?c(l.URL,e+s,i+s):i==t.length?null:!1}}function Me(t,e,s){let r=t.charCodeAt(e);if(r!=39&&r!=34&&r!=40)return!1;let n=r==40?41:r;for(let i=e+1,o=!1;i<t.length;i++){let a=t.charCodeAt(i);if(o)o=!1;else{if(a==n)return c(l.LinkTitle,e+s,i+1+s);a==92&&(o=!0)}}return null}function He(t,e,s,r){for(let n=!1,i=e+1,o=Math.min(t.length,i+999);i<o;i++){let a=t.charCodeAt(i);if(n)n=!1;else{if(a==93)return r?!1:c(l.LinkLabel,e+s,i+1+s);if(r&&!S(a)&&(r=!1),a==91)return!1;a==92&&(n=!0)}}return null}class Qe{constructor(e,s,r){this.parser=e,this.text=s,this.offset=r,this.parts=[]}char(e){return e>=this.end?-1:this.text.charCodeAt(e-this.offset)}get end(){return this.offset+this.text.length}slice(e,s){return this.text.slice(e-this.offset,s-this.offset)}append(e){return this.parts.push(e),e.to}addDelimiter(e,s,r,n,i){return this.append(new b(e,s,r,(n?1:0)|(i?2:0)))}get hasOpenLink(){for(let e=this.parts.length-1;e>=0;e--){let s=this.parts[e];if(s instanceof b&&(s.type==E||s.type==U))return!0}return!1}addElement(e){return this.append(e)}resolveMarkers(e){for(let r=e;r<this.parts.length;r++){let n=this.parts[r];if(!(n instanceof b&&n.type.resolve&&n.side&2))continue;let i=n.type==Ie||n.type==Be,o=n.to-n.from,a,h=r-1;for(;h>=e;h--){let m=this.parts[h];if(m instanceof b&&m.side&1&&m.type==n.type&&!(i&&(n.side&1||m.side&2)&&(m.to-m.from+o)%3==0&&((m.to-m.from)%3||o%3))){a=m;break}}if(!a)continue;let d=n.type.resolve,u=[],k=a.from,f=n.to;if(i){let m=Math.min(2,a.to-a.from,o);k=a.to-m,f=n.from+m,d=m==1?"Emphasis":"StrongEmphasis"}a.type.mark&&u.push(this.elt(a.type.mark,k,a.to));for(let m=h+1;m<r;m++)this.parts[m]instanceof P&&u.push(this.parts[m]),this.parts[m]=null;n.type.mark&&u.push(this.elt(n.type.mark,n.from,f));let g=this.elt(d,k,f,u);this.parts[h]=i&&a.from!=k?new b(a.type,a.from,k,a.side):null,(this.parts[r]=i&&n.to!=f?new b(n.type,f,n.to,n.side):null)?this.parts.splice(r,0,g):this.parts[r]=g}let s=[];for(let r=e;r<this.parts.length;r++){let n=this.parts[r];n instanceof P&&s.push(n)}return s}findOpeningDelimiter(e){for(let s=this.parts.length-1;s>=0;s--){let r=this.parts[s];if(r instanceof b&&r.type==e)return s}return null}takeContent(e){let s=this.resolveMarkers(e);return this.parts.length=e,s}skipSpace(e){return x(this.text,e-this.offset)+this.offset}elt(e,s,r,n){return typeof e=="string"?c(this.parser.getNodeType(e),s,r,n):new Ae(e,s)}}function q(t,e){if(!e.length)return t;if(!t.length)return e;let s=t.slice(),r=0;for(let n of e){for(;r<s.length&&s[r].to<n.to;)r++;if(r<s.length&&s[r].from<n.from){let i=s[r];i instanceof P&&(s[r]=new P(i.type,i.from,i.to,q(i.children,[n])))}else s.splice(r++,0,n)}return s}const Ge=[l.CodeBlock,l.ListItem,l.OrderedList,l.BulletList];class Ve{constructor(e,s){this.fragments=e,this.input=s,this.i=0,this.fragment=null,this.fragmentEnd=-1,this.cursor=null,e.length&&(this.fragment=e[this.i++])}nextFragment(){this.fragment=this.i<this.fragments.length?this.fragments[this.i++]:null,this.cursor=null,this.fragmentEnd=-1}moveTo(e,s){for(;this.fragment&&this.fragment.to<=e;)this.nextFragment();if(!this.fragment||this.fragment.from>(e?e-1:0))return!1;if(this.fragmentEnd<0){let i=this.fragment.to;for(;i>0&&this.input.read(i-1,i)!=`
`;)i--;this.fragmentEnd=i?i-1:0}let r=this.cursor;r||(r=this.cursor=this.fragment.tree.cursor(),r.firstChild());let n=e+this.fragment.offset;for(;r.to<=n;)if(!r.parent())return!1;for(;;){if(r.from>=n)return this.fragment.from<=s;if(!r.childAfter(n))return!1}}matches(e){let s=this.cursor.tree;return s&&s.prop(H.contextHash)==e}takeNodes(e){let s=this.cursor,r=this.fragment.offset,n=this.fragmentEnd-(this.fragment.openEnd?1:0),i=e.absoluteLineStart,o=i,a=e.block.children.length,h=o,d=a;for(;;){if(s.to-r>n){if(s.type.isAnonymous&&s.firstChild())continue;break}let u=Pe(s.from-r,e.ranges);if(s.to-r<=e.ranges[e.rangeI].to)e.addNode(s.tree,u);else{let k=new C(e.parser.nodeSet.types[l.Paragraph],[],[],0,e.block.hashProp);e.reusePlaceholders.set(k,s.tree),e.addNode(k,u)}if(s.type.is("Block")&&(Ge.indexOf(s.type.id)<0?(o=s.to-r,a=e.block.children.length):(o=h,a=d,h=s.to-r,d=e.block.children.length)),!s.nextSibling())break}for(;e.block.children.length>a;)e.block.children.pop(),e.block.positions.pop();return o-i}}function Pe(t,e){let s=t;for(let r=1;r<e.length;r++){let n=e[r-1].to,i=e[r].from;n<t&&(s-=i-n)}return s}const Je=fe({"Blockquote/...":p.quote,HorizontalRule:p.contentSeparator,"ATXHeading1/... SetextHeading1/...":p.heading1,"ATXHeading2/... SetextHeading2/...":p.heading2,"ATXHeading3/...":p.heading3,"ATXHeading4/...":p.heading4,"ATXHeading5/...":p.heading5,"ATXHeading6/...":p.heading6,"Comment CommentBlock":p.comment,Escape:p.escape,Entity:p.character,"Emphasis/...":p.emphasis,"StrongEmphasis/...":p.strong,"Link/... Image/...":p.link,"OrderedList/... BulletList/...":p.list,"BlockQuote/...":p.quote,"InlineCode CodeText":p.monospace,"URL Autolink":p.url,"HeaderMark HardBreak QuoteMark ListMark LinkMark EmphasisMark CodeMark":p.processingInstruction,"CodeInfo LinkLabel":p.labelName,LinkTitle:p.string,Paragraph:p.content}),lt=new V(new he(Ce).extend(Je),Object.keys(N).map(t=>N[t]),Object.keys(N).map(t=>Se[t]),Object.keys(N),_e,de,Object.keys(F).map(t=>F[t]),Object.keys(F),[]);function Ke(t,e,s){let r=[];for(let n=t.firstChild,i=e;;n=n.nextSibling){let o=n?n.from:s;if(o>i&&r.push({from:i,to:o}),!n)break;i=n.to}return r}function ht(t){let{codeParser:e,htmlParser:s}=t;return{wrap:Te((n,i)=>{let o=n.type.id;if(e&&(o==l.CodeBlock||o==l.FencedCode)){let a="";if(o==l.FencedCode){let d=n.node.getChild(l.CodeInfo);d&&(a=i.read(d.from,d.to))}let h=e(a);if(h)return{parser:h,overlay:d=>d.type.id==l.CodeText}}else if(s&&(o==l.HTMLBlock||o==l.HTMLTag))return{parser:s,overlay:Ke(n.node,n.from,n.to)};return null})}}const Ye={resolve:"Strikethrough",mark:"StrikethroughMark"},We={defineNodes:[{name:"Strikethrough",style:{"Strikethrough/...":p.strikethrough}},{name:"StrikethroughMark",style:p.processingInstruction}],parseInline:[{name:"Strikethrough",parse(t,e,s){if(e!=126||t.char(s+1)!=126||t.char(s+2)==126)return-1;let r=t.slice(s-1,s),n=t.slice(s+2,s+3),i=/\s|^$/.test(r),o=/\s|^$/.test(n),a=v.test(r),h=v.test(n);return t.addDelimiter(Ye,s,s+2,!o&&(!h||i||a),!i&&(!a||o||h))},after:"Emphasis"}]};function M(t,e,s=0,r,n=0){let i=0,o=!0,a=-1,h=-1,d=!1,u=()=>{r.push(t.elt("TableCell",n+a,n+h,t.parser.parseInline(e.slice(a,h),n+a)))};for(let k=s;k<e.length;k++){let f=e.charCodeAt(k);f==124&&!d?((!o||a>-1)&&i++,o=!1,r&&(a>-1&&u(),r.push(t.elt("TableDelimiter",k+n,k+n+1))),a=h=-1):(d||f!=32&&f!=9)&&(a<0&&(a=k),h=k+1),d=!d&&f==92}return a>-1&&(i++,r&&u()),i}function te(t,e){for(let s=e;s<t.length;s++){let r=t.charCodeAt(s);if(r==124)return!0;r==92&&s++}return!1}const ve=/^\|?(\s*:?-+:?\s*\|)+(\s*:?-+:?\s*)?$/;class se{constructor(){this.rows=null}nextLine(e,s,r){if(this.rows==null){this.rows=!1;let n;if((s.next==45||s.next==58||s.next==124)&&ve.test(n=s.text.slice(s.pos))){let i=[];M(e,r.content,0,i,r.start)==M(e,n,s.pos)&&(this.rows=[e.elt("TableHeader",r.start,r.start+r.content.length,i),e.elt("TableDelimiter",e.lineStart+s.pos,e.lineStart+s.text.length)])}}else if(this.rows){let n=[];M(e,s.text,s.pos,n,e.lineStart),this.rows.push(e.elt("TableRow",e.lineStart+s.pos,e.lineStart+s.text.length,n))}return!1}finish(e,s){return this.rows?(e.addLeafElement(s,e.elt("Table",s.start,s.start+s.content.length,this.rows)),!0):!1}}const et={defineNodes:[{name:"Table",block:!0},{name:"TableHeader",style:{"TableHeader/...":p.heading}},"TableRow",{name:"TableCell",style:p.content},{name:"TableDelimiter",style:p.processingInstruction}],parseBlock:[{name:"Table",leaf(t,e){return te(e.content,0)?new se:null},endLeaf(t,e,s){if(s.parsers.some(n=>n instanceof se)||!te(e.text,e.basePos))return!1;let r=t.scanLine(t.absoluteLineEnd+1).text;return ve.test(r)&&M(t,e.text,e.basePos)==M(t,r,e.basePos)},before:"SetextHeading"}]};class tt{nextLine(){return!1}finish(e,s){return e.addLeafElement(s,e.elt("Task",s.start,s.start+s.content.length,[e.elt("TaskMarker",s.start,s.start+3),...e.parser.parseInline(s.content.slice(3),s.start+3)])),!0}}const st={defineNodes:[{name:"Task",block:!0,style:p.list},{name:"TaskMarker",style:p.atom}],parseBlock:[{name:"TaskList",leaf(t,e){return/^\[[ xX]\][ \t]/.test(e.content)&&t.parentType().name=="ListItem"?new tt:null},after:"SetextHeading"}]},re=/(www\.)|(https?:\/\/)|([\w.+-]{,100}@)|(mailto:|xmpp:)/gy,ne=/[\w-]+(\.[\w-]+)+(\/[^\s<]*)?/gy,rt=/[\w-]+\.[\w-]+($|\/)/,ie=/[\w.+-]+@[\w-]+(\.[\w.-]+)+/gy,ae=/\/[a-zA-Z\d@.]+/gy;function oe(t,e,s,r){let n=0;for(let i=e;i<s;i++)t[i]==r&&n++;return n}function nt(t,e){ne.lastIndex=e;let s=ne.exec(t);if(!s||rt.exec(s[0])[0].indexOf("_")>-1)return-1;let r=e+s[0].length;for(;;){let n=t[r-1],i;if(/[?!.,:*_~]/.test(n)||n==")"&&oe(t,e,r,")")>oe(t,e,r,"("))r--;else if(n==";"&&(i=/&(?:#\d+|#x[a-f\d]+|\w+);$/.exec(t.slice(e,r))))r=e+i.index;else break}return r}function le(t,e){ie.lastIndex=e;let s=ie.exec(t);if(!s)return-1;let r=s[0][s[0].length-1];return r=="_"||r=="-"?-1:e+s[0].length-(r=="."?1:0)}const it={parseInline:[{name:"Autolink",parse(t,e,s){let r=s-t.offset;if(r&&/\w/.test(t.text[r-1]))return-1;re.lastIndex=r;let n=re.exec(t.text),i=-1;if(!n)return-1;if(n[1]||n[2]){if(i=nt(t.text,r+n[0].length),i>-1&&t.hasOpenLink){let o=/([^\[\]]|\[[^\]]*\])*/.exec(t.text.slice(r,i));i=r+o[0].length}}else n[3]?i=le(t.text,r):(i=le(t.text,r+n[0].length),i>-1&&n[0]=="xmpp:"&&(ae.lastIndex=i,n=ae.exec(t.text),n&&(i=n.index+n[0].length)));return i<0?-1:(t.addElement(t.elt("URL",s,i+t.offset)),i+t.offset)}}]},ft=[et,st,We,it];function Ne(t,e,s){return(r,n,i)=>{if(n!=t||r.char(i+1)==t)return-1;let o=[r.elt(s,i,i+1)];for(let a=i+1;a<r.end;a++){let h=r.char(a);if(h==t)return r.addElement(r.elt(e,i,a+1,o.concat(r.elt(s,a,a+1))));if(h==92&&o.push(r.elt("Escape",a,a+++2)),S(h))break}return-1}}const dt={defineNodes:[{name:"Superscript",style:p.special(p.content)},{name:"SuperscriptMark",style:p.processingInstruction}],parseInline:[{name:"Superscript",parse:Ne(94,"Superscript","SuperscriptMark")}]},ut={defineNodes:[{name:"Subscript",style:p.special(p.content)},{name:"SubscriptMark",style:p.processingInstruction}],parseInline:[{name:"Subscript",parse:Ne(126,"Subscript","SubscriptMark")}]},pt={defineNodes:[{name:"Emoji",style:p.character}],parseInline:[{name:"Emoji",parse(t,e,s){let r;return e!=58||!(r=/^[a-zA-Z_0-9]+:/.exec(t.slice(s+1,t.end)))?-1:t.addElement(t.elt("Emoji",s,s+1+r[0].length))}}]};export{pt as E,ft as G,V as M,ut as S,lt as a,dt as b,ht as p};