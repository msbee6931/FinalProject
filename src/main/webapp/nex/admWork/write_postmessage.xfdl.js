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


            obj = new Dataset("professor", this);
            obj._setContents("<ColumnInfo><Column id=\"p_seq\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"email\" type=\"STRING\" size=\"256\"/><Column id=\"contact\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Div("Div00","30","10",null,null,"29","30",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("");
            obj.set_cssclass("div_line");
            this.addChild(obj.name, obj);

            obj = new Div("Div00",null,"11","498","60","17",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","8","22","118","25",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("0");
            obj.set_text("receiver ");
            obj.set_cssclass("sta_default");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00","126","22","372","25",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("1");
            obj.set_cssclass("edt_default");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Div("Div00_00",null,"120","500",null,"7","78",null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_cssclass("div_line");
            this.Div00.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","12","9","480",null,null,"17",null,null,null,null,this.Div00.form.Div00_00.form);
            obj.set_taborder("0");
            obj.set_cssclass("txt_default");
            this.Div00.form.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button00",null,null,"92","25","7","33",null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("전송");
            obj.set_cssclass("btn_default");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("Grid00","9","22",null,null,"520","77",null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_binddataset("professor");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_default");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"132\"/><Column size=\"96\"/><Column size=\"132\"/><Column size=\"140\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"id\"/><Cell col=\"1\" text=\"name\"/><Cell col=\"2\" text=\"email\"/><Cell col=\"3\" text=\"contact\"/></Band><Band id=\"body\"><Cell text=\"bind:p_seq\" textAlign=\"center\" displaytype=\"text\"/><Cell col=\"1\" text=\"bind:name\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:email\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:contact\" textAlign=\"center\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00",null,"90","100","29","407",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("Send");
            obj.set_cssclass("sta_default");
            this.Div00.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1080,520,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Div00.form.Div00.form.Edit00","value","professor","p_seq");
            this.addChild(obj.name, obj);
            obj.bind();
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
        		var contents=nexacro.wrapQuote(this.Div00.form.Div00_00.form.TextArea00.value);

        		 this.transaction(
                    "PMInsert"
                    ,"/PMInsert.nex"
                    ,""
                    ,""
                    ,"receiver="+receiver+" contents="+contents
                    ,"fn_callback"
                 )

        		 alert("전송되었습니다.");
        		 this.Div00.form.Div00.form.Edit00.set_value("");
        		 this.Div00.form.Div00_00.form.TextArea00.set_value("");
        };



        this.rest_onload = function(obj,e)
        {
        	this.transaction(
                    "ListProfessor"
                    ,"/ListProfessor.nex"
                    ,""
                    ,"professor=out_ds"
                    ,""
                    ,"fn_callback"
                 )
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.rest_onload,this);
            this.Div00.form.Button00.addEventHandler("onclick",this.Div00_Button00_onclick,this);
        };

        this.loadIncludeScript("write_postmessage.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
