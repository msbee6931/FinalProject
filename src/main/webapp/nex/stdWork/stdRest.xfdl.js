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
            obj._setContents("<ColumnInfo><Column id=\"s_seq\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"age\" type=\"STRING\" size=\"256\"/><Column id=\"email\" type=\"STRING\" size=\"256\"/><Column id=\"contact\" type=\"STRING\" size=\"256\"/><Column id=\"address\" type=\"STRING\" size=\"256\"/><Column id=\"scholarship\" type=\"STRING\" size=\"256\"/><Column id=\"rest\" type=\"STRING\" size=\"256\"/><Column id=\"grade\" type=\"STRING\" size=\"256\"/><Column id=\"pw\" type=\"STRING\" size=\"256\"/><Column id=\"gender\" type=\"STRING\" size=\"256\"/><Column id=\"deptCode\" type=\"STRING\" size=\"256\"/><Column id=\"colCode\" type=\"STRING\" size=\"256\"/><Column id=\"colGrade\" type=\"STRING\" size=\"256\"/><Column id=\"secNumber\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Div("Div00","30","10",null,null,"29","30",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Div00");
            obj.set_cssclass("div_line");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","9","61",null,null,"450","31",null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_binddataset("rlist_ds");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_default");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"375\"/><Column size=\"127\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"제목\"/><Cell col=\"1\" text=\"작성날짜\" displaytype=\"normal\"/></Band><Band id=\"body\"><Cell text=\"bind:title\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:writeDate\" textAlign=\"center\" displaytype=\"date\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_insert","Grid00:-100","26","100","25",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("작성하기");
            obj.set_cssclass("btn_insert");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div00",null,"60","425",null,"15","31",null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_cssclass("div_line");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_contetns","15","122","397",null,null,"27",null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_cssclass("sta_line");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_address","72","98","340","25",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("1");
            obj.set_cssclass("edt_default");
            obj.set_readonly("true");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00","15","98","60","25",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("2");
            obj.set_text("주 소");
            obj.set_cssclass("sta_default");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_01","15","74","60","25",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("3");
            obj.set_text("연락처");
            obj.set_cssclass("sta_default");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_contact","74","74","140","25",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("4");
            obj.set_cssclass("edt_default");
            obj.set_readonly("true");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_name","272","74","140","25",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("6");
            obj.set_cssclass("edt_default");
            obj.set_readonly("true");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_grade","272","50","140","25",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("7");
            obj.set_cssclass("edt_default");
            obj.set_readonly("true");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","15","50","60","25",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("9");
            obj.set_text("생년월일");
            obj.set_cssclass("sta_default");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_02","15","26","60","25",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("10");
            obj.set_text("학 과");
            obj.set_cssclass("sta_default");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Combo("cmb_dept","74","26","140","25",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("11");
            obj.set_readonly("true");
            obj.set_innerdataset("deptCode");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            obj.set_cssclass("cmb_default");
            obj.set_text("Combo00");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_seq","272","26","140","25",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("13");
            obj.set_cssclass("edt_default");
            obj.set_readonly("true");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("med_birth","74","51","140","25",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("14");
            obj.set_type("string");
            obj.set_format("@@@@@@");
            obj.set_readonly("true");
            obj.set_cssclass("med_default");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00","213","74","60","25",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("5");
            obj.set_text("성 명");
            obj.set_cssclass("sta_default");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_01_01","213","50","60","25",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("8");
            obj.set_text("학 년");
            obj.set_cssclass("sta_default");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","213","26","60","25",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("12");
            obj.set_text("학 번");
            obj.set_cssclass("sta_default");
            this.Div00.form.Div00.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1080,520,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Div00.form.Div00.form.edt_seq","value","students_ds","s_seq");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Div00.form.Div00.form.med_birth","value","students_ds","secNumber");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Div00.form.Div00.form.edt_grade","value","students_ds","colGrade");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Div00.form.Div00.form.edt_contact","value","students_ds","contact");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","Div00.form.Div00.form.edt_name","value","students_ds","name");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","Div00.form.Div00.form.edt_address","value","students_ds","address");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","Div00.form.Div00.form.cmb_dept","value","students_ds","deptCode");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("stdRest.xfdl", function() {
        this.objApp = nexacro.getApplication();
        this.std_code=this.objApp.gds_students.getColumn(0,'s_seq');
        this.Div00_btn_insert_onclick = function(obj,e)
        {

        	//복학신청서 입력을 위한 모달창
        	var objCF = new ChildFrame();
        	var x = this.width/2-500;
        	var y = this.height/2-300;
        	objCF.init("stdRest_pop",x,y,900,600);
        	objCF.set_titletext("복학신청서 작성하기");
        	objCF.set_formurl("stdWork::stdRest_pop.xfdl");
        	objCF.showModal(
        		this.getOwnerFrame(),
        		{sCode:this.std_code}, // seq 넘기기
        		this,
        		"fn_callback_stdRest"
        	);
        };

        this.fn_callback_stdRest = function()
        {
        	this.reload();
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
        	this.Div00.form.Div00.form.sta_contetns.set_text("본인은 본교에 복학하고자 하오니 허가하여 주시기 바랍니다.");
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
