(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sample_fileuptransfer_01");
            this.set_titletext("New Form");
            this.set_border("");
            this.set_background("");
            if (Form == this.constructor)
            {
                this._setFormPosition(1080,520);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"INT\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"size\" type=\"STRING\" size=\"256\"/><Column id=\"parentSeq\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("reference", this);
            obj._setContents("<ColumnInfo><Column id=\"seq\" type=\"INT\" size=\"256\"/><Column id=\"title\" type=\"STRING\" size=\"256\"/><Column id=\"contents\" type=\"STRING\" size=\"256\"/><Column id=\"write_date\" type=\"STRING\" size=\"256\"/><Column id=\"parentSeq\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileDialog("FileDialog00", this);
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("FileUpTransfer00", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","30","75",null,"150","180",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Drop Files Here");
            obj.set_visible("true");
            obj.set_background("aliceblue");
            obj.set_color("dodgerblue");
            obj.set_font("normal 30pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","30","10",null,null,"26","30",null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("sta_line");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","36","52",null,"150","174",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("Dataset00");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_default");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"418\"/><Column size=\"369\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"이름\"/><Cell col=\"2\" text=\"size\"/></Band><Band id=\"body\"><Cell text=\"bind:chk\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"bind:name\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:size\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button03",null,null,"100","25","35","40",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("작성하기");
            obj.set_cssclass("btn_insert");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","36","28","104","25",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Title : ");
            obj.set_cssclass("sta_default");
            this.addChild(obj.name, obj);

            obj = new TextArea("contents","36","202",null,null,"40","75",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("txt_default");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","0","29",null,null,"0",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_visible("false");
            obj.set_background("RGBA(236,135,135,0.71)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","80","0","800","10",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_visible("false");
            obj.set_background("RGBA(236,135,135,0.71)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","1051","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_visible("false");
            obj.set_background("RGBA(236,135,135,0.71)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","140","490",null,null,"140","0",null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_visible("false");
            obj.set_background("RGBA(236,135,135,0.71)");
            this.addChild(obj.name, obj);

            obj = new Button("Button00",null,"52","140","80","40",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("파일찾기");
            obj.set_cssclass("btn_default");
            this.addChild(obj.name, obj);

            obj = new Edit("title","139","28",null,"25","40",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("edt_default");
            this.addChild(obj.name, obj);

            obj = new Button("Button02",null,"131","140","75","40",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("삭제");
            obj.set_cssclass("btn_can");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1080,520,this,function(p){});
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("reference.xfdl", function() {
        this.parentSeq="";

        this.Button00_onclick = function(obj,e)
        {
        	this.FileDialog00.open('파일선택', FileDialog.MULTILOAD);
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
        		vFile.addEventHandler("onsuccess", this.FileList_onsuccess, this);
        		vFile.addEventHandler("onerror", this.FileList_onerror , this);

        		vFile.open(null, 1);
        	}
        }

        this.FileList_onsuccess = function(obj, e)
        {
        	switch (e.reason)
        	{
        		case 1:
        			obj.getFileSize();
        			break;
        		case 9:
        			var nRowIdx = this.Dataset00.addRow();
        			this.Dataset00.setColumn(nRowIdx, 1, obj.filename);
        			this.Dataset00.setColumn(nRowIdx, 2, this.cutFileSize(e.filesize));
        			this.FileUpTransfer00.addFile(obj.filename, obj);
        			break;
        	}
        }

        this.FileList_onerror = function(obj, e)
        {
        	trace("errortype: "+e.errortype);
        	trace("errormsg: "+e.errormsg);
        	trace("statuscode: "+e.statuscode);
        }

        // https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications#Example_Showing_file(s)_size
        this.cutFileSize = function(filesize)
        {
        	var sOutput = filesize + " bytes";
        	for (var aMultiples = ["KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"], nMultiple = 0, nApprox = filesize / 1024; nApprox > 1; nApprox /= 1024, nMultiple++)
        	{
        		sOutput = nApprox.toFixed(3) + " " + aMultiples[nMultiple];
        	}
        	return sOutput;
        };
        this.Grid00_ondragenter = function(obj,e)
        {
        	if(e.datatype == "file")
        	{
        		this.Grid00.set_opacity(0.5);
        	}
        };

        this.Grid00_ondragleave = function(obj,e)
        {
        	this.Grid00.set_opacity(1);
        };

        this.Grid00_ondrop = function(obj,e)
        {
        	this.Grid00.set_opacity(1);
        	if(e.datatype == "file")
        	{
        		this.addFileList(e.filelist);
        	}
        };


        this.FileUpTransfer00_onprogress = function(obj,e)
        {
        	this.fn_addlog(e.loaded+"/"+e.total);
        };

        this.FileUpTransfer00_onsuccess = function(obj,e)
        {
        	this.fn_addlog(e.code);
        	this.fn_addlog(e.message);
        };

        this.FileUpTransfer00_onerror = function(obj,e)
        {
        	this.fn_addlog(e.errormsg);
        	this.fn_addlog(e.statuscode);
        };

        this.fn_addlog = function(strMessage)
        {
        	this.TextArea00.insertText(strMessage + '\n');

        }

        this.Grid00_onheadclick = function(obj,e)
        {
        	let flag = obj.getCellProperty("Head",0,"text");
        	let check = flag==0?1:0;
        	if(e.cell==0){
        		obj.setCellProperty("Head",0,"text",check);
        		for(let i = 0;i<this.Dataset00.getRowCount();i++){
        			this.Dataset00.setColumn(i,"chk",check);
        		}
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

        		this.Dataset00.set_enableevent(false);
        		for(var i=0; i< this.Dataset00.getRowCount(); i++)
        		{
        			this.Dataset00.setColumn(i, "chk",sheadValue);
        		}
        		this.Dataset00.set_enableevent(true);
            }

        }
        this.Button02_onclick = function(obj,e)
        {
        	let arr = this.Dataset00.extractRows("chk==1");

        	if(arr.length==0 || arr.length== -1){alert("선택된 항목이 없습니다.");return;}

        	this.Dataset00.deleteMultiRows(arr);
        };

        this.Button03_onclick = function(obj,e)
        {
        	if(this.title.value==null){
        		alert("제목을 입력하셔야합니다.");
        	}else if(this.contents.value==null){
        		alert("내용을 기입해 주십시오.");
        	}else{
        		let title = this.title.value;
        		let contents = this.contents.value;
        		let nRow = this.reference.addRow();

        		this.reference.setColumn(nRow,"title",title);
        		this.reference.setColumn(nRow,"contents",nexacro.wrapQuote(contents));

        		this.transaction(
        			"uploadDTO",//id
        			"/reference/uploadDTO",//url (절대경로)
        			"in_ds=reference:U",//in_ds:U
        			"",//()_out_ds
        			"",//argument
        			"file_callback"
        	)


        		}


        };
        this.file_callback = function (tID, eCode, eMag)
        {
        	trace("parentSeq = "+this.parentSeq);
        	this.FileUpTransfer00.setPostData("parentSeq",this.parentSeq);
        	//파일전송
        	this.FileUpTransfer00.upload("/reference/uploadFile");

        	alert("등록되었습니다.")
        	this.title.set_value("");
        	this.contents.set_value("");
        	this.Dataset00.reset();
        	this.FileUpTransfer00.clearFileList();
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Grid00.addEventHandler("ondragenter",this.Grid00_ondragenter,this);
            this.Grid00.addEventHandler("ondragleave",this.Grid00_ondragleave,this);
            this.Grid00.addEventHandler("ondrop",this.Grid00_ondrop,this);
            this.Grid00.addEventHandler("onheadclick",this.Grid00_onheadclick,this);
            this.Button03.addEventHandler("onclick",this.Button03_onclick,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button02.addEventHandler("onclick",this.Button02_onclick,this);
            this.FileDialog00.addEventHandler("onclose",this.FileDialog00_onclose,this);
            this.FileUpTransfer00.addEventHandler("onprogress",this.FileUpTransfer00_onprogress,this);
            this.FileUpTransfer00.addEventHandler("onsuccess",this.FileUpTransfer00_onsuccess,this);
            this.FileUpTransfer00.addEventHandler("onerror",this.FileUpTransfer00_onerror,this);
        };

        this.loadIncludeScript("reference.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
