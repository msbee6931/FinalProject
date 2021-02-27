(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("timeSchule");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1080,520);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_stdTimeTable", this);
            obj._setContents("<ColumnInfo><Column id=\"sCode\" type=\"INT\" size=\"256\"/><Column id=\"classCode\" type=\"INT\" size=\"256\"/><Column id=\"time\" type=\"STRING\" size=\"256\"/><Column id=\"mon\" type=\"STRING\" size=\"256\"/><Column id=\"tue\" type=\"STRING\" size=\"256\"/><Column id=\"wed\" type=\"STRING\" size=\"256\"/><Column id=\"thu\" type=\"STRING\" size=\"256\"/><Column id=\"fri\" type=\"STRING\" size=\"256\"/><Column id=\"sat\" type=\"STRING\" size=\"256\"/><Column id=\"sun\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"time\">1교시</Col></Row><Row><Col id=\"time\">2교시</Col></Row><Row><Col id=\"time\">3교시</Col></Row><Row><Col id=\"time\">4교시</Col></Row><Row><Col id=\"time\">5교시</Col></Row><Row><Col id=\"time\">6교시</Col></Row><Row><Col id=\"time\">7교시</Col></Row><Row><Col id=\"time\">8교시</Col></Row><Row><Col id=\"time\">9교시</Col></Row><Row><Col id=\"time\">10교시</Col></Row><Row><Col id=\"time\">11교시</Col></Row><Row><Col id=\"time\">12교시</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_stdTimeTableCopy", this);
            obj._setContents("<ColumnInfo><Column id=\"sCode\" type=\"INT\" size=\"256\"/><Column id=\"classCode\" type=\"INT\" size=\"256\"/><Column id=\"time\" type=\"STRING\" size=\"256\"/><Column id=\"mon\" type=\"STRING\" size=\"256\"/><Column id=\"tue\" type=\"STRING\" size=\"256\"/><Column id=\"wed\" type=\"STRING\" size=\"256\"/><Column id=\"thu\" type=\"STRING\" size=\"256\"/><Column id=\"fri\" type=\"STRING\" size=\"256\"/><Column id=\"sat\" type=\"STRING\" size=\"256\"/><Column id=\"sun\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","0","0","29",null,null,"0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_visible("false");
            obj.set_background("RGBA(236,135,135,0.71)");
            this.addChild(obj.name, obj);

<<<<<<< HEAD
            obj = new Static("Static00_01","80","0","800","10",null,null,null,null,null,null,this);
            obj.set_taborder("1");
=======
            obj = new Static("Static01","30","9","200","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("시간표 조회");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","80","0","800","10",null,null,null,null,null,null,this);
            obj.set_taborder("2");
>>>>>>> f1e3f9aa2e576c89823bba1e52c80fa784a5bf97
            obj.set_visible("false");
            obj.set_background("RGBA(236,135,135,0.71)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","1050","0","30",null,null,"0",null,null,null,null,this);
<<<<<<< HEAD
            obj.set_taborder("2");
=======
            obj.set_taborder("3");
>>>>>>> f1e3f9aa2e576c89823bba1e52c80fa784a5bf97
            obj.set_visible("false");
            obj.set_background("RGBA(236,135,135,0.71)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","100","490","800","30",null,null,null,null,null,null,this);
<<<<<<< HEAD
            obj.set_taborder("3");
=======
            obj.set_taborder("4");
>>>>>>> f1e3f9aa2e576c89823bba1e52c80fa784a5bf97
            obj.set_visible("false");
            obj.set_background("RGBA(236,135,135,0.71)");
            this.addChild(obj.name, obj);

<<<<<<< HEAD
            obj = new Grid("Grid00","29","40",null,"400","30",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_stdTimeTable");
            obj.set_cssclass("grd_default");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"105\"/><Column size=\"105\"/><Column size=\"105\"/><Column size=\"105\"/><Column size=\"105\"/><Column size=\"105\"/><Column size=\"105\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" text=\"월요일\"/><Cell col=\"2\" text=\"화요일\"/><Cell col=\"3\" text=\"수요일\"/><Cell col=\"4\" text=\"목요일\"/><Cell col=\"5\" text=\"금요일\"/><Cell col=\"6\" text=\"토요일\"/><Cell col=\"7\" text=\"일요일\" wordWrap=\"english\"/></Band><Band id=\"body\"><Cell text=\"bind:time\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:mon\" textAlign=\"center\" wordWrap=\"english\"/><Cell col=\"2\" text=\"bind:tue\" textAlign=\"center\" wordWrap=\"english\"/><Cell col=\"3\" text=\"bind:wed\" textAlign=\"center\" wordWrap=\"english\"/><Cell col=\"4\" text=\"bind:thu\" textAlign=\"center\" wordWrap=\"english\"/><Cell col=\"5\" text=\"bind:fri\" textAlign=\"center\" wordWrap=\"english\"/><Cell col=\"6\" text=\"bind:sat\" textAlign=\"center\" wordWrap=\"english\"/><Cell col=\"7\" text=\"bind:sun\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_exel","Grid00:-100","Grid00:8","100","25",null,null,null,null,null,null,this);
            obj.set_taborder("5");
=======
            obj = new Grid("Grid00","140","40","800","400",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_stdTimeTable");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"105\"/><Column size=\"105\"/><Column size=\"105\"/><Column size=\"105\"/><Column size=\"105\"/><Column size=\"105\"/><Column size=\"105\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" text=\"월요일\"/><Cell col=\"2\" text=\"화요일\"/><Cell col=\"3\" text=\"수요일\"/><Cell col=\"4\" text=\"목요일\"/><Cell col=\"5\" text=\"금요일\"/><Cell col=\"6\" text=\"토요일\"/><Cell col=\"7\" text=\"일요일\" wordWrap=\"english\"/></Band><Band id=\"body\"><Cell text=\"bind:time\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:mon\" textAlign=\"center\" wordWrap=\"english\"/><Cell col=\"2\" text=\"bind:tue\" textAlign=\"center\" wordWrap=\"english\"/><Cell col=\"3\" text=\"bind:wed\" textAlign=\"center\" wordWrap=\"english\"/><Cell col=\"4\" text=\"bind:thu\" textAlign=\"center\" wordWrap=\"english\"/><Cell col=\"5\" text=\"bind:fri\" textAlign=\"center\" wordWrap=\"english\"/><Cell col=\"6\" text=\"bind:sat\" textAlign=\"center\" wordWrap=\"english\"/><Cell col=\"7\" text=\"bind:sun\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_exel","830","448","100","25",null,null,null,null,null,null,this);
            obj.set_taborder("6");
>>>>>>> f1e3f9aa2e576c89823bba1e52c80fa784a5bf97
            obj.set_text("Exel");
            obj.set_cssclass("btn_exel");
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
        this.registerScript("timeSchedule.xfdl", function() {
        this.objApp = nexacro.getApplication();
        this.sCode=this.objApp.gds_students.getColumn(0,'s_seq');
        this.timeSchule_onload = function(obj,e)
        {

        	//1~8월까지 나누고 8~12월 나누기
        	var objDate= new Date();
        	if(objDate.getMonth()+1 && objDate.getMonth()+1 < 8){
        		var startTime = objDate.getFullYear()+"0101"; // ex20210101
        		var endTime = objDate.getFullYear()+"0731"; //ex20210731
        	}else{
        		var startTime = objDate.getFullYear()+"0801";
        		var endTime = objDate.getFullYear()+"1231";
        	}

        	this.transaction(
        		"stdTimeTableList"
        		,"/stdTimeTableList.nex"
        		,""
        		,"ds_stdTimeTableCopy=out_ds"
        		,"sCode="+this.sCode + " startTime="+startTime+" endTime="+endTime
        		,"fn_callback_TimeTable"
        	);
        };



        //데이터셋 수신 완료 시 실행할 콜백 함수
        this.fn_callback_TimeTable=function()
        {
        	var Time = new Array();
        	var Mon = new Array();
        	var Tue = new Array();
        	var Wed = new Array();
        	var Thu = new Array();
        	var Fri = new Array();
        	var Sat = new Array();
        	var Sun = new Array();
        	//index가 0부터 시작하므로 -1 처리
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

        		if(Mon[i] !=null){
        			if(Mon[i].substring(Mon[i].length-1,Mon[i].length)=="*"){
        				this.ds_stdTimeTableCopy.setColumn(i,"mon","");
        				Mon[i] = this.ds_stdTimeTableCopy.getColumn(i,"mon");
        			}
        		}
        		if(Tue[i] !=null){
        			if(Tue[i].substring(Tue[i].length-1,Tue[i].length)=="*"){
        				this.ds_stdTimeTableCopy.setColumn(i,"tue","");
        				Tue[i] = this.ds_stdTimeTableCopy.getColumn(i,"tue");
        			}
        		}
        		if(Wed[i] !=null){
        			if(Wed[i].substring(Wed[i].length-1,Wed[i].length)=="*"){
        				this.ds_stdTimeTableCopy.setColumn(i,"wed","");
        				Wed[i] = this.ds_stdTimeTableCopy.getColumn(i,"wed");
        			}
        		}
        		if(Thu[i] !=null){
        			if(Thu[i].substring(Thu[i].length-1,Thu[i].length)=="*"){
        				this.ds_stdTimeTableCopy.setColumn(i,"thu","");
        				Thu[i] = this.ds_stdTimeTableCopy.getColumn(i,"thu");
        			}
        		}
        		if(Fri[i] !=null){
        			if(Fri[i].substring(Fri[i].length-1,Fri[i].length)=="*"){
        				this.ds_stdTimeTableCopy.setColumn(i,"fri","");
        				Fri[i] = this.ds_stdTimeTableCopy.getColumn(i,"fri");
        			}
        		}
        		if(Sat[i] !=null){
        			if(Sat[i].substring(Sat[i].length-1,Sat[i].length)=="*"){
        				this.ds_stdTimeTableCopy.setColumn(i,"sat","");
        				Sat[i] = this.ds_stdTimeTableCopy.getColumn(i,"sat");
        			}
        		}
        		if(Sun[i] !=null){
        			if(Sun[i].substring(Sun[i].length-1,Sun[i].length)=="*"){
        				this.ds_stdTimeTableCopy.setColumn(i,"sun","");
        				Sun[i] = this.ds_stdTimeTableCopy.getColumn(i,"sun");
        			}
        		}

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


        };


        this.Export00_onsuccess = function(obj, e)
        {
        	trace("Export00_onsuccess");
        }

        this.Export00_onerror = function(obj, e)
        {
        	trace("Export00_onerror");
        }


        this.btn_exel_onclick = function(obj,e)
        {
        	if(this.ds_class.getRowCount() > 0){
        		var date = this.ds_class.getColumn(0,"reg_date");
        		var year = date.substring(0,4);
        		var month = date.substring(5,6);
        		if(month < 8 ){
        			var semester = year+"년" + " 1학기"
        		}else{
        			var semester = year+"년" + " 2학기"
        		}
        	}
        		this.exportObj = new ExcelExportObject("Export00", this);

        		this.exportObj.set_exportfilename(semester + " 수업 시간표");
        		this.exportObj.set_exporturl("http://15.165.196.249/nexacro-xeni/XExportImport");

        		this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.gr_classList, "Sheet1!A1");

        		this.addEventHandler("onsuccess", this.Export00_onsuccess, this);
        		this.addEventHandler("onerror", this.Export00_onerror, this);

        		var intExportedItem = this.exportObj.exportData();

        		trace("Number of Exported Item: " + intExportedItem);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.timeSchule_onload,this);
<<<<<<< HEAD
=======
            this.btn_exel.addEventHandler("onclick",this.btn_exel_onclick,this);
>>>>>>> f1e3f9aa2e576c89823bba1e52c80fa784a5bf97
        };

        this.loadIncludeScript("timeSchedule.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
