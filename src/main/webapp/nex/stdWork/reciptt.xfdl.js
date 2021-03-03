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

            obj = new Div("Div00","30","10",null,null,"29","30",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("");
            obj.set_cssclass("div_line");
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

            obj = new WebBrowser("WebBrowser00","142","1","1187",null,null,"37",null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00","24","19","100","25",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("pdf 저장");
            obj.set_cssclass("btn_pdf");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","80","122","868","235",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("해당 내역이 없습니다.");
            obj.set_font("bold 28px/normal \"Malgun Gothic\"");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

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
        this.registerScript("reciptt.xfdl", function() {
        	this.objApp = nexacro.getApplication();
        	var s =this.objApp.gds_students.getColumn(0,'s_seq');
        	this.confirm="";

        this.absence_onload = function(obj,e)
        {
        	 this.transaction(
                    "TuitionConfirm"
                    ,"/tuition/TuitinConfirm.nex"
                    ,""
                    ,""
                    ,"std_code="+s
                    ,"fn_callback"
                 )
        };

        this.fn_callback = function(id,ErrorCode,ErrorMsg){
        	trace(id);
        	trace(ErrorMsg);
        	trace(ErrorCode);
        	trace("confirm : "+this.confirm);
        	if(this.confirm==s){
        		this.Div00.form.WebBrowser00.set_url("http://15.165.196.249/certification/paymentp?seq="+s);
        	}else{
        		alert("고지 내역이 없습니다.");
        		this.Div00.form.Button00.set_visible(false);
        		this.Div00.form.WebBrowser00.set_visible(false);
        		this.Div00.form.Static00.set_visible(true);
        	}

        }



        this.Div00_Button00_onclick = function(obj,e)
        {
        	location.href="https://pdfmyurl.com/api?license=pYboxEqG18O3&url=http://15.165.196.249/certification/paymentp?seq="+s;
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.absence_onload,this);
            this.Div00.form.Button00.addEventHandler("onclick",this.Div00_Button00_onclick,this);
        };

        this.loadIncludeScript("reciptt.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
