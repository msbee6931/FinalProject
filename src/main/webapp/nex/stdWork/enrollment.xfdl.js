(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("absence");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1080,520);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("enrollment", this);
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"code\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"id\">name</Col><Col id=\"code\">name</Col></Row><Row><Col id=\"id\">birth</Col><Col id=\"code\">birth</Col></Row><Row/><Row><Col id=\"id\">s_seq</Col><Col id=\"code\">s_seq</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","0","0","29","520",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_visible("false");
            obj.set_background("RGBA(236,135,135,0.71)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","1051","0","29","520",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_visible("false");
            obj.set_background("RGBA(236,135,135,0.71)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","80","0","800","10",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_visible("false");
            obj.set_background("RGBA(236,135,135,0.71)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","100","490","800","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_visible("false");
            obj.set_background("RGBA(236,135,135,0.71)");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","30","38","1021","452",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("");
            obj.set_border("1px solid #c1c1c1");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_01","379","223","150","37",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_border("1px solid white");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_02","379","181","150","37",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_border("1px solid white");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_03","393","256","150","37",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_border("1px solid white");
            this.Div00.addChild(obj.name, obj);

            obj = new WebBrowser("WebBrowser00","112","1","736","440",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00","24","19","71","31",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("pdf 저장");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","30","9","200","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("재학 증명서");
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
        this.registerScript("enrollment.xfdl", function() {

        this.absence_onload = function(obj,e)
        {
        	this.Div00.form.WebBrowser00.set_url("http://15.165.196.249/certification/enrollment")
        };

        this.Div00_Button00_onclick = function(obj,e)
        {
        	location.href="https://pdfmyurl.com/api?license=eVNJ64pvSbol&url=http://15.165.196.249/certification/enrollment";
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.absence_onload,this);
            this.Div00.form.Button00.addEventHandler("onclick",this.Div00_Button00_onclick,this);
        };

        this.loadIncludeScript("enrollment.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
