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
            obj = new Dataset("rlist_ds", this);
            obj._setContents("<ColumnInfo><Column id=\"seq\" type=\"STRING\" size=\"256\"/><Column id=\"std_code\" type=\"STRING\" size=\"256\"/><Column id=\"writer\" type=\"STRING\" size=\"256\"/><Column id=\"title\" type=\"STRING\" size=\"256\"/><Column id=\"contents\" type=\"STRING\" size=\"256\"/><Column id=\"writeDate\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj.set_text("Div00");
            obj.set_border("1px solid #c1c1c1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_searchEtc","336","21","25","25",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_background("");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo00","30","21","120","25",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dept_ds");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            obj.set_text("Combo00");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00","198","21","130","25",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("Grid00","32","68","530","350",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_binddataset("rlist_ds");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"34\"/><Column size=\"80\"/><Column size=\"75\"/><Column size=\"198\"/><Column size=\"80\"/><Column size=\"53\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"학번\"/><Cell col=\"2\" text=\"이름\"/><Cell col=\"3\" text=\"제목\"/><Cell col=\"4\" text=\"작성날짜\"/><Cell col=\"5\" text=\"처리여부\"/></Band><Band id=\"body\"><Cell text=\"bind:seq\"/><Cell col=\"1\" text=\"bind:std_code\"/><Cell col=\"2\" text=\"bind:writer\"/><Cell col=\"3\" text=\"bind:title\"/><Cell col=\"4\" text=\"bind:writeDate\"/><Cell col=\"5\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_searchDept","154","21","25","25",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_background("");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div00","587","68","400","350",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("Div00");
            obj.set_border("1px solid #c1c1c1");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","13","41","48","30",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("0");
            obj.set_text("학번");
            obj.set_background("#c1c1c1");
            obj.set_border("1px solid #000000");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00","60","42","123","30",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00","182","41","57","30",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("2");
            obj.set_text("이름");
            obj.set_background("#c1c1c1");
            obj.set_border("1px solid #000000");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","238","42","138","30",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("3");
            obj.set_readonly("true");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_01","13","70","48","30",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("4");
            obj.set_text("제목");
            obj.set_background("#c1c1c1");
            obj.set_border("1px solid #000000");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01","61","70","318","30",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("5");
            obj.set_readonly("true");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00","13","99","366","211",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("6");
            obj.set_readonly("true");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","182","12","57","30",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("7");
            obj.set_text("작성날짜");
            obj.set_background("#c1c1c1");
            obj.set_border("1px solid #000000");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00","238","12","138","30",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("8");
            obj.set_readonly("true");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_02","13","12","48","30",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("9");
            obj.set_text("No");
            obj.set_background("#c1c1c1");
            obj.set_border("1px solid #000000");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_02","60","13","123","30",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("10");
            obj.set_readonly("true");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Button("btn_tuit00","799","389","80","25",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("승인");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_tuit00_00","889","389","80","25",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("반려");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","30","9","200","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text(" 휴학 신청서 관리");
            obj.set_background("#c1c1c1");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1080,520,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Div00.form.Combo00","value","tuit_ds","dept_code");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Div00.form.Div00.form.Edit00_01_00.addEventHandler("onchanged",this.Div00_Div00_Edit00_01_00_onchanged,this);
            this.Div00.form.btn_tuit00.addEventHandler("onclick",this.Div00_btn_tuit_onclick,this);
            this.Div00.form.btn_tuit00_00.addEventHandler("onclick",this.Div00_btn_tuit_onclick,this);
        };

        this.loadIncludeScript("rest.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
