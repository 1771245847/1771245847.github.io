$(function(){$.getScript(""),$.get("https://v1.hitokoto.cn",null,function(a){$(".intro-siteinfo").html(a.hitokoto+" —— <strong>"+a.from+"</strong>")},"JSON"),function(){var a,b=document.createElement("script");b.src="",a=document.getElementsByTagName("script")[0],a.parentNode.insertBefore(b,a)}(),window.onscroll=function(){var a=0,b=0,c=0;document.body&&(b=document.body.scrollTop),document.documentElement&&(c=document.documentElement.scrollTop),a=b-c>0?b:c,a>0?$("#go-to-top").show():$("#go-to-top").hide()},$("#go-to-top").click(function(){$("html,body").animate({scrollTop:0},250)})}),$("footer").before('<div class="am-modal-actions" id="fenxiang"><div class="am-modal-actions-group"><ul class="am-list"><li class="am-modal-actions-header">分享本站给你的朋友</li><li><a target="_blank"><span class="am-icon-share-alt"></span> 分享到QQ空间</a></li><li><a target="_blank"><i class="am-icon-qq"></i> 分享到QQ</a></li></ul></div><div class="am-modal-actions-group"><button class="am-btn am-btn-secondary am-btn-block" data-am-modal-close>取消</button></div></div><div class="am-modal am-modal-alert" id="zanzhu"><div class="am-modal-dialog"><div class="am-modal-hd">一路陪伴，请赞助我</div><div class="am-modal-bd"><ul class="am-avg-sm-2 am-thumbnails"><li><span>支付宝</span> <img class="am-thumbnail" src=""></li><li><span>微信</span> <img class="am-thumbnail" src=""></li></ul></div><div class="am-modal-footer"><span class="am-modal-btn">确定</span></div></div></div><a class="am-icon-btn am-icon-arrow-up am-active" id="go-to-top"></a>'),$("#fenxiang").on("open.modal.amui",function(){$("#fenxiang a").eq(0).attr("href",""+encodeURIComponent(window.location.href)+"&title="+document.title),$("#fenxiang a").eq(1).attr("href",""+encodeURIComponent(window.location.href)+"&title="+document.title)}),$(".comment").click(function(){$(".comment").before('<div id="lv-container" data-id="city" data-uid="MTAyMC8zMjYyNC85MTg1"></div>').text("评论区加载中...").attr("disabled",!0),$("#lv-container").hide(),function(a,b){var c,d=a.getElementsByTagName(b)[0];"function"!=typeof LivereTower&&(c=a.createElement(b),c.src="",c.async=!0,d.parentNode.insertBefore(c,d))}(document,"script"),setTimeout(function(){$(".comment").remove(),$("#lv-container").show()},1e3)});