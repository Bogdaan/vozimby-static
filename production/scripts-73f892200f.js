window.app={registerComponent:function(t,e){t=[].concat(t);var n=t[0],i=function(t){return t?"object"==typeof t?$(t):$(".c-"+n).find(t):$(".c-"+n)};$.extend(i,$);var o=e(i);t.forEach(function(t){window.app[t]=o}),$(function(){o.init&&o.init()})}},window.app.registerComponent("analytics",function(t){return{init:function(){},reachGoal:function(){"undefined"!=typeof document.yaCounter25294952&&document.yaCounter25294952.reachGoal(name)}}}),window.app.registerComponent("city-checker",function(t){return{isReady:!1,init:function(){t("#checkcityinp").bind("focus",t.proxy(this.prepareData,this)),t("#citychecker").bind("submit",this.handleSubmit)},prepareData:function(){this.isReady||(this.isReady=!0,document.availibleCities=[],document.availibleCitiesLabels=[],window.app.storage.get("schedule",function(e){e.forEach(function(t){document.availibleCities.push(t[0]),document.availibleCitiesLabels.push(t[1])}),t("#checkcityinp").typeahead({source:document.availibleCities})}))},handleSubmit:function(e){e.preventDefault(),t("#citychecker-result").text("ищем ..."),window.app.analytics.reachGoal("SpisokGorodov");var n=function(t,e){var n=e.replace(".","\\.").replace("(","\\(").replace(")","\\)"),i=new RegExp(n+".*","i"),o=-1;return t.forEach(function(t,e){i.test(t)&&(o=e)}),o},i=t("#checkcityinp").val();i=i.charAt(0).toUpperCase()+i.slice(1);var o=n(document.availibleCities,i);o==-1?t("#citychecker-result").html("Данного города нет в списке основных городов.<br/> Уточнить сроки и стоимость доставки Вы можете по тел. 6666-565"):t("#citychecker-result").text(document.availibleCitiesLabels[o])}}}),window.app.registerComponent("header",function(t){return{init:function(){this.handleSocialButtons()},handleSocialButtons:function(){t(".socnet .soc_btn").tooltip({html:!0,animation:!1,trigger:"click"}),jQuery("body").click(function(e){t(e.target).hasClass("soc_btn")||t(".socnet .tooltip.bottom").remove()}),t(".socnet .soc_btn").bind("mouseenter",function(){t(".socnet .soc_btn.showed").removeClass("showed").trigger("click"),t(this).addClass("showed").trigger("click")}).bind("click",function(){t(this).hasClass("clicked")?t(this).removeClass("clicked"):t(this).addClass("clicked"),t(".socnet .soc_btn.clicked").each(function(){t(this).hasClass("showed")||t(this).trigger("click")})})}}}),window.app.registerComponent("hero",function(t){return{init:function(){t(".map_hint a").tooltip({html:!0,animation:!1}),"l"!=location.host.substr(0,1)&&this.animateClouds()},animateClouds:function(){setInterval(function(){var t=jQuery("#cloud_1");t.animate({left:"1000px"},95e3),t.animate({left:"-100px"},11e4)},3),setInterval(function(){var t=jQuery("#cloud_2");t.animate({left:"-100px"},55e3),t.animate({left:"1000px"},11e4)},3),setInterval(function(){var t=jQuery("#cloud_3");t.animate({left:"-100px"},95e3),t.animate({left:"1000px"},11e4)},3),setInterval(function(){var t=jQuery("#cloud_4");t.animate({left:"1000px"},95e3),t.animate({left:"-100px"},11e4)},3),setInterval(function(){var t=jQuery("#cloud_5");t.animate({left:"-100px"},85e3),t.animate({left:"1000px"},11e4)},3),setInterval(function(){var t=jQuery("#sun_clouds");t.animate({left:"16px"},8500),t.animate({left:"56px"},8500)},3),setInterval(function(){var t=jQuery("#cloudbg");t.animate({left:"468px"},8500),t.animate({left:"508px"},8500)},3),setInterval(function(){var t=jQuery("#sun");t.animate({borderSpacing:30},{step:function(t,e){jQuery(this).css("-webkit-transform","rotate("+t+"deg)"),jQuery(this).css("-moz-transform","rotate("+t+"deg)"),jQuery(this).css("-ms-transform","rotate("+t+"deg)"),jQuery(this).css("-o-transform","rotate("+t+"deg)"),jQuery(this).css("transform","rotate("+t+"deg)")},duration:7200},"linear"),t.animate({borderSpacing:0},{step:function(t,e){jQuery(this).css("-webkit-transform","rotate("+t+"deg)"),jQuery(this).css("-moz-transform","rotate("+t+"deg)"),jQuery(this).css("-ms-transform","rotate("+t+"deg)"),jQuery(this).css("-o-transform","rotate("+t+"deg)"),jQuery(this).css("transform","rotate("+t+"deg)")},duration:7200},"linear")},0)}}}),window.app.registerComponent("hero-msk",function(t){return{init:function(){t(".map_hint a").tooltip({html:!0,animation:!1}),"l"!=location.host.substr(0,1)&&this.animateClouds()},animateClouds:function(){setInterval(function(){var t=jQuery("#cloud_1");t.animate({left:"1000px"},95e3),t.animate({left:"-100px"},11e4)},3),setInterval(function(){var t=jQuery("#cloud_2");t.animate({left:"-100px"},55e3),t.animate({left:"1000px"},11e4)},3),setInterval(function(){var t=jQuery("#cloud_3");t.animate({left:"-100px"},95e3),t.animate({left:"1000px"},11e4)},3),setInterval(function(){var t=jQuery("#cloud_4");t.animate({left:"1000px"},95e3),t.animate({left:"-100px"},11e4)},3),setInterval(function(){var t=jQuery("#cloud_5");t.animate({left:"-100px"},85e3),t.animate({left:"1000px"},11e4)},3),setInterval(function(){var t=jQuery("#sun_clouds");t.animate({left:"16px"},8500),t.animate({left:"56px"},8500)},3),setInterval(function(){var t=jQuery("#cloudbg");t.animate({left:"468px"},8500),t.animate({left:"508px"},8500)},3),setInterval(function(){var t=jQuery("#sun");t.animate({borderSpacing:30},{step:function(t,e){jQuery(this).css("-webkit-transform","rotate("+t+"deg)"),jQuery(this).css("-moz-transform","rotate("+t+"deg)"),jQuery(this).css("-ms-transform","rotate("+t+"deg)"),jQuery(this).css("-o-transform","rotate("+t+"deg)"),jQuery(this).css("transform","rotate("+t+"deg)")},duration:7200},"linear"),t.animate({borderSpacing:0},{step:function(t,e){jQuery(this).css("-webkit-transform","rotate("+t+"deg)"),jQuery(this).css("-moz-transform","rotate("+t+"deg)"),jQuery(this).css("-ms-transform","rotate("+t+"deg)"),jQuery(this).css("-o-transform","rotate("+t+"deg)"),jQuery(this).css("transform","rotate("+t+"deg)")},duration:7200},"linear")},0)}}}),window.app.registerComponent("hero-spb",function(t){return{init:function(){t(".map_hint a").tooltip({html:!0,animation:!1}),"l"!=location.host.substr(0,1)&&this.animateClouds()},animateClouds:function(){setInterval(function(){var t=jQuery("#cloud_1");t.animate({left:"1000px"},95e3),t.animate({left:"-100px"},11e4)},3),setInterval(function(){var t=jQuery("#cloud_2");t.animate({left:"-100px"},55e3),t.animate({left:"1000px"},11e4)},3),setInterval(function(){var t=jQuery("#cloud_3");t.animate({left:"-100px"},95e3),t.animate({left:"1000px"},11e4)},3),setInterval(function(){var t=jQuery("#cloud_4");t.animate({left:"1000px"},95e3),t.animate({left:"-100px"},11e4)},3),setInterval(function(){var t=jQuery("#cloud_5");t.animate({left:"-100px"},85e3),t.animate({left:"1000px"},11e4)},3),setInterval(function(){var t=jQuery("#sun_clouds");t.animate({left:"16px"},8500),t.animate({left:"56px"},8500)},3),setInterval(function(){var t=jQuery("#cloudbg");t.animate({left:"468px"},8500),t.animate({left:"508px"},8500)},3),setInterval(function(){var t=jQuery("#sun");t.animate({borderSpacing:30},{step:function(t,e){jQuery(this).css("-webkit-transform","rotate("+t+"deg)"),jQuery(this).css("-moz-transform","rotate("+t+"deg)"),jQuery(this).css("-ms-transform","rotate("+t+"deg)"),jQuery(this).css("-o-transform","rotate("+t+"deg)"),jQuery(this).css("transform","rotate("+t+"deg)")},duration:7200},"linear"),t.animate({borderSpacing:0},{step:function(t,e){jQuery(this).css("-webkit-transform","rotate("+t+"deg)"),jQuery(this).css("-moz-transform","rotate("+t+"deg)"),jQuery(this).css("-ms-transform","rotate("+t+"deg)"),jQuery(this).css("-o-transform","rotate("+t+"deg)"),jQuery(this).css("transform","rotate("+t+"deg)")},duration:7200},"linear")},0)}}}),window.app.registerComponent("job-form",function(t){return{init:function(){t(".jobinfo:first").focus(),t("form").bind("submit",t.proxy(this.handleSubmit,this))},handleError:function(){alert("Что-то пошло не так. Свяжитесь с нами по телефону или по почте.")},handleSuccess:function(t){t&&"success"==t?(alert("Спасибо! Ваше резюме будет рассмотрено в ближайшее время."),location.href="/"):this.handleError()},handleSubmit:function(e){e.preventDefault(),e.stopPropagation(),window.app.storage.apiPost("job",t("form").serialize()).done(t.proxy(this.handleSuccess,this)).fail(t.proxy(this.handleError,this))}}}),window.app.registerComponent(["page-index","page"],function(t){return{init:function(){}}}),window.app.registerComponent("popup-callme",function(t){return{init:function(){var e=this,n=t("form.callme");n.find(".phone").inputmask("phone"),n.bind("submit",function(n){n.preventDefault(),window.app.storage.apiPost("callme",t(n.target).serialize()).done(t.proxy(e.handleSuccess,e)).fail(t.proxy(e.handleError,e))})},handleErrorMsg:function(){alert("Что-то пошло не так. Свяжитесь с нами по телефону или по почте.")},handleError:function(t){this.handleErrorMsg()},handleSuccess:function(t){location.href="/thank-you.html"}}}),window.app.registerComponent("popup-news",function(t){return{init:function(){Cookies.get("q")||(Cookies.set("q",1),jQuery("#news-modal").modal("show"))}}}),window.app.registerComponent("popup-opinions",function(t){return{init:function(){this.handleFormInput(),this.handleSubmit()},handleFormInput:function(){t("#dont-chk, #blagod-chk").on("change",function(e){var n=t(this).prop("checked");t(this).parent().find(".by-details").toggle(n),t(this).parent().find(".by-passport").toggle(!n)})},handleErrorMsg:function(){alert("Что-то пошло не так. Свяжитесь с нами по телефону или по почте.")},handleError:function(t){if(t.responseJSON){for(var e in t.responseJSON)break;alert(t.responseJSON[e][0])}else this.handleErrorMsg()},handleSuccess:function(e,n){n&&"success"==n?(t(".modal-content").find(".close").trigger("click"),alert("courierinfo"==e?"Спасибо! Ваша благодарность принята.":"Спасибо! Ваша жалоба принята.")):this.handleErrorMsg()},handleSubmit:function(){var e=this;t("form").bind("submit",function(n){n.preventDefault();var i=t(n.target).attr("id");window.app.storage.apiPost("review",t(n.target).serialize()).done(t.proxy(e.handleSuccess,e,i)).fail(t.proxy(e.handleError,e))})}}}),window.app.registerComponent("price-checker",function(t){return{isLocationReady:!1,isRatesReady:!1,init:function(){t(".tip").tooltip({html:!0,animation:!1}),t(".prettyCheckable").each(function(){t(this).prettyCheckable()}),t(".js-form input").change(function(){""==t(this).val()?t(this).removeClass("filled"):t(this).addClass("filled")}),t("input.digit-only").bind("keyup change",function(){/\D/g.test(this.value)&&(this.value=this.value.replace(/\D/g,""))}),t(".byn-input").inputmask("decimal",{radixPoint:",",digits:2,autoGroup:!0,groupSeparator:" ",allowMinus:!1,rightAlign:!1,onBeforeMask:function(t,e){return"0.00"==t?"":(""+t).replace(".",",")}});var e=t("#calculation").first();if(0!=e.size()){var n=function(t){return(""+parseFloat(t).toFixed(2)).replace(".",",")+" руб."},i=function(t){return t.replace(/([0-9]{2}[.][0-9]{2})[.0-9]{5}/g,"$1")},o=function(){var n=!1;return e.find('input[type="text"]:visible').each(function(){""==t(this).val()&&(n=!0)}),e.find("select:visible").not(".dependent-sub").not("#clc-typeid").each(function(){""==t(this).val()&&(n=!0)}),n},a=function(t){e.find("#clc-result").html('<div class="noresult">'+t+"</div>")};e.find("#clc-sender").change(function(){e.find(".control-group-ctselect option:first").prop("selected",!0),e.find(".control-group-typeid select:first option:first").prop("selected",!0),e.find(".control-group-typeid select:gt(0)").css("display","none"),e.find('input[type="text"]').removeClass("filled").val(""),e.find('input[type="checkbox"]').removeClass("filled").prop("checked",!1),e.find(".prettycheckbox a.checked").removeClass("checked");var n=t(this).val();"0"==n?(e.find(".control-group-typeid, .control-group-dimension, .control-group-cost, .control-group-locality, .control-group-additional").addClass("hidden"),e.find(".control-group-cost").addClass("force-hidden")):"1"==n&&(e.find(".control-group-ctselect, .control-group-dimension, .control-group-cost, .control-group-locality, .control-group-additional").addClass("hidden"),e.find(".control-group-cost").removeClass("force-hidden")),e.find(".control-group-ctselect").removeClass("hidden")});var r=this;e.find("#clc-calculation-type").change(function(){r.fetchRates(),r.fetchLocation();var n=t(this).val();return"- выберите -"==n?void t(this).parent().removeClass("filled"):(t(this).parent().addClass("filled"),e.find("#clc-goodcost").val(""),void("2"==n?(e.find(".control-group-typeid").addClass("hidden"),e.find(".control-group-dimension").removeClass("hidden"),e.find(".control-group-dimension input").keyup(function(){var n=function(){var n=!0;return e.find(".control-group-dimension input").each(function(){""==t(this).val()&&(n=!1)}),n};n()&&e.find(".control-group-locality").removeClass("hidden")}),e.find(".control-group-cost").addClass("force-hidden"),e.find(".control-group-cost:visible").addClass("hidden")):"1"==n&&(e.find(".control-group-typeid").removeClass("hidden"),e.find(".control-group-dimension").addClass("hidden"),e.find(".control-group-dimension input").val(""),e.find(".control-group-cost").removeClass("force-hidden"))))}),e.find("input, select").bind("change keyup",function(t){e.find("#clc-result").html(""),e.find(".control-group:visible").removeClass("last"),e.find(".control-group:visible:last").addClass("last")}),e.bind("submit",function(t){return t.preventDefault(),t.stopPropagation(),o()?void a("Заполните все поля"):(a("Считаем ..."),window.app.analytics.reachGoal("Kalculator"),void window.app.storage.apiPost("calculator",e.serialize()).done(function(t){var o=3,a=2,r=1,s="minimal",l="custom",c=e.find("#clc-result").first();if(t[l]&&t[l].enabled)return void c.html('<div class="exp clearfix">          <span class="custominfo">Требуется индивидуальный расчет - пожалуйста свяжитесь с нами 6666-565</span>           </div>');if(t[s]&&t[s].enabled)return void c.html('<div class="exp clearfix">          <span class="cost">от '+n(t[s].cost)+'</span>          <span class="mininfo">- узнать более 6666-565</span>           </div>');var d="";t[a].enabled&&(d='<div class="std clearfix">          <span class="lbl">Стандарт</span>          <span class="cost">'+n(t[a].cost)+'</span>          <span class="dates">'+i(t[a].days)+"</span>          </div>"),c.html('<div class="exp clearfix">          <span class="lbl">Экспресс</span>          <span class="cost">'+n(t[r].cost)+'</span>          <span class="dates">'+i(t[r].days)+"</span>          </div>"+d+'<div class="eco clearfix">          <span class="lbl">Эконом</span>          <span class="cost">'+n(t[o].cost)+'</span>          <span class="dates">'+i(t[o].days)+'</span>          </div><div class="inf"><span>Ближайшие дни доставки</span></div>')}).fail(function(){a("На данный момент калькулятор недоступен")}))})}},fetchLocation:function(){if(!this.isLocationReady){this.isRatesReady=!0;var e=t("#calculation").first(),n=jQuery("#calculator-map-modal").first(),i=function(e,i){n.find(".modal-title").text(i);var o=e.find(".watch-on-map").first();o.removeClass("filled");var a=new google.maps.Geocoder;a.geocode({address:i,region:"by"},function(e,i){i==google.maps.GeocoderStatus.OK&&(o.addClass("filled"),o.unbind("click").click(function(){t(this).hasClass("filled")&&(n.modal("show"),n.find(".close").unbind("click").click(function(){n.modal("hide")}),setTimeout(function(){var t=new google.maps.DirectionsRenderer,n=new google.maps.DirectionsService,i=new google.maps.LatLng(53.9,27.566666),o=new google.maps.Map(document.getElementById("calculator-map-canvas"),{zoom:10,center:i});t.setMap(o),o.setCenter(e[0].geometry.location);new google.maps.Marker({map:o,position:e[0].geometry.location});n.route({origin:i,destination:e[0].geometry.location,travelMode:google.maps.TravelMode.DRIVING},function(e,n){n==google.maps.DirectionsStatus.OK&&t.setDirections(e)})},200))}))})};window.app.storage.get("location",function(n){e.find(".clc-locality-input").typeahead({source:n,matcher:function(t){var e=this.query.toLowerCase(),n=t;1==e.split(" ").length&&(n=t.split(" ")[0]);var i=new RegExp(".*"+e+".*","i");return i.test(n)}}).bind("change blur",function(){var o=t(this).parents(".control-group-locality").first();if(n.indexOf(t(this).val())===-1)t(this).val(""),o.find(".watch-on-map").removeClass("filled");else{e.find(".control-group-additional").removeClass("hidden"),e.find(".control-group:visible").removeClass("last"),e.find(".control-group:visible:last").addClass("last");var a=t(this).val(),r="";(parts=a.match(/(.+) \(([^,]+), ([^,]+)\)/))?r=parts[1]+", Беларусь":(parts=a.match(/(.+) \(([^,]+)\)/))&&(r="город "+parts[1]+", "+parts[2]+", Беларусь"),i(o,r.replace("обл.","область"))}if("locality-from"==t(this).attr("name")){var s=t(this).val(),l=e.find(".controls-fromstore");"Минск (Минский р-н, Минская обл.)"==s?l.removeClass("hidden"):l.addClass("hidden")}})})}},fetchRates:function(){if(!this.isRatesReady){this.isRatesReady=!0;var e=t("#calculation").first();window.app.storage.get("rates",function(n){var i=e.find("#clc-typeid");i.append(jQuery(n)),i.dependentSelects({placeholderOption:"- выберите -"}),i.parent().find("select").change(function(){var n=i.parent().find("select:visible:last"),o=n.children("option");if(2==o.size()){var a=o.last();a.prop("selected")||(a.prop("selected",!0).attr("selected","selected"),n.trigger("change"))}var r=i.parent().find("select:visible option:selected:last"),s=r.val();if("- выберите -"==s)return void t(this).parent().removeClass("filled");t(this).parent().addClass("filled");var l=r.data("cast");"1"==l?e.find(".control-group-dimension").removeClass("hidden"):e.find(".control-group-dimension").addClass("hidden"),e.find(".control-group-cost:not(.force-hidden)").size()>0?(e.find(".control-group-cost:not(.force-hidden)").removeClass("hidden"),e.find(".control-group-cost input").bind("keyup",function(){e.find(".control-group-locality").removeClass("hidden"),e.find(".control-group-additional").removeClass("hidden")})):(e.find(".control-group-locality").removeClass("hidden"),e.find(".control-group-additional").removeClass("hidden")),e.find(".control-group:visible").removeClass("last"),e.find(".control-group:visible:last").addClass("last")})})}}}}),window.app.registerComponent("status-checker",function(t){return{init:function(){t("#rstatus").bind("submit",this.handleSubmit)},handleSubmit:function(e){e.preventDefault(),e.stopPropagation(),window.app.analytics.reachGoal("Otslejivanie");var n=t("#rst-series").val(),i=t("#rst-number").val();return""==n||""==i?void alert("Заполните все поля"):void window.app.storage.apiPost("rstatus",{series:n,number:i}).done(function(e){var n=t("#rstatus-result");n.find(".rstatus-res").addClass("hidden"),"Доставляется"==e.substr(0,12)?n.find(".delivery").removeClass("hidden"):"Заказ на"==e.substr(0,8)?(n.find(".process div").html(e),n.find(".process").removeClass("hidden")):"Доставлено"==e?n.find(".delivered").removeClass("hidden"):"Доставка"==e.substr(0,8)?(n.find(".planed div").html(e),n.find(".planed").removeClass("hidden")):"Возврат"==e?n.find(".return").removeClass("hidden"):alert(e)}).fail(function(){alert("Проверка статуса заявки временно недоступна. Свяжитесь с нами по телефону или по почте.")})}}});var API_ADDRESS="//api.vozim.by/";window.app.registerComponent("storage",function(t){return{_rawdata:{},get:function(t,e,n){if("undefined"!=typeof this._rawdata[t])return e(this._rawdata[t]);var i=this;return this.apiGet(t,n).done(function(n){i._rawdata[t]=n,e(n)}),this},apiGet:function(t,e){return jQuery.get(API_ADDRESS+t,e)},apiPost:function(t,e){return jQuery.post(API_ADDRESS+t,e)}}}),window.app.registerComponent("svg-replace",function(t){return{init:function(){t().each(function(){var t=jQuery(this),e=t.attr("id"),n=t.attr("class"),i=t.attr("src");jQuery.get(i,function(i){var o=jQuery(i).find("svg");"undefined"!=typeof e&&(o=o.attr("id",e)),"undefined"!=typeof n&&(o=o.attr("class",n)),o=o.removeAttr("xmlns:a"),t.replaceWith(o)},"xml")})}}});