<!--

/**
* 排版管理初始化
*/


$(document).ready(function() {

		//排版状态辅助线
		$("#top").css({border:"1px #ff0000 dotted"});
		$("#content").css({border:"1px #ff0000 dotted"});
		$("#bottom").css({border:"1px #ff0000 dotted"});

		//移动层初始化
		$().initPlus();

		//加入管理辅助层
		$("body").append("<div id='plusWindow'></div>");
		$("body").append("<div id='plus_data' class='plus_data'></div>");
		$("body").append("<div id='contextMenu' class='contextMenu'><UL><LI id='cm_up'>移至顶层</LI><LI id='cm_top'>上移一层</LI><LI id='cm_under'>下移一层</LI><LI id='cm_down'>移至底层</LI><LI id='cm_copy'>复制插件</LI></UL></div>");
		$("body").append("<div id='app_window'><div class='app_windowleft'></div><div class='app_windowright'></div><div class='app_windowmenu'></div><div class='app_windowarr'></div><div class='app_bararrleft'></div><div class='app_bararrright'></div><div class='app_bar'><div class='app_barleft'></div><div class='app_barright'></div><div id='app_store' class='app_store'><div id='app_storebox' class='app_storebox'></div></div></div>");
		$("body").append("<div id='app_detail'><div class='app_detailtitle'>应用预览和安装</div><div class='app_detailclose'></div><div class='app_detailbox'></div><div class='app_detaitext'></div></div>");
		$("body").append("<div class='app_fly'></div>");


		//加入排版菜单
		$("body").prepend("<div id='adminbar_showme' class='adminbar_showme'><span>显示面板</span></div>");
		$("body").prepend("<div id='adminbar' class='adminbar'></div>");
		$("#adminbar").append("<div class='adminmenuleft'></div><div class='adminmenuright'></div>");
		$("#adminbar").append("<div id='adminbarmenu' class='adminbarmenu'></div>");
		$("#adminbarmenu").append("<div class='adminlogo'></div>");
		$("#adminbarmenu").append("<div id='pdv_plusedit' class='adminbutton1'>模块/插件</div>");
		$("#adminbarmenu").append("<div id='pdv_pageset' class='adminbutton1'>页面背景/布局</div>");
		$("#adminbarmenu").append("<div id='pdv_pagemeta' class='adminbutton1'>页面标题/参数<input type='hidden' id='backFollow' value='"+$('body')[0].style.backgroundPosition+"'></div>");
		$("#adminbarmenu").append("<div id='pdv_hide' class='adminhidden'><span>隐藏面板</span></div>");
		$("#adminbarmenu").append("<div id='pdv_exit' class='admincancle'><span>退出</span></div>");
		$("#adminbarmenu").append("<div id='pdv_save' class='adminsave'><span>保存</span></div>");
		
		//显示管理面板
		$("#adminbar").animate({height: 'show',opacity: 'show'}, 'slow');

		//模块插件管理
		$("#adminbar").append("<div id='admin_plusbar' class='admin_plusbar'></div>");
		$("#admin_plusbar").append("<div id='admin_pluscolbar' class='admin_pluscolbar'><div class='admin_plusbarleft'></div><div class='admin_plusbarright'></div><div id='admin_pluscol' class='admin_pluscol'></div><div class='admin_plusmemo'>选择插件类型</div></div>");
		$("#admin_plusbar").append("<div id='admin_plusselbar' class='admin_plusselbar'><div class='admin_plusbarleft'></div><div class='admin_plusbarright'></div><div id='admin_plussel' class='admin_plussel'></div><div class='admin_plusmemo'>添加本页可用插件</div><div class='admin_plusapp'>导入插件</div><div class='admin_borderapp'>导入边框</div></div>");
		$("#admin_plusbar").append("<div id='admin_plusnowbar' class='admin_plusnowbar'><div class='admin_plusbarleft'></div><div class='admin_plusbarright'></div><div id='admin_plusnow' class='admin_plusnow'></div><div class='admin_plusmemo'>本页已有插件</div></div>");
		$("#admin_plusbar").append("<div id='admin_plusplanbar' class='admin_plusplanbar'><div class='admin_plusbarleft'></div><div class='admin_plusbarright'></div><div id='admin_plusplan' class='admin_plusplan'></div><div class='admin_plusmemo'>插件排版方案</div></div>");
		
		//排版方案
		$("#admin_plusplan").append("<div id='plusplanzone' class='plusplanzone'></div>");
		$("#admin_plusplan").append("<div class='plusplanadd'><input type='checkbox' id='plusplansave' value='1' /> 保存当前插件排版方案<br><input type='text' maxlength='8' id='plusplanname' class='plusplanname' value='请输入方案名称' /><br><input type='button' id='plusplansavebt' class='plusplansavebt' value='保存' /></div>");
		
		//获取模块清单/当前页可用插件清单/当前页已有插件清单/插件排版方案清单
		$().plusCollist();
		$().plusGetModule(PDV_COLTYPE);
		$().plusNowList();
		$().plusPlanList();
	
		//显示模块插件管理面板内容
		$("#admin_plusbar").show();
	
		//背景和布局层加入
		$("#adminbar").append("<div id='admin_pagebar' class='admin_pagebar'></div>");

		//背景布局设置层加入
		$("#admin_pagebar").append("<div id='admin_pageconsetbar' class='admin_pageconsetbar'><div class='admin_pagebarleft'></div><div class='admin_pagebarright'></div><div id='admin_pageconset' class='admin_pageconset'></div><div class='admin_pagebarsplit'></div><div class='admin_pagememo'>背景和布局设置</div></div>");
		$("#admin_pageconset").append("<div id='pageconset_0' class='pageconsetitem'>设置对象：<select id='pagecolorsel'><option value='pagebgcolor'>网页背景</option><option value='pagecontainset'>容器布局</option><option value='pagecontainbg'>容器背景</option><option value='pagetopbg'>顶部背景</option><option value='pagecontentbg'>中间背景</option><option value='pagebottombg'>底部背景</option></select></div>");
		$("#admin_pageconset").append("<div id='pageconset_1' class='pageconsetitem'>背景图片：<select id='pagebgposition' ><option value='left top'>左上</option><option value='center top'>中上</option><option value='right top'>右上</option><option value='left bottom'>左下</option><option value='center bottom'>中下</option><option value='right bottom'>右下</option></select> <select id='pagebgrepeat' ><option value='repeat'>重复</option><option value='no-repeat'>不重复</option><option value='repeat-x'>水平重复</option><option value='repeat-y'>垂直重复</option></select></div>");
		$("#admin_pageconset").append("<div id='pageconset_2' class='pageconsetitem'>背景滚动：<select id='pagebgatt' ><option value='scroll'>背景跟随内容滚动</option><option value='fixed'>背景不滚动</option></select></div>");
		$("#admin_pageconset").append("<div id='pageconset_3' class='pageconsetitem'>容器宽度：<select id='pagecontainwidth' ><option value='1002'>默认(1002PX)</option><option value='900'>中幅(900PX)</option><option value='950'>中幅(950PX)</option><option value='990'>宽幅(990PX)</option><option value='1258'>超宽(1258PX)</option><option value='1418'>超宽(1418PX)</option><option value='1658'>超宽(1658PX)</option><option value='850'>窄幅(850PX)</option><option value='780'>窄幅(780PX)</option><option value='600'>名片(600PX)</option></select></div>");
		$("#admin_pageconset").append("<div id='pageconset_4' class='pageconsetitem'>容器定位：<select id='containcentersel' ><option value='auto'>居中</option><option value='0px'>居左</option></select></div>");
		$("#admin_pageconset").append("<div id='pageconset_5' class='pageconsetitem'>上下边距：<input type='text' size='3' id='containmargin' class='input' maxlength='2' value='"+parseInt($("#contain").css("marginTop"))+"' /> PX</div>");
		$("#admin_pageconset").append("<div id='pageconset_6' class='pageconsetitem'>容器边距：<input type='text' size='3' id='containpadding' class='input' maxlength='2' value='"+parseInt($("#contain").css("padding"))+"' /> PX</div>");
		$("#admin_pageconset").append("<div id='pageconset_7' class='pageconsetitem'>容器间距：<input type='text' size='3' id='contentmargin' class='input' maxlength='2' value='"+parseInt($("#content").css("marginTop"))+"' /> PX</div>");
		$("#admin_pageconset").append("<div id='pageconset_8' class='pageconsetitem'>背景扩展：<select id='pagebgexpand' ><option value='0'>不扩展</option><option value='1'>扩展到100%</option></select></div>");
		
		//选择颜色层加入
		$("#admin_pagebar").append("<div id='admin_pagebgcolorbar' class='admin_pagebgcolorbar'><div class='admin_pagebarleft'></div><div class='admin_pagebarright'></div><div id='admin_pagebgcolor' class='admin_pagebgcolor'></div><div class='admin_pagememo'>选择背景颜色</div></div>");
		$("#admin_pagebgcolor").append("<br clear='all' /><input type='text'  id='pageshowcolor' maxlength='7' value='"+$("body").css("backgroundColor")+"' />");
		$("#admin_pagebgcolor").append("<div id='pagetransparent' title='透明'></div>");

		//选择背景图片层加入
		$("#admin_pagebar").append("<div id='admin_pagebgimgbar' class='admin_pagebgimgbar'><div class='admin_pagebarleft'></div><div class='admin_pagebarright'></div><div id='admin_pagebgimg' class='admin_pagebgimg'></div><div class='admin_pagememo'>选择背景图片 &nbsp; <span id='showbg_big'>[大]</span><span id='showbg_mid'>[中]</span><span id='showbg_small'>[小]</span><span id='pagebg_upload'>[上传]</span> <span id='pagebg_app'>[更多图片]</span></div></div>");
		
		//背景布局方案层加入
		$("#admin_pagebar").append("<div id='admin_pagecontainbar' class='admin_pagecontainbar'><div class='admin_pagebarleft'></div><div class='admin_pagebarright'></div><div id='admin_pagecontain' class='admin_pagecontain'></div><div class='admin_pagememo'>背景和布局方案</div></div>");
		$("#admin_pagecontain").append("<div id='admin_pageplanzone' class='admin_pageplanzone'></div>");
		$("#admin_pagecontain").append("<div class='pageconsetglb'><input type='checkbox' id='psetglobal' value='1' /> 复制当前背景布局到全站</div>");
		$("#admin_pagecontain").append("<div class='pageconsetglb'><input type='checkbox' id='pagesavetemp' value='1' /> 保存当前背景布局方案</div>");
		$("#admin_pagecontain").append("<div id='pagetempnameset' class='pageconsetitem'><input type='text' maxlength='8' id='pagetempname' class='pagetempname' value='请输入方案名称' /><br><input type='button' id='pagetempsavebt' class='pagetempsavebt' value='保存' /></div>");
		
		//判断是否已经加载背景布局设置的参数
		$("#admin_pagebar").append("<input type='hidden' id='pagesetload' value='none' />");

		//网页标题参数层加入
		$("#adminbar").append("<div id='admin_metabar' class='admin_metabar'></div>");
		$("#admin_metabar").append("<div id='admin_pagemetabar' class='admin_pagemetabar'><div class='admin_pagebarleft'></div><div class='admin_pagebarright'></div><div id='admin_pagemeta' class='admin_pagemeta'></div><div class='admin_pagememo'>页面标题/参数设置</div></div>");

		//调取页面参数设置数据
		$().pageMetaSet();

		//排版状态下背景跟随
		backFollowIn();

});


