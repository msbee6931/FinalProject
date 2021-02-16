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
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"seq\" type=\"INT\" size=\"256\"/><Column id=\"parentSeq\" type=\"INT\" size=\"256\"/><Column id=\"fileName\" type=\"STRING\" size=\"256\"/><Column id=\"savedFileName\" type=\"STRING\" size=\"256\"/><Column id=\"fileSize\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"seq\">1</Col><Col id=\"parentSeq\">12334</Col></Row><Row><Col id=\"parentSeq\">653</Col><Col id=\"savedFileName\">6534</Col></Row></Rows>");
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

            obj = new Edit("Edit00","168","39","600","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","69","39","100","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("제목");
            obj.set_background("#c1c1c1");
            obj.set_border("1px solid #000000");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit01","70","139","700","271",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00","69","69","100","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("첨부파일");
            obj.set_background("#c1c1c1");
            obj.set_border("1px solid #000000");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_down","668","69","100","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("파일 다운로드");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("Grid00","170","70","498","70",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_binddataset("schFileList_ds");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"45\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"0\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"seq\"/><Cell col=\"2\" text=\"parentSeq\"/><Cell col=\"3\" text=\"fileName\"/><Cell col=\"4\" text=\"savedFileName\"/><Cell col=\"5\" text=\"fileSize\"/></Band><Band id=\"body\"><Cell text=\"bind:chk\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"bind:seq\"/><Cell col=\"2\" text=\"bind:parentSeq\"/><Cell col=\"3\" text=\"bind:fileName\"/><Cell col=\"4\" text=\"bind:savedFileName\"/><Cell col=\"5\" text=\"bind:fileSize\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_cancle","669","444","100","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("닫기");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_check","549","444","100","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("확인 완료");
            this.Div00.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",900,600,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Div00.form.Edit00","value","reqScholar_ds","title");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Div00.form.Edit01","value","reqScholar_ds","contents");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("requestScholar_read_pop.xfdl", function() {
        this.seq="";

        //----------------------  온로드
        this.requestScholar_read_pop_onload = function(obj,e)
        {
        	//부모창에서 받아온 seq 값 - 해당 seq의 내용 가져오기
        	this.seq = this.parent.seq;

        	this.transaction(
        		"selectSeqReqScholar.", // 1. strSvcID
        		"/scholarship/selectSeqReqScholar.scholarship", // 2. strURL(절대경로로 입력해주어야함. 로컬호스트 뒤에는 이클립스 서버파일에 있는 path값)
        		"", // 3. strInDatasets - Sds=Fds:U, :A, :N
        		"reqScholar_ds=out_ds schFileList_ds=out_fDs", // 4. strOutDatasets - select Fds = Sds
        		"seq='"+this.seq+"'", // 5. strArgument
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


        //-------------등록금 신청 내역 관리자 확인여부 체크하기
        this.chkValue="";
        this.Div00_btn_check_onclick = function(obj,e)
        {
        	this.Div00.form.btn_check.set_text("처리 완료");
        	this.chkValue="check";
        };



        this.Div00_btn_cancle_onclick = function(obj,e)
        {
        	this.alert(this.chkValue);
        	if (this.chkValue == "check")
        	{
        		alert(this.seq);
        		this.close(this.seq);
        	} else {
        		this.close();
        	}
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
            this.Div00.form.btn_check.addEventHandler("onclick",this.Div00_btn_check_onclick,this);
        };

        this.loadIncludeScript("requestScholar_read_pop.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
