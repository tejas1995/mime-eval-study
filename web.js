(()=>{"use strict";let t="https://tejassrinivasan.pythonanywhere.com/";var o=[];let i=-1,e=null,n=0,s=0;function l(t){n+=t,0==n?$("#button_instructions_prev").attr("disabled","true"):$("#button_instructions_prev").removeAttr("disabled"),0==n?($("#instructions_and_decorations").show(),$("#button_instructions_next").val("Start study")):($("#instructions_and_decorations").hide(),$("#button_instructions_next").val("Next")),1==n&&($("#instructions_and_decorations").show(),$("#main_box_instructions").hide(),$("#main_box_experiment").show(),d()),$("#main_box_instructions").children(":not(input)").each(((t,o)=>{$(o).hide()})),$(`#instructions_${n}`).show()}$("#button_instructions_next").on("click",(()=>l(1))),$("#button_instructions_prev").on("click",(()=>l(-1)));const a=document.getElementById("mime_video");a?a.addEventListener("ended",(()=>{console.log("The user has watched the full video."),$("#watchvideo_instruction").hide(),$("#user_prediction").val(""),$("#answer_box").show()})):console.error('Video element with ID "mime_video" not found.'),$("#answer_box").on("keyup",(()=>{""!=String($("#user_prediction").val()).trim()?$("#button_next").show():(console.log("The text box is empty."),$("#button_next").hide())})),$("#button_next").on("click",(()=>{if(-1!=i){let o={question_i:i,user_answer:$("#user_prediction").val()};o.question=e,o.count_exited_page=s,async function(o){o.url_data=globalThis.url_data,console.log("Data"),"study_id"in o.url_data||(o.url_data.study_id="demo_study"),"prolific_id"in o.url_data||(o.url_data.prolific_id="demo_user"),"session_id"in o.url_data||(o.url_data.session_id="demo_session"),o.url_data.queue_id=globalThis.uid,console.log("logged",o),console.log("Logging to",t+"log");try{let i=await $.ajax(t+"log",{data:JSON.stringify({project:"mime-eval-study/"+o.url_data.study_id,uid:globalThis.uid.replace("/","_")+"_"+o.url_data.prolific_id,payload:JSON.stringify(o)}),type:"POST",contentType:"application/json"});return await async function(){return new Promise((t=>setTimeout(t,2e3)))}(),i}catch(t){console.log(t)}}(o),s=0}d()}));let r=null;function d(){if(r&&(clearInterval(r),r=null),i+=1,i>=o.length)return $("#main_box_experiment").hide(),$("#reward_box").show(),void $("#main_box_end").show();e=o[i],console.log(e);let t=document.getElementById("mime_video");t&&t.setAttribute("src",e.video_url),$("#mime_video").show(),$("#watchvideo_instruction").show(),$("#answer_box").hide(),$("#button_next").hide(),$("#button_quit").hide(),$("#progress").text(`Progress: ${i+1} / ${o.length}`)}document.onvisibilitychange=()=>{document.hidden?(console.log("Window lost focus."),null!==r&&(clearInterval(r),r=null)):console.log("Window regained focus.")};const u=new URLSearchParams(window.location.search),_=u.get("start"),c=u.get("uid");if(globalThis.url_data=function(t){const o={};for(const[i,e]of t)o[i]=e;return o}(u.entries()),null==globalThis.url_data.study_id&&(globalThis.url_data.study_id="demo_study"),null==globalThis.url_data.prolific_id&&(globalThis.url_data.prolific_id="demo_user"),null==globalThis.url_data.session_id&&(globalThis.url_data.session_id="demo_session"),null!=c){if(globalThis.uid=c,"prolific_random"==globalThis.uid){let t=`${Math.floor(10*Math.random())}`.padStart(3,"0");globalThis.uid=`${u.get("prolific_queue_name")}/${t}`}}else{let t=null;for(;null==t;)t=prompt("Enter your user id. Please get in touch if you were not assigned an id but wish to participate in this experiment.");globalThis.uid=t}globalThis.url_data.session_id.startsWith("demo"),console.log("Running with UID",globalThis.uid),async function(){return await $.getJSON(`baked_queues/${globalThis.uid}.json?t=${Date.now()}`)}().catch((t=>{console.log("Invalid user id."),console.log(globalThis.uid),window.location.reload()})).then((t=>{o=t,null!=_&&(i=parseInt(_)-1,console.log("Starting from",i)),l(0),$("#main_box_instructions").show(),$("#instructions_and_decorations").hide()})),console.log("Starting session with UID:",globalThis.uid);let h=!1;document.onvisibilitychange=()=>{h||(s+=1,h=!0,globalThis.uid.startsWith("demo")||alert("Please don't leave the page. If you do so again, we may restrict paying you."),h=!1)}})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FBS0MsTUFBc0IsR0FBaEJELEtBQUtFLFlBQWlCQyxTQUFTLEVBQUcsS0FDL0QxQyxXQUFXRSxJQUFNLEdBQUd3QixFQUFVTSxJQUFJLDBCQUEwQk0sRyxNQUk3RCxDQUNILElBQUlLLEVBQWlCLEtBQ3JCLEtBQW9CLE1BQWJBLEdBQ0hBLEVBQVlDLE9BQU8sc0hBRXZCNUMsV0FBV0UsSUFBTXlDLEMsQ0FNVjNDLFdBQVdDLFNBQXFCLFdBQUU0QyxXQUFXLFFBSXhEcEQsUUFBUUMsSUFBSSxtQkFBb0JNLFdBQVdFLEtEMVBwQ0gsaUJBS0gsYUFIbUJ0QixFQUFFcUUsUUFDakIsZ0JBQWdCOUMsV0FBV0UsY0FBYzZDLEtBQUtDLFFBR3RELENDcVBBQyxHQUFZQyxPQUFPQyxJQUVmMUQsUUFBUUMsSUFBSSxvQkFDWkQsUUFBUUMsSUFBSU0sV0FBV0UsS0FDdkIwQixPQUFPQyxTQUFTdUIsUUFBUSxJQUUxQkMsTUFBTUMsSUFDSnBGLEVBQU9vRixFQUNjLE1BQWpCdkIsSUFDQTVELEVBQWFvRixTQUFTeEIsR0FBaUIsRUFDdkN0QyxRQUFRQyxJQUFJLGdCQUFpQnZCLElBR2pDSSxFQUFrQixHQUNsQkUsRUFBRSwwQkFBMEJHLE9BQzVCSCxFQUFFLGlDQUFpQ0ssTUFBTSxJQTZCN0NXLFFBQVFDLElBQUksNkJBQThCTSxXQUFXRSxLQUVyRCxJQUFJc0QsR0FBZSxFQUNuQmxFLFNBQVNrQyxtQkFBcUIsS0FDckJnQyxJQUNEbEYsR0FBcUIsRUFDckJrRixHQUFlLEVBQ1R4RCxXQUFXRSxJQUFLMkMsV0FBVyxTQUU5QlksTUFBTSxnRkFFVEQsR0FBZSxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2Nvbm5lY3Rvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgREVWTU9ERSB9IGZyb20gJy4vZ2xvYmFscydcbmltcG9ydCB7IE1PQ0tNT0RFIH0gZnJvbSAnLi9tYWluJ1xuXG5sZXQgU0VSVkVSX0xPR19ST09UID0gREVWTU9ERSA/IFwiaHR0cDovLzEyNy4wLjAuMTo1MDAwL1wiIDogXCJodHRwczovL3RlamFzc3Jpbml2YXNhbi5weXRob25hbnl3aGVyZS5jb20vXCJcblxuYXN5bmMgZnVuY3Rpb24gc2xlZXAobXM6IG51bWJlcik6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZF9kYXRhKCk6IFByb21pc2U8YW55PiB7XG4gICAgLy8gaW5jbHVkZSB0aW1lc3RhbXAgc28gdGhhdCB0aGluZ3MgZG9uJ3QgZ2V0IGNhY2hlZFxuICAgIGxldCByZXN1bHQgPSBhd2FpdCAkLmdldEpTT04oXG4gICAgICAgIGBiYWtlZF9xdWV1ZXMvJHtnbG9iYWxUaGlzLnVpZH0uanNvbj90PSR7RGF0ZS5ub3coKX1gLFxuICAgIClcbiAgICByZXR1cm4gcmVzdWx0XG59XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9nX2RhdGEoZGF0YSk6IFByb21pc2U8YW55PiB7XG4gICAgLy9pZiAoTU9DS01PREUpIHtcbiAgICAvLyAgICBjb25zb2xlLmxvZyhcImxvZ2dlZCAobW9jaylcIiwgZGF0YSlcbiAgICAvLyAgICByZXR1cm5cbiAgICAvL31cbiAgICBcbiAgICBkYXRhW1widXJsX2RhdGFcIl0gPSBnbG9iYWxUaGlzLnVybF9kYXRhXG4gICAgY29uc29sZS5sb2coXCJEYXRhXCIpXG4gICAgaWYgKCEoXCJzdHVkeV9pZFwiIGluIGRhdGFbJ3VybF9kYXRhJ10pKSB7XG4gICAgICAgIGRhdGFbJ3VybF9kYXRhJ11bXCJzdHVkeV9pZFwiXSA9IFwiZGVtb19zdHVkeVwiXG4gICAgfVxuICAgIGlmICghKFwicHJvbGlmaWNfaWRcIiBpbiBkYXRhWyd1cmxfZGF0YSddKSkge1xuICAgICAgICBkYXRhWyd1cmxfZGF0YSddW1wicHJvbGlmaWNfaWRcIl0gPSBcImRlbW9fdXNlclwiXG4gICAgfVxuICAgIGlmICghKFwic2Vzc2lvbl9pZFwiIGluIGRhdGFbJ3VybF9kYXRhJ10pKSB7XG4gICAgICAgIGRhdGFbJ3VybF9kYXRhJ11bXCJzZXNzaW9uX2lkXCJdID0gXCJkZW1vX3Nlc3Npb25cIlxuICAgIH1cbiAgICBkYXRhW1widXJsX2RhdGFcIl1bXCJxdWV1ZV9pZFwiXSA9IGdsb2JhbFRoaXMudWlkXG4gICAgY29uc29sZS5sb2coXCJsb2dnZWRcIiwgZGF0YSlcbiAgICBjb25zb2xlLmxvZyhcIkxvZ2dpbmcgdG9cIiwgU0VSVkVSX0xPR19ST09UICsgXCJsb2dcIilcblxuICAgIHRyeSB7XG4gICAgICAgIGxldCByZXN1bHQgPSBhd2FpdCAkLmFqYXgoXG4gICAgICAgICAgICBTRVJWRVJfTE9HX1JPT1QgKyBcImxvZ1wiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdDogXCJtaW1lLWV2YWwtc3R1ZHkvXCIrZGF0YVsndXJsX2RhdGEnXVsnc3R1ZHlfaWQnXSxcbiAgICAgICAgICAgICAgICAgICAgdWlkOiBnbG9iYWxUaGlzLnVpZC5yZXBsYWNlKFwiL1wiLCBcIl9cIikgKyBcIl9cIiArIGRhdGFbJ3VybF9kYXRhJ11bJ3Byb2xpZmljX2lkJ10sXG4gICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICBjb250ZW50VHlwZTogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgfVxuICAgICAgICApXG4gICAgICAgIGF3YWl0IHNsZWVwKDIwMDApO1xuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhlKVxuICAgIH1cbn0iLCJpbXBvcnQgeyBERVZNT0RFLCBSRVdBUkRfQ09SUkVDVCwgUEVOQUxUWV9JTkNPUlJFQ1QsIEVOQUJMRV9USU1FUiB9IGZyb20gXCIuL2dsb2JhbHNcIlxuZXhwb3J0IHZhciBVSUQ6IHN0cmluZ1xuZXhwb3J0IHZhciBNT0NLTU9ERTogYm9vbGVhbiA9IGZhbHNlXG5pbXBvcnQgeyBsb2FkX2RhdGEsIGxvZ19kYXRhIH0gZnJvbSAnLi9jb25uZWN0b3InXG5pbXBvcnQgeyBwYXJhbXNUb09iamVjdCB9IGZyb20gXCIuL3V0aWxzXCJcblxudmFyIGRhdGE6IGFueVtdID0gW11cbmxldCBxdWVzdGlvbl9pID0gLTFcbmxldCBxdWVzdGlvbjogYW55ID0gbnVsbFxuXG5cbmxldCBiYWxhbmNlID0gMFxuXG5sZXQgaW5zdHJ1Y3Rpb25faTogbnVtYmVyID0gMFxubGV0IGNvdW50X2V4aXRlZF9wYWdlOiBudW1iZXIgPSAwXG5cbmZ1bmN0aW9uIGFzc2VydChjb25kaXRpb24sIG1lc3NhZ2UpIHtcbiAgICBpZiAoIWNvbmRpdGlvbikge1xuICAgICAgICB0aHJvdyBtZXNzYWdlIHx8IFwiQXNzZXJ0aW9uIGZhaWxlZFwiO1xuICAgIH1cbn1cblxuXG5mdW5jdGlvbiBuZXh0X2luc3RydWN0aW9ucyhpbmNyZW1lbnQ6IG51bWJlcikge1xuICAgIGluc3RydWN0aW9uX2kgKz0gaW5jcmVtZW50XG5cbiAgICBpZiAoaW5zdHJ1Y3Rpb25faSA9PSAwKSB7XG4gICAgICAgICQoXCIjYnV0dG9uX2luc3RydWN0aW9uc19wcmV2XCIpLmF0dHIoXCJkaXNhYmxlZFwiLCBcInRydWVcIilcbiAgICB9IGVsc2Uge1xuICAgICAgICAkKFwiI2J1dHRvbl9pbnN0cnVjdGlvbnNfcHJldlwiKS5yZW1vdmVBdHRyKFwiZGlzYWJsZWRcIilcbiAgICB9XG4gICAgaWYgKGluc3RydWN0aW9uX2kgPT0gMCkge1xuICAgICAgICAkKFwiI2luc3RydWN0aW9uc19hbmRfZGVjb3JhdGlvbnNcIikuc2hvdygpXG4gICAgICAgICQoXCIjYnV0dG9uX2luc3RydWN0aW9uc19uZXh0XCIpLnZhbChcIlN0YXJ0IHN0dWR5XCIpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgJChcIiNpbnN0cnVjdGlvbnNfYW5kX2RlY29yYXRpb25zXCIpLmhpZGUoKVxuICAgICAgICAkKFwiI2J1dHRvbl9pbnN0cnVjdGlvbnNfbmV4dFwiKS52YWwoXCJOZXh0XCIpXG4gICAgfVxuICAgIGlmIChpbnN0cnVjdGlvbl9pID09IDEpIHtcbiAgICAgICAgJChcIiNpbnN0cnVjdGlvbnNfYW5kX2RlY29yYXRpb25zXCIpLnNob3coKVxuICAgICAgICAkKFwiI21haW5fYm94X2luc3RydWN0aW9uc1wiKS5oaWRlKClcbiAgICAgICAgJChcIiNtYWluX2JveF9leHBlcmltZW50XCIpLnNob3coKVxuICAgICAgICBuZXh0X3F1ZXN0aW9uKClcbiAgICB9XG5cbiAgICAkKFwiI21haW5fYm94X2luc3RydWN0aW9uc1wiKS5jaGlsZHJlbihcIjpub3QoaW5wdXQpXCIpLmVhY2goKF8sIGVsKSA9PiB7XG4gICAgICAgICQoZWwpLmhpZGUoKVxuICAgIH0pXG4gICAgJChgI2luc3RydWN0aW9uc18ke2luc3RydWN0aW9uX2l9YCkuc2hvdygpXG59XG4kKFwiI2J1dHRvbl9pbnN0cnVjdGlvbnNfbmV4dFwiKS5vbihcImNsaWNrXCIsICgpID0+IG5leHRfaW5zdHJ1Y3Rpb25zKCsxKSlcbiQoXCIjYnV0dG9uX2luc3RydWN0aW9uc19wcmV2XCIpLm9uKFwiY2xpY2tcIiwgKCkgPT4gbmV4dF9pbnN0cnVjdGlvbnMoLTEpKVxuXG4vLyBBZGQgbGlzdGVuZXIgdG8gZW5zdXJlIHRoZSB2aWRlbyBoYXMgYmVlbiB3YXRjaGVkXG5jb25zdCB2aWRlb0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWltZV92aWRlbycpO1xuXG5pZiAodmlkZW9FbGVtZW50KSB7XG4gICAgLy8gQWRkIGFuIGV2ZW50IGxpc3RlbmVyIGZvciB0aGUgJ2VuZGVkJyBldmVudFxuICAgIHZpZGVvRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdlbmRlZCcsICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ1RoZSB1c2VyIGhhcyB3YXRjaGVkIHRoZSBmdWxsIHZpZGVvLicpO1xuICAgICAgICAvLyBZb3UgY2FuIGFkZCBhZGRpdGlvbmFsIGFjdGlvbnMgaGVyZSwgc3VjaCBhcyBtYXJraW5nIHRoZSB2aWRlbyBhcyB3YXRjaGVkXG4gICAgICAgICQoXCIjd2F0Y2h2aWRlb19pbnN0cnVjdGlvblwiKS5oaWRlKClcbiAgICAgICAgJChcIiN1c2VyX3ByZWRpY3Rpb25cIikudmFsKFwiXCIpXG4gICAgICAgICQoXCIjYW5zd2VyX2JveFwiKS5zaG93KClcbiAgICB9KTtcbn0gZWxzZSB7XG4gICAgY29uc29sZS5lcnJvcignVmlkZW8gZWxlbWVudCB3aXRoIElEIFwibWltZV92aWRlb1wiIG5vdCBmb3VuZC4nKTtcbn1cblxuXG4kKCcjYW5zd2VyX2JveCcpLm9uKCdrZXl1cCcsICgpID0+IHtcbiAgICBsZXQgdXNlcl9wcmVkaWN0aW9uID0gU3RyaW5nKCQoJyN1c2VyX3ByZWRpY3Rpb24nKS52YWwoKSkudHJpbSgpXG4gICAgaWYgKHVzZXJfcHJlZGljdGlvbiAhPSAnJykge1xuICAgICAgICAkKFwiI2J1dHRvbl9uZXh0XCIpLnNob3coKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdUaGUgdGV4dCBib3ggaXMgZW1wdHkuJyk7XG4gICAgICAgICQoXCIjYnV0dG9uX25leHRcIikuaGlkZSgpXG4gICAgfVxufSk7XG5cbiQoXCIjYnV0dG9uX25leHRcIikub24oXCJjbGlja1wiLCAoKSA9PiB7XG5cbiAgICAvLyBVcGRhdGUgdGhlIHVzZXIgYmFsYW5jZVxuICAgIGlmIChxdWVzdGlvbl9pICE9IC0xKSB7XG4gICAgICAgIGxldCBsb2dnZWRfZGF0YSA9IHtcbiAgICAgICAgICAgIFwicXVlc3Rpb25faVwiOiBxdWVzdGlvbl9pLFxuICAgICAgICAgICAgXCJ1c2VyX2Fuc3dlclwiOiAkKFwiI3VzZXJfcHJlZGljdGlvblwiKS52YWwoKSxcbiAgICAgICAgfVxuICAgICAgICBsb2dnZWRfZGF0YVsncXVlc3Rpb24nXSA9IHF1ZXN0aW9uXG4gICAgICAgIGxvZ2dlZF9kYXRhWydjb3VudF9leGl0ZWRfcGFnZSddID0gY291bnRfZXhpdGVkX3BhZ2VcbiAgICAgICAgbG9nX2RhdGEobG9nZ2VkX2RhdGEpXG4gICAgICAgIGNvdW50X2V4aXRlZF9wYWdlID0gMFxuICAgIH1cbiAgICBcblxuICAgIG5leHRfcXVlc3Rpb24oKVxufSk7XG5cblxubGV0IGFjdGl2ZVRpbWVyOiBSZXR1cm5UeXBlPHR5cGVvZiBzZXRJbnRlcnZhbD4gfCBudWxsID0gbnVsbDsgLy8gVGltZXIgaW50ZXJ2YWxcblxuZnVuY3Rpb24gc3RhcnRUaW1lcihkdXJhdGlvbiwgc3RlcERpdiwgYnV0dG9ucywgY2FsbGJhY2spIHtcbiAgICBpZiAoIUVOQUJMRV9USU1FUikge1xuICAgICAgICAvLyBJZiB0aGUgdGltZXIgaXMgZGlzYWJsZWQsIGVuYWJsZSB0aGUgYnV0dG9ucyBpbW1lZGlhdGVseVxuICAgICAgICBidXR0b25zLmZvckVhY2goYnV0dG9uID0+IGJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKSk7XG4gICAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2soKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIENsZWFyIGFueSBleGlzdGluZyB0aW1lciB0byBwcmV2ZW50IG11bHRpcGxlIGludGVydmFsc1xuICAgIGlmIChhY3RpdmVUaW1lcikge1xuICAgICAgICBjbGVhckludGVydmFsKGFjdGl2ZVRpbWVyKTtcbiAgICAgICAgYWN0aXZlVGltZXIgPSBudWxsO1xuICAgIH1cblxuICAgIC8vIERpc2FibGUgYnV0dG9uc1xuICAgIGJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4gYnV0dG9uLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwidHJ1ZVwiKSk7XG4gICAgXG4gICAgLy8gU2hvdyB0aW1lciB2aXN1YWxseVxuICAgIGxldCB0aW1lckRpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aW1lckRpc3BsYXkuaWQgPSBgdGltZXJfJHtzdGVwRGl2LmlkfWA7XG4gICAgdGltZXJEaXNwbGF5LnN0eWxlLmZvbnRXZWlnaHQgPSAnYm9sZCc7XG4gICAgdGltZXJEaXNwbGF5LnN0eWxlLm1hcmdpblRvcCA9ICcxMHB4JztcbiAgICBzdGVwRGl2LmFwcGVuZENoaWxkKHRpbWVyRGlzcGxheSk7XG5cbiAgICBsZXQgcmVtYWluaW5nVGltZSA9IGR1cmF0aW9uO1xuXG4gICAgLy8gSW5pdGlhbCBkaXNwbGF5XG4gICAgdGltZXJEaXNwbGF5LnRleHRDb250ZW50ID0gYFBsZWFzZSB3YWl0ICR7cmVtYWluaW5nVGltZX0gc2Vjb25kKHMpIGJlZm9yZSBtYWtpbmcgeW91ciBzZWxlY3Rpb24uYDtcblxuICAgIGFjdGl2ZVRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICByZW1haW5pbmdUaW1lLS07XG4gICAgICAgIGlmIChyZW1haW5pbmdUaW1lID49IDApIHtcbiAgICAgICAgICAgIHRpbWVyRGlzcGxheS50ZXh0Q29udGVudCA9IGBQbGVhc2Ugd2FpdCAke3JlbWFpbmluZ1RpbWV9IHNlY29uZChzKSBiZWZvcmUgbWFraW5nIHlvdXIgc2VsZWN0aW9uLmA7XG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIGlmIChhY3RpdmVUaW1lciAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoYWN0aXZlVGltZXIpOyAvLyBTdG9wIHRoZSB0aW1lclxuICAgICAgICAgICAgICAgIGFjdGl2ZVRpbWVyID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFjdGl2ZVRpbWVyID0gbnVsbDtcblxuICAgICAgICAgICAgLy8gUmVtb3ZlIHRpbWVyIGRpc3BsYXlcbiAgICAgICAgICAgIHN0ZXBEaXYucmVtb3ZlQ2hpbGQodGltZXJEaXNwbGF5KTtcblxuICAgICAgICAgICAgLy8gRW5hYmxlIGJ1dHRvbnNcbiAgICAgICAgICAgIGJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4gYnV0dG9uLnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpKTtcblxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgfSwgMTAwMCk7XG59XG5cbi8vIFdoZW4gdGhlIHVzZXIgc3dpdGNoZXMgdGFicyBvciBtaW5pbWl6ZXMgdGhlIHdpbmRvdywgcGF1c2UgdGhlIHRpbWVyXG5kb2N1bWVudC5vbnZpc2liaWxpdHljaGFuZ2UgPSAoKSA9PiB7XG4gICAgaWYgKGRvY3VtZW50LmhpZGRlbikge1xuICAgICAgICBjb25zb2xlLmxvZyhcIldpbmRvdyBsb3N0IGZvY3VzLlwiKTtcbiAgICAgICAgaWYgKGFjdGl2ZVRpbWVyICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKGFjdGl2ZVRpbWVyKTsgLy8gUGF1c2UgdGhlIHRpbWVyXG4gICAgICAgICAgICBhY3RpdmVUaW1lciA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBIYW5kbGUgbG9naWMgd2hlbiB0aGUgdXNlciByZXR1cm5zXG4gICAgICAgIGNvbnNvbGUubG9nKFwiV2luZG93IHJlZ2FpbmVkIGZvY3VzLlwiKTtcbiAgICB9XG59O1xuXG5cblxuZnVuY3Rpb24gbmV4dF9xdWVzdGlvbigpIHtcbiAgICAvLyBSZXNldCB0aW1lcnMgYW5kIHN0YXRlXG4gICAgaWYgKGFjdGl2ZVRpbWVyKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwoYWN0aXZlVGltZXIpO1xuICAgICAgICBhY3RpdmVUaW1lciA9IG51bGw7XG4gICAgfVxuXG4gICAgLy8gcmVzdG9yZSBwcmV2aW91cyBzdGF0ZSBvZiBVSVxuXG4gICAgLy8kKFwiI3JhbmdlX3ZhbFwiKS52YWwodXNlcl90cnVzdClcblxuICAgIHF1ZXN0aW9uX2kgKz0gMVxuICAgIGlmIChxdWVzdGlvbl9pID49IGRhdGEubGVuZ3RoKSB7XG4gICAgICAgICQoXCIjbWFpbl9ib3hfZXhwZXJpbWVudFwiKS5oaWRlKClcbiAgICAgICAgJCgnI3Jld2FyZF9ib3gnKS5zaG93KClcbiAgICAgICAgJChcIiNtYWluX2JveF9lbmRcIikuc2hvdygpXG4gICAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHF1ZXN0aW9uID0gZGF0YVtxdWVzdGlvbl9pXVxuICAgIGNvbnNvbGUubG9nKHF1ZXN0aW9uKVxuXG4gICAgbGV0IHZpZGVvT2JqZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtaW1lX3ZpZGVvXCIpXG4gICAgaWYgKHZpZGVvT2JqZWN0KSB7XG4gICAgICAgIHZpZGVvT2JqZWN0LnNldEF0dHJpYnV0ZShcInNyY1wiLCBxdWVzdGlvblsndmlkZW9fdXJsJ10pXG4gICAgfVxuICAgICQoXCIjbWltZV92aWRlb1wiKS5zaG93KClcbiAgICAkKFwiI3dhdGNodmlkZW9faW5zdHJ1Y3Rpb25cIikuc2hvdygpXG4gICAgJCgnI2Fuc3dlcl9ib3gnKS5oaWRlKClcbiAgICAkKFwiI2J1dHRvbl9uZXh0XCIpLmhpZGUoKVxuICAgICQoJyNidXR0b25fcXVpdCcpLmhpZGUoKVxuXG5cbiAgICAvLyBzZXQgYmV0IHZhbHVlIHJhdGlvXG4gICAgLy9pZihxdWVzdGlvbi5oYXNPd25Qcm9wZXJ0eShcInJld2FyZF9yYXRpb1wiKSkge1xuICAgIC8vICAgIGxldCBbcmF0aW8xLCByYXRpbzJdID0gcXVlc3Rpb25bXCJyZXdhcmRfcmF0aW9cIl1cbiAgICAvLyAgICByYXRpbzEgPSBOdW1iZXIocmF0aW8xKVxuICAgIC8vICAgIHJhdGlvMiA9IE51bWJlcihyYXRpbzIpXG4gICAgLy8gICAgYmV0X3ZhbF9yYXRpbyA9IHJhdGlvMS9yYXRpbzJcbiAgICAvL30gZWxzZSB7XG4gICAgLy8gICAgYmV0X3ZhbF9yYXRpbyA9IDFcbiAgICAvL31cblxuICAgIC8vdGltZV9xdWVzdGlvbl9zdGFydCA9IERhdGUubm93KClcbiAgICAkKFwiI3Byb2dyZXNzXCIpLnRleHQoYFByb2dyZXNzOiAke3F1ZXN0aW9uX2kgKyAxfSAvICR7ZGF0YS5sZW5ndGh9YClcblxufVxuXG5cblxuLy8gZ2V0IHVzZXIgaWQgYW5kIGxvYWQgcXVldWVcbi8vIHRyeSB0byBzZWUgaWYgc3RhcnQgb3ZlcnJpZGUgd2FzIHBhc3NlZFxuY29uc3QgdXJsUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKTtcbmNvbnN0IHN0YXJ0T3ZlcnJpZGUgPSB1cmxQYXJhbXMuZ2V0KCdzdGFydCcpO1xuY29uc3QgVUlERnJvbVVSTCA9IHVybFBhcmFtcy5nZXQoXCJ1aWRcIilcbmdsb2JhbFRoaXMudXJsX2RhdGEgPSBwYXJhbXNUb09iamVjdCh1cmxQYXJhbXMuZW50cmllcygpKVxuXG5pZiAoZ2xvYmFsVGhpcy51cmxfZGF0YVsnc3R1ZHlfaWQnXSA9PSBudWxsKSB7XG4gICAgZ2xvYmFsVGhpcy51cmxfZGF0YVsnc3R1ZHlfaWQnXSA9IFwiZGVtb19zdHVkeVwiXG59XG5pZiAoZ2xvYmFsVGhpcy51cmxfZGF0YVsncHJvbGlmaWNfaWQnXSA9PSBudWxsKSB7XG4gICAgZ2xvYmFsVGhpcy51cmxfZGF0YVsncHJvbGlmaWNfaWQnXSA9IFwiZGVtb191c2VyXCJcbn1cbmlmIChnbG9iYWxUaGlzLnVybF9kYXRhWydzZXNzaW9uX2lkJ10gPT0gbnVsbCkge1xuICAgIGdsb2JhbFRoaXMudXJsX2RhdGFbJ3Nlc3Npb25faWQnXSA9IFwiZGVtb19zZXNzaW9uXCJcbn1cblxuaWYgKFVJREZyb21VUkwgIT0gbnVsbCkge1xuICAgIGdsb2JhbFRoaXMudWlkID0gVUlERnJvbVVSTCBhcyBzdHJpbmdcbiAgICBpZiAoZ2xvYmFsVGhpcy51aWQgPT0gXCJwcm9saWZpY19yYW5kb21cIikge1xuICAgICAgICBsZXQgcXVldWVfaWQgPSBgJHtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCl9YC5wYWRTdGFydCgzLCBcIjBcIilcbiAgICAgICAgZ2xvYmFsVGhpcy51aWQgPSBgJHt1cmxQYXJhbXMuZ2V0KFwicHJvbGlmaWNfcXVldWVfbmFtZVwiKX0vJHtxdWV1ZV9pZH1gXG4gICAgfVxufSBlbHNlIGlmIChERVZNT0RFKSB7XG4gICAgZ2xvYmFsVGhpcy51aWQgPSBcImRlbW9cIlxufSBlbHNlIHtcbiAgICBsZXQgVUlEX21heWJlOiBhbnkgPSBudWxsXG4gICAgd2hpbGUgKFVJRF9tYXliZSA9PSBudWxsKSB7XG4gICAgICAgIFVJRF9tYXliZSA9IHByb21wdChcIkVudGVyIHlvdXIgdXNlciBpZC4gUGxlYXNlIGdldCBpbiB0b3VjaCBpZiB5b3Ugd2VyZSBub3QgYXNzaWduZWQgYW4gaWQgYnV0IHdpc2ggdG8gcGFydGljaXBhdGUgaW4gdGhpcyBleHBlcmltZW50LlwiKVxuICAgIH1cbiAgICBnbG9iYWxUaGlzLnVpZCA9IFVJRF9tYXliZSFcbn1cblxuLy8gdmVyc2lvbiBmb3IgcGFwZXJcbmlmIChERVZNT0RFKSB7XG4gICAgTU9DS01PREUgPSB0cnVlXG59IGVsc2UgaWYgKGdsb2JhbFRoaXMudXJsX2RhdGFbJ3Nlc3Npb25faWQnXS5zdGFydHNXaXRoKFwiZGVtb1wiKSkge1xuICAgIE1PQ0tNT0RFID0gdHJ1ZVxufVxuXG5jb25zb2xlLmxvZyhcIlJ1bm5pbmcgd2l0aCBVSURcIiwgZ2xvYmFsVGhpcy51aWQpXG5sb2FkX2RhdGEoKS5jYXRjaCgoX2Vycm9yKSA9PiB7XG4gICAgLy9hbGVydChcIkludmFsaWQgdXNlciBpZC5cIilcbiAgICBjb25zb2xlLmxvZyhcIkludmFsaWQgdXNlciBpZC5cIilcbiAgICBjb25zb2xlLmxvZyhnbG9iYWxUaGlzLnVpZCEpXG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG59XG4pLnRoZW4oKG5ld19kYXRhKSA9PiB7XG4gICAgZGF0YSA9IG5ld19kYXRhXG4gICAgaWYgKHN0YXJ0T3ZlcnJpZGUgIT0gbnVsbCkge1xuICAgICAgICBxdWVzdGlvbl9pID0gcGFyc2VJbnQoc3RhcnRPdmVycmlkZSkgLSAxXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU3RhcnRpbmcgZnJvbVwiLCBxdWVzdGlvbl9pKVxuICAgIH1cbiAgICAvLyBuZXh0X3F1ZXN0aW9uKClcbiAgICBuZXh0X2luc3RydWN0aW9ucygwKVxuICAgICQoXCIjbWFpbl9ib3hfaW5zdHJ1Y3Rpb25zXCIpLnNob3coKVxuICAgICQoXCIjaW5zdHJ1Y3Rpb25zX2FuZF9kZWNvcmF0aW9uc1wiKS5oaWRlKClcbn0pXG5cbi8vIC8vIER5bmFtaWNhbGx5IGxvYWQgZGF0YXNldCBiYXNlZCBvbiBEQVRBU0VUXG4vLyBmZXRjaChgLi9iYWtlZF9xdWV1ZXMvJHtEQVRBU0VUfWApXG4vLyAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuLy8gICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4vLyAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBkYXRhc2V0LlwiKTtcbi8vICAgICAgICAgfVxuLy8gICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuLy8gICAgIH0pXG4vLyAgICAgLnRoZW4oKG5ld19kYXRhKSA9PiB7XG4vLyAgICAgICAgIGRhdGEgPSBuZXdfZGF0YTtcbi8vICAgICAgICAgaWYgKHN0YXJ0T3ZlcnJpZGUgIT0gbnVsbCkge1xuLy8gICAgICAgICAgICAgcXVlc3Rpb25faSA9IHBhcnNlSW50KHN0YXJ0T3ZlcnJpZGUpIC0gMTtcbi8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU3RhcnRpbmcgZnJvbVwiLCBxdWVzdGlvbl9pKTtcbi8vICAgICAgICAgfVxuLy8gICAgICAgICBuZXh0X2luc3RydWN0aW9ucygwKTtcbi8vICAgICAgICAgdXBkYXRlUmV3YXJkSW5zdHJ1Y3Rpb25zKCk7XG4vLyAgICAgICAgICQoXCIjbWFpbl9ib3hfaW5zdHJ1Y3Rpb25zXCIpLnNob3coKTtcbi8vICAgICAgICAgJChcIiNpbnN0cnVjdGlvbnNfYW5kX2RlY29yYXRpb25zXCIpLmhpZGUoKTtcbi8vICAgICB9KVxuLy8gICAgIC5jYXRjaCgoX2Vycm9yKSA9PiB7XG4vLyAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJJbnZhbGlkIHVzZXIgaWQgb3IgZGF0YXNldCBsb2FkaW5nIGZhaWxlZC5cIik7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKGdsb2JhbFRoaXMudWlkISk7XG4vLyAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbi8vICAgICB9KTtcblxuXG5jb25zb2xlLmxvZyhcIlN0YXJ0aW5nIHNlc3Npb24gd2l0aCBVSUQ6XCIsIGdsb2JhbFRoaXMudWlkISlcblxubGV0IGFsZXJ0X2FjdGl2ZSA9IGZhbHNlXG5kb2N1bWVudC5vbnZpc2liaWxpdHljaGFuZ2UgPSAoKSA9PiB7XG4gICAgaWYgKCFhbGVydF9hY3RpdmUpIHtcbiAgICAgICAgY291bnRfZXhpdGVkX3BhZ2UgKz0gMVxuICAgICAgICBhbGVydF9hY3RpdmUgPSB0cnVlXG4gICAgICAgIGlmICghKGdsb2JhbFRoaXMudWlkIS5zdGFydHNXaXRoKFwiZGVtb1wiKSkpIHtcbiAgICAgICAgICAgIC8vIHBhdXNlIHRoZSB0aW1lclxuICAgICAgICAgICBhbGVydChcIlBsZWFzZSBkb24ndCBsZWF2ZSB0aGUgcGFnZS4gSWYgeW91IGRvIHNvIGFnYWluLCB3ZSBtYXkgcmVzdHJpY3QgcGF5aW5nIHlvdS5cIilcbiAgICAgICAgfVxuICAgICAgICBhbGVydF9hY3RpdmUgPSBmYWxzZVxuICAgIH1cbiAgICBlbHNle1xuICAgICAgICAvL2NvbnRpbnVlIHRoZSB0aW1lcj9cbiAgICB9XG59IiwiZnVuY3Rpb24gcGFyYW1zVG9PYmplY3QoZW50cmllcykge1xuICBjb25zdCByZXN1bHQgPSB7fVxuICAvLyBlYWNoICdlbnRyeScgaXMgYSBba2V5LCB2YWx1ZV0gdHVwcGxlXG4gIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIGVudHJpZXMpIHtcbiAgICByZXN1bHRba2V5XSA9IHZhbHVlO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCB7IHBhcmFtc1RvT2JqZWN0IH0iXSwibmFtZXMiOlsiU0VSVkVSX0xPR19ST09UIiwiZGF0YSIsInF1ZXN0aW9uX2kiLCJxdWVzdGlvbiIsImluc3RydWN0aW9uX2kiLCJjb3VudF9leGl0ZWRfcGFnZSIsIm5leHRfaW5zdHJ1Y3Rpb25zIiwiaW5jcmVtZW50IiwiJCIsImF0dHIiLCJyZW1vdmVBdHRyIiwic2hvdyIsInZhbCIsImhpZGUiLCJuZXh0X3F1ZXN0aW9uIiwiY2hpbGRyZW4iLCJlYWNoIiwiXyIsImVsIiwib24iLCJ2aWRlb0VsZW1lbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsIlN0cmluZyIsInRyaW0iLCJsb2dnZWRfZGF0YSIsImFzeW5jIiwiZ2xvYmFsVGhpcyIsInVybF9kYXRhIiwidWlkIiwicmVzdWx0IiwiYWpheCIsIkpTT04iLCJzdHJpbmdpZnkiLCJwcm9qZWN0IiwicmVwbGFjZSIsInBheWxvYWQiLCJ0eXBlIiwiY29udGVudFR5cGUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJzbGVlcCIsImUiLCJsb2dfZGF0YSIsImFjdGl2ZVRpbWVyIiwiY2xlYXJJbnRlcnZhbCIsImxlbmd0aCIsInZpZGVvT2JqZWN0Iiwic2V0QXR0cmlidXRlIiwidGV4dCIsIm9udmlzaWJpbGl0eWNoYW5nZSIsImhpZGRlbiIsInVybFBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsIndpbmRvdyIsImxvY2F0aW9uIiwic2VhcmNoIiwic3RhcnRPdmVycmlkZSIsImdldCIsIlVJREZyb21VUkwiLCJlbnRyaWVzIiwia2V5IiwidmFsdWUiLCJwYXJhbXNUb09iamVjdCIsInF1ZXVlX2lkIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwicGFkU3RhcnQiLCJVSURfbWF5YmUiLCJwcm9tcHQiLCJzdGFydHNXaXRoIiwiZ2V0SlNPTiIsIkRhdGUiLCJub3ciLCJsb2FkX2RhdGEiLCJjYXRjaCIsIl9lcnJvciIsInJlbG9hZCIsInRoZW4iLCJuZXdfZGF0YSIsInBhcnNlSW50IiwiYWxlcnRfYWN0aXZlIiwiYWxlcnQiXSwic291cmNlUm9vdCI6IiJ9