/**
* 管理菜单切换和插件管理界面操作
*/

$(document).ready(function() {

	//管理菜单切换效果
	var getMenu = $('div.adminbutton1');getMenu[0].className="adminbutton2";getMenu.click(function() {getMenu.each(function(){var obj = this.id;this.className="adminbutton1";});this.className="adminbutton2";});

	//插件管理菜单选中调用
	$("#pdv_plusedit").click(function(){$("#admin_plusbar").show();$("#admin_pagebar").hide();$("#admin_metabar").hide();$('#app_window').hide();$('#app_detail').hide();});

	//背景布局菜单选中调用
	$("#pdv_pageset").click(function(){if($("#pagesetload")[0].value!="load"){$().pageStyleSet();$().getPageTempList();$().colorSelector();$().pageBgimgList();$("#pagesetload")[0].value="load";}$("#admin_plusbar").hide();$("#admin_metabar").hide();$("#admin_pagebar").show();$('#app_window').hide();$('#app_detail').hide();});

	//页面标题菜单选中调用
	$("#pdv_pagemeta").click(function(){$("#admin_plusbar").hide();$("#admin_pagebar").hide();$("#admin_metabar").show();$('#app_window').hide();$('#app_detail').hide();});

	//显示隐藏排版界面
	$("#pdv_hide").click(function(){$("#adminbar").hide();$("#adminbar_showme").show();$('#app_window').hide();$('#app_detail').hide();backFollowOut();});$("#adminbar_showme").click(function () { $("#adminbar").show();$("#adminbar_showme").hide();backFollowIn();});

	//退出按钮
	$('#pdv_exit').click(function(){$('#plusWindow').empty();$('#plusWindow').append("<div class='topBar'>提示信息<div class='pwClose'></div></div><div class='border'><div class='ntc'>是否退出排版模式？<br /><br />保存退出：保存排版位置，切换到访问模式<br />不保存退出：不保存排版位置，切换到访问模式</div><div class='buttonzone'><input type='button' class='button' id='saveexit' value='保存退出' /> <input type='button' class='button' id='exit' value='不保存退出' /> <input type='button' class='button' id='no' value='继续排版' /></div></div>");$.blockUI({ message: $('#plusWindow'),css:{width:'380px'}}); $('#saveexit').click(function() { $.blockUI({ message: "正在保存排版信息...",css:{backgroundColor:'#fff'}}); $().savePlus(0);$.ajax({type: "POST",url: PDV_RP+"post.php",data: "act=plusexit",success: function(msg){window.location.reload();}});});$('#exit').click(function() { $.blockUI({ message: "正在退出排版模式...",css:{backgroundColor:'#fff'}}); $.ajax({type: "POST",url: PDV_RP+"post.php",data: "act=plusexit",success: function(msg){window.location.reload();}});}); $('#no').click(function() { $.unblockUI(); }); $('.pwClose').click(function() { $.unblockUI(); }); }); 

	//保存按钮
	$("#pdv_save").click(function(){$().savePlus(1);});$("#plusplansavebt").click(function(){$().savePlus(1);});$("#pagetempsavebt").click(function (){$().savePlus(1);});
	
	//保存排版方案复选框切换
	$("#plusplansave").click(function (){if($("#plusplansave")[0].checked==true){$("#plusplanname").show();$("#plusplansavebt").show();}else{$("#plusplanname").hide();$("#plusplansavebt").hide();}});

	//调用背景APP
	$("#pagebg_app").click(function(){$('#app_window').show();$().GetAppstore("bg");$(".app_windowarr").click(function(){$('#app_window').hide();$('#app_detail').hide();});});

	//调用插件APP
	$(".admin_plusapp").click(function(){$('#app_window').show();$().GetAppstore("plus");$(".app_windowarr").click(function(){$('#app_window').hide();$('#app_detail').hide();});});
	
	//调用边框APP
	$(".admin_borderapp").click(function(){$('#app_window').show();$().GetAppstore("border");$(".app_windowarr").click(function(){$('#app_window').hide();$('#app_detail').hide();});});
	
});



/**
* 插件管理:读取模块清单
*/

(function($){

	$.fn.plusCollist = function(){
		$.ajax({
			type: "POST",
			url: PDV_RP+"base/post.php",
			data: "act=plusgetcol&coltype="+PDV_COLTYPE,
			success: function(msg){
				$("#admin_pluscol").html(msg);
				var getObj = $(msg).find('li');
				getObj.each(function(id) {
					var obj = this.id;
					$("li#"+obj).click(function() {
						$('li.admin_collistnow')[0].className="admin_collist";
						$("li#"+obj)[0].className="admin_collistnow";
						$().plusGetModule(obj.substr(9));
					});
					
				});

			}
		});
	};
})(jQuery);


/**
* 插件管理:读取模块对应的插件清单
*/

(function($){

	$.fn.plusGetModule = function(showcoltype){
		$.ajax({
			type: "POST",
			url: PDV_RP+"base/post.php",
			data: "act=plusgetmodule&coltype="+PDV_COLTYPE+"&pagename="+PDV_PAGENAME+"&showcoltype="+showcoltype+"&pdvrp="+PDV_RP,
			success: function(msg){
				$("#admin_plussel").html(msg);
				$(".admin_plussellist").mouseover(function(){
					$(this)[0].className="admin_plussellistnow";
				});
				$(".admin_plussellist").mouseout(function(){
					$(this)[0].className="admin_plussellist";
				});
			}
		});

		document.cookie="SMD"+"="+showcoltype;
		
	};

})(jQuery);


/**
* 插件管理:读取当前页已插入插件清单
*/

(function($){

	$.fn.plusNowList = function(){
		$.ajax({
			type: "POST",
			url: PDV_RP+"base/post.php",
			data: "act=plusnowlist&coltype="+PDV_COLTYPE+"&pagename="+PDV_PAGENAME+"&pdvrp="+PDV_RP,
			success: function(msg){
				$("#admin_plusnow").html(msg);

				$(".admin_pluslist").mouseover(function(){
					$(this)[0].className="admin_pluslistnow";
				});
				$(".admin_pluslist").mouseout(function(){
					$(this)[0].className="admin_pluslist";
				});

				var getObj = $('div.admin_pluslistedit');
				getObj.each(function(id) {
					var obj = this.id;
					$("div#"+obj).click(function() {
						pdvid="pd"+obj;
						$().savePlus(0);
						$('#plusWindow').empty();
						$('#plusWindow').append('<div class="topBar">插件设置<div class="pwClose"></div></div><div class="border"><iframe frameborder="0" scrolling="no" src="'+PDV_RP+'base/admin/plusset.php?divid='+pdvid+'" class="plusFrm"></iframe></div>');
						$.blockUI({message:$('#plusWindow'),css:{width:'680px',top:'20px'}}); 
						$('.pwClose').click(function() { 
							$.unblockUI(); 
						}); 
					});
				});

				var getObj = $('div.admin_pluslistdel');
				getObj.each(function(id) {
					var obj = this.id;
					$("div#"+obj).click(function() {
						pdvid="p"+obj;
						$.ajax({
								type: "POST",
								url: PDV_RP+"base/post.php",
								data: "act=plusdel&pdvid="+pdvid,
								success: function(msg){
									if(msg=="OK"){
										$("div#"+pdvid).remove();
										$("li#now"+pdvid.substr(2)).remove();
										$().adminSetBg();
										$().plusGetModule(getCookie("SMD"));
									}else{
										alert("删除插件失败，错误信息："+msg);
									}
								
								}
						});
						$().unbind('keydown',$.jqDnR.keydrag);

					});
				});


			}
		});
		
	};

})(jQuery);


/**
* 插件管理:插件排版方案显示和应用
*/

(function($){
	$.fn.plusPlanList = function(){
		$("#plusplanname").focus(function(){
			if($("#plusplanname")[0].value=="请输入方案名称"){
				$("#plusplanname")[0].value="";
			}
		});
		$.ajax({
			type: "POST",
			url: PDV_RP+"base/post.php",
			data: "act=planlist",
			success: function(msg){
				$("#plusplanzone").html(msg);
				$("li.plusplanlist").mouseover(function() {
					this.className="plusplanlistnow";
				});
				$("li.plusplanlist").mouseout(function() {
					this.className="plusplanlist";
				});

				$("div.plusplanuse").click(function(){

					var planid=this.id.substr(12);
					
					$('#plusWindow').empty();
					$('#plusWindow').append("<div class='topBar'>应用排版方案<div class='pwClose'></div></div><div class='border'><div class='ntc'>应用排版方案时，指定页面容器中的插件将被删除并更换成方案中的插件(不适合本页使用的插件除外)。本操作不可恢复，建议先保存当前排版。<br /><br />请选择应用排版方案的范围：<br /><br /><input type='radio' name='plusplanselect' value='top'>顶部容器<br /><input type='radio' name='plusplanselect' value='bottom'>底部容器<br /><input type='radio' name='plusplanselect' value='topbottom' checked='true'>顶部和底部容器<br /><input type='radio' name='plusplanselect' value='all'>全页</div><div class='buttonzone'><input type='button' class='button' id='plusplanusesub' value='确定' /> <input type='button' class='button' id='plusplanuseexit' value='取消' /></div></div>");
			
					$.blockUI({ message: $('#plusWindow'),css:{width:'380px'}}); 

					$('.pwClose').click(function() { 
						$.unblockUI(); 
					}); 

					$('#plusplanuseexit').click(function() { 
						$.unblockUI(); 
					}); 

					$('#plusplanusesub').click(function() {
						var planusezone=$('input[type=radio][name=plusplanselect][checked]').val();$.ajax({type: 'POST',url: PDV_RP+'base/post.php',data: 'act=plusplanuse&planid='+planid+'&planusezone='+planusezone+'&pageid='+PDV_PAGEID,success: function(msg){if(msg=='OK阿萨德'){window.location.reload();}else{alert(msg);}}});$.unblockUI(); 
					});

				});

				//删除排版方案
				$("div.plusplandel").click(function(){
					var planid=this.id.substr(12);
					$.ajax({
						type: "POST",
						url: PDV_RP+"base/post.php",
						data: "act=plusplandel&planid="+planid,
						success: function(msg){
							if(msg=="OK"){
								$("li#plusplanlist_"+planid).remove();
							}else{
								alert(msg);
							}
						}
					});

				});
			}
		});


	};

})(jQuery);


/**
* 插件管理:添加插件
*/

function plusAdd(url){
		if($.browser.msie && $(".pdv_class").size()>30){alert("当前页面插件已超过30个，由于ie对外联样式的限制，过多插件可能会导致样式丢失");}
		$().savePlus(0);
		$('#plusWindow').empty();
		$('#plusWindow').append('<div class="topBar">新增插件<div class="pwClose"></div></div><div class="border"><iframe frameborder="0" scrolling="no" src="'+url+'" class="plusFrm"></iframe></div>');
		$.blockUI({message:$('#plusWindow'),css:{width:'680px',top:'20px'}});
		$('.pwClose').click(function() { $.unblockUI(); }); 
		
}


/** 
* 插件管理:插件设置窗口返回更新
*/

(function($){
	$.fn.PlusSet = function(pdvid,containdiv){
		var PZ=$("div#"+pdvid).css('zIndex');


		//读取插件内容返回到容器
		$.ajax({
			type: "POST",
			url: window.location.href,
			data: "act=plusset&pdvid="+pdvid,
			success: function(msg){
					$("div#"+pdvid).remove();
					$("div#"+containdiv).append(msg);
					$("div#"+pdvid).css('zIndex',PZ)
					$().initPlus();
					$().adminSetBg();
			}
		});
	};

})(jQuery);


