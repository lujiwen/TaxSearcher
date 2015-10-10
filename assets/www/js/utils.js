// JavaScript Document
//网络请求
var serverURL = "http://211.149.242.82:8080/taxquery/mapi/userservice" ;
//211.149.242.82
// 1.判断select选项中 是否存在Value="paraValue"的Item 
function jsSelectIsExitItem(objSelect, objItemValue) { 
var isExit = false; 
for (var i = 0; i < objSelect.options.length; i++) { 
if (objSelect.options[i].value == objItemValue) { 
isExit = true; 
break; 
} 
} 
return isExit; 
} 


// 2.向select选项中 加入一个Item 
function jsAddItemToSelect(objSelect, objItemText, objItemValue) { 
//判断是否存在 
if (jsSelectIsExitItem(objSelect, objItemValue)) { 
 
} else { 
var varItem = new Option(objItemText, objItemValue); 
objSelect.options.add(varItem); 
 
} 
} 

function clearSelect(objSelect)
{
    objSelect.options.length = 0;     
}


function trim(obj){
	return obj.replace(/(^\s*)|(\s*$)/g, '');
}

function onSelectArea()
	{
	      var area_select=document.getElementById("area");
		  var type_select=document.getElementById("tax_type");
          var area =  area_select.options[area_select.selectedIndex].value
		   
		   clearSelect(type_select);//先清空
	       switch(area)
		   {
		     case 'sc':  
			  jsAddItemToSelect(type_select,'国税-普通发票',"sc_national");
			  jsAddItemToSelect(type_select,'地税-通用发票',"sc_local");
			 break ;
			 case 'gd':
			  jsAddItemToSelect(type_select,"国税-通用发票","gd_national");
			  jsAddItemToSelect(type_select,"国税-网络发票","gd_network");
			  jsAddItemToSelect(type_select,"国税-发票流向","gd_flow"); 
			 break ;
			 case 'yn':
			  jsAddItemToSelect(type_select,"国税-增值税发票","yn_national");
			  jsAddItemToSelect(type_select,"国税-普通发票","yn_check");
			 break ;
			 case 'bj': 
			  jsAddItemToSelect(type_select,"北京-通用发票","bj_national");
			 break ;
			 case 'cq': 
			  jsAddItemToSelect(type_select,"国税-网络发票","cq_national"); 
			  jsAddItemToSelect(type_select,"国税-发票流向","cq_flow");
			  jsAddItemToSelect(type_select,"国税-冠名发票","cq_named");
			  jsAddItemToSelect(type_select,"国税-增值税发票","cq_added");
			  jsAddItemToSelect(type_select,"地税-机打发票","cq_printed");
			  jsAddItemToSelect(type_select,"地税-定额发票","cq_quota");
			 break ;
		   }
		   optionnal_show(); //更新下面要显示的内容
	}
	
/* function getType(type)
	{
	    	switch(type)
			{
				case "sc_national":
				return "四川国税" ;
				break ;
				case "sc_local":
				return "四川地税" ;
				break ;
				case "gd_national":
				return "广东国税普通发票" ;
				break ;
				case "gd_network":
				return "广东国税网络发票" ;
				break ;
				case "gd_flow":
				return "广东国税发票流向" ;
				break ;
				case " yn_national":
				return "云南国税增值税流向" ;
				break ;
				case "yn_check":
				return "云南国税普通发票" ;
				break ;
				case "bj_national":
				return "北京国税" ;
				break ;				
				case "cq_national":
				return "重庆国税" ;
				break ;
				case "cq_flow":
				return "重庆国税发票流向" ;
				break ;
				case "cq_named":
				return "重庆国税冠名发票" ;
				break ;		
				case "cq_added":
				return "重庆国税增值税发票流向" ;
				break ;
				case "cq_printed":
				return "重庆地税机打发票" ;
				break ;
				case "cq_quota":
				return "重庆地税定额发票" ;
				break ;		
				default:
				break ;
			}
	} 
	
*/
function resetAll()
	{
	    //充值所有的input类型
      var control = document.getElementsByTagName("input");
	  for(var i=0;i<control.length;i++)
	  {
	        if(control[i].type=="text")
			{
			    control[i].value = "";
			}
	  }
	}
