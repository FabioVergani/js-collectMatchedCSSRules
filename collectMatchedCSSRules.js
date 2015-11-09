void((function($w){
 var w=$w,d=w.document,q='mydatas',j=w[q],k=j||(
	w[q]={
	 pseudo:['',':focus',':hover',':active',':link',':visited',':checked',':empty',':disabled',':enabled',':first-child',':first-of-type',':last-child',':last-of-type',':only-of-type',':only-child',':in-range',':out-of-range',':read-only',':read-write',':required',':optional',':valid',':invalid',':target',':root',':after',':before',':first-letter',':first-line','selection'],
	 wop:'<!DOCTYPE html><html><head><meta charset="UTF-8"><title>*Used* cssrules for:&emsp;'+w.location.href+'</title><body style="white-space:pre;font-family:monospace;">',
	 rgx:{
		 rgb:/rgb(a?)\s*\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(,\s*(1|0(\.\d+)?)\s*)?\)/gi,
		 cssunit:/(\d\.)?(\d)\s*(%|px|mm|cm|in|em|rem|en|ex|ch|vm|vw|vh)/gi,
	 }
	}
 ),
 cux=(q=k.rgx,q.cssunit),
 rgbx=q.rgb,
 t=k.wop;

 q=[];
 k=k.pseudo;
 j=k.length+0;

 for(
	var f=w.getMatchedCSSRules,
	g=function(a,b){
	 var e=f(a,b);
		if(e!==null){
		for(var s,r=e,m=q,i=0,l=r.length+0;i<l;i++){
		 s=r[i].cssText;
		 if(m.indexOf(s)===-1){
			m[m.length]=s;
		 };
		};
	 };
	},
 o=d.createTreeWalker(d,1,function(){return 1;},true),e=o.currentNode=d.documentElement;
 e!==null;
 e=o.nextNode()){
	for(var i=0,m=k,l=j,h=g;i<l;i++){h(e,m[i]);};
 };

 q[q.unshift(t)]='</body>';
 t=q.join('\n');

 //toHex
 t=t.replace(rgbx,function(s,A,R,G,B,_,O,N){
	var a=A,r=R,g=G,b=B,o=O,n=N;
	if(a==='a'){
		o=(n?n.substr(0,3):o);
		if(o==='0'){
			o='transparent';
		}else{
			o=['rgba('+r,g,b,o+')'].join(',');
		};
	}else{
		a=function(s){return('0'+parseInt(s).toString(16)).slice(-2);};
		o=(r===g && g===b);
		r=a(r);
		if(o===true){g=r.charAt(1);b=r.charAt(2);}else{g=a(g);b=a(b);};
		o='#'+r+g+b;
	};
	return o;
 });

 //fixUnit
 t=t.replace(cux,function(s,z,n,u){var t=n;return t==='0'?t:t+u;});

 //Result
 if(w=w.open('about:blank','','menubar=no,toolbar=no')){
  d=w.document;
  d.write(t);
  d.close();
 };

})(window));
