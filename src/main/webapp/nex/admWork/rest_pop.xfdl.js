(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("rest_pop");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(400,400);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("students_ds", this);
            obj._setContents("<ColumnInfo><Column id=\"s_seq\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"age\" type=\"STRING\" size=\"256\"/><Column id=\"email\" type=\"STRING\" size=\"256\"/><Column id=\"contact\" type=\"STRING\" size=\"256\"/><Column id=\"address\" type=\"STRING\" size=\"256\"/><Column id=\"scholarship\" type=\"STRING\" size=\"256\"/><Column id=\"rest\" type=\"STRING\" size=\"256\"/><Column id=\"grade\" type=\"STRING\" size=\"256\"/><Column id=\"pw\" type=\"STRING\" size=\"256\"/><Column id=\"gender\" type=\"STRING\" size=\"256\"/><Column id=\"deptCode\" type=\"STRING\" size=\"256\"/><Column id=\"colCode\" type=\"STRING\" size=\"256\"/><Column id=\"colGrade\" type=\"STRING\" size=\"256\"/><Column id=\"secNumber\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00_02","20","57","60","25",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("학 과");
            obj.set_cssclass("sta_default");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","79","57","120","25",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.set_innerdataset("deptCode");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            obj.set_cssclass("cmb_default");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","198","57","60","25",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("학 번");
            obj.set_cssclass("sta_default");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_title00","257","57","120","25",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("edt_default");
            this.addChild(obj.name, obj);

<<<<<<< HEAD
            obj = new Static("Static00_00_00_00","20","81","60","25",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("생년월일");
            obj.set_cssclass("sta_default");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_title00_00","79","81","120","25",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("edt_default");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_01","198","81","60","25",null,null,null,null,null,null,this);
            obj.set_taborder("6");
=======
            obj = new Static("Static00_01_01","198","81","60","25",null,null,null,null,null,null,this);
            obj.set_taborder("5");
>>>>>>> 8f5af974195c2ae46f84e2a8e006a0a0a22f93e8
            obj.set_text("학 년");
            obj.set_cssclass("sta_default");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_title01","257","81","120","25",null,null,null,null,null,null,this);
<<<<<<< HEAD
            obj.set_taborder("7");
            obj.set_cssclass("edt_default");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01","20","105","60","25",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("연락처");
            obj.set_cssclass("sta_default");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_title00_01","79","129","120","25",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("edt_default");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00","198","129","60","25",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("성 명");
            obj.set_cssclass("sta_default");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_title00_00_00","257","129","120","25",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("edt_default");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00","20","129","60","25",null,null,null,null,null,null,this);
            obj.set_taborder("12");
=======
            obj.set_taborder("6");
            obj.set_cssclass("edt_default");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_title00_01","79","129","297","25",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("edt_default");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00","198","105","60","25",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("성 명");
            obj.set_cssclass("sta_default");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_title00_00_00","257","105","120","25",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("edt_default");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00","20","129","60","25",null,null,null,null,null,null,this);
            obj.set_taborder("11");
>>>>>>> 8f5af974195c2ae46f84e2a8e006a0a0a22f93e8
            obj.set_text("주 소");
            obj.set_cssclass("sta_default");
            this.addChild(obj.name, obj);

<<<<<<< HEAD
            obj = new Edit("edt_title01_00","79","105","298","25",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_cssclass("edt_default");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","30","230","357","34",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text(" 본인은 본교에 복학하고자 하오니 허가하여 주시기 바랍니다.");
            this.addChild(obj.name, obj);

            obj = new Button("btn_commit","157","350","100","25",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("승인");
            obj.set_cssclass("btn_default");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ok","277","350","100","25",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("확인");
            obj.set_cssclass("btn_default");
=======
            obj = new Static("Static02","30","230","357","34",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text(" 본인은 본교에 복학하고자 하오니 허가하여 주시기 바랍니다.");
            this.addChild(obj.name, obj);

            obj = new Button("btn_commit","157","350","100","25",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("승인");
            obj.set_cssclass("btn_default");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ok","277","350","100","25",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("닫기");
            obj.set_cssclass("btn_can");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","23","10","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("복학 신청서");
            obj.set_cssclass("sta_title");
>>>>>>> 8f5af974195c2ae46f84e2a8e006a0a0a22f93e8
            this.addChild(obj.name, obj);

            obj = new Div("Div00","20","153","356","177",null,null,null,null,null,null,this);
            obj.set_taborder("17");
<<<<<<< HEAD
            obj.set_text("복학 신청서");
            obj.set_cssclass("sta_title");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","20","153","356","177",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_cssclass("div_line");
            obj.set_text("");
=======
            obj.set_cssclass("div_line");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("med_birth","79","81","120","25",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_cssclass("med_default");
            obj.set_type("string");
            obj.set_format("@@@@@@");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_contact","79","105","119","25",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("edt_default");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01","20","105","60","25",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("연락처");
            obj.set_cssclass("sta_default");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","20","81","60","25",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("생년월일");
            obj.set_cssclass("sta_default");
>>>>>>> 8f5af974195c2ae46f84e2a8e006a0a0a22f93e8
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",400,400,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Combo00","value","students_ds","deptCode");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edt_title00","value","students_ds","s_seq");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","med_birth","value","students_ds","secNumber");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","edt_title01","value","students_ds","colGrade");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","edt_contact","value","students_ds","contact");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edt_title00_01","value","students_ds","address");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","edt_title00_00_00","value","students_ds","name");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("rest_pop.xfdl", function() {
        this.std_code=this.parent.std_code;

        this.rest_pop_onload = function(obj,e)
        {
        	this.transaction(
        		"selectOneStd.students",//id
        		"/students/selectOneStd.students",//url (절대경로)
        		"",//in_ds:U
        		"students_ds=out_ds",//()_out_ds
        		"sCode="+this.std_code,//argument
        		"fn_callback_stdInfo"
        		)

        };

        //rest가 Y 이면 휴학  N이면 복학
        this.fn_callback_stdInfo = function()
        {
        	var rest = this.students_ds.getColumn(0,"rest");
        	if(rest=='N')
        	{
        		this.btn_commit.set_text("완료");
        	}
        }

        //승인 처리
        this.Div00_btn_commit_onclick = function(obj,e)
        {
        	var check = this.confirm("복학을 승인하시겠습니까?");
        	if(check)
        	{
        	this.transaction(
        		"pdateStdRest",//id
        		"/students/updateStdRest.students",//url (절대경로)
        		"",//in_ds:U
        		"",//()_out_ds
        		"sCode="+this.std_code,//argument
        		"fn_callback_rest"
        		)
        	} else
        	{return;}
        };

        this.fn_callback_rest = function()
        {
        	this.btn_commit.set_text("완료");
        }

        //그냥 닫기
        this.btn_ok_onclick = function(obj,e)
        {
        	this.close();
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.rest_pop_onload,this);
            this.btn_commit.addEventHandler("onclick",this.Div00_btn_commit_onclick,this);
            this.btn_ok.addEventHandler("onclick",this.btn_ok_onclick,this);
        };

        this.loadIncludeScript("rest_pop.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
