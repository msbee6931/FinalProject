(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("classList");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1080,520);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_class", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"classPart\" type=\"STRING\" size=\"256\"/><Column id=\"className\" type=\"STRING\" size=\"256\"/><Column id=\"classSeq\" type=\"INT\" size=\"256\"/><Column id=\"classPoint\" type=\"STRING\" size=\"256\"/><Column id=\"proCode\" type=\"STRING\" size=\"256\"/><Column id=\"proName\" type=\"STRING\" size=\"256\"/><Column id=\"dept\" type=\"STRING\" size=\"256\"/><Column id=\"classTime\" type=\"STRING\" size=\"256\"/><Column id=\"classRoom\" type=\"STRING\" size=\"256\"/><Column id=\"limit\" type=\"STRING\" size=\"256\"/><Column id=\"grade\" type=\"STRING\" size=\"256\"/><Column id=\"classGoal\" type=\"STRING\" size=\"256\"/><Column id=\"classMethod\" type=\"STRING\" size=\"256\"/><Column id=\"classEvaluation\" type=\"STRING\" size=\"256\"/><Column id=\"classReferences\" type=\"STRING\" size=\"256\"/><Column id=\"reqState\" type=\"STRING\" size=\"256\"/><Column id=\"rejectMsg\" type=\"STRING\" size=\"256\"/><Column id=\"reg_date\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_req", this);
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"id\">AR</Col><Col id=\"name\">승인 요청</Col></Row><Row><Col id=\"id\">DR</Col><Col id=\"name\">승인 취소 요청</Col></Row><Row><Col id=\"id\">DC</Col><Col id=\"name\">승인 취소됨</Col></Row><Row><Col id=\"id\">C</Col><Col id=\"name\">승인 거절</Col></Row><Row><Col id=\"id\">A</Col><Col id=\"name\">승인 중</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_class_copy", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"classPart\" type=\"STRING\" size=\"256\"/><Column id=\"className\" type=\"STRING\" size=\"256\"/><Column id=\"classSeq\" type=\"INT\" size=\"256\"/><Column id=\"classPoint\" type=\"STRING\" size=\"256\"/><Column id=\"proCode\" type=\"STRING\" size=\"256\"/><Column id=\"proName\" type=\"STRING\" size=\"256\"/><Column id=\"dept\" type=\"STRING\" size=\"256\"/><Column id=\"classTime\" type=\"STRING\" size=\"256\"/><Column id=\"classRoom\" type=\"STRING\" size=\"256\"/><Column id=\"limit\" type=\"INT\" size=\"256\"/><Column id=\"grade\" type=\"STRING\" size=\"256\"/><Column id=\"classGoal\" type=\"STRING\" size=\"256\"/><Column id=\"classMethod\" type=\"STRING\" size=\"256\"/><Column id=\"classEvaluation\" type=\"STRING\" size=\"256\"/><Column id=\"classReferences\" type=\"STRING\" size=\"256\"/><Column id=\"reqState\" type=\"STRING\" size=\"256\"/><Column id=\"rejectMsg\" type=\"STRING\" size=\"256\"/><Column id=\"reg_date\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_stdClass", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"sCode\" type=\"INT\" size=\"256\"/><Column id=\"sName\" type=\"STRING\" size=\"256\"/><Column id=\"classCode\" type=\"INT\" size=\"256\"/><Column id=\"basket\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("gr_classList","30","60","1021","390",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_class");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"33\"/><Column size=\"41\"/><Column size=\"73\"/><Column size=\"193\"/><Column size=\"48\"/><Column size=\"103\"/><Column size=\"57\"/><Column size=\"85\"/><Column size=\"248\"/><Column size=\"94\"/><Column size=\"61\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"번호\"/><Cell col=\"2\" text=\"이수구분\"/><Cell col=\"3\" text=\"과목명\"/><Cell col=\"4\" text=\"학년\"/><Cell col=\"5\" text=\"과목코드\"/><Cell col=\"6\" text=\"학점\"/><Cell col=\"7\" text=\"담당교수\"/><Cell col=\"8\" text=\"강의시간\"/><Cell col=\"9\" text=\"강의실\"/><Cell col=\"10\" text=\"인원수\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:chk\"/><Cell col=\"1\" text=\"expr:currow+1\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:classPart\" textAlign=\"center\" displaytype=\"combotext\" combodataset=\"gds_part\" combocodecol=\"id\" combodatacol=\"name\"/><Cell col=\"3\" text=\"bind:className\" displaytype=\"normal\" textDecoration=\"underline\" cursor=\"pointer\" textAlign=\"center\" wordWrap=\"english\"/><Cell col=\"4\" text=\"bind:grade\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:classSeq\" textAlign=\"center\" displaytype=\"mask\" maskeditmaskchar=\"########\"/><Cell col=\"6\" text=\"bind:classPoint\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:proName\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:classTime\" textAlign=\"center\" wordWrap=\"english\"/><Cell col=\"9\" text=\"bind:classRoom\" textAlign=\"center\"/><Cell col=\"10\" text=\"bind:limit\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Combo("co_search","720","24","120","25",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("cmb_default");
            var co_search_innerdataset = new nexacro.NormalDataset("co_search_innerdataset", obj);
            co_search_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">All</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">className</Col><Col id=\"datacolumn\">과목명</Col></Row><Row><Col id=\"codecolumn\">proName</Col><Col id=\"datacolumn\">담당교수</Col></Row><Row><Col id=\"codecolumn\">classTime</Col><Col id=\"datacolumn\">강의시간</Col></Row><Row><Col id=\"codecolumn\">classRoom</Col><Col id=\"datacolumn\">강의실</Col></Row></Rows>");
            obj.set_innerdataset(co_search_innerdataset);
            obj.set_text("전체");
            obj.set_value("All");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_search","845","24","170","25",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("edt_default");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch","1025","24","25","25",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_search");
            this.addChild(obj.name, obj);

            obj = new Combo("co_year","450","24","120","25",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("cmb_default");
            var co_year_innerdataset = new nexacro.NormalDataset("co_year_innerdataset", obj);
            co_year_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">2020</Col><Col id=\"datacolumn\">2020년</Col></Row><Row><Col id=\"codecolumn\">2021</Col><Col id=\"datacolumn\">2021년</Col></Row></Rows>");
            obj.set_innerdataset(co_year_innerdataset);
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Combo("co_semester","580","24","120","25",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("cmb_default");
            var co_semester_innerdataset = new nexacro.NormalDataset("co_semester_innerdataset", obj);
            co_semester_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">1학기</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">2학기</Col></Row></Rows>");
            obj.set_innerdataset(co_semester_innerdataset);
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnDel","950","460","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("삭제");
            obj.set_cssclass("btn_del");
            this.addChild(obj.name, obj);

            obj = new Button("btnExport","830","460","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Export");
            obj.set_cssclass("btn_default");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","29",null,null,"0",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_visible("false");
            obj.set_background("RGBA(236,135,135,0.71)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","140","490",null,null,"140","0",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_visible("false");
            obj.set_background("RGBA(236,135,135,0.71)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","1051","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_visible("false");
            obj.set_background("RGBA(236,135,135,0.71)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","80","0","800","10",null,null,null,null,null,null,this);
            obj.set_taborder("11");
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
        this.registerScript("classList.xfdl", function() {

        this.classList_onload = function(obj,e)
        {
        	var objDate= new Date();
        	if(objDate.getMonth()+1 && objDate.getMonth()+1 < 8){
        		this.co_year.set_text(objDate.getFullYear()+"년");
        		this.co_semester.set_text("1학기");
        	}else{
        		this.co_year.set_text(objDate.getFullYear()+"년");
        		this.co_semester.set_text("2학기");
        	}
        	this.transaction(
        		"classList"
        		,"/classList.nex"
        		,""
        		,"ds_class=out_ds"
        		,""
        		,"fn_callback"
        	);
        };
        this.fn_callback=function(sId,errCd,errMsg){
        	if (errCd < 0) {
        		trace("sId["+sId+"]: Error["+errCd+"]:"+errMsg);
        	}
        	if(sId == "classList"){
        		var date = new Array();
        		for(var i=0; i<this.ds_class.getRowCount(); i++){
        			date[i] = this.ds_class.getColumn(i,"reg_date")
        			date[i] = nexacro.replaceAll(date[i],"-","");
        			date[i] = date[i].substring(0,8);
        			this.ds_class.setColumn(i,"reg_date",date[i]);
        		}
        		var year = this.co_year.value
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
        	if(e.col == 0){
        		if(this.ds_class.getColumn(e.row,"chk")==0){
        			obj.setCellProperty("Head",0,"text",0);
        		}
        	}
        	if(e.col == 3){
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

        	if(coValue == "className" || coValue == "proName" || coValue == "classTime" || coValue == "classRoom"){
        		if(semester == "1"){
        			this.ds_class.filter(coValue+".indexOf('"+edtSearch+"')>=0 && reg_date >='"+startDate+"'&& reg_date <'"+mDate+"'");
        		}else{
        			this.ds_class.filter(coValue+".indexOf('"+edtSearch+"')>=0 && reg_date >='"+mDate+"'&& reg_date <='"+endDate+"'");
        		}
        	}else{
        		if(semester == "1"){
        			this.ds_class.filter("reg_date >='"+startDate+"'&& reg_date <'"+mDate+"'");
        		}else{
        			this.ds_class.filter("reg_date >='"+mDate+"'&& reg_date <= '"+endDate+"'");
        		}
        	}
        };

        //개설강좌 정렬
        this.gr_classList_onheadclick = function(obj,e)
        {
        	let flag = obj.getCellProperty("Head",0,"text");
        	let check = flag==0?1:0;
        	if(e.cell==0){
        		obj.setCellProperty("Head",0,"text",check);
        		for(let i = 0;i<this.ds_class.getRowCount();i++){
        			this.ds_class.setColumn(i,"chk",check);
        		}
        	}
        	var objDs = this.objects[obj.binddataset];
        	for (var i = 1; i < obj.getCellCount("head"); i++)
        	{
        		var sHeadText = obj.getCellText(-1, i); //Head영역은 index가 -1
        		var nLen   = sHeadText.length - 1;    //텍스트 길이
        		if (i == e.cell)
        		{
        			var sColId = (obj.getCellProperty("body", e.col,"text")).toString().split(":"); //Text값이 bind:형태로 나오기 떄문에
        			if (sHeadText.substr(nLen) == "▲")
        			{
        				obj.setCellProperty( "head", i, "text", sHeadText.substr(0, nLen)+ "▼");
        				objDs.set_keystring("S:-" + sColId[1]);
        			}
        			else if (sHeadText.substr(nLen) == "▼")
        			{
        				obj.setCellProperty( "head", i, "text", sHeadText.substr(0, nLen)+ "▲");
        				objDs.set_keystring("S:+" + sColId[1]);
        			}
        			else
        			{
        				obj.setCellProperty( "head", i, "text", sHeadText+"▲"); //없을 경우 기호 붙힘
        				objDs.set_keystring("S:+" + sColId[1]);
        			}
        		}
        		else //선택된 Head 제외하고 모두 기호 삭제
        		{
        			if (sHeadText.substr(nLen) == "▲" || sHeadText.substr(nLen) == "▼")
        			{
        				obj.setCellProperty( "head", i, "text", sHeadText.substr(0, nLen));
        			}
        		}
        	}
        };


        this.btnDel_onclick = function(obj,e)
        {
        	var arr = this.ds_class.extractRows("chk==1");
        	var code ="";
        	if(arr.length == 0 || arr==-1){
        		alert("선택된 항목이 없습니다");
        	}else{
        		for(var i=0; i< arr.length; i++){
        			var classSeq = this.ds_class.getColumn(arr[i],"classSeq");
        			code += classSeq+","
        		}
        		code=code.substring(0,code.length-1);
        		let x = this.width/2-150;
        		let y = this.height/2-200;
        		let objCF = new ChildFrame();
        		objCF.init("popMsg",x,y,300,400,0,0,"admWork::rejectMsg.xfdl");
        		objCF.set_showtitlebar(false);
        		objCF.showModal(this.getOwnerFrame(),{classSeq:code},this,"fn_msg_callback");
        	}
        	//pop 후 삭제 rejectMsg에 입력 후 reqState = 거절로 변경
        	//관련 학생 table에서 삭제 stdTimeTable stdClass
        };
        this.fn_msg_callback=function(sId,send)
        {
        	if(send == ""){return;}
        	else{
        		var arr = send.split("|")
        		var classSeqs = arr[0];
        		var reason = arr[1];

        		var classSeq = classSeqs.split(",");
        		this.ds_class_copy.clearData();
        		for(var i=0; i<classSeq.length; i++){
        			var nRow = this.ds_class.findRow("classSeq",classSeq[i]);
        			this.ds_class.setColumn(nRow,"rejectMsg",reason);
        			this.ds_class.setColumn(nRow,"reqState","C");
        			var addRow = this.ds_class_copy.addRow();
        			this.ds_class_copy.setColumn(addRow,"classSeq",classSeq[i]);
        			var stdRow = this.ds_stdClass.addRow();
        			this.ds_stdClass.setColumn(stdRow,"classCode",classSeq[i])
        			this.ds_class.deleteRow(nRow)
        		}
        		this.transaction(
        			"rejectMsgInset"
        			,"/rejectMsgInsert.nex"
        			,"in_ds=ds_class_copy:U"
        			,""
        			,"msg="+nexacro.wrapQuote(reason)
        			,"fn_callback"
        		);
        		//해당 학과코드로 관련 table에서 삭제 stdTimeTable stdClass
        		this.transaction(
        			"deleteStdClass"
        			,"/deleteStdClass.nex"
        			,"in_ds=ds_stdClass"
        			,""
        			,""
        			,"fn_callback"
        		)
        	}
        }


        this.btnExport_onclick = function(obj,e)
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

        	this.exportObj.set_exportfilename(semester + " 개설과목");
        	this.exportObj.set_exporturl("http://localhost/nexacro-xeni/XExportImport");

        	this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.gr_classList, "Sheet1!A1");

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



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.classList_onload,this);
            this.gr_classList.addEventHandler("oncellclick",this.gr_classList_oncellclick,this);
            this.gr_classList.addEventHandler("onheadclick",this.gr_classList_onheadclick,this);
            this.co_search.addEventHandler("onitemchanged",this.classTab_classList_co_search_onitemchanged,this);
            this.edt_search.addEventHandler("onchanged",this.edt_search_onchanged,this);
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.co_year.addEventHandler("onitemchanged",this.Combo01_onitemchanged,this);
            this.btnDel.addEventHandler("onclick",this.btnDel_onclick,this);
            this.btnExport.addEventHandler("onclick",this.btnExport_onclick,this);
        };

        this.loadIncludeScript("classList.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
