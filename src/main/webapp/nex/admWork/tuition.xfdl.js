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
            obj = new Dataset("tuition_ds", this);
            obj._setContents("<ColumnInfo><Column id=\"seq\" type=\"INT\" size=\"256\"/><Column id=\"std_code\" type=\"INT\" size=\"256\"/><Column id=\"std_grade\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"t_enter\" type=\"INT\" size=\"256\"/><Column id=\"t_class\" type=\"INT\" size=\"256\"/><Column id=\"t_std\" type=\"INT\" size=\"256\"/><Column id=\"t_grd\" type=\"INT\" size=\"256\"/><Column id=\"t_ore\" type=\"INT\" size=\"256\"/><Column id=\"tSum\" type=\"INT\" size=\"256\"/><Column id=\"t_date\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("students_ds", this);
            obj._setContents("<ColumnInfo><Column id=\"s_seq\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"age\" type=\"STRING\" size=\"256\"/><Column id=\"email\" type=\"STRING\" size=\"256\"/><Column id=\"contact\" type=\"STRING\" size=\"256\"/><Column id=\"adress\" type=\"STRING\" size=\"256\"/><Column id=\"scholarship\" type=\"STRING\" size=\"256\"/><Column id=\"rest\" type=\"STRING\" size=\"256\"/><Column id=\"grade\" type=\"STRING\" size=\"256\"/><Column id=\"birth\" type=\"STRING\" size=\"256\"/><Column id=\"pw\" type=\"STRING\" size=\"256\"/><Column id=\"gender\" type=\"STRING\" size=\"256\"/><Column id=\"deptCode\" type=\"STRING\" size=\"256\"/><Column id=\"colCode\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Grid("grd_std","9","71","420",null,null,"49",null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_binddataset("students_ds");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_default");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"학번\"/><Cell col=\"1\" text=\"이름\"/><Cell col=\"2\" text=\"학과\"/></Band><Band id=\"body\"><Cell text=\"bind:s_seq\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:name\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:deptCode\" textAlign=\"center\" displaytype=\"combotext\" combodataset=\"deptCode\" combocodecol=\"code\" combodatacol=\"name\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("grd_tuition","439","71",null,null,"10","49",null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_binddataset("tuition_ds");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_default");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"학번\"/><Cell col=\"1\" text=\"학년\"/><Cell col=\"2\" text=\"학기\"/><Cell col=\"3\" text=\"등록금 총 합계\"/></Band><Band id=\"body\"><Cell text=\"bind:std_code\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:std_grade\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:type\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:tSum\" textAlign=\"center\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_del",null,null,"100","25","10","12",null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("삭제");
            obj.set_cssclass("btn_del");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_entire",null,"29","100","25","10",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("전체 보기");
            obj.set_cssclass("btn_default");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div00","8","21","451","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cmb_dept","105","7","130","25",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("4");
            obj.set_cssclass("cmb_default");
            obj.set_innerdataset("deptCode");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            obj.set_visible("false");
            obj.set_text("Combo00");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Combo("cmb_type","5","7","80","25",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("0");
            obj.set_innerdataset("searchType_ds");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            obj.set_cssclass("cmb_default");
            obj.set_text("Combo00");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_etcSearch","105","7","130","25",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("1");
            obj.set_cssclass("edt_default");
            obj.set_visible("false");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Button("btn_searchEtc","243","7","60","25",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("2");
            obj.set_background("");
            obj.set_cssclass("btn_search");
            obj.set_text("조회");
            obj.set_visible("false");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Button("btn_tuit","339","7","80","25",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("3");
            obj.set_text("입력");
            obj.set_cssclass("btn_insert");
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
        this.registerScript("tuition.xfdl", function() {
        this.tuition_onload = function(obj,e)
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
        		"selectAll.tuition",//id
        		"/tuition/selectAll.tuition",//url (절대경로)
        		"",//in_ds:U
        		"tuition_ds=out_ds",//()_out_ds
        		"",//argument
        		"fn_callback_tuition"
        		)
        }

        this.fn_callback_tuition = function()
        {
        		for(var i=0;i<this.tuition_ds.getRowCount();i++)
        	{
        		var sDate =this.tuition_ds.getColumn(i,"t_date");
        		var mon = sDate.substr(5,2);
        		var sMonth = nexacro.toNumber(mon)
        		if(sMonth<8)
        		{
        			this.tuition_ds.setColumn(i,"type","1학기");
        		}
        		else
        		{
        			this.tuition_ds.setColumn(i,"type","2학기");
        		}
        	}
        };


        this.std_code="";
        this.Div00_grd_std_oncellclick = function(obj,e)
        {
        	this.std_code = this.students_ds.getColumn(e.row,"s_seq");
        	this.tuition_ds.filter("std_code=='"+this.std_code+"'");
        };

        this.Div00_btn_tuit_onclick = function(obj,e)
        {

        	//등록금 입력을 위한 모달창
        	var objCF = new ChildFrame();
        	objCF.init("tuition_insert_pop",400,100,400,400);
        	objCF.set_titletext(this.std_code+"등록금 입력");
        	objCF.set_formurl("admWork::tuition_insert_pop.xfdl");
        	objCF.showModal(
        		this.getOwnerFrame(),
        		{std_code:this.std_code}, // 학번
        		this,
        		"fn_callback_insertTuition"
        	);
        };

        this.fn_callback_insertTuition = function()
        {
        	this.reload();
        }



        this.Div00_grd_tuition_oncelldblclick = function(obj,e)
        {
        	var seq = this.tuition_ds.getColumn(e.row,"seq");
        	//등록금 수정을 위한 모달창
        	var objCF = new ChildFrame();
        	objCF.init("tuition_read_pop",400,100,400,400);
        	objCF.set_titletext("등록금 확인하기");
        	objCF.set_formurl("admWork::tuition_read_pop.xfdl");
        	objCF.showModal(
        		this.getOwnerFrame(),
        		{seq:seq}, // 학번+작성날짜
        		this,
        		"fn_callback_updateTuition"
        	);
        };

        this.fn_callback_updateTuition=function()
        {
        	this.reload();
        }


        this.seq="";
        this.Div00_grd_tuition_oncellclick = function(obj,e)
        {
        	this.seq=this.tuition_ds.getColumn(e.row,"seq");
        };

        this.Div00_btn_del_onclick = function(obj,e)
        {
        	alert(this.seq)
        	var nRow = this.tuition_ds.findRow("seq",this.seq);
        	this.tuition_ds.deleteRow(nRow);
        	this.transaction(
        		"deleteOne.tuition",//id
        		"/tuition/deleteOne.tuition",//url (절대경로)
        		"",//in_ds:U
        		"out_ds=tuition_ds",//()_out_ds
        		"seq="+this.seq,//argument
        		"fn_callback"
        		)
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
        	this.tuition_ds.filter("");
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

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.tuition_onload,this);
            this.Div00.form.grd_std.addEventHandler("oncellclick",this.Div00_grd_std_oncellclick,this);
            this.Div00.form.grd_tuition.addEventHandler("oncelldblclick",this.Div00_grd_tuition_oncelldblclick,this);
            this.Div00.form.grd_tuition.addEventHandler("oncellclick",this.Div00_grd_tuition_oncellclick,this);
            this.Div00.form.btn_del.addEventHandler("onclick",this.Div00_btn_del_onclick,this);
            this.Div00.form.btn_entire.addEventHandler("onclick",this.Div00_btn_entire_onclick,this);
            this.Div00.form.Div00.form.cmb_type.addEventHandler("onitemchanged",this.Div00_Div00_cmb_type_onitemchanged,this);
            this.Div00.form.Div00.form.btn_searchEtc.addEventHandler("onclick",this.Div00_btn_searchEtc_onclick,this);
            this.Div00.form.Div00.form.btn_tuit.addEventHandler("onclick",this.Div00_btn_tuit_onclick,this);
        };

        this.loadIncludeScript("tuition.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