function optionnal_show()
{ 
	var type_select=document.getElementById("tax_type");  
	var type =  type_select.options[type_select.selectedIndex].value;  
	$("div#date").hide();
	switch(type)
	{
		case "sc_national":
		$("div#fpmm").hide();
		$("div#status").hide();
		$("div#fpvalue").hide();
		$("div#eno").hide();
		$("div#money").hide();
		$("div#ename").hide();
		break;
		case "sc_local":
		$("div#fpmm").show();
		$("div#status").hide();
		$("div#fpvalue").show();
		$("div#eno").hide();
		$("div#money").hide();
		$("div#ename").hide();
		break;
		case "yn_national":
		$("div#status").hide();
		$("div#fpvalue").hide();
 		$("div#fpmm").hide();
		$("div#money").hide();
		$("div#ename").hide();
		$("label#eno_label").html("开票方税务登记号"); 
		$("input#eno").attr('placeholder','开票方税务登记号')
		break;
		case "yn_check":
		$("div#status").hide();
		$("div#fpvalue").show();
 		$("div#fpmm").hide();
		$("div#ename").hide();
		$("label#fpvalue_label").html("发票金额"); 
		$("input#money").attr('placeholder','发票金额')
		break;
		case "bj_national":
 		$("div#eno").hide();
		$("div#ename").hide();
		$("div#money").hide();
		$("div#fpvalue").hide();
		$("div#status").show();
		$("label#optionnal_status").html("是否第一次查询"); 
		break;
		case "cq_national":
		$("div#fpmm").hide();
		$("div#status").hide();
	 	$("div#fpvalue").show();
		$("div#name").show();
		$("div#eno").hide();
		break;
		case "cq_flow":
	    $("div#fpmm").hide();
	//	$("div#status").hide();
	 	$("div#fpvalue").hide();
		$("div#eno").hide();
		$("div#payer").hide();
		$("div#ename").show();
		$("div#status").show();
		$("label#optionnal_status").html("税务机关代开"); 
		
		break; 
		case "cq_named":
	    $("div#fpmm").hide();
	 	$("div#status").hide();
	 	$("div#fpvalue").hide();
		$("div#eno").hide();
		$("div#payer").hide();
		$("div#ename").show();
		$("div#status").hide();
		$("label#payer_label").html("开票方名称"); 
		break; 
 
		case "cq_added":
        $("div#fpmm").show();
		$("div#status").hide();
		$("div#fpvalue").show();
		$("div#eno").show();
		$("div#ename").hide();
		$("div#date").show();
		//$("label#fpmm_label").html("开票日期 "); 
		//$("input#fp_password").attr('placeholder','开票日期 2015-05-23 ')
		$("label#eno_label").html("开具方识别号"); 
		$("input#eno").attr('placeholder','开具方识别号')
		break;
		case "cq_printed":
        $("div#fpmm").hide();
		$("div#status").hide();
		$("div#fpvalue").show();
		$("div#eno").hide();
		$("div#ename").show();
		//$("label#fpmm_label").html("开票日期 "); 
		$("input#fp_password").attr('placeholder','开票日期 2015-05-23 ')
		//$("label#eno_label").html("开具方识别号"); 
		//$("input#eno").attr('placeholder','开具方识别号')
		break;
		case "cq_quota":
		 $("div#fpmm").hide();
	 	$("div#status").hide();
	 	$("div#fpvalue").hide();
		$("div#eno").hide();
		$("div#payer").hide();
		$("div#ename").hide();
		$("div#status").hide();
		break ;
		 
		case "gd_national":
        $("div#fpmm").hide();
		$("div#status").hide();
	 	$("div#eno").show();
		$("div#fpvalue").show();
	 	$("div#ename").show();
		$("div#date").show();
		$("label#fpvalue_label").html("税额"); 
		$("input#money").attr('placeholder','税额')
		break;
		case "gd_flow":
        $("div#fpmm").hide();
		$("div#status").hide();
		$("div#fpvalue").hide();
		$("div#eno").hide();
		$("div#money").hide();
		$("div#ename").hide();
		$("div#date").hide();
		break;
		case "gd_network":
        $("div#fpmm").hide();
		$("div#status").hide();
 		$("div#fpvalue").show();
		$("label#fpvalue_label").html("发票金额"); 
		$("input#money").attr('placeholder','发票金额')
		$("div#eno").hide();
		$("div#date").hide();
	 	$("div#ename").show();
		$("label#payer_label").html("发票所属区域"); 
		$("input#payer").attr('placeholder','发票所属区域');
		break;
	}
}
function registInputCheck()
{
		phoneLength =trim($("input#phone").val()).length;
	    mailLength = trim($("input#mail").val()).length;
	    passwordLength = trim($("input#password").val()).length
	    comfirmPasswordlength = trim($("input#comfirmPassword").val()).length ;
		if((phoneLength==0)||(mailLength==0)||(passwordLength==0)||(comfirmPasswordlength==0))
		{
			return("任意一项不得为空!");
		}
		else if(trim($("input#password").val())!=trim($("input#comfirmPassword").val()))
		{
			return("两次密码输入不一致！")
		}
		else return "";
		
}

