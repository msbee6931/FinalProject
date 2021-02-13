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
        this.av_FrameSet = this.objApp.mainframe.VFrameSet00.HFrameSet00.VFrameSet00.FrameSet00;

        this.Form_Mdi_onload = function(obj,e)
        {
        	this.tab_menu.removeTabpage(0);
        };


        this.fn_addTab = function(pFormId, pMenuNm)
        {
        	this.tab_menu.insertTabpage(pFormId, -1, "", pMenuNm);
        	this.fn_setFrameSize("Form");
        }

        this.tab_menu_onchanged = function(obj,e)
        {
        	var sFormId = obj.tabpages[e.postindex].name;

        	this.av_FrameSet[sFormId].form.setFocus();

        };

        this.tab_menu_onextrabuttonclick = function(obj,e)
        {
        	var sFormId = obj.tabpages[e.index].name;
        	var objApp = nexacro.getApplication();
        	this.av_FrameSet[sFormId].form.close();
        	obj.removeTabpage(e.index);

        	var nRow = objApp.prf_openForm.findRow("form_id", sFormId);
        	this.objApp.prf_openForm.deleteRow(nRow);

        //	trace(objApp.prf_openForm.saveXML());
        };



        // pType : 화면이 종료될때("CLOSE", 화면이 활성화 될때:"FOCUS"(맨 앞으로 올때)
        this.fn_tabControl = function(pFormId, pType)
        {
        	var nCnt = this.tab_menu.getTabpageCount();
        	for(var i=0; i<nCnt; i++)
        	{
        		if(this.tab_menu.tabpages[i].name == pFormId)
        		{
        			if(pType == "CLOSE")
        			{
        				this.tab_menu.removeTabpage(i);
        			}
        			else if(pType == "FOCUS")
        			{
        				this.tab_menu.set_tabindex(i);
        			}
        			return;
        		}

        	}

        }

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



        //홈버튼 조작 보류
        // this.btn_home_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
        // {
        // 	var objApp = nexacro.getApplication();
        // 	objApp.mainframe.VFrameSet00.HFrameSet00.VFrameSet00.set_separatesize("30,*,0");
        // 	this.fn_setFrameSize("Home");
        // };

        this.fn_setFrameSize = function(pType)
        {
        	var objApp = nexacro.getApplication();
        	//pType : Home,Form
        	if(pType == "Home"){
        		objApp.mainframe.VFrameSet00.HFrameSet00.VFrameSet00.set_separatesize("30,*,0");
        	}else{
        		objApp.mainframe.VFrameSet00.HFrameSet00.VFrameSet00.set_separatesize("30,0,*");
        	}
        }




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
