(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("myClass");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1080,520);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_class", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"classPart\" type=\"STRING\" size=\"256\"/><Column id=\"className\" type=\"STRING\" size=\"256\"/><Column id=\"classSeq\" type=\"INT\" size=\"256\"/><Column id=\"classPoint\" type=\"STRING\" size=\"256\"/><Column id=\"proCode\" type=\"STRING\" size=\"256\"/><Column id=\"proName\" type=\"STRING\" size=\"256\"/><Column id=\"dept\" type=\"STRING\" size=\"256\"/><Column id=\"classTime\" type=\"STRING\" size=\"256\"/><Column id=\"classRoom\" type=\"STRING\" size=\"256\"/><Column id=\"limit\" type=\"STRING\" size=\"256\"/><Column id=\"grade\" type=\"STRING\" size=\"256\"/><Column id=\"classGoal\" type=\"STRING\" size=\"256\"/><Column id=\"classMethod\" type=\"STRING\" size=\"256\"/><Column id=\"classEvaluation\" type=\"STRING\" size=\"256\"/><Column id=\"classReferences\" type=\"STRING\" size=\"256\"/><Column id=\"reqState\" type=\"STRING\" size=\"256\"/><Column id=\"rejectMsg\" type=\"STRING\" size=\"256\"/><Column id=\"reg_date\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01","30","10",null,null,"25","30",null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("sta_line");
            this.addChild(obj.name, obj);

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

            obj = new Static("Static00_00","1051","0","29","520",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_visible("false");
            obj.set_background("RGBA(236,135,135,0.71)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","100","490","800","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_visible("false");
            obj.set_background("RGBA(236,135,135,0.71)");
            this.addChild(obj.name, obj);

            obj = new Grid("gr_classList","40","59",null,null,"39","70",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("ds_class");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_default");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"90\"/><Column size=\"179\"/><Column size=\"59\"/><Column size=\"113\"/><Column size=\"68\"/><Column size=\"209\"/><Column size=\"103\"/><Column size=\"57\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"번호\"/><Cell col=\"1\" text=\"이수구분\"/><Cell col=\"2\" text=\"과목명\"/><Cell col=\"3\" text=\"학년\"/><Cell col=\"4\" text=\"과목코드\"/><Cell col=\"5\" text=\"학점\"/><Cell col=\"6\" text=\"강의시간\"/><Cell col=\"7\" text=\"강의실\"/><Cell col=\"8\" text=\"인원수\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:classPart\" textAlign=\"center\" displaytype=\"combotext\" combodataset=\"gds_part\" combocodecol=\"id\" combodatacol=\"name\"/><Cell col=\"2\" text=\"bind:className\" tooltiptext=\"상세보기\" textDecoration=\"underline\" textAlign=\"center\" cursor=\"pointer\" wordWrap=\"english\"/><Cell col=\"3\" text=\"bind:grade\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:classSeq\" textAlign=\"center\" displaytype=\"text\" maskeditformat=\"#########\"/><Cell col=\"5\" text=\"bind:classPoint\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:classTime\" textAlign=\"center\" wordWrap=\"english\"/><Cell col=\"7\" text=\"bind:classRoom\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:limit\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Combo("co_year",null,"19","120","25","650",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("cmb_default");
            var co_year_innerdataset = new nexacro.NormalDataset("co_year_innerdataset", obj);
            co_year_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">2020</Col><Col id=\"datacolumn\">2020년</Col></Row><Row><Col id=\"codecolumn\">2021</Col><Col id=\"datacolumn\">2021년</Col></Row></Rows>");
            obj.set_innerdataset(co_year_innerdataset);
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Combo("co_semester",null,"19","120","25","525",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("cmb_default");
            var co_semester_innerdataset = new nexacro.NormalDataset("co_semester_innerdataset", obj);
            co_semester_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">1학기</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">2학기</Col></Row></Rows>");
            obj.set_innerdataset(co_semester_innerdataset);
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Combo("co_search",null,"19","120","25","400",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("cmb_default");
            var co_search_innerdataset = new nexacro.NormalDataset("co_search_innerdataset", obj);
            co_search_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">className</Col><Col id=\"datacolumn\">과목명</Col></Row><Row><Col id=\"codecolumn\">classTime</Col><Col id=\"datacolumn\">강의시간</Col></Row><Row><Col id=\"codecolumn\">classRoom</Col><Col id=\"datacolumn\">강의실</Col></Row></Rows>");
            obj.set_innerdataset(co_search_innerdataset);
            obj.set_text("전체");
            obj.set_value("All");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_search",null,"19","170","25","225",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("edt_default");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"19","90","25","130",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("검색");
            obj.set_cssclass("btn_search");
            this.addChild(obj.name, obj);

            obj = new Button("btn_exel",null,null,"100","25","39","40",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("Exel");
            obj.set_cssclass("btn_exel");
            this.addChild(obj.name, obj);

            obj = new Button("btnRetrieve",null,"20","90","25","35",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("초기화");
            obj.set_cssclass("btn_default");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1080,520,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("myClass.xfdl","lib::Common.xjs");
        this.registerScript("myClass.xfdl", function() {
        this.executeIncludeScript("lib::Common.xjs"); /*include "lib::Common.xjs"*/
        this.objApp = nexacro.getApplication();
        this.myClass_onload = function(obj,e)
        {
        	var objDate= new Date();
        	if(objDate.getMonth()+1 && objDate.getMonth()+1 < 8){
        		this.co_year.set_value(objDate.getFullYear());
        		this.co_semester.set_value(1);
        	}else{
        		this.co_year.set_value(objDate.getFullYear());
        		this.co_semester.set_value(2);
        	}
        	var proCode = this.objApp.gds_professor.getColumn(0,"p_seq");
        	this.transaction(
        		"myClassList"
        		,"/proMyClassList.nex"
        		,""
        		,"ds_class=out_ds"
        		,"proCode="+nexacro.wrapQuote(proCode)
        		,"fn_callback"
        	);
        };

        this.fn_callback=function(sId,errCd,errMsg){
        	if (errCd < 0) {
        		trace("sId["+sId+"]: Error["+errCd+"]:"+errMsg);
        	}
        	if(sId=="myClassList"){
        		var date = new Array();
        		for(var i=0; i<this.ds_class.getRowCount(); i++){
        			date[i] = this.ds_class.getColumn(i,"reg_date")
        			date[i] = nexacro.replaceAll(date[i],"-","");
        			date[i] = date[i].substring(0,8);
        			this.ds_class.setColumn(i,"reg_date",date[i]);
        		}
        		var year = this.co_year.value;
        		var startDate =  year+ "0101";
        		var semester = this.co_semester.value;
        		var mDate = year+ "0801";
        		var endDate = year+ "1231";
        		if(semester == "1"){
        			this.ds_class.filter("reg_date >='"+startDate+"'&& reg_date < '"+mDate+"'");
        		}else{
        			this.ds_class.filter("reg_date >='"+mDate+"'&& reg_date <= '"+endDate+"'")
        		}
        	}
        }

        //개설강좌 상세보기
        this.gr_classList_oncellclick = function(obj,e)
        {
        	 if(e.col == 2){
        		var classSeq = this.ds_class.getColumn(e.row,"classSeq");
        		var proCode = this.ds_class.getColumn(e.row,"proCode");
        		let x = this.width/2-500;
        		let y = this.height/2-340;
        		let objCF = new ChildFrame();
        		objCF.init("popAdd",x,y,1000,680,0,0,"prfWork::detail.xfdl");
        		objCF.set_showtitlebar(false);
        		objCF.showModal(this.getOwnerFrame(),{classSeq:classSeq, proCode : proCode, view : 'Y'},this,"fn_pop_callback");
         	}

        };

        //정렬
        this.gr_classList_onheadclick = function(obj,e)
        {
        	this.cfn_GridSort(obj,e);
        };

        //검색
        this.btnSearch_onclick = function(obj,e)
        {
        	let coValue = this.co_search.value;
        	let edtSearch = this.edt_search.text;
        	var year = this.co_year.value;
        	var semester = this.co_semester.value;
        	var startDate = year+ "0101";
        	var mDate = year+ "0801";
        	var endDate = year+ "1231";

        	if(coValue == 'className'  || coValue == 'classTime' || coValue == 'classRoom'){
        		if(semester == "1"){
        			this.ds_class.filter(coValue+".indexOf('"+edtSearch+"')>=0 && reg_date >='"+startDate+"'&& reg_date <'"+mDate+"'");
        		}else{
        			this.ds_class.filter(coValue+".indexOf('"+edtSearch+"')>=0 && reg_date >='"+mDate+"'&& reg_date <='"+endDate+"'");
        		}
        	}else{
        		if(semester == "1"){
        			this.ds_class.filter("reg_date >='"+startDate+"'&& reg_date <= '"+mDate+"'");
        		}else{
        			this.ds_class.filter("reg_date >='"+mDate+"'&& reg_date <= '"+endDate+"'")
        		}
        	}

        };


        this.Export00_onsuccess = function(obj, e)
        {
        	trace("Export00_onsuccess");
        }

        this.Export00_onerror = function(obj, e)
        {
        	trace("Export00_onerror");
        }

        this.btn_exel_onclick = function(obj,e)
        {
        	if(this.ds_class.getRowCount() > 0){
        		var date = this.ds_class.getColumn(0,"reg_date");
        		var year = date.substring(0,4);
        		var month = date.substring(5,6);
        		if(month < 8 ){
        			var semester = year+"년" + " 1학기"
        		}else{
        			var semester = year+"년" + " 2학기"
        		}
        	}
        		this.exportObj = new ExcelExportObject("Export00", this);

        		this.exportObj.set_exportfilename(semester + " 수업 과목");
        		this.exportObj.set_exporturl("http://15.165.196.249/nexacro-xeni/XExportImport");

        		this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.gr_classList, "Sheet1!A1");

        		this.addEventHandler("onsuccess", this.Export00_onsuccess, this);
        		this.addEventHandler("onerror", this.Export00_onerror, this);

        		var intExportedItem = this.exportObj.exportData();

        		trace("Number of Exported Item: " + intExportedItem);
        };

        this.btnRetrieve_onclick = function(obj,e)
        {
        	this.ds_class.filter("");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.myClass_onload,this);
            this.gr_classList.addEventHandler("oncellclick",this.gr_classList_oncellclick,this);
            this.gr_classList.addEventHandler("onheadclick",this.gr_classList_onheadclick,this);
            this.co_year.addEventHandler("onitemchanged",this.Combo01_onitemchanged,this);
            this.co_search.addEventHandler("onitemchanged",this.co_search_onitemchanged,this);
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.btn_exel.addEventHandler("onclick",this.btn_exel_onclick,this);
            this.btnRetrieve.addEventHandler("onclick",this.btnRetrieve_onclick,this);
        };

        this.loadIncludeScript("myClass.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
