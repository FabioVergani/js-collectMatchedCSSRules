void((function($w){
 var w=$w, d=w.document, querySelector=d.querySelector.bind(d), q='mydatas',j=w[q],k=j||(
	w[q]=(q=w.top.screen,{
	 nwop:'width='+(q.width-210)+',height='+(q.height-120)+',menubar=no,toolbar=no',
	 pseudo:['',':focus',':hover',':active',':link',':visited',':checked',':empty',':disabled',':enabled',':first-child',':first-of-type',':last-child',':last-of-type',':only-of-type',':only-child',':in-range',':out-of-range',':read-only',':read-write',':required',':optional',':valid',':invalid',':target',':root',':after',':before',':first-letter',':first-line','selection'],
	 wop:'<!DOCTYPE html><html><head><meta charset="UTF-8"><title>*Used* cssrules for:&emsp;'+w.location.href+'</title><body style="white-space:pre;font-family:monospace;"></body>',
	 rgx:{
		 rgb:/rgb(a?)\s*\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(,\s*(1|0(\.\d+)?)\s*)?\)/gi,
		 cssunit:/(\d\.)?(\d)\s*(%|px|mm|cm|in|em|rem|en|ex|ch|vm|vw|vh)/gi,
		 pseudopart:/(::?[^ ,:.\(]+)(\(.+\))?/gi,
	 }
	})
 ),
 nwp=k.nwop;
 cux=(q=k.rgx,q.cssunit),
 isolate=q.pseudopart,
 rgbx=q.rgb,
 t=k.wop;

 q=[];
 skip=[];
 k=k.pseudo;//unlink
 j=k.length+0;

 for(
	var f=w.getMatchedCSSRules, alreadyfound=skip,$elector=querySelector,
	g=function(a,b){
	 var e=f(a,b);
	 if(e!==null){


		for(var sheet,selectors,u,s,r=e,m=q,ignore=alreadyfound,i=0,l=r.length+0;i<l;i++){
		 u=r[i];

/*mediaList,matchedmedia=[],
		 sheet=u.parentStyleSheet;
		 medias=sheet.media;
		 for(var mediaList=medias, mm=matchedmedia, mediastr, mli=0, mll=mediaList.length; mli <mll ; mli++) {
            mediastr=mediaList.item(i);
			if(window.matchMedia(mediastr).matches!==null){
				mm[mm.length]=mediastr;
			};mm[mm.length]=mediastr;
        }
*/
			s=u.cssText;
			if(ignore.indexOf(s)===-1){
				ignore[m.length]=s;
				u=s.indexOf('{');//unlink
				for(var es,is=0, pp=isolate,query=$elector, rs=selectors=[],unused=[],dest,ms=s.substr(0,u).split(','), ls=ms.length+0;is<ls;is++){
					es=ms[is];
					dest=(query(es.replace(pp,''))===null?unused:selectors);
					dest[dest.length]=es;
				};
				unused=(unused.length?('/*'+unused.join(',')+'*/\n'):'');
				m[m.length]=unused+selectors.join(',')+s.substr(u)//selectors+declarations;
			};




		};


	 };
	},
 o=d.createTreeWalker(d,1,function(){return 1;},true),e=o.currentNode=d.documentElement;
 e!==null;
 e=o.nextNode()){
	for(var i=0,m=k,l=j,h=g;i<l;i++){h(e,m[i]);};
 };

 q=[t,q.join('\n'),'</body>'];

 t=q[1];
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


 //format
t=t.replace(/(\{|:|;|,|\})\s+/gi,function(s,a){return a;});
t=t.replace(/(;|\{)/gi,'$1\n');
t=t.replace(/(\})/gi,'$1\n\n');
t=t.replace(/\s+\{/gi,'{');
t=t.replace(/\n[^\{\}]+;/gi,function(a){return a.replace(/\n/gi,'\n\u0020');});

q[1]=t;

 //Result
 if(w=w.open('about:blank','',nwp)){
  d=w.document;
  d.write(q.join(''));
  d.close();
  w.focus();
 };

})(window));
//==============