function inputCheck(type)
{
	fpdmLength =trim($("input#code").val()).length;
	fphmLength = trim($("input#num").val()).length;
	fpmmLength = trim($("input#fp_password").val()).length
	 enolength = trim($("input#eno").val()).length ;
	switch(type)
	{
		case "sc_national":
         if((fpdmLength!=12)||(fphmLength!=8))
		 {
			 return("输入有误！");
		 }
		 
		break;
		case "sc_local":
          if((fpdmLength!=12)||(fphmLength!=8)||(fpmmLength!=8))
		 {
			 return("输入有误！");
		 }
		 
		break;
		case "yn_national":
         if((fpdmLength!=10)||(fphmLength!=8)||(fpmmLength!=15))
		 {
			 return("输入有误！");
		 }
		 
		break;
		case "yn_check":

        if((fpdmLength!=12)||(fphmLength!=8)||(enolength!=15))
		 {
			 return("输入有误！");
		 }
		break;
		case "bj_national":
          if((fpdmLength!=12)||(fphmLength!=8)||(fpmmLength!=8))
		 {
			 return("输入有误！");
		 }
		break;
		case "cq_national":
         if((fpdmLength!=12)||(fphmLength!=8) )
		 {
			 return("输入有误！");
		 }
		break;
		case "cq_flow":
 		if((fpdmLength!=12)||(fphmLength!=8))
		 {
			 return("输入有误！");
		 }
		break; 
		case "cq_named":
             
		break; 
 
		case "cq_added":
         if((fpdmLength!=10)||(fphmLength!=8)||(enoLength!=15))
		 {
			 return("输入有误！");
		 }
		break;
		case "cq_printed":
         if((fpdmLength!=12)||(fphmLength!=8))
		 {
			 return("输入有误！");
		 }
		break;
		case "cq_quota":
         if((fpdmLength!=12)||(fphmLength!=8))
		 {
			 return("输入有误！");
		 }
		break ;
		 
		case "gd_national":
         if((fpdmLength!=12)||(fphmLength!=8)||(enoLength!=15))
		 {
			 return("输入有误！");
		 }
		break;
		case "gd_flow":
         if((fpdmLength!=10)||(fphmLength!=8))
		 {
			 return("输入有误！");
		 }
		break;
		case "gd_network":
 
		break;
	}
      return("");
}

function show_result()
{
	var result = sessionStorage.getItem("queryResult");
	var resultlist = document.getElementById('result_list');
	resultlist.innerText = result ;
}

function loginInputCheck()
{
	usernameLength = $("input#phone_num").val().length ;
	passwordeLength = $("input#password").val().length ;
	if((usernameLength==0)||(passwordeLength==0))
	{
		return("手机号和密码输入有误！");
	}
	
}

