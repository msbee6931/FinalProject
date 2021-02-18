(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("tuition_insert_pop");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(400,400);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("tuition_ds", this);
            obj._setContents("<ColumnInfo><Column id=\"std_code\" type=\"INT\" size=\"256\"/><Column id=\"t_enter\" type=\"INT\" size=\"256\"/><Column id=\"t_class\" type=\"INT\" size=\"256\"/><Column id=\"t_std\" type=\"INT\" size=\"256\"/><Column id=\"t_grd\" type=\"INT\" size=\"256\"/><Column id=\"t_ore\" type=\"INT\" size=\"256\"/><Column id=\"tSum\" type=\"INT\" size=\"256\"/><Column id=\"t_date\" type=\"DATE\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_ok","86","330","110","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("확인");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancle","205","330","110","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("취소");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","16","130","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("등록금 입력");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","17","51","358","249",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div00");
            obj.set_border("1px solid #c1c1c1");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","17","40","100","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("입학금");
            obj.set_background("#c1c1c1");
            obj.set_border("1px solid #000000");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00","17","69","100","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("수업료");
            obj.set_background("#c1c1c1");
            obj.set_border("1px solid #000000");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_01","17","98","100","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("학생회비");
            obj.set_background("#c1c1c1");
            obj.set_border("1px solid #000000");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","17","127","100","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("졸업앨범비");
            obj.set_background("#c1c1c1");
            obj.set_border("1px solid #000000");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00","17","156","100","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("오리엔테이션비");
            obj.set_background("#c1c1c1");
            obj.set_border("1px solid #000000");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00_00","17","185","100","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("총 합계");
            obj.set_background("#c1c1c1");
            obj.set_border("1px solid #000000");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("medt_a","117","40","200","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_format("+999,999,999");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("medt_b","117","69","200","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_format("+999,999,999");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("medt_c","117","98","200","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_format("+999,999,999");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("medt_d","117","127","200","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_format("+999,999,999");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("medt_e","117","156","200","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_format("+999,999,999");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("medt_sum","117","185","200","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_format("+999,999,999");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",400,400,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("tuition_insert_pop.xfdl", function() {
        this.code = "";

        //모달창 온로드
        this.tuition_insert_pop_onload = function(obj,e)
        {
        	//부모창에서 받아온 학번 값(배열)
        	code = this.parent.code;


        	//maskEdit 기본값 0처리 하기
        	this.Div00.form.medt_a.set_value(0);
        	this.Div00.form.medt_b.set_value(0);
        	this.Div00.form.medt_c.set_value(0);
        	this.Div00.form.medt_d.set_value(0);
        	this.Div00.form.medt_e.set_value(0);

        };

        //확인버튼
        this.btn_ok_onclick = function(obj,e)
        {
        	var inputa = nexacro.toNumber(this.Div00.form.medt_a.value);
        	var inputb = nexacro.toNumber(this.Div00.form.medt_b.value);
        	var inputc = nexacro.toNumber(this.Div00.form.medt_c.value);
        	var inputd = nexacro.toNumber(this.Div00.form.medt_d.value);
        	var inpute = nexacro.toNumber(this.Div00.form.medt_e.value);
        	var tSum = this.Div00.form.medt_sum.value;

        	//tuition_ds 장학금 db에 학번 및 등록금 금액 넣기

        	for(var i=0; i<code.length;i++){
        		var nRow = this.tuition_ds.addRow();
        		this.tuition_ds.setColumn(nRow,"std_code",code[i]);
        		this.tuition_ds.setColumn(nRow,"t_enter",inputa);
        		this.tuition_ds.setColumn(nRow,"t_class",inputb);
        		this.tuition_ds.setColumn(nRow,"t_std",inputc);
        		this.tuition_ds.setColumn(nRow,"t_grd",inputd);
        		this.tuition_ds.setColumn(nRow,"t_ore",inpute);
        		this.tuition_ds.setColumn(nRow,"tSum",tSum);
        	}

        	this.transaction(
        		"insertTution",//id
        		"/tuition/insert.tuition",//url (절대경로)
        		"in_ds=tuition_ds:U",//in_ds:U
        		"",//()_out_ds
        		"",//argument
        		"fn_callback"
        		)

        	//확인
        	this.close(tSum);

        };

        //닫기 버튼
        this.btn_cancle_onclick = function(obj,e)
        {
        	this.close();
        };

        //자동으로 최종 합계 구하는 함수
        this.fn_tSum = function()
        {
        	var inputa = nexacro.toNumber(this.Div00.form.medt_a.value);
        	var inputb = nexacro.toNumber(this.Div00.form.medt_b.value);
        	var inputc = nexacro.toNumber(this.Div00.form.medt_c.value);
        	var inputd = nexacro.toNumber(this.Div00.form.medt_d.value);
        	var inpute = nexacro.toNumber(this.Div00.form.medt_e.value);
        	tSum = inputa + inputb + inputc + inputd+ inpute;
        	this.Div00.form.medt_sum.set_value(tSum);
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
            this.addEventHandler("onload",this.tuition_insert_pop_onload,this);
            this.btn_ok.addEventHandler("onclick",this.btn_ok_onclick,this);
            this.btn_cancle.addEventHandler("onclick",this.btn_cancle_onclick,this);
            this.Div00.form.medt_a.addEventHandler("canchange",this.fn_tSum,this);
            this.Div00.form.medt_b.addEventHandler("canchange",this.fn_tSum,this);
            this.Div00.form.medt_c.addEventHandler("canchange",this.fn_tSum,this);
            this.Div00.form.medt_d.addEventHandler("canchange",this.fn_tSum,this);
            this.Div00.form.medt_e.addEventHandler("canchange",this.fn_tSum,this);
        };

        this.loadIncludeScript("tuition_insert_pop.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
