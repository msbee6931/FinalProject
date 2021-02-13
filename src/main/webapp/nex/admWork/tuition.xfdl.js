(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("tuition");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1080,520);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dept_ds", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">00</Col><Col id=\"name\">전체</Col></Row><Row><Col id=\"code\">01</Col><Col id=\"name\">인문대학</Col></Row><Row><Col id=\"code\">02</Col><Col id=\"name\">자연과학대학</Col></Row><Row><Col id=\"code\">03</Col><Col id=\"name\">공과대학</Col></Row><Row><Col id=\"code\">04</Col><Col id=\"name\">예술대학</Col></Row><Row><Col id=\"code\">05</Col><Col id=\"name\">보건대학</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("tuit_ds", this);
            obj._setContents("<ColumnInfo><Column id=\"checkbox\" type=\"STRING\" size=\"256\"/><Column id=\"dept_code\" type=\"STRING\" size=\"256\"/><Column id=\"std_code\" type=\"STRING\" size=\"256\"/><Column id=\"std_name\" type=\"STRING\" size=\"256\"/><Column id=\"tuit_price\" type=\"INT\" size=\"256\"/><Column id=\"tuit_check\" type=\"STRING\" size=\"256\"/><Column id=\"scholar_price\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"dept_code\">03</Col><Col id=\"std_name\">박현</Col><Col id=\"tuit_price\">0</Col><Col id=\"tuit_check\">N</Col><Col id=\"scholar_price\">00</Col><Col id=\"checkbox\"/><Col id=\"std_code\">201102159</Col></Row><Row><Col id=\"dept_code\">02</Col><Col id=\"std_code\">201301236</Col><Col id=\"std_name\">홍길동</Col><Col id=\"tuit_price\">0</Col><Col id=\"tuit_check\">N</Col><Col id=\"scholar_price\">00</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("scholar_ds", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"percentage\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">00</Col><Col id=\"name\">일반</Col><Col id=\"percentage\">0</Col></Row><Row><Col id=\"code\">01</Col><Col id=\"name\">선행</Col><Col id=\"percentage\">0.3</Col></Row><Row><Col id=\"code\">02</Col><Col id=\"name\">추천장학</Col><Col id=\"percentage\">0.5</Col></Row><Row><Col id=\"code\">03</Col><Col id=\"name\">재정지원</Col><Col id=\"percentage\">0.8</Col></Row><Row><Col id=\"code\">04</Col><Col id=\"name\">성적우수</Col><Col id=\"percentage\">1.0</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","0","0","29",null,null,"0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_visible("false");
            obj.set_background("RGBA(236,135,135,0.71)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","80","0","800","10",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_visible("false");
            obj.set_background("RGBA(236,135,135,0.71)");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","30","38","1021","452",null,null,null,null,null,null,this);
            obj.set_taborder("2");
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
            obj.set_displaynulltext("학과 선택");
            obj.set_text("Combo00");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_etcSearch","198","21","130","25",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_displaynulltext("학번 또는 이름 검색");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("Grid00","32","68","957","351",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_binddataset("tuit_ds");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"27\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"0\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"학과\" displaytype=\"normal\" combodataset=\"dept_ds\" combocodecol=\"code\" combodatacol=\"name\"/><Cell col=\"2\" text=\"학번\"/><Cell col=\"3\" text=\"이름\"/><Cell col=\"4\" text=\"등록금\"/><Cell col=\"5\" text=\"등록금 납부 여부\"/><Cell col=\"6\" text=\"장학금\"/></Band><Band id=\"body\"><Cell text=\"bind:checkbox\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"bind:dept_code\" displaytype=\"combotext\" combodataset=\"dept_ds\" combocodecol=\"code\" combodatacol=\"name\"/><Cell col=\"2\" text=\"bind:std_code\"/><Cell col=\"3\" text=\"bind:std_name\"/><Cell col=\"4\" text=\"bind:tuit_price\"/><Cell col=\"5\" text=\"bind:tuit_check\"/><Cell col=\"6\" text=\"bind:scholar_price\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_searchDept","154","21","25","25",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_background("");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_tuit","819","21","80","25",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("등록금 입력");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_scholar","909","21","80","25",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("장학금 입력");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","30","9","200","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text(" 등록금  관리");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","1050","0","30",null,null,"0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_visible("false");
            obj.set_background("RGBA(236,135,135,0.71)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","100","490","800","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_visible("false");
            obj.set_background("RGBA(236,135,135,0.71)");
            this.addChild(obj.name, obj);

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
        this.registerScript("tuition.xfdl", function() {

        this.Div00_btn_tuit_onclick = function(obj,e)
        {
        	//체크박스 유효성 검사
        	let check = this.tuit_ds.extractRows("checkbox == 1");
        	if(check.length==0 || check == -1){
        		alert("선택된항목이없습니다.");
        		return;
        	};

        	//체크된 항목의 학번 배열값
        	var arrCode = new Array();
        	for(let i =0; i<this.tuit_ds.getRowCount();i++){
        		if(this.tuit_ds.getColumn(i,"checkbox") == 1){
        			arrCode.push(this.tuit_ds.getColumn(i,"std_code"));
        		}
        	}


        	//등록금 입력을 위한 모달창
        	var objCF = new ChildFrame();
        	objCF.init("tuition_insert_pop",400,100,400,400);
        	objCF.set_titletext("등록금 입력");
        	objCF.set_formurl("admWork::tuition_insert_pop.xfdl");
        	objCF.showModal(
        		this.getOwnerFrame(),
        		{code:arrCode}, // 배열값 넘기기
        		this,
        		"fn_callback_pop_t"
        	);
        };

        //등록금 입력 콜백 함수
        this.fn_callback_pop_t = function(id,sReturn)
        {
        	let tSum = sReturn;
        	for(let i =0; i<this.tuit_ds.getRowCount();i++){
        		if(this.tuit_ds.getColumn(i,"checkbox") == 1){
        			this.tuit_ds.setColumn(i,"tuit_price",tSum);
        		}
        	}

        	//콜백 후 지정 체크박스 해제
        	this.Div00.form.Grid00.setCellProperty("head",0,"text",0);
        	for(let i =0; i<this.tuit_ds.getRowCount();i++){
        		if(this.tuit_ds.getColumn(i,"checkbox") == 1){
        			this.tuit_ds.setColumn(i,"checkbox",0);
        		}
        	}
        }

        this.Div00_btn_scholar_onclick = function(obj,e)
        {
        	//체크박스 유효성 검사
        	let check = this.tuit_ds.extractRows("checkbox == 1");
        	if(check.length==0||check == -1){
        		alert("선택된항목이없습니다.");
        		return;
        	};

        	//체크된 항목의 학번 배열값
        	var arrCode = new Array();
        	for(let i =0; i<this.tuit_ds.getRowCount();i++){
        		if(this.tuit_ds.getColumn(i,"checkbox") == 1){
        			arrCode.push(this.tuit_ds.getColumn(i,"std_code"));
        		}
        	}

        	let sCode = this.tuit_ds.getColumn(check,"std_code")
        	//장학금 등록을 위한 모달 창
        	var objCF = new ChildFrame();
        	objCF.init("scholar_insert_pop",400,100,400,200);
        	objCF.set_titletext("장학금 입력");
        	objCF.set_formurl("admWork::scholar_insert_pop.xfdl");
        	objCF.showModal(
        		this.getOwnerFrame(),
        		{code:arrCode},
        		this,
        		"fn_callback_pop_s"
        	);
        };

        //장학금 입력 콜백 함수
        this.fn_callback_pop_s = function(id,sReturn)
        {
        	var sCode = sReturn;
        	for(let i =0; i<this.tuit_ds.getRowCount();i++){
        		if(this.tuit_ds.getColumn(i,"checkbox") == 1){
        			this.tuit_ds.setColumn(i,"scholar_price",sReturn);
        		}
        	}
        	//콜백 후 지정 체크박스 해제
        	this.Div00.form.Grid00.setCellProperty("head",0,"text",0);
        	for(let i =0; i<this.tuit_ds.getRowCount();i++){
        		if(this.tuit_ds.getColumn(i,"checkbox") == 1){
        			this.tuit_ds.setColumn(i,"checkbox",0);
        		}
        	}

        }

        //헤더 전체  클릭 적용
        this.Div00_Grid00_onheadclick = function(obj,e)
        {
        	if(e.cell == 0)
            {
                this.gf_setCheckAll(obj, e);
            }

        };
        this.gv_isCheckAll = 0;
        this.gf_setCheckAll = function(obj, e)
        {
            var sColID = obj.getCellProperty("body", e.cell, "text").replace("bind:", "");

        	var sheadValue = obj.getCellProperty("head",e.cell,"text");

            if(sColID == "checkbox")
            {
        		sheadValue = (sheadValue =="1"? "0":"1");
        		obj.setCellProperty("head",e.cell,"text",sheadValue);

        		this.tuit_ds.set_enableevent(false);
        		for(var i=0; i< this.tuit_ds.getRowCount(); i++)
        		{
        			this.tuit_ds.setColumn(i, "checkbox",sheadValue);
        		}
        		this.tuit_ds.set_enableevent(true);
            }

        }


        //학과 검색
        this.Div00_btn_searchDept_onclick = function(obj,e)
        {
        	let oValue = this.Div00.form.Combo00.value;
        	if (oValue == 00 || oValue == null)
        	{
        		this.tuit_ds.filter("");
        	} else {
        		this.tuit_ds.filter("dept_code == '"+oValue+"'");
        	}

        	//검색 후 지정 체크박스 해제
        	this.Div00.form.Grid00.setCellProperty("head",0,"text",0);
        	for(let i =0; i<this.tuit_ds.getRowCount();i++){
        		if(this.tuit_ds.getColumn(i,"checkbox") == 1){
        			this.tuit_ds.setColumn(i,"checkbox",0);
        		}
        	}



        };

        //학번 또는 이름 검색
        this.Div00_btn_searchEtc_onclick = function(obj,e)
        {
        	let sValue = this.Div00.form.edt_etcSearch.value;
        	if (sValue == null || sValue == "")
        	{
        		this.tuit_ds.filter("");
        	} else {
        		this.tuit_ds.filter("std_code == '"+sValue+"' || std_name == '"+sValue+"'" );
        	}

        	//검색 후 지정 체크박스 해제
        	this.Div00.form.Grid00.setCellProperty("head",0,"text",0);
        	for(let i =0; i<this.tuit_ds.getRowCount();i++){
        		if(this.tuit_ds.getColumn(i,"checkbox") == 1){
        			this.tuit_ds.setColumn(i,"checkbox",0);
        		}
        	}
        	this.Div00.form.edt_etcSearch.set_value(""); // 검색후 edit창 초기화
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Div00.form.btn_searchEtc.addEventHandler("onclick",this.Div00_btn_searchEtc_onclick,this);
            this.Div00.form.Combo00.addEventHandler("canitemchange",this.Div00_Combo00_canitemchange,this);
            this.Div00.form.Grid00.addEventHandler("onheadclick",this.Div00_Grid00_onheadclick,this);
            this.Div00.form.btn_searchDept.addEventHandler("onclick",this.Div00_btn_searchDept_onclick,this);
            this.Div00.form.btn_tuit.addEventHandler("onclick",this.Div00_btn_tuit_onclick,this);
            this.Div00.form.btn_scholar.addEventHandler("onclick",this.Div00_btn_scholar_onclick,this);
        };

        this.loadIncludeScript("tuition.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