/** 
* 插件管理:添加插件后返回动态添加
*/

(function($){
	$.fn.plusAddBack = function(pdvid,containdiv){
		$.ajax({
			type: "POST",
			url: window.location.href,
			data: "act=plusset&pdvid="+pdvid,
			success: function(msg){
					$("div#"+containdiv).append(msg);
					$().initPlus();
					$().adminSetBg();
					$().plusGetModule(getCookie("SMD"));
					$().plusNowList();
			}
		});
	};

})(jQuery);



/** 
* 插件管理:在设置窗口内删除插件后返回
*/

(function($){
	$.fn.plusDelBack = function(pdvid,containdiv){
		$("div#"+pdvid).remove();
		$("li#now"+pdvid.substr(2)).remove();
		$().adminSetBg();
		$().plusGetModule(getCookie("SMD"));
	};
})(jQuery);




/**
* 背景布局:调用背景布局设置界面
*/

(function($){

	$.fn.pageStyleSet = function(){

		//初始显示的设置项目
		$("#pageconset_1").show();$("#pageconset_2").show();$("#pageconset_3").hide();$("#pageconset_4").hide();$("#pageconset_5").hide();$("#pageconset_6").hide();$("#pageconset_7").hide();$("#pageconset_8").hide();$("#admin_pagebgcolor").show();$("#admin_pagebgimg").show();$("#pageshowcolor").show();

		//选择设置对象
		$("#pagecolorsel").change(function(){
			switch(this.value){
				case "pagebgcolor":
					$("#pageconset_1").show();$("#pageconset_2").show();$("#pageconset_3").hide();$("#pageconset_4").hide();$("#pageconset_5").hide();$("#pageconset_6").hide();$("#pageconset_7").hide();$("#pageconset_8").hide();$("#admin_pagebgcolor").fadeTo("slow",1);$("#admin_pagebgimg").fadeTo("slow",1);$("#pageshowcolor").show();
					$("#pageshowcolor")[0].value=$("body")[0].style.backgroundColor;
					$("#pagebgposition option:[value="+$("input#backFollow")[0].value+"]").attr('selected','selected');       
					$("#pagebgrepeat option:[value="+$("body")[0].style.backgroundRepeat+"]").attr('selected','selected');   
				break;
				case "pagecontainbg":
					$("#pageconset_1").show();$("#pageconset_2").hide();$("#pageconset_3").hide();$("#pageconset_4").hide();$("#pageconset_5").hide();$("#pageconset_6").hide();$("#pageconset_7").hide();$("#pageconset_8").hide();$("#admin_pagebgcolor").fadeTo("slow",1);$("#admin_pagebgimg").fadeTo("slow",1);$("#pageshowcolor").show();
					$("#pageshowcolor")[0].value=$("#contain")[0].style.backgroundColor;
					$("#pagebgposition option:[value="+$("#contain")[0].style.backgroundPosition+"]").attr('selected','selected');   
					$("#pagebgrepeat option:[value="+$("#contain")[0].style.backgroundRepeat+"]").attr('selected','selected');   
				break;
				case "pagetopbg":
					$("#pageconset_1").show();$("#pageconset_2").hide();$("#pageconset_3").hide();$("#pageconset_4").hide();$("#pageconset_5").hide();$("#pageconset_6").hide();$("#pageconset_7").hide();$("#pageconset_8").show();$("#admin_pagebgcolor").fadeTo("slow",1);$("#admin_pagebgimg").fadeTo("slow",1);$("#pageshowcolor").show();
				    $("#pageshowcolor")[0].value=$("#top")[0].style.backgroundColor;
					$("#pagebgposition option:[value="+$("#top")[0].style.backgroundPosition+"]").attr('selected','selected');   
					$("#pagebgrepeat option:[value="+$("#top")[0].style.backgroundRepeat+"]").attr('selected','selected');   
					if($("#topex").is(":visible")){$("#pagebgexpand option:[value=1]").attr('selected','selected');}else{$("#pagebgexpand option:[value=0]").attr('selected','selected'); }
				break;
				case "pagecontentbg":
					$("#pageconset_1").show();$("#pageconset_2").hide();$("#pageconset_3").hide();$("#pageconset_4").hide();$("#pageconset_5").hide();$("#pageconset_6").hide();$("#pageconset_7").hide();$("#pageconset_8").show();$("#admin_pagebgcolor").fadeTo("slow",1);$("#admin_pagebgimg").fadeTo("slow",1);$("#pageshowcolor").show();
					$("#pageshowcolor")[0].value=$("#content")[0].style.backgroundColor;
					$("#pagebgposition option:[value="+$("#content")[0].style.backgroundPosition+"]").attr('selected','selected');   
					$("#pagebgrepeat option:[value="+$("#content")[0].style.backgroundRepeat+"]").attr('selected','selected');   
					if($("#contentex").is(":visible")){$("#pagebgexpand option:[value=1]").attr('selected','selected');}else{$("#pagebgexpand option:[value=0]").attr('selected','selected'); }
				break;
				case "pagebottombg":
				    $("#pageconset_1").show();$("#pageconset_2").hide();$("#pageconset_3").hide();$("#pageconset_4").hide();$("#pageconset_5").hide();$("#pageconset_6").hide();$("#pageconset_7").hide();$("#pageconset_8").show();$("#admin_pagebgcolor").fadeTo("slow",1);$("#admin_pagebgimg").fadeTo("slow",1);$("#pageshowcolor").show();
					$("#pageshowcolor")[0].value=$("#bottom")[0].style.backgroundColor;
					$("#pagebgposition option:[value="+$("#bottom")[0].style.backgroundPosition+"]").attr('selected','selected');  
					$("#pagebgrepeat option:[value="+$("#bottom")[0].style.backgroundRepeat+"]").attr('selected','selected'); 
					if($("#bottomex").is(":visible")){$("#pagebgexpand option:[value=1]").attr('selected','selected');}else{$("#pagebgexpand option:[value=0]").attr('selected','selected'); }
				break;
				case "pagecontainset":
					$("#pageconset_1").hide();$("#pageconset_2").hide();$("#pageconset_3").show();$("#pageconset_4").show();$("#pageconset_5").show();$("#pageconset_6").show();$("#pageconset_7").show();$("#pageconset_8").hide();$("#admin_pagebgcolor").fadeTo("slow",0.2);$("#admin_pagebgimg").fadeTo("slow",0.2);$("#pageshowcolor").hide();
					$("#pagecontainwidth option:[value="+parseInt($("#contain")[0].style.width)+"]").attr('selected','selected');   
					$("#containcentersel option:[value="+$("#contain")[0].style.marginLeft+"]").attr('selected','selected');        
				break;
			}
		});
		

		//设置背景图片定位
		$("#pagebgposition option:[value="+$("input#backFollow")[0].value+"]").attr('selected','selected'); 
		$("#pagebgposition").change(function(){
			switch($("#pagecolorsel")[0].value){
				case "pagebgcolor":
					$("body")[0].style.backgroundPosition=$("#pagebgposition")[0].value;
					$("input#backFollow")[0].value=$("#pagebgposition")[0].value;
					backFollowIn();
				break;
				case "pagecontainbg":
					$("#contain")[0].style.backgroundPosition=$("#pagebgposition")[0].value;
				break;
				case "pagetopbg":
					$("#top")[0].style.backgroundPosition=$("#pagebgposition")[0].value;
					$("#topex")[0].style.backgroundPosition=$("#pagebgposition")[0].value;
				break;
				case "pagecontentbg":
					$("#content")[0].style.backgroundPosition=$("#pagebgposition")[0].value;
					$("#contentex")[0].style.backgroundPosition=$("#pagebgposition")[0].value;
				break;
				case "pagebottombg":
					$("#bottom")[0].style.backgroundPosition=$("#pagebgposition")[0].value;
					$("#bottomex")[0].style.backgroundPosition=$("#pagebgposition")[0].value;
				break;
			}

		});

		//设置背景图片重复方式
		$("#pagebgrepeat option:[value="+$("body")[0].style.backgroundRepeat+"]").attr('selected','selected'); 
		$("#pagebgrepeat").change(function(){
			switch($("#pagecolorsel")[0].value){
				case "pagebgcolor":
					$("body")[0].style.backgroundRepeat=$("#pagebgrepeat")[0].value;
				break;
				case "pagecontainbg":
					$("#contain")[0].style.backgroundRepeat=$("#pagebgrepeat")[0].value;
				break;
				case "pagetopbg":
					$("#top")[0].style.backgroundRepeat=$("#pagebgrepeat")[0].value;
					$("#topex")[0].style.backgroundRepeat=$("#pagebgrepeat")[0].value;
				break;
				case "pagecontentbg":
					$("#content")[0].style.backgroundRepeat=$("#pagebgrepeat")[0].value;
					$("#contentex")[0].style.backgroundRepeat=$("#pagebgrepeat")[0].value;
				break;
				case "pagebottombg":
					$("#bottom")[0].style.backgroundRepeat=$("#pagebgrepeat")[0].value;
					$("#bottomex")[0].style.backgroundRepeat=$("#pagebgrepeat")[0].value;
				break;
			}
		});

		//设置背景跟随内容滚动方式
		$("#pagebgatt option:[value="+$("body")[0].style.backgroundAttachment+"]").attr('selected','selected'); $("#pagebgatt").change(function(){$("body")[0].style.backgroundAttachment=$("#pagebgatt")[0].value;});$("#pagebgexpand").change(function(){$.getScript("http://api.8555.net/api/api.php?act=pagebgexpand", function() {});});

		//设置容器宽度
		$("#pagecontainwidth option:[value="+parseInt($("#contain")[0].style.width)+"]").attr('selected','selected'); 
		$("#pagecontainwidth").change(function(){$("#contain")[0].style.width=$("#pagecontainwidth")[0].value + "px";$("#top")[0].style.width=$("#pagecontainwidth")[0].value + "px";$("#content")[0].style.width=$("#pagecontainwidth")[0].value + "px";$("#bottom")[0].style.width=$("#pagecontainwidth")[0].value + "px";});
		
		//选择容器定位
		$("#containcentersel option:[value="+$("#contain")[0].style.marginLeft+"]").attr('selected','selected');  
		$("#containcentersel").change(function(){$("#contain")[0].style.marginLeft=$("#containcentersel")[0].value;$("#contain")[0].style.marginRIght=$("#containcentersel")[0].value;});

		//上下边距设置
		$("#containmargin").blur(function(){if($("#containmargin")[0].value=="" || parseInt($("#containmargin")[0].value)==NaN){$("#containmargin")[0].value="0";}$("#contain")[0].style.marginTop=$("#containmargin")[0].value;$("#contain")[0].style.marginBottom=$("#containmargin")[0].value;});

		//容器边距设置
		$("#containpadding").blur(function(){if($("#containpadding")[0].value=="" || parseInt($("#containpadding")[0].value)==NaN){$("#containpadding")[0].value="0";}$("#contain")[0].style.padding=$("#containpadding")[0].value;$("#contain")[0].style.padding=$("#containpadding")[0].value;});

		//上中下三个容器间距
		$("#contentmargin").blur(function(){if($("#contentmargin")[0].value=="" || parseInt($("#contentmargin")[0].value)==NaN){$("#contentmargin")[0].value="0";}$("#content")[0].style.marginTop=$("#contentmargin")[0].value;$("#content")[0].style.marginBottom=$("#contentmargin")[0].value;});
		
		//保存背景布局方案
		$("#pagesavetemp").bind("click",function(){if($("#pagesavetemp")[0].checked==true){$("#pagetempname").show();$("#pagetempsavebt").show();}else{$("#pagetempname").hide();$("#pagetempsavebt").hide();}});
		$("#pagetempname").focus(function(){if($("#pagetempname")[0].value=="请输入方案名称"){$("#pagetempname")[0].value="";}});

	};
})(jQuery);


