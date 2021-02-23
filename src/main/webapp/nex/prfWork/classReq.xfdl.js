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
                this._setFormPosition(1080,570);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_class", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"classPart\" type=\"STRING\" size=\"256\"/><Column id=\"className\" type=\"STRING\" size=\"256\"/><Column id=\"classSeq\" type=\"INT\" size=\"256\"/><Column id=\"classPoint\" type=\"STRING\" size=\"256\"/><Column id=\"passFail\" type=\"STRING\" size=\"256\"/><Column id=\"proCode\" type=\"STRING\" size=\"256\"/><Column id=\"proName\" type=\"STRING\" size=\"256\"/><Column id=\"dept\" type=\"STRING\" size=\"256\"/><Column id=\"classTime\" type=\"STRING\" size=\"256\"/><Column id=\"classRoom\" type=\"STRING\" size=\"256\"/><Column id=\"limit\" type=\"STRING\" size=\"256\"/><Column id=\"basketLimit\" type=\"STRING\" size=\"256\"/><Column id=\"grade\" type=\"STRING\" size=\"256\"/><Column id=\"classGoal\" type=\"STRING\" size=\"256\"/><Column id=\"classMethod\" type=\"STRING\" size=\"256\"/><Column id=\"classEvaluation\" type=\"STRING\" size=\"256\"/><Column id=\"classReferences\" type=\"STRING\" size=\"256\"/><Column id=\"reqState\" type=\"STRING\" size=\"256\"/><Column id=\"rejectMsg\" type=\"STRING\" size=\"256\"/><Column id=\"reg_date\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_class_copy", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"classPart\" type=\"STRING\" size=\"256\"/><Column id=\"className\" type=\"STRING\" size=\"256\"/><Column id=\"classSeq\" type=\"INT\" size=\"256\"/><Column id=\"classPoint\" type=\"STRING\" size=\"256\"/><Column id=\"passFail\" type=\"STRING\" size=\"256\"/><Column id=\"proCode\" type=\"STRING\" size=\"256\"/><Column id=\"proName\" type=\"STRING\" size=\"256\"/><Column id=\"dept\" type=\"STRING\" size=\"256\"/><Column id=\"classTime\" type=\"STRING\" size=\"256\"/><Column id=\"classRoom\" type=\"STRING\" size=\"256\"/><Column id=\"limit\" type=\"INT\" size=\"256\"/><Column id=\"basketLimit\" type=\"STRING\" size=\"256\"/><Column id=\"grade\" type=\"STRING\" size=\"256\"/><Column id=\"classGoal\" type=\"STRING\" size=\"256\"/><Column id=\"classMethod\" type=\"STRING\" size=\"256\"/><Column id=\"classEvaluation\" type=\"STRING\" size=\"256\"/><Column id=\"classReferences\" type=\"STRING\" size=\"256\"/><Column id=\"reqState\" type=\"STRING\" size=\"256\"/><Column id=\"rejectMsg\" type=\"STRING\" size=\"256\"/><Column id=\"reg_date\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_req", this);
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"id\">AR</Col><Col id=\"name\">승인 요청</Col></Row><Row><Col id=\"id\">DR</Col><Col id=\"name\">승인 취소 요청</Col></Row><Row><Col id=\"id\">DC</Col><Col id=\"name\">승인 취소됨</Col></Row><Row><Col id=\"id\">C</Col><Col id=\"name\">승인 거절</Col></Row><Row><Col id=\"id\">A</Col><Col id=\"name\">승인 중</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("gr_classList","20","6","1040","425",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_class");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"64\"/><Column size=\"152\"/><Column size=\"76\"/><Column size=\"55\"/><Column size=\"74\"/><Column size=\"88\"/><Column size=\"189\"/><Column size=\"61\"/><Column size=\"57\"/><Column size=\"50\"/><Column size=\"131\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxtruevalue=\"1\" checkboxfalsevalue=\"0\"/><Cell col=\"1\" text=\"이수구분\"/><Cell col=\"2\" text=\"과목명\"/><Cell col=\"3\" text=\"과목코드\"/><Cell col=\"4\" text=\"학점\"/><Cell col=\"5\" text=\"교수이름\"/><Cell col=\"6\" text=\"학과\"/><Cell col=\"7\" text=\"강의시간\"/><Cell col=\"8\" text=\"강의실\"/><Cell col=\"9\" text=\"인원수\"/><Cell col=\"10\" text=\"학년\"/><Cell col=\"11\" text=\"요청사항\" displaytype=\"normal\"/></Band><Band id=\"body\"><Cell text=\"bind:chk\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\" textAlign=\"center\" checkboxtruevalue=\"1\" checkboxfalsevalue=\"0\"/><Cell col=\"1\" text=\"bind:classPart\" textAlign=\"center\" displaytype=\"combotext\" combodataset=\"gds_part\" combocodecol=\"id\" combodatacol=\"name\"/><Cell col=\"2\" text=\"bind:className\" tooltiptext=\"상세보기\" cursor=\"pointer\" textDecoration=\"underline\" textAlign=\"center\" wordWrap=\"english\"/><Cell col=\"3\" text=\"bind:classSeq\" textAlign=\"center\" displaytype=\"mask\" maskeditmaskchar=\"#######\"/><Cell col=\"4\" text=\"bind:classPoint\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:proName\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:dept\" textAlign=\"center\" displaytype=\"combotext\" combodataset=\"deptCode\" combocodecol=\"code\" combodatacol=\"name\"/><Cell col=\"7\" text=\"bind:classTime\" textAlign=\"center\" wordWrap=\"english\"/><Cell col=\"8\" text=\"bind:classRoom\" textAlign=\"center\"/><Cell col=\"9\" text=\"bind:limit\" textAlign=\"center\"/><Cell col=\"10\" text=\"bind:grade\" textAlign=\"center\"/><Cell col=\"11\" text=\"bind:reqState\" displaytype=\"combotext\" textAlign=\"center\" expandshow=\"show\" wordWrap=\"english\" combodataset=\"ds_req\" combocodecol=\"id\" combodatacol=\"name\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnWrite","670","441","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("작성하기");
            this.addChild(obj.name, obj);

            obj = new Button("btnUpd","800","441","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("수정하기");
            this.addChild(obj.name, obj);

            obj = new Button("btnDel","930","441","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("삭제 및 취소 요청");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1080,570,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("classReq.xfdl", function() {
        this.objApp = nexacro.getApplication();
        this.classReq_onload = function(obj,e)
        {
        	var objDate= new Date();
        	if(objDate.getMonth()+1 && objDate.getMonth()+1 < 8){
        		var startTime = objDate.getFullYear()+"0101";
        		var endTime = objDate.getFullYear()+"0731";
        	}else{
        		var startTime = objDate.getFullYear()+"0801";
        		var endTime = objDate.getFullYear()+"1231";
        	}
        	this.gr_classList.setCellProperty("Head",0,"text",0);
        	var proCode = this.objApp.gds_professor.getColumn(0,"p_seq");// 로그인 되는 교수 번호
        	this.transaction(
        		"classReqList"
        		,"/classListProCode.nex"
        		,""
        		,"ds_class=out_ds"
        		,"proCode="+nexacro.wrapQuote(proCode) +" startTime="+startTime + " endTime="+endTime
        		,"fn_callback"
        	);
        };

        this.fn_callback = function(sId,errCd,errMsg){
        	if (errCd < 0) {
        		trace("sId["+sId+"]: Error["+errCd+"]:"+errMsg);
        	}
        }
        //작성
        this.btnWrite_onclick = function(obj,e)
        {
        	var proCode = this.objApp.gds_professor.getColumn(0,"p_seq"); //로그인 되는 교수 번호
        	let x = this.width/2-500;
        	let y = this.height/2-340;
        	let objCF = new ChildFrame();
        	objCF.init("popAdd",x,y,1000,680,0,0,"prfWork::detail.xfdl");
        	objCF.set_showtitlebar(false);
        	objCF.showModal(this.getOwnerFrame(),{proCode:proCode, classSeq :""},this,"fn_pop_callback");

        };


        //작성 popup창 닫았을 때
        this.fn_pop_callback=function(){
        	this.reload();
        }

        //전체선택
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
        };

        //삭제
        this.btnDel_onclick = function(obj,e)
        {
        	if(this.confirm("정말 삭제하시겠습니까?")){
        		let arr = this.ds_class.extractRows("chk==1");
        		let aArr = this.ds_class.extractRows("chk==1 && reqState=='A'"); //승인 중
        		if(arr.length == 0 || arr == -1){
        			alert("선택된 항목이 없습니다");
        		}else{
        			//승인중일 경우->취소로 변경
        			if(aArr.length > 0 ){
        				this.ds_class_copy.clearData();
        				for(var i=0; i<aArr.length; i++){
        					this.ds_class.setColumn(aArr[i],"reqState",'DR');
        					var addRow = this.ds_class_copy.addRow();
        					this.ds_class_copy.copyRow(addRow,this.ds_class,aArr[i]);
        				}
        				this.transaction(
        					"reqUpdAtoDR"
        					,"/reqUpdAtoDR.nex"
        					,"in_ds=ds_class_copy:U"
        					,""
        					,""
        					,"fn_callback"
        				);

        			}
        			//삭제하는 경우
        			this.ds_class_copy.clearData();
        			let arArr = this.ds_class.extractRows("chk==1 && reqState=='AR'"); //승인 요청
        			if(arArr.length > 0 ) {
        				for(var i=0; i<arArr.length; i++){
        					var classSeq = this.ds_class.getColumn(arArr[i],"classSeq");
        					var addRow = this.ds_class_copy.addRow();
        					this.ds_class_copy.setColumn(addRow,"classSeq",classSeq);
        				}
        				this.ds_class.deleteMultiRows(arArr);
        			}
        			let dcArr = this.ds_class.extractRows("chk==1 && reqState=='DC'"); //승인 취소됨
        			if(dcArr.length > 0) {
        				for(var i=0; i<dcArr.length; i++){
        					var classSeq = this.ds_class.getColumn(dcArr[i],"classSeq");
        					var addRow = this.ds_class_copy.addRow();
        					this.ds_class_copy.setColumn(addRow,"classSeq",classSeq);
        				}
        				this.ds_class.deleteMultiRows(dcArr);
        			}
        			let cArr = this.ds_class.extractRows("chk==1 && reqState=='C'"); //승인 거절
        			if(cArr.length > 0) {
        				for(var i=0; i<cArr.length; i++){
        					var classSeq = this.ds_class.getColumn(cArr[i],"classSeq");
        					var addRow = this.ds_class_copy.addRow();
        					this.ds_class_copy.setColumn(addRow,"classSeq",classSeq);
        				}
        				this.ds_class.deleteMultiRows(cArr);
        			}
        			this.transaction(
        				"classDelete"
        				,"/classDel.nex"
        				,"in_ds=ds_class_copy:U"
        				,""
        				,""
        				,"fn_callback"
        			);
        		}
        	}
        };

        //수업개설요청 상세보기
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
        		objCF.showModal(this.getOwnerFrame(),{classSeq:classSeq, proCode : proCode, view : 'Y'},this,"fn_pop_callback");
         	}
        };
        //수정
        this.classTab_classReq_btnUpd_onclick = function(obj,e)
        {
        	let arr  = this.ds_class.extractRows("chk==1");
        	let nRow = this.ds_class.rowposition;

        	if(arr.length == 0 || arr == -1){
        		alert("선택된 항목이 없습니다");
        	}else if(arr.length == 1){
        		var person = this.ds_class.getColumn(nRow,"limit").split("/");
        		if(person[0] == 0){
        			if(this.ds_class.getColumn(nRow,"reqState")=='A'){
        				alert("이미 승인된 수업입니다.\n수정하시면 다시 승인 요청됩니다.")
        				let classSeq = this.ds_class.getColumn(nRow,"classSeq");
        				let proCode = this.ds_class.getColumn(nRow,"proCode");
        				let x = this.width/2-500;
        				let y = this.height/2-340;
        				let objCF = new ChildFrame();
        				objCF.init("popAdd",x,y,1000,680,0,0,"prfWork::detail.xfdl");
        				objCF.set_showtitlebar(false);
        				objCF.showModal(this.getOwnerFrame(),{classSeq:classSeq, proCode : proCode},this,"fn_pop_callback");
        			}else if(this.ds_class.getColumn(nRow,"reqState")=='DR'){
        				alert("승인 취소 요청중인 수업입니다\n행정팀으로 문의해주시기 바랍니다");
        			}else{
        				let classSeq = this.ds_class.getColumn(nRow,"classSeq");
        				let proCode = this.ds_class.getColumn(nRow,"proCode");
        				let x = this.width/2-500;
        				let y = this.height/2-340;
        				let objCF = new ChildFrame();
        				objCF.init("popAdd",x,y,1000,680,0,0,"prfWork::detail.xfdl");
        				objCF.set_showtitlebar(false);
        				objCF.showModal(this.getOwnerFrame(),{classSeq:classSeq, proCode : proCode},this,"fn_pop_callback");
        			}
        		}else{
        			alert("수정이 불가능한 과목입니다");
        		}
        	}else{
        		alert("하나의 항목만 선택 가능합니다");
        	}
        };

        //메시지 보기
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
        		objCF.showModal(this.getOwnerFrame(),{classSeq:classSeq, msg : msg, view :"Y"},this,"fn_msg_callback");
        	}else{
        		alert("메시지가 없습니다");
        	}
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.classReq_onload,this);
            this.gr_classList.addEventHandler("oncellclick",this.gr_classList_oncellclick,this);
            this.gr_classList.addEventHandler("onexpanddown",this.gr_classList_onexpanddown,this);
            this.gr_classList.addEventHandler("onheadclick",this.gr_classList_onheadclick,this);
            this.btnWrite.addEventHandler("onclick",this.btnWrite_onclick,this);
            this.btnUpd.addEventHandler("onclick",this.classTab_classReq_btnUpd_onclick,this);
            this.btnDel.addEventHandler("onclick",this.btnDel_onclick,this);
        };

        this.loadIncludeScript("classReq.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
