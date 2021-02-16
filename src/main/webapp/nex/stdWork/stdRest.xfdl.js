(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("stdRest");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1080,520);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("rlist_ds", this);
            obj._setContents("<ColumnInfo><Column id=\"seq\" type=\"STRING\" size=\"256\"/><Column id=\"std_code\" type=\"STRING\" size=\"256\"/><Column id=\"title\" type=\"STRING\" size=\"256\"/><Column id=\"writeDate\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("students_ds", this);
            obj._setContents("<ColumnInfo><Column id=\"s_seq\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"age\" type=\"STRING\" size=\"256\"/><Column id=\"email\" type=\"STRING\" size=\"256\"/><Column id=\"contact\" type=\"STRING\" size=\"256\"/><Column id=\"adress\" type=\"STRING\" size=\"256\"/><Column id=\"scholarship\" type=\"STRING\" size=\"256\"/><Column id=\"rest\" type=\"STRING\" size=\"256\"/><Column id=\"grade\" type=\"STRING\" size=\"256\"/><Column id=\"birth\" type=\"STRING\" size=\"256\"/><Column id=\"pw\" type=\"STRING\" size=\"256\"/><Column id=\"gender\" type=\"STRING\" size=\"256\"/><Column id=\"deptCode\" type=\"STRING\" size=\"256\"/><Column id=\"colCode\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("rlistCopy_ds", this);
            obj._setContents("<ColumnInfo><Column id=\"seq\" type=\"STRING\" size=\"256\"/><Column id=\"std_code\" type=\"STRING\" size=\"256\"/><Column id=\"title\" type=\"STRING\" size=\"256\"/><Column id=\"writeDate\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Grid("Grid00","32","68","530","350",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_binddataset("rlist_ds");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"384\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"제목\"/><Cell col=\"1\" text=\"작성날짜\"/></Band><Band id=\"body\"><Cell text=\"bind:title\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:writeDate\" displaytype=\"date\" textAlign=\"center\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_insert","886","26","100","25",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("작성하기");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","577","71","399","346",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_border("1px solid #c1c1c1");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","30","9","200","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text(" 복학 신청서 관리");
            obj.set_background("#c1c1c1");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_title01_00","684","236","298","37",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_title01","862","164","120","37",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","684","128","120","36",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_readonly("true");
            obj.set_innerdataset("deptCode");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_title00_01","684","200","120","37",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_title00","862","128","120","37",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_title00_00_00","862","200","120","37",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_title00_00","684","164","120","37",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","625","272","357","150",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("");
            obj.set_border("1px solid #c1c1c1");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02","625","128","60","37",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("학 과");
            obj.set_background("#c1c1c1");
            obj.set_border("1px solid #c1c1c1");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01","625","200","60","37",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("연락처");
            obj.set_background("#c1c1c1");
            obj.set_border("1px solid #c1c1c1");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","625","164","60","37",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("생년월일");
            obj.set_background("#c1c1c1");
            obj.set_border("1px solid #c1c1c1");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_01","803","164","60","37",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("학 년");
            obj.set_background("#c1c1c1");
            obj.set_border("1px solid #c1c1c1");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","803","128","60","37",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("학 번");
            obj.set_background("#c1c1c1");
            obj.set_border("1px solid #c1c1c1");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00","803","200","60","37",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("성 명");
            obj.set_background("#c1c1c1");
            obj.set_border("1px solid #c1c1c1");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00","625","236","60","37",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("주 소");
            obj.set_background("#c1c1c1");
            obj.set_border("1px solid #c1c1c1");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1080,520,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","edt_title01_00","value","students_ds","adress");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edt_title01","value","students_ds","grade");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Div00.form.edt_title01_00","value","students_ds","adress");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","Combo00","value","students_ds","deptCode");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","edt_title00_01","value","students_ds","contact");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","edt_title00","value","students_ds","s_seq");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","Div00.form.edt_title00_00","value","students_ds","birth");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","Div00.form.edt_title00_01","value","students_ds","contact");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","Div00.form.edt_title00_00_00","value","students_ds","name");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","edt_title00_00_00","value","students_ds","name");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","edt_title00_00","value","students_ds","birth");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("stdRest.xfdl", function() {
        this.std_code="215051001";
        this.Div00_btn_insert_onclick = function(obj,e)
        {
        	//복학신청서 입력을 위한 모달창
        	var objCF = new ChildFrame();
        	objCF.init("stdRest_pop",200,100,900,600);
        	objCF.set_titletext("복학신청서 작성하기");
        	objCF.set_formurl("stdWork::stdRest_pop.xfdl");
        	objCF.showModal(
        		this.getOwnerFrame(),
        		{std_code:std_code}, // seq 넘기기
        		this,
        		"fn_callback_stdRest"
        	);
        };

        this.fn_callback_stdRest = function()
        {
        	this.transaction(
        		"selectOneRest",//id
        		"/absence/selectOneRest.absence",//url (절대경로)
        		"",//in_ds:U
        		"rlist_ds=out_ds",//()_out_ds
        		"std_code="+this.std_code,//argument
        		"fn_callback"
        		)
        }
        this.stdRest_onload = function(obj,e)
        {
        		this.transaction(
        		"selectOneRest",//id
        		"/absence/selectOneRest.absence",//url (절대경로)
        		"",//in_ds:U
        		"rlist_ds=out_ds",//()_out_ds
        		"std_code="+this.std_code,//argument
        		"fn_callback"
        		)
        };

        this.Div00_Grid00_oncellclick = function(obj,e)
        {
        	var seq = this.rlist_ds.getColumn(e.row,"seq");

        	this.transaction(
        		"selectOneStd",//id
        		"/students/selectOneStd.students",//url (절대경로)
        		"",//in_ds:U
        		"students_ds=out_ds",//()_out_ds
        		"sCode="+this.std_code,//argument
        		"fn_callback_std"
        		)
        };

        this.fn_callback_std = function()
        {
        	this.Static02.set_text("본인은 본교에 복학하고자 하오니 허가하여 주시기 바랍니다.");
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.stdRest_onload,this);
            this.Div00.form.Grid00.addEventHandler("oncellclick",this.Div00_Grid00_oncellclick,this);
            this.Div00.form.btn_insert.addEventHandler("onclick",this.Div00_btn_insert_onclick,this);
        };

        this.loadIncludeScript("stdRest.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
