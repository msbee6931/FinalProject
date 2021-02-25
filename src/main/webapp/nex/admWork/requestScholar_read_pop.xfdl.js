(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("requestScholar_read_pop");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(900,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("reqScholar_ds", this);
            obj._setContents("<ColumnInfo><Column id=\"seq\" type=\"INT\" size=\"256\"/><Column id=\"std_code\" type=\"STRING\" size=\"256\"/><Column id=\"title\" type=\"STRING\" size=\"256\"/><Column id=\"contents\" type=\"STRING\" size=\"256\"/><Column id=\"writeDate\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("schFileList_ds", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"seq\" type=\"INT\" size=\"256\"/><Column id=\"parentSeq\" type=\"INT\" size=\"256\"/><Column id=\"fileName\" type=\"STRING\" size=\"256\"/><Column id=\"savedFileName\" type=\"STRING\" size=\"256\"/><Column id=\"fileSize\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("FileDownTransfer00", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","870","40","30","520",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_visible("false");
            obj.set_background("RGBA(236,135,135,0.71)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","40","30","520",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_visible("false");
            obj.set_background("RGBA(236,135,135,0.71)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","160","580","600","20",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_visible("false");
            obj.set_background("RGBA(236,135,135,0.71)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00","150","0","600","20",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_visible("false");
            obj.set_background("RGBA(236,135,135,0.71)");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","30","20","840","560",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Div00");
            obj.set_border("1px solid #c1c1c1");
            this.addChild(obj.name, obj);

<<<<<<< HEAD
            obj = new Edit("Edit00","179","39","650","25",null,null,null,null,null,null,this.Div00.form);
=======
            obj = new Edit("edt_title","119","78","709","25",null,null,null,null,null,null,this.Div00.form);
>>>>>>> 8f5af974195c2ae46f84e2a8e006a0a0a22f93e8
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.set_cssclass("edt_default");
            this.Div00.addChild(obj.name, obj);

<<<<<<< HEAD
            obj = new Static("Static00","0","39","179","25",null,null,null,null,null,null,this.Div00.form);
=======
            obj = new Static("Static00","0","78","120","25",null,null,null,null,null,null,this.Div00.form);
>>>>>>> 8f5af974195c2ae46f84e2a8e006a0a0a22f93e8
            obj.set_taborder("0");
            obj.set_text("제목");
            obj.set_cssclass("sta_default");
            this.Div00.addChild(obj.name, obj);

<<<<<<< HEAD
            obj = new Edit("Edit01","179","192","650","210",null,null,null,null,null,null,this.Div00.form);
=======
            obj = new Edit("Edit01","120","232","709","210",null,null,null,null,null,null,this.Div00.form);
>>>>>>> 8f5af974195c2ae46f84e2a8e006a0a0a22f93e8
            obj.set_taborder("4");
            obj.set_readonly("true");
            obj.set_cssclass("edt_default");
            this.Div00.addChild(obj.name, obj);

<<<<<<< HEAD
            obj = new Static("Static00_00","0","63","179","130",null,null,null,null,null,null,this.Div00.form);
=======
            obj = new Static("Static00_00","0","103","120","130",null,null,null,null,null,null,this.Div00.form);
>>>>>>> 8f5af974195c2ae46f84e2a8e006a0a0a22f93e8
            obj.set_taborder("2");
            obj.set_text("첨부파일");
            obj.set_cssclass("sta_default");
            this.Div00.addChild(obj.name, obj);

<<<<<<< HEAD
            obj = new Button("btn_down","689","62","140","130",null,null,null,null,null,null,this.Div00.form);
=======
            obj = new Button("btn_down","689","102","140","130",null,null,null,null,null,null,this.Div00.form);
>>>>>>> 8f5af974195c2ae46f84e2a8e006a0a0a22f93e8
            obj.set_taborder("3");
            obj.set_text("파일 다운로드");
            obj.set_cssclass("btn_default");
            this.Div00.addChild(obj.name, obj);

<<<<<<< HEAD
            obj = new Grid("Grid00","179","63","509","130",null,null,null,null,null,null,this.Div00.form);
=======
            obj = new Grid("Grid00","120","103","569","130",null,null,null,null,null,null,this.Div00.form);
>>>>>>> 8f5af974195c2ae46f84e2a8e006a0a0a22f93e8
            obj.set_taborder("5");
            obj.set_binddataset("schFileList_ds");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_default");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"31\"/><Column size=\"239\"/><Column size=\"59\"/></Columns><Rows><Row size=\"20\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"0\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"fileName\"/><Cell col=\"2\" text=\"fileSize\"/></Band><Band id=\"body\"><Cell text=\"bind:chk\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"bind:fileName\"/><Cell col=\"2\" text=\"bind:fileSize\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

<<<<<<< HEAD
            obj = new Button("btn_cancle","699","444","100","30",null,null,null,null,null,null,this.Div00.form);
=======
            obj = new Button("btn_cancle","729","499","100","30",null,null,null,null,null,null,this.Div00.form);
>>>>>>> 8f5af974195c2ae46f84e2a8e006a0a0a22f93e8
            obj.set_taborder("6");
            obj.set_text("닫기");
            obj.set_cssclass("btn_can");
            this.Div00.addChild(obj.name, obj);

<<<<<<< HEAD
            obj = new Static("Static00_00_00","0","192","179","211",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("신청사유");
            obj.set_cssclass("sta_default");
=======
            obj = new Static("Static00_00_00","0","232","120","211",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("신청사유");
            obj.set_cssclass("sta_default");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_seq","0","54","120","25",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_text("학번");
            obj.set_cssclass("sta_default");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_seq","119","54","709","25",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_readonly("true");
            obj.set_cssclass("edt_default");
>>>>>>> 8f5af974195c2ae46f84e2a8e006a0a0a22f93e8
            this.Div00.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",900,600,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Div00.form.edt_title","value","reqScholar_ds","title");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Div00.form.Edit01","value","reqScholar_ds","contents");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Div00.form.edt_seq","value","reqScholar_ds","std_code");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("requestScholar_read_pop.xfdl", function() {

        this.seq=this.parent.seq;
        this.sCode=this.parent.std_code;
        //----------------------  온로드
        this.requestScholar_read_pop_onload = function(obj,e)
        {
        	this.Div00.form.edt_seq.set_value(this.sCode);

        	this.transaction(
        		"selectSeqReqScholar.", // 1. strSvcID
        		"/scholarship/selectSeqReqScholar.scholarship", // 2. strURL(절대경로로 입력해주어야함. 로컬호스트 뒤에는 이클립스 서버파일에 있는 path값)
        		"", // 3. strInDatasets - Sds=Fds:U, :A, :N
        		"reqScholar_ds=out_ds schFileList_ds=out_fDs", // 4. strOutDatasets - select Fds = Sds
        		"seq="+this.seq, // 5. strArgument
        		"fn_callback" // 6. strCallbackFunc
        	);

        };


        //------------------------------------ 파일다운로드 버튼
        this.Div00_btn_down_onclick = function(obj,e)
        {

        	var objDs = this.schFileList_ds;

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
          this.FileDownTransfer00.download("/scholarship/downReqSchFile.scholarship");

          //검색 후 지정 체크박스 해제
        	this.Div00.form.Grid00.setCellProperty("head",0,"text",0);
        	for(let i =0; i<this.schFileList_ds.getRowCount();i++){
        		if(this.schFileList_ds.getColumn(i,"chk") == 1){
        			this.schFileList_ds.setColumn(i,"chk",0);
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


        this.chkValue="";

        // 닫기 버튼
        this.Div00_btn_cancle_onclick = function(obj,e)
        {
        		this.transaction(
        			"checkValueReqScholar.scholarship",//id
        			"/scholarship/checkValueReqScholar.scholarship",//url (절대경로)
        			"",//in_ds:U
        			"",//()_out_ds
        			"seq="+this.seq,//argument
        			"fn_callback_check"
        			)

        };

        this.fn_callback_check = function()
        {
        		this.close(this.seq);
        }

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

        		this.schFileList_ds.set_enableevent(false);
        		for(var i=0; i< this.schFileList_ds.getRowCount(); i++)
        		{
        			this.schFileList_ds.setColumn(i, "chk",sheadValue);
        		}
        		this.schFileList_ds.set_enableevent(true);
            }

        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.requestScholar_read_pop_onload,this);
            this.Div00.form.btn_down.addEventHandler("onclick",this.Div00_btn_down_onclick,this);
            this.Div00.form.Grid00.addEventHandler("onheadclick",this.Div00_Grid00_onheadclick,this);
            this.Div00.form.btn_cancle.addEventHandler("onclick",this.Div00_btn_cancle_onclick,this);
        };

        this.loadIncludeScript("requestScholar_read_pop.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
