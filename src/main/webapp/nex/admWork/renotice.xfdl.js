(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("renotice");
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
            obj._setContents("<ColumnInfo><Column id=\"n_seq\" type=\"STRING\" size=\"256\"/><Column id=\"title\" type=\"STRING\" size=\"256\"/><Column id=\"writedate\" type=\"DATE\" size=\"256\"/><Column id=\"contents\" type=\"STRING\" size=\"256\"/><Column id=\"deptcode\" type=\"STRING\" size=\"256\"/><Column id=\"view_count\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_deptcode", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">A</Col><Col id=\"name\">일반</Col></Row><Row><Col id=\"code\">B</Col><Col id=\"name\">장학</Col></Row><Row><Col id=\"code\">C</Col><Col id=\"name\">학사</Col></Row><Row><Col id=\"code\">D</Col><Col id=\"name\">취업</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new FileDialog("FileDialog00", this);
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("FileUpTransfer00", this);
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

            obj = new Combo("com_list","550","101","200","50",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_innerdataset("ds_deptcode");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","450","101","100","50",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("분류");
            obj.set_font("18px/normal \"Arial\",\"-윤고딕320\"");
            obj.set_background("lightgray");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02","150","101","100","50",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("제목");
            obj.set_font("18px/normal \"Arial\",\"-윤고딕320\"");
            obj.set_textAlign("center");
            obj.set_background("lightgray");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_title","250","101","200","50",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","150","151","100","50",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("내용");
            obj.set_font("18px/normal \"Arial\",\"-윤고딕320\"");
            obj.set_textAlign("center");
            obj.set_background("lightgray");
            this.addChild(obj.name, obj);

            obj = new TextArea("text_contents","250","151","500","200",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel","690","451","60","35",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("취소");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save","605","451","60","35",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","150","351","100","50",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("첨부파일");
            obj.set_font("18px/normal \"Arial\",\"-윤고딕320\"");
            obj.set_textAlign("center");
            obj.set_background("lightgray");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","250","351","500","100",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_binddataset("ds_NoticeFiles");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"50\"/><Column size=\"30\"/><Column size=\"120\"/><Column size=\"30\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"번호\"/><Cell col=\"2\"/><Cell col=\"3\" text=\"파일이름\"/><Cell col=\"4\"/><Cell col=\"5\" text=\"파일크기\"/></Band><Band id=\"body\"><Cell text=\"bind:chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:n_seq\"/><Cell col=\"2\" text=\"bind:parentSeq\"/><Cell col=\"3\" text=\"bind:fileName\"/><Cell col=\"4\" text=\"bind:savedFileName\"/><Cell col=\"5\" text=\"bind:fileSize\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_insert","750","351","60","35",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("파일찾기");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delete","750","385","60","35",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("파일삭제");
            this.addChild(obj.name, obj);

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
        this.registerScript("renotice.xfdl", function() {
        this.nMaxFileSize = 2000000;  //각 파일 최대사이즈 (2 Mbyte)

        this.fileName = "";
        this.fileSize = "";

        this.btn_cancel_onclick = function(obj,e)
        {
        	this.close();
        };
        this.fn_callback = function(id,ErrorCode,ErrorMsg){
        	trace(id);
        	trace(ErrorCode);
        	trace(ErrorMsg);
        	alert("ErrorCode : "+ErrorCode);
        };
        this.renotice_onload = function(obj,e)
        {
        	//파일업로드시 파일저장 폴더경로 PostData 셋팅
        	this.FileUpTransfer00.setPostData("filepath","nomalNotice");
        };

        this.btn_insert_onclick = function(obj,e)
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
        this.Upload_VirtualFile_onerror = function(obj, e)
        {
        	var msg = ">>>>>>>>> VirtualFile event ERROR >>>>>>>>\n";
        	msg += "errortype : "+e.errortype+"\n";
        	msg += "errormsg : "+e.errormsg+"\n";
        	msg += "statuscode : "+e.statuscode;

        	alert(msg);
        }

        this.btn_delete_onclick = function(obj,e)
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

        this.btn_save_onclick = function(obj,e)
        {
        	var nRow = this.ds_Notice.addRow();
<<<<<<< HEAD:src/main/webapp/nex/admWork/scolarNotice_Info.xfdl.js
        	trace(title);
        	trace(writedate);
        	this.Tab00.Tabpage1.form.cal_writedate.
        	trace(contents);
=======
        	var title = this.edt_title.value;
        	var contents = this.text_contents.value;
        	var list = this.com_list.value;
        	var dept = this.com_list.text;

        	if(title == null){
        		alert("제목을 입력해주세요")
        		return;
        	}else if(contents == null){
        		alert("내용을 입력해주세요")
        		return;
        	}else if(list == null || list == 'undefined'){
        		alert("학과구분 입력해주세요");
        		return;
        	}
>>>>>>> 71d706ee529c657b1053be2fa03cb7259ac57a05:src/main/webapp/nex/admWork/renotice.xfdl.js

        	//파일전송
        	if(this.FileUpTransfer00.filelist.length > 0){
        	this.FileUpTransfer00.upload("/uploadNoticeFile.notice"); //file up url
        	}
        	if(list == 'A'){
        	trace(dept);
        	this.ds_Notice.setColumn(nRow,"deptcode",list);
        	}else if(list == 'B'){
        	trace(dept);
        	this.ds_Notice.setColumn(nRow,"deptcode",list);
        	}else if(list == 'C'){
        	this.ds_Notice.setColumn(nRow,"deptcode",list);
        	}else if(list == 'D'){
        	this.ds_Notice.setColumn(nRow,"deptcode",list);
        	}
        	trace(title);
        	trace(contents);
        	this.ds_Notice.setColumn(nRow,"title",title);
        	this.ds_Notice.setColumn(nRow,"contents",contents);
        	this.ds_Notice.setColumn(nRow,"view_count",0);

        	this.transaction(
        		"nomalNotice",//id
        		"/uploadNomalNotice.notice",//url (절대경로)
        		"in_ds=ds_Notice:U",//in_ds:U
        		"",//()_out_ds
        		"",//argument
        		"fn_callback"
        	)
        	//this.FileUpTransfer00.upload("/uploadNoticeFile.notice");
        	this.close();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.renotice_onload,this);
            this.btn_cancel.addEventHandler("onclick",this.btn_cancel_onclick,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.Grid00.addEventHandler("onheadclick",this.Tab00_Tabpage1_Grid00_onheadclick,this);
            this.btn_insert.addEventHandler("onclick",this.btn_insert_onclick,this);
            this.btn_delete.addEventHandler("onclick",this.btn_delete_onclick,this);
            this.FileDialog00.addEventHandler("onclose",this.FileDialog00_onclose,this);
            this.FileUpTransfer00.addEventHandler("onerror",this.FileUpTransfer00_onerror,this);
            this.FileUpTransfer00.addEventHandler("onprogress",this.FileUpTransfer00_onprogress,this);
            this.FileUpTransfer00.addEventHandler("onsuccess",this.FileUpTransfer00_onsuccess,this);
        };

        this.loadIncludeScript("renotice.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
