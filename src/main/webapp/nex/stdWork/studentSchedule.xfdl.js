(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("studentSchedule");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(820,500);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_stdTimeTableCopy", this);
            obj._setContents("<ColumnInfo><Column id=\"sCode\" type=\"INT\" size=\"256\"/><Column id=\"classCode\" type=\"INT\" size=\"256\"/><Column id=\"time\" type=\"STRING\" size=\"256\"/><Column id=\"mon\" type=\"STRING\" size=\"256\"/><Column id=\"tue\" type=\"STRING\" size=\"256\"/><Column id=\"wed\" type=\"STRING\" size=\"256\"/><Column id=\"thu\" type=\"STRING\" size=\"256\"/><Column id=\"fri\" type=\"STRING\" size=\"256\"/><Column id=\"sat\" type=\"STRING\" size=\"256\"/><Column id=\"sun\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_stdTimeTable", this);
            obj._setContents("<ColumnInfo><Column id=\"sCode\" type=\"INT\" size=\"256\"/><Column id=\"classCode\" type=\"INT\" size=\"256\"/><Column id=\"time\" type=\"STRING\" size=\"256\"/><Column id=\"mon\" type=\"STRING\" size=\"256\"/><Column id=\"tue\" type=\"STRING\" size=\"256\"/><Column id=\"wed\" type=\"STRING\" size=\"256\"/><Column id=\"thu\" type=\"STRING\" size=\"256\"/><Column id=\"fri\" type=\"STRING\" size=\"256\"/><Column id=\"sat\" type=\"STRING\" size=\"256\"/><Column id=\"sun\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"time\">1교시</Col></Row><Row><Col id=\"time\">2교시</Col></Row><Row><Col id=\"time\">3교시</Col></Row><Row><Col id=\"time\">4교시</Col></Row><Row><Col id=\"time\">5교시</Col></Row><Row><Col id=\"time\">6교시</Col></Row><Row><Col id=\"time\">7교시</Col></Row><Row><Col id=\"time\">8교시</Col></Row><Row><Col id=\"time\">9교시</Col></Row><Row><Col id=\"time\">10교시</Col></Row><Row><Col id=\"time\">11교시</Col></Row><Row><Col id=\"time\">12교시</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","10","40","800","400",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_stdTimeTable");
            obj.set_cssclass("grd_default");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"105\"/><Column size=\"105\"/><Column size=\"105\"/><Column size=\"105\"/><Column size=\"105\"/><Column size=\"105\"/><Column size=\"105\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" text=\"월요일\"/><Cell col=\"2\" text=\"화요일\"/><Cell col=\"3\" text=\"수요일\"/><Cell col=\"4\" text=\"목요일\"/><Cell col=\"5\" text=\"금요일\"/><Cell col=\"6\" text=\"토요일\"/><Cell col=\"7\" text=\"일요일\" wordWrap=\"english\"/></Band><Band id=\"body\"><Cell text=\"bind:time\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:mon\" textAlign=\"center\" wordWrap=\"english\"/><Cell col=\"2\" text=\"bind:tue\" textAlign=\"center\" wordWrap=\"english\"/><Cell col=\"3\" text=\"bind:wed\" textAlign=\"center\" wordWrap=\"english\"/><Cell col=\"4\" text=\"bind:thu\" textAlign=\"center\" wordWrap=\"english\"/><Cell col=\"5\" text=\"bind:fri\" textAlign=\"center\" wordWrap=\"english\"/><Cell col=\"6\" text=\"bind:sat\" textAlign=\"center\" wordWrap=\"english\"/><Cell col=\"7\" text=\"bind:sun\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancel","710","455","100","25",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("닫기");
            obj.set_cssclass("btn_can");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","10","0","210","40",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("수강 시간표");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",820,500,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("studentSchedule.xfdl", function() {

        this.studentSchedule_onload = function(obj,e)
        {
        	if(this.parent.myClass == "Y"){
        		var startTime = this.parent.startTime;
        		var endTime = this.parent.endTime;
        	}else{
        		var objDate= new Date();
        		if(objDate.getMonth()+1 && objDate.getMonth()+1 < 8){
        			var startTime = objDate.getFullYear()+"0101";
        			var endTime = objDate.getFullYear()+"0731";
        		}else{
        			var startTime = objDate.getFullYear()+"0801";
        			var endTime = objDate.getFullYear()+"1231";
        		}
        	}
        	var sCode = this.parent.sCode;
        	this.transaction(
        		"stdTimeTableList"
        		,"/stdTimeTableList.nex"
        		,""
        		,"ds_stdTimeTableCopy=out_ds"
        		,"sCode="+sCode + " startTime="+startTime+" endTime="+endTime
        		,"fn_callback_TimeTable"
        	);
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

        this.btnCancel_onclick = function(obj,e)
        {
        	this.close();
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.studentSchedule_onload,this);
            this.btnCancel.addEventHandler("onclick",this.btnCancel_onclick,this);
        };

        this.loadIncludeScript("studentSchedule.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
