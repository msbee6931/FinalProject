(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Mdi");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1080,30);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("adm_form", this);
            obj._setContents("<ColumnInfo><Column id=\"form_id\" type=\"STRING\" size=\"256\"/><Column id=\"menu_id\" type=\"STRING\" size=\"256\"/><Column id=\"menu_name\" type=\"STRING\" size=\"256\"/><Column id=\"form_url\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Tab("tab_menu","0","0",null,"30","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_showextrabutton("true");
            obj.set_tabbuttonheight("30");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.tab_menu);
            obj.set_text("Tabpage2");
            this.tab_menu.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1080,30,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Mdi.xfdl", function() {
        this.objApp = nexacro.getApplication();
        this.av_FrameSet="";

        this.Form_Mdi_onload = function(obj,e)
        {
        	this.tab_menu.removeTabpage(0);
        };


        this.fn_addTab = function(formId, menuName)
        {
        	this.tab_menu.insertTabpage(formId, -1,"",menuName);
        }


        this.tab_menu_onchanged = function(obj,e)
        {
        	var formId = obj.tabpages[e.postindex].name;

        	//화면 띄울 프레임 지정
        	av_FrameSet = this.objApp.mainframe.VFrameSet00.HFrameSet00.VFrameSet00.FrameSet00;
        	av_FrameSet[formId].form.setFocus();

        };

        //폼 바뀔때 탭 체인지 호출함수
        this.fn_tabChange = function (formId) {
        	var objTab = this.tab_menu;
        	var tabCount = objTab.getTabpageCount();
        	for(var i=0; i<tabCount; i++)
        	{
        		var sTabName = objTab.tabpages[i].name;
        		if( sTabName == formId)
        		{
        			objTab.set_tabindex(i);
        			return;
        		}
        	}

        }


        this.tab_menu_onextrabuttonclick = function(obj,e)
        {
        	var formId = obj.tabpages[e.index].name;
        	this.av_FrameSet = this.objApp.mainframe.VFrameSet00.HFrameSet00.VFrameSet00.FrameSet00;
        	this.av_FrameSet[formId].form.close();
        	this.tab_menu.removeTabpage(e.index);
        	//index 는 정해진 값이라서 index 사용

        	var nRow = this.adm_form.findRow("form_id",formId);
        	this.adm_form.deleteRow(nRow);
        	/*trace(this.adm_form.saveXML());*/
        	// Left에서 추가시켰던 row를 다시 지워주는 행위

        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Mdi_onload,this);
            this.tab_menu.addEventHandler("onchanged",this.tab_menu_onchanged,this);
            this.tab_menu.addEventHandler("onextrabuttonclick",this.tab_menu_onextrabuttonclick,this);
        };

        this.loadIncludeScript("Form_Mdi.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
