(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("EvaluationMethod");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(680,170);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_class", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"classPart\" type=\"STRING\" size=\"256\"/><Column id=\"className\" type=\"STRING\" size=\"256\"/><Column id=\"classSeq\" type=\"INT\" size=\"256\"/><Column id=\"classPoint\" type=\"STRING\" size=\"256\"/><Column id=\"proCode\" type=\"STRING\" size=\"256\"/><Column id=\"proName\" type=\"STRING\" size=\"256\"/><Column id=\"dept\" type=\"STRING\" size=\"256\"/><Column id=\"classTime\" type=\"STRING\" size=\"256\"/><Column id=\"classRoom\" type=\"STRING\" size=\"256\"/><Column id=\"limit\" type=\"STRING\" size=\"256\"/><Column id=\"grade\" type=\"STRING\" size=\"256\"/><Column id=\"classGoal\" type=\"STRING\" size=\"256\"/><Column id=\"classMethod\" type=\"STRING\" size=\"256\"/><Column id=\"classEvaluation\" type=\"STRING\" size=\"256\"/><Column id=\"classReferences\" type=\"STRING\" size=\"256\"/><Column id=\"reqState\" type=\"STRING\" size=\"256\"/><Column id=\"rejectMsg\" type=\"STRING\" size=\"256\"/><Column id=\"reg_date\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta_sum","575","40","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_border("1px solid gray");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sum2","575","10","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("합계");
            obj.set_border("1px solid gray");
            obj.set_background("whitesmoke");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("label_fin","475","10","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("기말고사");
            obj.set_border("1px solid gray");
            obj.set_background("whitesmoke");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("label_task","375","10","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("과제");
            obj.set_border("1px solid gray");
            obj.set_background("whitesmoke");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("label_otest","275","10","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("수시");
            obj.set_border("1px solid gray");
            obj.set_background("whitesmoke");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("label_mid","175","10","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("중간고사");
            obj.set_border("1px solid gray");
            obj.set_background("whitesmoke");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("label_attend","75","10","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("출석");
            obj.set_border("1px solid gray");
            obj.set_background("whitesmoke");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mask_attend","75","70","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_maskchar("###");
            obj.set_textAlign("center");
            obj.set_format("+0");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mask_mid","175","70","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_maskchar("###");
            obj.set_textAlign("center");
            obj.set_format("+0");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mask_otest","275","70","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_maskchar("###");
            obj.set_textAlign("center");
            obj.set_format("+0");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mask_task","375","70","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_textAlign("center");
            obj.set_format("+0");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mask_fin","475","70","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_textAlign("center");
            obj.set_format("+0");
            this.addChild(obj.name, obj);

            obj = new Static("sta_sumAll","575","70","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_border("1px solid gray");
            obj.set_textAlign("center");
            obj.set_text("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_02","5","40","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("기존 방식");
            obj.set_padding("0px 0px 0px 5px");
            obj.set_border("1px solid black");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_02_00","5","70","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("변경 방식");
            obj.set_padding("0px 0px 0px 5px");
            obj.set_border("1px solid black");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_02_01","5","10","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("");
            obj.set_padding("0px 0px 0px 5px");
            obj.set_border("1px solid black");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta_fin","475","40","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_border("1px solid gray");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta_task","375","40","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_border("1px solid gray");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta_otest","275","40","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_border("1px solid gray");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta_mid","175","40","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_border("1px solid gray");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta_attend","75","40","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_border("1px solid gray");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave","485","115","90","35",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose","580","115","90","35",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",680,170,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("EvaluationMethod.xfdl", function() {

        this.EvaluationMethod_onload = function(obj,e)
        {
        	this.transaction(
        				"classListSeq"
        				,"/classListSeq.nex"
        				,""
        				,"ds_class=out_ds"
        				,"classSeq="+this.parent.classCode
<<<<<<< HEAD
        				,"fn_callback_classInfo"
        			);
        };
        this.fn_callback_classInfo=function(){
=======
        				,"fn_callback"
        			);
        };
        this.fn_callback=function(sId,errCd,errMsg){
        	if (errCd < 0) {
        		trace("sId["+sId+"]: Error["+errCd+"]:"+errMsg);
        	}
        	if(sId == "classListSeq"){
>>>>>>> 16033e5541c84931c834d0d198cd703946ae2ecf
        	var eval = this.ds_class.getColumn(0,"classEvaluation").split("|");
        	this.sta_attend.set_text(eval[0]);
        	this.sta_mid.set_text(eval[1]);
        	this.sta_otest.set_text(eval[2]);
        	this.sta_task.set_text(eval[3]);
        	this.sta_fin.set_text(eval[4]);
        	this.sta_sum.set_text(parseInt(eval[0])+parseInt(eval[1])+parseInt(eval[2])+parseInt(eval[3])+parseInt(eval[4])+"%");
<<<<<<< HEAD
=======
        	}
>>>>>>> 16033e5541c84931c834d0d198cd703946ae2ecf
        }
        this.btnClose_onclick = function(obj,e)
        {
        	this.close();
        };

        this.btnSave_onclick = function(obj,e)
        {
        	if(this.sta_sumAll.text != "100%"){
        		alert("합계가 100%가 아닙니다");
        	}else{
        		this.ds_class.clearData();
        		var attend = this.mask_attend.text;
        		var mid = this.mask_mid.text;
        		var otest = this.mask_otest.text;
        		var task = this.mask_task.text;
        		var fin = this.mask_fin.text;
        		var eval = attend +"|"+mid+"|"+otest+"|"+task+"|"+fin+"|"+this.parent.classCode;
        		var addRow = this.ds_class.addRow();
        		this.ds_class.setColumn(addRow,"classEvaluation",eval);
        		this.ds_class.setColumn(addRow,"classSeq",this.parent.classCode);

        		this.transaction(
        					"classEvalUpd"
        					,"/classEvalUpd.nex"
        					,"in_ds=ds_class:U"
        					,""
        					,""
        					,"fn_callback"
        				);

        		this.close(eval);
        	}
        };

        this.grade_canchange = function(obj,e)
        {
        	var attend = this.mask_attend.text;
        	var mid = this.mask_mid.text;
        	var otest = this.mask_otest.text;
        	var task = this.mask_task.text;
        	var fin = this.mask_fin.text;

        	if(attend == ""){attend = 0;}else if(attend >100){alert("0~100까지 입력이 가능합니다");this.mask_attend.set_value(100);}
        	if(mid == ""){mid = 0;}else if(mid >100){alert("0~100까지 입력이 가능합니다");this.mask_mid.set_value(100);}
        	if(otest == ""){otest = 0;}else if(otest >100){alert("0~100까지 입력이 가능합니다");this.mask_otest.set_value(100);}
        	if(task == ""){task = 0;}else if(task >100){alert("0~100까지 입력이 가능합니다");this.mask_task.set_value(100);}
        	if(fin == ""){fin = 0;}else if(fin >100){alert("0~100까지 입력이 가능합니다");this.mask_fin.set_value(100);}

        	this.sta_sumAll.set_text(parseInt(attend) + parseInt(mid) + parseInt(otest) + parseInt(task) + parseInt(fin) +"%");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.EvaluationMethod_onload,this);
            this.sum2.addEventHandler("onclick",this.Tab00_Tabpage1_Static00_02_onclick,this);
            this.label_fin.addEventHandler("onclick",this.Tab00_Tabpage1_Static00_02_onclick,this);
            this.label_task.addEventHandler("onclick",this.Tab00_Tabpage1_Static00_02_onclick,this);
            this.label_otest.addEventHandler("onclick",this.Tab00_Tabpage1_Static00_02_onclick,this);
            this.label_mid.addEventHandler("onclick",this.Tab00_Tabpage1_Static00_02_onclick,this);
            this.label_attend.addEventHandler("onclick",this.Tab00_Tabpage1_Static00_02_onclick,this);
            this.mask_attend.addEventHandler("canchange",this.grade_canchange,this);
            this.mask_mid.addEventHandler("canchange",this.grade_canchange,this);
            this.mask_otest.addEventHandler("canchange",this.grade_canchange,this);
            this.mask_task.addEventHandler("canchange",this.grade_canchange,this);
            this.mask_fin.addEventHandler("canchange",this.grade_canchange,this);
            this.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
        };

        this.loadIncludeScript("EvaluationMethod.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
