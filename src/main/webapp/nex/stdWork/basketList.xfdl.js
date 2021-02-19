(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("basketList");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(900,480);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_class", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"classPart\" type=\"STRING\" size=\"256\"/><Column id=\"className\" type=\"STRING\" size=\"256\"/><Column id=\"classSeq\" type=\"INT\" size=\"256\"/><Column id=\"classPoint\" type=\"STRING\" size=\"256\"/><Column id=\"proCode\" type=\"STRING\" size=\"256\"/><Column id=\"proName\" type=\"STRING\" size=\"256\"/><Column id=\"dept\" type=\"STRING\" size=\"256\"/><Column id=\"classTime\" type=\"STRING\" size=\"256\"/><Column id=\"classRoom\" type=\"STRING\" size=\"256\"/><Column id=\"limit\" type=\"STRING\" size=\"256\"/><Column id=\"basketLimit\" type=\"STRING\" size=\"256\"/><Column id=\"grade\" type=\"STRING\" size=\"256\"/><Column id=\"classGoal\" type=\"STRING\" size=\"256\"/><Column id=\"classMethod\" type=\"STRING\" size=\"256\"/><Column id=\"classEvaluation\" type=\"STRING\" size=\"256\"/><Column id=\"classReferences\" type=\"STRING\" size=\"256\"/><Column id=\"reqState\" type=\"STRING\" size=\"256\"/><Column id=\"rejectMsg\" type=\"STRING\" size=\"256\"/><Column id=\"reg_date\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_stdClass", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"sCode\" type=\"INT\" size=\"256\"/><Column id=\"sName\" type=\"STRING\" size=\"256\"/><Column id=\"classCode\" type=\"INT\" size=\"256\"/><Column id=\"basket\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_myClass", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"classPart\" type=\"STRING\" size=\"256\"/><Column id=\"className\" type=\"STRING\" size=\"256\"/><Column id=\"classSeq\" type=\"INT\" size=\"256\"/><Column id=\"classPoint\" type=\"STRING\" size=\"256\"/><Column id=\"proCode\" type=\"STRING\" size=\"256\"/><Column id=\"proName\" type=\"STRING\" size=\"256\"/><Column id=\"dept\" type=\"STRING\" size=\"256\"/><Column id=\"classTime\" type=\"STRING\" size=\"256\"/><Column id=\"classRoom\" type=\"STRING\" size=\"256\"/><Column id=\"limit\" type=\"STRING\" size=\"256\"/><Column id=\"basketLimit\" type=\"STRING\" size=\"256\"/><Column id=\"grade\" type=\"STRING\" size=\"256\"/><Column id=\"classGoal\" type=\"STRING\" size=\"256\"/><Column id=\"classMethod\" type=\"STRING\" size=\"256\"/><Column id=\"classEvaluation\" type=\"STRING\" size=\"256\"/><Column id=\"classReferences\" type=\"STRING\" size=\"256\"/><Column id=\"reqState\" type=\"STRING\" size=\"256\"/><Column id=\"rejectMsg\" type=\"STRING\" size=\"256\"/><Column id=\"reg_date\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_stdTimeTable", this);
            obj._setContents("<ColumnInfo><Column id=\"sCode\" type=\"INT\" size=\"256\"/><Column id=\"classCode\" type=\"INT\" size=\"256\"/><Column id=\"time\" type=\"STRING\" size=\"256\"/><Column id=\"mon\" type=\"STRING\" size=\"256\"/><Column id=\"tue\" type=\"STRING\" size=\"256\"/><Column id=\"wed\" type=\"STRING\" size=\"256\"/><Column id=\"thu\" type=\"STRING\" size=\"256\"/><Column id=\"fri\" type=\"STRING\" size=\"256\"/><Column id=\"sat\" type=\"STRING\" size=\"256\"/><Column id=\"sun\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"time\">1교시</Col></Row><Row><Col id=\"time\">2교시</Col></Row><Row><Col id=\"time\">3교시</Col></Row><Row><Col id=\"time\">4교시</Col></Row><Row><Col id=\"time\">5교시</Col></Row><Row><Col id=\"time\">6교시</Col></Row><Row><Col id=\"time\">7교시</Col></Row><Row><Col id=\"time\">8교시</Col></Row><Row><Col id=\"time\">9교시</Col></Row><Row><Col id=\"time\">10교시</Col></Row><Row><Col id=\"time\">11교시</Col></Row><Row><Col id=\"time\">12교시</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_stdTimeTableCopy", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"sCode\" type=\"INT\" size=\"256\"/><Column id=\"classCode\" type=\"INT\" size=\"256\"/><Column id=\"time\" type=\"STRING\" size=\"256\"/><Column id=\"mon\" type=\"STRING\" size=\"256\"/><Column id=\"tue\" type=\"STRING\" size=\"256\"/><Column id=\"wed\" type=\"STRING\" size=\"256\"/><Column id=\"thu\" type=\"STRING\" size=\"256\"/><Column id=\"fri\" type=\"STRING\" size=\"256\"/><Column id=\"sat\" type=\"STRING\" size=\"256\"/><Column id=\"sun\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_classCode", this);
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","20","45","860","370",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_myClass");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"31\"/><Column size=\"63\"/><Column size=\"43\"/><Column size=\"158\"/><Column size=\"81\"/><Column size=\"45\"/><Column size=\"59\"/><Column size=\"84\"/><Column size=\"152\"/><Column size=\"50\"/><Column size=\"90\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"이수구분\"/><Cell col=\"2\" text=\"학년\"/><Cell col=\"3\" text=\"과목명\"/><Cell col=\"4\" text=\"과목코드\"/><Cell col=\"5\" text=\"학점\"/><Cell col=\"6\" text=\"담당교수\" textAlign=\"center\"/><Cell col=\"7\" text=\"학과\"/><Cell col=\"8\" text=\"강의시간\"/><Cell col=\"9\" text=\"강의실\"/><Cell col=\"10\" text=\"신청/제한인원\"/></Band><Band id=\"body\"><Cell text=\"bind:chk\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:classPart\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:grade\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:className\" textAlign=\"center\" wordWrap=\"english\" tooltiptext=\"상세보기\" textDecoration=\"underline\" cursor=\"pointer\"/><Cell col=\"4\" text=\"bind:classSeq\" textAlign=\"center\" maskeditformat=\"#########\" displaytype=\"mask\"/><Cell col=\"5\" text=\"bind:classPoint\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:proName\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:dept\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:classTime\" textAlign=\"center\" wordWrap=\"english\"/><Cell col=\"9\" text=\"bind:classRoom\" textAlign=\"center\"/><Cell col=\"10\" text=\"bind:limit\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","20","15","140","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("장바구니 리스트");
            obj.set_cssclass("sta_title");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","130","423","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("삭제");
            obj.set_cssclass("btn_del");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","20","423","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("신청");
            obj.set_cssclass("btn_default");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","780","423","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("닫기");
            obj.set_cssclass("btn_can");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","630","10","30","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("학점");
            this.addChild(obj.name, obj);

            obj = new Static("sta_point","670","10","40","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","1051","0","29","520",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_visible("false");
            obj.set_background("RGBA(236,135,135,0.71)");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",900,480,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("basketList.xfdl", function() {

        this.Button02_onclick = function(obj,e)
        {
        	this.close(this.code);
        };

        this.basketList_onload = function(obj,e)
        {
        	var sCode = this.parent.sCode;
        	var point = this.parent.point;
        	this.sta_point.set_text(point);
        	var objDate= new Date();
        	if(objDate.getMonth()+1 && objDate.getMonth()+1 < 8){
        		var startTime = objDate.getFullYear()+"0101";
        		var endTime = objDate.getFullYear()+"0731";
        	}else{
        		var startTime = objDate.getFullYear()+"0801";
        		var endTime = objDate.getFullYear()+"1231";
        	}
        	this.transaction(
        		"classList"
        		,"/classListYear.nex"
        		,""
        		,"ds_class=out_ds"
        		,"startTime="+startTime+" endTime="+endTime
        		,"fn_callback"
        	);
        	this.transaction(
        		"myBasketList"
        		,"/myBasketList.nex"
        		,""
        		,"ds_myClass=out_ds"
        		,"sCode="+sCode + " startTime="+startTime+" endTime="+endTime
        		,"fn_callback_myBasket"
        	);
        	//시간표 가져옴(신청 시 시간표와 비교하기 위해)
        	this.transaction(
        		"stdTimeTableList"
        		,"/stdTimeTableList.nex"
        		,""
        		,"ds_stdTimeTableCopy=out_ds"
        		,"sCode="+sCode  + " startTime="+startTime+" endTime="+endTime
        		,"fn_callback_TimeTable"
        	);
        };

        this.Grid00_onheadclick = function(obj,e)
        {
        	let flag = obj.getCellProperty("Head",0,"text");
        	let check = flag==0?1:0;
        	if(e.cell==0){
        		obj.setCellProperty("Head",0,"text",check);
        		for(let i = 0;i<this.ds_myClass.getRowCount();i++){
        			this.ds_myClass.setColumn(i,"chk",check);
        		}
        	}
        };
        this.fn_callback_TimeTable=function(){
        	var Time = new Array();
        	var Mon = new Array();
        	var Tue = new Array();
        	var Wed = new Array();
        	var Thu = new Array();
        	var Fri = new Array();
        	var Sat = new Array();
        	var Sun = new Array();
        	for(var i=this.ds_stdTimeTableCopy.getRowCount()-1; i >=0; i--){
        		Time[i] = this.ds_stdTimeTableCopy.getColumn(i,"time");
        		Time[i] = Time[i].replace("교시","")-1;
        		Mon[i] = this.ds_stdTimeTableCopy.getColumn(i,"mon");
        		Tue[i] = this.ds_stdTimeTableCopy.getColumn(i,"tue");
        		Wed[i] = this.ds_stdTimeTableCopy.getColumn(i,"wed");
        		Thu[i] = this.ds_stdTimeTableCopy.getColumn(i,"thu");
        		Fri[i] = this.ds_stdTimeTableCopy.getColumn(i,"fri");
        		Sat[i] = this.ds_stdTimeTableCopy.getColumn(i,"sat");
        		Sun[i] = this.ds_stdTimeTableCopy.getColumn(i,"sun");

        		var mon = this.ds_stdTimeTable.getColumn(Time[i],"mon");
        		var tue = this.ds_stdTimeTable.getColumn(Time[i],"tue");
        		var wed = this.ds_stdTimeTable.getColumn(Time[i],"wed");
        		var thu = this.ds_stdTimeTable.getColumn(Time[i],"thu");
        		var fri = this.ds_stdTimeTable.getColumn(Time[i],"fri");
        		var sat = this.ds_stdTimeTable.getColumn(Time[i],"sat");
        		var sun = this.ds_stdTimeTable.getColumn(Time[i],"sun");

        		if(mon == null || mon == ""){this.ds_stdTimeTable.setColumn(Time[i],"mon",Mon[i]);}
        		if(tue == null || tue == ""){this.ds_stdTimeTable.setColumn(Time[i],"tue",Tue[i]);}
        		if(wed == null || wed == ""){this.ds_stdTimeTable.setColumn(Time[i],"wed",Wed[i]);}
        		if(thu == null || thu == ""){this.ds_stdTimeTable.setColumn(Time[i],"thu",Thu[i]);}
        		if(fri == null || fri == ""){this.ds_stdTimeTable.setColumn(Time[i],"fri",Fri[i]);}
        		if(sat == null || sat == ""){this.ds_stdTimeTable.setColumn(Time[i],"sat",Sat[i]);}
        		if(sun == null || sun == ""){this.ds_stdTimeTable.setColumn(Time[i],"sun",Sun[i]);}
        	}
        }
        this.Grid00_oncellclick = function(obj,e)
        {
        	if(e.col == 0){
        		if(this.ds_myClass.getColumn(e.row,"chk")==0){
        			obj.setCellProperty("Head",0,"text",0);
        		}
        	}
        	if(e.col == 3){
        		var classSeq = this.ds_myClass.getColumn(e.row,"classSeq");
        		var proCode = this.ds_myClass.getColumn(e.row,"proCode");
        		let x = 1720/2-500;
        		let y = 829/2-340;
        		let objCF = new ChildFrame();
        		objCF.init("popAdd",x,y,1000,680,0,0,"prfWork::detail.xfdl");
        		objCF.set_showtitlebar(false);
        		objCF.showModal(this.getOwnerFrame(),{classSeq:classSeq, proCode : proCode, view : 'Y'},this,"fn_callback");
         	}
        };

        this.Button01_onclick = function(obj,e)
        {
        	var arr = this.ds_myClass.extractRows("chk==1");
        	var sCode = this.parent.sCode;
        	this.ds_stdTimeTableCopy.clearData();
        	this.ds_stdClass.clearData();
        	if(arr.length == 0 || arr==-1){
        		alert("선택된 항목이 없습니다");
        	}else{
        		for(var k=0; k<arr.length; k++){
        			var point = this.ds_myClass.getColumn(arr[k],"classPoint").replace("학점","");
        			var myPoint = this.sta_point.text;
        			var mypoint = 4;
        			if(nexacro.toNumber(myPoint) - nexacro.toNumber(point) < 0){
        				continue;
        			}else{
        				//시간표 비교해서 넣을 수 있는지 없는지 확인
        				var classTime = this.ds_myClass.getColumn(arr[k],"classTime");
        				var className = this.ds_myClass.getColumn(arr[k],"className");
        				var classCode = this.ds_myClass.getColumn(arr[k],"classSeq");
        				trace(classCode);
        				classTime = nexacro.replaceAll(classTime,"교시","");
        				var time = classTime.split(")"); //요일(교시
        				for(var i=0; i<time.length-1; i++){
        					var weeks = time[i].split("("); //요일
        					var week = weeks[1].split(" "); //교시
        					var col ="";
        					if(weeks[0] =="월"){col="mon"}
        					else if(weeks[0] =="화"){col="tue"}
        					else if(weeks[0] =="수"){col="wed"}
        					else if(weeks[0] =="목"){col="thu"}
        					else if(weeks[0] =="금"){col="fri"}
        					else if(weeks[0] =="토"){col="sat"}
        					else if(weeks[0] =="일"){col="sun"}
        					for(var j=0; j<week.length; j++){
        						var cName = this.ds_stdTimeTable.getColumn(week[j]-1,col);
        						//인원수 확인

        						if(cName.substring(cName.length-1,cName.length)=="*"){//비어있을 경우는 없기 때문에 있다면 무조건 장바구니 내용 기존 내용 삭제 후 insert작업
        							var addRow = this.ds_stdTimeTableCopy.addRow();
        							this.ds_stdTimeTableCopy.setColumn(addRow,col,cName.substring(0,cName.length-6));
        							this.ds_stdTimeTableCopy.setColumn(addRow,"time",week[j]+"교시");
        							this.ds_stdTimeTableCopy.setColumn(addRow,"classCode",classCode);
        							this.ds_stdTimeTableCopy.setColumn(addRow,"sCode",sCode);
        						}
        					}//var j
        				} // var i
        				var addRow2 = this.ds_stdClass.addRow();
        				var sName = this.parent.sName;
        				this.ds_stdClass.setColumn(addRow2,"sCode",sCode);
        				this.ds_stdClass.setColumn(addRow2,"sName",sName);
        				this.ds_stdClass.setColumn(addRow2,"classCode",classCode);
        				this.ds_stdClass.setColumn(addRow2,"basket",'N');
        			}//point else
        		}//var k
        		//전부 transaction 후 해당 row삭제
        		this.transaction(
        			"basketAllRegist"
        			,"/basketAllRegist.nex"
        			,"in_ds1=ds_stdTimeTableCopy:U in_ds2=ds_stdClass:U"
        			,""
        			,"ds_myClass=out_ds"
        			,"fn_callback_allRegist"
        		)
        	}
        };
        this.code="";
        this.fn_callback_allRegist=function(){

        	var code = this.code.split("/");
        	for(var i=0; i<code.length; i++){
        		var nRow = this.ds_myClass.findRow("classSeq",code[i]);
        		this.ds_myClass.deleteRow(nRow);
        		var addRow = this.ds_classCode.addRow();
        		this.ds_classCode.setColumn(addRow,"id",code[i])
        	}
        }


        this.Button00_onclick = function(obj,e)
        {
        	var arr = this.ds_myClass.extractRows("chk==1");
        	var sCode = this.parent.sCode;
        	this.ds_stdClass.clearData();
        	for(var i=0; i<arr.length; i++){
        		var classCode = this.ds_myClass.getColumn(arr[i],"classSeq");
        		var arr2 = this.ds_stdTimeTableCopy.extractRows("classCode=='"+classCode+"'");
        		for(var j=0; j<arr2.length; j++){
        			this.ds_stdTimeTableCopy.setColumn(arr2[j],"mon","");
        			this.ds_stdTimeTableCopy.setColumn(arr2[j],"tue","");
        			this.ds_stdTimeTableCopy.setColumn(arr2[j],"wed","");
        			this.ds_stdTimeTableCopy.setColumn(arr2[j],"thu","");
        			this.ds_stdTimeTableCopy.setColumn(arr2[j],"fri","");
        			this.ds_stdTimeTableCopy.setColumn(arr2[j],"sat","");
        			this.ds_stdTimeTableCopy.setColumn(arr2[j],"sun","");
        		}
        		var addRow2 = this.ds_stdClass.addRow();
        		this.ds_stdClass.setColumn(addRow2,"sCode",sCode);
        		this.ds_stdClass.setColumn(addRow2,"classCode",classCode);
        	}


        	this.transaction(
        		"basketAllDelete"
        		,"/basketAllDelete.nex"
        		,"in_ds1=ds_stdTimeTableCopy:U in_ds2=ds_stdClass"
        		,""
        		,""
        		,"fn_callback"
        	);
        	this.ds_myClass.deleteMultiRows(arr);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.basketList_onload,this);
            this.Grid00.addEventHandler("onheadclick",this.Grid00_onheadclick,this);
            this.Grid00.addEventHandler("oncellclick",this.Grid00_oncellclick,this);
            this.Static01_00_00.addEventHandler("onclick",this.Div00_Static01_onclick,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.Button02.addEventHandler("onclick",this.Button02_onclick,this);
        };

        this.loadIncludeScript("basketList.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
