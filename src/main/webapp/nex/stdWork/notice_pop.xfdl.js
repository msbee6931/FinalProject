(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("notice_pop");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_NoticeFiles", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"n_seq\" type=\"INT\" size=\"256\"/><Column id=\"parentSeq\" type=\"INT\" size=\"256\"/><Column id=\"fileName\" type=\"STRING\" size=\"256\"/><Column id=\"savedFileName\" type=\"STRING\" size=\"256\"/><Column id=\"fileSize\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Notice", this);
            obj._setContents("<ColumnInfo><Column id=\"n_seq\" type=\"INT\" size=\"256\"/><Column id=\"title\" type=\"STRING\" size=\"256\"/><Column id=\"writedate\" type=\"DATE\" size=\"256\"/><Column id=\"contents\" type=\"STRING\" size=\"256\"/><Column id=\"deptcode\" type=\"STRING\" size=\"256\"/><Column id=\"view_count\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("FileDownTransfer00", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("label_notice","30","30","120","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("공지(분류)");
            obj.set_border("1px solid black");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","30","100","741","70",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("TItle");
            obj.set_border("1px solid black");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("label_date","110","170","120","60",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("작성일자");
            obj.set_textAlign("center");
            obj.set_border("1px solid black");
            this.addChild(obj.name, obj);

            obj = new Static("label_viewCount","460","170","120","60",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("조회수");
            obj.set_textAlign("center");
            obj.set_border("1px solid black");
            this.addChild(obj.name, obj);

            obj = new TextArea("ta_content","30","230","741","230",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta_file","30","460","120","75",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("첨부파일");
            obj.set_border("1px solid black");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close","670","545","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);

            obj = new Static("sta_view_count","580","170","120","60",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("조회수");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Grid("gr_fileList","150","460","520","75",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_binddataset("ds_NoticeFiles");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"33\"/><Column size=\"360\"/><Column size=\"127\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"파일 이름\"/><Cell col=\"2\" text=\"파일크기\"/></Band><Band id=\"body\"><Cell text=\"bind:chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:fileName\"/><Cell col=\"2\" text=\"bind:fileSize\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnDownload","670","460","100","75",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("다운로드");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_date","230","170","170","60",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_dateformat("yyyy-MM-dd");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",800,600,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("notice_pop.xfdl", function() {

        this.notice_pop_onload = function(obj,e)
        {
        	var nCode = this.parent.nCode;

        	this.transaction(
        		"noticeOnload"
        		,"/noticeOnload.notice"
        		,""
        		,"ds_Notice=out_ds ds_NoticeFiles=out_ds2"
        		,"nCode="+nCode
        		,"fn_callback"
        	);
        };
        this.fn_callback = function(sId,errCd,errMsg){
        	if (errCd < 0) {
        		trace("sId["+sId+"]: Error["+errCd+"]:"+errMsg);
        	}
        	if(sId == "noticeOnload"){
        		var title = this.ds_Notice.getColumn(0,"title");
        		var date = this.ds_Notice.getColumn(0,"writedate");
        		var contents = this.ds_Notice.getColumn(0,"contents");
        		var part = this.ds_Notice.getColumn(0,"deptcode");
        		var count = this.ds_Notice.getColumn(0,"view_count");

        		this.sta_title.set_text(title);
        		this.cal_date.set_value(date)
        		this.ta_content.set_value(contents);
        		if(part == "A"){
        			part = "일반공지";
        		}else if(part =="B"){
        			part = "학사공지";
        		}else if(part =="C"){
        			part = "장학공지";
        		}else if(part =="D"){
        			part = "취업공지";
        		}
        		this.label_notice.set_text(part);
        		this.sta_view_count.set_text(count);
        	}
        }
        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        };

        this.btnDownload_onclick = function(obj,e)
        {
        	var objDs = this.ds_NoticeFiles;
        	var seq = this.parent.nCode;
        	var title = this.sta_title.text;
        	this.FileDownTransfer00.setPostData("seq",seq); // 현재 게시물의seq를 넘김
        	//총 첨부파일 중 체크 된 파일만 이벤트 발생
        	this.FileDownTransfer00.setPostData("title",title);

        	var arr = this.ds_NoticeFiles.extractRows("chk==1");
        	if(arr.length > 0){
        		for(var i=0; i< arr.length; i++){
        			// 체크된 파일만 서버로 변수를 보냄
        			var savedFileName = objDs.getColumn(i,"savedFileName");
        			this.FileDownTransfer00.setPostData("savedFileName'"+i+"'",savedFileName);

        			var fileName = objDs.getColumn(i,"fileName");
        			this.FileDownTransfer00.setPostData("fileName'"+i+"'",fileName);
        			trace(fileName);
        		}
        	this.FileDownTransfer00.download("/downloadNotice.notice");
        	}else{
        		alert("파일을 선택해주세요");
        	}



        };

        this.gr_fileList_onheadclick = function(obj,e)
        {
        	let flag = obj.getCellProperty("Head",0,"text");
        	let check = flag==0?1:0;
        	if(e.cell==0){
        		obj.setCellProperty("Head",0,"text",check);
        		for(let i = 0;i<this.ds_NoticeFiles.getRowCount();i++){
        			this.ds_NoticeFiles.setColumn(i,"chk",check);
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
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.notice_pop_onload,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.gr_fileList.addEventHandler("onheadclick",this.gr_fileList_onheadclick,this);
            this.btnDownload.addEventHandler("onclick",this.btnDownload_onclick,this);
            this.FileDownTransfer00.addEventHandler("onerror",this.FileDownTransfer00_onerror,this);
            this.FileDownTransfer00.addEventHandler("onsuccess",this.FileDownTransfer00_onsuccess,this);
        };

        this.loadIncludeScript("notice_pop.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
