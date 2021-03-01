(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("requestScholar");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1080,520);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("reqScholar_ds", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"seq\" type=\"INT\" size=\"256\"/><Column id=\"std_code\" type=\"STRING\" size=\"256\"/><Column id=\"title\" type=\"STRING\" size=\"256\"/><Column id=\"contents\" type=\"STRING\" size=\"256\"/><Column id=\"writeDate\" type=\"STRING\" size=\"256\"/><Column id=\"checkRead\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("searchType_ds", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">-1</Col><Col id=\"name\">전체</Col></Row><Row><Col id=\"code\">01</Col><Col id=\"name\">학번</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","0","0","29",null,null,"0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_visible("false");
            obj.set_background("RGBA(236,135,135,0.71)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","1051","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_visible("false");
            obj.set_background("RGBA(236,135,135,0.71)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","80","0","800","10",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_visible("false");
            obj.set_background("RGBA(236,135,135,0.71)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","140","490",null,null,"140","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_visible("false");
            obj.set_background("RGBA(236,135,135,0.71)");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","30","10",null,null,"29","30",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Div00");
            obj.set_cssclass("div_line");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","24","81",null,null,"25","59",null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_binddataset("reqScholar_ds");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_default");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"30\"/><Column size=\"80\"/><Column size=\"140\"/><Column size=\"80\"/><Column size=\"70\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"No\"/><Cell col=\"2\" text=\"학번\"/><Cell col=\"3\" text=\"제목\"/><Cell col=\"4\" text=\"작성날짜\"/><Cell col=\"5\" text=\"읽음여부\"/></Band><Band id=\"body\"><Cell text=\"bind:chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:seq\" edittype=\"none\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:std_code\" textAlign=\"center\" displaytype=\"text\"/><Cell col=\"3\" text=\"bind:title\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:writeDate\" textAlign=\"center\" edittype=\"date\"/><Cell col=\"5\" text=\"bind:checkRead\" textAlign=\"center\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_del",null,null,"100","25","25","20",null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("삭제");
            obj.set_cssclass("btn_del");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div00","24","26","355","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_stdCode","94","7","150","25",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("0");
            obj.set_displaynulltext("학번을 입력하세요");
            obj.set_cssclass("edt_default");
            obj.set_visible("false");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Button("btn_search","246","7","60","25",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("1");
            obj.set_text("조회");
            obj.set_cssclass("btn_search");
            obj.set_visible("false");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo00","11","7","70","25",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("2");
            obj.set_innerdataset("searchType_ds");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            obj.set_cssclass("cmb_default");
            obj.set_text("Combo00");
            this.Div00.form.Div00.addChild(obj.name, obj);

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
        this.registerScript("requestScholar.xfdl", function() {

        this.requestScholar_onload = function(obj,e)
        {

        	this.Div00.form.Div00.form.Combo00.set_value("-1");
        	this.transaction(
        		"selectReqScholar.", // 1. strSvcID
        		"/scholarship/selectReqScholar.scholarship", // 2. strURL(절대경로로 입력해주어야함. 로컬호스트 뒤에는 이클립스 서버파일에 있는 path값)
        		"", // 3. strInDatasets - Sds=Fds:U, :A, :N
        		"reqScholar_ds=out_ds", // 4. strOutDatasets - select Fds = Sds
        		"", // 5. strArgument
        		"fn_callback_selectReq" // 6. strCallbackFunc
        	);

        	var arrComboList = [this.com_colCode, this.com_deptCode];
        	this.gfnInitMultiCombo(arrComboList);
        };


        this.Div00_Grid00_oncelldblclick = function(obj,e)
        {
        	var seq = this.reqScholar_ds.getColumn(e.row, "seq");
        	var std_code = this.reqScholar_ds.getColumn(e.row, "std_code");

        	this.transaction(
        			"checkValueReqScholar.scholarship",//id
        			"/scholarship/checkValueReqScholar.scholarship",//url (절대경로)
        			"",//in_ds:U
        			"",//()_out_ds
        			"seq="+seq,//argument
        			"fn_callback_check"
        			)


        	//내용 확인을 위한 모달 창
        	var objCF = new ChildFrame();
        	objCF.init("requestScholar_read_pop",400,100,900,600);
        	objCF.set_titletext("장학금 신청 자세히 보기");
        	objCF.set_formurl("admWork::requestScholar_read_pop.xfdl");
        	objCF.showModal(
        		this.getOwnerFrame(),
        		{seq:seq, std_code:std_code}, // 모달창에 seq 값 넘기기
        		this,
        		"fn_callback_pop_s"
        	);
        };

        this.fn_callback_pop_s = function(seq){
        	this.reload();
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

            if(sColID == "chk")
            {
        		sheadValue = (sheadValue =="1"? "0":"1");
        		obj.setCellProperty("head",e.cell,"text",sheadValue);

        		this.reqScholar_ds.set_enableevent(false);
        		for(var i=0; i< this.reqScholar_ds.getRowCount(); i++)
        		{
        			this.reqScholar_ds.setColumn(i, "chk",sheadValue);
        		}
        		this.reqScholar_ds.set_enableevent(true);
            }

        }






        this.Div00_btn_search_onclick = function(obj,e)
        {

        	var stdCodeValue = this.Div00.form.Div00.form.edt_stdCode.value;
        	this.reqScholar_ds.filter("std_code=='"+stdCodeValue+"'");
        };



        this.Div00_btn_del_onclick = function(obj,e)
        {


        	var arr = this.reqScholar_ds.extractRows("chk==1");
        	if(arr.length==0||arr==-1)
        	{
        		alert("선택된항목이없습니다.");
        		return;
        	} else
        	{
        		var delCheck=this.confirm("정말로 삭제하시겠습니까?");
        		if(delCheck)
        		{
        			this.reqScholar_ds.deleteMultiRows(arr);
        			this.transaction(
        				"deleteReqSch.scholarship",//id
        				"/scholarship/deleteReqSch.scholarship",//url (절대경로)
        				"in_ds=reqScholar_ds:U",//in_ds:U
        				"",//()_out_ds
        				"",//argument
        				"fn_callback"
        				)
        		}
        		else
        		{
        			return;
        		}
        	}

        };

        this.Div00_Div00_Combo00_onitemchanged = function(obj,e)
        {
        	var searchType = this.Div00.form.Div00.form.Combo00.value;
        	if(searchType == '-1')
        	{
        		this.Div00.form.Div00.form.edt_stdCode.set_visible('false');
        		this.Div00.form.Div00.form.btn_search.set_visible('false');
        		this.reqScholar_ds.filter("");
        	}
        	else if (searchType == '01')
        	{
        		this.Div00.form.Div00.form.edt_stdCode.set_visible('true');
        		this.Div00.form.Div00.form.btn_search.set_visible('true');
        	}

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.requestScholar_onload,this);
            this.Div00.form.Grid00.addEventHandler("onheadclick",this.Div00_Grid00_onheadclick,this);
            this.Div00.form.Grid00.addEventHandler("oncelldblclick",this.Div00_Grid00_oncelldblclick,this);
            this.Div00.form.btn_del.addEventHandler("onclick",this.Div00_btn_del_onclick,this);
            this.Div00.form.Div00.form.btn_search.addEventHandler("onclick",this.Div00_btn_search_onclick,this);
            this.Div00.form.Div00.form.Combo00.addEventHandler("onitemchanged",this.Div00_Div00_Combo00_onitemchanged,this);
        };

        this.loadIncludeScript("requestScholar.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
