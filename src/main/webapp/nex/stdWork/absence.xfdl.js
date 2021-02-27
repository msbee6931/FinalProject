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
            obj = new Dataset("absenceCode_ds", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">01</Col><Col id=\"name\">군입대</Col></Row><Row><Col id=\"code\">02</Col><Col id=\"name\">질병</Col></Row><Row><Col id=\"code\">03</Col><Col id=\"name\">가사사정</Col></Row><Row><Col id=\"code\">04</Col><Col id=\"name\">사고</Col></Row><Row><Col id=\"name\">기타</Col><Col id=\"code\">05</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("absFileList_ds", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"seq\" type=\"INT\" size=\"256\"/><Column id=\"parentSeq\" type=\"INT\" size=\"256\"/><Column id=\"fileName\" type=\"STRING\" size=\"256\"/><Column id=\"savedFileName\" type=\"STRING\" size=\"256\"/><Column id=\"fileSize\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("absence_ds", this);
            obj._setContents("<ColumnInfo><Column id=\"seq\" type=\"INT\" size=\"256\"/><Column id=\"std_code\" type=\"STRING\" size=\"256\"/><Column id=\"sDate\" type=\"STRING\" size=\"256\"/><Column id=\"eDate\" type=\"STRING\" size=\"256\"/><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"writeDate\" type=\"STRING\" size=\"256\"/><Column id=\"checkValue\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("absenceCopy_ds", this);
            obj._setContents("<ColumnInfo><Column id=\"seq\" type=\"INT\" size=\"256\"/><Column id=\"std_code\" type=\"STRING\" size=\"256\"/><Column id=\"sDate\" type=\"STRING\" size=\"256\"/><Column id=\"eDate\" type=\"STRING\" size=\"256\"/><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"writeDate\" type=\"STRING\" size=\"256\"/><Column id=\"checkValue\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("FileDownTransfer00", this);
            this.addChild(obj.name, obj);
            
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
            obj.set_text("Div00");
            obj.set_cssclass("div_line");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","30","61",null,null,"620","29",null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_binddataset("absenceCopy_ds");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_default");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"분류\"/><Cell col=\"1\" text=\"작성날짜\"/></Band><Band id=\"body\"><Cell text=\"bind:code\" displaytype=\"combotext\" combodataset=\"absenceCode_ds\" combocodecol=\"code\" combodatacol=\"name\"/><Cell col=\"1\" text=\"bind:writeDate\" displaytype=\"date\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div00",null,"22","585",null,"19","28",null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_cssclass("div_line");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_absTitle","16","16","136","32",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("0");
            obj.set_text("휴학신청서 보기");
            obj.set_cssclass("sta_title");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00","16","63","100","30",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("1");
            obj.set_text("기 간");
            obj.set_cssclass("sta_default");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00_00","16","92","100","30",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("2");
            obj.set_text("사 유");
            obj.set_cssclass("sta_default");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Radio("Radio00","123","93","440","28",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("3");
            obj.set_innerdataset("absenceCode_ds");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            obj.set_rowcount("1");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Calendar("cal_sDate","127","68","150","20",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("4");
            obj.set_cssclass("cal_default");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Calendar("cal_eDate","317","68","150","20",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("5");
            obj.set_cssclass("cal_default");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_02","16","121","100","100",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("6");
            obj.set_text("첨부파일");
            obj.set_cssclass("sta_default");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","16","220","550",null,null,"31",null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_line");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Button("btn_down","496","123","70","97",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("8");
            obj.set_text("파일\r\n다운로드");
            obj.set_cssclass("btn_default");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Grid("Grid00","115","123","382","97",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("7");
            obj.set_binddataset("absFileList_ds");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_default");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"32\"/><Column size=\"419\"/><Column size=\"80\"/></Columns><Rows><Row size=\"20\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"0\"/><Cell col=\"1\" text=\"fileName\"/><Cell col=\"2\" text=\"fileSize\"/></Band><Band id=\"body\"><Cell text=\"bind:chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:fileName\"/><Cell col=\"2\" text=\"bind:fileSize\"/></Band></Format></Formats>");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Button("btn_insert","Grid00:-100","26","100","25",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("작성하기");
            obj.set_cssclass("btn_insert");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_default","490","305","490","70",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1080,520,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Div00.form.Div00.form.Radio00","value","absence_ds","code");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Div00.form.Div00.form.cal_sDate","value","absence_ds","sDate");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Div00.form.Div00.form.cal_eDate","value","absence_ds","eDate");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("absence.xfdl", function() {
        this.objApp = nexacro.getApplication();
        this.std_code=this.objApp.gds_students.getColumn(0,'s_seq');

        this.absence_onload = function(obj,e)
        {
        	this.transaction(
        		"selectStdOne.absence",//id
        		"/absence/selectStdOne.absence",//url (절대경로)
        		"",//in_ds:U
        		"absenceCopy_ds=out_ds",//()_out_ds
        		"sCode="+this.std_code,//argument
        		"fn_callback_absInfo"
        		)
        };

        this.Div00_btn_insert_onclick = function(obj,e)
        {
        	//휴학 신청서 입력을 위한 모달창
        	var objCF = new ChildFrame();
        	objCF.init("absence_pop",200,100,900,600);
        	objCF.set_titletext("휴학신청서 작성하기");
        	objCF.set_formurl("stdWork::absence_pop.xfdl");
        	objCF.showModal(
        		this.getOwnerFrame(),
        		{code:this.std_code}, // 학번 넘기기
        		this,
        		"fn_callback_pop_abs"
        	);
        };

        this.fn_callback_pop_abs = function()
        {
        	this.reload();
        }


        this.seq="";
        this.Div00_Grid00_oncellclick = function(obj,e)
        {
        	this.seq = this.absenceCopy_ds.getColumn(e.row,"seq");

        		this.transaction(
        		"selectOne.absence",//id
        		"/absence/selectOne.absence",//url (절대경로)
        		"",//in_ds:U
        		"absence_ds=out_ds",//()_out_ds
        		"seq="+this.seq,//argument
        		"fn_callback_absenceOne"
        		)

        		this.Static02.set_text("본인은 보호자의 동의하에 위와 같이 휴학하고자 하오니 허가하여 주시기 바랍니다.");


        };

        this.fn_callback_absenceOne = function()
        {
        	this.transaction(
        		"selectOneFile.absence",//id
        		"/absence/selectOneFile.absence",//url (절대경로)
        		"",//in_ds:U
        		"absFileList_ds=out_ds",//()_out_ds
        		"seq="+this.seq,//argument
        		"fn_callback"
        		)
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.absence_onload,this);
            this.Div00.form.Grid00.addEventHandler("oncellclick",this.Div00_Grid00_oncellclick,this);
            this.Div00.form.Div00.form.cal_sDate.addEventHandler("onchanged",this.Div00_Calendar00_onchanged,this);
            this.Div00.form.Div00.form.cal_eDate.addEventHandler("onchanged",this.Div00_Calendar00_onchanged,this);
            this.Div00.form.Div00.form.btn_down.addEventHandler("onclick",this.Div00_btn_add_onclick,this);
            this.Div00.form.btn_insert.addEventHandler("onclick",this.Div00_btn_insert_onclick,this);
        };

        this.loadIncludeScript("absence.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
