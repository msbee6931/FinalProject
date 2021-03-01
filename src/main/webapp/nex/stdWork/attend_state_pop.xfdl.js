(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("attend_state_pop");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(300,200);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("btn_ok","190","163","100","25",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("확인");
            obj.set_cssclass("btn_default");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_state","10","9","280","147",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.set_cssclass("edt_default");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",300,200,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("attend_state_pop.xfdl", function() {

        this.attend_state_pop_onload = function(obj,e)
        {	//교수가 입력한 결석에 대한 메모
        	var aState = this.parent.aState;
        	//값을 입력했을때
        	if(aState != null && aState != "")
        	{
        		this.edt_state.set_value(aState);
        	} else
        	{
        		//입력하지 않았을 경우
        		this.edt_state.set_value("교수님께 문의하세요");
        	}

        };

        this.btn_ok_onclick = function(obj,e)
        {
        	this.close();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.attend_state_pop_onload,this);
            this.btn_ok.addEventHandler("onclick",this.btn_ok_onclick,this);
        };

        this.loadIncludeScript("attend_state_pop.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