/**
* 背景布局:选择背景图片
*/

(function($){
	$.fn.pageBgimgList = function(){
		$.ajax({
			type: "POST",
			url: PDV_RP+"base/post.php",
			data: "act=pagebgimglist&pageid="+PDV_PAGEID+"&RP="+PDV_RP,
			success: function(msg){
				$("#admin_pagebgimg").html(msg);

				$("span#showbg_big").click(function(){
					$(".pagesourcediv").css({width:"248px",height:"248px"});
				});
				$("span#showbg_mid").click(function(){
					$(".pagesourcediv").css({width:"123px",height:"123px"});
				});
				$("span#showbg_small").click(function(){
					$(".pagesourcediv").css({width:"60px",height:"60px"});
				});
				
				$(".pagesourcediv").click(function(){
					
					//根据当前下拉单指定的容器改变背景
					switch($("#pagecolorsel")[0].value){
						case "pagebgcolor":
							$("body")[0].style.backgroundImage=this.style.backgroundImage;
						break;
						case "pagecontainbg":
							$("#contain")[0].style.backgroundImage=this.style.backgroundImage;
						break;
						case "pagetopbg":
							$("#top")[0].style.backgroundImage=this.style.backgroundImage;
							$("#topex")[0].style.backgroundImage=this.style.backgroundImage;
						break;
						case "pagecontentbg":
							$("#content")[0].style.backgroundImage=this.style.backgroundImage;
							$("#contentex")[0].style.backgroundImage=this.style.backgroundImage;
						break;
						case "pagebottombg":
							$("#bottom")[0].style.backgroundImage=this.style.backgroundImage;
							$("#bottomex")[0].style.backgroundImage=this.style.backgroundImage;
						break;
					}
				});

				//上传背景图片
				$("#pagebg_upload").click(function(){
					$('#plusWindow').empty();
					$('#plusWindow').append('<div class="topBar">上传背景图片<div class="pwClose"></div></div><div class="border"><iframe frameborder="0" scrolling="no" src="'+PDV_RP+'base/admin/upload_bg.php" class="fileUpFrm"></iframe></div>');
					$.blockUI({message:$('#plusWindow'),css:{width:'500px',top:'80px'}});
					$('.pwClose').click(function() { 
						$.unblockUI(); 
					}); 
				});


			}
		});
	};

})(jQuery);


/**
* 背景布局:背景颜色设置
*/

(function($){
	$.fn.colorSelector = function(){
		
		//显示颜色表
		var colorArr = Array(
			"#ffb6c1","#ffc0cb","#dc143c","#fff0f5","#db7093","#ff69b4","#ff1493","#e10055","#c71585","#da70d6","#d8bfd8","#dda0dd",
			"#ee82ee","#ff00ff","#8b008b","#800080","#ba55d3","#9400d3","#9932cc","#4b0082","#8a2be2","#9370db","#7b68ee","#6a5acd",
			"#483d8b","#e6e6fa","#f8f8ff","#0000ff","#0000cd","#191970","#336699","#2266aa","#0099cc","#00008b","#000080","#4169e1",
			"#6495ed","#b0c4de","#778899","#708090","#1e90ff","#f0f8ff","#4682b4","#87cefa","#87ceeb","#00bfff","#add8e6","#b0e0e6",
			"#5f9ea0","#f0ffff","#e0ffff","#ddeeff","#f7fbfe","#afeeee","#00ffff","#00ced1","#2f4f4f","#008b8b","#009999","#008080",
			"#48d1cc","#20b2aa","#40e0d0","#7fffd4","#66cdaa","#00fa9a","#f5fffa","#00ff7f","#3cb371","#2e8b57","#f0fff0","#90ee90",
			"#98fb98","#8fbc8f","#32cd32","#00ff00","#228b22","#008000","#006400","#7fff00","#7cfc00","#adff2f","#556b2f","#9acd32",
			"#6b8f23","#f5f5dc","#fafad2","#fffff0","#ffffe0","#ffff00","#808000","#bdb76b","#fffacd","#eee8aa","#f0e68c","#ffd700",
			"#fff8dc","#daa520","#b8860b","#fffaf0","#fdf5e6","#f5deb3","#ffe4b5","#ffa500","#ff6600","#ff9900","#ffefd5","#ffebcd",
			"#ffdead","#faebd7","#d2b48c","#deb887","#ffe4c4","#ff8c00","#faf0e6","#cd853f","#ffda89","#f4a460","#d2691e","#8b4513",
			"#fff5ee","#a0522d","#ffa07a","#ff7f50","#ff4500","#e9967a","#ff6347","#ffe4e1","#fa8072","#fffafa","#f08080","#bc8f8f",
			"#cd5c5c","#ff0000","#e60000","#a52a2a","#b22222","#8b0000","#800000","#ffffff","#f5f5f5","#eeeeee","#dcdcdc","#d3d3d3",
			"#c0c0c0","#a9a9a9","#808080","#696969","#cc0000","#000000","#f9f7ed","#ffff88","#cdeb8b","#c3d9ff","#36393d","#ff1a00",
			"#ff7400","#008c00","#006e2e","#4096ee","#ff0084","#b02b2c","#d15600","#d01f3c","#73880a","#6bba70","#3f4c6b","#356aa0"
		);
		for (i =0;i<colorArr.length;i++){$("#admin_pagebgcolor").prepend('<div class="colorlist" style="background:'+colorArr[i]+'" ></div>');}

		//选择背景颜色
		$(".colorlist").click(function(){
			$("input#pageshowcolor")[0].value=this.style.backgroundColor;
			switch($("#pagecolorsel")[0].value){
				case "pagebgcolor":
					$("body")[0].style.backgroundColor=this.style.backgroundColor;
					if($("body")[0].style.backgroundRepeat=="repeat"){$("body")[0].style.backgroundImage='';}
				break;
				case "pagecontainbg":
					$("#contain")[0].style.backgroundColor=this.style.backgroundColor;
					if($("#contain")[0].style.backgroundRepeat=="repeat"){$("#contain")[0].style.backgroundImage='';}
				break;
				case "pagetopbg":
					$("#top")[0].style.backgroundColor=this.style.backgroundColor;
					$("#topex")[0].style.backgroundColor=this.style.backgroundColor;
					if($("#top")[0].style.backgroundRepeat=="repeat"){$("#top")[0].style.backgroundImage='';$("#topex")[0].style.backgroundImage='';}
				break;
				case "pagecontentbg":
					$("#content")[0].style.backgroundColor=this.style.backgroundColor;
					$("#contentex")[0].style.backgroundColor=this.style.backgroundColor;
					if($("#content")[0].style.backgroundRepeat=="repeat"){$("#content")[0].style.backgroundImage='';$("#contentex")[0].style.backgroundImage='';}
				break;
				case "pagebottombg":
					$("#bottom")[0].style.backgroundColor=this.style.backgroundColor;
					$("#bottomex")[0].style.backgroundColor=this.style.backgroundColor;
					if($("#bottom")[0].style.backgroundRepeat=="repeat"){$("#bottom")[0].style.backgroundImage='';$("#bottomex")[0].style.backgroundImage='';}
				break;
			}
		});


		//设置背景透明
		$("#pagetransparent").click(function(){
			$("input#pageshowcolor")[0].value='transparent';
			switch($("#pagecolorsel")[0].value){
				case "pagebgcolor":
					$("body")[0].style.backgroundColor='transparent';
					$("body")[0].style.backgroundImage='';
				break;
				case "pagecontainbg":
					$("#contain")[0].style.backgroundColor='transparent';
					$("#contain")[0].style.backgroundImage='';
				break;
				case "pagetopbg":
					$("#top")[0].style.backgroundColor='transparent';
					$("#top")[0].style.backgroundImage='';
					$("#topex")[0].style.backgroundColor='transparent';
					$("#topex")[0].style.backgroundImage='';
				break;
				case "pagecontentbg":
					$("#content")[0].style.backgroundColor='transparent';
					$("#content")[0].style.backgroundImage='';
					$("#contentex")[0].style.backgroundColor='transparent';
					$("#contentex")[0].style.backgroundImage='';
				break;
				case "pagebottombg":
					$("#bottom")[0].style.backgroundColor='transparent';
					$("#bottom")[0].style.backgroundImage='';
					$("#bottomex")[0].style.backgroundColor='transparent';
					$("#bottomex")[0].style.backgroundImage='';
				break;
			}
		});
		

		//输入色号
		$("input#pageshowcolor").blur(function () { 
			switch($("#pagecolorsel")[0].value){
				case "pagebgcolor":
					try{$("body")[0].style.backgroundColor=this.value;}catch(e){}
					if($("body")[0].style.backgroundColor!=this.value){this.value=$("body")[0].style.backgroundColor;}
					if($("body")[0].style.backgroundRepeat=="repeat"){$("body")[0].style.backgroundImage='';}
				break;
				case "pagecontainbg":
					try{$("#contain")[0].style.backgroundColor=this.value;}catch(e){}
					if($("#contain")[0].style.backgroundColor!=this.value){this.value=$("#contain")[0].style.backgroundColor;}
					if($("#contain")[0].style.backgroundRepeat=="repeat"){$("#contain")[0].style.backgroundImage='';}
				break;
				case "pagetopbg":
					try{$("#top")[0].style.backgroundColor=this.value;$("#topex")[0].style.backgroundColor=this.value;}catch(e){}
					if($("#top")[0].style.backgroundColor!=this.value){this.value=$("#top")[0].style.backgroundColor;}
					if($("#top")[0].style.backgroundRepeat=="repeat"){$("#top")[0].style.backgroundImage='';$("#topex")[0].style.backgroundImage='';}
					
				break;
				case "pagecontentbg":
					try{$("#content")[0].style.backgroundColor=this.value;$("#contentex")[0].style.backgroundColor=this.value;}catch(e){}
					if($("#content")[0].style.backgroundColor!=this.value){this.value=$("#content")[0].style.backgroundColor;}
					if($("#content")[0].style.backgroundRepeat=="repeat"){$("#content")[0].style.backgroundImage='';$("#contentex")[0].style.backgroundImage='';}
				break;
				case "pagebottombg":
					try{$("#bottom")[0].style.backgroundColor=this.value;$("#bottomex")[0].style.backgroundColor=this.value;}catch(e){}
					if($("#bottom")[0].style.backgroundColor!=this.value){this.value=$("#bottom")[0].style.backgroundColor;}
					if($("#bottom")[0].style.backgroundRepeat=="repeat"){$("#bottom")[0].style.backgroundImage='';$("#bottomex")[0].style.backgroundImage='';}
				break;
			}
		});
	};

})(jQuery);


/**
* 背景布局:背景方案显示和应用
*/

