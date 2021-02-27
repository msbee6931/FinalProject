(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("scholarship");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1080,520);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("reqScholar_ds", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"seq\" type=\"INT\" size=\"256\"/><Column id=\"std_code\" type=\"STRING\" size=\"256\"/><Column id=\"title\" type=\"STRING\" size=\"256\"/><Column id=\"contents\" type=\"STRING\" size=\"256\"/><Column id=\"writeDate\" type=\"STRING\" size=\"256\"/><Column id=\"checkRead\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("schFileList_ds", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"seq\" type=\"INT\" size=\"256\"/><Column id=\"parentSeq\" type=\"INT\" size=\"256\"/><Column id=\"fileName\" type=\"STRING\" size=\"256\"/><Column id=\"savedFileName\" type=\"STRING\" size=\"256\"/><Column id=\"fileSize\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("reqScholarCopy_ds", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"seq\" type=\"INT\" size=\"256\"/><Column id=\"std_code\" type=\"STRING\" size=\"256\"/><Column id=\"title\" type=\"STRING\" size=\"256\"/><Column id=\"contents\" type=\"STRING\" size=\"256\"/><Column id=\"writeDate\" type=\"STRING\" size=\"256\"/><Column id=\"checkRead\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("FileDownTransfer00", this);
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

            obj = new Static("Static00_01_00","140","490","800","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_visible("false");
            obj.set_background("RGBA(236,135,135,0.71)");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","30","10",null,null,"29","30",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Div00");
            obj.set_cssclass("div_line");
            obj.set_async("false");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","9","61",null,null,"560","9",null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_binddataset("reqScholar_ds");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_default");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"335\"/><Column size=\"64\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"제목\"/><Cell col=\"1\" text=\"작성날짜\"/></Band><Band id=\"body\"><Cell text=\"bind:title\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:writeDate\" displaytype=\"date\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_insert","9","26","100","25",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("작성하기");
            obj.set_cssclass("btn_insert");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("div_line",null,"61","550",null,"5","8",null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_cssclass("div_line");
            this.Div00.addChild(obj.name, obj);

            obj = new TextArea("txt_cotents","114","173","420","189",null,null,null,null,null,null,this.Div00.form.div_line.form);
            obj.set_taborder("0");
            obj.set_cssclass("txt_default");
            obj.set_readonly("true");
            this.Div00.form.div_line.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","15","174","100","190",null,null,null,null,null,null,this.Div00.form.div_line.form);
            obj.set_taborder("1");
            obj.set_text("신청사유");
            obj.set_cssclass("sta_default");
            this.Div00.form.div_line.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","16","56","100","117",null,null,null,null,null,null,this.Div00.form.div_line.form);
            obj.set_taborder("2");
            obj.set_text("첨부파일");
            obj.set_cssclass("sta_default");
            this.Div00.form.div_line.addChild(obj.name, obj);

            obj = new Grid("Grid00","117","57","348","117",null,null,null,null,null,null,this.Div00.form.div_line.form);
            obj.set_taborder("3");
            obj.set_binddataset("schFileList_ds");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_default");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"26\"/><Column size=\"239\"/><Column size=\"80\"/></Columns><Rows><Row size=\"20\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"파일이름\"/><Cell col=\"2\" text=\"파일크기\"/></Band><Band id=\"body\"><Cell text=\"bind:chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:fileName\"/><Cell col=\"2\" text=\"bind:fileSize\"/></Band></Format></Formats>");
            this.Div00.form.div_line.addChild(obj.name, obj);

            obj = new Button("btn_down","465","56","70","117",null,null,null,null,null,null,this.Div00.form.div_line.form);
            obj.set_taborder("4");
            obj.set_text("파일\r\n다운로드");
            obj.set_cssclass("btn_default");
            this.Div00.form.div_line.addChild(obj.name, obj);

            obj = new Edit("edt_title","115","26","420","30",null,null,null,null,null,null,this.Div00.form.div_line.form);
            obj.set_taborder("5");
            obj.set_readonly("true");
            obj.set_cssclass("edt_default");
            this.Div00.form.div_line.addChild(obj.name, obj);

            obj = new Static("Static00_02","16","26","100","30",null,null,null,null,null,null,this.Div00.form.div_line.form);
            obj.set_taborder("6");
            obj.set_text("제목");
            obj.set_cssclass("sta_default");
            this.Div00.form.div_line.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1080,520,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Div00.form.div_line.form.txt_cotents","value","reqScholarCopy_ds","contents");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Div00.form.div_line.form.edt_title","value","reqScholar_ds","title");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Div00.form.div_line.form.edt_title","accessibilityaction","reqScholarCopy_ds","title");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("scholarship.xfdl", function() {
        this.objApp = nexacro.getApplication();
        this.code=this.objApp.gds_students.getColumn(0,'s_seq');

        this.scholarship_onload = function(obj,e)
        {
        	this.transaction(
        		"selectOneReqScholar.scholarship",//id
        		"/scholarship/selectOneReqScholar.scholarship",//url (절대경로)
        		"",//in_ds:U
        		"reqScholar_ds=out_ds",//()_out_ds
        		"code="+this.code,//argument
        		"fn_callback"
        		)
        };



        this.Div00_btn_insert_onclick = function(obj,e)
        {

        	//장학금 신청서 입력을 위한 모달창
        	var objCF = new ChildFrame();
        	objCF.init("scholarship_insert_pop",200,100,900,600);
        	objCF.set_titletext("장학금 신청하기");
        	objCF.set_formurl("stdWork::scholar_insert_pop.xfdl");
        	objCF.showModal(
        		this.getOwnerFrame(),
        		{code:this.code}, // 학번 넘기기
        		this,
        		"fn_callback_pop_t"
        	);
        };

        this.fn_callback_pop_t = function()
        {
        		this.reload();
        }




        this.seq="";
        this.Div00_Grid00_oncellclick = function(obj,e)
        {
        	this.seq = this.reqScholar_ds.getColumn(e.row, "seq");
        	this.transaction(
        		"selectSeqReqScholar",//id
        		"/scholarship/selectSeqReqScholar.scholarship",//url (절대경로)
        		"",//in_ds:U
        		"reqScholarCopy_ds=out_ds schFileList_ds=out_fDs",//()_out_ds
        		"seq="+this.seq,//argument
        		"fn_callback"
        		)
        };




        this.btn_down_onclick = function(obj,e)
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
        		this.close(this.seq);
        };



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
            this.addEventHandler("onload",this.scholarship_onload,this);
            this.Div00.form.Grid00.addEventHandler("oncelldblclick",this.Div00_Grid00_oncelldblclick,this);
            this.Div00.form.Grid00.addEventHandler("oncellclick",this.Div00_Grid00_oncellclick,this);
            this.Div00.form.btn_insert.addEventHandler("onclick",this.Div00_btn_insert_onclick,this);
            this.Div00.form.div_line.form.Grid00.addEventHandler("onheadclick",this.Grid00_onheadclick,this);
            this.Div00.form.div_line.form.btn_down.addEventHandler("onclick",this.btn_down_onclick,this);
        };

        this.loadIncludeScript("scholarship.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
