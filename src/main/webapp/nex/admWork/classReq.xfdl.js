(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("classReq");
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
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"id\">AR</Col><Col id=\"name\">승인 요청</Col></Row><Row><Col id=\"id\">DR</Col><Col id=\"name\">승인 취소 요청</Col></Row><Row><Col id=\"id\">DC</Col><Col id=\"name\">승인 취소됨</Col></Row><Row><Col id=\"id\">C</Col><Col id=\"name\">승인 거절</Col></Row><Row><Col id=\"id\">A</Col><Col id=\"name\">승인 완료</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_class_copy", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"classPart\" type=\"STRING\" size=\"256\"/><Column id=\"className\" type=\"STRING\" size=\"256\"/><Column id=\"classSeq\" type=\"INT\" size=\"256\"/><Column id=\"classPoint\" type=\"STRING\" size=\"256\"/><Column id=\"proCode\" type=\"STRING\" size=\"256\"/><Column id=\"proName\" type=\"STRING\" size=\"256\"/><Column id=\"dept\" type=\"STRING\" size=\"256\"/><Column id=\"classTime\" type=\"STRING\" size=\"256\"/><Column id=\"classRoom\" type=\"STRING\" size=\"256\"/><Column id=\"limit\" type=\"INT\" size=\"256\"/><Column id=\"grade\" type=\"STRING\" size=\"256\"/><Column id=\"classGoal\" type=\"STRING\" size=\"256\"/><Column id=\"classMethod\" type=\"STRING\" size=\"256\"/><Column id=\"classEvaluation\" type=\"STRING\" size=\"256\"/><Column id=\"classReferences\" type=\"STRING\" size=\"256\"/><Column id=\"reqState\" type=\"STRING\" size=\"256\"/><Column id=\"rejectMsg\" type=\"STRING\" size=\"256\"/><Column id=\"reg_date\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01_00","30","10",null,null,"26","30",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("sta_line");
            this.addChild(obj.name, obj);

            obj = new Grid("gr_classList","35","49",null,null,"34","70",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_class");
            obj.set_cssclass("grd_default");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"37\"/><Column size=\"59\"/><Column size=\"151\"/><Column size=\"111\"/><Column size=\"51\"/><Column size=\"67\"/><Column size=\"91\"/><Column size=\"189\"/><Column size=\"60\"/><Column size=\"48\"/><Column size=\"43\"/><Column size=\"132\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxtruevalue=\"1\" checkboxfalsevalue=\"0\"/><Cell col=\"1\" text=\"이수구분\"/><Cell col=\"2\" text=\"과목명\"/><Cell col=\"3\" text=\"과목코드\"/><Cell col=\"4\" text=\"학점\"/><Cell col=\"5\" text=\"교수명\"/><Cell col=\"6\" text=\"학과\"/><Cell col=\"7\" text=\"강의시간\"/><Cell col=\"8\" text=\"강의실\"/><Cell col=\"9\" text=\"인원수\"/><Cell col=\"10\" text=\"학년\"/><Cell col=\"11\" text=\"요청상태\"/></Band><Band id=\"body\"><Cell text=\"bind:chk\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:classPart\" textAlign=\"center\" displaytype=\"combotext\" combodataset=\"gds_part\" combocodecol=\"id\" combodatacol=\"name\"/><Cell col=\"2\" text=\"bind:className\" tooltiptext=\"상세보기\" textDecoration=\"underline\" cursor=\"pointer\" textAlign=\"center\" wordWrap=\"english\"/><Cell col=\"3\" text=\"bind:classSeq\" textAlign=\"center\" displaytype=\"text\" maskeditmaskchar=\"########\"/><Cell col=\"4\" text=\"bind:classPoint\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:proName\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:dept\" textAlign=\"center\" displaytype=\"combotext\" combodataset=\"deptCode\" combocodecol=\"code\" combodatacol=\"name\"/><Cell col=\"7\" text=\"bind:classTime\" textAlign=\"center\" wordWrap=\"english\"/><Cell col=\"8\" text=\"bind:classRoom\" textAlign=\"center\"/><Cell col=\"9\" text=\"bind:limit\" textAlign=\"center\"/><Cell col=\"10\" text=\"bind:grade\" textAlign=\"center\"/><Cell col=\"11\" text=\"bind:reqState\" displaytype=\"combotext\" textAlign=\"center\" combodataset=\"ds_req\" combocodecol=\"id\" combodatacol=\"name\" expandshow=\"show\" wordWrap=\"english\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ok",null,null,"100","25","140","35",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("승인");
            obj.set_cssclass("btn_default");
            this.addChild(obj.name, obj);

            obj = new Button("btn_reject",null,null,"100","25","35","35",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("거절");
            obj.set_cssclass("btn_can");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","140","490",null,null,"140","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_visible("false");
            obj.set_background("RGBA(236,135,135,0.71)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","29",null,null,"0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_visible("false");
            obj.set_background("RGBA(236,135,135,0.71)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","80","0","800","10",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_visible("false");
            obj.set_background("RGBA(236,135,135,0.71)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","1051","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_visible("false");
            obj.set_background("RGBA(236,135,135,0.71)");
            this.addChild(obj.name, obj);

            obj = new Button("btnClassRoom",null,"20","100","25","34",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("강의실 확인");
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

        };
        
        // User Script
        this.registerScript("classReq.xfdl", function() {

        this.classReq_onload = function(obj,e)
        {
        		this.gr_classList.setCellProperty("Head",0,"text",0);
        		this.transaction(
        			"classReqListA"
        			,"/classReqListA.nex"
        			,""
        			,"ds_class=out_ds"
        			,""
        			,"fn_callback"
        		);
        };
        this.fn_callback = function(sId, errCd, errMsg){
        	if (errCd < 0) {
        		trace("sId["+sId+"]: Error["+errCd+"]:"+errMsg);
        	}
        }
        //수업 요청 상세보기
        this.gr_classList_oncellclick = function(obj,e)
        {
        	if(e.col == 0){
        		if(this.ds_class.getColumn(e.row,"chk")==0){
        			obj.setCellProperty("Head",0,"text",0);
        		}
        	}
        	if(e.col == 2){
        		var classSeq = this.ds_class.getColumn(e.row,"classSeq");
        		var proCode = this.ds_class.getColumn(e.row,"proCode");
        		let x = this.width/2-500;
        		let y = this.height/2-340;
        		let objCF = new ChildFrame();
        		objCF.init("popAdd",x,y,1000,680,0,0,"prfWork::detail.xfdl");
        		objCF.set_showtitlebar(false);
        		objCF.showModal(this.getOwnerFrame(),{classSeq:classSeq, proCode : proCode, view : 'Y'},this,"fn_msg_callback");
         	}
        };
        // 수업요청 전체선택 & 정렬
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

        this.btn_ok_onclick = function(obj,e)
        {
        	var arr = this.ds_class.extractRows("chk==1");
        	if(arr.length == 0 || arr == -1){
        		alert("선택된 항목이 없습니다");
        	}else{
        		var arArr = this.ds_class.extractRows("chk==1 && reqState=='AR'");
        		if(arArr.length > 0){
        			//승인 요청 -> 승인
        			this.ds_class_copy.clearData();
        			for(var i=0; i<arArr.length; i++){
        				var addRow = this.ds_class_copy.addRow();
        				this.ds_class_copy.copyRow(addRow,this.ds_class,arArr[i]);
        				this.ds_class.setColumn(arArr[i],"reqState",'A');
        			}
        			this.transaction(
        				"reqUpdARtoA"
        				,"/reqUpdARtoA.nex"
        				,"in_ds=ds_class_copy:U"
        				,""
        				,""
        				,"fn_callback"
        			);

        		}
        		var drArr = this.ds_class.extractRows("chk==1 && reqState=='DR'");
        		if(drArr.length > 0){
        			//승인 취소 요청 -> 승인 취소됨
        			this.ds_class_copy.clearData();
        			for(var i=0; i<drArr.length; i++){
        				var addRow = this.ds_class_copy.addRow();
        				this.ds_class_copy.copyRow(addRow,this.ds_class,drArr[i]);
        				this.ds_class.setColumn(drArr[i],"reqState",'DC');
        			}
        			this.transaction(
        				"reqUpdDRtoDC"
        				,"/reqUpdDRtoDC.nex"
        				,"in_ds=ds_class_copy:U"
        				,""
        				,""
        				,"fn_callback"
        			);
        		}
        	}
        };

        this.btn_reject_onclick = function(obj,e)
        {
        	var arr = this.ds_class.extractRows("chk==1");

        	if(arr.length == 0 || arr == -1){
        		alert("선택된 항목이 없습니다");
        	}else{
        		var arArr = this.ds_class.extractRows("chk==1 && reqState=='AR'");
        		var classSeq = "";
        		if(arArr.length > 0){
        			for(var i=0; i<arArr.length; i++){
        				var seq = this.ds_class.getColumn(arArr[i],"classSeq");
        				classSeq += seq+","
        			}
        			classSeq=classSeq.substring(0,classSeq.length-1);
        			let x = this.width/2-150;
        			let y = this.height/2-200;
        			let objCF = new ChildFrame();
        			objCF.init("popMsg",x,y,300,400,0,0,"admWork::rejectMsg.xfdl");
        			objCF.set_showtitlebar(false);
        			objCF.showModal(this.getOwnerFrame(),{classSeq:classSeq},this,"fn_msg_callback");
        		}
        	}
        };

        this.fn_msg_callback=function(sId, send)
        {
        	trace(send)
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
        	}
        		this.transaction(
        					"rejectMsgInset"
        					,"/rejectMsgInsert.nex"
        					,"in_ds=ds_class_copy:U"
        					,""
        					,"msg="+nexacro.wrapQuote(reason)
        					,"fn_callback"
        				);
        	}
        }

        this.gr_classList_onexpanddown = function(obj,e)
        {
        	var msg = this.ds_class.getColumn(e.row,"rejectMsg");
        	var classSeq = this.ds_class.getColumn(e.row,"classSeq");
        	if(msg != null){
        		let x = this.width/2-150;
        		let y = this.height/2-200;
        		let objCF = new ChildFrame();
        		objCF.init("popMsg",x,y,300,400,0,0,"admWork::rejectMsg.xfdl");
        		objCF.set_showtitlebar(false);
        		objCF.showModal(this.getOwnerFrame(),{classSeq:classSeq, msg : msg,view:"Y"},this,"fn_msg_callback");
        	}else{
        		alert("메시지가 없습니다");
        	}
        };



        this.btnClassRoom_onclick = function(obj,e)
        {
        		let x = this.width/2-400;
        		let y = this.height/2-225;
        		let objCF = new ChildFrame();
        		objCF.init("popClassRoom",x,y,800,450,0,0,"admWork::classRoomList.xfdl");
        		objCF.set_showtitlebar(false);
        		objCF.showModal(this.getOwnerFrame(),{},this,"fn_pop_callback");

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.classReq_onload,this);
            this.gr_classList.addEventHandler("onheadclick",this.gr_classList_onheadclick,this);
            this.gr_classList.addEventHandler("oncellclick",this.gr_classList_oncellclick,this);
            this.gr_classList.addEventHandler("onexpanddown",this.gr_classList_onexpanddown,this);
            this.btn_ok.addEventHandler("onclick",this.btn_ok_onclick,this);
            this.btn_reject.addEventHandler("onclick",this.btn_reject_onclick,this);
            this.btnClassRoom.addEventHandler("onclick",this.btnClassRoom_onclick,this);
        };

        this.loadIncludeScript("classReq.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