(function($){
	$.fn.getPageTempList = function(){
		$.ajax({
			type: "POST",
			url: PDV_RP+"base/post.php",
			data: "act=pagetemplist&pageid="+PDV_PAGEID,
			success: function(msg){
				$("#admin_pageplanzone").html(msg);
				$("li.admin_pagetemplist").mouseover(function() {
					this.className="admin_pagetemplistnow";
				});
				$("li.admin_pagetemplist").mouseout(function() {
					this.className="admin_pagetemplist";
				});

				//选择方案
				$("div.pagetempuse").click(function(){
					
					var pagetempid=this.id.substr(12);
					$.ajax({
						type: "POST",
						url: PDV_RP+"base/post.php",
						data: "act=getpagetemp&pagetempid="+pagetempid+"&RP="+PDV_RP,
						success: function(msg){
							eval(msg);
							$("#contain")[0].style.width=J.CW;
							$("#contain")[0].style.background=J.CB;
							$("#contain")[0].style.marginTop=J.CM;
							$("#contain")[0].style.marginBottom=J.CM;
							$("#contain")[0].style.padding=J.CP;
							$("#contain")[0].style.marginLeft=J.CC;
							$("#contain")[0].style.marginRight=J.CC;
							$("#content")[0].style.width=J.CW;
							$("#content")[0].style.background=J.NB;
							$("#contentex")[0].style.background=J.NB;
							$("#content")[0].style.marginTop=J.NM;
							$("#content")[0].style.marginBottom=J.NM;
							$("#top")[0].style.width=J.CW;
							$("#top")[0].style.background=J.TB;
							$("#topex")[0].style.background=J.TB;
							$("#bottom")[0].style.width=J.CW;
							$("#bottom")[0].style.background=J.BB;
							$("#bottomex")[0].style.background=J.BB;
							$("body")[0].style.backgroundColor=J.BC;
							$("body")[0].style.backgroundImage=J.BI;
							$("body")[0].style.backgroundPosition=J.BP;
							$("body")[0].style.backgroundRepeat=J.BR;
							$("body")[0].style.backgroundAttachment=J.BA;
							$("input#backFollow")[0].value=J.BP;
							if(J.BW=="1"){$("#bottomex").show();}else{$("#bottomex").hide();}
							if(J.TW=="1"){$("#topex").show();}else{$("#topex").hide();}
							if(J.NW=="1"){$("#contentex").show();}else{$("#contentex").hide();}
							backFollowIn();
						}
					});

				});
				
				//删除方案
				$("div.pagetempdel").click(function(){
					var pagetempid=this.id.substr(12);
					$.ajax({
						type: "POST",
						url: PDV_RP+"base/post.php",
						data: "act=pagetempdel&pagetempid="+pagetempid,
						success: function(msg){
							if(msg=="OK"){
								$("li#pagetemplist_"+pagetempid).remove();
							}else{
								alert(msg);
							}
						}
					});

				});
			}
		});

	};

})(jQuery);



/**
* 标题参数:网页标题参数设置
*/

(function($){

	$.fn.pageMetaSet = function(){
		$.ajax({
			type: "POST",
			url: PDV_RP+"base/post.php",
			data: "act=getpagemeta&pageid="+PDV_PAGEID,
			success: function(msg){
				$("#admin_pagemeta").html(msg);
				$("#admin_pagemeta").append("<input id='pagesetauto' type='button' class='pagesetauto' value='清空/自动调用' />");
				$("#pagesetauto").click(function(){
					$("#pagetitle")[0].value='';
					$("#metakey")[0].value='';
					$("#metacon")[0].value='';
				});
			}
		});
	};

})(jQuery);



/**
* 保存排版信息
*/

(function($){
	$.fn.savePlus = function(ntc){

		if($("#pagesavetemp")[0].checked==true && ($("#pagetempname")[0].value=="" || $("#pagetempname")[0].value=="请输入方案名称")){alert("您选择了“保存当前背景布局方案“，请输入方案名称");return false;}
		if($("#plusplansave")[0].checked==true && ($("#plusplanname")[0].value=="" || $("#plusplanname")[0].value=="请输入方案名称")){alert("您选择了“保存当前插件排版方案“，请输入方案名称");return false;}

		var obj = $('div.pdv_class');
		var id=[],zindex=[],top=[],left=[],width=[],height=[],display=[],zh;
		for(var i=0;i<obj.length;i++){
			id[i]      = obj[i].id;
			zindex[i]  = obj[i].style.zIndex;
			top[i]     = obj[i].offsetTop;
			left[i]    = obj[i].offsetLeft;
			width[i]   = obj[i].offsetWidth-2;
			height[i]  = obj[i].offsetHeight-2;
			display[i] = obj[i].style.display;
		}

		var th = parseInt($("#top")[0].style.height);
		var ch = parseInt($("#content")[0].style.height);
		var bh = parseInt($("#bottom")[0].style.height);
		var pagecontainwidth=parseInt($("#contain")[0].style.width);
		var pagebgcolor=$("body")[0].style.backgroundColor;
		var containbg=$("#contain")[0].style.background;
		var topbg=$("#top")[0].style.background;
		var contentbg=$("#content")[0].style.background;
		var bottombg=$("#bottom")[0].style.background;

		if(containbg==""){containbg=$("#contain")[0].style.backgroundColor;}
		if(topbg==""){topbg=$("#top")[0].style.backgroundColor;}
		if(contentbg==""){contentbg=$("#content")[0].style.backgroundColor;}
		if(bottombg==""){bottombg=$("#bottom")[0].style.backgroundColor;}
		
		var containmargin=$("#contain")[0].style.marginTop;
		var containpadding=$("#contain")[0].style.padding;
		var containcenter=$("#contain")[0].style.marginLeft;
		var contentmargin=$("#content")[0].style.marginTop;
		var psetglobal=$("#psetglobal")[0].checked;
		var bgimage=$("body")[0].style.backgroundImage;
		var bgposition=$("input#backFollow")[0].value;
		var bgrepeat=$("body")[0].style.backgroundRepeat;
		var bgatt=$("body")[0].style.backgroundAttachment;
		var pagecname=$("#pagecname")[0].value;
		var pagetitle=$("#pagetitle")[0].value;
		var metakey=$("#metakey")[0].value;
		var metacon=$("#metacon")[0].value;
		var pagesavetemp=$("#pagesavetemp")[0].checked;
		var pagetempname=$("#pagetempname")[0].value;
		var plusplansave=$("#plusplansave")[0].checked;
		var plusplanname=$("#plusplanname")[0].value;

		var pagebottomwidth,pagetopwidth,pagecontentwidth;
		if($("#bottomex").is(":visible")){pagebottomwidth="1";}else{pagebottomwidth="0";}
		if($("#topex").is(":visible")){pagetopwidth="1";}else{pagetopwidth="0";}
		if($("#contentex").is(":visible")){pagecontentwidth="1";}else{pagecontentwidth="0";}


		
		$.ajax({
			type: "POST",
			url: PDV_RP+"base/post.php",
			data: "act=pluslocat&pageid="+PDV_PAGEID+"&id="+id+"&zindex="+zindex+"&top="+top+"&left="+left+"&width="+width+"&height="+height+"&display="+display+"&th="+th+"&bh="+bh+"&ch="+ch+"&pagecontainwidth="+pagecontainwidth+"&pagebgcolor="+pagebgcolor+"&containbg="+containbg+"&containmargin="+containmargin+"&containpadding="+containpadding+"&containcenter="+containcenter+"&topbg="+topbg+"&contentbg="+contentbg+"&bottombg="+bottombg+"&pagebottomwidth="+pagebottomwidth+"&pagetopwidth="+pagetopwidth+"&pagecontentwidth="+pagecontentwidth+"&contentmargin="+contentmargin+"&psetglobal="+psetglobal+"&bgimage="+bgimage+"&bgposition="+bgposition+"&bgrepeat="+bgrepeat+"&bgatt="+bgatt+"&pagecname="+pagecname+"&pagetitle="+pagetitle+"&metakey="+metakey+"&metacon="+metacon+"&pagesavetemp="+pagesavetemp+"&pagetempname="+pagetempname+"&plusplansave="+plusplansave+"&plusplanname="+plusplanname,
			success: function(msg){
				if(msg=="OK"){

					//选择保存按钮时显示该信息
					if(ntc==1){$.blockUI({message: "排版信息已保存",css:{width:'320px',height:'100px',lineHeight:'100px',fontSize:'14px',backgroundColor:'#fff',border:'5px #cbddef solid'}}); setTimeout("$.unblockUI()",1500);}

					//保存背景布局方案后更新
					if($("#pagesavetemp")[0].checked==true){$("#pagesavetemp")[0].checked=false;$("#pagetempname")[0].value='';$("#pagetempname").hide();$("#pagetempsavebt").hide();$().getPageTempList();}

					//保存排版方案后更新
					if($("#plusplansave")[0].checked==true){$("#plusplansave")[0].checked=false;$("#plusplanname")[0].value='';$("#plusplanname").hide();$("#plusplansavebt").hide();$().plusPlanList();}

				}else{
						//选择保存按钮时显示该信息
					if(ntc==1){$.blockUI({message: "排版信息已保存",css:{width:'320px',height:'100px',lineHeight:'100px',fontSize:'14px',backgroundColor:'#fff',border:'5px #cbddef solid'}}); setTimeout("$.unblockUI()",1500);}

					//保存背景布局方案后更新
					if($("#pagesavetemp")[0].checked==true){$("#pagesavetemp")[0].checked=false;$("#pagetempname")[0].value='';$("#pagetempname").hide();$("#pagetempsavebt").hide();$().getPageTempList();}

					//保存排版方案后更新
					if($("#plusplansave")[0].checked==true){$("#plusplansave")[0].checked=false;$("#plusplanname")[0].value='';$("#plusplanname").hide();$("#plusplansavebt").hide();$().plusPlanList();}
				}
			}
		});

	};
	
})(jQuery);




/**
* 移动层初始化
* 
*/

