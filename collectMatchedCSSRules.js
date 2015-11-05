//autore:fabio vergani

void((function($w){
 var w=$w,d=w.document,q='pseudo',k=w[q]||(w[q]=['',':focus',':hover',':active',':link',':visited',':checked',':empty',':disabled',':enabled',':first-child',':first-of-type',':last-child',':last-of-type',':only-of-type',':only-child',':in-range',':out-of-range',':read-only',':read-write',':required',':optional',':valid',':invalid',':target',':root',':after',':before',':first-letter',':first-line','selection']),j=k.length+0;
 q=[];
 for(
	var f=w.getMatchedCSSRules,
	g=function(a,b){var e=f(a,b);if(e!==null){for(var s,r=e,m=q,i=0,l=r.length+0;i<l;i++){
		s=r[i].cssText;
		if(m.indexOf(s)===-1){m[m.length]=s;};
	};};},
	o=d.createTreeWalker(d,1,function(){return 1;},true),
	e=o.currentNode=d.documentElement;
	e!==null;
	e=o.nextNode()
 ){for(var i=0,m=k,l=j,h=g;i<l;i++){h(e,m[i]);};};

 q[q.unshift('<!DOCTYPE html><html><head><meta charset="UTF-8"><body><pre>')]='</pre></body>';

 w=w.open('about:blank','UsedCss for:'w.location,'menubar=no,toolbar=no')
 d=w.document;
 d.write(q.join('\n'));
 d.close();
})(window));
//==========
