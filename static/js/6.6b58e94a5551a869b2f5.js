webpackJsonp([6],{633:function(t,e,i){function s(t){i(705)}var r=i(12)(i(679),i(747),s,"data-v-424e7472",null);t.exports=r.exports},645:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},646:function(t,e,i){"use strict";var s=i(648),r=i.n(s),a=i(35),n=i(66),o=i(231),c=i(647),u=i(232),l={lastLyric:0,typeType:localStorage.getItem("audioPlayType")||a.a.getters.getAudioPlayType,lyric:{},maxProgressWidth:0,dragProgressTo:0,x:0,l:0,parseLrc:function(t){if(!t)return"";for(var e=t.split("\n"),i={},s=0;s<e.length;s++){var r=decodeURIComponent(e[s]),a=/\[\d*:\d*((\.|\:)\d*)*\]/g,n=r.match(a);if(n)for(var o=r.replace(a,""),c=0,u=n.length;c<u;c++){var l=n[c],d=Number(String(l.match(/\[\d*/i)).slice(1)),g=Number(String(l.match(/\:\d*/i)).slice(1)),p=60*d+g;i[p]=o}}return i},getMusicSheet:function(t){var e="http://www.daiwei.org/vue/server/music.php?inAjax=1&do=playlist&id="+t;n.a.get(e,{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(function(t){a.a.dispatch({type:"set_MusicSheetList",data:t.data.playlist.tracks}),a.a.dispatch({type:"set_MusicList",data:t.data.playlist.tracks})},function(t){console.log(t)})},getAlbum:function(t){var e="http://www.daiwei.org/vue/server/music.php?inAjax=1&do=album&id="+t;n.a.get(e,{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(function(t){a.a.dispatch({type:"set_MusicSheetList",data:t.data.songs}),a.a.dispatch({type:"set_MusicList",data:t.data.songs})},function(t){console.log(t)})},getMusicLrc:function(t,e){var i=this,s=a.a.getters.getAudioEle,r="http://www.daiwei.org/vue/server/music.php?inAjax=1&do=lyric&id="+t.id;n.a.get(r).then(function(r){var n={};void 0===r.data.lrc?n={0:"纯音乐,请欣赏"}:(n=i.parseLrc(r.data.lrc.lyric),i.lyric=n),i.lastLyric=-1;var o={id:t.id,name:t.name,url:l.replaceUrl(t.url),singer:t.singer,duration:t.duration,picurl:t.picurl,index:t.musicndex,lyric:n,lrcContent:a.a.getters.getAudioLrcContent};a.a.commit({type:"setCurrentAudio",data:o}),"unupdate"!==t.type&&""===t.type&&a.a.dispatch({type:"set_MusicPlayList",data:t.list}),e.$nextTick(function(){try{a.a.getters.getAudioEle.load(),a.a.getters.getAudioEle.play()}catch(t){return}a.a.commit({type:"setAudiolrcIndex",data:0}),i.scrollAnimate(document.getElementsByClassName("lrc-wrapper")[0],0),a.a.commit("setAudioIsPlay",!s.paused)})},function(t){console.log(t)})},getMusicDurantionType:function(t){return(Math.floor(t/1e3/60)>=10?Math.floor(t/1e3/60):"0"+Math.floor(t/1e3/60))+":"+(Math.floor(t/1e3%60)>=10?Math.floor(t/1e3%60):"0"+Math.floor(t/1e3%60))},scrollLyric:function(t,e){if(""===this.lyric)return!1;if(t=parseInt(t),void 0===this.lyric||void 0===this.lyric[t])return!1;if(this.lastLyric===t)return!0;var i=0;a.a.commit({type:"setAudiolrcIndex",data:i});for(var s in this.lyric){if(s>t)break;i++}this.lastLyric=t,a.a.commit({type:"setAudiolrcIndex",data:i});try{this.scrollAnimate(e.$refs.lrcWrapper,i*document.getElementsByClassName("lrc-item")[0].offsetHeight)}catch(t){return}},clickIndex:function(t,e){var i=this,s=t.music_id?t.music_id:t.id,r="http://www.daiwei.org/vue/server/music.php?inAjax=1&do=musicInfo&id="+s;n.a.get(r).then(function(r){if(null===r.data.data[0].url){e.$msg("音乐无法播放,请播放其他音频...");var n={index:a.a.getters.getCurrentAudio.index};return a.a.commit({type:"setCurrentAudio",data:n}),void i.playNextPrev(e,!0)}var o={id:s,name:t.name,url:l.replaceUrl(r.data.data[0].url),singer:t.singer,duration:t.duration,picurl:t.pic,musicndex:t.index,list:t.list,type:t.type};i.getMusicLrc(o,e)},function(t){console.log(t)})},searchMusic:function(t,e,i){var s="http://www.daiwei.org/vue/server/music.php?inAjax=1&do=search&count=30&pages="+e+"&name="+t;n.a.get(s,{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(function(t){try{console.log(i.searchMusicList),t.data.result.songs.forEach(function(t,e,s){i.searchMusicList.push(t)}),a.a.dispatch({type:"set_MusicSearchList",data:i.searchMusicList}),a.a.dispatch({type:"set_MusicList",data:i.searchMusicList})}catch(t){return}},function(t){console.log(t)})},scrollAnimate:function(t,e){t.style.WebkitTransform="translate3d(-50%, -"+e+"px, 0)",t.style.transform="transform: translate3d(-50%, -"+e+"px, 0)"},collectMusic:function(t){var e=this;i.i(c.a)().then(function(s){var r={userid:s.id,music_id:t.id,music_name:t.name,singer_id:t.ar[0].id,singer_name:t.ar[0].name,album_id:t.al.id,album_name:t.al.name,music_dur:t.dt,music_picurl:t.al.picUrl};i.i(c.b)("http://www.daiwei.org/vue/server/user.php?inAjax=1&do=collectMusic",r).then(function(t){e.$msg(t.data.msg)},function(t){e.$msg(t)})},function(t){e.$msg(t.msg),e.$router.push({path:"/user/login"})})},getLocalMusic:function(){var t=this;i.i(c.a)().then(function(e){i.i(c.b)("http://www.daiwei.org/vue/server/user.php?inAjax=1&do=getCollectMusic",{userid:e.id}).then(function(t){a.a.commit({type:"setMusicCollectList",data:t.data})},function(e){t.$msg(e)})},function(e){t.$msg(e.msg),t.$router.push({path:"/user/login"})})},deleteMusic:function(t){var e=this;i.i(c.a)().then(function(s){i.i(c.b)("http://www.daiwei.org/vue/server/user.php?inAjax=1&do=delCollectMusic",{userid:s.id,music_id:t}).then(function(i){var s=a.a.getters.getMusicCollectList;s.forEach(function(e,i,r){if(t===e.music_id)return void s.splice(i,1)}),a.a.commit({type:"setMusicCollectList",data:s}),e.$msg(i.data.msg)},function(t){e.$msg(t)})},function(t){e.$msg(t.msg),e.$router.push({path:"/user/login"})})},playPause:function(){try{var t=a.a.getters.getAudioEle;if(!(t.src.indexOf(".mp3")>0))return;t.paused?t.play():t.pause(),a.a.commit("setAudioIsPlay",!t.paused)}catch(t){return}},playNextPrev:function(t,e){var i=this,s=a.a.getters.getCurrentAudio.index||0,r=a.a.getters.getMusicPlayList.length||0,o=a.a.getters.getMusicPlayList||[];if(3!==this.typeType?e?++s>r-1&&(s=0):--s<0&&(s=r-1):s=Math.floor(Math.random()*r),void 0!==o[s]){var c=o[s].music_id?o[s].music_id:o[s].id,u="http://www.daiwei.org/vue/server/music.php?inAjax=1&do=musicInfo&id="+c;n.a.get(u).then(function(r){if(null===r.data.data[0].url){var n={index:a.a.getters.getCurrentAudio.index?e?a.a.getters.getCurrentAudio.index+1:a.a.getters.getCurrentAudio.index-1:e?1:0};return a.a.commit({type:"setCurrentAudio",data:n}),void i.playNextPrev(t,e)}var u={id:c,name:o[s].name?o[s].name:o[s].music_name,url:l.replaceUrl(r.data.data[0].url),singer:o[s].ar?o[s].ar[0].name:o[s].singer_name,duration:l.getMusicDurantionType(o[s].dt?o[s].dt:o[s].music_dur),picurl:o[s].al?o[s].al.picUrl:o[s].music_picurl,musicndex:s,list:a.a.getters.getMusicList,type:"unupdate"};i.getMusicLrc(u,t)},function(t){console.log(t)})}},initAudioEvent:function(t){var e=this,i=a.a.getters.getAudioEle;i.onloadedmetadata=function(){},i.onended=function(){e.insetMusicListen(),e.playNextPrev(t,!0)},i.ontimeupdate=function(){if(!t.isDrag){var e=a.a.getters.getAudioEle,i=Math.floor(e.duration),s=Math.floor(e.currentTime);l.scrollLyric(s,t),a.a.dispatch("set_AudioCurrentTime",s),a.a.dispatch("set_AudioCurrentD",s/i*100)}},i.onprogress=function(){var e=Math.floor(i.duration);try{if(i.buffered.length>0){for(var s=0,r=0;r<i.buffered.length;r++)(s+=i.buffered.end(r)-i.buffered.start(r))>e&&(s=e,console.log("缓冲完成"));var a=Math.floor(s/e*100);t.bufferingP=a}}catch(t){return}}},dragMouseDown:function(t,e){var i=a.a.getters.getAudioEle;if(!(i.src.indexOf(".")<0)){var s=this;t.isDrag=!0;var r=e||window.event,n=r.clientX,o=r.target.offsetLeft;s.maxProgressWidth=document.getElementById("music_progressD").offsetWidth;var c=document.getElementById("music_progress");c.onmousemove=function(e){if(t.isDrag){var i=e||window.event,r=i.clientX;s.dragProgressTo=Math.min(s.maxProgressWidth,Math.max(0,o+(r-n))),s.updateDragProgress(t,s.maxProgressWidth,s.dragProgressTo)}},c.onmouseup=function(e){var r=i.duration;t.isDrag&&(t.isDrag=!1,i.currentTime=Math.floor(s.dragProgressTo/s.maxProgressWidth*r))},c.onmouseleave=function(e){var r=i.duration;t.isDrag&&(t.isDrag=!1,i.currentTime=Math.floor(s.dragProgressTo/s.maxProgressWidth*r))}}},dragTouchStart:function(t,e){if(!(a.a.getters.getAudioEle.src.indexOf(".")<0)){var i=this;t.isDrag=!0;var s=e||window.event;i.x=s.touches[0].clientX,i.l=s.target.offsetLeft,i.maxProgressWidth=document.getElementById("music_progressD").offsetWidth}},dragTouchMove:function(t,e){var i=this;if(t.isDrag){var s=e||window.event,r=s.touches[0].clientX;i.dragProgressTo=Math.min(i.maxProgressWidth,Math.max(0,i.l+(r-i.x))),i.updateDragProgress(t,i.maxProgressWidth,i.dragProgressTo)}},dragTouchEnd:function(t,e){var i=this,s=a.a.getters.getAudioEle,r=s.duration;t.isDrag&&(t.isDrag=!1,s.currentTime=Math.floor(i.dragProgressTo/i.maxProgressWidth*r))},updateDragProgress:function(t,e,i){var s=a.a.getters.getAudioEle,r=s.duration;l.scrollLyric(Math.floor(i/e*r),t),a.a.dispatch("set_AudioCurrentTime",Math.floor(i/e*r)),a.a.dispatch("set_AudioCurrentD",Math.floor(i/e*r)/r*100)},clickProgress:function(t){var e=a.a.getters.getAudioEle,i=e.duration,s=t||window.event,r=s.offsetX,n=document.getElementById("music_progressD").offsetWidth;e.currentTime=Math.floor(r/n*i)},replaceUrl:function(t){return t.indexOf("//m7c")<0?t.indexOf("//m8c")?t.replace("//m8c","//m8"):t:t.replace("//m7c","//m7")},insetMusicListen:function(){i.i(c.a)().then(function(t){var e=a.a.getters.getCurrentAudio.index,s=a.a.getters.getMusicPlayList,r={userid:t.id,username:t.username,music_id:s[e].music_id||s[e].id,music_name:s[e].music_name||s[e].name,singer_id:s[e].singer_id||s[e].ar[0].id,singer_name:s[e].singer_name||s[e].ar[0].name,album_id:s[e].album_id||s[e].al.id,album_name:s[e].album_name||s[e].al.name,music_dur:s[e].music_dur||s[e].dt,music_picurl:s[e].music_picurl||s[e].al.picUrl,listen_time:o.a.formatDate(new Date,"yyyy-MM-dd hh:mm:ss")};i.i(c.b)("http://www.daiwei.org/vue/server/user.php?inAjax=1&do=userMusicListen",r).then(function(t){console.log(r.music_name+"播放完成")},function(t){u.default.$msg(t)})},function(t){u.default.$msg(t.msg)})},setPlayType:function(t){this.typeType=r()(t),a.a.dispatch({type:"set_AudioPlayType",data:this.typeType}),localStorage.setItem("audioPlayType",this.typeType)}};e.a=l},647:function(t,e,i){"use strict";function s(t,e){return new n.a(function(i,s){o.a.post(t,e).then(function(t){i(t)},function(t){s(t)})})}function r(){var t=c.a.getters.getUserInfo;return new n.a(function(e,i){null===t?(u.a.push("/user/login"),i(l)):e(t)})}e.b=s,e.a=r;var a=i(101),n=i.n(a),o=i(66),c=i(35),u=i(150),l={code:0,msg:"用户未登录"}},648:function(t,e,i){t.exports={default:i(649),__esModule:!0}},649:function(t,e,i){i(652),t.exports=parseInt},650:function(t,e,i){var s=i(15).parseInt,r=i(651).trim,a=i(645),n=/^[-+]?0[xX]/;t.exports=8!==s(a+"08")||22!==s(a+"0x16")?function(t,e){var i=r(String(t),3);return s(i,e>>>0||(n.test(i)?16:10))}:s},651:function(t,e,i){var s=i(60),r=i(102),a=i(67),n=i(645),o="["+n+"]",c="​",u=RegExp("^"+o+o+"*"),l=RegExp(o+o+"*$"),d=function(t,e,i){var r={},o=a(function(){return!!n[t]()||c[t]()!=c}),u=r[t]=o?e(g):n[t];i&&(r[i]=u),s(s.P+s.F*o,"String",r)},g=d.trim=function(t,e){return t=String(r(t)),1&e&&(t=t.replace(u,"")),2&e&&(t=t.replace(l,"")),t};t.exports=d},652:function(t,e,i){var s=i(60),r=i(650);s(s.S+s.F*(Number.parseInt!=r),"Number",{parseInt:r})},679:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(648),r=i.n(s),a=i(35),n=i(646),o=i(647);e.default={data:function(){return{isDrag:!1,currentMusic:{},bufferingP:0,textPlayType:""}},methods:{searchMusic:function(t){n.a.searchMusic(t.target.innerHTML,1,this)},getAlbum:function(t){n.a.getMusicAlbum(t,this)},getMusicLrc:function(t){n.a.getMusicLrc(t,this)},getMusicDurationType:function(t){return n.a.getMusicDurantionType(t,this)},initMusic:function(){n.a.getMusicSheet(124995419,this)},AudiEle:function(){return a.a.getters.getAudioEle},playPrev:function(){n.a.playNextPrev(this,!1)},playNext:function(){n.a.playNextPrev(this,!0)},playPause:function(){n.a.playPause()},keypress:function(){var t=this;document.onkeydown=function(e){e&&e.ctrlKey&&32===e.keyCode&&n.a.playPause(),e&&e.ctrlKey&&39===e.keyCode&&n.a.playNextPrev(t,!0),e&&e.ctrlKey&&37===e.keyCode&&n.a.playNextPrev(t,!1)}},initAudioEvent:function(){var t=a.a.getters.getAudioEle;n.a.initAudioEvent(this,t)},dragMouseDown:function(t){n.a.dragMouseDown(this,t)},clickProgress:function(t){n.a.clickProgress(t)},dragTouchStart:function(t){n.a.dragTouchStart(this,t)},dragTouchMove:function(t){n.a.dragTouchMove(this,t)},dragTouchEnd:function(t){t.stopPropagation(),t.preventDefault(),n.a.dragTouchEnd(this,t)},selectAudioType:function(t){var e=localStorage.getItem("audioPlayType")||a.a.getters.getAudioPlayType||1,i=this.AudiEle();switch(t&&(e=e++>=3?1:e),r()(e)){case 1:this.textPlayType="列表播放",i.loop=!1;break;case 2:this.textPlayType="单曲循环",i.loop=!0;break;case 3:this.textPlayType="随机播放",i.loop=!1;break;default:console.log("haha")}n.a.setPlayType(e)}},computed:{musicList:function(){return a.a.getters.getMusicList},getCurrentMusic:function(){return a.a.getters.getCurrentAudio},getMusicLrcLists:function(){var t=a.a.getters.getCurrentAudio.lyric,e=[];for(var i in t)e.push(t[i]);return e},getCurrentMusicLrcIndex:function(){return a.a.getters.getAudiolrcIndex},getIsAPP:function(){return a.a.getters.getGlobalInfo},getAudioIsPlay:function(){return a.a.getters.getAudioIsPlay},getMusicPlayingList:function(){return a.a.getters.getMusicPlayList},getMusicCurrentT:function(){return a.a.getters.getAudioCurrentTime},getMusicPro:function(){return a.a.getters.getAudioCurrentD.toFixed(4)+"%"}},watch:{$route:function(t,e){a.a.dispatch({type:"set_MusicRouter",data:t.path})}},mounted:function(){},activated:function(){var t=this;i.i(o.a)().then(function(e){a.a.commit({type:"setAudioLrcContent",data:t.$refs.lrcContent}),t.selectAudioType(),t.$nextTick(function(){t.initAudioEvent(),t.keypress()})})}}},705:function(t,e){},747:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"music"},[t.getIsAPP.isHigher768?i("div",{staticClass:"music_bg",style:{background:"url("+t.getCurrentMusic.picurl+") center center / cover"}},[i("div",{staticClass:"mask_bg"})]):t._e(),t._v(" "),t.getCurrentMusic.picurl&&t.getIsAPP.isHigher768?i("div",{staticClass:"mask_linear_bg"}):t._e(),t._v(" "),i("div",{staticClass:"music_content"},[i("div",{staticClass:"music_body"},[i("div",{staticClass:"left_list"},[i("div",{staticClass:"music_home"},[t.getIsAPP.isHigher768?i("div",{staticClass:"select_button"},[i("router-link",{staticClass:"todo_btn playing_btn",attrs:{tag:"span",to:"/music/playlist"}},[t._v("\n\t\t\t\t        \t正在播放\n\t\t\t\t        ")]),t._v(" "),i("router-link",{staticClass:"todo_btn collect_btn",attrs:{tag:"span",to:"/music/collection"}},[t._v("\n\t\t\t\t        \t我的收藏\n\t\t\t\t      ")]),t._v(" "),i("router-link",{staticClass:"todo_btn top_btn",attrs:{tag:"span",to:"/music/toplist"}},[t._v("\n\t\t\t\t        \t排行榜/歌单\n\t\t\t\t      ")]),t._v(" "),i("router-link",{staticClass:"todo_btn search_btn",attrs:{tag:"span",to:"/music/search"}},[t._v("\n\t\t\t\t        \t搜索音乐\n\t\t\t\t      ")])],1):t._e(),t._v(" "),t.getIsAPP.isHigher768?t._e():i("div",{staticClass:"select_m_button"},[i("router-link",{staticClass:"todo_btn playing_btn",attrs:{tag:"span",to:"/music/playlist"}},[t._v("\n\t\t\t\t        \t正在播放\n\t\t\t\t        ")]),t._v(" "),i("router-link",{staticClass:"todo_btn collect_btn",attrs:{tag:"span",to:"/music/collection"}},[t._v("\n\t\t\t\t        \t收藏\n\t\t\t\t        ")]),t._v(" "),i("router-link",{staticClass:"todo_btn top_btn",attrs:{tag:"span",to:"/music/toplist"}},[t._v("\n\t\t\t\t        \t排行榜/歌单\n\t\t\t\t        ")]),t._v(" "),i("router-link",{staticClass:"todo_btn search_btn",attrs:{tag:"span",to:"/music/search"}},[t._v("\n\t\t\t\t        \t搜索\n\t\t\t\t        ")])],1),t._v(" "),i("transition",{attrs:{name:"silde-top"}},[i("router-view",{staticClass:"list_content",attrs:{name:"listinfo"}})],1)],1)]),t._v(" "),i("transition",{attrs:{name:"silde-top"}},[i("router-view",{staticClass:"music_wrapper",attrs:{name:"fullscreen"}})],1),t._v(" "),i("div",{staticClass:"right_info"},[i("div",{staticClass:"bg-info"},[i("img",{staticClass:"music-bg",attrs:{src:t.getCurrentMusic.picurl?t.getCurrentMusic.picurl:"http://www.daiwei.org/vue/bg/657952152722629515.jpg"}})]),t._v(" "),i("div",{ref:"lrcContent",staticClass:"lrc-content"},[i("div",{ref:"lrcWrapper",staticClass:"lrc-wrapper"},[t.getMusicLrcLists?t._e():i("p",{staticClass:"lrc-item"}),t._v(" "),t._l(t.getMusicLrcLists,function(e,s){return t.getMusicLrcLists?i("p",{staticClass:"lrc-item",class:t.getCurrentMusicLrcIndex===Number(s)+1?"active":""},[t._v(t._s(e))]):t._e()})],2)])])],1),t._v(" "),i("div",{staticClass:"music_ctrl"},[i("div",{staticClass:"left_ctrl"},[i("div",{staticClass:"music_detail_ctrl"},[i("i",{staticClass:"playPrev icon-prevdetail",attrs:{title:"上一曲 ctrl + left"},on:{click:function(e){e.stopPropagation(),t.playPrev()}}}),t._v(" "),i("i",{staticClass:"playPause",class:t.getAudioIsPlay?"icon-pause":"icon-play",attrs:{title:"播放/暂停 ctrl + space"},on:{click:function(e){e.stopPropagation(),t.playPause()}}}),t._v(" "),i("i",{staticClass:"playNext icon-nextdetail",attrs:{title:"下一曲 ctrl + right"},on:{click:function(e){e.stopPropagation(),t.playNext()}}})]),t._v(" "),i("div",{staticClass:"music_progress",attrs:{id:"music_progress"}},[i("div",{staticClass:"music_current_detail"},[i("span",{staticClass:"music_c_name"},[t._v(t._s(t.getCurrentMusic.name?t.getCurrentMusic.name:"未曾遗忘的青春")+" - "+t._s(t.getCurrentMusic.singer?t.getCurrentMusic.singer:"戴维戴维"))]),t._v(" "),i("span",{staticClass:"music_c_time"},[t._v(t._s(NaN!==t.getMusicCurrentT&"00:00"!==t.getMusicCurrentT?t.getMusicDurationType(1e3*t.getMusicCurrentT):"00:00")+" / "+t._s(t.getCurrentMusic.duration?t.getCurrentMusic.duration:"00:00"))])]),t._v(" "),i("div",{staticClass:"music_progress_bar",attrs:{id:"music_progress"}},[i("div",{staticClass:"duration",attrs:{id:"music_progressD"},on:{click:t.clickProgress}},[i("div",{staticClass:"buffering",style:{width:t.bufferingP+"%"}}),t._v(" "),i("div",{staticClass:"real",style:{width:t.getMusicPro}})]),t._v(" "),i("div",{staticClass:"range",style:{left:""+t.getMusicPro},on:{mousedown:t.dragMouseDown,touchstart:t.dragTouchStart,touchmove:t.dragTouchMove,touchend:t.dragTouchEnd}})])])]),t._v(" "),i("div",{staticClass:"right_ctrl"},[i("span",{staticClass:"play_type",on:{click:function(e){e.stopPropagation(),t.selectAudioType(!0)}}},[t._v(t._s(t.textPlayType))])])])])])},staticRenderFns:[]}}});