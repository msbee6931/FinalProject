(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("prfAttend");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1080,520);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_class", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"classPart\" type=\"STRING\" size=\"256\"/><Column id=\"className\" type=\"STRING\" size=\"256\"/><Column id=\"classSeq\" type=\"INT\" size=\"256\"/><Column id=\"classPoint\" type=\"STRING\" size=\"256\"/><Column id=\"proCode\" type=\"STRING\" size=\"256\"/><Column id=\"proName\" type=\"STRING\" size=\"256\"/><Column id=\"dept\" type=\"STRING\" size=\"256\"/><Column id=\"classTime\" type=\"STRING\" size=\"256\"/><Column id=\"classRoom\" type=\"STRING\" size=\"256\"/><Column id=\"limit\" type=\"STRING\" size=\"256\"/><Column id=\"grade\" type=\"STRING\" size=\"256\"/><Column id=\"classGoal\" type=\"STRING\" size=\"256\"/><Column id=\"classMethod\" type=\"STRING\" size=\"256\"/><Column id=\"classEvaluation\" type=\"STRING\" size=\"256\"/><Column id=\"classReferences\" type=\"STRING\" size=\"256\"/><Column id=\"reqState\" type=\"STRING\" size=\"256\"/><Column id=\"rejectMsg\" type=\"STRING\" size=\"256\"/><Column id=\"reg_date\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_attend", this);
            obj._setContents("<ColumnInfo><Column id=\"classCode\" type=\"STRING\" size=\"256\"/><Column id=\"sCode\" type=\"STRING\" size=\"256\"/><Column id=\"sName\" type=\"STRING\" size=\"256\"/><Column id=\"attendDay\" type=\"STRING\" size=\"256\"/><Column id=\"attendState\" type=\"STRING\" size=\"256\"/><Column id=\"absenceReason\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_stdClass", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"sCode\" type=\"INT\" size=\"256\"/><Column id=\"sName\" type=\"STRING\" size=\"256\"/><Column id=\"classCode\" type=\"INT\" size=\"256\"/><Column id=\"basket\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","30","38","1021","452",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_border("1px solid #c1c1c1");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","74","51","275","240",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_class");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"88\"/><Column size=\"233\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"과목코드\"/><Cell col=\"1\" text=\"과목명\"/></Band><Band id=\"body\"><Cell text=\"bind:classSeq\" displaytype=\"mask\" maskeditformat=\"########\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:className\" textAlign=\"center\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","29","520",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_visible("false");
            obj.set_background("RGBA(236,135,135,0.71)");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","30","9","200","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("출결조회");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","80","0","800","10",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_visible("false");
            obj.set_background("RGBA(236,135,135,0.71)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","1051","0","29","520",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_visible("false");
            obj.set_background("RGBA(236,135,135,0.71)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","100","490","800","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_visible("false");
            obj.set_background("RGBA(236,135,135,0.71)");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","420","90","545","290",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_binddataset("ds_stdClass");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"162\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"학번\"/><Cell col=\"1\" text=\"이름\"/><Cell col=\"2\" text=\"출석률\"/></Band><Band id=\"body\"><Cell text=\"bind:sCode\"/><Cell col=\"1\" text=\"bind:sName\"/><Cell col=\"2\" text=\"bind:basket\" displaytype=\"progressbarcontrol\" progressbarsmooth=\"true\" progressbarblockgap=\"1\" progressbarblocksize=\"1\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","108","60","112","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("내 관리 강좌");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","475","60","140","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","430","60","45","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("과목명 :");
            this.addChild(obj.name, obj);

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
        this.registerScript("prfAttend.xfdl", function() {
        this.classSeq="";
<<<<<<< HEAD
        this.prfAttend_onload = function(obj,e)
        {
        	var proCode = "91515073"; // 교수 코드 로그인 후 받아올 예정
=======
        this.objApp = nexacro.getApplication();
        this.code=this.objApp.gds_professor.getColumn(0,'p_seq');
        this.prfAttend_onload = function(obj,e)
        {
>>>>>>> 16033e5541c84931c834d0d198cd703946ae2ecf

        	var objDate = new Date();
        	if(objDate.getMonth()+1 && objDate.getMonth()+1 < 8){
        		var startTime = objDate.getFullYear()+"0101";
        		var endTime = objDate.getFullYear()+"0731";
        	} else{
        		var startTime = objDate.getFullYear()+"0801";
        		var endTime = objDate.getFullYear()+"1231";
        	}

        	this.transaction(
        		"proClassList"
        		,"/proClassList.nex"
        		,""
        		,"ds_class=out_ds"
<<<<<<< HEAD
        		,"proCode="+proCode +" startTime="+startTime + " endTime="+endTime
=======
        		,"proCode="+this.code +" startTime="+startTime + " endTime="+endTime
>>>>>>> 16033e5541c84931c834d0d198cd703946ae2ecf
        		,"fn_callback_proClass"
        	);
        };


        this.Div00_Grid00_oncellclick = function(obj,e)
        {
        	this.classSeq = this.ds_class.getColumn(e.row,"classSeq");
        	var className = this.ds_class.getColumn(e.row,"className");

        	this.sta_title.set_text(className);

        	this.transaction(
        		"stdList"
        		,"/stdListSeq.nex"
        		,""
        		,"ds_stdClass=out_ds"
        		,"classCode="+this.classSeq
        		,"fn_callback_stdList"
        	);
        };

        this.fn_callback_stdList = function()
        {

        	// 해당 수업을 듣는 학생들의 모든 출석을 불러옴
        	this.transaction(
        		"selectAttend",//id
        		"/selectAttend.nex",//url (절대경로)
        		"",//in_ds:U
        		"ds_attend=out_ds",//()_out_ds
        		"cCode="+this.classSeq,//argument
        		"fn_callback_attend"
        	);

        };


        this.fn_callback_attend =function()
        {

        	var entireCount=""; // 전체 출석해야할 일 수
        	var objDs = this.ds_class;
        	for(var i=0; i< objDs.getRowCount(); i++)
        	{
        		var cSeq = objDs.getColumn(i,"classSeq");

        		if (cSeq == this.classSeq)
        		{
        			var cTime = objDs.getColumn(i,"classTime").split(")"); // ) 로 구분
        			entireCount = (cTime.length-1)*15; // 총 수업 일수
        		}
        	}



        	for(var i=0; i<this.ds_stdClass.getRowCount();i++)
        	{
        		var codeS = this.ds_stdClass.getColumn(i,"sCode"); // std데이터셋의 i번째 학번
        		this.ds_stdClass.setColumn(i,"basket","test");//값 비워두기

        		this.ds_attend.filter("sCode=='"+codeS+"'"); // 학번으로 필터 attend 데이터셋 돌리기
        		var countStateA =0; //출석일 수
        		var countStateB =0; // 지각일 수
        		var countStateC =0; // 조퇴일 수
        		var countStateD=0; //결석일 수
        		var notAttend=0; // 지각+조퇴
        		//attend 데이터셋 돌림
        		for(var j=0; j<this.ds_attend.getRowCount();j++)
        		{
        			var aState = this.ds_attend.getColumn(j,"attendState") ; //ABCD 구분값
        			if(aState == 01)
        			{
        				countStateA += 1;
        			}
        			else if(aState == 02)
        			{
        				countStateB += 1;
        				countStateA += 1;
        			}
        			else if(aState == 03)
        			{
        				countStateC += 1;
        				countStateA += 1;
        			}
        			else if(aState == 04)
        			{
        				countStateD += 1;
        			}
        		}

        		var bc = countStateB+countStateC; //지각+ 조퇴
        		if(bc != 0)
        		{
        			for(var k=1;k<=bc;k++)
        			{
        			//3회 이상이면 결석으로 처리하기
        				if(k%3 == 0)
        				{
        					countStateD += 1;
        					countStateA -= countStateD;
        				}
        			}
        		}


        		var avg = nexacro.round(countStateA/entireCount*100,2);

        		this.ds_stdClass.setColumn(i,"basket",avg);
        		this.ds_attend.filter("");// 필터 초기화
        	}
        };




        this.Grid00_oncelldblclick = function(obj,e)
        {
        	var sCode = this.ds_stdClass.getColumn(e.row,"sCode");
        	var sName = this.ds_stdClass.getColumn(e.row,"sName");


        	//출결 조회 위한 모달창
        	var objCF = new ChildFrame();
        	var x = this.width/2-300;
        	var y = this.height/2-300;
        	objCF.init("attend_pop",x,y,600,600);
        	objCF.set_titletext(sName+" 학생 출결 조회 하기");
        	objCF.set_formurl("prfWork::prfAttend_std_pop.xfdl");
        	objCF.showModal(
        		this.getOwnerFrame(),
        		{sCode:sCode, sName:sName, cCode:this.classSeq}, // 모달창에 수업번호 값 넘기기
        		this,
        		"fn_callback_attendStd"
        	)
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.prfAttend_onload,this);
            this.Div00.form.Grid00.addEventHandler("oncellclick",this.Div00_Grid00_oncellclick,this);
            this.Grid00.addEventHandler("oncelldblclick",this.Grid00_oncelldblclick,this);
            this.ds_attend.addEventHandler("oncolumnchanged",this.ds_attend_oncolumnchanged,this);
        };

        this.loadIncludeScript("prfAttend.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
