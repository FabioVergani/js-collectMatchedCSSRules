void((function($w){

 var w=$w, d=w.document, q='pseudo', pe=w[q]||(w[q]=['',':focus',':hover',':active',':link',':visited',':checked',':empty',':disabled',':enabled',':first-child',':first-of-type',':last-child',':last-of-type',':only-of-type',':only-child',':in-range',':out-of-range',':read-only',':read-write',':required',':optional',':valid',':invalid',':target',':root',':after',':before',':first-letter',':first-line','selection']),pL=pe.length+0;
 q=[];
 for(
	var f=w.getMatchedCSSRules,
	g=function(a,b){var e=f(a,b);if(e!==null){for(var r=e,m=q,i=0,l=r.length+0;i<l;i++){m[m.length]=r[i];};};},
	o=d.createTreeWalker(d,1,function(){return 1;},true),
	e=o.currentNode=d.documentElement;
	e!==null;
	e=o.nextNode()
 ){for(var i=0,m=pe,l=pL,h=g;i<l;i++){h(e,m[i]);};};

console.log(q);

})(window));
