(()=>{"use strict";let o="https://tejassrinivasan.pythonanywhere.com/";var t=[];let n=-1,i=null,e=-1,a=!1,l=0,s=0;function r(o){l+=o,0==l?$("#button_instructions_prev").attr("disabled","true"):$("#button_instructions_prev").removeAttr("disabled"),0==l?($("#instructions_and_decorations").show(),$("#button_instructions_next").val("Start study")):($("#instructions_and_decorations").hide(),$("#button_instructions_next").val("Next")),1==l&&($("#instructions_and_decorations").show(),$("#main_box_instructions").hide(),$("#main_box_experiment").show(),_()),$("#main_box_instructions").children(":not(input)").each(((o,t)=>{$(t).hide()})),$(`#instructions_${l}`).show()}$("#button_instructions_next").on("click",(()=>r(1))),$("#button_instructions_prev").on("click",(()=>r(-1)));const u=document.getElementById("mime_video");function c(o){e=o;for(let o=1;o<=4;o++)$(`#button_option${o}`).removeAttr("activedecision");$(`#button_option${o}`).attr("activedecision","true"),a=e==i.label_idx+1,$("#button_next").show()}u?u.addEventListener("ended",(()=>{console.log("The user has watched the full video."),$("#watchvideo_instruction").hide(),$("#answer_box").show()})):console.error('Video element with ID "mime_video" not found.'),$("#answer_box").on("keyup",(()=>{""!=String($("#user_prediction").val()).trim()?$("#button_submit").show():(console.log("The text box is empty."),$("#button_submit").hide())})),$("#button_submit").on("click",(()=>{$("#button_submit").hide(),$("#mcq_box").show(),$("#user_prediction").attr("disabled","true")})),$("#button_option1").on("click",(()=>c(1))),$("#button_option2").on("click",(()=>c(2))),$("#button_option3").on("click",(()=>c(3))),$("#button_option4").on("click",(()=>c(4))),$("#button_next").on("click",(()=>{if(-1!=n){let t={question_i:n,sample_id:i.sample_id,user_answer:$("#user_prediction").val(),user_mcq_selection:e,user_is_correct:a};t.question=i,t.count_exited_page=s,async function(t){t.url_data=globalThis.url_data,console.log("Data"),"study_id"in t.url_data||(t.url_data.study_id="demo_study"),"prolific_id"in t.url_data||(t.url_data.prolific_id="demo_user"),"session_id"in t.url_data||(t.url_data.session_id="demo_session"),t.url_data.queue_id=globalThis.uid,console.log("logged",t),console.log("Logging to",o+"log");try{let n=await $.ajax(o+"log",{data:JSON.stringify({project:"mime-eval-study/human-eval/",uid:globalThis.uid+"_"+globalThis.annotator,payload:JSON.stringify(t)}),type:"POST",contentType:"application/json"});return await async function(){return new Promise((o=>setTimeout(o,2e3)))}(),n}catch(o){console.log(o)}}(t),s=0}_()}));let d=null;function _(){if(d&&(clearInterval(d),d=null),n+=1,n>=t.length)return $("#main_box_experiment").hide(),$("#reward_box").show(),void $("#main_box_end").show();i=t[n],console.log(i);let o=document.getElementById("mime_video");o&&o.setAttribute("src",i.s3_url),$("#user_prediction").removeAttr("disabled"),console.log(i.sample_id),console.log(i.s3_url),$("#user_prediction").val(""),$("#option1_span").html(i.options[0]),$("#option2_span").html(i.options[1]),$("#option3_span").html(i.options[2]),$("#option4_span").html(i.options[3]),$("#mime_video").show(),$("#watchvideo_instruction").show(),$("#answer_box").hide();for(let o=1;o<=4;o++)$(`#button_option${o}`).removeAttr("activedecision"),$(`#button_option${o}`).removeAttr("disabled");$("#mcq_box").hide(),$("#button_next").hide(),$("#button_submit").hide(),$("#button_quit").hide(),$("#progress").text(`Progress: ${n+1} / ${t.length}`)}document.onvisibilitychange=()=>{document.hidden?(console.log("Window lost focus."),null!==d&&(clearInterval(d),d=null)):console.log("Window regained focus.")};const g=new URLSearchParams(window.location.search),b=g.get("start");g.get("uid"),globalThis.url_data=function(o){const t={};for(const[n,i]of o)t[n]=i;return t}(g.entries()),globalThis.avatar=g.get("avatar"),null==globalThis.avatar&&(globalThis.avatar="man"),globalThis.angle=g.get("angle"),null==globalThis.angle&&(globalThis.angle="0"),globalThis.background=g.get("background"),null==globalThis.background&&(globalThis.background="blank"),globalThis.annotator=g.get("annotator"),null==globalThis.annotator&&(globalThis.annotator="none"),globalThis.set=g.get("set"),null==globalThis.set&&(globalThis.set="1"),globalThis.uid=`${globalThis.avatar}_avatar-${globalThis.angle}_angle-${globalThis.background}_background-set${globalThis.set}`,console.log("Running with annotator",globalThis.annotator),console.log("Running with avatar",globalThis.avatar),console.log("Running with angle",globalThis.angle),console.log("Running with background",globalThis.background),async function(){return await $.getJSON(`baked_queues/${globalThis.avatar}_avatar-${globalThis.angle}_angle-${globalThis.background}_background-set${globalThis.set}.json?t=${Date.now()}`)}().catch((o=>{console.log("Invalid params: ",globalThis.url_data),window.location.reload()})).then((o=>{t=o,null!=b&&(n=parseInt(b)-1,console.log("Starting from",n)),r(0),$("#main_box_instructions").show(),$("#instructions_and_decorations").hide()})),console.log("Starting session with annotator:",globalThis.annotator)})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFdBQVdRLFlBQXFCUixXQUFXUSxVQUFZLFFBQzNEUixXQUFXeUMsSUFBTWQsRUFBVU0sSUFBSSxPQUNULE1BQWxCakMsV0FBV3lDLE1BQWV6QyxXQUFXeUMsSUFBTSxLQUMvQ3pDLFdBQVdFLElBQU0sR0FBR0YsV0FBV3NDLGlCQUFpQnRDLFdBQVd1QyxlQUFldkMsV0FBV3dDLDRCQUE0QnhDLFdBQVd5QyxNQW1CNUhoRCxRQUFRQyxJQUFJLHlCQUEwQk0sV0FBV1EsV0FDakRmLFFBQVFDLElBQUksc0JBQXVCTSxXQUFXc0MsUUFDOUM3QyxRQUFRQyxJQUFJLHFCQUFzQk0sV0FBV3VDLE9BQzdDOUMsUUFBUUMsSUFBSSwwQkFBMkJNLFdBQVd3QyxZRHZTM0N6QyxpQkFLSCxhQUhtQnpCLEVBQUVvRSxRQUNqQixnQkFBZ0IxQyxXQUFXc0MsaUJBQWlCdEMsV0FBV3VDLGVBQWV2QyxXQUFXd0MsNEJBQTRCeEMsV0FBV3lDLGNBQWNFLEtBQUtDLFFBR25KLENDbVNBQyxHQUFZQyxPQUFPQyxJQUVmdEQsUUFBUUMsSUFBSSxtQkFBb0JNLFdBQVdDLFVBQzNDNEIsT0FBT0MsU0FBU2tCLFFBQVEsSUFFMUJDLE1BQU1DLElBQ0pyRixFQUFPcUYsRUFDYyxNQUFqQmxCLElBQ0FsRSxFQUFhcUYsU0FBU25CLEdBQWlCLEVBQ3ZDdkMsUUFBUUMsSUFBSSxnQkFBaUI1QixJQUdqQ00sRUFBa0IsR0FDbEJFLEVBQUUsMEJBQTBCRyxPQUM1QkgsRUFBRSxpQ0FBaUNLLE1BQU0sSUE0QjdDYyxRQUFRQyxJQUFJLG1DQUFvQ00sV0FBV1EsVSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb25uZWN0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERFVk1PREUgfSBmcm9tICcuL2dsb2JhbHMnXG5pbXBvcnQgeyBNT0NLTU9ERSB9IGZyb20gJy4vbWFpbidcblxubGV0IFNFUlZFUl9MT0dfUk9PVCA9IERFVk1PREUgPyBcImh0dHA6Ly8xMjcuMC4wLjE6NTAwMC9cIiA6IFwiaHR0cHM6Ly90ZWphc3NyaW5pdmFzYW4ucHl0aG9uYW55d2hlcmUuY29tL1wiXG5cbmFzeW5jIGZ1bmN0aW9uIHNsZWVwKG1zOiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRfZGF0YSgpOiBQcm9taXNlPGFueT4ge1xuICAgIC8vIGluY2x1ZGUgdGltZXN0YW1wIHNvIHRoYXQgdGhpbmdzIGRvbid0IGdldCBjYWNoZWRcbiAgICBsZXQgcmVzdWx0ID0gYXdhaXQgJC5nZXRKU09OKFxuICAgICAgICBgYmFrZWRfcXVldWVzLyR7Z2xvYmFsVGhpcy5hdmF0YXJ9X2F2YXRhci0ke2dsb2JhbFRoaXMuYW5nbGV9X2FuZ2xlLSR7Z2xvYmFsVGhpcy5iYWNrZ3JvdW5kfV9iYWNrZ3JvdW5kLXNldCR7Z2xvYmFsVGhpcy5zZXR9Lmpzb24/dD0ke0RhdGUubm93KCl9YCxcbiAgICApXG4gICAgcmV0dXJuIHJlc3VsdFxufVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvZ19kYXRhKGRhdGEpOiBQcm9taXNlPGFueT4ge1xuICAgIC8vaWYgKE1PQ0tNT0RFKSB7XG4gICAgLy8gICAgY29uc29sZS5sb2coXCJsb2dnZWQgKG1vY2spXCIsIGRhdGEpXG4gICAgLy8gICAgcmV0dXJuXG4gICAgLy99XG4gICAgXG4gICAgZGF0YVtcInVybF9kYXRhXCJdID0gZ2xvYmFsVGhpcy51cmxfZGF0YVxuICAgIGNvbnNvbGUubG9nKFwiRGF0YVwiKVxuICAgIGlmICghKFwic3R1ZHlfaWRcIiBpbiBkYXRhWyd1cmxfZGF0YSddKSkge1xuICAgICAgICBkYXRhWyd1cmxfZGF0YSddW1wic3R1ZHlfaWRcIl0gPSBcImRlbW9fc3R1ZHlcIlxuICAgIH1cbiAgICBpZiAoIShcInByb2xpZmljX2lkXCIgaW4gZGF0YVsndXJsX2RhdGEnXSkpIHtcbiAgICAgICAgZGF0YVsndXJsX2RhdGEnXVtcInByb2xpZmljX2lkXCJdID0gXCJkZW1vX3VzZXJcIlxuICAgIH1cbiAgICBpZiAoIShcInNlc3Npb25faWRcIiBpbiBkYXRhWyd1cmxfZGF0YSddKSkge1xuICAgICAgICBkYXRhWyd1cmxfZGF0YSddW1wic2Vzc2lvbl9pZFwiXSA9IFwiZGVtb19zZXNzaW9uXCJcbiAgICB9XG4gICAgZGF0YVtcInVybF9kYXRhXCJdW1wicXVldWVfaWRcIl0gPSBnbG9iYWxUaGlzLnVpZFxuICAgIGNvbnNvbGUubG9nKFwibG9nZ2VkXCIsIGRhdGEpXG4gICAgY29uc29sZS5sb2coXCJMb2dnaW5nIHRvXCIsIFNFUlZFUl9MT0dfUk9PVCArIFwibG9nXCIpXG5cbiAgICB0cnkge1xuICAgICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgJC5hamF4KFxuICAgICAgICAgICAgU0VSVkVSX0xPR19ST09UICsgXCJsb2dcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3Q6IFwibWltZS1ldmFsLXN0dWR5L2h1bWFuLWV2YWwvXCIsXG4gICAgICAgICAgICAgICAgICAgIHVpZDogZ2xvYmFsVGhpcy51aWQgKyBcIl9cIiArIGdsb2JhbFRoaXMuYW5ub3RhdG9yLFxuICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiBKU09OLnN0cmluZ2lmeShkYXRhKSxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICB0eXBlOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgICAgICBhd2FpdCBzbGVlcCgyMDAwKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coZSlcbiAgICB9XG59IiwiaW1wb3J0IHsgREVWTU9ERSwgUkVXQVJEX0NPUlJFQ1QsIFBFTkFMVFlfSU5DT1JSRUNULCBFTkFCTEVfVElNRVIgfSBmcm9tIFwiLi9nbG9iYWxzXCJcbmV4cG9ydCB2YXIgVUlEOiBzdHJpbmdcbmV4cG9ydCB2YXIgTU9DS01PREU6IGJvb2xlYW4gPSBmYWxzZVxuaW1wb3J0IHsgbG9hZF9kYXRhLCBsb2dfZGF0YSB9IGZyb20gJy4vY29ubmVjdG9yJ1xuaW1wb3J0IHsgcGFyYW1zVG9PYmplY3QgfSBmcm9tIFwiLi91dGlsc1wiXG5cbnZhciBkYXRhOiBhbnlbXSA9IFtdXG5sZXQgcXVlc3Rpb25faSA9IC0xXG5sZXQgcXVlc3Rpb246IGFueSA9IG51bGxcblxuXG5sZXQgYmFsYW5jZSA9IDBcblxubGV0IHVzZXJfbWNxX3NlbGVjdGlvbiA9IC0xXG5sZXQgdXNlcl9pc19jb3JyZWN0ID0gZmFsc2VcblxubGV0IGluc3RydWN0aW9uX2k6IG51bWJlciA9IDBcbmxldCBjb3VudF9leGl0ZWRfcGFnZTogbnVtYmVyID0gMFxuXG5mdW5jdGlvbiBhc3NlcnQoY29uZGl0aW9uLCBtZXNzYWdlKSB7XG4gICAgaWYgKCFjb25kaXRpb24pIHtcbiAgICAgICAgdGhyb3cgbWVzc2FnZSB8fCBcIkFzc2VydGlvbiBmYWlsZWRcIjtcbiAgICB9XG59XG5cblxuZnVuY3Rpb24gbmV4dF9pbnN0cnVjdGlvbnMoaW5jcmVtZW50OiBudW1iZXIpIHtcbiAgICBpbnN0cnVjdGlvbl9pICs9IGluY3JlbWVudFxuXG4gICAgaWYgKGluc3RydWN0aW9uX2kgPT0gMCkge1xuICAgICAgICAkKFwiI2J1dHRvbl9pbnN0cnVjdGlvbnNfcHJldlwiKS5hdHRyKFwiZGlzYWJsZWRcIiwgXCJ0cnVlXCIpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgJChcIiNidXR0b25faW5zdHJ1Y3Rpb25zX3ByZXZcIikucmVtb3ZlQXR0cihcImRpc2FibGVkXCIpXG4gICAgfVxuICAgIGlmIChpbnN0cnVjdGlvbl9pID09IDApIHtcbiAgICAgICAgJChcIiNpbnN0cnVjdGlvbnNfYW5kX2RlY29yYXRpb25zXCIpLnNob3coKVxuICAgICAgICAkKFwiI2J1dHRvbl9pbnN0cnVjdGlvbnNfbmV4dFwiKS52YWwoXCJTdGFydCBzdHVkeVwiKVxuICAgIH0gZWxzZSB7XG4gICAgICAgICQoXCIjaW5zdHJ1Y3Rpb25zX2FuZF9kZWNvcmF0aW9uc1wiKS5oaWRlKClcbiAgICAgICAgJChcIiNidXR0b25faW5zdHJ1Y3Rpb25zX25leHRcIikudmFsKFwiTmV4dFwiKVxuICAgIH1cbiAgICBpZiAoaW5zdHJ1Y3Rpb25faSA9PSAxKSB7XG4gICAgICAgICQoXCIjaW5zdHJ1Y3Rpb25zX2FuZF9kZWNvcmF0aW9uc1wiKS5zaG93KClcbiAgICAgICAgJChcIiNtYWluX2JveF9pbnN0cnVjdGlvbnNcIikuaGlkZSgpXG4gICAgICAgICQoXCIjbWFpbl9ib3hfZXhwZXJpbWVudFwiKS5zaG93KClcbiAgICAgICAgbmV4dF9xdWVzdGlvbigpXG4gICAgfVxuXG4gICAgJChcIiNtYWluX2JveF9pbnN0cnVjdGlvbnNcIikuY2hpbGRyZW4oXCI6bm90KGlucHV0KVwiKS5lYWNoKChfLCBlbCkgPT4ge1xuICAgICAgICAkKGVsKS5oaWRlKClcbiAgICB9KVxuICAgICQoYCNpbnN0cnVjdGlvbnNfJHtpbnN0cnVjdGlvbl9pfWApLnNob3coKVxufVxuJChcIiNidXR0b25faW5zdHJ1Y3Rpb25zX25leHRcIikub24oXCJjbGlja1wiLCAoKSA9PiBuZXh0X2luc3RydWN0aW9ucygrMSkpXG4kKFwiI2J1dHRvbl9pbnN0cnVjdGlvbnNfcHJldlwiKS5vbihcImNsaWNrXCIsICgpID0+IG5leHRfaW5zdHJ1Y3Rpb25zKC0xKSlcblxuLy8gQWRkIGxpc3RlbmVyIHRvIGVuc3VyZSB0aGUgdmlkZW8gaGFzIGJlZW4gd2F0Y2hlZFxuY29uc3QgdmlkZW9FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21pbWVfdmlkZW8nKTtcblxuaWYgKHZpZGVvRWxlbWVudCkge1xuICAgIC8vIEFkZCBhbiBldmVudCBsaXN0ZW5lciBmb3IgdGhlICdlbmRlZCcgZXZlbnRcbiAgICB2aWRlb0VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZW5kZWQnLCAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdUaGUgdXNlciBoYXMgd2F0Y2hlZCB0aGUgZnVsbCB2aWRlby4nKTtcbiAgICAgICAgLy8gWW91IGNhbiBhZGQgYWRkaXRpb25hbCBhY3Rpb25zIGhlcmUsIHN1Y2ggYXMgbWFya2luZyB0aGUgdmlkZW8gYXMgd2F0Y2hlZFxuICAgICAgICAkKFwiI3dhdGNodmlkZW9faW5zdHJ1Y3Rpb25cIikuaGlkZSgpXG4gICAgICAgIC8vJChcIiN1c2VyX3ByZWRpY3Rpb25cIikudmFsKFwiXCIpXG4gICAgICAgICQoXCIjYW5zd2VyX2JveFwiKS5zaG93KClcbiAgICB9KTtcbn0gZWxzZSB7XG4gICAgY29uc29sZS5lcnJvcignVmlkZW8gZWxlbWVudCB3aXRoIElEIFwibWltZV92aWRlb1wiIG5vdCBmb3VuZC4nKTtcbn1cblxuXG4kKCcjYW5zd2VyX2JveCcpLm9uKCdrZXl1cCcsICgpID0+IHtcbiAgICBsZXQgdXNlcl9wcmVkaWN0aW9uID0gU3RyaW5nKCQoJyN1c2VyX3ByZWRpY3Rpb24nKS52YWwoKSkudHJpbSgpXG4gICAgaWYgKHVzZXJfcHJlZGljdGlvbiAhPSAnJykge1xuICAgICAgICAkKFwiI2J1dHRvbl9zdWJtaXRcIikuc2hvdygpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1RoZSB0ZXh0IGJveCBpcyBlbXB0eS4nKTtcbiAgICAgICAgJChcIiNidXR0b25fc3VibWl0XCIpLmhpZGUoKVxuICAgIH1cbn0pO1xuXG4kKFwiI2J1dHRvbl9zdWJtaXRcIikub24oXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgJChcIiNidXR0b25fc3VibWl0XCIpLmhpZGUoKVxuICAgICQoXCIjbWNxX2JveFwiKS5zaG93KClcbiAgICAvLyBEaXNhYmxlIHRoZSB0ZXh0IGJveFxuICAgICQoXCIjdXNlcl9wcmVkaWN0aW9uXCIpLmF0dHIoXCJkaXNhYmxlZFwiLCBcInRydWVcIilcbn0pO1xuXG5mdW5jdGlvbiByZWdpc3Rlcl9tY3Ffc2VsZWN0aW9uKG9wdGlvbikge1xuICAgIHVzZXJfbWNxX3NlbGVjdGlvbiA9IG9wdGlvblxuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDQ7IGkrKykge1xuICAgICAgICAvLyQoYCNidXR0b25fb3B0aW9uJHtpfWApLmF0dHIoXCJkaXNhYmxlZFwiLCBcInRydWVcIilcbiAgICAgICAgJChgI2J1dHRvbl9vcHRpb24ke2l9YCkucmVtb3ZlQXR0cihcImFjdGl2ZWRlY2lzaW9uXCIpXG4gICAgfVxuICAgICQoYCNidXR0b25fb3B0aW9uJHtvcHRpb259YCkuYXR0cihcImFjdGl2ZWRlY2lzaW9uXCIsIFwidHJ1ZVwiKVxuICAgIHVzZXJfaXNfY29ycmVjdCA9ICh1c2VyX21jcV9zZWxlY3Rpb24gPT0gcXVlc3Rpb25bJ2xhYmVsX2lkeCddKzEpID8gdHJ1ZSA6IGZhbHNlXG5cbiAgICAkKFwiI2J1dHRvbl9uZXh0XCIpLnNob3coKVxufVxuJChcIiNidXR0b25fb3B0aW9uMVwiKS5vbihcImNsaWNrXCIsICgpID0+IHJlZ2lzdGVyX21jcV9zZWxlY3Rpb24oMSkpXG4kKFwiI2J1dHRvbl9vcHRpb24yXCIpLm9uKFwiY2xpY2tcIiwgKCkgPT4gcmVnaXN0ZXJfbWNxX3NlbGVjdGlvbigyKSlcbiQoXCIjYnV0dG9uX29wdGlvbjNcIikub24oXCJjbGlja1wiLCAoKSA9PiByZWdpc3Rlcl9tY3Ffc2VsZWN0aW9uKDMpKVxuJChcIiNidXR0b25fb3B0aW9uNFwiKS5vbihcImNsaWNrXCIsICgpID0+IHJlZ2lzdGVyX21jcV9zZWxlY3Rpb24oNCkpXG5cblxuJChcIiNidXR0b25fbmV4dFwiKS5vbihcImNsaWNrXCIsICgpID0+IHtcblxuICAgIC8vIFVwZGF0ZSB0aGUgdXNlciBiYWxhbmNlXG4gICAgaWYgKHF1ZXN0aW9uX2kgIT0gLTEpIHtcbiAgICAgICAgbGV0IGxvZ2dlZF9kYXRhID0ge1xuICAgICAgICAgICAgXCJxdWVzdGlvbl9pXCI6IHF1ZXN0aW9uX2ksXG4gICAgICAgICAgICBcInNhbXBsZV9pZFwiOiBxdWVzdGlvblsnc2FtcGxlX2lkJ10sXG4gICAgICAgICAgICBcInVzZXJfYW5zd2VyXCI6ICQoXCIjdXNlcl9wcmVkaWN0aW9uXCIpLnZhbCgpLFxuICAgICAgICAgICAgXCJ1c2VyX21jcV9zZWxlY3Rpb25cIjogdXNlcl9tY3Ffc2VsZWN0aW9uLFxuICAgICAgICAgICAgXCJ1c2VyX2lzX2NvcnJlY3RcIjogdXNlcl9pc19jb3JyZWN0LFxuICAgICAgICB9XG4gICAgICAgIGxvZ2dlZF9kYXRhWydxdWVzdGlvbiddID0gcXVlc3Rpb25cbiAgICAgICAgbG9nZ2VkX2RhdGFbJ2NvdW50X2V4aXRlZF9wYWdlJ10gPSBjb3VudF9leGl0ZWRfcGFnZVxuICAgICAgICBsb2dfZGF0YShsb2dnZWRfZGF0YSlcbiAgICAgICAgY291bnRfZXhpdGVkX3BhZ2UgPSAwXG4gICAgfVxuICAgIFxuXG4gICAgbmV4dF9xdWVzdGlvbigpXG59KTtcblxuXG5sZXQgYWN0aXZlVGltZXI6IFJldHVyblR5cGU8dHlwZW9mIHNldEludGVydmFsPiB8IG51bGwgPSBudWxsOyAvLyBUaW1lciBpbnRlcnZhbFxuXG5mdW5jdGlvbiBzdGFydFRpbWVyKGR1cmF0aW9uLCBzdGVwRGl2LCBidXR0b25zLCBjYWxsYmFjaykge1xuICAgIGlmICghRU5BQkxFX1RJTUVSKSB7XG4gICAgICAgIC8vIElmIHRoZSB0aW1lciBpcyBkaXNhYmxlZCwgZW5hYmxlIHRoZSBidXR0b25zIGltbWVkaWF0ZWx5XG4gICAgICAgIGJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4gYnV0dG9uLnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpKTtcbiAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjaygpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gQ2xlYXIgYW55IGV4aXN0aW5nIHRpbWVyIHRvIHByZXZlbnQgbXVsdGlwbGUgaW50ZXJ2YWxzXG4gICAgaWYgKGFjdGl2ZVRpbWVyKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwoYWN0aXZlVGltZXIpO1xuICAgICAgICBhY3RpdmVUaW1lciA9IG51bGw7XG4gICAgfVxuXG4gICAgLy8gRGlzYWJsZSBidXR0b25zXG4gICAgYnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiBidXR0b24uc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJ0cnVlXCIpKTtcbiAgICBcbiAgICAvLyBTaG93IHRpbWVyIHZpc3VhbGx5XG4gICAgbGV0IHRpbWVyRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRpbWVyRGlzcGxheS5pZCA9IGB0aW1lcl8ke3N0ZXBEaXYuaWR9YDtcbiAgICB0aW1lckRpc3BsYXkuc3R5bGUuZm9udFdlaWdodCA9ICdib2xkJztcbiAgICB0aW1lckRpc3BsYXkuc3R5bGUubWFyZ2luVG9wID0gJzEwcHgnO1xuICAgIHN0ZXBEaXYuYXBwZW5kQ2hpbGQodGltZXJEaXNwbGF5KTtcblxuICAgIGxldCByZW1haW5pbmdUaW1lID0gZHVyYXRpb247XG5cbiAgICAvLyBJbml0aWFsIGRpc3BsYXlcbiAgICB0aW1lckRpc3BsYXkudGV4dENvbnRlbnQgPSBgUGxlYXNlIHdhaXQgJHtyZW1haW5pbmdUaW1lfSBzZWNvbmQocykgYmVmb3JlIG1ha2luZyB5b3VyIHNlbGVjdGlvbi5gO1xuXG4gICAgYWN0aXZlVGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIHJlbWFpbmluZ1RpbWUtLTtcbiAgICAgICAgaWYgKHJlbWFpbmluZ1RpbWUgPj0gMCkge1xuICAgICAgICAgICAgdGltZXJEaXNwbGF5LnRleHRDb250ZW50ID0gYFBsZWFzZSB3YWl0ICR7cmVtYWluaW5nVGltZX0gc2Vjb25kKHMpIGJlZm9yZSBtYWtpbmcgeW91ciBzZWxlY3Rpb24uYDtcbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgaWYgKGFjdGl2ZVRpbWVyICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChhY3RpdmVUaW1lcik7IC8vIFN0b3AgdGhlIHRpbWVyXG4gICAgICAgICAgICAgICAgYWN0aXZlVGltZXIgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYWN0aXZlVGltZXIgPSBudWxsO1xuXG4gICAgICAgICAgICAvLyBSZW1vdmUgdGltZXIgZGlzcGxheVxuICAgICAgICAgICAgc3RlcERpdi5yZW1vdmVDaGlsZCh0aW1lckRpc3BsYXkpO1xuXG4gICAgICAgICAgICAvLyBFbmFibGUgYnV0dG9uc1xuICAgICAgICAgICAgYnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiBidXR0b24ucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIikpO1xuXG4gICAgICAgICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICB9LCAxMDAwKTtcbn1cblxuLy8gV2hlbiB0aGUgdXNlciBzd2l0Y2hlcyB0YWJzIG9yIG1pbmltaXplcyB0aGUgd2luZG93LCBwYXVzZSB0aGUgdGltZXJcbmRvY3VtZW50Lm9udmlzaWJpbGl0eWNoYW5nZSA9ICgpID0+IHtcbiAgICBpZiAoZG9jdW1lbnQuaGlkZGVuKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiV2luZG93IGxvc3QgZm9jdXMuXCIpO1xuICAgICAgICBpZiAoYWN0aXZlVGltZXIgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoYWN0aXZlVGltZXIpOyAvLyBQYXVzZSB0aGUgdGltZXJcbiAgICAgICAgICAgIGFjdGl2ZVRpbWVyID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEhhbmRsZSBsb2dpYyB3aGVuIHRoZSB1c2VyIHJldHVybnNcbiAgICAgICAgY29uc29sZS5sb2coXCJXaW5kb3cgcmVnYWluZWQgZm9jdXMuXCIpO1xuICAgIH1cbn07XG5cblxuXG5mdW5jdGlvbiBuZXh0X3F1ZXN0aW9uKCkge1xuICAgIC8vIFJlc2V0IHRpbWVycyBhbmQgc3RhdGVcbiAgICBpZiAoYWN0aXZlVGltZXIpIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChhY3RpdmVUaW1lcik7XG4gICAgICAgIGFjdGl2ZVRpbWVyID0gbnVsbDtcbiAgICB9XG5cbiAgICAvLyByZXN0b3JlIHByZXZpb3VzIHN0YXRlIG9mIFVJXG5cbiAgICAvLyQoXCIjcmFuZ2VfdmFsXCIpLnZhbCh1c2VyX3RydXN0KVxuXG4gICAgcXVlc3Rpb25faSArPSAxXG4gICAgaWYgKHF1ZXN0aW9uX2kgPj0gZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgJChcIiNtYWluX2JveF9leHBlcmltZW50XCIpLmhpZGUoKVxuICAgICAgICAkKCcjcmV3YXJkX2JveCcpLnNob3coKVxuICAgICAgICAkKFwiI21haW5fYm94X2VuZFwiKS5zaG93KClcbiAgICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgcXVlc3Rpb24gPSBkYXRhW3F1ZXN0aW9uX2ldXG4gICAgY29uc29sZS5sb2cocXVlc3Rpb24pXG5cbiAgICBsZXQgdmlkZW9PYmplY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1pbWVfdmlkZW9cIilcbiAgICBpZiAodmlkZW9PYmplY3QpIHtcbiAgICAgICAgdmlkZW9PYmplY3Quc2V0QXR0cmlidXRlKFwic3JjXCIsIHF1ZXN0aW9uWydzM191cmwnXSlcbiAgICB9XG4gICAgJChcIiN1c2VyX3ByZWRpY3Rpb25cIikucmVtb3ZlQXR0cihcImRpc2FibGVkXCIpXG5cbiAgICBjb25zb2xlLmxvZyhxdWVzdGlvblsnc2FtcGxlX2lkJ10pXG4gICAgY29uc29sZS5sb2cocXVlc3Rpb25bJ3MzX3VybCddKVxuICAgICQoXCIjdXNlcl9wcmVkaWN0aW9uXCIpLnZhbChcIlwiKVxuICAgICQoXCIjb3B0aW9uMV9zcGFuXCIpLmh0bWwocXVlc3Rpb24hW1wib3B0aW9uc1wiXVswXSlcbiAgICAkKFwiI29wdGlvbjJfc3BhblwiKS5odG1sKHF1ZXN0aW9uIVtcIm9wdGlvbnNcIl1bMV0pXG4gICAgJChcIiNvcHRpb24zX3NwYW5cIikuaHRtbChxdWVzdGlvbiFbXCJvcHRpb25zXCJdWzJdKVxuICAgICQoXCIjb3B0aW9uNF9zcGFuXCIpLmh0bWwocXVlc3Rpb24hW1wib3B0aW9uc1wiXVszXSlcblxuICAgICQoXCIjbWltZV92aWRlb1wiKS5zaG93KClcbiAgICAkKFwiI3dhdGNodmlkZW9faW5zdHJ1Y3Rpb25cIikuc2hvdygpXG4gICAgJCgnI2Fuc3dlcl9ib3gnKS5oaWRlKClcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSA0OyBpKyspIHtcbiAgICAgICAgJChgI2J1dHRvbl9vcHRpb24ke2l9YCkucmVtb3ZlQXR0cihcImFjdGl2ZWRlY2lzaW9uXCIpXG4gICAgICAgICQoYCNidXR0b25fb3B0aW9uJHtpfWApLnJlbW92ZUF0dHIoXCJkaXNhYmxlZFwiKVxuICAgIH1cbiAgICAkKFwiI21jcV9ib3hcIikuaGlkZSgpXG4gICAgJChcIiNidXR0b25fbmV4dFwiKS5oaWRlKClcbiAgICAkKFwiI2J1dHRvbl9zdWJtaXRcIikuaGlkZSgpXG4gICAgJCgnI2J1dHRvbl9xdWl0JykuaGlkZSgpXG5cblxuICAgIC8vIHNldCBiZXQgdmFsdWUgcmF0aW9cbiAgICAvL2lmKHF1ZXN0aW9uLmhhc093blByb3BlcnR5KFwicmV3YXJkX3JhdGlvXCIpKSB7XG4gICAgLy8gICAgbGV0IFtyYXRpbzEsIHJhdGlvMl0gPSBxdWVzdGlvbltcInJld2FyZF9yYXRpb1wiXVxuICAgIC8vICAgIHJhdGlvMSA9IE51bWJlcihyYXRpbzEpXG4gICAgLy8gICAgcmF0aW8yID0gTnVtYmVyKHJhdGlvMilcbiAgICAvLyAgICBiZXRfdmFsX3JhdGlvID0gcmF0aW8xL3JhdGlvMlxuICAgIC8vfSBlbHNlIHtcbiAgICAvLyAgICBiZXRfdmFsX3JhdGlvID0gMVxuICAgIC8vfVxuXG4gICAgLy90aW1lX3F1ZXN0aW9uX3N0YXJ0ID0gRGF0ZS5ub3coKVxuICAgICQoXCIjcHJvZ3Jlc3NcIikudGV4dChgUHJvZ3Jlc3M6ICR7cXVlc3Rpb25faSArIDF9IC8gJHtkYXRhLmxlbmd0aH1gKVxuXG59XG5cblxuXG4vLyBnZXQgdXNlciBpZCBhbmQgbG9hZCBxdWV1ZVxuLy8gdHJ5IHRvIHNlZSBpZiBzdGFydCBvdmVycmlkZSB3YXMgcGFzc2VkXG5jb25zdCB1cmxQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xuY29uc3Qgc3RhcnRPdmVycmlkZSA9IHVybFBhcmFtcy5nZXQoJ3N0YXJ0Jyk7XG5jb25zdCBVSURGcm9tVVJMID0gdXJsUGFyYW1zLmdldChcInVpZFwiKVxuZ2xvYmFsVGhpcy51cmxfZGF0YSA9IHBhcmFtc1RvT2JqZWN0KHVybFBhcmFtcy5lbnRyaWVzKCkpXG5cbmdsb2JhbFRoaXMuYXZhdGFyID0gdXJsUGFyYW1zLmdldChcImF2YXRhclwiKVxuaWYgKGdsb2JhbFRoaXMuYXZhdGFyID09IG51bGwpIHsgZ2xvYmFsVGhpcy5hdmF0YXIgPSBcIm1hblwiIH1cbmdsb2JhbFRoaXMuYW5nbGUgPSB1cmxQYXJhbXMuZ2V0KFwiYW5nbGVcIilcbmlmIChnbG9iYWxUaGlzLmFuZ2xlID09IG51bGwpIHsgZ2xvYmFsVGhpcy5hbmdsZSA9IFwiMFwiIH1cbmdsb2JhbFRoaXMuYmFja2dyb3VuZCA9IHVybFBhcmFtcy5nZXQoXCJiYWNrZ3JvdW5kXCIpXG5pZiAoZ2xvYmFsVGhpcy5iYWNrZ3JvdW5kID09IG51bGwpIHsgZ2xvYmFsVGhpcy5iYWNrZ3JvdW5kID0gXCJibGFua1wiIH1cbmdsb2JhbFRoaXMuYW5ub3RhdG9yID0gdXJsUGFyYW1zLmdldChcImFubm90YXRvclwiKVxuaWYgKGdsb2JhbFRoaXMuYW5ub3RhdG9yID09IG51bGwpIHsgZ2xvYmFsVGhpcy5hbm5vdGF0b3IgPSBcIm5vbmVcIiB9XG5nbG9iYWxUaGlzLnNldCA9IHVybFBhcmFtcy5nZXQoXCJzZXRcIilcbmlmIChnbG9iYWxUaGlzLnNldCA9PSBudWxsKSB7IGdsb2JhbFRoaXMuc2V0ID0gXCIxXCIgfVxuZ2xvYmFsVGhpcy51aWQgPSBgJHtnbG9iYWxUaGlzLmF2YXRhcn1fYXZhdGFyLSR7Z2xvYmFsVGhpcy5hbmdsZX1fYW5nbGUtJHtnbG9iYWxUaGlzLmJhY2tncm91bmR9X2JhY2tncm91bmQtc2V0JHtnbG9iYWxUaGlzLnNldH1gXG5cbi8vaWYgKGdsb2JhbFRoaXMudXJsX2RhdGFbJ3N0dWR5X2lkJ10gPT0gbnVsbCkge1xuLy8gICAgZ2xvYmFsVGhpcy51cmxfZGF0YVsnc3R1ZHlfaWQnXSA9IFwiZGVtb19zdHVkeVwiXG4vL31cbi8vaWYgKGdsb2JhbFRoaXMudXJsX2RhdGFbJ3Byb2xpZmljX2lkJ10gPT0gbnVsbCkge1xuLy8gICAgZ2xvYmFsVGhpcy51cmxfZGF0YVsncHJvbGlmaWNfaWQnXSA9IFwiZGVtb191c2VyXCJcbi8vfVxuLy9pZiAoZ2xvYmFsVGhpcy51cmxfZGF0YVsnc2Vzc2lvbl9pZCddID09IG51bGwpIHtcbi8vICAgIGdsb2JhbFRoaXMudXJsX2RhdGFbJ3Nlc3Npb25faWQnXSA9IFwiZGVtb19zZXNzaW9uXCJcbi8vfVxuXG4vLyB2ZXJzaW9uIGZvciBwYXBlclxuaWYgKERFVk1PREUpIHtcbiAgICBNT0NLTU9ERSA9IHRydWVcbn0gZWxzZSB7XG4gICAgTU9DS01PREUgPSB0cnVlXG59XG5cbmNvbnNvbGUubG9nKFwiUnVubmluZyB3aXRoIGFubm90YXRvclwiLCBnbG9iYWxUaGlzLmFubm90YXRvcilcbmNvbnNvbGUubG9nKFwiUnVubmluZyB3aXRoIGF2YXRhclwiLCBnbG9iYWxUaGlzLmF2YXRhcilcbmNvbnNvbGUubG9nKFwiUnVubmluZyB3aXRoIGFuZ2xlXCIsIGdsb2JhbFRoaXMuYW5nbGUpXG5jb25zb2xlLmxvZyhcIlJ1bm5pbmcgd2l0aCBiYWNrZ3JvdW5kXCIsIGdsb2JhbFRoaXMuYmFja2dyb3VuZClcblxubG9hZF9kYXRhKCkuY2F0Y2goKF9lcnJvcikgPT4ge1xuICAgIC8vYWxlcnQoXCJJbnZhbGlkIHVzZXIgaWQuXCIpXG4gICAgY29uc29sZS5sb2coXCJJbnZhbGlkIHBhcmFtczogXCIsIGdsb2JhbFRoaXMudXJsX2RhdGEpXG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG59XG4pLnRoZW4oKG5ld19kYXRhKSA9PiB7XG4gICAgZGF0YSA9IG5ld19kYXRhXG4gICAgaWYgKHN0YXJ0T3ZlcnJpZGUgIT0gbnVsbCkge1xuICAgICAgICBxdWVzdGlvbl9pID0gcGFyc2VJbnQoc3RhcnRPdmVycmlkZSkgLSAxXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU3RhcnRpbmcgZnJvbVwiLCBxdWVzdGlvbl9pKVxuICAgIH1cbiAgICAvLyBuZXh0X3F1ZXN0aW9uKClcbiAgICBuZXh0X2luc3RydWN0aW9ucygwKVxuICAgICQoXCIjbWFpbl9ib3hfaW5zdHJ1Y3Rpb25zXCIpLnNob3coKVxuICAgICQoXCIjaW5zdHJ1Y3Rpb25zX2FuZF9kZWNvcmF0aW9uc1wiKS5oaWRlKClcbn0pXG5cbi8vIC8vIER5bmFtaWNhbGx5IGxvYWQgZGF0YXNldCBiYXNlZCBvbiBEQVRBU0VUXG4vLyBmZXRjaChgLi9iYWtlZF9xdWV1ZXMvJHtEQVRBU0VUfWApXG4vLyAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuLy8gICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4vLyAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBkYXRhc2V0LlwiKTtcbi8vICAgICAgICAgfVxuLy8gICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuLy8gICAgIH0pXG4vLyAgICAgLnRoZW4oKG5ld19kYXRhKSA9PiB7XG4vLyAgICAgICAgIGRhdGEgPSBuZXdfZGF0YTtcbi8vICAgICAgICAgaWYgKHN0YXJ0T3ZlcnJpZGUgIT0gbnVsbCkge1xuLy8gICAgICAgICAgICAgcXVlc3Rpb25faSA9IHBhcnNlSW50KHN0YXJ0T3ZlcnJpZGUpIC0gMTtcbi8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU3RhcnRpbmcgZnJvbVwiLCBxdWVzdGlvbl9pKTtcbi8vICAgICAgICAgfVxuLy8gICAgICAgICBuZXh0X2luc3RydWN0aW9ucygwKTtcbi8vICAgICAgICAgdXBkYXRlUmV3YXJkSW5zdHJ1Y3Rpb25zKCk7XG4vLyAgICAgICAgICQoXCIjbWFpbl9ib3hfaW5zdHJ1Y3Rpb25zXCIpLnNob3coKTtcbi8vICAgICAgICAgJChcIiNpbnN0cnVjdGlvbnNfYW5kX2RlY29yYXRpb25zXCIpLmhpZGUoKTtcbi8vICAgICB9KVxuLy8gICAgIC5jYXRjaCgoX2Vycm9yKSA9PiB7XG4vLyAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJJbnZhbGlkIHVzZXIgaWQgb3IgZGF0YXNldCBsb2FkaW5nIGZhaWxlZC5cIik7XG4vLyAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbi8vICAgICB9KTtcblxuXG5jb25zb2xlLmxvZyhcIlN0YXJ0aW5nIHNlc3Npb24gd2l0aCBhbm5vdGF0b3I6XCIsIGdsb2JhbFRoaXMuYW5ub3RhdG9yKVxuIiwiZnVuY3Rpb24gcGFyYW1zVG9PYmplY3QoZW50cmllcykge1xuICBjb25zdCByZXN1bHQgPSB7fVxuICAvLyBlYWNoICdlbnRyeScgaXMgYSBba2V5LCB2YWx1ZV0gdHVwcGxlXG4gIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIGVudHJpZXMpIHtcbiAgICByZXN1bHRba2V5XSA9IHZhbHVlO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCB7IHBhcmFtc1RvT2JqZWN0IH0iXSwibmFtZXMiOlsiU0VSVkVSX0xPR19ST09UIiwiZGF0YSIsInF1ZXN0aW9uX2kiLCJxdWVzdGlvbiIsInVzZXJfbWNxX3NlbGVjdGlvbiIsInVzZXJfaXNfY29ycmVjdCIsImluc3RydWN0aW9uX2kiLCJjb3VudF9leGl0ZWRfcGFnZSIsIm5leHRfaW5zdHJ1Y3Rpb25zIiwiaW5jcmVtZW50IiwiJCIsImF0dHIiLCJyZW1vdmVBdHRyIiwic2hvdyIsInZhbCIsImhpZGUiLCJuZXh0X3F1ZXN0aW9uIiwiY2hpbGRyZW4iLCJlYWNoIiwiXyIsImVsIiwib24iLCJ2aWRlb0VsZW1lbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicmVnaXN0ZXJfbWNxX3NlbGVjdGlvbiIsIm9wdGlvbiIsImkiLCJhZGRFdmVudExpc3RlbmVyIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwiU3RyaW5nIiwidHJpbSIsImxvZ2dlZF9kYXRhIiwiYXN5bmMiLCJnbG9iYWxUaGlzIiwidXJsX2RhdGEiLCJ1aWQiLCJyZXN1bHQiLCJhamF4IiwiSlNPTiIsInN0cmluZ2lmeSIsInByb2plY3QiLCJhbm5vdGF0b3IiLCJwYXlsb2FkIiwidHlwZSIsImNvbnRlbnRUeXBlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0Iiwic2xlZXAiLCJlIiwibG9nX2RhdGEiLCJhY3RpdmVUaW1lciIsImNsZWFySW50ZXJ2YWwiLCJsZW5ndGgiLCJ2aWRlb09iamVjdCIsInNldEF0dHJpYnV0ZSIsImh0bWwiLCJ0ZXh0Iiwib252aXNpYmlsaXR5Y2hhbmdlIiwiaGlkZGVuIiwidXJsUGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwid2luZG93IiwibG9jYXRpb24iLCJzZWFyY2giLCJzdGFydE92ZXJyaWRlIiwiZ2V0IiwiZW50cmllcyIsImtleSIsInZhbHVlIiwicGFyYW1zVG9PYmplY3QiLCJhdmF0YXIiLCJhbmdsZSIsImJhY2tncm91bmQiLCJzZXQiLCJnZXRKU09OIiwiRGF0ZSIsIm5vdyIsImxvYWRfZGF0YSIsImNhdGNoIiwiX2Vycm9yIiwicmVsb2FkIiwidGhlbiIsIm5ld19kYXRhIiwicGFyc2VJbnQiXSwic291cmNlUm9vdCI6IiJ9