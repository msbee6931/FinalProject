(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Work");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1080,520);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_Notice", this);
            obj._setContents("<ColumnInfo><Column id=\"n_seq\" type=\"INT\" size=\"256\"/><Column id=\"title\" type=\"STRING\" size=\"256\"/><Column id=\"writedate\" type=\"DATE\" size=\"256\"/><Column id=\"contents\" type=\"STRING\" size=\"256\"/><Column id=\"deptcode\" type=\"STRING\" size=\"256\"/><Column id=\"view_count\" type=\"STRING\" size=\"256\"/><Column id=\"file\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_deptcode", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">A</Col><Col id=\"name\">일반</Col></Row><Row><Col id=\"code\">B</Col><Col id=\"name\">장학</Col></Row><Row><Col id=\"code\">C</Col><Col id=\"name\">학사</Col></Row><Row><Col id=\"code\">D</Col><Col id=\"name\">취업</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_NoticeFiles", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"n_seq\" type=\"INT\" size=\"256\"/><Column id=\"parentSeq\" type=\"INT\" size=\"256\"/><Column id=\"fileName\" type=\"STRING\" size=\"256\"/><Column id=\"savedFileName\" type=\"STRING\" size=\"256\"/><Column id=\"fileSize\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_colSchedule", this);
            obj._setContents("<ColumnInfo><Column id=\"seq\" type=\"STRING\" size=\"256\"/><Column id=\"title\" type=\"STRING\" size=\"256\"/><Column id=\"sDate\" type=\"STRING\" size=\"256\"/><Column id=\"eDate\" type=\"STRING\" size=\"256\"/><Column id=\"contents\" type=\"STRING\" size=\"256\"/><Column id=\"writeDate\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cal", this);
            obj._setContents("<ColumnInfo><Column id=\"backgroundcolumn\" type=\"STRING\" size=\"256\"/><Column id=\"bordercolumn\" type=\"STRING\" size=\"256\"/><Column id=\"datecolumn\" type=\"STRING\" size=\"256\"/><Column id=\"textcolorcolumn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("FileDownTransfer00", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnGrade","50","370","125","50",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("성적 조회");
            obj.set_cssclass("btn_default");
            obj.set_border("0px none,1px solid #ffffff,1px solid #ffffff,0px none");
            this.addChild(obj.name, obj);

            obj = new Button("btnCertification","176","370","125","50",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("증명서 발급");
            obj.set_cssclass("btn_default");
            obj.set_border("0px none,0px none,1px solid #ffffff");
            this.addChild(obj.name, obj);

            obj = new Button("btnClassList","50","420","125","50",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("개설강좌 조회");
            obj.set_cssclass("btn_default");
            obj.set_border("0px none,1px solid #ffffff,1px solid #ffffff,0px none");
            this.addChild(obj.name, obj);

            obj = new Button("btnScholarMg","176","420","125","50",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("장학금 관리");
            obj.set_cssclass("btn_default");
            obj.set_border("0px none,0px none,1px solid #ffffff");
            this.addChild(obj.name, obj);

            obj = new Button("btnMypage","50","320","125","50",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("개인정보 조회");
            obj.set_cssclass("btn_default");
            obj.set_border("0px none,1px solid #ffffff,1px solid #ffffff,0px none");
            this.addChild(obj.name, obj);

            obj = new Button("btnClassTime","176","320","125","50",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("시간표 조회");
            obj.set_cssclass("btn_default");
            obj.set_border("0px none,0px none,1px solid #ffffff");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_schedule","760","51","290","209",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_type("monthonly");
            obj.set_innerdataset("ds_cal");
            obj.set_backgroundcolumn("backgroundcolumn");
            obj.set_bordercolumn("bordercolumn");
            obj.set_datecolumn("datecolumn");
            obj.set_textcolorcolumn("textcolorcolumn");
            this.addChild(obj.name, obj);

            obj = new Grid("gr_schedule","760","280","290","190",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_binddataset("ds_colSchedule");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_default");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"293\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"일정\"/></Band><Band id=\"body\"><Cell text=\"bind:title\" cursor=\"pointer\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta_bookmark","50","286","100","44",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("즐겨찾기");
            this.addChild(obj.name, obj);

            obj = new Grid("gr_notice","320","80","420","306",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_binddataset("ds_Notice");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_default");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"46\"/><Column size=\"196\"/><Column size=\"64\"/><Column size=\"112\"/></Columns><Rows><Row size=\"30\"/></Rows><Band id=\"body\"><Cell text=\"bind:deptcode\" textAlign=\"center\" displaytype=\"combotext\" combodataset=\"ds_deptcode\" combocodecol=\"code\" combodatacol=\"name\"/><Cell col=\"1\" text=\"bind:title\" cursor=\"pointer\"/><Cell col=\"2\" displaytype=\"imagecontrol\" imagestretch=\"fixaspectratio\" background=\"transparent\" text=\"expr:file==&quot;Y&quot;?&quot;theme://images/file.png&quot;:&quot;&quot;\" cursor=\"pointer\"/><Cell col=\"3\" text=\"bind:writedate\" textAlign=\"center\" calendardateformat=\"yyyy-MM-dd \" displaytype=\"calendarcontrol\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnAll","320","51","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("전체");
            obj.set_cssclass("btn_default");
            this.addChild(obj.name, obj);

            obj = new Button("btnNormal","380","51","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("일반");
            obj.set_cssclass("btn_default");
            this.addChild(obj.name, obj);

            obj = new Button("btnAcademic","440","51","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("학사");
            obj.set_cssclass("btn_default");
            this.addChild(obj.name, obj);

            obj = new Button("btnScholar","500","51","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("장학");
            obj.set_cssclass("btn_default");
            this.addChild(obj.name, obj);

            obj = new Button("btnEmployment","560","51","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("취업");
            obj.set_cssclass("btn_default");
            this.addChild(obj.name, obj);

            obj = new Button("btnMore","680","50","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("more+");
            obj.set_visible("false");
            obj.set_cssclass("btn_default");
            this.addChild(obj.name, obj);

            obj = new Combo("co_month","910","260","130","20",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var co_month_innerdataset = new nexacro.NormalDataset("co_month_innerdataset", obj);
            co_month_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">1월</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">2월</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">3월</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">4월</Col></Row><Row><Col id=\"codecolumn\">5</Col><Col id=\"datacolumn\">5월</Col></Row><Row><Col id=\"codecolumn\">6</Col><Col id=\"datacolumn\">6월</Col></Row><Row><Col id=\"codecolumn\">7</Col><Col id=\"datacolumn\">7월</Col></Row><Row><Col id=\"codecolumn\">8</Col><Col id=\"datacolumn\">8월</Col></Row><Row><Col id=\"codecolumn\">9</Col><Col id=\"datacolumn\">9월</Col></Row><Row><Col id=\"codecolumn\">10</Col><Col id=\"datacolumn\">10월</Col></Row><Row><Col id=\"codecolumn\">11</Col><Col id=\"datacolumn\">11월</Col></Row><Row><Col id=\"codecolumn\">12</Col><Col id=\"datacolumn\">12월</Col></Row></Rows>");
            obj.set_innerdataset(co_month_innerdataset);
            this.addChild(obj.name, obj);

            obj = new Static("sta_schedule","760","260","91","20",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("남은 일정");
            this.addChild(obj.name, obj);

            obj = new Div("div_Info","50","51","251","229",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("Div00");
            obj.set_cssclass("div_line");
            this.addChild(obj.name, obj);

            obj = new Static("sta_name","5","14","230","46",null,null,null,null,null,null,this.div_Info.form);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_font("20px/normal \"-윤고딕330\"");
            this.div_Info.addChild(obj.name, obj);

            obj = new Static("sta_dept","5","60","230","40",null,null,null,null,null,null,this.div_Info.form);
            obj.set_taborder("1");
            obj.set_text("");
            this.div_Info.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1080,520,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Main.xfdl", function() {
        this.objApp = nexacro.getApplication();

        this.fn_openForm = function(sMenuId,sMenuNm,sFormUrl)
        {
        	//화면 오픈 스크립트
        	if(sFormUrl.length <= 0)	return;
        	var av_FrameSet = this.objApp.mainframe.VFrameSet00.HFrameSet00.VFrameSet00.FrameSet00;
        	var nWidth  = av_FrameSet.getOffsetWidth();
        	var nHeight = av_FrameSet.getOffsetHeight();

        	var sFormId = "form_" + sMenuId;	// FORM_1010...
        	var arrObj = av_FrameSet.all;
        	for(var i=0; i<arrObj.length; i++)
        	{
        		if(arrObj[i].name == sFormId)
        		{
        			arrObj[i].setFocus();
        			//mid 탭 일치시키기
        			this.objApp.mainframe.VFrameSet00.HFrameSet00.VFrameSet00.ChildFrame00.form.fn_tabChange(sFormId);
        			return;
        		}
        	}

        	var objChildFrame = new ChildFrame();
        	objChildFrame.init(sFormId, 0, 0, nWidth, nHeight);

        	av_FrameSet.addChild(sFormId, objChildFrame);
        	objChildFrame.set_resizable(true);
        	objChildFrame.set_openstatus("maximize");
        	objChildFrame.set_showtitlebar(false);
        	objChildFrame.set_titletext(sMenuNm);

        	var oParam = {form_id : sFormId,
        		menu_id : sMenuId,
        		menu_name : sMenuNm,
        		form_url : sFormUrl}

        	objChildFrame.khParam = oParam;
        	objChildFrame.set_formurl(sFormUrl);
        	objChildFrame.show();

        	//새로 생성
        	var nRow = this.objApp.std_openForm.addRow();
        	this.objApp.std_openForm.setColumn(nRow, "form_id"  , sFormId);
        	this.objApp.std_openForm.setColumn(nRow, "menu_id"  , sMenuId);
        	this.objApp.std_openForm.setColumn(nRow, "menu_name", sMenuNm);
        	this.objApp.std_openForm.setColumn(nRow, "form_url" , sFormUrl);
        	trace(this.objApp.std_openForm.saveXML());
        	this.objApp.mainframe.VFrameSet00.HFrameSet00.VFrameSet00.ChildFrame00.form.fn_addTab(sFormId, sMenuNm);
        }
        this.btnMypage_onclick = function(obj,e)
        {
        	this.objApp.std_menu.filter("menu_id.substring(0,2) == '" + 40 + "'");
        	this.objApp.mainframe.VFrameSet00.HFrameSet00.VFrameSet00.set_separatesize("30,0,*");
        	this.fn_openForm("4010","내 정보 보기","stdWork::studentInfo.xfdl"); //form 오픈 함수
        };

        this.btnClassTime_onclick = function(obj,e)
        {
        	this.objApp.std_menu.filter("menu_id.substring(0,2) == '" + 20 + "'");
        	this.objApp.mainframe.VFrameSet00.HFrameSet00.VFrameSet00.set_separatesize("30,0,*");
        	this.fn_openForm("2050","시간표 조회","stdWork::timeSchedule.xfdl"); //form 오픈 함수
        };


        this.btnClassList_onclick = function(obj,e)
        {
        	this.objApp.std_menu.filter("menu_id.substring(0,2) == '" + 20 + "'");
        	this.objApp.mainframe.VFrameSet00.HFrameSet00.VFrameSet00.set_separatesize("30,0,*");
        	this.fn_openForm("2040","개설강좌 조회","prfWork::classList.xfdl"); //form 오픈 함수
        };

        this.btnGrade_onclick = function(obj,e)
        {
        	this.objApp.std_menu.filter("menu_id.substring(0,2) == '" + 20 + "'");
        	this.objApp.mainframe.VFrameSet00.HFrameSet00.VFrameSet00.set_separatesize("30,0,*");
        	this.fn_openForm("2070","성적 조회","stdWork::readGrade.xfdl"); //form 오픈 함수
        };

        this.btnCertification_onclick = function(obj,e)
        {
        	this.objApp.std_menu.filter("menu_id.substring(0,2) == '" + 30 + "'");
        	this.objApp.mainframe.VFrameSet00.HFrameSet00.VFrameSet00.set_separatesize("30,0,*");
        	this.fn_openForm("3010","재학 증명서","stdWork::enrollment.xfdl"); //form 오픈 함수
        };
        this.btnScholarMg_onclick = function(obj,e)
        {
        	this.objApp.std_menu.filter("menu_id.substring(0,2) == '" + 10 + "'");
        	this.objApp.mainframe.VFrameSet00.HFrameSet00.VFrameSet00.set_separatesize("30,0,*");
        	this.fn_openForm("104020","장학금 내역 조회","stdWork::stdReadScholarship.xfdl"); //form 오픈 함수
        };

        this.objApp = nexacro.getApplication();
        this.Form_Work_onload = function(obj,e)
        {
        	var name=  this.objApp.gds_students.getColumn(0,"name");
        	var deptCode = this.objApp.gds_students.getColumn(0,"deptCode");
        	var nRow = this.objApp.deptCode.findRow("code",deptCode);
        	var dept = this.objApp.deptCode.getColumn(nRow,"name");
        	this.div_Info.form.sta_name.set_text(name + "님 환영합니다");
        	this.div_Info.form.sta_dept.set_text(dept);
        	this.transaction(
        		"main"
        		,"/main.notice"
        		,""
        		,"ds_Notice=out_ds ds_NoticeFiles=out_ds2 ds_colSchedule=out_ds3"
        		,""
        		,"fn_callback"
        	);
        };
        this.fn_callback = function(sId,errCd,errMsg){
        	if (errCd < 0) {
        		trace("sId["+sId+"]: Error["+errCd+"]:"+errMsg);
        	}
        	if(sId == "main"){
        		//공지사항 정보
        		for(var j=0; j<this.ds_Notice.getRowCount(); j++){
        			var seq = this.ds_Notice.getColumn(j,"n_seq");
        			for(var i = 0; i<this.ds_NoticeFiles.getRowCount(); i++){
        				var parentSeq = this.ds_NoticeFiles.getColumn(i,"parentSeq");
        				if(seq == parentSeq){
        					this.ds_Notice.setColumn(j,"file","Y");
        				}
        			}
        		}
        		this.ds_Notice.filter("currow < 10");
        		//학사일정 정보
        		this.ds_cal.clearData();
        		for(var i=0; i<this.ds_colSchedule.getRowCount(); i++){
        			var sDate = this.ds_colSchedule.getColumn(i,"sDate");
        			var eDate = this.ds_colSchedule.getColumn(i,"eDate");
        			for(var j=0; j<=parseInt(eDate)-parseInt(sDate); j++){
        				var nRow = this.ds_cal.addRow();
        				this.ds_cal.setColumn(nRow,"backgroundcolumn","skyBlue");
        				this.ds_cal.setColumn(nRow,"bordercolumn","1px solid green");
        				this.ds_cal.setColumn(nRow,"datecolumn",parseInt(sDate)+j);
        			}
        		}
        		var objDate = new Date();
        		this.cal_schedule.set_value(objDate);
        		var month = this.cal_schedule.getMonth();
        		if(month < 10){
        			month = "0"+month;
        		}
        		this.ds_colSchedule.filter("sDate.substring(4,6) >='"+month+"'");
        	}
        }
        this.btnMore_onclick = function(obj,e)
        {
        	/*nexacro.open( strID, strFormURL, objParentFrame, {objArguList}, strOpenStyle, nLeft, nTop [, nWidth, nHeight [, objOpener [, strExtOpenStyle ]]])*/
        	if(this.ds_Notice.getRowCount() > 0 ){
        	var part = this.ds_Notice.getColumn(0,"deptcode")
        	nexacro.open("normal","Student::NoticeLocation.xfdl",this.getOwnerFrame(),{part : part},"showtitlebar=true resizable=true",0, 0, 800, 600, this);
        	}else{
        		alert("공지사항이 없습니다");
        	}
        };


        this.btnAll_onclick = function(obj,e)
        {
        	this.btnMore.set_visible(false);
        	this.ds_Notice.filter("currow < 10");
        };

        this.btnNormal_onclick = function(obj,e)
        {
        	this.btnMore.set_visible(true);
        	this.ds_Notice.filter("deptcode == 'A'&&currow < 10");
        };

        this.btnAcademic_onclick = function(obj,e)
        {
        	this.btnMore.set_visible(true);
        	this.ds_Notice.filter("deptcode == 'B'&&currow < 10");
        };

        this.btnScholar_onclick = function(obj,e)
        {
        	this.btnMore.set_visible(true);
        	this.ds_Notice.filter("deptcode == 'C'&&currow < 10");
        };

        this.btnEmployment_onclick = function(obj,e)
        {
        	this.btnMore.set_visible(true);
        	this.ds_Notice.filter("deptcode == 'D'&&currow < 10");
        };

        this.gr_notice_oncellclick = function(obj,e)
        {
        	var objDs = this.ds_Notice;
        	if(e.col == 1){
        		var nCode = objDs.getColumn(e.row,"n_seq");
        		let x = this.width/2-400;
        		let y = this.height/2-300;
        		let objCF = new ChildFrame();
        		objCF.init("popAdd",x,y,800,600,0,0,"stdWork::notice_pop.xfdl");
        		objCF.set_showtitlebar(false);
        		objCF.showModal(this.getOwnerFrame(),{nCode:nCode},this,"fn_pop_callback");
        	}else if(e.col == 2){
        		if(objDs.getColumn(e.row,"file")=='Y'){
        			var seq = objDs.getColumn(e.row,"n_seq");
        			var title = objDs.getColumn(e.row,"title");
        			this.FileDownTransfer00.setPostData("seq",seq); // 현재 게시물의seq를 넘김
        			//총 첨부파일 중 체크 된 파일만 이벤트 발생
        			this.FileDownTransfer00.setPostData("title",title);

        			this.ds_NoticeFiles.filter("parentSeq=='"+seq+"'");
        			for(var i=0; i< this.ds_NoticeFiles.getRowCount(); i++){
        					var savedFileName = this.ds_NoticeFiles.getColumn(i,"savedFileName");
        					this.FileDownTransfer00.setPostData("savedFileName'"+i+"'",savedFileName);

        					var fileName = this.ds_NoticeFiles.getColumn(i,"fileName");
        					this.FileDownTransfer00.setPostData("fileName'"+i+"'",fileName);
        					trace(fileName);
        			}

        // 			//파일다운로드 실행
         			this.FileDownTransfer00.download("/downloadNotice.notice");
        		}
        	}
        };

        //파일다운로드 성공시 (NRE 에서만 지원)
        this.FileDownTransfer00_onsuccess = function(obj,e)
        {
          var sMsg = e.targetfullpath +"\n"+  e.url;

          alert(sMsg);
        };

        //파일다운로드 실패시 (NRE 에서만 지원)
        this.FileDownTransfer00_onerror = function(obj,e)
        {
          var sMsg = ">>>>>>>>>>>>>>>>>>>>>>>>>>  ERROR >>>>>>>>>>>>>>>>>>>>>>>>>>\n";
          sMsg += "statuscode: "+e.statuscode+"\n";
          sMsg += "requesturi: "+e.requesturi+"\n";
          sMsg += "locationuri: "+e.locationuri+"\n" ;
          sMsg += "errormsg: "+e.errormsg+"\n";

          alert(sMsg);
        };

        this.co_month_canitemchange = function(obj,e)
        {
        		var month = e.postvalue;
         		if(month < 10){
         			month = "0"+month;
         		}
        		this.ds_colSchedule.filter("sDate.substring(4,6)=='"+month+"'");
        };

        this.gr_schedule_oncellclick = function(obj,e)
        {
        	if(e.col == 0){
        		var seq = this.ds_colSchedule.getColumn(e.row,"seq");
        		var objCF = new ChildFrame();
        		var x = this.width/2-200;
        		var y = this.height/2-175;
        		objCF.init("colSchedule_read_pop",x,y,400,350,0,0,"admWork::colSchedule_read_pop.xfdl");
        		objCF.set_titletext("일정 상세보기");
        		objCF.showModal(
        			this.getOwnerFrame(),
        			{seq:seq},
        			this,
        			"fn_pop_callback"
        	);

        	}
        };





        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Work_onload,this);
            this.btnGrade.addEventHandler("onclick",this.btnGrade_onclick,this);
            this.btnCertification.addEventHandler("onclick",this.btnCertification_onclick,this);
            this.btnClassList.addEventHandler("onclick",this.btnClassList_onclick,this);
            this.btnScholarMg.addEventHandler("onclick",this.btnScholarMg_onclick,this);
            this.btnMypage.addEventHandler("onclick",this.btnMypage_onclick,this);
            this.btnClassTime.addEventHandler("onclick",this.btnClassTime_onclick,this);
            this.cal_schedule.addEventHandler("onspin",this.cal_schedule_onspin,this);
            this.gr_schedule.addEventHandler("oncellclick",this.gr_schedule_oncellclick,this);
            this.gr_notice.addEventHandler("oncellclick",this.gr_notice_oncellclick,this);
            this.btnAll.addEventHandler("onclick",this.btnAll_onclick,this);
            this.btnNormal.addEventHandler("onclick",this.btnNormal_onclick,this);
            this.btnAcademic.addEventHandler("onclick",this.btnAcademic_onclick,this);
            this.btnScholar.addEventHandler("onclick",this.btnScholar_onclick,this);
            this.btnEmployment.addEventHandler("onclick",this.btnEmployment_onclick,this);
            this.btnMore.addEventHandler("onclick",this.btnMore_onclick,this);
            this.co_month.addEventHandler("canitemchange",this.co_month_canitemchange,this);
            this.FileDownTransfer00.addEventHandler("onerror",this.FileDownTransfer00_onerror,this);
            this.FileDownTransfer00.addEventHandler("onsuccess",this.FileDownTransfer00_onsuccess,this);
        };

        this.loadIncludeScript("Form_Main.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
