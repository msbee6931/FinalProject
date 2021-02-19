(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("passFailStandard");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(210,160);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00","0","20","105","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("기준");
            obj.set_border("1px solid black");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","105","20","105","40",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("점수(총점)");
            obj.set_border("1px solid black");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta_pass","0","60","105","40",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("PASS");
            obj.set_border("1px solid black");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_score","105","60","105","40",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_textAlign("center");
            obj.set_text("80");
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
        this.registerScript("passFailStandard.xfdl", function() {

        var objApp = nexacro.getApplication();

        this.edt_score_onchanged = function(obj,e)
        {
        	for(var i=0; i<objApp.ds_grades.getRowCount(); i++){
        		var total = objApp.ds_grades.getColumn(i,"total");
        		trace(this.edt_score.value);
        		if(total >= this.edt_score.value){
        			objApp.ds_grades.setColumn(i,"grade","P");
        		}else{
        			objApp.ds_grades.setColumn(i,"grade","F");
        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.passFailStandard_onload,this);
            this.edt_score.addEventHandler("onchanged",this.edt_score_onchanged,this);
        };

        this.loadIncludeScript("passFailStandard.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
