(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("scholarship");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1080,520);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("students_ds", this);
            obj._setContents("<ColumnInfo><Column id=\"s_seq\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"age\" type=\"STRING\" size=\"256\"/><Column id=\"email\" type=\"STRING\" size=\"256\"/><Column id=\"contact\" type=\"STRING\" size=\"256\"/><Column id=\"adress\" type=\"STRING\" size=\"256\"/><Column id=\"scholarship\" type=\"STRING\" size=\"256\"/><Column id=\"rest\" type=\"STRING\" size=\"256\"/><Column id=\"grade\" type=\"STRING\" size=\"256\"/><Column id=\"birth\" type=\"STRING\" size=\"256\"/><Column id=\"pw\" type=\"STRING\" size=\"256\"/><Column id=\"gender\" type=\"STRING\" size=\"256\"/><Column id=\"deptCode\" type=\"STRING\" size=\"256\"/><Column id=\"colCode\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("scholorship_ds", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"std_code\" type=\"INT\" size=\"256\"/><Column id=\"std_grade\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"s_kind\" type=\"INT\" size=\"256\"/><Column id=\"s_rec\" type=\"INT\" size=\"256\"/><Column id=\"s_smt\" type=\"INT\" size=\"256\"/><Column id=\"s_spt\" type=\"INT\" size=\"256\"/><Column id=\"s_etc\" type=\"INT\" size=\"256\"/><Column id=\"sSum\" type=\"INT\" size=\"256\"/><Column id=\"s_date\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("searchType_ds", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">-1</Col><Col id=\"name\">전체</Col></Row><Row><Col id=\"code\">01</Col><Col id=\"name\">학과</Col></Row><Row><Col id=\"code\">02</Col><Col id=\"name\">학번</Col></Row><Row><Col id=\"code\">03</Col><Col id=\"name\">이름</Col></Row></Rows>");
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

            obj = new Div("Div00","30","10",null,null,"29","30",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_cssclass("div_line");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_std","8","55","420",null,null,"49",null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_binddataset("students_ds");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_default");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"학번\"/><Cell col=\"1\" text=\"이름\"/><Cell col=\"2\" text=\"학과\"/></Band><Band id=\"body\"><Cell text=\"bind:s_seq\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:name\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:deptCode\" textAlign=\"center\" displaytype=\"combotext\" combodataset=\"deptCode\" combocodecol=\"code\" combodatacol=\"name\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("grd_scholar","439","55",null,null,"10","49",null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_binddataset("scholorship_ds");
            obj.set_cssclass("grd_default");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"26\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"114\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"0\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"학번\"/><Cell col=\"2\" text=\"학년\"/><Cell col=\"3\" text=\"학기\"/><Cell col=\"4\" text=\"장학금 총 합계\"/><Cell col=\"5\" text=\"입력 날짜\"/></Band><Band id=\"body\"><Cell text=\"bind:chk\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:std_code\" textAlign=\"center\" displaytype=\"text\"/><Cell col=\"2\" text=\"bind:std_grade\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:type\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:sSum\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:s_date\" textAlign=\"center\" displaytype=\"date\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_del",null,null,"100","25","10","12",null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("삭제");
            obj.set_cssclass("btn_del");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_entire",null,"20","100","25","10",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("전체 보기");
            obj.set_cssclass("btn_default");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div00","8","12","570","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cmb_type","13","7","80","25",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("0");
            obj.set_innerdataset("searchType_ds");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            obj.set_cssclass("cmb_default");
            obj.set_text("");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_etcSearch","103","7","130","25",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("1");
            obj.set_cssclass("edt_default");
            obj.set_visible("false");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Button("btn_searchEtc","241","7","60","25",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("2");
            obj.set_background("");
            obj.set_cssclass("btn_search");
            obj.set_text("조회");
            obj.set_visible("false");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Button("btn_scholar","312","7","100","25",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("3");
            obj.set_text("입력");
            obj.set_cssclass("btn_insert");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Combo("cmb_dept","103","7","130","25",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("4");
            obj.set_cssclass("cmb_default");
            obj.set_innerdataset("deptCode");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            obj.set_visible("false");
            obj.set_text("Combo00");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00","1050","0","30",null,null,"0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_visible("false");
            obj.set_background("RGBA(236,135,135,0.71)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","100","490","800","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
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
        this.registerScript("scholarship.xfdl", function() {
        this.scholarship_onload = function(obj,e)
        {
        	this.Div00.form.Div00.form.cmb_type.set_value('-1');
        	this.transaction(
        		"selectAllStd.students",//id
        		"/students/selectAllStd.students",//url (절대경로)
        		"",//in_ds:U
        		"students_ds=out_ds",//()_out_ds
        		"",//argument
        		"fn_callback_std"
        	)
        };
        this.fn_callback_std = function()
        {
        	this.transaction(
        		"selectAll.scholarship",//id
        		"/scholarship/selectAll.scholarship",//url (절대경로)
        		"",//in_ds:U
        		"scholorship_ds=out_ds",//()_out_ds
        		"",//argument
        		"fn_callback_schola"
        	)
        };


        this.fn_callback_schola = function()
        {
        	for(var i=0;i<this.scholorship_ds.getRowCount();i++)
        	{
        		var sDate =this.scholorship_ds.getColumn(i,"s_date");
        		var mon = sDate.substr(5,2);
        		var sMonth = nexacro.toNumber(mon)
        		if(sMonth<8)
        		{
        			this.scholorship_ds.setColumn(i,"type","1학기");
        		}
        		else
        		{
        			this.scholorship_ds.setColumn(i,"type","2학기");
        		}
        	}
        }

        this.std_code="";
        this.Div00_grd_std_oncellclick = function(obj,e)
        {
        	this.std_code = this.students_ds.getColumn(e.row,"s_seq");
        	this.scholorship_ds.filter("std_code=='"+this.std_code+"'");
        };

        this.Div00_btn_scholar_onclick = function(obj,e)
        {
        	//장학금 입력을 위한 모달창
        	var objCF = new ChildFrame();
        	objCF.init("scholar_insert_pop",400,100,400,400);
        	objCF.set_titletext(this.std_code+"장학금 입력");
        	objCF.set_formurl("admWork::scholar_insert_pop.xfdl");
        	objCF.showModal(
        		this.getOwnerFrame(),
        		{std_code:this.std_code}, // 학번
        		this,
        		"fn_callback_insertScholar"
        	);
        };


        this.fn_callback_insertScholar = function(cId, sCode)
        {
        		this.transaction(
        		"selectAll.scholarship",//id
        		"/scholarship/selectAll.scholarship",//url (절대경로)
        		"",//in_ds:U
        		"scholorship_ds=out_ds",//()_out_ds
        		"",//argument
        		"fn_callback_schola_filter"
        		);
        		this.std_code=sCode;
        };

        this.fn_callback_schola_filter = function()
        {
        	this.fn_callback_schola();
        	this.scholorship_ds.filter("std_code=='"+this.std_code+"'");
        }

        this.Div00_grd_scholar_oncelldblclick = function(obj,e)
        {
        	var seq = this.scholorship_ds.getColumn(e.row,"seq");
        	//장학금 수정을 위한 모달창
        	var objCF = new ChildFrame();
        	objCF.init("scholar_read_pop",400,100,400,400);
        	objCF.set_showtitlebar(false);
        	objCF.set_formurl("admWork::scholar_read_pop.xfdl");
        	objCF.showModal(
        		this.getOwnerFrame(),
        		{seq:seq}, // 학번+작성날짜
        		this,
        		"fn_callback_updateScholar"
        	);
        };




        this.fn_callback_updateScholar=function(cId,sCode)
        {
        	this.transaction(
        		"selectAll.scholarship",//id
        		"/scholarship/selectAll.scholarship",//url (절대경로)
        		"",//in_ds:U
        		"scholorship_ds=out_ds",//()_out_ds
        		"",//argument
        		"fn_callback_schola_filter"
        		);
        		this.std_code=sCode;
        };



        this.Div00_btn_del_onclick = function(obj,e)
        {
        	var objDs = this.scholorship_ds;
        	var arr = objDs.extractRows("chk==1");
        	if(arr.length==0 || arr.length== -1)
        	{
        		alert("선택된 항목이 없습니다.");
        		return;
        	}
        	else if (objDs.getRowCount() == 0)
        	{
        		alert("선택된 항목이 없습니다.");
        		return;
        	}

        	var delCheck = this.confirm("정말로 삭제하시겠습니까?");
        	if(delCheck)
        	{
        	objDs.deleteMultiRows(arr);

        	this.transaction(
        		"deleteOne.scholarship",//id
        		"/scholarship/deleteOne.scholarship",//url (절대경로)
        		"in_ds=scholorship_ds:U",//in_ds:U
        		"",//()_out_ds
        		"",//argument
        		"fn_callback"
        	)

        	this.Div00.form.grd_scholar.setCellProperty("head",0,"text",0);
        	}
        	else
        	{
        		return;
        	}


        };

        this.Div00_btn_searchEtc_onclick = function(obj,e)
        {
        	var searchType = this.Div00.form.Div00.form.cmb_type.value;
        	var comDept = this.Div00.form.Div00.form.cmb_dept.value;
        	var con = this.Div00.form.Div00.form.edt_etcSearch.value;
        	if(searchType == '01')
        	{
        		this.students_ds.filter("deptCode=='"+comDept+"'");
        	}
        	else if (searchType == '02')
        	{
        		this.students_ds.filter("s_seq=='"+con+"'");
        	}
        	else if (searchType == '03')
        	{
        		this.students_ds.filter("name=='"+con+"'");
        	}
        	con="";
        };

        this.Div00_btn_entire_onclick = function(obj,e)
        {
        	this.scholorship_ds.filter("");
        	this.fn_callback_schola();

        };




        this.Div00_Div00_cmb_type_onitemchanged = function(obj,e)
        {
        	var searchType = this.Div00.form.Div00.form.cmb_type.value;
        	if(searchType == '-1')
        	{
        		this.students_ds.filter("");
        		this.Div00.form.Div00.form.edt_etcSearch.set_visible(false);
        		this.Div00.form.Div00.form.btn_searchEtc.set_visible(false);
        		this.Div00.form.Div00.form.cmb_dept.set_visible(false);
        	}
        	else if (searchType=='01')
        	{
        		this.Div00.form.Div00.form.cmb_dept.set_visible(true);
        		this.Div00.form.Div00.form.btn_searchEtc.set_visible(true);
        		this.Div00.form.Div00.form.edt_etcSearch.set_visible(false);
        	}
        	else if (searchType=='02')
        	{
        		this.Div00.form.Div00.form.edt_etcSearch.set_visible(true);
        		this.Div00.form.Div00.form.btn_searchEtc.set_visible(true);
        		this.Div00.form.Div00.form.cmb_dept.set_visible(false);
        		this.Div00.form.Div00.form.edt_etcSearch.set_displaynulltext("학번을 입력하세요");
        	}
        	else if (searchType=='03')
        	{
        		this.Div00.form.Div00.form.edt_etcSearch.set_visible(true);
        		this.Div00.form.Div00.form.btn_searchEtc.set_visible(true);
        		this.Div00.form.Div00.form.cmb_dept.set_visible(false);
        		this.Div00.form.Div00.form.edt_etcSearch.set_displaynulltext("이름을 입력하세요");
        	}
        };


        this.Div00_grd_scholar_onheadclick = function(obj,e)
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

            if(sColID == "chk")
            {
        		sheadValue = (sheadValue =="1"? "0":"1");
        		obj.setCellProperty("head",e.cell,"text",sheadValue);

        		this.scholorship_ds.set_enableevent(false);
        		for(var i=0; i< this.scholorship_ds.getRowCount(); i++)
        		{
        			this.scholorship_ds.setColumn(i, "chk",sheadValue);
        		}
        		this.scholorship_ds.set_enableevent(true);
            }

        }



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.scholarship_onload,this);
            this.Div00.form.grd_std.addEventHandler("oncellclick",this.Div00_grd_std_oncellclick,this);
            this.Div00.form.grd_std.addEventHandler("oncelldblclick",this.Div00_grd_std_oncelldblclick,this);
            this.Div00.form.grd_scholar.addEventHandler("oncelldblclick",this.Div00_grd_scholar_oncelldblclick,this);
            this.Div00.form.grd_scholar.addEventHandler("oncellclick",this.Div00_grd_scholar_oncellclick,this);
            this.Div00.form.grd_scholar.addEventHandler("onheadclick",this.Div00_grd_scholar_onheadclick,this);
            this.Div00.form.btn_del.addEventHandler("onclick",this.Div00_btn_del_onclick,this);
            this.Div00.form.btn_entire.addEventHandler("onclick",this.Div00_btn_entire_onclick,this);
            this.Div00.form.Div00.form.cmb_type.addEventHandler("onitemchanged",this.Div00_Div00_cmb_type_onitemchanged,this);
            this.Div00.form.Div00.form.btn_searchEtc.addEventHandler("onclick",this.Div00_btn_searchEtc_onclick,this);
            this.Div00.form.Div00.form.btn_scholar.addEventHandler("onclick",this.Div00_btn_scholar_onclick,this);
        };

        this.loadIncludeScript("scholarship.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
