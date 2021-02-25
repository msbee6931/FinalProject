(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("stdRest_pop");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(900,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("rlist_ds", this);
            obj._setContents("<ColumnInfo><Column id=\"seq\" type=\"STRING\" size=\"256\"/><Column id=\"std_code\" type=\"STRING\" size=\"256\"/><Column id=\"title\" type=\"STRING\" size=\"256\"/><Column id=\"writeDate\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","30","20","842","560",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_line");
            this.addChild(obj.name, obj);

            obj = new Button("btn_can","710","499","100","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("닫기");
            obj.set_cssclass("btn_can");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","28","150","782","329",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("\r\n\r\n 본인은 본교에 복학하고자 하오니 허가하여 주시기 바랍니다.");
            obj.set_cssclass("sta_line");
            obj.set_textAlign("center");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03","32","20","172","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("복학신청서");
            obj.set_cssclass("sta_title");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_ok","600","499","100","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("확인");
            obj.set_cssclass("btn_default");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","31","60","70","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("학 과");
            obj.set_cssclass("sta_default");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_dept","101","60","191","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_cssclass("edt_default");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00","291","60","70","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("학 번");
            obj.set_cssclass("sta_default");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_seq","360","60","191","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_cssclass("edt_default");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","552","60","70","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_text("생년월일");
            obj.set_cssclass("sta_default");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_birth","621","60","191","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_cssclass("edt_default");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_01","31","90","70","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_text("학 년");
            obj.set_cssclass("sta_default");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_grade","100","90","191","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_cssclass("edt_default");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_01","291","90","70","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_text("연락처");
            obj.set_cssclass("sta_default");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_contact","360","90","191","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("13");
            obj.set_cssclass("edt_default");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","552","90","70","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("14");
            obj.set_text("성 명");
            obj.set_cssclass("sta_default");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_name","621","90","191","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("15");
            obj.set_cssclass("edt_default");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","31","120","70","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("16");
            obj.set_text("주 소");
            obj.set_cssclass("sta_default");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_adress","100","120","712","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("17");
            obj.set_cssclass("edt_default");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_03","0","40","30","520",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_visible("false");
            obj.set_background("RGBA(236,135,135,0.71)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00","150","0","600","20",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_visible("false");
            obj.set_background("RGBA(236,135,135,0.71)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02","870","40","30","520",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_visible("false");
            obj.set_background("RGBA(236,135,135,0.71)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_01","160","580","600","20",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_visible("false");
            obj.set_background("RGBA(236,135,135,0.71)");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",900,600,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Div00.form.edt_dept","value","students_ds","s_seq");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Div00.form.edt_seq","value","students_ds","s_seq");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Div00.form.edt_birth","value","students_ds","birth");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Div00.form.edt_grade","value","students_ds","grade");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","Div00.form.edt_contact","value","students_ds","contact");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","Div00.form.edt_name","value","students_ds","name");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","Div00.form.edt_adress","value","students_ds","adress");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("stdRest_pop.xfdl", function() {
        this.objApp = nexacro.getApplication();
        this.std_code=this.parent.std_code;
        this.stdRest_pop_onload = function(obj,e)
        {
        	this.std_code=this.objApp.gds_students.getColumn(0,'s_seq');
        	var deptCode = this.objApp.gds_students.getColumn(0,'deptCode');
        	var fRow = this.objApp.deptCode.findRow("code",deptCode);
        	var deptName = this.objApp.deptCode.getColumn(fRow,"name");
        	var birthFull = this.objApp.gds_students.getColumn(0,'secNumber');
        	var birth = birthFull.substr(0,2)+"년"+birthFull.substr(2,2)+"월"+birthFull.substr(4,2)+"일";
        	var grade = this.objApp.gds_students.getColumn(0,'colGrade');
        	var contact = this.objApp.gds_students.getColumn(0,'contact');
        	var name = this.objApp.gds_students.getColumn(0,'name');
        	var address = this.objApp.gds_students.getColumn(0,'address');


        	this.Div00.form.edt_dept.set_value(deptName);
        	this.Div00.form.edt_seq.set_value(this.std_code);
        	this.Div00.form.edt_birth.set_value(birth);
        	this.Div00.form.edt_grade.set_value(grade);
        	this.Div00.form.edt_contact.set_value(contact);
        	this.Div00.form.edt_name.set_value(name);
        	this.Div00.form.edt_adress.set_value(address);
        };



        this.Div00_btn_ok_onclick = function(obj,e)
        {
        	var nRow = this.rlist_ds.addRow();
        	this.rlist_ds.setColumn(nRow,"std_code",this.std_code);
        	this.rlist_ds.setColumn(nRow,"title","복학신청서");
        	alert("셋컬럼")
        	this.transaction(
        		"insertRest.absence",//id
        		"/absence/insertRest.absence",//url (절대경로)
        		"in_ds=rlist_ds:U",//in_ds:U
        		"",//()_out_ds
        		"",//argument
        		"fn_callback_insert"
        		)

        };

        this.fn_callback_insert = function(eId,eCode,eMsg)
        {
        	trace(eId,eCode,eMsg)
        	var check = this.confirm("복학신청 철회 시 행정팀에 문의 주시기 바랍니다. 정말로 신청하시겠습니까?")
        	if(check)
        	{
        		this.close();
        	} else
        	{
        		return;
        	}
        }



        this.Div00_btn_can_onclick = function(obj,e)
        {
        	this.close();
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.stdRest_pop_onload,this);
            this.Div00.form.btn_can.addEventHandler("onclick",this.Div00_btn_can_onclick,this);
            this.Div00.form.btn_ok.addEventHandler("onclick",this.Div00_btn_ok_onclick,this);
        };

        this.loadIncludeScript("stdRest_pop.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
