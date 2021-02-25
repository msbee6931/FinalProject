(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("scheduler");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1080,520);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSchedule", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"sdate\" type=\"STRING\" size=\"256\"/><Column id=\"edate\" type=\"STRING\" size=\"256\"/><Column id=\"title\" type=\"STRING\" size=\"256\"/><Column id=\"content\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Graphics("grpScheduler","50","75","981","415",null,null,"100",null,"100",null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Button("btnPrev","386","30","20","20",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("<");
            this.addChild(obj.name, obj);

            obj = new Button("btnNext","656","30","20","20",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text(">");
            this.addChild(obj.name, obj);

            obj = new Static("stYearMonth","442","21","178","39",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Button("btnNew","931","31","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("일정등록");
            obj.set_cssclass("btn_insert");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","29","520",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_visible("false");
            obj.set_background("RGBA(236,135,135,0.71)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","1051","0","29","520",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_visible("false");
            obj.set_background("RGBA(236,135,135,0.71)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","80","0","800","10",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_visible("false");
            obj.set_background("RGBA(236,135,135,0.71)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","100","490","800","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_visible("false");
            obj.set_background("RGBA(236,135,135,0.71)");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","30","9","200","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("나의 스케줄");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","715","41","10","10",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("");
            obj.set_background("#78a2dd");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","726","39","38","15",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("중간");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00","765","41","10","10",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("");
            obj.set_background("#ab9f1b");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00","776","39","38","15",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("낮음");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_00","815","41","10","10",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("");
            obj.set_background("#6ebe8e");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_00","826","39","38","15",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("높음");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00","865","41","10","10",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("");
            obj.set_background("#d23636");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_00_00","876","39","38","15",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("긴급");
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
        this.addIncludeScript("schedulerv2.xfdl","lib::lib_base.xjs");
        this.addIncludeScript("schedulerv2.xfdl","lib::lib_date.xjs");
        this.addIncludeScript("schedulerv2.xfdl","lib_techtip::lib_schedulerv2.xjs");
        this.registerScript("schedulerv2.xfdl", function() {
        /**
        *  @MenuPath    techtip > scheduler
        *  techtip Graphics Component를 활용한 월 스케줄러
        *  @FileName	workflow.xfdl
        *******************************************************************************
        *  2020.06.12		daewon			최초 생성
        *******************************************************************************
        */

        /**************************************************************************
         * include 영역
        **************************************************************************/
        this.executeIncludeScript("lib::lib_base.xjs"); /*include "lib::lib_base.xjs"*/;
        this.executeIncludeScript("lib::lib_date.xjs"); /*include "lib::lib_date.xjs"*/;
        this.executeIncludeScript("lib_techtip::lib_schedulerv2.xjs"); /*include "lib_techtip::lib_schedulerv2.xjs"*/;

        /**************************************************************************
         * FORM 변수 선언 영역
        **************************************************************************/

        /**************************************************************************
         * FORM EVENT 영역(onload)
        **************************************************************************/
        this.scheduler_onload = function(obj,e)
        {
        //디비 저장된 데이터 셋 호출
        	this.transaction(
        		"selectIndSchedule",//id
        		"/schedule/selectIndSchedule",//url (절대경로)
        		"",//in_ds:U
        		"dsSchedule=out_ds",//()_out_ds
        		"",//argument
        		"fn_callback_insert"
        		)
        	//스케줄러 설정정보 만들기
        	var objConfig = {
        						//오늘일자
        						"todate" : null,

        						//현재 표현일자
        						"date" : null,

        						//스케줄 정보를 가지고 있는 데이터셋
        						"binddataset" : this.dsSchedule,

        						//요일 영역
        						"week" : {
        									//요일 표현 텍스트 리스트
        									"weekformat" : ["일", "월", "화", "수", "목", "금", "토"],

        									//요일 영역 높이
        									"height" : 20,

        									//요일 배경 속성
        									"graphicsrect" : {
        												"x" : 0, "y" : 0, "width" : 0, "height" : 0,
        												"fillstyle" : "#ffffff",
        												"strokepen" : "1px solid #000000"
        											 },

        									//요일 텍스트 속성
        									"graphicstext" : {
        												"x" : 0, "y" : 0,
        												"text" : "",
        												"textAlign" : "center",
        												"verticalAlign" : "middle",
        												"font" : 'bold 9pt arial',
        												"color" : "#000000"
        											 }


        								 },

        						//일자 영역
        						"day" : {
        									//기본일자 텍스트 색상
        									"textcolor" : "#000000",

        									//일요일 텍스트 색상
        									"textcolor_sun" : "#ff0000",

        									//토요일 텍스트 색상
        									"textcolor_sat" : "#0000ff",

        									//이전 or 이후 월 텍스트 색상
        									"textcolor_disable" : "#888888",

        									//일자 배경 속성
        									"graphicsrect" : {
        												"x" : 0, "y" : 0, "width" : 0, "height" : 0,
        												"fillstyle" : "#ffffff",
        												"strokepen" : "1px solid #000000"
        											 },

        									//일자 텍스트 속성
        									"graphicstext" : {
        												"x" : 0, "y" : 0,
        												"text" : "",
        												"textAlign" : "right",
        												"verticalAlign" : "top",
        												"font" : 'bold 9pt arial',
        												"color" : ""
        											 }
        								},
        						//일정 영역
        						"schedule" : {
        										//일정 타입별 배경색
        										"type" : {
        													"01" : "#78a2dd",
        													"02" : "#ab9f1b",
        													"03" : "#6ebe8e",
        													"04" : "#d23636"
        												 },

        										//일정 영역 높이
        										"height" : 18,

        										//일정 간 간격
        										"gap" : 4,

        										//일정 배경 속성
        										"graphicsrect" : {
        															"x" : 0, "y" : 0, "width" : 0, "height" : 0,
        															"fillstyle" : "#ffffff",
        															"strokepen" : "1px solid #000000"
        														 },

        										//일정 텍스트 속성
        										"graphicstext" : {
        													"x" : 0, "y" : 0,
        													"text" : "",
        													"textAlign" : "left",
        													"verticalAlign" : "middle",
        													"font" : 'bold 8pt arial',
        													"color" : "#ffffff"
        												 }
        									 },
        						//더보기 영역
        						"more" : {
        									//더보기 높이
        									"height" : 18,

        									//더보기 배경 속성
        									"graphicsrect" : {
        														"x" : 0, "y" : 0, "width" : 0, "height" : 0,
        														"fillstyle" : "#888888",
        														"strokepen" : "1px solid #000000"
        													 },

        									//더보기 텍스트 속성
        									"graphicstext" : {
        														"x" : 0, "y" : 0,
        														"text" : "More",
        														"textAlign" : "left",
        														"verticalAlign" : "middle",
        														"font" : 'bold 8pt arial',
        														"color" : "#000000"
        													 }
        								}
        					}

        	//스케줄러 초기화 함수 호출
        	this.gfnInitScheduler(this.grpScheduler, objConfig);

        	//스케줄러 현재월 텍스트 구해오기
        	var sYearMonth = this.gfnGetMaskFormatDateToString(this.grpScheduler.config.date, "yyyy.MM");

        	//현재월 텍스트 설정
        	this.stYearMonth.set_text(sYearMonth);
        };

        /**************************************************************************
         * CALLBACK 콜백 처리부분(Transaction)
         **************************************************************************/
        this.fn_callback_insert = function() {
        	//데이터셋 정보로 일정 그리기
        	this.gfnLoadScheduler(this.grpScheduler);
        }
        /**************************************************************************
         * CRUD 및 TRANSACTION 서비스 호출 처리
         **************************************************************************/

         /**************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         **************************************************************************/
        /**
         * @description 신규일정 버튼 onclick 시 처리내역
        */
        this.btnNew_onclick = function(obj,e)
        {
        	//팝업오픈 함수 호출
        	this.fnOpenSchedulePop("new");
        };

        /**
         * @description 이전 버튼 onclick 시 처리내역
        */
        this.btnPrev_onclick = function(obj,e)
        {
        	//스케줄러 현재월 정보 가져오기
        	var objDate = this.grpScheduler.config.date;

        	//이전월 정보 가져오기
        	var objPrevDate = this.gfnAddMonth(objDate, -1);

        	//이전월 텍스트 가져오기
        	var sYearMonth = this.gfnGetMaskFormatDateToString(objPrevDate, "yyyy.MM");

        	//이전월로 텍스트 설정
        	this.stYearMonth.set_text(sYearMonth);

        	//이전월로 스케줄러 설정 함수 호출
        	this.gfnSetScheduler(this.grpScheduler, objPrevDate);
        };

        /**
         * @description 다음 버튼 onclick 시 처리내역
        */
        this.btnNext_onclick = function(obj,e)
        {
        	//스케줄러 현재월 정보 가져오기
        	var objDate = this.grpScheduler.config.date;

        	//다음월 정보 가져오기
        	var objNextDate = this.gfnAddMonth(objDate, 1);

        	//다음월 텍스트 가져오기
        	var sYearMonth = this.gfnGetMaskFormatDateToString(objNextDate, "yyyy.MM");

        	//다음월로 텍스트 설정
        	this.stYearMonth.set_text(sYearMonth);

        	//다음월로 스케줄러 설정 함수 호출
        	this.gfnSetScheduler(this.grpScheduler, objNextDate);
        };

        /**
         * @description Graphics Component onsize 시 처리내역
        */
        this.grpScheduler_onsize = function(obj,e)
        {
        	//Graphics 컴포넌트의 사이즈가 변경되었을 경우
        	//스케줄러 설정함수를 호출하여 사이즈 갱신
        	this.gfnSetScheduler(this.grpScheduler);
        };

        /**
         * @description Graphics Component onclick 시 처리내역
        */
        this.grpScheduler_onclick = function(obj,e)
        {
        	//클릭된 위치의 Graphic 오브젝트 가져오기
        	var objHitTest = obj.hitTest(e.canvasx, e.canvasy);

        	var objSchedulePop = obj.getObjectByID("schedulepop");

        	if(objSchedulePop)
        	{
        		if(objHitTest.id.split("_")[0]!="schedule")
        		{
        			this.gfnLoadScheduler(obj);
        			return;
        		}
        	}

        	//클릭된 오브젝트가 더보기일 경우
        	if(objHitTest.id.split("_")[0]=="more")
        	{
        		//더보기 일정 팝업 함수 호출
        		this.gfnLoadSchedulePop(obj, objHitTest);
        	}
        };

        /**
         * @description Graphics Component ondblclick 시 처리내역
        */
        this.grpScheduler_ondblclick = function(obj,e)
        {
        	var oArg;
        	var nRow;
        	var sId;
        	var sDate;
        	var sType;
        	var sTitle;
        	var sContent;
        	var objSchedule;

        	//더블 클릭된 위치의 Graphic 오브젝트 가져오기
        	var objGraphic = obj.hitTest(e.canvasx, e.canvasy);

        	//스케줄러 설정정보 가져오기
        	var objConfig = obj.config;

        	//스케줄러와 연결된 데이터셋 가져오기
        	var objDs = objConfig.binddataset;

        	//더블 클릭된 오브젝트가 일정영역일 경우
        	if(objGraphic.id.split("_")[0]=="schedule")
        	{
        		//일정 그룹 오브젝트 가져오기
        		objSchedule = objGraphic.parent;

        		//일정의 ID 가져오기
        		sId = objGraphic.id.split("_")[1];

        		//데이터셋에서 ID에 해당하는 일정 찾기
        		nRow = objDs.findRow("id", sId);

        		//일정 일자 가져오기
        		sSDate = objDs.getColumn(nRow, "sdate");

        		//일정 일자 가져오기
        		sEDate = objDs.getColumn(nRow, "edate");

        		//일정 타입 가져오기
        		sType = objDs.getColumn(nRow, "type");

        		//일정 제목 가져오기
        		sTitle = objDs.getColumn(nRow, "title");

        		//일정 내용 가져오기
        		sContent = objDs.getColumn(nRow, "content");

        		//팝업오픈 함수 호출
        		this.fnOpenSchedulePop("modify", sId, sSDate, sEDate, sType, sTitle, sContent);

        		return;
        	}

        	var objHitTests = obj.hitTestAll(e.canvasx, e.canvasy);

        	for(var i=0;i<objHitTests.length;i++)
        	{
        		objGraphic = objHitTests[i];

        		//더블 클릭된 오브젝트가 일자영역일 경우
        		if(objGraphic.id.split("_")[0]=="day")
        		{
        			//일자 그룹 오브젝트 가져오기
        			objDay = objGraphic.parent;

        			//일자 정보 가져오기(ex) day_20200612 --> 20200612)
        			sDate = objDay.id.split("_")[1];

        			//팝업오픈 함수 호출
        			this.fnOpenSchedulePop("new", null, sDate);

        			return;
        		}
        	}
        };

        /**************************************************************************
         * 사용자 FUNCTION 영역
        **************************************************************************/
        /**
        * @description 	      	: 팝업 호출 함수
        * @param sPopupType		: 팝업 타입(new : 신규, modify 수정)
        * @param sId    		: 일정 ID
        * @param sDate    		: 일정 일자
        * @param sType    		: 일정 타입
        * @param sTitle    		: 일정 제목
        * @param sContent    	: 일정 내용
        * @return             	: 없음
        */
        this.fnOpenSchedulePop = function(sPopupType, sId, sSDate, sEDate, sType, sTitle, sContent)
        {
        	var oArg = { "popuptype" : sPopupType, "scheduleid" : "", "sdate" : "", "edate" : "", "type" : "", "title" : "", "content" : "" };

        	if(sId)oArg.scheduleid = sId;
        	if(sSDate)oArg.sdate = sSDate;
        	if(sEDate)oArg.edate = sEDate;
        	if(sType)oArg.type = sType;
        	if(sTitle)oArg.title = sTitle;
        	if(sContent)oArg.content = sContent;

        	this.gfnShowModal("popupModal", oArg, "prfWork::schedulerv2_popup.xfdl", "fnPopupCallBack", this, 400, 300, true, true, null);
        }

        /**
        * @description 	      	: 팝업 콜백 함수
        * @param sFormId		: 팝업 ID
        * @param sArg    		: 일정 정보
        * @return             	: 없음
        */
        this.fnPopupCallBack = function(sFormId, sArg)
        {
        	if(sFormId == 'popupModal')
        	{
        		//일정 정보가 있을 경우
        		if(sArg)
        		{
        			var nRow;

        			//일정 정보를 JSON오브젝트로 만들기
        			var objRtn = JSON.parse(sArg);

        			//수정일 경우
        			if(objRtn.popuptype=="modify")
        			{
        				//데이터셋에서 ID에 해당하는 일정 찾기
        				nRow = this.dsSchedule.findRow("id", objRtn.id);

        				//일정 정보 변경
        				this.dsSchedule.setColumn(nRow, "title", objRtn.title);
        				this.dsSchedule.setColumn(nRow, "sdate", objRtn.sdate);
        				this.dsSchedule.setColumn(nRow, "edate", objRtn.edate);
        				this.dsSchedule.setColumn(nRow, "type", objRtn.type);
        				this.dsSchedule.setColumn(nRow, "content", objRtn.content);

        				this.transaction(
        				"updateIndSchedule",//id
        				"/schedule/updateIndSchedule",//url (절대경로)
        				"in_ds=dsSchedule:U",//in_ds:U
        				"",//()_out_ds
        				"id='"+objRtn.id+"'",//argument
        				"fn_callback"
        				)
        			}
        			//신규일 경우
        			else if(objRtn.popuptype=="new")
        			{
        				//신규 Row 추가
        				nRow = this.dsSchedule.addRow();

        				//일정 정보 등록
        				this.dsSchedule.setColumn(nRow, "id", nexacro.round(Math.random()*10000, 0));
        				this.dsSchedule.setColumn(nRow, "title", objRtn.title);
        				this.dsSchedule.setColumn(nRow, "sdate", objRtn.sdate);
        				this.dsSchedule.setColumn(nRow, "edate", objRtn.edate);
        				this.dsSchedule.setColumn(nRow, "type", objRtn.type);
        				this.dsSchedule.setColumn(nRow, "content", objRtn.content);
        				trace(this.dsSchedule.saveXML())

        				this.transaction(
        					"insertIndSchedule",//id
        					"/schedule/insertIndSchedule",//url (절대경로)
        					"in_ds=dsSchedule:U",//in_ds:U
        					"",//()_out_ds
        					"",//argument
        					"fn_callback"
        					)
        							//----------------------------- 삭제 도전
        			}
        			else if(objRtn.popuptype=="delete")
        			{
        				nRow = this.dsSchedule.findRow("id", objRtn.id);
        				this.dsSchedule.deleteRow(nRow);

        				this.transaction(
        				"deleteIndSchedule",//id
        				"/schedule/deleteIndSchedule",//url (절대경로)
        				"",//in_ds:U
        				"",//()_out_ds
        				"id='"+objRtn.id+"'",//argument
        				"fn_callback"
        				)

        			}




        			//스케줄 조회 함수 호출
        			this.gfnLoadScheduler(this.grpScheduler);
        		}
        	}
        }

        /**
        * @description 	      		: 팝업 공통 함수
        * @param sPopupId  			: 팝업 ID
        * @param arrArguments    	: 전달할 Arguments
        * @param sPopupUrl    		: 팝업 URL
        * @param popupCallback    	: 팝업 Callback 함수명
        * @param obj    			: 부모 Form 오브젝트
        * @param nPopupWidth    	: 팝업 Width
        * @param nPopupHeight    	: 팝업 Height
        * @param bShowFrameTitle    : 타이틀바 표현 여부
        * @param bShowFrameStatus	: 스테이터스바 표현 여부
        * @param sAlignType			: 팝업 표시 위치
        * @return             		: 없음
        */
        this.gfnShowModal = function (sPopupId, arrArguments, sPopupUrl, popupCallback, obj, nPopupWidth, nPopupHeight, bShowFrameTitle, bShowFrameStatus, sAlignType)
        {
        	// 현재 구동되는 정보를 업데이트 한다.
        	var childFrame = new ChildFrame();
        	var parentFrame = obj.getOwnerFrame();

        	var sOpenAlignType = "center middle";

        	// TO-DO 팝업사이즈 미지정 시 디폴트 값 적용
        	if (this.gfnIsNull(nPopupWidth))
        	{
        		nPopupWidth = obj.confing.popupWidth;
        	}

        	if (this.gfnIsNull(nPopupHeight))
        	{
        		nPopupHeight = obj.confing.popupHeight;
        	}

        	var sShowStatus;
        	if (this.gfnIsNull(bShowFrameStatus) || bShowFrameStatus == false)
        	{
        		sShowStatus = false;
        	}
        	else if (bShowFrameStatus == true)
        	{
        		sShowStatus = true;
        	}

        	if (!this.gfnIsNull(sAlignType))
        	{
        		sOpenAlignType = sAlignType;
        	}

        	var nPopupLeft = "";
        	var nPopupTop = "";

        	// 팝업 포지션 값 위치 설정
        	nPopupLeft = 0;
        	nPopupTop = 0;

        	/* ===== Statusbar 옵션 추가 - Start ===== */
        	if (sShowStatus == true)
        	{
        		childFrame.init(sPopupId, nPopupLeft, nPopupTop, nexacro.toNumber(nPopupWidth) + 4, nexacro.toNumber(nPopupHeight) + 20 + 4 + 25, null, null, sPopupUrl);
        		childFrame.set_statusbarheight(25);
        		childFrame.set_showstatusbar(true);
        	}
        	else
        	{
        		childFrame.init(sPopupId, nPopupLeft, nPopupTop, nexacro.toNumber(nPopupWidth) + 4, nexacro.toNumber(nPopupHeight) + 20 + 4, null, null, sPopupUrl);
        	}

        	/* ===== Statusbar 옵션 추가 - End   ===== */
        	childFrame.set_openalign(sOpenAlignType);
        	childFrame.set_overlaycolor("RGBA(30, 144, 255, 0.75)");
        	childFrame.set_autosize(false);
        	childFrame.set_dragmovetype("normal");

        	if (this.gfnIsNull(bShowFrameTitle) || bShowFrameTitle == true)
        	{
        		childFrame.set_showtitlebar(true);
        		childFrame.set_border("3 solid #351b6f");
        		childFrame.set_border("normal");
        	}else{
        		childFrame.set_showtitlebar(false);
        	}

        	// 동적으로 생성한 ChildFrame을 Modal Dialog로 보여줌.
        	childFrame.showModal(parentFrame, arrArguments, obj, popupCallback, true);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.scheduler_onload,this);
            this.grpScheduler.addEventHandler("ondblclick",this.grpScheduler_ondblclick,this);
            this.grpScheduler.addEventHandler("onclick",this.grpScheduler_onclick,this);
            this.grpScheduler.addEventHandler("onsize",this.grpScheduler_onsize,this);
            this.btnPrev.addEventHandler("onclick",this.btnPrev_onclick,this);
            this.btnNext.addEventHandler("onclick",this.btnNext_onclick,this);
            this.btnNew.addEventHandler("onclick",this.btnNew_onclick,this);
        };

        this.loadIncludeScript("schedulerv2.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
