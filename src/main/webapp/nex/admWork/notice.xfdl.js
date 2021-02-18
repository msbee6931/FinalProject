(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("notice");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1080,520);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_NoticeFiles", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"n_seq\" type=\"INT\" size=\"256\"/><Column id=\"parentSeq\" type=\"INT\" size=\"256\"/><Column id=\"fileName\" type=\"STRING\" size=\"256\"/><Column id=\"savedFileName\" type=\"STRING\" size=\"256\"/><Column id=\"fileSize\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Notice", this);
            obj._setContents("<ColumnInfo><Column id=\"n_seq\" type=\"STRING\" size=\"256\"/><Column id=\"title\" type=\"STRING\" size=\"256\"/><Column id=\"writedate\" type=\"DATE\" size=\"256\"/><Column id=\"contents\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_ScolarFiles", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"n_seq\" type=\"INT\" size=\"256\"/><Column id=\"parentSeq\" type=\"INT\" size=\"256\"/><Column id=\"fileName\" type=\"STRING\" size=\"256\"/><Column id=\"savedFileName\" type=\"STRING\" size=\"256\"/><Column id=\"fileSize\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("FileUpTransfer00", this);
            this.addChild(obj.name, obj);


            obj = new FileDialog("FileDialog00", this);
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("FileUpTransfer01", this);
            this.addChild(obj.name, obj);


            obj = new FileDialog("FileDialog01", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","0","0","29","520",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_visible("false");
            obj.set_background("RGBA(236,135,135,0.71)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","1051","0","29","520",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_visible("false");
            obj.set_background("RGBA(236,135,135,0.71)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","80","0","800","10",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_visible("false");
            obj.set_background("RGBA(236,135,135,0.71)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","100","490","800","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_visible("false");
            obj.set_background("RGBA(236,135,135,0.71)");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","30","9","200","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("공지사항 입력");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab00","30","40","1022","452",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_tabindex("0");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Tab00);
            obj.set_text("일반공지");
            this.Tab00.addChild(obj.name, obj);

            obj = new Static("Static00","215","30","100","50",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_text("제목");
            obj.set_font("18px/normal \"Arial\",\"-윤고딕320\"");
            obj.set_textAlign("center");
            obj.set_background("lightgray");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_title","315","30","200","50",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("1");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static00_00","215","80","100","50",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_text("내용");
            obj.set_font("18px/normal \"Arial\",\"-윤고딕320\"");
            obj.set_textAlign("center");
            obj.set_background("lightgray");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new TextArea("text_contents","315","80","500","200",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("3");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static00_01","515","30","100","50",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_text("작성일시");
            obj.set_font("18px/normal \"Arial\",\"-윤고딕320\"");
            obj.set_textAlign("center");
            obj.set_background("lightgray");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Calendar("cal_writedate","615","30","200","50",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("5");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_cancel","755","380","60","35",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_text("취소");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_save","670","380","60","35",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_text("저장");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","215","280","100","50",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("8");
            obj.set_text("첨부파일");
            obj.set_font("18px/normal \"Arial\",\"-윤고딕320\"");
            obj.set_textAlign("center");
            obj.set_background("lightgray");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Grid("Grid00","315","280","500","100",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("9");
            obj.set_binddataset("ds_NoticeFiles");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"50\"/><Column size=\"30\"/><Column size=\"120\"/><Column size=\"30\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"번호\"/><Cell col=\"2\"/><Cell col=\"3\" text=\"파일이름\"/><Cell col=\"4\"/><Cell col=\"5\" text=\"파일크기\"/></Band><Band id=\"body\"><Cell text=\"bind:chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:n_seq\"/><Cell col=\"2\" text=\"bind:parentSeq\"/><Cell col=\"3\" text=\"bind:fileName\"/><Cell col=\"4\" text=\"bind:savedFileName\"/><Cell col=\"5\" text=\"bind:fileSize\"/></Band></Format></Formats>");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_insert","815","280","60","35",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("10");
            obj.set_text("파일찾기");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_delete","815","314","60","35",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("11");
            obj.set_text("파일삭제");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Tab00);
            obj.set_text("장학공지");
            this.Tab00.addChild(obj.name, obj);

            obj = new Static("Static00","215","30","100","50",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_text("제목");
            obj.set_font("18px/normal \"Arial\",\"-윤고딕320\"");
            obj.set_textAlign("center");
            obj.set_background("lightgray");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Edit("edt_title","315","30","200","50",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("1");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static00_00","215","80","100","50",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("2");
            obj.set_text("내용");
            obj.set_font("18px/normal \"Arial\",\"-윤고딕320\"");
            obj.set_textAlign("center");
            obj.set_background("lightgray");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new TextArea("text_contents","315","80","500","200",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("3");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static00_01","515","30","100","50",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("4");
            obj.set_text("작성일시");
            obj.set_font("18px/normal \"Arial\",\"-윤고딕320\"");
            obj.set_textAlign("center");
            obj.set_background("lightgray");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Calendar("cal_writedate","615","30","200","50",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("5");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_cancel","755","380","60","35",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("6");
            obj.set_text("취소");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_save","670","380","60","35",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("7");
            obj.set_text("입력");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","215","280","100","50",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("8");
            obj.set_text("첨부파일");
            obj.set_font("18px/normal \"Arial\",\"-윤고딕320\"");
            obj.set_textAlign("center");
            obj.set_background("lightgray");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Grid("Grid00","315","280","500","100",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("9");
            obj.set_binddataset("ds_ScolarFiles");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"chk\"/><Cell col=\"1\" text=\"n_seq\"/><Cell col=\"2\" text=\"parentSeq\"/><Cell col=\"3\" text=\"fileName\"/><Cell col=\"4\" text=\"savedFileName\"/><Cell col=\"5\" text=\"fileSize\"/></Band><Band id=\"body\"><Cell text=\"bind:chk\"/><Cell col=\"1\" text=\"bind:n_seq\"/><Cell col=\"2\" text=\"bind:parentSeq\"/><Cell col=\"3\" text=\"bind:fileName\"/><Cell col=\"4\" text=\"bind:savedFileName\"/><Cell col=\"5\" text=\"bind:fileSize\"/></Band></Format></Formats>");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_insert","815","280","60","35",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("10");
            obj.set_text("파일찾기");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_delete","815","314","60","35",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("11");
            obj.set_text("파일삭제");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.Tab00);
            obj.set_text("학사공지");
            this.Tab00.addChild(obj.name, obj);

            obj = new Static("Static00","215","30","100","50",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("0");
            obj.set_text("제목");
            obj.set_font("18px/normal \"Arial\",\"-윤고딕320\"");
            obj.set_textAlign("center");
            obj.set_background("lightgray");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Edit("edt_title","315","30","200","50",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("1");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Static("Static00_00","215","80","100","50",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("2");
            obj.set_text("내용");
            obj.set_font("18px/normal \"Arial\",\"-윤고딕320\"");
            obj.set_textAlign("center");
            obj.set_background("lightgray");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new TextArea("text_contents","315","80","500","200",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("3");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Static("Static00_01","515","30","100","50",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("4");
            obj.set_text("작성일시");
            obj.set_font("18px/normal \"Arial\",\"-윤고딕320\"");
            obj.set_textAlign("center");
            obj.set_background("lightgray");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Calendar("cal_writedate","615","30","200","50",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("5");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Button("btn_cancel","755","380","60","35",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("6");
            obj.set_text("취소");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Button("btn_save","670","380","60","35",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("7");
            obj.set_text("저장");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","215","280","100","50",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("8");
            obj.set_text("첨부파일");
            obj.set_font("18px/normal \"Arial\",\"-윤고딕320\"");
            obj.set_textAlign("center");
            obj.set_background("lightgray");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Grid("Grid00","315","280","500","100",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("9");
            obj.set_binddataset("ds_NoticeFiles");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"50\"/><Column size=\"30\"/><Column size=\"120\"/><Column size=\"30\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"번호\"/><Cell col=\"2\"/><Cell col=\"3\" text=\"파일이름\"/><Cell col=\"4\"/><Cell col=\"5\" text=\"파일크기\"/></Band><Band id=\"body\"><Cell text=\"bind:chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:n_seq\"/><Cell col=\"2\" text=\"bind:parentSeq\"/><Cell col=\"3\" text=\"bind:fileName\"/><Cell col=\"4\" text=\"bind:savedFileName\"/><Cell col=\"5\" text=\"bind:fileSize\"/></Band></Format></Formats>");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Button("btn_insert","815","280","60","35",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("10");
            obj.set_text("파일찾기");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Button("btn_delete","815","314","60","35",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("11");
            obj.set_text("파일삭제");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage4",this.Tab00);
            obj.set_text("취업공지");
            this.Tab00.addChild(obj.name, obj);

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
        this.registerScript("notice.xfdl", function() {
        //1.Environment filesecurelevel property all로 변경하기
        this.reqSchSeq="";

        this.nMaxFileSize = 2000000;  //각 파일 최대사이즈 (2 Mbyte)

        this.fileName = "";
        this.fileSize = "";



        this.Tab00_Tabpage1_btn_cancel_onclick = function(obj,e)
        {
        	this.close();
        };
        this.fn_callback = function(id,ErrorCode,ErrorMsg){
        	trace(id);
        	trace(ErrorCode);
        	trace(ErrorMsg);
        	alert("ErrorCode : "+ErrorCode);
        };

        this.notice_onload = function(obj,e)
        {
        	//파일업로드시 파일저장 폴더경로 PostData 셋팅
        	this.FileUpTransfer00.setPostData("filepath","nomalNotice");
        };


        this.Tab00_Tabpage1_btn_insert_onclick = function(obj,e)
        {
        	this.FileDialog00.open( "파일선택", FileDialog.MULTILOAD );
        };

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
        this.addScolarFileList = function(filelist)
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
                vFile.addEventHandler("onsuccess", this.Upload_ScolarFile_onsuccess, this);
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
        		var nRow = this.ds_NoticeFiles.insertRow(nIdx);
        		this.ds_NoticeFiles.setColumn(nRow, "fileName", this.fileName);
        		this.ds_NoticeFiles.setColumn(nRow, "fileSize", this.fileSize);

        	}
        }
        this.Upload_ScolarFile_onsuccess = function(obj, e)
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
        		var nRow = this.ds_ScolarFiles.insertRow(nIdx);
        		this.ds_ScolarFiles.setColumn(nRow, "fileName", this.fileName);
        		this.ds_ScolarFiles.setColumn(nRow, "fileSize", this.fileSize);

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

        this.Tab00_Tabpage1_btn_delete_onclick = function(obj,e)
        {
        	for(let i =0; i<this.ds_NoticeFiles.getRowCount();i++){
        		if(this.ds_NoticeFiles.getColumn(i,"chk") == 1){
        		//FileUpTransfer 해당 파일삭제
        			var nIdx = this.FileUpTransfer00.removeFileByIndex(i);
        			//정상삭제 시 해당 데이터 삭제
        			if(nIdx > -1) {
        				this.ds_NoticeFiles.deleteRow(i);
        			}
        		}
        	}
        };

        this.FileUpTransfer00_onerror = function(obj,e)
        {
        	var msg = ">>>>>>>>>>>>>>>>>>>>>>>>>>  ERROR >>>>>>>>>>>>>>>>>>>>>>>>>>\n";
        	msg += "statuscode: "+e.statuscode+"\n";
        	msg += "requesturi: "+e.requesturi+"\n";
        	msg += "locationuri: "+e.locationuri+"\n" ;
        	msg += "errormsg: "+e.errormsg+"\n";
        	trace(msg)
        };

        this.FileUpTransfer00_onprogress = function(obj,e)
        {
        	trace(e.loaded +" / "+e.total +" Byte Uploading...");
        };

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

        this.Tab00_Tabpage1_btn_save_onclick = function(obj,e)
        {

        	var nRow = this.ds_Notice.addRow();
        	var title = this.Tab00.Tabpage1.form.edt_title.value;
        	var writedate = this.Tab00.Tabpage1.form.cal_writedate.value;
        	var contents = this.Tab00.Tabpage1.form.text_contents.value;
        	var view_count = 0;
        	if(title == null){
        		alert("제목을 입력해주세요")
        		return;
        	}else if(contents == null){
        		alert("내용을 입력해주세요")
        		return;
        	}else if(writedate == null || writedate == 'undefined'){
        		alert("작성일시 입력해주세요");
        		return;
        	}

        	//파일전송
        	if(this.FileUpTransfer00.filelist.length > 0){
        	this.FileUpTransfer00.upload("/uploadNoticeFile.notice"); //file up url

        	}
        	trace(title);
        	trace(writedate);
        	trace(contents);
        	this.ds_Notice.setColumn(nRow,"title",title);
        	this.ds_Notice.setColumn(nRow,"writedate",writedate);
        	this.ds_Notice.setColumn(nRow,"contents",contents);

        	this.transaction(
        		"nomalNotice",//id
        		"/uploadNomalNotice.notice",//url (절대경로)
        		"in_ds=ds_Notice:U",//in_ds:U
        		"",//()_out_ds
        		"view_count='"+view_count+"'",//argument
        		"fn_callback"
        	)
        	this.close();
        };
        this.fn_FileClear = function (){
        	//FileUpTransfer 파일 모두삭제
        	this.FileUpTransfer00.clearFileList();
        	//파일정보 모두삭제
        	this.schFileList_ds.clearData();
        }
        this.fn_callback = function(id,ErrorCode,ErrorMsg){
        	trace(id);
        	trace(ErrorCode);
        	trace(ErrorMsg);
        };

        this.Tab00_Tabpage1_Grid00_onheadclick = function(obj,e)
        {
        	let flag = obj.getCellProperty("Head",0,"text");
        	let check = flag==0?1:0;
        	if(e.cell==0){
        		obj.setCellProperty("Head",0,"text",check);
        		for(let i = 0; i<this.ds_NoticeFiles.rowcount;i++){
        			this.ds_NoticeFiles.setColumn(i,"chk",check);
        		}
        	}

        	var objDs = this.objects[obj.binddataset];
        	for(var i = 1; i<obj.getCellCount("head"); i++)
        	{
        		var sHeadText = obj.getCellText(-1,i);
        		var nLen = sHeadText.length - 1;
        		if(i== e.cell)
        		{
        		  var sColId = (obj.getCellProperty("body",e.col,"text")).toString().split(":");
        		  if(sHeadText.substr(nLen) == "▲")
        		  {
        			obj.setCellProperty("head",i,"text",sHeadText.substr(0,nLen)+ "▼");
        			objDs.set_keystring("S:-"+sColId[1]);
        		  }
        		  else if (sHeadText.substr(nLen) == "▼")
        		  {
        			obj.setCellProperty("head",i,"text",sHeadText.substr(0,nLen)+"▲");
        			objDs.set_keystring("S:+"+sColId[1]);
        		  }
        		  else
        		  {
        		   obj.setCellProperty("head",i,"text", sHeadText+"▲");
        		   objDs.set_keystring("S:+"+sColId[1]);
        		  }
        		}
        		else
        		{
        			if(sHeadText.substr(nLen) == "▲" || sHeadText.substr(nLen) == "▼")
        			{
        				obj.setCellProperty("head",i,"text",sHeadText.substr(0,nLen));
        			}
        		}

        	}

        }



        this.Tab00_Tabpage2_btn_insert_onclick = function(obj,e)
        {
        	this.FileDialog01.open( "파일선택", FileDialog.MULTILOAD );
        };

        this.Tab00_Tabpage2_btn_delete_onclick = function(obj,e)
        {
        	for(let i =0; i<this.ds_ScolarFiles.getRowCount();i++){
        		if(this.ds_ScolarFiles.getColumn(i,"chk") == 1){
        		//FileUpTransfer 해당 파일삭제
        			var nIdx = this.FileUpTransfer00.removeFileByIndex(i);
        			//정상삭제 시 해당 데이터 삭제
        			if(nIdx > -1) {
        				this.ds_ScolarFiles.deleteRow(i);
        			}
        		}
        	}
        };

        this.Tab00_Tabpage2_btn_cancel_onclick = function(obj,e)
        {
        	this.close();
        };

        this.Tab00_Tabpage2_btn_save_onclick = function(obj,e)
        {
        	var nRow = this.ds_Notice.addRow();
        	var title = this.Tab00.Tabpage2.form.edt_title.value;
        	var writedate = this.Tab00.Tabpage2.form.cal_writedate.value;
        	var contents = this.Tab00.Tabpage2.form.text_contents.value;
        	if(title == null){
        		alert("제목을 입력해주세요")
        		return;
        	}else if(contents == null){
        		alert("내용을 입력해주세요")
        		return;
        	}else if(writedate == null || writedate == 'undefined'){
        		alert("작성일시 입력해주세요");
        		return;
        	}

        	//파일전송
        	if(this.FileUpTransfer00.filelist.length > 0){
        	this.FileUpTransfer00.upload("/uploadNoticeFile.notice"); //file up url

        	}
        	trace(title);
        	trace(writedate);
        	trace(contents);
        	this.ds_Notice.setColumn(nRow,"title",title);
        	this.ds_Notice.setColumn(nRow,"writedate",writedate);
        	this.ds_Notice.setColumn(nRow,"contents",contents);

        	this.transaction(
        		"nomalNotice",//id
        		"/uploadScolarNotice.notice",//url (절대경로)
        		"in_ds=ds_Notice:U",//in_ds:U
        		"",//()_out_ds
        		"",//argument
        		"fn_callback"
        	)
        	this.close();
        };

        this.FileDialog01_onclose = function(obj,e)
        {
        	if(e.reason == 0 ) {  //파일선택 취소
        		return;
        	}else{
        		if(e.reason == 3) {    //FileDialog.MULTILOAD 옵션의 파일선택
        			this.addScolarFileList(e.virtualfiles);

        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.notice_onload,this);
            this.Tab00.Tabpage1.form.btn_cancel.addEventHandler("onclick",this.Tab00_Tabpage1_btn_cancel_onclick,this);
            this.Tab00.Tabpage1.form.btn_save.addEventHandler("onclick",this.Tab00_Tabpage1_btn_save_onclick,this);
            this.Tab00.Tabpage1.form.Grid00.addEventHandler("onheadclick",this.Tab00_Tabpage1_Grid00_onheadclick,this);
            this.Tab00.Tabpage1.form.btn_insert.addEventHandler("onclick",this.Tab00_Tabpage1_btn_insert_onclick,this);
            this.Tab00.Tabpage1.form.btn_delete.addEventHandler("onclick",this.Tab00_Tabpage1_btn_delete_onclick,this);
            this.Tab00.Tabpage2.form.btn_cancel.addEventHandler("onclick",this.Tab00_Tabpage2_btn_cancel_onclick,this);
            this.Tab00.Tabpage2.form.btn_save.addEventHandler("onclick",this.Tab00_Tabpage2_btn_save_onclick,this);
            this.Tab00.Tabpage2.form.btn_insert.addEventHandler("onclick",this.Tab00_Tabpage2_btn_insert_onclick,this);
            this.Tab00.Tabpage2.form.btn_delete.addEventHandler("onclick",this.Tab00_Tabpage2_btn_delete_onclick,this);
            this.Tab00.Tabpage3.form.btn_cancel.addEventHandler("onclick",this.Tab00_Tabpage1_btn_cancel_onclick,this);
            this.Tab00.Tabpage3.form.btn_save.addEventHandler("onclick",this.Tab00_Tabpage1_btn_save_onclick,this);
            this.Tab00.Tabpage3.form.Grid00.addEventHandler("onheadclick",this.Tab00_Tabpage1_Grid00_onheadclick,this);
            this.Tab00.Tabpage3.form.btn_insert.addEventHandler("onclick",this.Tab00_Tabpage1_btn_insert_onclick,this);
            this.Tab00.Tabpage3.form.btn_delete.addEventHandler("onclick",this.Tab00_Tabpage1_btn_delete_onclick,this);
            this.FileUpTransfer00.addEventHandler("onerror",this.FileUpTransfer00_onerror,this);
            this.FileUpTransfer00.addEventHandler("onprogress",this.FileUpTransfer00_onprogress,this);
            this.FileUpTransfer00.addEventHandler("onsuccess",this.FileUpTransfer00_onsuccess,this);
            this.FileDialog00.addEventHandler("onclose",this.FileDialog00_onclose,this);
            this.FileDialog01.addEventHandler("onclose",this.FileDialog01_onclose,this);
        };

        this.loadIncludeScript("notice.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