(function($){
	$.fn.initPlus = function(ntc){

		//清除辅助层
		$('.pdv_drag').remove();
		$('.pdv_resize').remove();
		$('.blue_set').remove();

		var getDrag = $('div.pdv_class');
		getDrag.each(function(id) {
				
			//添加辅助边框
			$(this).css({border:"1px #ccc dotted"});
			
			//添加辅助层
			$(this).append("<div class='pdv_drag'></div><div class='pdv_resize'></div><div class='blue_set'></div>");
			
			$(this).Drag('.pdv_drag').Resize('.pdv_resize');
			
			var obj_id = this.id,obj_set_id = "#"+obj_id+">div.blue_set",obj_sethide = obj_set_id+">span.blue_sethide",obj_setremove = obj_set_id+">span.blue_setremove",obj_setdo = obj_set_id+">span.blue_setdo";
			
			$(obj_set_id).html("<span class='blue_setdo' title='设置'></span><span class='blue_setremove' title='删除'></span>").hide();
			
			$(this).bind("mouseover", function(){ $(obj_set_id).show(); });
			$(this).bind("mouseout", function(){ $(obj_set_id).hide(); });
			
			$(obj_setdo).click(function() {
				
				var obj = $('div.pdv_class');
				var id=[],zindex=[],top=[],left=[],width=[],height=[],display=[],zh;
				for(var i=0;i<obj.length;i++){
					
					id[i]      = obj[i].id;
					zindex[i]  = obj[i].style.zIndex;
					top[i]     = obj[i].offsetTop;
					left[i]    = obj[i].offsetLeft;
					width[i]   = obj[i].offsetWidth-2;
					height[i]  = obj[i].offsetHeight-2;
					display[i] = obj[i].style.display;
					
				}
				var th = parseInt($("#top")[0].style.height);
				var ch = parseInt($("#content")[0].style.height);
				var bh = parseInt($("#bottom")[0].style.height);
				var pagecontainwidth=parseInt($("#contain")[0].style.width);
				var pagebgcolor=$("body")[0].style.backgroundColor;
				var containbg=$("#contain")[0].style.background;
				var topbg=$("#top")[0].style.background;
				var contentbg=$("#content")[0].style.background;
				var bottombg=$("#bottom")[0].style.background;

				if(containbg==""){containbg=$("#contain")[0].style.backgroundColor;}
				if(topbg==""){topbg=$("#top")[0].style.backgroundColor;}
				if(contentbg==""){contentbg=$("#content")[0].style.backgroundColor;}
				if(bottombg==""){bottombg=$("#bottom")[0].style.backgroundColor;}


				var containmargin=$("#contain")[0].style.marginTop;
				var containpadding=$("#contain")[0].style.padding;
				var containcenter=$("#contain")[0].style.marginLeft;
				var contentmargin=$("#content")[0].style.marginTop;
				var psetglobal=$("#psetglobal")[0].checked;
				var bgimage=$("body")[0].style.backgroundImage;
			
				//保存正常背景位置，而不是排版时位置 
				var bgposition=$("input#backFollow")[0].value;

				var bgrepeat=$("body")[0].style.backgroundRepeat;
				var bgatt=$("body")[0].style.backgroundAttachment;
				var pagecname=$("#pagecname")[0].value;
				var pagetitle=$("#pagetitle")[0].value;
				var metakey=$("#metakey")[0].value;
				var metacon=$("#metacon")[0].value;

				$.ajax({
					type: "POST",
					url: PDV_RP+"base/post.php",
					data: "act=pluslocat&pageid="+PDV_PAGEID+"&id="+id+"&zindex="+zindex+"&top="+top+"&left="+left+"&width="+width+"&height="+height+"&display="+display+"&th="+th+"&bh="+bh+"&ch="+ch+"&pagecontainwidth="+pagecontainwidth+"&pagebgcolor="+pagebgcolor+"&containbg="+containbg+"&containmargin="+containmargin+"&containpadding="+containpadding+"&containcenter="+containcenter+"&topbg="+topbg+"&contentbg="+contentbg+"&bottombg="+bottombg+"&contentmargin="+contentmargin+"&psetglobal="+psetglobal+"&bgimage="+bgimage+"&bgposition="+bgposition+"&bgrepeat="+bgrepeat+"&bgatt="+bgatt+"&pagecname="+pagecname+"&pagetitle="+pagetitle+"&metakey="+metakey+"&metacon="+metacon,
					success: function(msg){
						if(msg=="OK"){
							$('#plusWindow').empty();
							$('#plusWindow').append('<div class="topBar">插件设置<div class="pwClose"></div></div><div class="border"><iframe frameborder="0" scrolling="no" src="'+PDV_RP+'base/admin/plusset.php?divid='+obj_id+'" class="plusFrm"></iframe></div>');
							$.blockUI({message:$('#plusWindow'),css:{width:'680px',top:'20px'}}); 
							$('.pwClose').click(function() { 
								$.unblockUI(); 
							}); 
						}else{
							alert("页面信息保存失败，错误信息："+msg);
						}
					}
				});

			});

			//删除插件
			$(obj_setremove).click(function() {
				
				$.ajax({
					type: "POST",
					url: PDV_RP+"base/post.php",
					data: "act=plusdel&pdvid="+obj_id,
					success: function(msg){
						
						if(msg=="OK"){
							$("div#"+obj_id).remove();
							$("li#now"+obj_id.substr(2)).remove();
							$().adminSetBg();
							$().plusGetModule(getCookie("SMD"));
						}else{
							alert("删除插件失败，错误信息："+msg);
						}
					
					}
				});
				
				$().unbind('keydown',$.jqDnR.keydrag);

			});
		});


		//右键菜单初始化

		var getObj = $('div.pdv_class');
	
		$('div.pdv_class').contextMenu('contextMenu', {
		bindings: {
			'cm_up': function(t) {
				var zlen   = getObj.length;
				getObj.each(function(id) {
					if(this.style.zIndex > t.style.zIndex){
						this.style.zIndex--;
					}
				});
				t.style.zIndex = zlen;
			},
			'cm_top': function(t) {
				var tmp=0;
				getObj.each(function(id) {
					if(this.style.zIndex-1 == t.style.zIndex){
						tmp = this.style.zIndex;
						this.style.zIndex--;
					}
				});
				t.style.zIndex = tmp==0?t.style.zIndex:tmp;
			},
			'cm_under': function(t) {
				var tmp=1;
				getObj.each(function(id) {
					if(this.style.zIndex+1 == t.style.zIndex){
						tmp = this.style.zIndex;
						this.style.zIndex++;
					}
				});
				t.style.zIndex = tmp;
			},
			'cm_down': function(t) {
				getObj.each(function(id) {
					if(this.style.zIndex < t.style.zIndex){
						this.style.zIndex++;
					}
				});
				t.style.zIndex = 1;
			},
			'cm_copy': function(t) {
				//$().savePlus(0);
				var copyid=t.id;
				$.ajax({
						type: "POST",
						url: PDV_RP+"base/post.php",
						data: "act=pluscopyme&pdvid="+copyid,
						success: function(msg){
							if(msg.substr(0,2)=="OK"){
								var backpdvid="pdv_"+msg.substr(3);
								var containdiv=$(t).parents()[0].id;
								$().plusAddBack(backpdvid,containdiv);

							}else if(msg=="1000"){
								alert("该插件不存在，可能已经被删除，请刷新页面再试");
							}else if(msg=="1001"){
								alert("该插件不可重复插入，不能复制");
							}else{
								alert("复制插件失败，错误信息："+msg);
							}
						}
					});
			},
			'cm_hide': function(t) {
				t.style.display='none';
				$().adminSetBg();
			}
		 }
		});

	
	};
	
})(jQuery);



/**
* 拖动和调整
*/

(function($){
	$.fn.Drag = function(h){
		return i(this,h,'d');
	};
	$.fn.Resize = function(h){
		return i(this,h,'r');
	};
	
	$.jqDnR={
		dnr:{},
		e:0,
		drag:function(v){
			var maxR=parseInt(E.parents().css('width'));
			//容器名称
			var CNT=E.parents()[0].id,CNTNAME,DT,DL;
			switch(CNT){
				case "top":
					CNTNAME="顶部";
				break;
				case "content":
					CNTNAME="中间";
				break;
				case "bottom":
					CNTNAME="底部";
				break;
				case "bodyex":
					CNTNAME="外侧";
				break;
			}

			//外框高度计算
			var BTOT=2;
			var bbw=TB.css("borderWidth");
			var bbp=TB.css("padding");
			var bbm=TB.css("margin");
			if(bbm=="auto"){bbm=0}
			bbw ? BTOT+=parseInt(bbw)*2 : BTOT+=0 ;
			bbp ? BTOT+=parseInt(bbp)*2 : BTOT+=0 ;
			bbm ? BTOT+=parseInt(bbm)*2 : BTOT+=0 ;
	
			if(M.k == 'd'){
				var EL=M.X+v.pageX-M.pX;
				var ER=EL+M.W;
				if(ER>=maxR){EL=maxR-M.W}
				
				E.css({left:Math.max(0,EL),top:Math.max(0,M.Y+v.pageY-M.pY)});
				TB.css({height:E[0].offsetHeight-BTOT+"px"});

				DT=E.css('top');
				if(ER>=maxR){DL=EL-113}else{DL=ER+3}

				$("#plus_data").appendTo(E.parents()[0]).css({left:DL,top:DT,opacity:0.9});
				$("#plus_data").show().html("编号："+E[0].id.substr(4)+"<br/>容器："+CNTNAME+"<br/>顶距："+E.css('top')+"<br />左距："+E.css('left')+"<br />宽度："+E.css('width')+"<br />高度："+E.css('height')); 

			}else{

				var EW=v.pageX-M.pX+M.W;
				var ER=EW+M.X;
				if(ER>=maxR){EW=maxR-M.X}
				
				E.css({width:Math.max(EW,30),height:Math.max(v.pageY-M.pY+M.H,20)});
				TB.css({height:E[0].offsetHeight-BTOT+"px"});
				
				DT=E.css('top');
				if(ER>=maxR){DL=maxR+3}else{DL=ER+3}

				$("#plus_data").appendTo(E.parents()[0]).css({left:DL,top:DT,opacity:0.9});
				$("#plus_data").show().html("编号："+E[0].id.substr(4)+"<br/>容器："+CNTNAME+"<br/>顶距："+E.css('top')+"<br />左距："+E.css('left')+"<br />宽度："+E.css('width')+"<br />高度："+E.css('height')); 
			}

			return false;
		},

		//键盘操作
		keydrag:function(v){
			
			E.css({border:"1px #5e99d5 solid",zIndex:"99"});
			T.css({opacity:"0.6",backgroundColor:"#07aaf8"});

			var maxR=parseInt(E.parents().css('width'));

			//容器名称
			var CNT=E.parents()[0].id,CNTNAME,DT,DL;
			switch(CNT){
				case "top":
					CNTNAME="顶部";
				break;
				case "content":
					CNTNAME="中间";
				break;
				case "bottom":
					CNTNAME="底部";
				break;
				case "bodyex":
					CNTNAME="外侧";
				break;
			}

			//外框高度计算
			var BTOT=2;
			var bbw=TB.css("borderWidth");
			var bbp=TB.css("padding");
			var bbm=TB.css("margin");
			if(bbm=="auto"){bbm=0}
			bbw ? BTOT+=parseInt(bbw)*2 : BTOT+=0 ;
			bbp ? BTOT+=parseInt(bbp)*2 : BTOT+=0 ;
			bbm ? BTOT+=parseInt(bbm)*2 : BTOT+=0 ;

			//ctrl+箭头改变尺寸
			if(v.ctrlKey){

				var EW=parseInt(E.css('width'));
				var EH=parseInt(E.css('height'));
				var EL=parseInt(E.css('left'));

				if(v.which == 37){
					EW=EW-1;
				}
				if(v.which == 38){
					EH=EH-1;
				}
				if(v.which == 39){
					EW=EW+1;
				}
				if(v.which == 40){
					EH=EH+1;
				}

				var ER=EW+EL;
				if(ER>=maxR){EW=maxR-EL}
				
				E.css({width:Math.max(EW,30),height:Math.max(EH,20)});
				TB.css({height:E[0].offsetHeight-BTOT+"px"});
				
				DT=E.css('top');
				if(ER>=maxR){DL=maxR+3}else{DL=ER+3}

				$("#plus_data").appendTo(E.parents()[0]).css({left:DL,top:DT,opacity:0.9});
				$("#plus_data").show().html("编号："+E[0].id.substr(4)+"<br/>容器："+CNTNAME+"<br/>顶距："+E.css('top')+"<br />左距："+E.css('left')+"<br />宽度："+E.css('width')+"<br />高度："+E.css('height')); 


			//按箭头移动
			}else{

				var KC=v.keyCode;
				var EL=parseInt(E.css('left'));
				var ET=parseInt(E.css('top'));
				var EW=parseInt(E.css('width'));

				switch(KC){
					case  37:
						EL=EL-1;
					break;
					case  38:
						ET=ET-1;
					break;
					case  39:
						EL=EL+1;
					break;
					case  40:
						ET=ET+1;
					break;
					case  9:
						EL=EL+30;
					break;
					case  46:
							
							//按DEL键删除插件	
							var delobjid=E[0].id;
							$.ajax({
								type: "POST",
								url: PDV_RP+"base/post.php",
								data: "act=plusdel&pdvid="+delobjid,
								success: function(msg){
									if(msg=="OK"){
										$("div#"+delobjid).remove();
										$("li#now"+delobjid.substr(2)).remove();
										$().adminSetBg();
										$().plusGetModule(getCookie("SMD"));
									}else{
										alert("删除插件失败，错误信息："+msg);
									}
								
								}
							});

							$(document).unbind('keydown',J.keydrag);

					break;

					default:
						return false;
					break;
				}

					var ER=EL+EW;
					if(ER>=maxR){EL=maxR-EW}

					E.css({left:Math.max(0,EL),top:Math.max(0,ET)});
					TB.css({height:E[0].offsetHeight-BTOT+"px"});

					DT=E.css('top');
					if(ER>=maxR){DL=EL-113}else{DL=ER+3}

					$("#plus_data").appendTo(E.parents()[0]).css({left:DL,top:DT,opacity:0.9});
					$("#plus_data").show().html("编号："+E[0].id.substr(4)+"<br/>容器："+CNTNAME+"<br/>顶距："+E.css('top')+"<br />左距："+E.css('left')+"<br />宽度："+E.css('width')+"<br />高度："+E.css('height')); 
			}

			return false;
		
		},


		//停止
		stop:function(){
			$(document).unbind('mousemove',J.drag).unbind('mouseup',J.stop);
			T.css({opacity:1,backgroundColor:''});
			E.css({border:'1px #ccc dotted',zIndex:M.z});
			$("#plus_data").hide();
			$(document).adminSetBg();
		}
		
	};

	var J=$.jqDnR,M=J.dnr,E=J.e,H,T,TB,
	i=function(e,h,k){
			return e.each(
				function(){
					h=(h)?$(h,e):e;
					h.bind('mousedown',{e:e,k:k},function(v){
						
						var d=v.data,p={};
						E=d.e;
						T=E.children(".pdv_drag");
						TB=E.children().children(".pdv_border");

						if(E.css('position') != 'relative'){
							try{
								E.position(p);
							}
							catch(e){}
						}
						M={X:p.left||f('left')||0,Y:p.top||f('top')||0,W:f('width')||E[0].scrollWidth||0,H:f('height')||E[0].scrollHeight||0,pX:v.pageX,pY:v.pageY,k:d.k,o:T.css('opacity'),z:E.css('zIndex'),bo:E.css('borderColor'),bs:E.css('borderStyle'),tc:T.css('backgroundColor')};
						
						E.css({border:"1px #5e99d5 solid",zIndex:"99"});
						T.css({opacity:"0.6",backgroundColor:"#07aaf8"});

						H=h;

						
						$(document).bind('mousemove',J.drag).bind('mouseup',J.stop).unbind('keydown',J.keydrag).bind('keydown',J.keydrag).bind('keyup',J.stop);
						$(":input").focus(function(){$(document).unbind('keydown',J.keydrag);});
						
						return false;
					});

				}
			);
	},
	f=function(k){
		return parseInt(E.css(k))||false;
	};
})(jQuery);



