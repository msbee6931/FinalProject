(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("rankStandard");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(210,160);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static03","0","8","105","35",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("등급(최대 %)");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_line");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00","104","8","105","35",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("최대 인원");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_line");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_01","0","42","105","35",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("A등급(30%)");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_default");
            this.addChild(obj.name, obj);

            obj = new Static("sta_A","104","42","105","35",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("0");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_line");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_02","0","76","105","35",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("B등급(40%)");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_default");
            this.addChild(obj.name, obj);

            obj = new Static("sta_B","104","76","105","35",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("0");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_line");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_03","0","110","105","35",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("C등급 (30%)");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_default");
            this.addChild(obj.name, obj);

            obj = new Static("sta_C","104","110","105","35",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("0");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_line");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",210,160,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.sta_B.addEventHandler("onclick",this.div_rank_sta_B_onclick,this);
        };

        this.loadIncludeScript("rankStandard.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
