(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_login");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_students", this);
            obj._setContents("<ColumnInfo><Column id=\"s_seq\" type=\"INT\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"age\" type=\"STRING\" size=\"256\"/><Column id=\"email\" type=\"STRING\" size=\"256\"/><Column id=\"contact\" type=\"STRING\" size=\"256\"/><Column id=\"adress\" type=\"STRING\" size=\"256\"/><Column id=\"scholarship\" type=\"STRING\" size=\"256\"/><Column id=\"rest\" type=\"STRING\" size=\"256\"/><Column id=\"grade\" type=\"STRING\" size=\"256\"/><Column id=\"birth\" type=\"STRING\" size=\"256\"/><Column id=\"pw\" type=\"STRING\" size=\"256\"/><Column id=\"gender\" type=\"STRING\" size=\"256\"/><Column id=\"deptCode\" type=\"STRING\" size=\"256\"/><Column id=\"colCode\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_professor", this);
            obj._setContents("<ColumnInfo><Column id=\"p_seq\" type=\"INT\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"age\" type=\"STRING\" size=\"256\"/><Column id=\"email\" type=\"STRING\" size=\"256\"/><Column id=\"contact\" type=\"STRING\" size=\"256\"/><Column id=\"address\" type=\"STRING\" size=\"256\"/><Column id=\"lecture\" type=\"STRING\" size=\"256\"/><Column id=\"pw\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_admin", this);
            obj._setContents("<ColumnInfo><Column id=\"a_seq\" type=\"STRING\" size=\"256\"/><Column id=\"pw\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize


            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_login.xfdl", function() {
        this.objApp = nexacro.getApplication();

        this.Form_login_onload = function(obj,e)
        {
        	this.transaction(
        				"LoginInfo"
        				,"/reqLogigInfo.log"
        				,""
        				,"gds_students=std_ds gds_professor=pro_ds gds_admin=adm_ds"
        				,""
        				,"fn_callback_login"
        			);
        };
        this.fn_callback_login=function(sId,errCd,errMsg){
        	 if (errCd < 0) {
        		trace("Error["+errCd+"]:"+errMsg);
             }
        	if(sId == "LoginInfo"){
        	this.objApp.mainframe.VFrameSet00.HFrameSet00.VFrameSet00.ChildFrame00.set_formurl("Student::Form_Mdi.xfdl");
        	this.objApp.mainframe.VFrameSet00.BottomFrame.set_formurl("Student::Form_Bottom.xfdl");
        	if(this.objApp.gds_students.getRowCount() > 0 ){
        		this.objApp.mainframe.VFrameSet00.TopFrame.set_formurl("Student::Form_Top.xfdl");
        		this.objApp.mainframe.VFrameSet00.HFrameSet00.LeftFrame.set_formurl("Student::Form_Left.xfdl");
        		this.objApp.mainframe.VFrameSet00.HFrameSet00.VFrameSet00.Mainform.set_formurl("Student::Form_Main.xfdl");
        	}else if(this.objApp.gds_professor.getRowCount() >0 ){
        		this.objApp.mainframe.VFrameSet00.TopFrame.set_formurl("Professor::Form_Top.xfdl");
        		this.objApp.mainframe.VFrameSet00.HFrameSet00.LeftFrame.set_formurl("Professor::Form_Left.xfdl");
        		this.objApp.mainframe.VFrameSet00.HFrameSet00.VFrameSet00.Mainform.set_formurl("Professor::Form_Main.xfdl");
        	}else if(this.objApp.gds_admin.getRowCount() > 0 ){
        		this.objApp.mainframe.VFrameSet00.TopFrame.set_formurl("Admin::Form_Top.xfdl");
        		this.objApp.mainframe.VFrameSet00.HFrameSet00.LeftFrame.set_formurl("Admin::Form_Left.xfdl");
        		this.objApp.mainframe.VFrameSet00.HFrameSet00.VFrameSet00.ChildFrame00.set_formurl("Admin::Form_Mdi.xfdl");
        		this.objApp.mainframe.VFrameSet00.HFrameSet00.VFrameSet00.Mainform.set_formurl("Admin::Form_Main.xfdl");
        	}
        		this.objApp.mainframe.VFrameSet00.set_separatesize("0,50,*,60");
        	}
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_login_onload,this);
        };

        this.loadIncludeScript("Form_login.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
