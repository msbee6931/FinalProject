(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Work");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1080,520);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_Notice", this);
            obj._setContents("<ColumnInfo><Column id=\"n_seq\" type=\"STRING\" size=\"256\"/><Column id=\"title\" type=\"STRING\" size=\"256\"/><Column id=\"writedate\" type=\"DATE\" size=\"256\"/><Column id=\"contents\" type=\"STRING\" size=\"256\"/><Column id=\"deptcode\" type=\"STRING\" size=\"256\"/><Column id=\"view_count\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_deptcode", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">A</Col><Col id=\"name\">일반</Col></Row><Row><Col id=\"code\">B</Col><Col id=\"name\">장학</Col></Row><Row><Col id=\"code\">C</Col><Col id=\"name\">학사</Col></Row><Row><Col id=\"code\">D</Col><Col id=\"name\">취업</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnGrade","50","370","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("성적 조회");
            this.addChild(obj.name, obj);

            obj = new Button("btnCertification","170","370","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("증명서 발급");
            this.addChild(obj.name, obj);

            obj = new Button("btnClassList","50","420","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("개설강좌 조회");
            this.addChild(obj.name, obj);

            obj = new Button("Button03","170","420","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("장학금 관리");
            this.addChild(obj.name, obj);

            obj = new Button("btnMypage","50","320","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("개인정보 조회");
            this.addChild(obj.name, obj);

            obj = new Button("btnClassTime","170","320","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("시간표 조회");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","765","30","270","209",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_type("monthonly");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","760","255","290","235",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","50","276","100","44",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("즐겨찾기");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","318","10","92","44",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("공지사항");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00_00","310","80","420","306",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_binddataset("ds_Notice");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"227\"/><Column size=\"112\"/></Columns><Rows><Row size=\"30\"/></Rows><Band id=\"body\"><Cell text=\"bind:deptcode\" textAlign=\"center\" displaytype=\"combotext\" combodataset=\"ds_deptcode\" combocodecol=\"code\" combodatacol=\"name\"/><Cell col=\"1\" text=\"bind:title\" cursor=\"pointer\"/><Cell col=\"2\" text=\"bind:writedate\" textAlign=\"center\" calendardateformat=\"yyyy-MM-dd \" displaytype=\"calendarcontrol\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnAll","310","51","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("전체");
            this.addChild(obj.name, obj);

            obj = new Button("btnNormal","370","51","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("일반");
            this.addChild(obj.name, obj);

            obj = new Button("btnAcademic","430","51","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("학사");
            this.addChild(obj.name, obj);

            obj = new Button("btnScholar","490","51","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("장학");
            this.addChild(obj.name, obj);

            obj = new Button("btnEmployment","550","51","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("취업");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1080,520,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Main.xfdl", function() {
        this.objApp = nexacro.getApplication();

        this.fn_openForm = function(sMenuId,sMenuNm,sFormUrl)
        {
        	this.objApp.mainframe.VFrameSet00.HFrameSet00.VFrameSet00.ChildFrame00.form.fn_setFrameSize("Form");

        	//화면 오픈 스크립트
        	if(sFormUrl.length <= 0)	return;
        	var av_FrameSet = this.objApp.mainframe.VFrameSet00.HFrameSet00.VFrameSet00.FrameSet00;
        	var nWidth  = av_FrameSet.getOffsetWidth();
        	var nHeight = av_FrameSet.getOffsetHeight();

        	var sFormId = "form_" + sMenuId;	// FORM_1010...
        	var arrObj = av_FrameSet.all;
        	for(var i=0; i<arrObj.length; i++)
        	{
        		if(arrObj[i].name == sFormId)
        		{
        			arrObj[i].setFocus();
        			//mid 탭 일치시키기
        			this.objApp.mainframe.VFrameSet00.HFrameSet00.VFrameSet00.ChildFrame00.form.fn_tabChange(sFormId);
        			return;
        		}
        	}

        	var objChildFrame = new ChildFrame();
        	objChildFrame.init(sFormId, 0, 0, nWidth, nHeight);

        	av_FrameSet.addChild(sFormId, objChildFrame);
        	objChildFrame.set_resizable(true);
        	objChildFrame.set_openstatus("maximize");
        	objChildFrame.set_showtitlebar(false);
        	objChildFrame.set_titletext(sMenuNm);

        	var oParam = {form_id : sFormId,
        				  menu_id : sMenuId,
        				  menu_name : sMenuNm,
        				  form_url : sFormUrl}

        	objChildFrame.khParam = oParam;
        	objChildFrame.set_formurl(sFormUrl);
        	objChildFrame.show();

        	//새로 생성
        	var nRow = this.objApp.std_openForm.addRow();
        	this.objApp.std_openForm.setColumn(nRow, "form_id"  , sFormId);
        	this.objApp.std_openForm.setColumn(nRow, "menu_id"  , sMenuId);
        	this.objApp.std_openForm.setColumn(nRow, "menu_name", sMenuNm);
        	this.objApp.std_openForm.setColumn(nRow, "form_url" , sFormUrl);
        	trace(this.objApp.std_openForm.saveXML());

        	this.objApp.mainframe.VFrameSet00.HFrameSet00.VFrameSet00.ChildFrame00.form.fn_addTab(sFormId, sMenuNm);
        }
        this.btnMypage_onclick = function(obj,e)
        {

        };

        this.btnClassTime_onclick = function(obj,e)
        {
        	this.objApp.std_menu.filter("menu_id.substring(0,2) == '" + 10 + "'");
        	this.objApp.mainframe.VFrameSet00.HFrameSet00.VFrameSet00.set_separatesize("30,0,*");
        	this.fn_openForm("1030","시간표 조회","stdWork::timeSchedule.xfdl"); //form 오픈 함수
        };


        this.btnClassList_onclick = function(obj,e)
        {
        	this.objApp.std_menu.filter("menu_id.substring(0,2) == '" + 20 + "'");
        	this.objApp.mainframe.VFrameSet00.HFrameSet00.VFrameSet00.set_separatesize("30,0,*");
        	this.fn_openForm("2040","개설강좌 조회","prfWork::classList.xfdl"); //form 오픈 함수
        };

        this.btnGrade_onclick = function(obj,e)
        {
        	this.objApp.std_menu.filter("menu_id.substring(0,2) == '" + 10 + "'");
        	this.objApp.mainframe.VFrameSet00.HFrameSet00.VFrameSet00.set_separatesize("30,0,*");
        	this.fn_openForm("1020","성적 조회","stdWork::readGrade.xfdl"); //form 오픈 함수
        };

        this.btnCertification_onclick = function(obj,e)
        {
        	this.objApp.std_menu.filter("menu_id.substring(0,2) == '" + 30 + "'");
        	this.objApp.mainframe.VFrameSet00.HFrameSet00.VFrameSet00.set_separatesize("30,0,*");
        	this.fn_openForm("3010","재학 증명서","stdWork::enrollment.xfdl"); //form 오픈 함수
        };






        this.Form_Work_onload = function(obj,e)
        {
        	this.transaction(
        				"notice"
        				,"/noticeList.notice"
        				,""
        				,"ds_Notice=out_ds"
        				,""
        				,"fn_callback_notice"
        			);
        };
        this.fn_callback_notice=function(){
        	this.ds_Notice.filter("currow < 10");
        }


        this.btnAll_onclick = function(obj,e)
        {
        	this.ds_Notice.filter("currow < 10");
        };

        this.btnNormal_onclick = function(obj,e)
        {
        	this.ds_Notice.filter("deptcode == 'A'&&currow < 10");
        };

        this.btnAcademic_onclick = function(obj,e)
        {
        	this.ds_Notice.filter("deptcode == 'B'&&currow < 10");
        };

        this.btnScholar_onclick = function(obj,e)
        {
        	this.ds_Notice.filter("deptcode == 'C'&&currow < 10");
        };

        this.btnEmployment_onclick = function(obj,e)
        {
        	this.ds_Notice.filter("deptcode == 'D'&&currow < 10");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Work_onload,this);
            this.btnGrade.addEventHandler("onclick",this.btnGrade_onclick,this);
            this.btnCertification.addEventHandler("onclick",this.btnCertification_onclick,this);
            this.btnClassList.addEventHandler("onclick",this.btnClassList_onclick,this);
            this.btnMypage.addEventHandler("onclick",this.btnMypage_onclick,this);
            this.btnClassTime.addEventHandler("onclick",this.btnClassTime_onclick,this);
            this.btnAll.addEventHandler("onclick",this.btnAll_onclick,this);
            this.btnNormal.addEventHandler("onclick",this.btnNormal_onclick,this);
            this.btnAcademic.addEventHandler("onclick",this.btnAcademic_onclick,this);
            this.btnScholar.addEventHandler("onclick",this.btnScholar_onclick,this);
            this.btnEmployment.addEventHandler("onclick",this.btnEmployment_onclick,this);
        };

        this.loadIncludeScript("Form_Main.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
