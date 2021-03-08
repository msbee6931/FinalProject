(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("nomalNotice_Info");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(900,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_Notice", this);
            obj._setContents("<ColumnInfo><Column id=\"n_seq\" type=\"STRING\" size=\"256\"/><Column id=\"title\" type=\"STRING\" size=\"256\"/><Column id=\"writedate\" type=\"DATE\" size=\"256\"/><Column id=\"contents\" type=\"STRING\" size=\"256\"/><Column id=\"deptcode\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_NoticeFiles", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"n_seq\" type=\"INT\" size=\"256\"/><Column id=\"parentSeq\" type=\"INT\" size=\"256\"/><Column id=\"fileName\" type=\"STRING\" size=\"256\"/><Column id=\"savedFileName\" type=\"STRING\" size=\"256\"/><Column id=\"fileSize\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_deptcode", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">A</Col><Col id=\"name\">일반</Col></Row><Row><Col id=\"code\">B</Col><Col id=\"name\">장학</Col></Row><Row><Col id=\"code\">C</Col><Col id=\"name\">학사</Col></Row><Row><Col id=\"code\">D</Col><Col id=\"name\">취업</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new FileDialog("FileDialog00", this);
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("FileUpTransfer00", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","869","43","30","520",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_visible("false");
            obj.set_background("RGBA(236,135,135,0.71)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","40","30","520",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_visible("false");
            obj.set_background("RGBA(236,135,135,0.71)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","159","583","600","20",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_visible("false");
            obj.set_background("RGBA(236,135,135,0.71)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00","150","0","600","20",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_visible("false");
            obj.set_background("RGBA(236,135,135,0.71)");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab00","30","40","840","500",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_tabindex("0");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Tab00);
            obj.set_text("공지사항");
            this.Tab00.addChild(obj.name, obj);

            obj = new Static("Static00","139","33","100","50",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_text("제목");
            obj.set_font("18px/normal \"Arial\",\"-윤고딕320\"");
            obj.set_textAlign("center");
            obj.set_background("lightgray");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_title","239","33","200","50",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("1");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static00_00","139","83","100","50",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_text("내용");
            obj.set_font("18px/normal \"Arial\",\"-윤고딕320\"");
            obj.set_textAlign("center");
            obj.set_background("lightgray");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new TextArea("text_contents","239","83","500","200",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("3");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_cancel","679","383","60","35",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_text("취소");
            obj.set_cssclass("btn_default");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_save","594","383","60","35",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_text("저장");
            obj.set_cssclass("btn_default");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","139","283","100","50",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_text("첨부파일");
            obj.set_font("18px/normal \"Arial\",\"-윤고딕320\"");
            obj.set_textAlign("center");
            obj.set_background("lightgray");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Grid("Grid00","239","283","500","100",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_binddataset("ds_NoticeFiles");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"파일번호\"/><Cell col=\"1\" text=\"파일이름\"/><Cell col=\"2\" text=\"파일사이즈\"/></Band><Band id=\"body\"><Cell text=\"bind:parentSeq\"/><Cell col=\"1\" text=\"bind:fileName\"/><Cell col=\"2\" text=\"bind:fileSize\"/></Band></Format></Formats>");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static02","439","33","100","50",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("8");
            obj.set_text("분류");
            obj.set_font("18px/normal \"Arial\",\"-윤고딕320\"");
            obj.set_background("lightgray");
            obj.set_textAlign("center");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("com_list","539","34","200","50",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("9");
            obj.set_innerdataset("ds_deptcode");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_del","679","-1","60","35",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("10");
            obj.set_text("삭제");
            obj.set_cssclass("btn_default");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",900,600,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Tab00.Tabpage1.form.edt_title","value","ds_Notice","title");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Tab00.Tabpage1.form.text_contents","value","ds_Notice","contents");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Tab00.Tabpage1.form.com_list","value","ds_Notice","deptcode");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("nomalNotice_Info.xfdl", function() {
        //1.Environment filesecurelevel property all로 변경하기

        this.nMaxFileSize = 2000000;  //각 파일 최대사이즈 (2 Mbyte)

        this.fileName = "";
        this.fileSize = "";
        this.n_seq = "";
        var check = "";

        this.fn_callback = function(id,ErrorCode,ErrorMsg){

        	trace(this.ds_NoticeFiles.getCount());
        	if(this.ds_NoticeFiles.getCount()>0){
        		check == 1;
        		trace(check);
        	}

        };


        this.nomalNotice_Info_onload = function(obj,e)
        {
        	this.n_seq = this.parent.n_seq;

        	trace(this.n_seq)

        	this.transaction(
        				"selectNomalNotice_Info" //1. strSvcID
        				,"/selectNomalNotice_Info.notice" //2. strURL
        				,"" //3.strInDatasets - I,U,D Sds=Fds:U 변경된값만보내겟다, :A, :N
        				,"ds_Notice=out_ds ds_NoticeFiles=out_nds" //4.strOutDatasets -select Fds=Sds
        				,"n_seq='"+this.n_seq+"'" //5.strArgument text값
        				,"fn_callback" //6.strCallbackFunc
        			);
        		this.FileUpTransfer00.setPostData("filepath","nomalNoticeUpdate");



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
        		if(e.reason == 3) { //FileDialog.MULTILOAD 옵션의 파일선택
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
        		for(var i = 0, len = this.ds_NoticeFiles.getRowCount(), sFile; i<len; i++)
        		{
        			sFile = this.ds_NoticeFiles.getColumn(i,"fileName");
        			zFile = filelist[sFile];
        			var isExist2 = this.FileUpTransfer00.existFile(zFile);
        			trace(sFile);
        			trace(isExist2);

        		}
        		//파일중복체크
        		if(isExist || isExist2){
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

        this.Tab00_Tabpage1_btn_cancel_onclick = function(obj,e)
        {
        	this.close();
        };
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
        		this.n_seq = this.parent.n_seq;

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
        	trace(this.ds_NoticeFiles.getRowCount());
        	for(let i =0; i<this.ds_NoticeFiles.getRowCount();i++){
        		if(this.ds_NoticeFiles.getColumn(i,"chk") == 1){
        			var chk = this.ds_NoticeFiles.getColumn(i,"chk");
        			trace(chk);
        			var list = chk[i];
        			this.ds_NoticeFiles.deleteRow(i);
        			this.ds_NoticeFiles.deleteRow(chk);
        			this.ds_NoticeFiles.deleteMultiRows(list);
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

        	this.alert("입력성공");

        	//파일정보 초기화
        };


        this.fn_FileClear = function (){
        	//FileUpTransfer 파일 모두삭제
        	this.FileUpTransfer00.clearFileList();
        	//파일정보 모두삭제
        	this.ds_NoticeFiles.clearData();
        }



        this.Tab00_Tabpage1_btn_save_onclick = function(obj,e)
        {
        	var title = this.Tab00.Tabpage1.form.edt_title.value;
        	var contents = this.Tab00.Tabpage1.form.text_contents.value;

        	var nRow = this.ds_Notice.addRow();
        	trace(title);
        	trace(contents);

        	var list = this.Tab00.Tabpage1.form.com_list.value;
        	var dept = this.Tab00.Tabpage1.form.com_list.text;
        	var nRow = this.ds_Notice.addRow();




        	if(list == 'A'){
        	this.ds_Notice.setColumn(nRow,"deptcode",list);
        	}else if(list == 'B'){
        	trace(dept);
        	this.ds_Notice.setColumn(nRow,"deptcode",list);
        	}else if(list == 'C'){
        	this.ds_Notice.setColumn(nRow,"deptcode",list);
        	}else if(list == 'D'){
        	this.ds_Notice.setColumn(nRow,"deptcode",list);
        	}
        	this.ds_Notice.setColumn(nRow,"title",title);
        	this.ds_Notice.setColumn(nRow,"contents",contents);

        	//파일전송




        	//if(this.FileUpTransfer00.filelist.length > 0){
        	//	this.FileUpTransfer00.upload("/uploadNoticeFile.notice"); //file up url
        	//}


        	this.transaction(
        		"nomalNoticeUpdate",//id
        		"/updateNomalNotice.notice",//url (절대경로)
        		"in_ds=ds_Notice:U",//in_ds:U
        		"",//()_out_ds
        		"",//argument
        		"fn_callback"
        	)
        	this.close();
        };

        this.fn_FileClear = function (){
        	//FileUpTransfer 파일 모두삭제
        	this.FileUpTransfer00.clearFileList();
        	//파일정보 모두삭제
        	this.ds_NoticeFiles.clearData();
        }


        this.Tab00_Tabpage1_btn_del_onclick = function(obj,e)
        {
        	if(this.confirm("삭제하시겟습니까?")){
        	this.n_seq = this.parent.n_seq;
        	trace(this.n_seq);
        	this.transaction(

        				"delteNotice" //1. strSvcID
        				,"/deleteNotice.notice" //2. strURL
        				,"" //3.strInDatasets - I,U,D Sds=Fds:U 변경된값만보내겟다, :A, :N
        				,"" //4.strOutDatasets -select Fds=Sds
        				,"n_seq='"+this.n_seq+"'" //5.strArgument text값
        				,"fn_callback" //6.strCallbackFunc
        			);
        			this.close();
        			}
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.nomalNotice_Info_onload,this);
            this.Static00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Tab00.addEventHandler("onchanged",this.Tab00_onchanged,this);
            this.Tab00.Tabpage1.form.btn_cancel.addEventHandler("onclick",this.Tab00_Tabpage1_btn_cancel_onclick,this);
            this.Tab00.Tabpage1.form.btn_save.addEventHandler("onclick",this.Tab00_Tabpage1_btn_save_onclick,this);
            this.Tab00.Tabpage1.form.Grid00.addEventHandler("onheadclick",this.Tab00_Tabpage1_Grid00_onheadclick,this);
            this.Tab00.Tabpage1.form.btn_del.addEventHandler("onclick",this.Tab00_Tabpage1_btn_del_onclick,this);
            this.FileDialog00.addEventHandler("onclose",this.FileDialog00_onclose,this);
            this.FileUpTransfer00.addEventHandler("onerror",this.FileUpTransfer00_onerror,this);
            this.FileUpTransfer00.addEventHandler("onprogress",this.FileUpTransfer00_onprogress,this);
            this.FileUpTransfer00.addEventHandler("onsuccess",this.FileUpTransfer00_onsuccess,this);
        };

        this.loadIncludeScript("nomalNotice_Info.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