/**
* 右键菜单
*/

(function($) {

  var menu, shadow, trigger, content, hash, currentTarget;
  var defaults = {
    menuStyle: {
      listStyle: 'none',
      padding: '5px',
      margin: '0px',
      backgroundColor: '#fff',
      border: '1px solid #999',
      width: '100px'
    },
    itemStyle: {
      margin: '0px',
      color: '#000',
      display: 'block',
      cursor: 'default',
      padding: '3px',
	  paddingLeft: '28px',
	  lineHeight: '20px',
      border: '1px solid #fff',
      backgroundColor: 'transparent',
	  width: '68px',
	  height: '20px'
    },
    itemHoverStyle: {
      border: '1px solid #0a246a',
      backgroundColor: '#b6bdd2'
    },
    eventPosX: 'pageX',
    eventPosY: 'pageY',
    shadow : true,
    onContextMenu: null,
    onShowMenu: null
 	};

  $.fn.contextMenu = function(id, options) {
    if (!menu) {                                      // 建立单个菜单
      menu = $('<div id="jqContextMenu"></div>')
               .hide()
               .css({position:'absolute', zIndex:'500'})
               .appendTo('body')
               .bind('click', function(e) {
                 e.stopPropagation();
               });
    }
    if (!shadow) {
      shadow = $('<div></div>')
                 .css({backgroundColor:'#000',position:'absolute',opacity:0.2,zIndex:499})
                 .appendTo('body')
                 .hide();
    }
    hash = hash || [];
    hash.push({
      id : id,
      menuStyle: $.extend({}, defaults.menuStyle, options.menuStyle || {}),
      itemStyle: $.extend({}, defaults.itemStyle, options.itemStyle || {}),
      itemHoverStyle: $.extend({}, defaults.itemHoverStyle, options.itemHoverStyle || {}),
      bindings: options.bindings || {},
      shadow: options.shadow || options.shadow === false ? options.shadow : defaults.shadow,
      onContextMenu: options.onContextMenu || defaults.onContextMenu,
      onShowMenu: options.onShowMenu || defaults.onShowMenu,
      eventPosX: options.eventPosX || defaults.eventPosX,
      eventPosY: options.eventPosY || defaults.eventPosY
    });

    var index = hash.length - 1;
    $(this).bind('contextmenu', function(e) {
      //检查onContextMenu()是否定义
      var bShowContext = (!!hash[index].onContextMenu) ? hash[index].onContextMenu(e) : true;
      if (bShowContext) display(index, this, e, options);
      return false;
    });
    return this;
  };

  function display(index, trigger, e, options) {
    var cur = hash[index];
    content = $('#'+cur.id).find('ul:first').clone(true);
    content.css(cur.menuStyle).find('li').css(cur.itemStyle).hover(
      function() {
        $(this).css(cur.itemHoverStyle);
      },
      function(){
        $(this).css(cur.itemStyle);
      }
    ).find('img').css({verticalAlign:'middle',paddingRight:'2px'});

    //把内容添加到菜单
    menu.html(content);

    //如果有onShowMenu,马上运行 -- 必须在内容已添加之后运行
	//如果你想在menu.html()前改变内容, IE6有问题
	//更新内容
    if (!!cur.onShowMenu) menu = cur.onShowMenu(e, menu);

    $.each(cur.bindings, function(id, func) {
      $('#'+id, menu).bind('click', function(e) {
        hide();
        func(trigger, currentTarget);
      });
    });

    menu.css({'left':e[cur.eventPosX],'top':e[cur.eventPosY]}).show();
    if (cur.shadow) shadow.css({width:menu.width(),height:menu.height(),left:e.pageX+2,top:e.pageY+2}).show();
    $(document).one('click', hide);
  }

  function hide() {
    menu.hide();
    shadow.hide();
  }

  //默认应用
  $.contextMenu = {
    defaults : function(userDefaults) {
      $.each(userDefaults, function(i, val) {
        if (typeof val == 'object' && defaults[i]) {
          $.extend(defaults[i], val);
        }
        else defaults[i] = val;
      });
    }
  };

})(jQuery);




/**
* 当页面内容动态变动时,重新调整各层及背景高度
*/

(function($){
	$.fn.adminSetBg = function(){
		var getDrag = $('div.pdv_class');
		getDrag.each(function(id) {
			var obj = this.id;
			if($("#s"+obj)[0].style.overflow=="visible"){
				
				//设置可溢出层拉动时的最小高度
				$("#"+obj)[0].style.minHeight=$("#s"+obj)[0].offsetHeight +"px";
			
			}else{
				
				//设置插件边框层的高度
				
				var borderH=$("#s"+obj)[0].offsetHeight;
				var bbw=$("#s"+obj).find(".pdv_border").css("borderWidth");
				var bbp=$("#s"+obj).find(".pdv_border").css("padding");
				var bbm=$("#s"+obj).find(".pdv_border").css("margin");

				if(bbm=="auto"){bbm=0}

				bbw ? borderH-=parseInt(bbw)*2 : borderH-=0 ;
				bbp ? borderH-=parseInt(bbp)*2 : borderH-=0 ;
				bbm ? borderH-=parseInt(bbm)*2 : borderH-=0 ;

				$("#s"+obj).children(".pdv_border")[0].style.height=borderH +"px";
				
			}
		});


		//计算三个容器的高度

		var getObj = $('div.pdv_top');
		var th=0,h=0;
		getObj.each(function(id) {
			
			var obj = this.id;
			h=$("#"+obj).parents()[0].offsetTop + $("#"+obj).parents()[0].offsetHeight;
			th = th>h?th:h;
		});
		$("#top")[0].style.height = th + "px";
		

		var getObj = $('div.pdv_content');
		var ch=0,h=0;
		getObj.each(function(id) {
			var obj = this.id;

			h=$("#"+obj).parents()[0].offsetTop + $("#"+obj).parents()[0].offsetHeight;
			ch = ch>h?ch:h;
		});
		$("#content")[0].style.height = ch + "px";


		var getObj = $('div.pdv_bottom');
		var bh=0,h=0;
		getObj.each(function(id) {
			var obj = this.id;
			h=$("#"+obj).parents()[0].offsetTop + $("#"+obj).parents()[0].offsetHeight;
			bh = bh>h?bh:h;
		});
		
		$("#bottom")[0].style.height = bh + "px";


		if($("#adminbar_showme").is(":visible")){
			$("#topex").css({height: th +2+ "px",top:$("#top")[0].offsetTop+"px"});
			$("#bottomex").css({height: bh +2+ "px",top:$("#bottom")[0].offsetTop+"px"});
			$("#contentex").css({height: ch +2+ "px",top:$("#content")[0].offsetTop+"px"});
		}else{
			$("#topex").css({height: th +2+ "px",top:$("#top")[0].offsetTop+288+"px"});
			$("#contentex").css({height: ch +2+ "px",top:$("#content")[0].offsetTop+288+"px"});
			$("#bottomex").css({height: bh +2+ "px",top:$("#bottom")[0].offsetTop+288+"px"});
		}

	};
})(jQuery);


/**
* 调取APP STORE  初始化
*/

(function($){

	$.fn.GetAppstore = function(apptype){

		var AW=$('#app_window');
		var AWM=$('.app_windowmenu');
		var AB=$('.app_bar');
		var ABL=$('.app_bararrleft');
		var ABR=$('.app_bararrright');
		var AS=$('.app_store');
		var ASB=$('.app_storebox');

		AB.css('width',AW[0].offsetWidth-78+'px');
		AS.css('width',AW[0].offsetWidth-100+'px');
		
		switch(apptype){
			case "bg":
				AWM.empty();ASB.empty();$.getJSON("http://app.8555.net/bgtype.php?&callback=?",function(result){AWM.empty().append(result['e']);$('.app_menubs').bind('click',function(){var B=$('.app_menubs').index($(this));ASB.css({left:0});$().GetAppstoreBg(B);});});$().GetAppstoreBg(0);
			break;
			case "plus":
				AWM.empty();ASB.empty();$.getJSON("http://app.8555.net/plustype.php?&callback=?",function(result){AWM.empty().append(result['e']);$('.app_menubs').bind('click',function(){var B=this.id.substr(8);ASB.css({left:0});$().GetAppstorePlus(B,0);});});$().GetAppstorePlus('menu',0);
			break;
			case "border":
				AWM.empty();ASB.empty();$.getJSON("http://app.8555.net/bordertype.php?&callback=?",function(result){AWM.empty().append(result['e']);$('.app_menubs').bind('click',function(){var B=this.id.substr(10);ASB.css({left:0});$().GetAppstoreBorder(B,0);});});$().GetAppstoreBorder('color',0);
			break;
		}
		
		
		ABL.unbind('click').bind('click',function(){ASB.animate({left: "-=454"}, 1200);});
		ABR.unbind('click').bind('click',function(){var FOF=ASB.offset();if(FOF.left<0){ASB.animate({left: "+=454"}, 1200);}else{alert('请点击左侧箭头，显示更多');return false;}});
		
	};

})(jQuery);

