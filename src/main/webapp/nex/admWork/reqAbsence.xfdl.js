(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("reqAbsence");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1080,520);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("absenceCode_ds", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">01</Col><Col id=\"name\">군입대</Col></Row><Row><Col id=\"code\">02</Col><Col id=\"name\">질병</Col></Row><Row><Col id=\"code\">03</Col><Col id=\"name\">가사사정</Col></Row><Row><Col id=\"code\">04</Col><Col id=\"name\">사고</Col></Row><Row><Col id=\"name\">기타</Col><Col id=\"code\">05</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("absence_ds", this);
            obj._setContents("<ColumnInfo><Column id=\"seq\" type=\"INT\" size=\"256\"/><Column id=\"std_code\" type=\"STRING\" size=\"256\"/><Column id=\"sDate\" type=\"STRING\" size=\"256\"/><Column id=\"eDate\" type=\"STRING\" size=\"256\"/><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"writeDate\" type=\"STRING\" size=\"256\"/><Column id=\"checkValue\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","0","0","29",null,null,"0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_visible("false");
            obj.set_background("RGBA(236,135,135,0.71)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","1051","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_visible("false");
            obj.set_background("RGBA(236,135,135,0.71)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","80","0","800","10",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_visible("false");
            obj.set_background("RGBA(236,135,135,0.71)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","140","490",null,null,"140","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_visible("false");
            obj.set_background("RGBA(236,135,135,0.71)");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","30","10",null,null,"29","30",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Div00");
            obj.set_cssclass("div_line");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","5","29",null,null,"4","59",null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_binddataset("absence_ds");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_default");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"20\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"학번\"/><Cell col=\"2\" text=\"작성날짜\"/><Cell col=\"3\" text=\"읽음여부\"/></Band><Band id=\"body\"><Cell text=\"bind:seq\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:std_code\" textAlign=\"center\" displaytype=\"text\"/><Cell col=\"2\" text=\"bind:writeDate\" textAlign=\"center\" displaytype=\"date\"/><Cell col=\"3\" text=\"bind:checkValue\" textAlign=\"center\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_del",null,null,"100","25","4","12",null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("삭제");
            obj.set_cssclass("btn_del");
            this.Div00.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1080,520,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("reqAbsence.xfdl", function() {
        this.reqAbsence_onload = function(obj,e)
        {
        	this.transaction(
        		"selectAll.absence",//id
        		"/absence/selectAll.absence",//url (절대경로)
        		"",//in_ds:U
        		"absence_ds=out_ds",//()_out_ds
        		"",//argument
        		"fn_callback"
        		)
        };

        this.Div00_Grid00_oncelldblclick = function(obj,e)
        {
        	var seq = this.absence_ds.getColumn(e.row,"seq");
        	var std_code = this.absence_ds.getColumn(e.row,"std_code");

        	//장학금 신청서 입력을 위한 모달창
        	var objCF = new ChildFrame();
        	objCF.init("reqAbsence_pop",200,100,900,600);
        	objCF.set_titletext("휴학신청서 보기");
        	objCF.set_formurl("admWork::reqAbsence_pop.xfdl");
        	objCF.showModal(
        		this.getOwnerFrame(),
        		{seq:seq, std_code:std_code}, // seq 넘기기
        		this,
        		"fn_callback_pop_read"
        	);
        		this.transaction(
        		"updateReadAbs.absence",//id
        		"/absence/updateReadAbs.absence",//url (절대경로)
        		"",//in_ds:U
        		"",//()_out_ds
        		"seq="+this.seq,//argument
        		"fn_callback_read"
        		)
        };

        this.fn_callback_pop_read =function()
        {
        	this.reload();
        }

        this.seq="";

        this.Div00_Grid00_oncellclick = function(obj,e)
        {
        		this.seq = this.absence_ds.getColumn(e.row,"seq");
        };

        this.Div00_btn_del_onclick = function(obj,e)
        {
        	var nRow = this.absence_ds.findRow("seq",this.seq);
        	this.absence_ds.deleteRow(nRow);
        	this.transaction(
        		"deleteReqAbs.absence",//id
        		"/absence/deleteReqAbs.absence",//url (절대경로)
        		"",//in_ds:U
        		"",//()_out_ds
        		"seq="+this.seq,//argument
        		"fn_callback"
        		)
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.reqAbsence_onload,this);
            this.Div00.form.Grid00.addEventHandler("oncelldblclick",this.Div00_Grid00_oncelldblclick,this);
            this.Div00.form.Grid00.addEventHandler("oncellclick",this.Div00_Grid00_oncellclick,this);
            this.Div00.form.btn_del.addEventHandler("onclick",this.Div00_btn_del_onclick,this);
        };

        this.loadIncludeScript("reqAbsence.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
