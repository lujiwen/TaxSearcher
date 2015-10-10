// JavaScript Document
//��������
var serverURL = "http://211.149.242.82:8080/taxquery/mapi/userservice" ;
//211.149.242.82
// 1.�ж�selectѡ���� �Ƿ����Value="paraValue"��Item 
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


// 2.��selectѡ���� ����һ��Item 
function jsAddItemToSelect(objSelect, objItemText, objItemValue) { 
//�ж��Ƿ���� 
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
		   
		   clearSelect(type_select);//�����
	       switch(area)
		   {
		     case 'sc':  
			  jsAddItemToSelect(type_select,'��˰-��ͨ��Ʊ',"sc_national");
			  jsAddItemToSelect(type_select,'��˰-ͨ�÷�Ʊ',"sc_local");
			 break ;
			 case 'gd':
			  jsAddItemToSelect(type_select,"��˰-ͨ�÷�Ʊ","gd_national");
			  jsAddItemToSelect(type_select,"��˰-���緢Ʊ","gd_network");
			  jsAddItemToSelect(type_select,"��˰-��Ʊ����","gd_flow"); 
			 break ;
			 case 'yn':
			  jsAddItemToSelect(type_select,"��˰-��ֵ˰��Ʊ","yn_national");
			  jsAddItemToSelect(type_select,"��˰-��ͨ��Ʊ","yn_check");
			 break ;
			 case 'bj': 
			  jsAddItemToSelect(type_select,"����-ͨ�÷�Ʊ","bj_national");
			 break ;
			 case 'cq': 
			  jsAddItemToSelect(type_select,"��˰-���緢Ʊ","cq_national"); 
			  jsAddItemToSelect(type_select,"��˰-��Ʊ����","cq_flow");
			  jsAddItemToSelect(type_select,"��˰-������Ʊ","cq_named");
			  jsAddItemToSelect(type_select,"��˰-��ֵ˰��Ʊ","cq_added");
			  jsAddItemToSelect(type_select,"��˰-����Ʊ","cq_printed");
			  jsAddItemToSelect(type_select,"��˰-���Ʊ","cq_quota");
			 break ;
		   }
		   optionnal_show(); //��������Ҫ��ʾ������
	}
	
