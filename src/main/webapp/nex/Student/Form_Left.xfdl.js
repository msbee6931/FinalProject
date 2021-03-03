(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Left");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(200,550);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grdTree", this);
            obj._setContents("<ColumnInfo><Column id=\"data\" type=\"STRING\" size=\"256\"/><Column id=\"level\" type=\"STRING\" size=\"256\"/><Column id=\"url\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"data\">Template</Col><Col id=\"level\">0</Col></Row><Row><Col id=\"data\">ArrangementFit01</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"data\">Template01</Col><Col id=\"level\">1</Col><Col id=\"url\">Work::form1.xfdl</Col></Row><Row><Col id=\"data\">Template02</Col><Col id=\"level\">1</Col><Col id=\"url\">Work::form2.xfdl</Col></Row><Row><Col id=\"data\">Template03</Col><Col id=\"level\">1</Col><Col id=\"url\">Work::form3.xfdl</Col></Row><Row><Col id=\"data\">Template04</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"data\">StyleProperty</Col><Col id=\"level\">0</Col></Row><Row><Col id=\"data\">Style01</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"data\">Style02</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"data\">Style03</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"data\">Style04</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"data\">Style05</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"data\">Style06</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"data\">Style07</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"data\">Style08</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"data\">CompGuide</Col><Col id=\"level\">0</Col></Row><Row><Col id=\"data\">CompGuide01</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"data\">CompGuide02</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"data\">CompGuide03</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"data\">CompGuide04</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"data\">CompGuide05</Col><Col id=\"level\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","0","15","200",null,null,"0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseimage("false");
            obj.set_treeuseline("false");
            obj.set_binddataset("std_menu");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/></Columns><Rows><Row size=\"30\"/></Rows><Band id=\"body\"><Cell text=\"bind:menu_name\" displaytype=\"treeitemcontrol\" treelevel=\"bind:menu_level\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta_bgr","0","0","200","15",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("#0044c9");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",200,550,this,function(p){});
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Left.xfdl", function() {
        this.objApp = nexacro.getApplication();

        this.Grid00_oncelldblclick = function(obj,e)
        {
        	this.fn_openForm2(obj, e);
        };

        this.fn_openForm2 = function(obj, e)
        {
        	this.objApp.mainframe.VFrameSet00.HFrameSet00.VFrameSet00.ChildFrame00.form.fn_setFrameSize("Form");
        	var objDs = obj.getBindDataset();	//Grid 바인딩되어있는 데이터셋
        	var sMenuId  = objDs.getColumn(e.row, "menu_id");
        	var sMenuNm  = objDs.getColumn(e.row, "menu_name");
        	var sFormUrl = objDs.getColumn(e.row, "form_url");
        	var sTrPath  = obj.getTreePath(e.row); 	//풀 메뉴 트리구조 가져올 때 쓸것
        	sTrPath = nexacro.replaceAll(sTrPath, ".", ">");

        	var rest = this.objApp.gds_students.getColumn(0,"rest");
        	var regist = this.objApp.gds_admin.getColumn(0,"regist");
        	var test = this.objApp.gds_admin.getColumn(0,"test");
        	if(sMenuId == '2010' || sMenuId == '2020'){
        		if(rest == 'Y'){
        			alert("휴학 중인 상태입니다.\n수강신청이 불가능합니다");
        			if(this.objApp.std_openForm.getRowCount() == 0){
        				this.objApp.mainframe.VFrameSet00.HFrameSet00.VFrameSet00.set_separatesize("30,*,0");
        			}
        			return;
        		}else if(sMenuId == '2010' && regist !='open'){
        			alert("수강신청 기간이 아닙니다. 관리자에게 문의해주세요");
        			if(this.objApp.std_openForm.getRowCount() == 0){
        				this.objApp.mainframe.VFrameSet00.HFrameSet00.VFrameSet00.set_separatesize("30,*,0");
        			}
        			return;
        		}else if(sMenuId == '2020'&& test !='open'){
        			alert("예비 수강신청 기간이 아닙니다. 관리자에게 문의해주세요");
        			if(this.objApp.std_openForm.getRowCount() == 0){
        				this.objApp.mainframe.VFrameSet00.HFrameSet00.VFrameSet00.set_separatesize("30,*,0");
        			}
        			return;
        		}
        	}
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
        				  form_url : sFormUrl,
        				  tree_path : sTrPath}

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


        this.Form_Left_onload = function(obj,e)
        {
        	this.transaction(
        				"admList"
        				,"/admList.log"
        				,""
        				,"gds_admin=adm_ds"
        				,""
        				,"fn_callback"
        			);
        };
        this.fn_callback = function(sId,errCd,errMsg){
        	if (errCd < 0) {
        		trace("sId["+sId+"]: Error["+errCd+"]:"+errMsg);
        	}
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Left_onload,this);
            this.Grid00.addEventHandler("oncelldblclick",this.Grid00_oncelldblclick,this);
        };

        this.loadIncludeScript("Form_Left.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
