(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("gradeRank");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1080,520);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_class", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"classPart\" type=\"STRING\" size=\"256\"/><Column id=\"className\" type=\"STRING\" size=\"256\"/><Column id=\"classSeq\" type=\"INT\" size=\"256\"/><Column id=\"classPoint\" type=\"STRING\" size=\"256\"/><Column id=\"passFail\" type=\"STRING\" size=\"256\"/><Column id=\"proCode\" type=\"STRING\" size=\"256\"/><Column id=\"proName\" type=\"STRING\" size=\"256\"/><Column id=\"dept\" type=\"STRING\" size=\"256\"/><Column id=\"classTime\" type=\"STRING\" size=\"256\"/><Column id=\"classRoom\" type=\"STRING\" size=\"256\"/><Column id=\"limit\" type=\"STRING\" size=\"256\"/><Column id=\"grade\" type=\"STRING\" size=\"256\"/><Column id=\"classGoal\" type=\"STRING\" size=\"256\"/><Column id=\"classMethod\" type=\"STRING\" size=\"256\"/><Column id=\"classEvaluation\" type=\"STRING\" size=\"256\"/><Column id=\"classReferences\" type=\"STRING\" size=\"256\"/><Column id=\"reqState\" type=\"STRING\" size=\"256\"/><Column id=\"rejectMsg\" type=\"STRING\" size=\"256\"/><Column id=\"reg_date\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_stdClass", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"sCode\" type=\"INT\" size=\"256\"/><Column id=\"sName\" type=\"STRING\" size=\"256\"/><Column id=\"classCode\" type=\"INT\" size=\"256\"/><Column id=\"basket\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_rank", this);
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"id\">A+</Col><Col id=\"name\">A+</Col></Row><Row><Col id=\"id\">A</Col><Col id=\"name\">A</Col></Row><Row><Col id=\"id\">B+</Col><Col id=\"name\">B+</Col></Row><Row><Col id=\"id\">B</Col><Col id=\"name\">B</Col></Row><Row><Col id=\"id\">C+</Col><Col id=\"name\">C+</Col></Row><Row><Col id=\"id\">C</Col><Col id=\"name\">C</Col></Row><Row><Col id=\"id\">D+</Col><Col id=\"name\">D+</Col></Row><Row><Col id=\"id\">D</Col><Col id=\"name\">D</Col></Row><Row><Col id=\"id\">F</Col><Col id=\"name\">F</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_passFail", this);
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"id\">P</Col><Col id=\"name\">PASS</Col></Row><Row><Col id=\"id\">F</Col><Col id=\"name\">FAIL</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grade", this);
            obj._setContents("<ColumnInfo><Column id=\"sCode\" type=\"INT\" size=\"256\"/><Column id=\"sName\" type=\"STRING\" size=\"256\"/><Column id=\"classCode\" type=\"INT\" size=\"256\"/><Column id=\"attend\" type=\"INT\" size=\"256\"/><Column id=\"mid\" type=\"INT\" size=\"256\"/><Column id=\"otest\" type=\"INT\" size=\"256\"/><Column id=\"task\" type=\"INT\" size=\"256\"/><Column id=\"fin\" type=\"INT\" size=\"256\"/><Column id=\"total\" type=\"INT\" size=\"256\"/><Column id=\"rank\" type=\"STRING\" size=\"256\"/><Column id=\"grade\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
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

            obj = new Grid("gr_classList","45","50","210",null,null,"202",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("ds_class");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_default");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"141\"/><Column size=\"68\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"과목명\"/><Cell col=\"1\" text=\"인원 수\"/></Band><Band id=\"body\"><Cell text=\"bind:className\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:limit\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("gr_rank","270","50",null,null,"30","70",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("ds_grade");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_default");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"94\"/><Column size=\"67\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"52\"/><Column size=\"68\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"학번\"/><Cell col=\"1\" text=\"성명\"/><Cell col=\"2\" text=\"출석\"/><Cell col=\"3\" text=\"중간고사\"/><Cell col=\"4\" text=\"수시\" textAlign=\"center\"/><Cell col=\"5\" text=\"과제\"/><Cell col=\"6\" text=\"기말고사\"/><Cell col=\"7\" text=\"총점\"/><Cell col=\"8\" text=\"순위\"/><Cell col=\"9\" text=\"성적\"/></Band><Band id=\"body\"><Cell text=\"bind:sCode\" textAlign=\"center\" displaytype=\"mask\" maskeditformat=\"#########\"/><Cell col=\"1\" text=\"bind:sName\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:attend\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:mid\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:otest\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:task\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:fin\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:total\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:rank\" textAlign=\"center\"/><Cell col=\"9\" text=\"bind:grade\" displaytype=\"combocontrol\" textAlign=\"center\" combodataset=\"ds_rank\" combocodecol=\"id\" combodatacol=\"name\" edittype=\"combo\"/></Band></Format><Format id=\"PassFail\"><Columns><Column size=\"94\"/><Column size=\"67\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"92\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"학번\"/><Cell col=\"1\" text=\"성명\"/><Cell col=\"2\" text=\"출석\"/><Cell col=\"3\" text=\"중간고사\"/><Cell col=\"4\" text=\"수시\" textAlign=\"center\"/><Cell col=\"5\" text=\"과제\"/><Cell col=\"6\" text=\"기말고사\"/><Cell col=\"7\" text=\"총점\"/><Cell col=\"8\" text=\"성적\"/></Band><Band id=\"body\"><Cell text=\"bind:sCode\" textAlign=\"center\" displaytype=\"mask\" maskeditformat=\"#########\"/><Cell col=\"1\" text=\"bind:sName\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:attend\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:mid\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:otest\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:task\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:fin\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:total\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:grade\" displaytype=\"combocontrol\" textAlign=\"center\" combodataset=\"ds_passFail\" combocodecol=\"id\" combodatacol=\"name\" edittype=\"combo\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,null,"100","25","30","35",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("저장");
            obj.set_cssclass("btn_default");
            this.addChild(obj.name, obj);

            obj = new Div("div_rank","40",null,"210","160",null,"35",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Div00");
            obj.set_positionstep("1");
            obj.set_url("prfWork::rankStandard.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_exel",null,null,"100","25","140","35",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Exel");
            obj.set_cssclass("btn_exel");
            this.addChild(obj.name, obj);

            obj = new Combo("co_year",null,"14","191","25","265",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("cmb_default");
            var co_year_innerdataset = new nexacro.NormalDataset("co_year_innerdataset", obj);
            co_year_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">2020</Col><Col id=\"datacolumn\">2020년</Col></Row><Row><Col id=\"codecolumn\">2021</Col><Col id=\"datacolumn\">2021년</Col></Row></Rows>");
            obj.set_innerdataset(co_year_innerdataset);
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Combo("co_semester",null,"14","120","25","140",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("cmb_default");
            var co_semester_innerdataset = new nexacro.NormalDataset("co_semester_innerdataset", obj);
            co_semester_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">1학기</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">2학기</Col></Row></Rows>");
            obj.set_innerdataset(co_semester_innerdataset);
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"14","90","25","40",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("검색");
            obj.set_cssclass("btn_default");
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
            this._addPreloadList("fdl","prfWork::rankStandard.xfdl");
        };
        
        // User Script
        this.addIncludeScript("gradeRank.xfdl","lib::Common.xjs");
        this.registerScript("gradeRank.xfdl", function() {
        this.executeIncludeScript("lib::Common.xjs"); /*include "lib::Common.xjs"*/
        this.objApp = nexacro.getApplication();
        this.gradeRank_onload = function(obj,e)
        {
        	var objDate= new Date();
        	if(objDate.getMonth()+1 && objDate.getMonth()+1 < 8){
        		this.co_year.set_text(objDate.getFullYear()+"년");
        		this.co_semester.set_text("1학기");
        		var startTime = objDate.getFullYear()+"0101";
        		var endTime = objDate.getFullYear()+"0731";
        	}else{
        		this.co_year.set_text(objDate.getFullYear()+"년");
        		this.co_semester.set_text("2학기");
        		var startTime = objDate.getFullYear()+"0801";
        		var endTime = objDate.getFullYear()+"1231";
        	}
        	var proCode = this.objApp.gds_professor.getColumn(0,"p_seq"); // 교수코드(로그인)
        	this.transaction(
        		"proClassList"
        		,"/proClassList.nex"
        		,""
        		,"ds_class=out_ds"
        		,"proCode="+proCode +" startTime="+startTime + " endTime="+endTime
        		,"fn_callback"
        	);
        };
        this.fn_callback=function(sId,errCd,errMsg){
        	if (errCd < 0) {
        		trace("sId["+sId+"]: Error["+errCd+"]:"+errMsg);
        	}
        	if(sId == "stdGradeRank"){
        		if(this.ds_grade.getRowCount()> 0){
        			var nRow = this.ds_class.rowposition;
        			if(this.ds_class.getColumn(nRow,"passFail") =="P"){
        				this.div_rank.set_url("prfWork::passFailStandard.xfdl");
        			}else{
        			//등급 자동 생성
        				this.div_rank.set_url("prfWork::rankStandard.xfdl");
        				var nCount = this.ds_grade.getRowCount();
        				var A = nexacro.ceil(nCount * 0.3);
        				var B = nexacro.ceil(nCount * 0.7);
        				var C =	nCount;
        				this.div_rank.form.sta_A.set_text(A);
        				this.div_rank.form.sta_B.set_text(B);
        				this.div_rank.form.sta_C.set_text(C);
        				var total = new Array();
        				var total2 = new Array();
        				for(var i=0; i<this.ds_grade.getRowCount(); i++){
        					total[i] = this.ds_grade.getColumn(i,"total");
        					var rank = 1;
        					for(var j=0; j<this.ds_grade.getRowCount(); j++){
        						total2[j] = this.ds_grade.getColumn(j,"total");
        						if(total[i] < total2[j]){
        							rank +=1;
        						}
        						this.ds_grade.setColumn(i,"rank",rank);
        						var nRank = this.ds_grade.getColumn(i,"rank");
        						var grade =  this.ds_grade.getColumn(i,"grade");
        						if(grade == null){
        							if(nRank <= nCount){
        								this.ds_grade.setColumn(i,"grade","C+");
        								if(nRank <= A+B){
        									this.ds_grade.setColumn(i,"grade","B+");
        									if(nRank <= A){
        										this.ds_grade.setColumn(i,"grade","A+");
        									}
        								}
        							}
        						}
        					}
        				}
        			}
        		}
        	}

        }
        this.gr_rank_onheadclick = function(obj,e)
        {
        	this.cfn_GridSort(obj,e);
        };

        this.btnSave_onclick = function(obj,e)
        {
        	var A = 0;
        	var B = 0;
        	for(var i=0; i<this.ds_grade.getRowCount(); i++){
        		var grade = this.ds_grade.getColumn(i,"grade");
        		if(grade == "A"||  grade == "A+"){
        			A +=1;
        		}
        		if(grade == "B"||  grade == "B+"){
        			B +=1;
        		}
        	}
        	if(this.gr_rank.formatid == "default"){
        		var RankA = this.div_rank.form.sta_A.text;
        		var RankB = this.div_rank.form.sta_B.text;
        		if(A > RankA || A+B > RankB ){
        			this.alert("등급별 최대인원을 초과했습니다")
        		}else{
        			if(this.ds_grade.getRowCount() > 0){
        				this.transaction(
        					"stdGradeUpd"
        					,"/stdGradeUpd.nex"
        					,"in_ds=ds_grade:A"
        					,""
        					,""
        					,"fn_callback"
        				);
        			}
        		}
        	}else{
        		if(this.ds_grade.getRowCount() > 0){
        			this.transaction(
        				"stdGradeUpd"
        				,"/stdGradeUpd.nex"
        				,"in_ds=ds_grade:A"
        				,""
        				,""
        				,"fn_callback"
        			);
        		}
        	}
        }


        this.btn_exel_onclick = function(obj,e)
        {
        	var nRow = this.ds_class.rowposition;
        	var className = this.ds_class.getColumn(nRow,"className");
        	this.exportObj = new ExcelExportObject("Export00", this);

        	this.exportObj.set_exportfilename(className + " 성적 집계");
        	this.exportObj.set_exporturl("http://15.165.196.249/nexacro-xeni/XExportImport");

        	this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.gr_rank, "Sheet1!A1");

        	this.addEventHandler("onsuccess", this.Export00_onsuccess, this);
        	this.addEventHandler("onerror", this.Export00_onerror, this);

        	var intExportedItem = this.exportObj.exportData();

        	trace("Number of Exported Item: " + intExportedItem);
        };

        this.Export00_onsuccess = function(obj, e)
        {
        	trace("Export00_onsuccess");
        }

        this.Export00_onerror = function(obj, e)
        {
        	trace("Export00_onerror");
        }

        this.gr_classList_oncellclick = function(obj,e)
        {
        	if(this.ds_class.getColumn(e.row,"passFail")=="P"){
        		this.gr_rank.set_formatid("PassFail");
        	}else{
        		this.gr_rank.set_formatid("default");
        	}
        	var classCode = this.ds_class.getColumn(e.row,"classSeq");
        	this.transaction(
        		"stdGradeRank"
        		,"/stdGradeList.nex"
        		,""
        		,"ds_grade=out_ds"
        		,"classCode="+classCode
        		,"fn_callback"
        	);

        };

        this.gr_classList_onheadclick = function(obj,e)
        {
        	this.cfn_GridSort(obj,e);
        };



        this.btnSearch_onclick = function(obj,e)
        {
        	var year = this.co_year.text;
        	year = year.substring(0,year.length-1)
        	if(this.co_semester.text == "1학기"){
        		var startTime = year+"0101";
        		var endTime = year+"0731";
        	}else{
        		var startTime = year+"0801";
        		var endTime = year+"1231";
        	}
        	var proCode = this.objApp.gds_professor.getColumn(0,"p_seq"); // 교수코드(로그인)
        	this.transaction(
        		"proClassList"
        		,"/proClassList.nex"
        		,""
        		,"ds_class=out_ds"
        		,"proCode="+proCode +" startTime="+startTime + " endTime="+endTime
        		,"fn_callback"
        	);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.gradeRank_onload,this);
            this.gr_classList.addEventHandler("oncellclick",this.gr_classList_oncellclick,this);
            this.gr_classList.addEventHandler("onheadclick",this.gr_classList_onheadclick,this);
            this.gr_rank.addEventHandler("onheadclick",this.gr_rank_onheadclick,this);
            this.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
            this.btn_exel.addEventHandler("onclick",this.btn_exel_onclick,this);
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
        };

        this.loadIncludeScript("gradeRank.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
