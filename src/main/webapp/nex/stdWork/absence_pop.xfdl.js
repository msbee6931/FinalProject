(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("absence_pop");
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
            obj._setContents("<ColumnInfo><Column id=\"s_seq\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"age\" type=\"STRING\" size=\"256\"/><Column id=\"email\" type=\"STRING\" size=\"256\"/><Column id=\"contact\" type=\"STRING\" size=\"256\"/><Column id=\"adress\" type=\"STRING\" size=\"256\"/><Column id=\"scholarship\" type=\"STRING\" size=\"256\"/><Column id=\"rest\" type=\"STRING\" size=\"256\"/><Column id=\"grade\" type=\"STRING\" size=\"256\"/><Column id=\"birth\" type=\"STRING\" size=\"256\"/><Column id=\"pw\" type=\"STRING\" size=\"256\"/><Column id=\"gender\" type=\"STRING\" size=\"256\"/><Column id=\"deptCode\" type=\"STRING\" size=\"256\"/><Column id=\"colCode\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("FileUpTransfer00", this);
            this.addChild(obj.name, obj);


            obj = new FileDialog("FileDialog00", this);
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
            obj.set_border("1px solid #c1c1c1");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_title00","358","60","191","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_title00_00","619","60","191","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_title01","98","90","191","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_title00_01","358","90","191","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_title00_00_00","619","90","191","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_title01_00","98","120","712","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_fine","709","209","100","39",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("16");
            obj.set_text("파일찾기");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_del","709","248","100","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("17");
            obj.set_text("파일 삭제");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","29","410","780","100",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("18");
            obj.set_text("※유의사항\r\n1. 입대휴학 신청자는 입대 사실을 확인할 수 있는 증명서 1통을 첨부해야 함.\r\n2. 군입대 후 귀향조취 된 경우에는 즉시 행정팀으로 통보해야함.\r\n3. 일반휴학기간 중 입대할 경우에는 입대 전에 입영통지서 사본 1통을 첨부하여 휴학연기 신청서를 제출해야 함.\r\n4. 질병으로 휴학하는 경우에는 종합병원장이 발행하는 4주 이상의 진단서를 첨부해야함.\r\n5. 휴학기간 만료 후 해당 학기 등록기간 내에 복학하지 않을 경우에는  퇴학처리 됨.");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("Grid00","129","210","575","70",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("19");
            obj.set_binddataset("absFileList_ds");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"32\"/><Column size=\"419\"/><Column size=\"80\"/></Columns><Rows><Row size=\"20\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"0\"/><Cell col=\"1\" text=\"fileName\"/><Cell col=\"2\" text=\"fileSize\"/></Band><Band id=\"body\"><Cell text=\"bind:chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:fileName\"/><Cell col=\"2\" text=\"bind:fileSize\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Radio("Radio00","112","185","707","23",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("20");
            obj.set_innerdataset("absenceCode_ds");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            obj.set_rowcount("1");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_ok","592","515","100","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("21");
            obj.set_text("확인");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_can","714","515","100","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("22");
            obj.set_text("취소");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","28","280","782","122",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("23");
            obj.set_text("\r\n\r\n본인은 보호자의 동의하에 위와 같이 휴학하고자 하오니 허가하여 주시기 바랍니다.");
            obj.set_border("1px solid #c1c1c1");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03","32","20","172","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("24");
            obj.set_text("휴학신청서");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","29","60","70","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("학 과");
            obj.set_background("#c1c1c1");
            obj.set_border("1px solid #c1c1c1");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00","289","60","70","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("학 번");
            obj.set_background("#c1c1c1");
            obj.set_border("1px solid #c1c1c1");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","550","60","70","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("생년월일");
            obj.set_background("#c1c1c1");
            obj.set_border("1px solid #c1c1c1");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_01","29","90","70","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("학 년");
            obj.set_background("#c1c1c1");
            obj.set_border("1px solid #c1c1c1");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_01","289","90","70","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("연락처");
            obj.set_background("#c1c1c1");
            obj.set_border("1px solid #c1c1c1");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00_00","29","180","70","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("14");
            obj.set_text("사 유");
            obj.set_background("#c1c1c1");
            obj.set_border("1px solid #c1c1c1");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00","29","150","70","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("13");
            obj.set_text("기 간");
            obj.set_background("#c1c1c1");
            obj.set_border("1px solid #c1c1c1");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","29","120","70","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_text("주 소");
            obj.set_background("#c1c1c1");
            obj.set_border("1px solid #c1c1c1");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","550","90","70","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_text("성 명");
            obj.set_background("#c1c1c1");
            obj.set_border("1px solid #c1c1c1");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_02","28","209","100","70",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("15");
            obj.set_text("첨부파일");
            obj.set_background("#c1c1c1");
            obj.set_border("1px solid #c1c1c1");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static04","98","149","710","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("25");
            obj.set_text("");
            obj.set_border("1px solid #c1c1c1");
            this.Div00.addChild(obj.name, obj);

            obj = new Calendar("cal_sDate","107","153","150","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("26");
            this.Div00.addChild(obj.name, obj);

            obj = new Calendar("cal_eDate","299","153","150","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("27");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static05","277","154","19","19",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("28");
            obj.set_text("~");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo00","98","60","190","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("29");
            obj.set_readonly("true");
            obj.set_innerdataset("deptCode");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            obj.set_text("Combo00");
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

            obj = new BindItem("item2","Div00.form.edt_title00_00","value","students_ds","birth");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Div00.form.edt_title01","value","students_ds","grade");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","Div00.form.edt_title00_01","value","students_ds","contact");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","Div00.form.edt_title00_00_00","value","students_ds","name");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","Div00.form.edt_title01_00","value","students_ds","adress");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("absence_pop.xfdl", function() {
        //1.Environment filesecurelevel property all로 변경하기
        this.parentSeq="";
        this.std_code="215051001"; // 로그인 정보
        this.nMaxFileSize = 2000000;  //각 파일 최대사이즈 (2 Mbyte)

        this.fileName = "";
        this.fileSize = "";

        //온로드시 학생 정보 받아오기
        this.absence_pop_onload = function(obj,e)
        {
        	this.transaction(
        		"selectOneStd.students",//id
        		"/students/selectOneStd.students",//url (절대경로)
        		"",//in_ds:U
        		"students_ds=out_ds",//()_out_ds
        		"sCode="+this.std_code,//argument
        		"fn_callback"
        		)
        };


        this.Div00_btn_fine_onclick = function(obj,e)
        {
        	this.FileDialog00.open("파일선택", FileDialog.MULTILOAD);
        };



        //파일선택창(FileDialog) 닫힐시
        //Web 은 e.reason 이 1(FileDialog.LOAD) 이나 3(FileDialog.MULTILOAD) 일경우에만 발생
        this.FileDialog00_onclose = function(obj,e)
        {
        	if(e.reason == 0 ) {  //파일선택 취소
        		return;
        	}else{
        		if(e.reason == 3) {    //FileDialog.MULTILOAD 옵션의 파일선택
        			this.addFileList(e.virtualfiles);

        		}
        	}
        };

        this.addFileList = function(filelist)
        {
            for (var i = 0, len = filelist.length, vFile; i < len; i++)
            {
                vFile = filelist[i];
        		var isExist = this.FileUpTransfer00.existFile(vFile);

        		//파일중복체크
        		if(isExist){
        			alert("이미추가된 파일이 있습니다.");
        			return;
        		}

        		//VirtualFile 이벤트 생성
                vFile.addEventHandler("onsuccess", this.Upload_VirtualFile_onsuccess, this);
                vFile.addEventHandler("onerror", this.Upload_VirtualFile_onerror , this);

                //File 사이즈 체크를 위해
        		vFile.open(null,VirtualFile.openRead);

            }
        }

        //업로드용 Virtual 파일 onsuccess 이벤트
        this.Upload_VirtualFile_onsuccess = function(obj, e)
        {
        	if (e.reason == 1)  //open() callback
        	{
        		//파일사이즈 체크
        		obj.getFileSize();
        	}
        	if (e.reason == 9) //getFileSize() callback
        	{
        		obj.close();

        		this.fileName = obj.filename;
        		this.fileSize = e.filesize;

        		if(this.fileSize > this.nMaxFileSize){
        			alert("첨부파일 최대용량은 2 MByte 입니다.");
        			return;
        		}

        		//FileUpTransfer 해당 파일추가
        		var nIdx = this.FileUpTransfer00.addFile(this.fileName,obj);

        		//화면 파일정보 셋팅
        		var nRow = this.absFileList_ds.insertRow(nIdx);
        		this.absFileList_ds.setColumn(nRow, "fileName", this.fileName);
        		this.absFileList_ds.setColumn(nRow, "fileSize", this.fileSize);
        	}
        }

        //업로드용 Virtual 파일 oneroor 이벤트
        this.Upload_VirtualFile_onerror = function(obj, e)
        {
        	var msg = ">>>>>>>>> VirtualFile event ERROR >>>>>>>>\n";
        	msg += "errortype : "+e.errortype+"\n";
        	msg += "errormsg : "+e.errormsg+"\n";
        	msg += "statuscode : "+e.statuscode;

        	alert(msg);
        }

        this.Div00_btn_del_onclick = function(obj,e)
        {
        	for(var i =0; i<this.absFileList_ds.getRowCount();i++){
        		if(this.absFileList_ds.getColumn(i,"chk") == 1){
        			//FileUpTransfer 해당 파일삭제
        			var nIdx = this.FileUpTransfer00.removeFileByIndex(i);
        			//정상삭제 시 해당 데이터 삭제
        			if(nIdx > -1) {
        				this.absFileList_ds.deleteRow(i);
        			}
        		}
        	}
        };



        //파일전송 성공시
        this.FileUpTransfer00_onsuccess = function(obj,e)
        {
        	var msg = ">>>>>>>>>>>>>>>>>>>>>>>>>>  SUCCESS >>>>>>>>>>>>>>>>>>>>>>>>>>\n";
        	msg += "code :"+e.code+"\n";
        	msg += "message :"+e.message+"\n";
        	msg += "url :"+e.url+"\n";
        	msg += "datasets[0].saveXML() :"+e.datasets[0].saveXML()+"\n";

        	alert(msg);

        	//파일정보 초기화
        	this.fn_FileClear();
        };

        //파일전송 중
        this.FileUpTransfer00_onprogress = function(obj,e)
        {
        	trace(e.loaded +" / "+e.total +" Byte Uploading...");
        };

        //파일전송 실패시
        this.FileUpTransfer00_onerror = function(obj,e)
        {
        	var msg = ">>>>>>>>>>>>>>>>>>>>>>>>>>  ERROR >>>>>>>>>>>>>>>>>>>>>>>>>>\n";
        	msg += "statuscode: "+e.statuscode+"\n";
        	msg += "requesturi: "+e.requesturi+"\n";
        	msg += "locationuri: "+e.locationuri+"\n" ;
        	msg += "errormsg: "+e.errormsg+"\n";
        	trace(msg)

        };

        //파일전송 버튼클릭

        this.Div00_btn_ok_onclick = function(obj,e)
        {
        	if(this.FileUpTransfer00.filelist.length == 0) {
        		alert("첨부한 파일이 없습니다.");
        		return;
        	}

        	var conValue = this.confirm("확인 버튼 시 내용을 수정할 수 없습니다. 제출하시겠습니까?");

        	if(conValue)
        	{

         		var nRow = this.absence_ds.addRow();
        		var sDate = this.Div00.form.cal_sDate.value;
        		var eDate = this.Div00.form.cal_eDate.value;
        		var code = this.Div00.form.Radio00.value;

        		alert(this.std_code)
        		this.absence_ds.setColumn(nRow,"std_code",this.std_code);
        		this.absence_ds.setColumn(nRow,"sDate",sDate);
        		this.absence_ds.setColumn(nRow,"eDate",eDate);
        		this.absence_ds.setColumn(nRow,"code",code);




        		//파일 전송이 성공 하면 트랜잭션 전송

        		this.transaction(
        			"insertAbsence",//id
        			"/absence/insert.absence",//url (절대경로)
        			"in_ds=absence_ds:U",//in_ds:U
        			"",//()_out_ds
        			"",//argument
        			"fn_callback_insertAbs"
        		)
         	}
        	else
        	{
        		return;
        	}
        };


        //내용입력 성공하면 파일전송
        this.fn_callback_insertAbs = function ()
        {

        	trace(this.parentSeq)
        	this.FileUpTransfer00.setPostData("parentSeq",this.parentSeq);
        	//파일전송
        	this.FileUpTransfer00.upload("/absence/fileUp.absence"); //file up url

        	this.close();
        }

        //파일정보 초기화
        this.fn_FileClear = function (){
        	//FileUpTransfer 파일 모두삭제
        	this.FileUpTransfer00.clearFileList();
        	//파일정보 모두삭제
        	this.absFileList_ds.clearData();
        }



        this.Div00_btn_can_onclick = function(obj,e)
        {
        	this.close();
        };

        this.fn_callback = function(id,ErrorCode,ErrorMsg){
        	trace(id);
        	trace(ErrorCode);
        	trace(ErrorMsg);
        	alert("ErrorCode : "+ErrorCode);
        };

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

        		this.absFileList_ds.set_enableevent(false);
        		for(var i=0; i< this.absFileList_ds.getRowCount(); i++)
        		{
        			this.absFileList_ds.setColumn(i, "chk",sheadValue);
        		}
        		this.absFileList_ds.set_enableevent(true);
            }

        }





        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.absence_pop_onload,this);
            this.Div00.form.btn_fine.addEventHandler("onclick",this.Div00_btn_fine_onclick,this);
            this.Div00.form.btn_del.addEventHandler("onclick",this.Div00_btn_del_onclick,this);
            this.Div00.form.Grid00.addEventHandler("onheadclick",this.Div00_Grid00_onheadclick,this);
            this.Div00.form.btn_ok.addEventHandler("onclick",this.Div00_btn_ok_onclick,this);
            this.Div00.form.cal_sDate.addEventHandler("onchanged",this.Div00_Calendar00_onchanged,this);
            this.Div00.form.cal_eDate.addEventHandler("onchanged",this.Div00_Calendar00_onchanged,this);
            this.FileUpTransfer00.addEventHandler("onerror",this.FileUpTransfer00_onerror,this);
            this.FileUpTransfer00.addEventHandler("onprogress",this.FileUpTransfer00_onprogress,this);
            this.FileUpTransfer00.addEventHandler("onsuccess",this.FileUpTransfer00_onsuccess,this);
            this.FileDialog00.addEventHandler("onclose",this.FileDialog00_onclose,this);
        };

        this.loadIncludeScript("absence_pop.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
