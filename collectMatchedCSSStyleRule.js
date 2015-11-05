void((function($w){

 var w=$w, d=w.document, q=[];

 for(
	var o=d.createTreeWalker(d,1,function(){return 1;},true),
	e=o.currentNode=d.documentElement,
	f=w.getMatchedCSSRules,
	g=null;
	e!==null;
	e=o.nextNode()
 ){
	g=f(e,'');
	if(g!==null){
		for(var r=g,m=q,i=0,l=r.length;i<l;i++){
			m[m.length]=r[i];
      };
	};

 };


console.log(q);

})(window));
