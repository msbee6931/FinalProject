(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("reqAbsence_pop");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(900,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("absenceCode_ds", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">01</Col><Col id=\"name\">군입대</Col></Row><Row><Col id=\"code\">02</Col><Col id=\"name\">질병</Col></Row><Row><Col id=\"code\">03</Col><Col id=\"name\">가사사정</Col></Row><Row><Col id=\"code\">04</Col><Col id=\"name\">사고</Col></Row><Row><Col id=\"name\">기타</Col><Col id=\"code\">05</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("absFileList_ds", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"seq\" type=\"INT\" size=\"256\"/><Column id=\"parentSeq\" type=\"INT\" size=\"256\"/><Column id=\"fileName\" type=\"STRING\" size=\"256\"/><Column id=\"savedFileName\" type=\"STRING\" size=\"256\"/><Column id=\"fileSize\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("absence_ds", this);
            obj._setContents("<ColumnInfo><Column id=\"seq\" type=\"INT\" size=\"256\"/><Column id=\"std_code\" type=\"STRING\" size=\"256\"/><Column id=\"sDate\" type=\"STRING\" size=\"256\"/><Column id=\"eDate\" type=\"STRING\" size=\"256\"/><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"writeDate\" type=\"STRING\" size=\"256\"/><Column id=\"checkValue\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("students_ds", this);
            obj._setContents("<ColumnInfo><Column id=\"s_seq\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"age\" type=\"STRING\" size=\"256\"/><Column id=\"email\" type=\"STRING\" size=\"256\"/><Column id=\"contact\" type=\"STRING\" size=\"256\"/><Column id=\"address\" type=\"STRING\" size=\"256\"/><Column id=\"scholarship\" type=\"STRING\" size=\"256\"/><Column id=\"rest\" type=\"STRING\" size=\"256\"/><Column id=\"grade\" type=\"STRING\" size=\"256\"/><Column id=\"pw\" type=\"STRING\" size=\"256\"/><Column id=\"gender\" type=\"STRING\" size=\"256\"/><Column id=\"deptCode\" type=\"STRING\" size=\"256\"/><Column id=\"colCode\" type=\"STRING\" size=\"256\"/><Column id=\"colGrade\" type=\"STRING\" size=\"256\"/><Column id=\"secNumber\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("FileDownTransfer00", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00_00_00_00_00","150","0","600","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_visible("false");
            obj.set_background("RGBA(236,135,135,0.71)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_03","0","40","30","520",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_visible("false");
            obj.set_background("RGBA(236,135,135,0.71)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02","870","40","30","520",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_visible("false");
            obj.set_background("RGBA(236,135,135,0.71)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_01","160","580","600","20",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_visible("false");
            obj.set_background("RGBA(236,135,135,0.71)");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","30","20","842","560",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Div00");
            obj.set_cssclass("div_line");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_title00","358","60","191","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_cssclass("edt_default");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_title01","98","90","191","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_cssclass("edt_default");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_title00_01","358","90","191","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_cssclass("edt_default");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_title00_00_00","617","90","190","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_cssclass("edt_default");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_title01_00","97","120","710","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_cssclass("edt_default");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_down","707","205","100","70",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("15");
            obj.set_text("파일\r\n다운로드");
            obj.set_cssclass("btn_default");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","29","410","780","100",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("16");
            obj.set_text("※유의사항\r\n1. 입대휴학 신청자는 입대 사실을 확인할 수 있는 증명서 1통을 첨부해야 함.\r\n2. 군입대 후 귀향조취 된 경우에는 즉시 행정팀으로 통보해야함.\r\n3. 일반휴학기간 중 입대할 경우에는 입대 전에 입영통지서 사본 1통을 첨부하여 휴학연기 신청서를 제출해야 함.\r\n4. 질병으로 휴학하는 경우에는 종합병원장이 발행하는 4주 이상의 진단서를 첨부해야함.\r\n5. 휴학기간 만료 후 해당 학기 등록기간 내에 복학하지 않을 경우에는  퇴학처리 됨.");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("Grid00","127","205","580","70",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("17");
            obj.set_binddataset("absFileList_ds");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_default");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"32\"/><Column size=\"419\"/><Column size=\"80\"/></Columns><Rows><Row size=\"20\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"0\"/><Cell col=\"1\" text=\"fileName\"/><Cell col=\"2\" text=\"fileSize\"/></Band><Band id=\"body\"><Cell text=\"bind:chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:fileName\"/><Cell col=\"2\" text=\"bind:fileSize\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_ok","710","514","100","25",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("18");
            obj.set_text("닫기");
            obj.set_cssclass("btn_can");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","28","309","782","70",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("19");
            obj.set_text("\r\n\r\n 본인은 보호자의 동의하에 위와 같이 휴학하고자 하오니 허가하여 주시기 바랍니다.");
            obj.set_textAlign("center");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03","32","20","172","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("20");
            obj.set_text("휴학신청서");
            obj.set_cssclass("sta_title");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","28","60","70","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("학 과");
            obj.set_cssclass("sta_default");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00","289","60","70","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("학 번");
            obj.set_cssclass("sta_default");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","548","60","70","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("생년월일");
            obj.set_cssclass("sta_default");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_01","28","89","70","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("학 년");
            obj.set_cssclass("sta_default");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_01","289","90","70","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("연락처");
            obj.set_cssclass("sta_default");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00_00","28","176","70","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("13");
            obj.set_text("사 유");
            obj.set_cssclass("sta_default");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00","28","147","70","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_text("기 간");
            obj.set_cssclass("sta_default");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","548","90","70","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_text("성 명");
            obj.set_cssclass("sta_default");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_02","28","205","100","70",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("14");
            obj.set_text("첨부파일");
            obj.set_cssclass("sta_default");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static04","98","149","709","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("21");
            obj.set_text("");
            obj.set_cssclass("sta_line");
            this.Div00.addChild(obj.name, obj);

            obj = new Calendar("cal_sDate","107","153","150","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("22");
            obj.set_cssclass("cal_default");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Calendar("cal_eDate","299","153","150","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("23");
            obj.set_cssclass("cal_default");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static05","277","154","19","19",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("24");
            obj.set_text("~");
            this.Div00.addChild(obj.name, obj);

            obj = new Radio("Radio00","106","186","674","18",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("25");
            obj.set_innerdataset("absenceCode_ds");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            obj.set_rowcount("1");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_commit","599","514","100","25",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("26");
            obj.set_text("승인");
            obj.set_cssclass("btn_default");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo00","97","61","192","31",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("27");
            obj.set_innerdataset("deptCode");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            obj.set_cssclass("cmb_dept");
            obj.set_readonly("true");
            obj.set_text("Combo00");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static06","28","275","779","136",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_line");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00","617","62","190","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("29");
            obj.set_cssclass("med_default");
            obj.set_readonly("true");
            obj.set_type("string");
            obj.set_format("@@@@@@");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","28","118","70","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_text("주 소");
            obj.set_cssclass("sta_default");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_complite","599","514","100","25",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("30");
            obj.set_text("휴학 처리 완료");
            obj.set_cssclass("btn_default");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",900,600,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Div00.form.Combo00","value","students_ds","deptCode");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Div00.form.edt_title00","value","students_ds","s_seq");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Div00.form.MaskEdit00","value","students_ds","secNumber");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Div00.form.edt_title01","value","students_ds","colGrade");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","Div00.form.edt_title00_01","value","students_ds","contact");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","Div00.form.edt_title00_00_00","value","students_ds","name");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","Div00.form.edt_title01_00","value","students_ds","address");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","Div00.form.cal_sDate","value","absence_ds","sDate");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","Div00.form.cal_eDate","value","absence_ds","eDate");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","Div00.form.Radio00","value","absence_ds","code");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("reqAbsence_pop.xfdl", function() {
        this.seq = this.parent.seq;
        this.std_code =this.parent.std_code;
        this.reqAbsence_pop_onload = function(obj,e)
        {


        	this.transaction(
        		"selectOneStd.students",//id
        		"/students/selectOneStd.students",//url (절대경로)
        		"",//in_ds:U
        		"students_ds=out_ds",//()_out_ds
        		"sCode="+this.std_code,//argument
        		"fn_callback_stdInfo"
        	)
        };

        this.fn_callback_stdInfo = function()
        {
        	var rest = this.students_ds.getColumn(0,"rest");
        	if(rest=='Y')
        	{
        		this.Div00.form.btn_commit.set_visible(false);
        		this.Div00.form.btn_complite.set_visible(true);
        	}
        	this.transaction(
        		"selectOne.absence",//id
        		"/absence/selectOne.absence",//url (절대경로)
        		"",//in_ds:U
        		"absence_ds=out_ds",//()_out_ds
        		"seq="+this.seq,//argument
        		"fn_callback_absenceOne"
        	)
        }

        this.fn_callback_absenceOne = function()
        {
        	this.transaction(
        		"selectOneFile.absence",//id
        		"/absence/selectOneFile.absence",//url (절대경로)
        		"",//in_ds:U
        		"absFileList_ds=out_ds",//()_out_ds
        		"seq="+this.seq,//argument
        		"fn_callback"
        	)
        }
        //----다운로드
        this.Div00_btn_down_onclick = function(obj,e)
        {
        	var objDs = this.absFileList_ds;
        	var arr = objDs.extractRows("chk==1");
        	if(arr.length==0||arr==-1){
        		alert("선택된항목이없습니다.");
        		return;
        	};

        	this.FileDownTransfer00.setPostData("seq",this.seq); // 현재 게시물의seq를 넘김
        	//총 첨부파일 중 체크 된 파일만 이벤트 발생


        	for(var i=0; i< objDs.getRowCount(); i++){

        		if(objDs.getColumn(i,"chk") == "1"){
        			// 체크된 파일만 서버로 변수를 보냄

        			var savedFileName = objDs.getColumn(i,"savedFileName");
        			this.FileDownTransfer00.setPostData("savedFileName'"+i+"'",savedFileName);

        			var fileName = objDs.getColumn(i,"fileName");
        			this.FileDownTransfer00.setPostData("fileName'"+i+"'",fileName);

        		}
        	}

        	//파일다운로드 실행
        	this.FileDownTransfer00.download("/absence/downAbsFile.absence");

        	//검색 후 지정 체크박스 해제
        	this.Div00.form.Grid00.setCellProperty("head",0,"text",0);
        	for(let i =0; i<this.absFileList_ds.getRowCount();i++){
        		if(this.absFileList_ds.getColumn(i,"chk") == 1){
        			this.absFileList_ds.setColumn(i,"chk",0);
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

        //학생 테이블 휴학 처리 하기

        this.Div00_btn_commit_onclick = function(obj,e)
        {
        	var check = this.confirm("정말로 휴학을 승인하시겠습니까?")
        	if(check)
        	{
        		this.transaction(
        			"updateStdAbs.students",//id
        			"/students/updateStdAbs.students",//url (절대경로)
        			"",//in_ds:U
        			"students_ds=out_ds",//()_out_ds
        			"sCode="+this.std_code,//argument
        			"fn_callback_updAbs"
        		)
        	}
        	else
        	{
        		return;
        	}
        };
        this.fn_callback_updAbs = function()
        {
        	this.Div00.form.btn_commit.set_visible(false);
        	this.Div00.form.btn_complite.set_visible(true);
        }

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

        		this.absFileList_ds.set_enableevent(false);
        		for(var i=0; i< this.absFileList_ds.getRowCount(); i++)
        		{
        			this.absFileList_ds.setColumn(i, "chk",sheadValue);
        		}
        		this.absFileList_ds.set_enableevent(true);
            }

        }



        this.Div00_btn_ok_onclick = function(obj,e)
        {
        	this.close();
        };





        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.reqAbsence_pop_onload,this);
            this.Div00.form.btn_down.addEventHandler("onclick",this.Div00_btn_down_onclick,this);
            this.Div00.form.Grid00.addEventHandler("onheadclick",this.Div00_Grid00_onheadclick,this);
            this.Div00.form.btn_ok.addEventHandler("onclick",this.Div00_btn_ok_onclick,this);
            this.Div00.form.cal_sDate.addEventHandler("onchanged",this.Div00_Calendar00_onchanged,this);
            this.Div00.form.cal_eDate.addEventHandler("onchanged",this.Div00_Calendar00_onchanged,this);
            this.Div00.form.btn_commit.addEventHandler("onclick",this.Div00_btn_commit_onclick,this);
            this.Div00.form.btn_complite.addEventHandler("onclick",this.Div00_btn_commit_onclick,this);
            this.FileDownTransfer00.addEventHandler("onerror",this.FileDownTransfer00_onerror,this);
            this.FileDownTransfer00.addEventHandler("onsuccess",this.FileDownTransfer00_onsuccess,this);
        };

        this.loadIncludeScript("reqAbsence_pop.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
