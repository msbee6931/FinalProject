(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("studentInfo");
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

            obj = new Static("Static00_01","80","0","800","10",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_visible("false");
            obj.set_background("RGBA(236,135,135,0.71)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","100","490","800","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_visible("false");
            obj.set_background("RGBA(236,135,135,0.71)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","1051","0","29","520",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_visible("false");
            obj.set_background("RGBA(236,135,135,0.71)");
            this.addChild(obj.name, obj);

            obj = new Div("div_Info","29","10","1021","480",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("학생 정보");
            this.addChild(obj.name, obj);

            obj = new Static("sta_name","0","60","120","40",null,null,null,null,null,null,this.div_Info.form);
            obj.set_taborder("0");
            obj.set_text("＊ 성명");
            this.div_Info.addChild(obj.name, obj);

            obj = new Static("sta_enroll","0","100","120","40",null,null,null,null,null,null,this.div_Info.form);
            obj.set_taborder("1");
            obj.set_text("＊ 입학일");
            this.div_Info.addChild(obj.name, obj);

            obj = new Static("sta_colGrade","301","60","120","40",null,null,null,null,null,null,this.div_Info.form);
            obj.set_taborder("2");
            obj.set_text("＊ 학년");
            this.div_Info.addChild(obj.name, obj);

            obj = new Static("sta_gender","301","100","120","40",null,null,null,null,null,null,this.div_Info.form);
            obj.set_taborder("3");
            obj.set_text("＊ 성별");
            this.div_Info.addChild(obj.name, obj);

            obj = new Static("sta_contact","0","230","120","40",null,null,null,null,null,null,this.div_Info.form);
            obj.set_taborder("4");
            obj.set_text("＊ 연락처");
            this.div_Info.addChild(obj.name, obj);

            obj = new Static("sta_address","0","270","120","40",null,null,null,null,null,null,this.div_Info.form);
            obj.set_taborder("5");
            obj.set_text("＊ 주소");
            this.div_Info.addChild(obj.name, obj);

            obj = new Static("sta_email","301","230","120","40",null,null,null,null,null,null,this.div_Info.form);
            obj.set_taborder("6");
            obj.set_text("＊ 이메일");
            this.div_Info.addChild(obj.name, obj);

            obj = new Edit("edt_name","121","68","150","25",null,null,null,null,null,null,this.div_Info.form);
            obj.set_taborder("7");
            obj.set_readonly("true");
            this.div_Info.addChild(obj.name, obj);

            obj = new Edit("edt_enroll","121","108","150","25",null,null,null,null,null,null,this.div_Info.form);
            obj.set_taborder("8");
            obj.set_readonly("true");
            this.div_Info.addChild(obj.name, obj);

            obj = new Edit("edt_colGrade","421","68","150","25",null,null,null,null,null,null,this.div_Info.form);
            obj.set_taborder("9");
            obj.set_readonly("true");
            this.div_Info.addChild(obj.name, obj);

            obj = new Edit("edt_email","421","238","150","25",null,null,null,null,null,null,this.div_Info.form);
            obj.set_taborder("10");
            obj.set_readonly("true");
            this.div_Info.addChild(obj.name, obj);

            obj = new Edit("edt_contact","120","238","150","25",null,null,null,null,null,null,this.div_Info.form);
            obj.set_taborder("11");
            obj.set_readonly("true");
            this.div_Info.addChild(obj.name, obj);

            obj = new Edit("edt_address","121","278","450","25",null,null,null,null,null,null,this.div_Info.form);
            obj.set_taborder("12");
            obj.set_readonly("true");
            this.div_Info.addChild(obj.name, obj);

            obj = new Radio("rd_gender","421","95","190","50",null,null,null,null,null,null,this.div_Info.form);
            obj.set_taborder("13");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var div_Info_form_rd_gender_innerdataset = new nexacro.NormalDataset("div_Info_form_rd_gender_innerdataset", obj);
            div_Info_form_rd_gender_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">M</Col><Col id=\"datacolumn\">남</Col></Row><Row><Col id=\"codecolumn\">W</Col><Col id=\"datacolumn\">여</Col></Row></Rows>");
            obj.set_innerdataset(div_Info_form_rd_gender_innerdataset);
            this.div_Info.addChild(obj.name, obj);

            obj = new Static("sta_dept","601","60","120","40",null,null,null,null,null,null,this.div_Info.form);
            obj.set_taborder("14");
            obj.set_text("＊ 학과");
            this.div_Info.addChild(obj.name, obj);

            obj = new Edit("edt_dept","722","68","150","25",null,null,null,null,null,null,this.div_Info.form);
            obj.set_taborder("15");
            obj.set_readonly("true");
            this.div_Info.addChild(obj.name, obj);

            obj = new Static("sta_code","0","20","120","40",null,null,null,null,null,null,this.div_Info.form);
            obj.set_taborder("16");
            obj.set_text("＊ 학번");
            this.div_Info.addChild(obj.name, obj);

            obj = new Edit("edt_code","121","28","150","25",null,null,null,null,null,null,this.div_Info.form);
            obj.set_taborder("17");
            obj.set_readonly("true");
            this.div_Info.addChild(obj.name, obj);

            obj = new Static("sta_col","602","20","120","40",null,null,null,null,null,null,this.div_Info.form);
            obj.set_taborder("18");
            obj.set_text("＊ 계열");
            this.div_Info.addChild(obj.name, obj);

            obj = new Edit("edt_col","723","28","150","25",null,null,null,null,null,null,this.div_Info.form);
            obj.set_taborder("19");
            obj.set_readonly("true");
            this.div_Info.addChild(obj.name, obj);

            obj = new Static("sta_birth","301","20","120","40",null,null,null,null,null,null,this.div_Info.form);
            obj.set_taborder("20");
            obj.set_text("＊ 생년월일");
            this.div_Info.addChild(obj.name, obj);

            obj = new Edit("edt_birth","421","28","150","25",null,null,null,null,null,null,this.div_Info.form);
            obj.set_taborder("21");
            obj.set_readonly("true");
            this.div_Info.addChild(obj.name, obj);

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
        this.registerScript("studentInfo.xfdl", function() {
        this.objApp = nexacro.getApplication();
        this.studentInfo_onload = function(obj,e)
        {
        	if(this.objApp.gds_students.getRowCount() > 0){
        		var code = this.objApp.gds_students.getColumn(0,"s_seq").toString();
        		var name = this.objApp.gds_students.getColumn(0,"name");
        		var enroll = "20"+code.substring(0,2)+"년 03월 02일";
        		var colGrade = this.objApp.gds_students.getColumn(0,"colGrade");
        		var birth = this.objApp.gds_students.getColumn(0,"secNumber");
        		birth = birth.substring(0,6);
        		var gender = this.objApp.gds_students.getColumn(0,"gender");
        		var deptCode = this.objApp.gds_students.getColumn(0,"deptCode");
        		var colCode = this.objApp.gds_students.getColumn(0,"colCode");
        		var contact = this.objApp.gds_students.getColumn(0,"contact");
        		var email = this.objApp.gds_students.getColumn(0,"email");
        		var address = this.objApp.gds_students.getColumn(0,"address");

        		this.div_Info.form.edt_enroll.set_value(enroll);
        		this.div_Info.form.edt_colGrade.set_value(colGrade);
        		this.div_Info.form.rd_gender.set_value(gender)
        	}else if(this.objApp.gds_professor.getRowCount() > 0){
        		this.div_Info.form.sta_code.set_text("＊ 교번");
        		this.div_Info.form.sta_enroll.set_visible(false);
        		this.div_Info.form.edt_enroll.set_visible(false);
        		this.div_Info.form.sta_gender.set_visible(false);
        		this.div_Info.form.rd_gender.set_visible(false);
        		this.div_Info.form.sta_colGrade.set_visible(false);
        		this.div_Info.form.edt_colGrade.set_visible(false);

        		var code = this.objApp.gds_professor.getColumn(0,"p_seq").toString();
        		var name = this.objApp.gds_professor.getColumn(0,"name");
        		var colGrade = this.objApp.gds_professor.getColumn(0,"colGrade");
        		var birth = this.objApp.gds_professor.getColumn(0,"secNumber");
        		birth = birth.substring(0,6);
        		var deptCode = this.objApp.gds_professor.getColumn(0,"deptCode");
        		var colCode = this.objApp.gds_professor.getColumn(0,"colCode");
        		var contact = this.objApp.gds_professor.getColumn(0,"contact");
        		var email = this.objApp.gds_professor.getColumn(0,"email");
        		var address = this.objApp.gds_professor.getColumn(0,"address");
        	}

        	var deptRow = this.objApp.deptCode.findRow("code",deptCode);
        	var dept = this.objApp.deptCode.getColumn(deptRow,"name");

        	var colRow = this.objApp.colCode.findRow("code",colCode);
        	var col = this.objApp.colCode.getColumn(colRow,"name");

        	this.div_Info.form.edt_code.set_value(code);
        	this.div_Info.form.edt_name.set_value(name);

        	this.div_Info.form.edt_birth.set_value(birth);
        	this.div_Info.form.edt_dept.set_value(dept);
        	this.div_Info.form.edt_col.set_value(col);
        	this.div_Info.form.edt_contact.set_value(contact);
        	this.div_Info.form.edt_email.set_value(email);
        	this.div_Info.form.edt_address.set_value(address);

        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.studentInfo_onload,this);
            this.div_Info.form.sta_code.addEventHandler("onclick",this.div_Info_sta_code_onclick,this);
        };

        this.loadIncludeScript("studentInfo.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
