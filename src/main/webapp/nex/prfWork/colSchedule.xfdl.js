(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("colSchedule");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1080,520);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("colSchedule_ds", this);
            obj._setContents("<ColumnInfo><Column id=\"seq\" type=\"STRING\" size=\"256\"/><Column id=\"title\" type=\"STRING\" size=\"256\"/><Column id=\"sDate\" type=\"STRING\" size=\"256\"/><Column id=\"eDate\" type=\"STRING\" size=\"256\"/><Column id=\"contents\" type=\"STRING\" size=\"256\"/><Column id=\"writeDate\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01","30","9","200","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("학사 스케줄");
            obj.set_cssclass("sta_title");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","29","520",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_visible("false");
            obj.set_background("RGBA(236,135,135,0.71)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","80","0","800","10",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_visible("false");
            obj.set_background("RGBA(236,135,135,0.71)");
            this.addChild(obj.name, obj);

            obj = new Div("div_schedule","30","38","1021","452",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div00");
            obj.set_cssclass("div_line");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_dept","29","56","350","350",null,null,null,null,null,null,this.div_schedule.form);
            obj.set_taborder("0");
            obj.set_type("monthonly");
            this.div_schedule.addChild(obj.name, obj);

            obj = new Grid("gr_schedule","429","56","550","350",null,null,null,null,null,null,this.div_schedule.form);
            obj.set_taborder("1");
            obj.set_binddataset("colSchedule_ds");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"291\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"제목\"/><Cell col=\"1\" text=\"시작날짜\"/><Cell col=\"2\" text=\"종료날짜\"/></Band><Band id=\"body\"><Cell text=\"bind:title\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:sDate\" displaytype=\"date\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:eDate\" displaytype=\"date\" textAlign=\"center\"/></Band></Format></Formats>");
            this.div_schedule.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","100","490","800","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_visible("false");
            obj.set_background("RGBA(236,135,135,0.71)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","1051","0","29","520",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_visible("false");
            obj.set_background("RGBA(236,135,135,0.71)");
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
        this.registerScript("colSchedule.xfdl", function() {
        this.colSchedule_onload = function(obj,e)
        {
        	this.transaction(
        		"selectColSchedule",//id
        		"/schedule/selectColSchedule",//url (절대경로)
        		"",//in_ds:U
        		"colSchedule_ds=out_ds",//()_out_ds
        		"",//argument
        		"fn_callback"
        	)


        	//오늘 날짜 계산하기
        	var currDate = new Date();
            var year = currDate.getFullYear().toString().padLeft(4, "0");
            var month = (currDate.getMonth()+1).toString().padLeft(2, "0");
            var day = currDate.getDate().toString().padLeft(2, "0");

            currDate = year+month+day; // 오늘 날짜
        };


        //클릭 시 Grid 에 일정 띄우기
        this.div_schedule_cal_dept_ondayclick = function(obj,e)
        {
        	var clickedDate = e.date; // 클릭한 날짜

        	for(var i=0; i<this.colSchedule_ds.getRowCount();i++)
        	{
        		var fromDate = this.colSchedule_ds.getColumn(i,"sDate");
        		var toDate = this.colSchedule_ds.getColumn(i,"eDate");
        		var seq = this.colSchedule_ds.getColumn(i,"seq");

        		// 날짜간 차이 계산하기하기
        		fromDate = new Date();
        		toDate = new Date();
        		var calDate;
        		var day = 1000*60*60*24;

        		fromDate.setFullYear(this.cal_sDate.getYear());
        		fromDate.setMonth(this.cal_sDate.getMonth()-1);
        		fromDate.setDate(this.cal_sDate.getDay());

        		toDate.setFullYear(this.cal_eDate.getYear());
        		toDate.setMonth(this.cal_eDate.getMonth()-1);
        		toDate.setDate(this.cal_eDate.getDay());

        		calDate = fromDate.getTime() - toDate.getTime();

        		var leng = Math.abs(calDate/day); // 실제 날짜 간 차이


        	}


        	for(var i=0; i<(leng+1);i++){

        		var schDate = (sDate+i);

        		if(clickedDate==schDate)
        		{
        			this.colSchedule_ds.filter("seq=='"+clickedDate+"'");
        		}

        	}

        };


        //일정 상세보기 모달창 띄우기
        this.div_schedule_gr_schedule_oncelldblclick = function(obj,e)
        {
        	var seq = this.colSchedule_ds.getColumn(e.row,"seq");
        	var objCF = new ChildFrame();
        	objCF.init("colSchedule_read_pop",200,100,400,350);
        	objCF.set_titletext("일정 상세보기");
        	objCF.set_formurl("admWork::colSchedule_read_pop.xfdl");
        	objCF.showModal(
        		this.getOwnerFrame(),
        		{seq:seq},
        		this,
        		"fn_callback_updateCol"
        	);

        };

        this.fn_callback_updateCol= function()
        {
        	this.transaction(
        		"selectColSchedule",//id
        		"/schedule/selectColSchedule",//url (절대경로)
        		"",//in_ds:U
        		"colSchedule_ds=out_ds",//()_out_ds
        		"",//argument
        		"fn_callback"
        	)
        }

        this.seq="";
        this.div_schedule_gr_schedule_oncellclick = function(obj,e)
        {
        this.seq = this.colSchedule_ds.getColumn(e.row,"seq");
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.colSchedule_onload,this);
            this.div_schedule.form.cal_dept.addEventHandler("ondayclick",this.div_schedule_cal_dept_ondayclick,this);
            this.div_schedule.form.gr_schedule.addEventHandler("oncelldblclick",this.div_schedule_gr_schedule_oncelldblclick,this);
            this.div_schedule.form.gr_schedule.addEventHandler("oncellclick",this.div_schedule_gr_schedule_oncellclick,this);
        };

        this.loadIncludeScript("colSchedule.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
