(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("prfAttend_std_pop");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(600,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_attend", this);
            obj._setContents("<ColumnInfo><Column id=\"classCode\" type=\"STRING\" size=\"256\"/><Column id=\"sCode\" type=\"STRING\" size=\"256\"/><Column id=\"sName\" type=\"STRING\" size=\"256\"/><Column id=\"attendDay\" type=\"STRING\" size=\"256\"/><Column id=\"attendState\" type=\"STRING\" size=\"256\"/><Column id=\"absenceReason\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_class", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"classPart\" type=\"STRING\" size=\"256\"/><Column id=\"className\" type=\"STRING\" size=\"256\"/><Column id=\"classSeq\" type=\"INT\" size=\"256\"/><Column id=\"classPoint\" type=\"STRING\" size=\"256\"/><Column id=\"proCode\" type=\"STRING\" size=\"256\"/><Column id=\"proName\" type=\"STRING\" size=\"256\"/><Column id=\"dept\" type=\"STRING\" size=\"256\"/><Column id=\"classTime\" type=\"STRING\" size=\"256\"/><Column id=\"classRoom\" type=\"STRING\" size=\"256\"/><Column id=\"limit\" type=\"STRING\" size=\"256\"/><Column id=\"grade\" type=\"STRING\" size=\"256\"/><Column id=\"classGoal\" type=\"STRING\" size=\"256\"/><Column id=\"classMethod\" type=\"STRING\" size=\"256\"/><Column id=\"classEvaluation\" type=\"STRING\" size=\"256\"/><Column id=\"classReferences\" type=\"STRING\" size=\"256\"/><Column id=\"reqState\" type=\"STRING\" size=\"256\"/><Column id=\"rejectMsg\" type=\"STRING\" size=\"256\"/><Column id=\"reg_date\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_attendState", this);
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"name\">출석</Col><Col id=\"id\">01</Col></Row><Row><Col id=\"name\">지각</Col><Col id=\"id\">02</Col></Row><Row><Col id=\"id\">03</Col><Col id=\"name\">조퇴</Col></Row><Row><Col id=\"name\">결석</Col><Col id=\"id\">04</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","33","110","527","430",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_attend");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_default");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"63\"/><Column size=\"55\"/><Column size=\"19\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"날짜\"/><Cell col=\"1\" text=\"출석 여부\"/><Cell col=\"2\" text=\"비고\"/></Band><Band id=\"body\"><Cell text=\"bind:attendDay\" displaytype=\"date\" edittype=\"none\"/><Cell col=\"1\" text=\"bind:attendState\" displaytype=\"combotext\" edittype=\"none\" combodatacol=\"name\" combodataset=\"ds_attendState\" combocodecol=\"id\"/><Cell col=\"2\" edittype=\"none\" expandshow=\"expr:attendState == &quot;04&quot; ? &quot;show&quot;  : &quot;hide&quot;\" textAlign=\"center\" text=\"expr:attendState == &quot;04&quot; ? &quot;기타 &quot;  : &quot;&quot;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","41","76","30","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("지각 :");
            this.addChild(obj.name, obj);

            obj = new Static("sta_countStateB","82","76","30","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","123","76","30","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("조퇴 :");
            this.addChild(obj.name, obj);

            obj = new Static("sta_countStateC","164","76","30","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_countStateD","246","76","30","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","205","76","30","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("결석 :");
            this.addChild(obj.name, obj);

            obj = new ProgressBar("ProgressBar00","30","50","530","25",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("출석률");
            obj.set_smooth("true");
            obj.set_cssclass("pgb_default");
            obj.set_min("0");
            obj.set_max("100");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00","370","76","190","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("*지각·조퇴 3회는 결석 1회로 산정");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","250","556","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("닫기");
            obj.set_cssclass("btn_can");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","30","10","30","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("학번 :");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01","164","10","30","30",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("이름 :");
            this.addChild(obj.name, obj);

            obj = new Static("sta_sCode","61","10","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_sName","195","10","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",600,600,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("prfAttend_std_pop.xfdl", function() {
        this.sCode="";
        this.cCode="";

        this.prfAttend_std_pop_onload = function(obj,e)
        {
        	this.sCode = this.parent.sCode;
        	this.cCode = this.parent.cCode;
        	var sName = this.parent.sName;

        	trace(this.sCode + ":"+ this.cCode +":"+ sName);
        	this.sta_sCode.set_text(this.sCode);
        	this.sta_sName.set_text(sName);

        	this.transaction(
        		"selectAttend",//id
        		"/selectOneAttend.nex",//url (절대경로)
        		"",//in_ds:U
        		"ds_attend=out_ds",//()_out_ds
        		"sCode="+this.sCode+" cCode="+this.cCode,//argument
        		"fn_callback_attend"
        	);
        };


        this.Grid00_oncellclick = function(obj,e)
        {
        	var cValue = this.Grid00.getCellText(e.row,1);
        	if(e.cell == 2 && cValue == "결석")
        	{
        		var aState = this.ds_attend.getColumn(e.cell,"attendState");

        		var objCF = new ChildFrame();
        		var x = this.width/2-150;
        		var y = this.height/2-100;
        		objCF.init("attend_state_pop",x,y,300,200);
        		objCF.set_titletext("기타 상세보기");
        		objCF.set_formurl("stdWork::attend_state_pop.xfdl");
        		objCF.showModal(
        			this.getOwnerFrame(),
        			{aState:aState}, // 모달창에 결석 메모 넘기기
        			this,
        			"fn_callback_attendS"
        		);
        	}
        };

        //출석 받아오면 ----- 수업 트랜잭션 날리기
        this.fn_callback_attend = function()
        {
        	this.transaction(
        		"classList",//id
        		"/classList.nex",//url (절대경로)
        		"",//in_ds:U
        		"ds_class=out_ds",//()_out_ds
        		"",//argument
        		"fn_callback_class"
        	)
        }

        //수업 리스트 받아오면 콜백
        this.fn_callback_class = function()
        {
        	var entireCount=""; // 전체 출석해야할 일 수
        	var objDs = this.ds_class;
        	for(var i=0; i< objDs.getRowCount(); i++)
        	{
        		var cSeq = objDs.getColumn(i,"classSeq");
        		if (cSeq == this.cCode)
        		{
        			var cTime = objDs.getColumn(i,"classTime").split(")"); // ) 로 구분
        			entireCount = (cTime.length-1)*15; // 총 수업 일수
        		}

        	}

        	//출석 일 수
        	var arrA = this.ds_attend.extractRows("attendState==01");
        	var countStateA = arrA.length;
        	//지각 일 수
        	var arrB = this.ds_attend.extractRows("attendState==02");
        	var countStateB = arrB.length;
        	//조퇴 일 수
        	var arrC = this.ds_attend.extractRows("attendState==03");
        	var countStateC = arrC.length;
        	//지각 일 수
        	var arrD = this.ds_attend.extractRows("attendState==04");
        	var countStateD = arrD.length;


        	//지각 or 조퇴 가 합해서 3회 이상 되면 결석 처리
        	var notAttend = countStateB+countStateC;
        	for(var i=1; i<=notAttend; i++)
        	{
        		if(i%3 == 0)
        		{
        			countStateD = countStateD+1;
        		} else
        		{
        			countStateA = countStateA+1;
        		}

        		this.sta_countStateB.set_text(countStateB+"회"); // 지각 #회
        		this.sta_countStateC.set_text(countStateC+"회"); // 조퇴 #회
        		this.sta_countStateD.set_text(countStateD+"회"); // 결석 #회

        		this.ProgressBar00.set_text("출석률 "+nexacro.round((countStateA/entireCount*100),2)+" % ("+countStateA+"일 / "+entireCount+"일)");
        		this.ProgressBar00.set_pos(nexacro.round((countStateA/entireCount*100),2));
        	}

        }

        this.Button00_onclick = function(obj,e)
        {
        	this.close();
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.prfAttend_std_pop_onload,this);
            this.Grid00.addEventHandler("oncellclick",this.Grid00_oncellclick,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.ds_attend.addEventHandler("oncolumnchanged",this.ds_attend_oncolumnchanged,this);
        };

        this.loadIncludeScript("prfAttend_std_pop.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