/* function getType(type)
	{
	    	switch(type)
			{
				case "sc_national":
				return "�Ĵ���˰" ;
				break ;
				case "sc_local":
				return "�Ĵ���˰" ;
				break ;
				case "gd_national":
				return "�㶫��˰��ͨ��Ʊ" ;
				break ;
				case "gd_network":
				return "�㶫��˰���緢Ʊ" ;
				break ;
				case "gd_flow":
				return "�㶫��˰��Ʊ����" ;
				break ;
				case " yn_national":
				return "���Ϲ�˰��ֵ˰����" ;
				break ;
				case "yn_check":
				return "���Ϲ�˰��ͨ��Ʊ" ;
				break ;
				case "bj_national":
				return "������˰" ;
				break ;				
				case "cq_national":
				return "�����˰" ;
				break ;
				case "cq_flow":
				return "�����˰��Ʊ����" ;
				break ;
				case "cq_named":
				return "�����˰������Ʊ" ;
				break ;		
				case "cq_added":
				return "�����˰��ֵ˰��Ʊ����" ;
				break ;
				case "cq_printed":
				return "�����˰����Ʊ" ;
				break ;
				case "cq_quota":
				return "�����˰���Ʊ" ;
				break ;		
				default:
				break ;
			}
	} 
	
*/
function resetAll()
	{
	    //��ֵ���е�input����
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
		$("label#eno_label").html("��Ʊ��˰��ǼǺ�"); 
		$("input#eno").attr('placeholder','��Ʊ��˰��ǼǺ�')
		break;
		case "yn_check":
		$("div#status").hide();
		$("div#fpvalue").show();
 		$("div#fpmm").hide();
		$("div#ename").hide();
		$("label#fpvalue_label").html("��Ʊ���"); 
		$("input#money").attr('placeholder','��Ʊ���')
		break;
		case "bj_national":
 		$("div#eno").hide();
		$("div#ename").hide();
		$("div#money").hide();
		$("div#fpvalue").hide();
		$("div#status").show();
		$("label#optionnal_status").html("�Ƿ��һ�β�ѯ"); 
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
		$("label#optionnal_status").html("˰����ش���"); 
		
		break; 
		case "cq_named":
	    $("div#fpmm").hide();
	 	$("div#status").hide();
	 	$("div#fpvalue").hide();
		$("div#eno").hide();
		$("div#payer").hide();
		$("div#ename").show();
		$("div#status").hide();
		$("label#payer_label").html("��Ʊ������"); 
		break; 
 
		case "cq_added":
        $("div#fpmm").show();
		$("div#status").hide();
		$("div#fpvalue").show();
		$("div#eno").show();
		$("div#ename").hide();
		$("div#date").show();
		//$("label#fpmm_label").html("��Ʊ���� "); 
		//$("input#fp_password").attr('placeholder','��Ʊ���� 2015-05-23 ')
		$("label#eno_label").html("���߷�ʶ���"); 
		$("input#eno").attr('placeholder','���߷�ʶ���')
		break;
		case "cq_printed":
        $("div#fpmm").hide();
		$("div#status").hide();
		$("div#fpvalue").show();
		$("div#eno").hide();
		$("div#ename").show();
		//$("label#fpmm_label").html("��Ʊ���� "); 
		$("input#fp_password").attr('placeholder','��Ʊ���� 2015-05-23 ')
		//$("label#eno_label").html("���߷�ʶ���"); 
		//$("input#eno").attr('placeholder','���߷�ʶ���')
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
		$("label#fpvalue_label").html("˰��"); 
		$("input#money").attr('placeholder','˰��')
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
		$("label#fpvalue_label").html("��Ʊ���"); 
		$("input#money").attr('placeholder','��Ʊ���')
		$("div#eno").hide();
		$("div#date").hide();
	 	$("div#ename").show();
		$("label#payer_label").html("��Ʊ��������"); 
		$("input#payer").attr('placeholder','��Ʊ��������');
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
			return("����һ���Ϊ��!");
		}
		else if(trim($("input#password").val())!=trim($("input#comfirmPassword").val()))
		{
			return("�����������벻һ�£�")
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
			 return("��������");
		 }
		 
		break;
		case "sc_local":
          if((fpdmLength!=12)||(fphmLength!=8)||(fpmmLength!=8))
		 {
			 return("��������");
		 }
		 
		break;
		case "yn_national":
         if((fpdmLength!=10)||(fphmLength!=8)||(fpmmLength!=15))
		 {
			 return("��������");
		 }
		 
		break;
		case "yn_check":

        if((fpdmLength!=12)||(fphmLength!=8)||(enolength!=15))
		 {
			 return("��������");
		 }
		break;
		case "bj_national":
          if((fpdmLength!=12)||(fphmLength!=8)||(fpmmLength!=8))
		 {
			 return("��������");
		 }
		break;
		case "cq_national":
         if((fpdmLength!=12)||(fphmLength!=8) )
		 {
			 return("��������");
		 }
		break;
		case "cq_flow":
 		if((fpdmLength!=12)||(fphmLength!=8))
		 {
			 return("��������");
		 }
		break; 
		case "cq_named":
             
		break; 
 
		case "cq_added":
         if((fpdmLength!=10)||(fphmLength!=8)||(enoLength!=15))
		 {
			 return("��������");
		 }
		break;
		case "cq_printed":
         if((fpdmLength!=12)||(fphmLength!=8))
		 {
			 return("��������");
		 }
		break;
		case "cq_quota":
         if((fpdmLength!=12)||(fphmLength!=8))
		 {
			 return("��������");
		 }
		break ;
		 
		case "gd_national":
         if((fpdmLength!=12)||(fphmLength!=8)||(enoLength!=15))
		 {
			 return("��������");
		 }
		break;
		case "gd_flow":
         if((fpdmLength!=10)||(fphmLength!=8))
		 {
			 return("��������");
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
		return("�ֻ��ź�������������");
	}
	
}