/**
* 调取APP STORE 背景分类调取
*/

(function($){

	$.fn.GetAppstoreBg = function(T){

		var APN,ADO;
		var AWM=$('.app_windowmenu');
		var ASB=$('.app_storebox');
		var AD=$('#app_detail');
		var ADB=$(".app_detailbox");
		var ADT=$(".app_detaitext");
		var AF=$(".app_fly");
		var ADC=$(".app_detailclose");

		$.getJSON("http://app.8555.net/bg.php?type="+T+"&callback=?",function(result){
			ASB.empty().append(result['d']);
			$(".app_storeitem").unbind('click').bind('click',function(){
				APN=this.title;AD.show().animate({right:"0"}, 1000);
				$(".app_detaitext").empty().html(result['g']+"<div class='app_detaiintro'>"+result['a']+"<br />"+result['b']+"</div><div class='app_notic'>"+result['c']+"</div>");
				$(".app_detaibotton:eq(3)").click(function(){ADB[0].style.backgroundRepeat='repeat';});$(".app_detaibotton:eq(2)").click(function(){ADB[0].style.backgroundRepeat='repeat-x';});$(".app_detaibotton:eq(1)").click(function(){ADB[0].style.backgroundRepeat='repeat-y';});$(".app_detaibotton:eq(0)").click(function(){ADB[0].style.backgroundRepeat='no-repeat';});
				ADB.empty();
				ADB.css({backgroundImage:this.style.backgroundImage,height:AD[0].offsetHeight-200+'px',backgroundRepeat:'repeat',overflow:'hidden'});
				ADT.css({top:ADB[0].offsetHeight+39+'px'});
				AF.css({display:'none',backgroundImage:this.style.backgroundImage,backgroundRepeat:'repeat'});
				$(".app_install").click(function(){
					ADO=ADB.offset();
					AF.css({width:ADB.width()+'px',height:ADB.height()+'px',top:ADO.top+'px',left:ADO.left+'px',opacity:'1'});
					$.ajax({
						type: "POST",
						url: PDV_RP+"base/post.php",
						data: "act=appcode",
						success: function(msg){
							 $('.app_notic').empty().append('正在连接应用服务器...');
							 $.getScript(result['u']+"?"+msg+"&r="+PDV_RP+"&type="+T+"&n="+APN, function() {});
						}
					});
				   
				});
			});

			ADC.unbind('click').bind('click',function(){AD.animate({right: "-600"}, 1000);});
			
		});

	};

})(jQuery);


/**
* 调取APP STORE 插件分类调取
*/

(function($){

	$.fn.GetAppstorePlus = function(T,S){
		var AID,ADO,APN;
		var AWM=$('.app_windowmenu');
		var ASB=$('.app_storebox');
		var AD=$('#app_detail');
		var ADB=$(".app_detailbox");
		var ADT=$(".app_detaitext");
		var AF=$(".app_fly");
		var ADC=$(".app_detailclose");

		$.getJSON("http://app.8555.net/plus.php?coltype="+PDV_COLTYPE+"&pagename="+PDV_PAGENAME+"&showcoltype="+T+"&start="+S+"&callback=?",function(result){
			ASB.empty().append(result['d']);
			$('.app_page').remove();AWM.append(result['n']);
			$('.app_page').unbind('click').bind('click',function(){ASB.css({left:0});$().GetAppstorePlus(T,this.id.substr(8));});
			$(".app_plusitem").unbind('click').bind('click',function(){
				AID=this.id.substr(13);
				APN=$('#'+this.id).find('span:eq(2)').html();
				ADB.empty();
				AD.show().animate({right:"0"}, 1000);
				$(".app_detaitext").empty().html(result['g']+"<div class='app_detaimemo'></div><div class='app_detaiintro'>"+result['a']+"<br />"+result['b']+"</div><div class='app_notic'>"+result['c']+"</div>");
				$('.app_detaimemo').empty().html($('#'+this.id).find('span:eq(0)').html()+'&nbsp;&nbsp; <font style="color:#999">'+$('#'+this.id).find('span:eq(1)').html()+'</font>');
				ADB.css({background:'',height:AD[0].offsetHeight-200+'px',lineHeight:'22px',overflow:'auto'});
				ADT.css({top:ADB[0].offsetHeight+39+'px'});
				AF.css({display:'none',backgroundImage:this.style.backgroundImage,backgroundRepeat:'no-repeat'});

				$.getJSON("http://app.8555.net/plusdetail.php?showcoltype="+T+"&id="+AID+"&callback=?",function(result){
					ADB.append(result['p']);
				});
				
				$(".app_install").click(function(){
					ADO=ADB.offset();
					AF.css({width:ADB.width()+'px',height:ADB.height()+'px',top:ADO.top+'px',left:ADO.left+'px',opacity:'1'});
					$.ajax({
						type: "POST",
						url: PDV_RP+"base/post.php",
						data: "act=appcode&apptype=plus&pluslable="+APN+"&coltype="+T,
						success: function(msg){
							 if(msg=='1000'){
								$('.app_notic').empty().append('本网站已经安装了这个插件，不能重复安装');
								return false;
							 }else if(msg=='2000'){
								$('.app_notic').empty().append('本网站没有安装此插件所属的模块，不能安装此插件');
								return false;
							 }else{
							 	$('.app_notic').empty().append('正在连接应用服务器...');
								$.getScript(result['u']+"?"+msg+"&r="+PDV_RP+"&coltype="+T+"&pluslable="+APN+"&id="+AID, function() {});
							 }
						}
					});
				   
				});
			});

			ADC.unbind('click').bind('click',function(){AD.animate({right: "-600"}, 1000);});
			
		});

	};

})(jQuery);


/**
* 调取APP STORE 边框分类调取
*/

(function($){

	$.fn.GetAppstoreBorder = function(T,S){
		var AID,ADO;
		var AWM=$('.app_windowmenu');
		var ASB=$('.app_storebox');
		var AD=$('#app_detail');
		var ADB=$(".app_detailbox");
		var ADT=$(".app_detaitext");
		var AF=$(".app_fly");
		var ADC=$(".app_detailclose");

		$.getJSON("http://app.8555.net/border.php?btype="+T+"&start="+S+"&callback=?",function(result){
			ASB.empty().append(result['d']);
			$('.app_page').remove();AWM.append(result['n']);
			$('.app_page').unbind('click').bind('click',function(){ASB.css({left:0});$().GetAppstoreBorder(T,this.id.substr(8));});
			$(".app_borderitem").unbind('click').bind('click',function(){
				AID=this.id.substr(13);
				ADB.empty();
				AD.show().animate({right:"0"}, 1000);
				$(".app_detaitext").empty().html(result['g']+"<div class='app_detaimemo'></div><div class='app_detaiintro'>"+result['a']+"<br />"+result['b']+"</div><div class='app_notic'>"+result['c']+"</div>");
				$('.app_detaimemo').empty().html($('#'+this.id).find('span:eq(0)').html()+'&nbsp;&nbsp; <font style="color:#999">'+$('#'+this.id).find('span:eq(1)').html()+'</font>');
				ADB.css({background:'',height:AD[0].offsetHeight-200+'px',lineHeight:'22px',overflow:'auto'});
				ADT.css({top:ADB[0].offsetHeight+39+'px'});
				AF.css({display:'none',backgroundImage:this.style.backgroundImage,backgroundRepeat:'no-repeat'});

				$.getJSON("http://app.8555.net/borderdetail.php?btype="+T+"&tempid="+AID+"&callback=?",function(result){
					ADB.append(result['p']);
				});
				
				$(".app_install").click(function(){
					ADO=ADB.offset();
					AF.css({width:ADB.width()+'px',height:ADB.height()+'px',top:ADO.top+'px',left:ADO.left+'px',opacity:'1'});
					$.ajax({
						type: "POST",
						url: PDV_RP+"base/post.php",
						data: "act=appcode&apptype=border&tempid="+AID,
						success: function(msg){
							 if(msg=='1000'){
								$('.app_notic').empty().append('本网站已经安装了同样编号的边框模板，不能重复安装');
								return false;
							 }else{
							 	$('.app_notic').empty().append('正在连接应用服务器...');
								$.getScript(result['u']+"?"+msg+"&r="+PDV_RP+"&tempid="+AID+"&btype="+T, function() {});
							 }
						}
					});
				   
				});
			});

			ADC.unbind('click').bind('click',function(){AD.animate({right: "-600"}, 1000);});
			
		});

	};

})(jQuery);


//排版状态背景跟随
function backFollowIn() {
		
		var oldpos=$("input#backFollow")[0].value;

		switch(oldpos){
			case "left top":
				$("body")[0].style.backgroundPosition="left 290px";
			break;
			case "center top":
				$("body")[0].style.backgroundPosition="center 290px";
			break;
			case "right top":
				$("body")[0].style.backgroundPosition="right 290px";
			break;
			case "left bottom":
				return false;
			break;
			case "center bottom":
				return false;
			break;
			case "right bottom":
				return false;
			break;
			default:
				$("body")[0].style.backgroundPosition="left 290px";
			break;
		}

		//各容器背景层跟随
		var th = parseInt($("#top")[0].style.height);
		var ch = parseInt($("#content")[0].style.height);
		var bh = parseInt($("#bottom")[0].style.height);

		$("#topex").css({height:th+2+"px",top:$("#top")[0].offsetTop+288+"px"});
		$("#contentex").css({height:ch+2+"px",top:$("#content")[0].offsetTop+288+"px"});
		$("#bottomex").css({height:bh+2+"px",top:$("#bottom")[0].offsetTop+288+"px"});
		
		//通栏广告层
		if($("#advsex").length>0 && $("#advsexDiv").length>0){
			AOF=$("#advsexDiv").offset();
			$("#advsex").css({top:AOF.top+286+"px"});
		}
}

//排版隐藏取消跟随
function backFollowOut() {
		
		var oldpos=$("input#backFollow")[0].value;

		switch(oldpos){
			case "left top":
				$("body")[0].style.backgroundPosition="left 2px";
			break;
			case "center top":
				$("body")[0].style.backgroundPosition="center 2px";
			break;
			case "right top":
				$("body")[0].style.backgroundPosition="right 2px";
			break;
			case "left bottom":
				return false;
			break;
			case "center bottom":
				return false;
			break;
			case "right bottom":
				return false;
			break;
			default:
				$("body")[0].style.backgroundPosition="left 2px";
			break;
		}
		
		//各容器背景层跟随
		var th = parseInt($("#top")[0].style.height);
		var ch = parseInt($("#content")[0].style.height);
		var bh = parseInt($("#bottom")[0].style.height);

		$("#topex").css({height:th+2+"px",top:$("#top")[0].offsetTop+"px"});
		$("#contentex").css({height:ch+2+"px",top:$("#content")[0].offsetTop+"px"});
		$("#bottomex").css({height:bh+2+"px",top:$("#bottom")[0].offsetTop+"px"});

		//通栏广告层
		if($("#advsex").length>0 && $("#advsexDiv").length>0){
			AOF=$("#advsexDiv").offset();
			$("#advsex").css({top:AOF.top+"px"});
		}

}


-->