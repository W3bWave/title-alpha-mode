"use strict";(self["webpackChunktitl"]=self["webpackChunktitl"]||[]).push([[912],{1592:function(t,a,e){e.d(a,{c:function(){return W}});e(3248);var n=e(4108),r=e(9096),c=e.p+"img/titl.1d218dff.svg",s=e(9452),i=e(6920);const l=t=>((0,n.ED)("data-v-4fc71fca"),t=t(),(0,n.ii)(),t),o={class:"header"},m={class:"header__icon"},u={class:"navigation"},d={class:"navigation__ul"},_=(0,n.IL)('<li class="navigation__ul-item" data-v-4fc71fca><a href="/" class="navigation__ul-item-href" data-v-4fc71fca>Главная</a></li><li class="navigation__ul-item" data-v-4fc71fca><a href="#catalog" class="navigation__ul-item-href" data-v-4fc71fca>Каталог <img class="icon" src="'+s+'" alt="list" data-v-4fc71fca></a></li>',2),p={key:0,class:"navigation__ul-item"},f={class:"header__container"},g=l((()=>(0,n.QD)("form",{class:"header__container-form"},[(0,n.QD)("button",{class:"header__container-form-btn",type:"submit"}," ф "),(0,n.QD)("input",{class:"header__container-form-input",name:"find",type:"text",placeholder:"Поиск"})],-1))),v={class:"header__cart"},h=l((()=>(0,n.QD)("img",{class:"icon",src:i},null,-1))),A={key:0,class:"point"};function C(t,a,e,s,i,l){const C=(0,n.E1)("RouterLink");return(0,n.Wz)(),(0,n.An)("header",o,[(0,n.QD)("div",m,[(0,n.QD)("img",{onClick:a[0]||(a[0]=a=>t.$router.push("/")),class:"header__icon-item",src:c,alt:"titl.vue"})]),(0,n.QD)("nav",u,[(0,n.QD)("ul",d,[_,t.$store.state.user?(0,n.g1)("",!0):((0,n.Wz)(),(0,n.An)("li",p,[(0,n.QD)("a",{onClick:a[1]||(a[1]=a=>t.$CoreAPI.devAuth()),href:"#",class:"navigation__ul-item-href"},"Dev Auth")]))])]),(0,n.QD)("div",f,[g,(0,n.QD)("div",v,[(0,n.K2)(C,{to:"/cart"},{default:(0,n.Ql)((()=>[h,(0,n.mY)(),i.cartAmount>0?((0,n.Wz)(),(0,n.An)("div",A,(0,r.WA)(i.cartAmount),1)):(0,n.g1)("",!0)])),_:1})])])])}var D={name:"HeaderComp",data(){return{cartAmount:-1}},mounted(){let t=this;this.$CoreAPI.on("cart-updated",(()=>{t.cartAmount=t.$CoreAPI.client_getTotalAmounts()})),t.cartAmount=t.$CoreAPI.client_getTotalAmounts()}},Q=e(4100);const k=(0,Q.c)(D,[["render",C],["__scopeId","data-v-4fc71fca"]]);var W=k},6976:function(t,a,e){e.r(a),e.d(a,{default:function(){return P}});e(3248);var n=e(4108),r=e(9096),c=e(5012);const s=t=>((0,n.ED)("data-v-6724390a"),t=t(),(0,n.ii)(),t),i={class:"cart"},l={class:"cart_wrapper"},o=s((()=>(0,n.QD)("h1",{style:{"font-weight":"bold","align-self":"flex-start"}},"Товары в корзине",-1))),m={class:"cart_table"},u={class:"cart_elem_image"},d=["src"],_={key:1,src:c,height:"100"},p={class:"cart_elem_meta_group"},f={class:"cart_elem_name"},g={class:"cart_elem_prop"},v={class:"cart_elem_prop amount"},h=["onClick"],A=["onClick"],C={class:"cart_elem_meta_group"},D={class:"cart_elem_meta"},Q={class:"cart_elem_price"},k={key:1,style:{"align-self":"flex-start","font-size":"0.8em","margin-top":"1vh"}};function W(t,a,e,c,s,W){const z=(0,n.E1)("HeaderComp");return(0,n.Wz)(),(0,n.An)("div",i,[(0,n.K2)(z),(0,n.QD)("div",l,[o,(0,n.QD)("div",m,[((0,n.Wz)(!0),(0,n.An)(n.ae,null,(0,n.mi)(s.cart,(a=>((0,n.Wz)(),(0,n.An)("div",{class:"cart_elem",key:a.id},[(0,n.QD)("div",u,[a.images.length>0?((0,n.Wz)(),(0,n.An)("img",{key:0,src:a.images[0].path,height:"100"},null,8,d)):((0,n.Wz)(),(0,n.An)("img",_))]),(0,n.QD)("div",p,[(0,n.QD)("span",f,(0,r.WA)(a.name),1),(0,n.QD)("span",g,"Размер: "+(0,r.WA)(t.$Helper.findSizeNameByID(a,a.size)),1),((0,n.Wz)(!0),(0,n.An)(n.ae,null,(0,n.mi)(JSON.parse(a.meta),(a=>((0,n.Wz)(),(0,n.An)("span",{class:"cart_elem_prop",key:a.name},(0,r.WA)(t.$Helper.translateMetaKey(a.name))+": "+(0,r.WA)(a.value),1)))),128)),(0,n.QD)("span",v,[(0,n.mY)("Количество: "),(0,n.QD)("button",{onClick:t=>W.removeFromCart(a)},"-",8,h),(0,n.mY)(),(0,n.QD)("span",null,(0,r.WA)(a.amount),1),(0,n.mY)(),(0,n.QD)("button",{onClick:t=>W.addToCart(a)},"+",8,A)])]),(0,n.QD)("div",C,[(0,n.QD)("div",D,[(0,n.QD)("span",Q,(0,r.WA)(~~a.price*~~a.amount)+" р.",1)])])])))),128))]),t.$CoreAPI.client_getCart().length>0?((0,n.Wz)(),(0,n.An)("button",{key:0,class:"go_to_order",onClick:a[0]||(a[0]=a=>t.$router.push("/order"))},"Оформить заказ")):(0,n.g1)("",!0),t.$CoreAPI.client_getCart().length<1?((0,n.Wz)(),(0,n.An)("span",k,"Корзина пуста")):(0,n.g1)("",!0)])])}var z=e(1592),$={name:"CartView",mounted(){},data(){return{cart:this.$CoreAPI.client_getCart()}},components:{HeaderComp:z.c},methods:{removeFromCart(t){this.$CoreAPI.client_updateProdAmount(t.id,t.size,-1),this.cart=this.$CoreAPI.client_getCart()},addToCart(t){this.$CoreAPI.client_updateProdAmount(t.id,t.size,1),this.cart=this.$CoreAPI.client_getCart()}}},I=e(4100);const y=(0,I.c)($,[["render",W],["__scopeId","data-v-6724390a"]]);var P=y},9452:function(t,a,e){t.exports=e.p+"img/arrow.391818fb.svg"},6920:function(t,a,e){t.exports=e.p+"img/cart.70aa1c04.svg"},5012:function(t,a,e){t.exports=e.p+"img/product_none.bc322c17.png"}}]);
//# sourceMappingURL=912.8ec8051e.js.map