(function(){var r=window.cfx,a=window.sfx,v={Version:"7.4.5649.31763"};r.annotation=v;v.AnnImageMode={Original:0,Stretch:1,Tile:2};v.AttachMode={None:0,Point:1,Elastic:2};v.BalloonTailCorner={TopLeft:0,TopRight:1,BottomRight:2,BottomLeft:3,Top:4,Right:5,Bottom:6,Left:7};var w=function(){};w.d=function(a){return 0==a.w||0==a.h};w.b=function(e,l,A){l.c()||A.c()||(e.x=a.i(e.x*l.x,A.x),e.w=a.i(e.w*l.x,A.x),e.y=a.i(e.y*l.y,A.y),e.h=a.i(e.h*l.y,A.y))};w.c=function(e,l,A,c){var h=0,m=0,g=0,b=0;e&&(h=c.x,
m=c.y,g=c.w,b=c.h);var f=new a._p1(h);l.ie3(f,A+"Left",0);h=f.a;f.a=m;l.ie3(f,A+"Top",0);m=f.a;f.a=g;l.ie3(f,A+"Width",0);g=f.a;f.a=b;l.ie3(f,A+"Height",0);b=f.a;e||(c.x=h,c.y=m,c.w=g,c.h=b)};w.a=function(a,e,l){a.m(a.x<=a.g()?e:-e,a.y<=a.c()?l:-l)};var D=function R(){R._ic();this.a=null};v.SerializableArrowCap=D;D.prototype={_0_1:function(){return this},_01_1:function(a){this.a=a;return this},ieO:function(e,l){null==this.a&&(this.a=(new a.av)._0av(5,5,!0));this.a.setBaseCap(l.ie7("BaseCap",this.a.getBaseCap(),
3));var c=this.a.baseInset,h=new a._p1(c);l.ie4(h,"BaseInset",1);c=h.a;this.a.baseInset=c;c=this.a.filled;h.a=c;l.ie6(h,"Filled",!0);c=h.a;this.a.filled=c;c=this.a.h;h.a=c;l.ie4(h,"Height",5);c=h.a;this.a.h=c;c=this.a.w;h.a=c;l.ie4(h,"Width",5);c=h.a;this.a.w=c;c=this.a.middleInset;h.a=c;l.ie4(h,"MiddleInset",0);c=h.a;this.a.middleInset=c;this.a.setStrokeJoin(l.ie7("StrokeJoin",this.a.getStrokeJoin(),0));c=this.a.widthScale;h.a=c;l.ie4(h,"WidthScale",1);c=h.a;this.a.widthScale=c}};D._dt("CWAS",a.SA,
0,r.ieN);var H=function A(){A._ic();this.a=this.b=this.c=null};v.AnnotationTooltip=H;H.prototype={_0_1:function(){return this},getData:function(){return this.c},setData:function(a){this.c=a},getTemplate:function(){return this.b},setTemplate:function(a){this.b=a},getTitle:function(){return this.a},setTitle:function(a){this.a=a}};H._dt("CWAA",a.SA,0);var l=function c(){c._ic();this.n=this.f=this.d=this.g=this.e=this.b=this.w=null;this.h=this.m=this.v=this.A=0;this.O=null;this.I=!1;this.u=0;this.M=this.H=
!1;this.j=null;this.z=!1};l.prototype={_0dO:function(){this.l=new a.m;this.a=new a.c;this.c=new a.c;this.N=new a.c;this.p=new a.c;this.M=!1;this.f=null;this.l._cf(a.m.g());this.b=(new r.Line)._01_2(3);this.b.setColor(a.m.c());this.h=0;this.z=!0;this.u=-1;this.A=5;this.v=this.m=1;return this},_01dO:function(c){this._0dO();this.a._cf(c);this.r();return this},getAnchor:function(){return this.A},setAnchor:function(c){this.A=c;this.detach()},bA:function(){return this.h},getBorder:function(){return this.b},
setBorder:function(c){this.b=c},B:function(){var c=this.c._nc();this.M&&c.m(4,4);return c},getColor:function(){return this.l},setColor:function(c){c=a.m._t(c);this.l._cf(c)},id5:function(){return null},getHeight:function(){return this.c.h},setHeight:function(c){this.x(0,c-this.c.h,!0,576,!1)},id6:function(){return 14},getLeft:function(){return this.c.x},setLeft:function(c){this.y(c-this.c.x,0,!0,!1)},getObjectBounds:function(){return this.a},setObjectBounds:function(c){this.a._cf(c);this.r()},getPaintBefore:function(){return this.I},
setPaintBefore:function(c){this.I=c},getPattern:function(){return this.u},setPattern:function(c){this.u=c},getPlotAreaOnly:function(){return this.H},setPlotAreaOnly:function(c){this.H=c},T:function(){return(new a.g)._01g(this.c.g()-this.c.x,this.c.c()-this.c.y)},getTag:function(){return this.O},setTag:function(c){this.O=c},getToolTip:function(){null==this.j&&(this.j=(new H)._0_1());return this.j},getTop:function(){return this.c.y},setTop:function(c){this.y(0,c-this.c.y,!0,!1)},getVisible:function(){return this.z},
setVisible:function(c){this.z=c},getWidth:function(){return this.c.w},setWidth:function(c){this.x(c-this.c.w,0,!0,2112,!1)},attach:function(c,a){this.v=this.m=1;this.C(1,[c,a])},C:function(c,a){var m=!1,m=!1;0!=c?null==a&&(1==c?a=[0,0]:2==c&&(a=[0,0,0,0]),m=!0):a=null;this.f=a;this.h=c;this.k(m)},attachElastic:function(c,a,m,g){this.C(2,[c,a,m,g])},attachAlign:function(c,a,m,g){this.v=c;this.m=m;this.C(1,[a,g])},r:function(){this.k(!0)},k:function(c){c&&0!=this.h&&null!=this.e&&this.V();this.p._cf(this.a);
this.c._cf(this.i(this.a._nc()))},ab:function(){return-1==this.u?(new a.ar)._0ar(a.m.o(this.l,a.m.g())?a.m.b:this.l):(new a.aB)._0aB(this.u,this.b.getColor(),this.l)},aa:function(){if(a.m.o(this.b.getColor(),a.m.g()))return(new a.ao)._01ao(a.m.g());var c=this.b.c(a.m.b._nc());c.sb(1);return c},detach:function(){this.C(0,null)},_d:function(){this._dispose1(!0)},_dispose1:function(c){null!=this.g&&this.g._d();null!=this.d&&this.d._d()},flip:function(c){this.R(c,-1)},R:function(c,h){var m=this.a._nc();
c?-1==h?this.a._cf(a.c.l(m.x,m.c(),m.g(),m.y)):this.a._cf(a.c.l(m.x,h-m.c(),m.g(),h-m.y)):-1==h?this.a._cf(a.c.l(m.g(),m.y,m.x,m.c())):this.a._cf(a.c.l(h-m.g(),m.y,h-m.x,m.c()));this.r()},ifi:function(c){var a=null;switch(c){case 1:return"A,"+this.n;case 2:a=this.W();if(null!=a)return"Annotation"+a+" AnnotationObj"+this.n;break;case 0:if(null!=this.j)return"A";break;case 4:if(null!=this.j)return this.j.a}return null},ifl:function(a){if(null!=this.j){var h=this.j.c;if(null!=h)return h[a]}return null},
ifj:function(a){switch(a){case 5:return this.w;case 7:if(null!=this.j)return(new r.bf)._0bf(this.j.b)}return null},P:function(){var c=new a.c;null!=this.e&&(c._cf(this.B()),c.m(this.b.d,this.b.d),this.e.iaD(c._nc()))},X:function(c){var h=0,m=0,g=0,b=0;c=c._nc();switch(this.h){case 1:g=new a._pN(h,m,this.f[0],this.f[1]);b=this.e.iaE(g,1);h=g.a;m=g.b;this.f[0]=g.c;this.f[1]=g.d;if(!b)break;switch(this.v){case 0:c.x=h;break;case 2:c.x=h-c.w;break;case 1:c.x=h-a.i(c.w,2)}switch(this.m){case 0:c.y=m;break;
case 2:c.y=m-c.h;break;case 1:c.y=m-a.i(c.h,2)}break;case 2:var f=new a._pN(h,m,this.f[0],this.f[1]),d=this.e.iaE(f,1),h=f.a,m=f.b;this.f[0]=f.c;this.f[1]=f.d;if(!d)break;f=new a._pN(g,b,this.f[2],this.f[3]);d=this.e.iaE(f,1);g=f.a;b=f.b;this.f[2]=f.c;this.f[3]=f.d;if(!d)break;c.x=h;c.y=m;c.w=g-h;c.h=b-m}return c},y:function(a,h,m,g){this.a._cf(this.p);this.a.q(a,h);m&&this.k(g)},i:function(a){if(0>a.w){var h=a.w;a.w=-h;a.x+=h}0>a.h&&(h=a.h,a.h=-h,a.y+=h);return a},G:function(a,h){this.y(a,h,!0,!1)},
L:function(a){if(this.z){var h=a.idd();this.n=this.w.f();a.sidd(this);this.g=this.ab();this.d=this.aa();this.Y(a,!1,this.p._nc());this.g._d();this.g=null;this.d._d();this.d=null;a.sidd(h)}},V:function(){var c=0,h=0;switch(this.h){case 1:switch(this.v){case 0:c=this.a.x;break;case 2:c=this.a.g();break;case 1:c=a.i(this.a.x+this.a.g(),2)}switch(this.m){case 0:h=this.a.y;break;case 2:h=this.a.c();break;case 1:h=a.i(this.a.y+this.a.c(),2)}c=new a._pN(c,h,this.f[0],this.f[1]);h=this.e.iaE(c,0);this.f[0]=
c.c;this.f[1]=c.d;h||(this.h=0);break;case 2:c=this.a.x;h=this.a.y;c=new a._pN(c,h,this.f[0],this.f[1]);h=this.e.iaE(c,0);this.f[0]=c.c;this.f[1]=c.d;if(!h){this.h=0;break}c=this.a.g();h=this.a.c();c=new a._pN(c,h,this.f[2],this.f[3]);h=this.e.iaE(c,0);this.f[2]=c.c;this.f[3]=c.d;h||(this.h=0)}},refresh:function(){0!=this.h&&this.t((new a.e)._01e(0,0),(new a.e)._01e(0,0));this.P()},t:function(a,h){this.N._cf(this.a);if(!this.a.SB(this.p))return!1;0!=this.h&&(this.a._cf(this.X(this.a)),this.k(!1));
return!1},x:function(a,h,m,g,b){this.a._cf(this.p);320==(g&320)&&(this.a.y+=h,this.a.h-=h);576==(g&576)&&(this.a.h+=h);1088==(g&1088)&&(this.a.x+=a,this.a.w-=a);2112==(g&2112)&&(this.a.w+=a);m&&this.k(b)},F:function(){this.a._cf(this.N);this.p._cf(this.a);this.c._cf(this.i(this.a._nc()))},rotate:function(c){this.E(c,(new a.e)._01e(0,0))},E:function(c,h){h.c()&&(h.x=a.i(this.a.x+this.a.g()+1,2),h.y=a.i(this.a.y+this.a.c()+1,2));this.a.q(-h.x,-h.y);c?this.a._cf(a.c.l(-this.a.y,this.a.x,-this.a.c(),
this.a.g())):this.a._cf(a.c.l(this.a.y,-this.a.x,this.a.c(),-this.a.g()));this.a.q(h.x,h.y);this.r()},U:function(a,h){this.a._cf(a);h&&this.r()},D:function(a){this.w=a;this.e=null!=a?a.c:null}};l._dt("CWAA",a.SA,0,r.ieN,r.ifh,r.ifk,a.Su);var e=function h(){h._ic();this._0_3()};v.AnnotationVector=e;e.prototype={_0_3:function(){this._bc._0dO.call(this);this.an=(new r.DataTemplate)._0_2();return this},W:function(){return"Vector"},getTemplate:function(){return this.an.t()},setTemplate:function(a){this.an.st(a)},
Y:function(h,m,g){if(!a.b.p(this.an.t())){m=a.d.r(g);for(g=this.an.id().Sb();1==g.SK();){var b=g.SM();switch(b.bA()){case "F":case "Fill":b.sa(this.g);break;case "S":case "Stroke":b.sa(this.d);break;case "W":case "Width":b.sa(m.w);break;case "H":case "Height":b.sa(m.h);break;case "FC":case "FillColor":b.sa(this.l);break;case "ST":case "StrokeThickness":b.sa(this.b.d);break;case "SD":case "StrokeDashStyle":b.sa(this.b.e)}}this.an.v(h,m,1,0)}}};e._dt("CWAA",l,0);var z=function m(){m._ic();this.av=this.ao=
this.ax=0;this.ay=this.aq=null;this.ar=this.aB=0;this.at=!1;this.ap=0;this._0_3()};v.AnnotationText=z;z.prototype={_0_3:function(){this._bc._0dO.call(this);this.aw=new a.m;this.ap=1024;this.av=this.ax=this.ar=0;this.as="Text";this.aw._cf(a.m.c());this.at=!1;return this},_01_3:function(a){this._0_3();this.as=a;this.sizeToFit();return this},getAlign:function(){return this.ax},setAlign:function(a){this.ax=a},getClip:function(){return 0==(this.ap&512)},setClip:function(a){this.ap=a?this.ap&-513:this.ap|
512},getCornerRadius:function(){return this.ao},setCornerRadius:function(a){this.ao=a},getFont:function(){return this.aq},setFont:function(m){this.aq=m=a.o._t(m);this.sizeToFit()},getLineAlignment:function(){return this.av},setLineAlignment:function(a){this.av=a},aA:function(){return null!=this.aq?this.aq:null!=this.e?this.e.iaA():null},W:function(){return"TextBorder"},aF:function(){return"Text"},getOrientation:function(){return this.ar},setOrientation:function(a){this.ar=a},getText:function(){return this.as},
setText:function(a){this.as=a;this.sizeToFit()},getTextColor:function(){return this.aw},setTextColor:function(m){m=a.m._t(m);this.aw._cf(m)},aE:function(){var a=this.c._nc();a.m(-this.b.d,-this.b.d);w.a(a,-(this.ao-1),-(this.ao-1));return a},getWordWrap:function(){return 0!=(this.ap&1024)},setWordWrap:function(a){this.ap=a?this.ap|1024:this.ap&-1025},aG:function(m,g,b,f){var d=0==g||2==g,n=0;d?(n=a.i(b.x+b.g(),2),f=a.a.p(f,a.i(b.w,2)-f)):(n=a.i(b.y+b.c(),2),f=a.a.p(f,a.i(b.h,2)-f));var q=n-f,k=n+
f;if(d){var t=d=0;0==g?(d=b.y,t=d-f):(d=b.c(),t=d+f,g=q,q=k,k=g);m.t(q,d,n,t);m.t(n,t,k,d)}else t=d=0,1==g?(d=b.g(),t=d+f):(d=b.x,t=d-f,g=q,q=k,k=g),m.t(d,q,t,n),m.t(t,n,d,k)},aD:function(a,g,b,f,d,n,q){d*=2;d=[(new E)._01dP(g.x,g.y,d,d,180,90),(new E)._01dP(g.g()-d,g.y,d,d,270,90),(new E)._01dP(g.g()-d,g.c()-d,d,d,0,90),(new E)._01dP(g.x,g.c()-d,d,d,90,90)];for(var k=0;k<b;k++)f=(f+1)%4,d[f].e(a),f==n&&this.aG(a,n,g,q)},k:function(a){l.prototype.k.call(this,a)},_dispose1:function(a){null!=this.aq&&
(this.aq._d(),this.aq=null);l.prototype._dispose1.call(this,a)},aC:function(m){var g=this.aE()._nc(),b=(new a.e)._01e(a.i(g.x+g.g()+1,2),a.i(g.y+g.c()+1,2));g.q(-b.x,-b.y);for(var f=0;f<this.ar;f++)g._cf(a.c.l(-g.y,g.x,-g.c(),g.g()));g.q(b.x,b.y);g._cf(this.i(g._nc()));b=(new r.cG)._04cG(this.aw._nc(),this.ax,this.av,this.ap,900*this.ar,!0);b.i(m,this.aA(),this.as,g);b._d()},Y:function(m,g,b){g=this.i(b);0==this.ao?(m.idU(this.g,g.x,g.y,g.w,g.h),m.idE(this.d,g.x,g.y,g.w,g.h)):(b=(new a.aA)._0aA(),
this.aD(b,g,4,0,this.ao,-1,0),b.E(),null!=this.g&&m.idO(this.g,b),null!=this.d&&m.idv(this.d,b),b._d());m.sidd((new r.c2)._01c2("AnnotationText AnnotationObj"+this.n));this.aC(m)},t:function(m,g){this.aB=this.ao;this.at&&this.az(this.w.g());var b=l.prototype.t.call(this,m._nc(),g._nc());b&&(this.ao=a.i(this.ao*m.y,g.y));return b},x:function(a,g,b,f,d){l.prototype.x.call(this,a,g,b,f,d);this.at=!1},F:function(){this.ao=this.aB;l.prototype.F.call(this);null!=this.ay&&(this.aq._d(),this.aq=this.ay,this.ay=
null)},E:function(a,g){this.ar=(this.ar+(a?3:1))%4;l.prototype.E.call(this,a,g._nc())},D:function(a){l.prototype.D.call(this,a);this.at&&this.sizeToFit()},sizeToFit:function(){this.at=!0},az:function(a){this.n=this.w.f();a.sidd((new r.c2)._01c2("Annotation"+this.aF()+" AnnotationObj"+this.n));a=a.idY(this.as,this.aA()).e();if(1==(this.ar&1)){var g=a.w;a.w=a.h;a.h=g}g=this.a._nc();g.w=a.w+2*this.b.d+1;g.h=a.h+2*this.b.d+1;w.a(g,this.ao,this.ao);this.a._cf(g);this.at=!1;this.k(!1)}};z._dt("CWAA",l,
0);var E=function g(){g._ic();this.a=new a.c;this.c=this.d=0};E.prototype={_i1:function(a,b,f,d,n,q){this.a._i2(a,b,f,d);this.d=n;this.c=q},_i:function(){this.a._i();this.c=this.d=0},_01dP:function(a,b,f,d,n,q){this._i1(a,b,f,d,n,q);return this},e:function(a){0==this.a.w||0==this.a.h?a.q(this.a.f(),this.a.f()):a.e(this.a,this.d,this.c)}};E._dt("CWAA",a.W,0);e=function b(){b._ic();this.aX=0;this._0_4()};v.AnnotationBalloon=e;e.prototype={_0_4:function(){this._bc._0_3.call(this);this.aQ=new a.c;this.aW=
new a.c;this.aT=12;this.ao=5;this.aR=0;this.aQ.x=0;this.aP=this.aQ.y=0;this.aS();return this},B:function(){return z.prototype.B.call(this)},W:function(){return"Balloon"},aF:function(){return"BalloonText"},getTailCorner:function(){return this.aP},setTailCorner:function(a){this.aP=a},getTailFactor:function(){return this.aT},setTailFactor:function(a){this.aT=a},aE:function(){var b=this.a._nc();w.a(b,-this.b.d,-this.b.d);w.a(b,-this.aR,-this.aR);b._cf(this.i(b._nc()));var f,d;d=new a._p2(0,0);this.aU(d,
b);f=d.a;d=d.b;b.w-=f;b.h-=d;switch(this.aP){case 0:b.x+=f;b.y+=d;break;case 1:b.y+=d;break;case 3:b.x+=f}w.a(b,-(this.ao-1),-(this.ao-1));return b},aZ:function(a){var f=this.aT;0>f?(a.w+=-f,a.h+=-f):(f/=100,a.w/=1-f,a.h/=1-f)},aY:function(b){var f=this.ao*(0>b.w?-1:1),d=this.ao*(0>b.h?-1:1),n,q;q=new a._p2(0,0);this.aU(q,b);n=q.a;q=q.b;var k=a.e._ca(3);switch(this.aP){case 0:k[1].x=b.x;k[1].y=b.y;b.x+=n;b.w-=n;b.y+=q;b.h-=q;k[0].x=b.x;k[0].y=b.y+d;k[2].x=b.x+f;k[2].y=b.y;break;case 1:k[1].x=b.g();
k[1].y=b.y;b.w-=n;b.y+=q;b.h-=q;k[2].x=b.g();k[2].y=b.y+d;k[0].x=b.g()-f;k[0].y=b.y;break;case 3:k[1].x=b.x;k[1].y=b.c();b.x+=n;b.w-=n;b.h-=q;k[2].x=b.x;k[2].y=b.c()-d;k[0].x=b.x+f;k[0].y=b.c();break;default:k[1].x=b.g(),k[1].y=b.c(),b.w-=n,b.h-=q,k[0].x=b.g(),k[0].y=b.c()-d,k[2].x=b.g()-f,k[2].y=b.c()}return k},aU:function(a,f){var d=this.aT;0>d?(a.b=-d,a.a=a.b):(d/=100,a.a=f.w*d,a.b=f.h*d)},k:function(a){z.prototype.k.call(this,a);this.aS()},R:function(a,f){z.prototype.R.call(this,a,f);switch(this.aP){case 0:this.aP=
a?3:1;break;case 1:this.aP=a?2:0;break;case 2:this.aP=a?1:3;break;case 3:this.aP=a?0:2;break;case 4:a||(this.aP=6);break;case 6:a||(this.aP=4);break;case 7:a&&(this.aP=5);break;case 5:a&&(this.aP=7)}this.aS()},Y:function(b,f,d){w.a(d,-this.aR,-this.aR);d._cf(this.i(d._nc()));if(!f&&0<this.aR&&a.m.p(this.l,a.m.g())){var n=a.m.l(128,0,0,0),n=(new a.ar)._0ar(n);this.aV(b,n,null,(new a.c)._02c(d.x+this.aR,d.y+this.aR,d.w,d.h));n._d()}this.aV(b,this.g,this.d,d._nc());b.sidd((new r.c2)._01c2("AnnotationBalloonText AnnotationObj"+
this.n));f||null==this.as||this.aC(b)},P:function(){z.prototype.P.call(this)},y:function(a,f,d,n){z.prototype.y.call(this,a,f,d,n);d||this.aS()},G:function(a,f){z.prototype.G.call(this,a,f);this.aQ.q(a,f)},aV:function(b,f,d,n){var q=(new a.aA)._0aA();q.H();var k=4,t=0,x=-1;4<=this.aP&&(x=this.aP-4);var u=0;if(-1==x){k=this.aY(n);for(t=1;t<k.length;t++)q.q(k[t-1],k[t]);k=3;t=this.aP}else{var t=4,p;p=new a._p2(0,0);this.aU(p,n);u=p.a;p=p.b;u=a.i(a.a.o(u,p),2)}this.aD(q,n,k,t,this.ao,x,u);q.E();null!=
f&&b.idO(f,q);null!=d&&b.idv(d,q);q._d()},t:function(b,f){this.aX=this.aR;this.aW._cf(this.aQ);if(z.prototype.t.call(this,b._nc(),f._nc())){this.aR=a.i(this.aR*b.y,f.y);var d=a.i(this.aQ.x*b.x,f.x),n=d-this.aQ.x;this.aQ.x=d;this.aQ.w-=n;d=a.i(this.aQ.y*b.y,f.y);n=d-this.aQ.y;this.aQ.y=d;this.aQ.h-=n;return!0}return!1},x:function(a,f,d,n,q){z.prototype.x.call(this,a,f,d,n,q);d?this.aP=0>this.a.w?0>this.a.h?2:1:0>this.a.h?3:0:this.aS()},F:function(){this.aR=this.aX;this.aQ._cf(this.aW);z.prototype.F.call(this)},
E:function(a,f){z.prototype.E.call(this,a,f._nc());var d=0;4<=this.aP&&(d=4,this.aP-=4);this.aP=a?(this.aP+1)%4:(this.aP+4-1)%4;this.aP+=d},U:function(a,f){z.prototype.U.call(this,a._nc(),f);f||this.aS()},az:function(a){z.prototype.az.call(this,a);a=this.a._nc();w.a(a,this.aR,this.aR);this.aZ(a);this.a._cf(a);this.k(!1)},aS:function(){}};e._dt("CWAA",z,0);e=function f(){f._ic();this._0_3()};v.AnnotationRectangle=e;e.prototype={_0_3:function(){this._bc._0dO.call(this);return this},W:function(){return"Rectangle"},
Y:function(a,d,n){d=this.i(n);a.idU(this.g,d.x,d.y,d.w,d.h);a.idE(this.d,d.x,d.y,d.w,d.h)}};e._dt("CWAA",l,0);e=function d(){d._ic();this.ao=this.ap=this.aq=0;this.an=null;this._0_3()};v.AnnotationPicture=e;e.prototype={_0_3:function(){this._bc._0dO.call(this);this.ao=0;return this},_01_3:function(d){this._0_3();d=a.an._t(d);this.setPicture(d);this.sizeToFit();return this},getMode:function(){return this.ao},setMode:function(a){this.ao=a},W:function(){return null},getPicture:function(){return null!=
this.an?this.an:null},setPicture:function(d){d=a.an._t(d);this.as();this.an=d;null!=d&&(this.aq=this.an.c(),this.ap=this.an.b());this.sizeToFit()},as:function(){null!=this.an&&(this.an._d(),this.an=null)},_dispose1:function(a){this.as();l.prototype._dispose1.call(this,a)},Y:function(d,n,q){var k=this.i(q);if(n)d.idS(a.aj.G(),k);else if(d.idU(this.g,k.x,k.y,k.w,k.h),d.idE(this.d,k.x,k.y,k.w,k.h),null!=this.an){var t=0,x=0,u=0,p=0,e=0,l=0;n=!1;var r=0,B=0,u=d.ide(),w=0,v=0,t=this.T();0!=this.b.getColor().a&&
(p=2*this.b.d-1,t.w-=p,t.h-=p);switch(this.ao){case 1:u=t.w;p=t.h;e=this.aq;l=this.ap;break;default:2==this.ao&&(n=!0),r=3.937007874016E-4*u.c(),B=3.937007874016E-4*u.d(),u=this.aq,p=this.ap,u=a.a.p(u,t.w),p=a.a.p(p,t.h),e=u/r,l=p/B}var z=q.x>q.g();q=q.y>q.c();t=k.x+this.b.d;x=k.y+this.b.d;do if(w=1==this.ao?e:u,v=1==this.ao?l:p,d.idr(this.an,(new a.c)._02c(t,x,u,p),z?this.aq:0,q?this.ap:0,z?-w:w,q?-v:v,2,null),n){t+=u;k=this.c._nc();if(t>=k.g()&&(t=k.x,x+=p,x>=k.c()))break;u=this.aq;u=a.a.p(u,k.g()-
t);e=u/r;p=this.ap;p=a.a.p(p,k.c()-x);l=p/B}while(n)}},sizeToFit:function(){var a=this.a._nc();a.w=this.aq+2*this.b.d;a.h=this.ap+2*this.b.d;this.a._cf(a);this.r()}};e._dt("CWAA",l,0);e=function n(){n._ic();this.an=null;this._0_3()};v.AnnotationContainer=e;e.prototype={_0_3:function(){this._bc._0dO.call(this);this.ao=!0;return this},getElement:function(){return this.an},setElement:function(n){this.an=a.V.C(n,r.ieE)},W:function(){return"Container"},Y:function(a,e,k){if(null!=this.an){e=null;var t=
this.an.ieF();null==t&&(t="jchartfx");var x=a.ide(),u=x.CN;e=x._AN(1,null);e.setAttribute("class",t);this.e.iay(this.an,e);this.an.ieH(this.e,a,k._nc());x.CN=u}},t:function(a,e){if(this.ao){var k=this.an.ieG(this.e);0!=k.w&&0!=k.h&&(this.a.w=k.w,this.a.h=k.h);this.ao=!1;this.k(!1)}return l.prototype.t.call(this,a._nc(),e._nc())}};e._dt("CWAA",l,0);e=function q(){q._ic();this._0_3()};v.AnnotationCircle=e;e.prototype={_0_3:function(){this._bc._0dO.call(this);return this},W:function(){return"Circle"},
Y:function(a,k,e){k=this.i(e);a.idM(this.g,k.x,k.y,k.w,k.h);a.idk(this.d,k.x,k.y,k.w,k.h)}};e._dt("CWAA",l,0);e=function k(){k._ic();this._0_3()};v.AnnotationArrow=e;e.prototype={_0_3:function(){this._bc._0dO.call(this);this.an=null;this.ao=(new D)._01_1((new a.av)._0av(5,5,!0));return this},B:function(){var a=l.prototype.B.call(this)._nc();if(null!=this.an){var e=this.an.a;a.m(e.w,e.h)}null!=this.ao&&(e=this.ao.a,a.m(e.w,e.h));return a},getEndCap:function(){return null==this.ao?null:this.ao.a},setEndCap:function(a){this.ao=
null!=a?(new D)._01_1(a):null},W:function(){return"Arrow"},getStartCap:function(){return null==this.an?null:this.an.a},setStartCap:function(a){this.an=null!=a?(new D)._01_1(a):null},Y:function(a,e,x){null!=this.an&&this.d.sf(this.an.a);null!=this.ao&&this.d.se(this.ao.a);a.idt(this.d,x.x,x.y,x.g(),x.c())}};e._dt("CWAA",l,0);e=function t(){t._ic();this._0_3()};v.AnnotationArc=e;e.prototype={_0_3:function(){this._bc._0dO.call(this);return this},W:function(){return"Arc"},Y:function(e,x,u){x=90;if(!w.d(u)){var p=
this.i(u._nc())._nc(),l=p.w,r=p.h;p.w=2*l;p.h=2*r;0>u.w?(p.x-=l,0>u.h?x=270:(p.y-=r,x=0)):0>u.h?x=180:p.y-=r;a.m.p(this.l,a.m.g())&&e.idP(this.g,p,x,90);e.idh(this.d,p.x,p.y,p.w,p.h,x,90)}}};e._dt("CWAA",l,0);var G=function x(){x._ic();this.c=!1};G.prototype={_0dQ:function(a){this._bc._0Y.call(this);this.b=a;return this},a:function(){return this.b},sa:function(a){this.b=a},getItem:function(a){return this._Sa().So(a)},add:function(a){this._Sa().Si(a)},clear:function(){this._Sa().clear()},contains:function(a){return this._Sa().Sj(a)},
copyTo:function(a,e){this._Sa().Sd(a,e)},_d:function(){for(var e=this._Sa().Sb();1==e.SK();){var u=e.SM(),u=a.V.C(u,a.Su);null!=u&&u._d()}},indexOf:function(a){return this._Sa().Sk(a)},insert:function(a,e){this._Sa().Sl(a,e)},_Sb:function(){a.Y.prototype._Sb.call(this);this.c=!0},_Sc:function(e,u){a.Y.prototype._Sc.call(this,e,u);var p=a.V.D(u,l);null!=p&&p.D(this.b);this.c=!0},_Sd:function(e,u){a.Y.prototype._Sd.call(this,e,u);this.c=!0},remove:function(a){this._Sa().Sm(a)}};G._dt("CWAA",a.Y,0,a.Su);
var L=function u(){u._ic();this.D=null;this.x=this.C=!1;this.r=0;this.B=null;this.A=0;this.z=null};v.AnnotationList=L;L.prototype={_0_3:function(){this._01_3(null);return this},_01_3:function(e){this._bc._0dQ.call(this,e);this.w=new a.m;this.v=new a.m;this.q=new a.c;this.p=new a.c;this.t=new a.c;this.w._cf(a.m.g());this.v._cf(a.m.c());this.B=this.D=null;this.C=!1;this.z=null;this.q._cf(a.c.b);this.A=1;this.x=!1;return this},a:function(){return G.prototype.a.call(this)},sa:function(a){G.prototype.sa.call(this,
a)},E:function(){return null!=this.a()?this.a().c:null},_Sb:function(){G.prototype._Sb.call(this)},u:function(e,p,l,r,v,B){l=new a.c;v=new a.c;B=new a.c;var z=new a.c,F=new a.c,I=new a.c,D=new a.c,C=new a.c,E=new a.c,G=new a.c,J=0,N=0,K=0,H=0,K=J=e.ide().c(),H=N=e.ide().d(),J=(new a.e)._01e(J,N),K=(new a.e)._01e(K,H);this.q._cf(a.c.b);H=p.d();B._cf(this.E().iaw());var N=e.idb(),L=(new a.aq)._0aq(B),S=!this.p.d()&&!p.SB(this.p),T=!this.p.d()&&!B.SB(this.p);I._cf(p);D._cf(B);E._cf(this.p);G._cf(this.t);
w.b(I,K,J);w.b(D,K,J);w.b(E,K,J);w.b(G,K,J);this.r=-1;for(var Q=this.Sb();1==Q.SK();){var y=Q.SM();this.r++;if(y.I==r){var O=y.H;O?(z._cf(B),C._cf(D),C.q(-I.x,-I.y),F._cf(G)):(z._cf(p),C._cf(I),F._cf(E));var P=O?T:S;if(0==y.h){var M=y.A;P&&(0==M?(y.setTop(y.getTop()+a.i(C.h-F.h,2)),y.setLeft(y.getLeft()+a.i(C.w-F.w,2))):(0!=(M&8)&&(0!=(M&4)?y.setWidth(y.getWidth()+(C.w-F.w)):y.setLeft(y.getLeft()+(C.w-F.w))),0!=(M&2)&&(0!=(M&1)?y.setHeight(y.getHeight()+(C.h-F.h)):y.setTop(y.getTop()+(C.h-F.h))),
O&&(0!=(M&4)&&y.setLeft(y.getLeft()+(C.x-F.x)),0!=(M&1)&&y.setTop(y.getTop()+(C.y-F.y)))));y.G(I.x,I.y)}P=y.t(J._nc(),K._nc());H?y.L(e):(l._cf(y.B()),this.q._cf(a.c.t(this.q,l)),O&&e.sidb(L),v._cf(a.c.n(z,l)),w.d(v)||y.L(e),O&&e.sidb(N));P&&y.F();0==y.h&&y.G(-I.x,-I.y)}}null!=N&&N._d();L._d();r||(B.q(-p.x,-p.y),this.t._cf(B),this.p._cf(p))},ieO:function(a,e){w.c(a,e,"Paint",this.p);w.c(a,e,"Draw",this.t)},y:function(a){this.r=a}};L._dt("CWAA",G,0,r.ieN);e=function p(){p._ic();this.b=this.d=this.c=
this.e=null;this._0_3()};v.Annotations=e;e.prototype={_0_3:function(){this.a=(new L)._01_3(this);return this},getList:function(){return this.a},g:function(){if(null==this.b){var a=this.c.iaz();this.b=(new r.bk)._01bk(a,!0)}return this.b},ics:function(e){this.c=e;this.e=a.V.D(e,r.Chart);for(var l=0,v=this.a.Sb();1==v.SK();){var w=v.SM();this.a.y(l);w.D(this);l++}return null==e},_d:function(a){if(a){for(a=this.a.Sb();1==a.SK();)a.SM()._d();this.a.clear();null!=this.b&&(this.b._d(),this.b=null);null!=
this.d&&(this.d._d(),this.d=null);this.c=this.e=null}},f:function(){var e=this.a.r;return a.b.k(a.aG.e(),"{0}",e)},ieJ:function(a,e,l,r,v){this.b=a;this.a.u(a,e._nc(),l,!1,r,v);this.b=null;return!1},ieK:function(a,e,l,r,v){return!1},ieL:function(a,e,l,r,v){this.b=a;this.a.u(a,e._nc(),l,!0,r,v);this.b=null;return!1},ieM:function(a,e,l){return!1},ieO:function(e,l){var r=0,v=0,v=l.ieS();if(0==(l.ieT()&2)){var w=new a._p1(r);l.ie3(w,"_Build",r);r=w.a}l.sieS(r);0!=(l.ieR()&512)&&(this.a=l.ie8("List",this.a,
null,580));l.ieY("DefaultFillColor",this.a.w);l.ieY("DefaultBorderColor",this.a.v);r=new a._p1(this.a.x);l.ie6(r,"Enabled",!1);this.a.x=r.a;this.m_cmdsUI.serialize(e,l);l.sieS(v);e||this.a.sa(this)}};e._dt("CWAA",a.SA,0,r.icr,r.ieI,r.ieN)})();