(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("scholar_read_pop");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(400,400);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("scholar_ds", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"std_code\" type=\"INT\" size=\"256\"/><Column id=\"std_grade\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"s_kind\" type=\"INT\" size=\"256\"/><Column id=\"s_rec\" type=\"INT\" size=\"256\"/><Column id=\"s_smt\" type=\"INT\" size=\"256\"/><Column id=\"s_spt\" type=\"INT\" size=\"256\"/><Column id=\"s_etc\" type=\"INT\" size=\"256\"/><Column id=\"sSum\" type=\"INT\" size=\"256\"/><Column id=\"s_date\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("students_ds", this);
            obj._setContents("<ColumnInfo><Column id=\"s_seq\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"age\" type=\"STRING\" size=\"256\"/><Column id=\"email\" type=\"STRING\" size=\"256\"/><Column id=\"contact\" type=\"STRING\" size=\"256\"/><Column id=\"adress\" type=\"STRING\" size=\"256\"/><Column id=\"scholarship\" type=\"STRING\" size=\"256\"/><Column id=\"rest\" type=\"STRING\" size=\"256\"/><Column id=\"grade\" type=\"STRING\" size=\"256\"/><Column id=\"birth\" type=\"STRING\" size=\"256\"/><Column id=\"pw\" type=\"STRING\" size=\"256\"/><Column id=\"gender\" type=\"STRING\" size=\"256\"/><Column id=\"deptCode\" type=\"STRING\" size=\"256\"/><Column id=\"colCode\" type=\"STRING\" size=\"256\"/><Column id=\"colGrade\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_ok","150","355","100","25",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("확인");
            obj.set_cssclass("btn_default");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","21","20","358","325",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_border("1px solid #c1c1c1");
            obj.set_cssclass("div_line");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","28","125","100","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("선행");
            obj.set_cssclass("sta_default");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00","28","154","100","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("추천");
            obj.set_cssclass("sta_default");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_01","28","183","100","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("성적 우수");
            obj.set_cssclass("sta_default");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","28","212","100","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("생활 지원");
            obj.set_cssclass("sta_default");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00","28","241","100","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("기타");
            obj.set_cssclass("sta_default");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00_00","28","270","100","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("총 합계");
            obj.set_cssclass("sta_default");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("medt_a","128","125","200","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_format("+999,999,999");
            obj.set_cssclass("med_default");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("medt_b","128","154","200","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_format("+999,999,999");
            obj.set_cssclass("med_default");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("medt_c","128","183","200","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_format("+999,999,999");
            obj.set_cssclass("med_default");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("medt_d","128","212","200","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_format("+999,999,999");
            obj.set_cssclass("med_default");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("medt_e","128","241","200","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_format("+999,999,999");
            obj.set_cssclass("med_default");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("medt_sum","128","270","200","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_format("+999,999,999");
            obj.set_readonly("true");
            obj.set_cssclass("med_default");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_02","28","18","100","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_text("학번");
            obj.set_cssclass("sta_default");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_code","129","18","199","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("13");
            obj.set_readonly("true");
            obj.set_cssclass("edt_default");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_02_00","28","47","100","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("14");
            obj.set_text("학과");
            obj.set_cssclass("sta_default");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo00","129","47","199","31",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("15");
            obj.set_innerdataset("deptCode");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            obj.set_readonly("true");
            obj.set_cssclass("cmb_default");
            obj.set_text("Combo00");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_code00_00","129","76","199","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("16");
            obj.set_readonly("true");
            obj.set_cssclass("edt_default");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_02_00_00","28","76","100","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("17");
            obj.set_text("이름");
            obj.set_cssclass("sta_default");
            this.Div00.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",400,400,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Div00.form.edt_code","value","students_ds","s_seq");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Div00.form.edt_code00_00","value","students_ds","name");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Div00.form.Combo00","value","students_ds","deptCode");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("scholar_insert_pop.xfdl", function() {
        this.std_code = this.parent.std_code;

        //모달창 온로드
        this.scholar_insert_pop_onload = function(obj,e)
        {
        	this.transaction(
        		"selectOneStd.students",//id
        		"/students/selectOneStd.students",//url (절대경로)
        		"",//in_ds:U
        		"students_ds=out_ds",//()_out_ds
        		"sCode="+this.std_code,//argument
        		"fn_callback_stdInfo"
        	)


        	//maskEdit 기본값 0처리 하기
        	this.Div00.form.medt_a.set_value(0);
        	this.Div00.form.medt_b.set_value(0);
        	this.Div00.form.medt_c.set_value(0);
        	this.Div00.form.medt_d.set_value(0);
        	this.Div00.form.medt_e.set_value(0);
        };


        this.fn_callback_stdInfo = function ()
        {

        }

        //확인버튼
        this.btn_ok_onclick = function(obj,e)
        {
        	var inputa = nexacro.toNumber(this.Div00.form.medt_a.value);
        	var inputb = nexacro.toNumber(this.Div00.form.medt_b.value);
        	var inputc = nexacro.toNumber(this.Div00.form.medt_c.value);
        	var inputd = nexacro.toNumber(this.Div00.form.medt_d.value);
        	var inpute = nexacro.toNumber(this.Div00.form.medt_e.value);
        	var sSum = this.Div00.form.medt_sum.value;

        	//fee_ds 장학금 db에 학번 및 등록금 금액 넣기

        	var nRow = this.scholar_ds.addRow();
        	this.scholar_ds.setColumn(nRow,"std_code",this.std_code);
        	var grade = this.students_ds.getColumn(0,"colGrade");
        	this.scholar_ds.setColumn(nRow,"std_grade",grade);
        	this.scholar_ds.setColumn(nRow,"s_kind",inputa);
        	this.scholar_ds.setColumn(nRow,"s_kind",inputa);
        	this.scholar_ds.setColumn(nRow,"s_rec",inputb);
        	this.scholar_ds.setColumn(nRow,"s_smt",inputc);
        	this.scholar_ds.setColumn(nRow,"s_spt",inputd);
        	this.scholar_ds.setColumn(nRow,"s_etc",inpute);
        	this.scholar_ds.setColumn(nRow,"sSum",sSum);

        	var check = this.confirm("입력사항을 저장하시겠습니까?");
        	if(check)
        	{

        		this.transaction(
        			"insert.scholarship",//id
        			"/scholarship/insert.scholarship",//url (절대경로)
        			"in_ds=scholar_ds:U",//in_ds:U
        			"",//()_out_ds
        			"",//argument
        			"fn_callback"
        		)

        		//확인
        		this.close(this.std_code);
        	}
        	else
        	{
        		return;
        	}
        };



        //자동으로 최종 합계 구하는 함수
        this.fn_tSum = function()
        {
        	var inputa = nexacro.toNumber(this.Div00.form.medt_a.value);
        	var inputb = nexacro.toNumber(this.Div00.form.medt_b.value);
        	var inputc = nexacro.toNumber(this.Div00.form.medt_c.value);
        	var inputd = nexacro.toNumber(this.Div00.form.medt_d.value);
        	var inpute = nexacro.toNumber(this.Div00.form.medt_e.value);
        	sSum = inputa + inputb + inputc + inputd+ inpute;
        	this.Div00.form.medt_sum.set_value(sSum);
        }

        this.fn_callback = function(id,ErrorCode,ErrorMsg){
        	trace(id);
        	trace(ErrorCode);
        	trace(ErrorMsg);
        };









        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.scholar_insert_pop_onload,this);
            this.btn_ok.addEventHandler("onclick",this.btn_ok_onclick,this);
            this.Div00.form.medt_a.addEventHandler("canchange",this.fn_tSum,this);
            this.Div00.form.medt_b.addEventHandler("canchange",this.fn_tSum,this);
            this.Div00.form.medt_c.addEventHandler("canchange",this.fn_tSum,this);
            this.Div00.form.medt_d.addEventHandler("canchange",this.fn_tSum,this);
            this.Div00.form.medt_e.addEventHandler("canchange",this.fn_tSum,this);
        };

        this.loadIncludeScript("scholar_insert_pop.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
