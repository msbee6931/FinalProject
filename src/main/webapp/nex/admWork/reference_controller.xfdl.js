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
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"INT\" size=\"256\"/><Column id=\"fileName\" type=\"STRING\" size=\"256\"/><Column id=\"fileSize\" type=\"STRING\" size=\"256\"/><Column id=\"seq\" type=\"INT\" size=\"256\"/><Column id=\"parentSeq\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("reference", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"INT\" size=\"256\"/><Column id=\"seq\" type=\"INT\" size=\"256\"/><Column id=\"title\" type=\"STRING\" size=\"256\"/><Column id=\"contents\" type=\"STRING\" size=\"256\"/><Column id=\"write_date\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileDialog("FileDialog00", this);
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("FileUpTransfer00", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","610","115","366","150",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Drop Files Here");
            obj.set_visible("true");
            obj.set_background("aliceblue");
            obj.set_color("dodgerblue");
            obj.set_font("normal 30pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","815","85","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("파일찾기");
            obj.set_cssclass("btn_default");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","600","115","430","125",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("Dataset00");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"214\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"fileName\"/><Cell col=\"2\" text=\"fileSize\"/></Band><Band id=\"body\"><Cell text=\"bind:chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:fileName\"/><Cell col=\"2\" text=\"bind:fileSize\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","930","85","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("제거");
            obj.set_cssclass("btn_del");
            this.addChild(obj.name, obj);

            obj = new Button("update","930","480","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("수정");
            obj.set_cssclass("btn_default");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","600","36","72","36",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Title : ");
            obj.set_cssclass("sta_title");
            this.addChild(obj.name, obj);

            obj = new Edit("title","660","42","360","28",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("edt_default");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","600","72","72","36",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("File :");
            obj.set_cssclass("sta_title");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","32","80","536","390",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_binddataset("reference");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"58\"/><Column size=\"65\"/><Column size=\"220\"/><Column size=\"191\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"seq\"/><Cell col=\"2\" text=\"title\"/><Cell col=\"3\" text=\"write_date\"/></Band><Band id=\"body\"><Cell text=\"bind:chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:seq\"/><Cell col=\"2\" text=\"bind:title\"/><Cell col=\"3\" text=\"bind:write_date\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01","37","26","186","36",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("자료실 수정");
            obj.set_cssclass("sta_title");
            this.addChild(obj.name, obj);

            obj = new Button("Button03_00","468","480","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("삭제");
            obj.set_cssclass("btn_del");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","468","46","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("갱신");
            obj.set_cssclass("btn_default");
            this.addChild(obj.name, obj);

            obj = new TextArea("contents","600","264","432","201",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("txt_default");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1080,520,this,function(p){});
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","title","value","reference","title");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","contents","value","reference","contents");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("reference_controller.xfdl", function() {
        this.parentSeq=0;

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


        	 this.transaction(
                    "ReferenceFileDel"
                    ,"/reference/deleteFile"
                    ,"in_ds=Dataset00:U"
                    ,""
                    ,""
                    ,"fn_callback"
                 )
        		 this.alert("파일이 제거 되었습니다.");
        };



        this.fn_callback = function(id,ErrorCode,ErrorMsg){
        	trace(id);
        	trace(ErrorMsg);
        	trace(ErrorCode);
        }

        this.Button03_onclick = function(obj,e)
        {
        	let arr = this.reference.extractRows("chk==1");

        	if(arr.length==0 || arr.length== -1){alert("선택된 항목이 없습니다.");return;}

        	this.reference.deleteMultiRows(arr);

        		   this.transaction(
                    "ReferenceDel"
                    ,"/reference/delete"
                    ,"in_ds=reference:U"
                    ,""
                    ,""
                    ,"fn_callback"
                 )
        };

        this.update_onclick = function(obj,e)
        {
        	this.contents.set_value(nexacro.wrapQuote(this.contents.value+" "));
        	this.transaction(
                    "ReferenceUpd"
                    ,"/reference/update"
                    ,"in_ds=reference:U"
                    ,""
                    ,""
                    ,"fn_callback"
                 )

        	//파일전송
        	this.FileUpTransfer00.upload("/reference/updateFile"); //file up url




        };

        this.sample_fileuptransfer_01_onload = function(obj,e)
        {
        		this.transaction(
        			"garbageDelte" //id
        			,"/reference/garbageDelete"//url
        			,""// inData
        			,""// outData
        			,""//strArg
        			,"fn_callback"//callback
        		);

        		this.transaction(
        			"ReferenceLoad" //id
        			,"/reference/load"//url
        			,""// inData
        			,"reference=out_ds"// outData
        			,""//strArg
        			,"fn_callback"//callback
        		);


        };


        this.Grid01_oncellposchanged = function(obj,e)
        {
        		let seq = this.reference.getColumn(e.row,"seq");

        		this.transaction(
        			"FindFile" //id
        			,"/reference/findFile"//url
        			,""// inData
        			,"Dataset00=out_ds"// outData
        			,"seq="+seq//strArg
        			,"fn_callback"//callback
        		);

        };

        this.Button01_onclick = function(obj,e)
        {
        			this.transaction(
        			"ReferenceLoad" //id
        			,"/reference/load"//url
        			,""// inData
        			,"reference=out_ds"// outData
        			,""//strArg
        			,"fn_callback"//callback
        		);

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.sample_fileuptransfer_01_onload,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Grid00.addEventHandler("ondragenter",this.Grid00_ondragenter,this);
            this.Grid00.addEventHandler("ondragleave",this.Grid00_ondragleave,this);
            this.Grid00.addEventHandler("ondrop",this.Grid00_ondrop,this);
            this.Grid00.addEventHandler("onheadclick",this.Grid00_onheadclick,this);
            this.Button02.addEventHandler("onclick",this.Button02_onclick,this);
            this.update.addEventHandler("onclick",this.update_onclick,this);
            this.Grid01.addEventHandler("oncellclick",this.Grid01_oncellclick,this);
            this.Grid01.addEventHandler("oncellposchanged",this.Grid01_oncellposchanged,this);
            this.Static01_01.addEventHandler("onclick",this.Static01_01_onclick,this);
            this.Button03_00.addEventHandler("onclick",this.Button03_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.FileDialog00.addEventHandler("onclose",this.FileDialog00_onclose,this);
            this.FileUpTransfer00.addEventHandler("onprogress",this.FileUpTransfer00_onprogress,this);
            this.FileUpTransfer00.addEventHandler("onsuccess",this.FileUpTransfer00_onsuccess,this);
            this.FileUpTransfer00.addEventHandler("onerror",this.FileUpTransfer00_onerror,this);
        };

        this.loadIncludeScript("reference_controller.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
