(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("myClassList");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1080,570);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_class", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"classPart\" type=\"STRING\" size=\"256\"/><Column id=\"className\" type=\"STRING\" size=\"256\"/><Column id=\"classSeq\" type=\"INT\" size=\"256\"/><Column id=\"classPoint\" type=\"STRING\" size=\"256\"/><Column id=\"proCode\" type=\"STRING\" size=\"256\"/><Column id=\"proName\" type=\"STRING\" size=\"256\"/><Column id=\"dept\" type=\"STRING\" size=\"256\"/><Column id=\"classTime\" type=\"STRING\" size=\"256\"/><Column id=\"classRoom\" type=\"STRING\" size=\"256\"/><Column id=\"limit\" type=\"STRING\" size=\"256\"/><Column id=\"grade\" type=\"STRING\" size=\"256\"/><Column id=\"classGoal\" type=\"STRING\" size=\"256\"/><Column id=\"classMethod\" type=\"STRING\" size=\"256\"/><Column id=\"classEvaluation\" type=\"STRING\" size=\"256\"/><Column id=\"classReferences\" type=\"STRING\" size=\"256\"/><Column id=\"reqState\" type=\"STRING\" size=\"256\"/><Column id=\"rejectMsg\" type=\"STRING\" size=\"256\"/><Column id=\"reg_date\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","40","60","970","440",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_class");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"104\"/><Column size=\"233\"/><Column size=\"90\"/><Column size=\"151\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"이수구분\"/><Cell col=\"1\" text=\"과목코드\"/><Cell col=\"2\" text=\"과목명\"/><Cell col=\"3\" text=\"학점\"/><Cell col=\"4\" text=\"담당교수\"/></Band><Band id=\"body\"><Cell text=\"bind:classPart\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:classSeq\" displaytype=\"mask\" maskeditformat=\"########\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:className\" textAlign=\"center\" cursor=\"pointer\" textDecoration=\"underline\"/><Cell col=\"3\" text=\"bind:classPoint\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:proName\" textAlign=\"center\"/></Band><Band id=\"summary\"><Cell colspan=\"3\" text=\"신청학점\"/><Cell col=\"3\" text=\"expr:dataset.getSum('parseInt(classPoint.replace(&quot;학점&quot;,&quot;&quot;))')+&quot;학점&quot;\"/><Cell col=\"4\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Combo("co_year","40","16","120","28",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var co_year_innerdataset = new nexacro.NormalDataset("co_year_innerdataset", obj);
            co_year_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">2020</Col><Col id=\"datacolumn\">2020년</Col></Row><Row><Col id=\"codecolumn\">2021</Col><Col id=\"datacolumn\">2021년</Col></Row></Rows>");
            obj.set_innerdataset(co_year_innerdataset);
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Combo("co_semester","170","16","120","28",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var co_semester_innerdataset = new nexacro.NormalDataset("co_semester_innerdataset", obj);
            co_semester_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">1학기</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">2학기</Col></Row></Rows>");
            obj.set_innerdataset(co_semester_innerdataset);
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch","310","14","90","33",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("검색");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1080,570,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("myClassList.xfdl", function() {
        this.objApp = nexacro.getApplication();
        this.myClassList_onload = function(obj,e)
        {
        	var sCode = this.objApp.gds_students.getColumn(0,"s_seq"); // 학번
        	var objDate= new Date();
        	if(objDate.getMonth()+1 && objDate.getMonth()+1 < 8){
        		this.co_year.set_text(objDate.getFullYear()+"년");
        		this.co_semester.set_text("1학기");
        		var startTime = objDate.getFullYear()+"0101";
        		var endTime = objDate.getFullYear()+"0731";
        	}else{
        		this.co_year.set_text(objDate.getFullYear()+"년");
        		this.co_semester.set_text("2학기");
        		var startTime = objDate.getFullYear()+"0801";
        		var endTime = objDate.getFullYear()+"1231";
        	}
        	this.transaction(
        		"myClassList"
        		,"/myClassList.nex"
        		,""
        		,"ds_class=out_ds"
        		,"sCode="+sCode + " startTime="+startTime+" endTime="+endTime
        		,"fn_callback_myClass"
        	);
        };

        this.Grid00_oncellclick = function(obj,e)
        {
        	if(e.col == 2){
        		var classSeq = this.ds_class.getColumn(e.row,"classSeq");
        		var proCode = this.ds_class.getColumn(e.row,"proCode");
        		var x = this.width/2-500;
        		var y = this.height/2-340;
        		var objCF = new ChildFrame();
        		objCF.init("popAdd",x,y,1000,680,0,0,"prfWork::detail.xfdl");
        		objCF.set_showtitlebar(false);
        		objCF.showModal(this.getOwnerFrame(),{classSeq:classSeq, proCode : proCode, view : 'Y'},this,"fn_callback");
         	}
        };

        this.btnSearch_onclick = function(obj,e)
        {
        	var sCode = this.objApp.gds_students.getColumn(0,"s_seq"); //학번
        	var year = this.co_year.text;
        	year = year.substring(0,year.length-1)
        	if(this.co_semester.text == "1학기"){
        		var startTime = year+"0101";
        		var endTime = year+"0731";
        	}else{
        		var startTime = year+"0801";
        		var endTime = year+"1231";
        	}
        	this.transaction(
        		"myClassList"
        		,"/myClassList.nex"
        		,""
        		,"ds_class=out_ds"
        		,"sCode="+sCode + " startTime="+startTime+" endTime="+endTime
        		,"fn_callback"
        	);
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.myClassList_onload,this);
            this.Grid00.addEventHandler("oncellclick",this.Grid00_oncellclick,this);
            this.co_year.addEventHandler("onitemchanged",this.Combo01_onitemchanged,this);
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
        };

        this.loadIncludeScript("myClassList.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
