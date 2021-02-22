(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("rest");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1080,520);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("pst", this);
            obj._setContents("<ColumnInfo><Column id=\"receiver\" type=\"STRING\" size=\"256\"/><Column id=\"contents\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","0","0","30","520",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_visible("false");
            obj.set_background("RGBA(236,135,135,0.71)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","80","0","800","10",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_visible("false");
            obj.set_background("RGBA(236,135,135,0.71)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","1050","0","30","520",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_visible("false");
            obj.set_background("RGBA(236,135,135,0.71)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","100","490","800","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_visible("false");
            obj.set_background("RGBA(236,135,135,0.71)");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","30","39","1021","451",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("");
            obj.set_border("1px solid #c1c1c1");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","231","20","388","60",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_border("1px solid black");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","8","7","118","45",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("0");
            obj.set_text("receiver : ");
            obj.set_font("italic 20px/normal \"Arial\",\"-윤고딕320\"");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00","112","7","265","44",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("1");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Div("Div00_00","232","100","575","301",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_border("1px solid black");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00","6","12","560","278",null,null,null,null,null,null,this.Div00.form.Div00_00.form);
            obj.set_taborder("0");
            this.Div00.form.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button00","713","411","92","31",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("전송");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","30","9","200","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("쪽지  쓰기");
            obj.set_background("#c1c1c1");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1080,520,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("write_postmessage.xfdl", function() {
        this.fn_callback = function(id,ErrorCode,ErrorMsg){
        	trace(id);
        	trace(ErrorMsg);
        	trace(ErrorCode);
        }

        this.Div00_Button00_onclick = function(obj,e)
        {
        		var receiver = this.Div00.form.Div00.form.Edit00.value;
        		var contents=this.Div00.form.Div00_00.form.Edit00.value;

        		 this.transaction(
                    "PMInsert"
                    ,"/PMInsert.nex"
                    ,""
                    ,""
                    ,"receiver="+receiver+" contents="+contents
                    ,"fn_callback"
                 )
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Div00.form.Button00.addEventHandler("onclick",this.Div00_Button00_onclick,this);
        };

        this.loadIncludeScript("write_postmessage.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
