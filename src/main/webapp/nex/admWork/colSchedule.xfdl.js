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
<<<<<<< HEAD
=======


            obj = new Dataset("ds_cal", this);
            obj._setContents("<ColumnInfo><Column id=\"backgroundcolumn\" type=\"STRING\" size=\"256\"/><Column id=\"bordercolumn\" type=\"STRING\" size=\"256\"/><Column id=\"datecolumn\" type=\"STRING\" size=\"256\"/><Column id=\"textcolorcolumn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
>>>>>>> 16033e5541c84931c834d0d198cd703946ae2ecf
            
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

            obj = new Static("Static00_01_00","100","490","800","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_visible("false");
            obj.set_background("RGBA(236,135,135,0.71)");
            this.addChild(obj.name, obj);

<<<<<<< HEAD
            obj = new Div("Div00","30","38","1021","452",null,null,null,null,null,null,this);
=======
            obj = new Div("div_schedule","30","38","1021","452",null,null,null,null,null,null,this);
>>>>>>> 16033e5541c84931c834d0d198cd703946ae2ecf
            obj.set_taborder("4");
            obj.set_text("Div00");
            obj.set_cssclass("div_line");
            this.addChild(obj.name, obj);

<<<<<<< HEAD
            obj = new Calendar("cal_dept","29","56","350","350",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_type("monthonly");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_insert","889","16","100","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("일정 등록");
            obj.set_cssclass("btn_insert");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("Grid00","429","56","550","350",null,null,null,null,null,null,this.Div00.form);
=======
            obj = new Calendar("cal_dept","29","56","350","350",null,null,null,null,null,null,this.div_schedule.form);
            obj.set_taborder("0");
            obj.set_type("monthonly");
            obj.set_innerdataset("ds_cal");
            obj.set_backgroundcolumn("backgroundcolumn");
            obj.set_bordercolumn("bordercolumn");
            obj.set_datecolumn("datecolumn");
            obj.set_textcolorcolumn("textcolorcolumn");
            this.div_schedule.addChild(obj.name, obj);

            obj = new Button("btn_insert","889","16","100","30",null,null,null,null,null,null,this.div_schedule.form);
            obj.set_taborder("1");
            obj.set_text("일정 등록");
            obj.set_cssclass("btn_insert");
            this.div_schedule.addChild(obj.name, obj);

            obj = new Grid("gr_colSchedule","429","56","550","350",null,null,null,null,null,null,this.div_schedule.form);
>>>>>>> 16033e5541c84931c834d0d198cd703946ae2ecf
            obj.set_taborder("2");
            obj.set_binddataset("colSchedule_ds");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"291\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"제목\"/><Cell col=\"1\" text=\"시작날짜\"/><Cell col=\"2\" text=\"종료날짜\"/></Band><Band id=\"body\"><Cell text=\"bind:title\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:sDate\" displaytype=\"date\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:eDate\" displaytype=\"date\" textAlign=\"center\"/></Band></Format></Formats>");
<<<<<<< HEAD
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_del","889","416","100","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("삭제");
            obj.set_cssclass("btn_del");
            this.Div00.addChild(obj.name, obj);
=======
            this.div_schedule.addChild(obj.name, obj);

            obj = new Button("btn_del","889","416","100","30",null,null,null,null,null,null,this.div_schedule.form);
            obj.set_taborder("3");
            obj.set_text("삭제");
            obj.set_cssclass("btn_del");
            this.div_schedule.addChild(obj.name, obj);

            obj = new Button("btnAll","429","16","100","30",null,null,null,null,null,null,this.div_schedule.form);
            obj.set_taborder("4");
            obj.set_text("전체 일정");
            this.div_schedule.addChild(obj.name, obj);

            obj = new Button("btnAfter","549","16","100","30",null,null,null,null,null,null,this.div_schedule.form);
            obj.set_taborder("5");
            obj.set_text("남은 일정");
            this.div_schedule.addChild(obj.name, obj);
>>>>>>> 16033e5541c84931c834d0d198cd703946ae2ecf

            obj = new Static("Static01","30","9","200","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("학사 스케줄");
            obj.set_cssclass("sta_title");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1080,520,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("colSchedule.xfdl", function() {
<<<<<<< HEAD
        this.colSchedule_onload = function(obj,e)
        {
=======
        this.objApp = nexacro.getApplication();
        this.colSchedule_onload = function(obj,e)
        {
        	if(this.objApp.gds_professor.getRowCount() > 0){
        		this.div_schedule.form.btn_del.set_visible(false);
        		this.div_schedule.form.btn_insert.set_visible(false);
        	}
>>>>>>> 16033e5541c84931c834d0d198cd703946ae2ecf
        	this.transaction(
        		"selectColSchedule",//id
        		"/schedule/selectColSchedule",//url (절대경로)
        		"",//in_ds:U
        		"colSchedule_ds=out_ds",//()_out_ds
        		"",//argument
        		"fn_callback"
        	)

<<<<<<< HEAD


=======
>>>>>>> 16033e5541c84931c834d0d198cd703946ae2ecf
        	//오늘 날짜 계산하기
        	var currDate = new Date();
            var year = currDate.getFullYear().toString().padLeft(4, "0");
            var month = (currDate.getMonth()+1).toString().padLeft(2, "0");
            var day = currDate.getDate().toString().padLeft(2, "0");

            currDate = year+month+day; // 오늘 날짜
        };
<<<<<<< HEAD


        //클릭 시 Grid 에 일정 띄우기
        this.Div00_cal_dept_ondayclick = function(obj,e)
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

=======
        this.fn_callback = function(sId,errCd,errMsg){
        	if (errCd < 0) {
        		trace("sId["+sId+"]: Error["+errCd+"]:"+errMsg);
        	}
        	if(sId == "selectColSchedule"){
        		this.ds_cal.clearData();
        		for(var i=0; i<this.colSchedule_ds.getRowCount(); i++){
        			var sDate = this.colSchedule_ds.getColumn(i,"sDate");
        			var eDate = this.colSchedule_ds.getColumn(i,"eDate");
        			for(var j=0; j<=parseInt(eDate)-parseInt(sDate); j++){
        				var nRow = this.ds_cal.addRow();
        				this.ds_cal.setColumn(nRow,"backgroundcolumn","skyBlue");
        				this.ds_cal.setColumn(nRow,"bordercolumn","1px solid green");
        				this.ds_cal.setColumn(nRow,"datecolumn",parseInt(sDate)+j);
        			}
        		}
        		var objDate = new Date();
        		this.div_schedule.form.cal_dept.set_value(objDate);
        		var date= this.div_schedule.form.cal_dept.value;
        		this.colSchedule_ds.filter("eDate>='"+date+"'");
        	}
        }

        //클릭 시 Grid 에 일정 띄우기
        this.Div00_cal_dept_ondayclick = function(obj,e)
        {
        	this.colSchedule_ds.filter("sDate<='"+e.date+"'&& eDate>='"+e.date+"'");
>>>>>>> 16033e5541c84931c834d0d198cd703946ae2ecf
        };


        //일정 등록 시 모달 창 띄우기
        this.Div00_btn_insert_onclick = function(obj,e)
        {
        	//모달창
        	var objCF = new ChildFrame();
        	objCF.init("colSchedule_insert_pop",200,100,400,300);
        	objCF.set_titletext("일정 등록 하기");
        	objCF.set_formurl("admWork::colSchedule_insert_pop.xfdl");
        	objCF.showModal(
        		this.getOwnerFrame(),
        		{},
        		this,
        		"fn_callback_colSchedule"
        	);
        };

        //콜백 성공하면 데이터셋 불러오기
        this.fn_callback_colSchedule = function() {
        	this.transaction(
        		"selectColSchedule",//id
        		"/schedule/selectColSchedule",//url (절대경로)
        		"",//in_ds:U
        		"colSchedule_ds=out_ds",//()_out_ds
        		"",//argument
        		"fn_callback"
        	)
        };

        //일정 상세보기 모달창 띄우기
        this.Div00_Grid00_oncelldblclick = function(obj,e)
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
        this.Div00_Grid00_oncellclick = function(obj,e)
        {
        	this.seq = this.colSchedule_ds.getColumn(e.row,"seq");
        };

        this.Div00_btn_del_onclick = function(obj,e)
        {
        	if(this.colSchedule_ds.getRowCount()>0){

        		var delCheck = this.confirm("정말 삭제하시겠습니까?");

        		if(delCheck)
        		{
        			var nRow = this.colSchedule_ds.findRow("seq",this.seq);
        			this.colSchedule_ds.deleteRow(nRow);

        			this.transaction(
        				"deleteColSchedule",//id
        				"/schedule/deleteColSchedule",//url (절대경로)
        				"",//in_ds:U
        				"",//()_out_ds
        				"seq="+this.seq,//argument
        				"fn_callback_delete"
        			)
        		}
        		else {return;}
        	}
        	else
        	{
        		alert("선택된 항목이 없습니다.")
        		return;
        	}
        };


<<<<<<< HEAD
=======
        this.div_schedule_btnAll_onclick = function(obj,e)
        {
        	this.colSchedule_ds.filter("");
        };

        this.div_schedule_btnAfter_onclick = function(obj,e)
        {
        	var objDate = new Date();
        	this.div_schedule.form.cal_dept.set_value(objDate);
        	var date= this.div_schedule.form.cal_dept.value;
        	this.colSchedule_ds.filter("eDate>='"+date+"'");
        };
>>>>>>> 16033e5541c84931c834d0d198cd703946ae2ecf

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.colSchedule_onload,this);
<<<<<<< HEAD
            this.Div00.form.cal_dept.addEventHandler("ondayclick",this.Div00_cal_dept_ondayclick,this);
            this.Div00.form.btn_insert.addEventHandler("onclick",this.Div00_btn_insert_onclick,this);
            this.Div00.form.Grid00.addEventHandler("oncelldblclick",this.Div00_Grid00_oncelldblclick,this);
            this.Div00.form.Grid00.addEventHandler("oncellclick",this.Div00_Grid00_oncellclick,this);
            this.Div00.form.btn_del.addEventHandler("onclick",this.Div00_btn_del_onclick,this);
=======
            this.div_schedule.form.cal_dept.addEventHandler("ondayclick",this.Div00_cal_dept_ondayclick,this);
            this.div_schedule.form.btn_insert.addEventHandler("onclick",this.Div00_btn_insert_onclick,this);
            this.div_schedule.form.gr_colSchedule.addEventHandler("oncelldblclick",this.Div00_Grid00_oncelldblclick,this);
            this.div_schedule.form.gr_colSchedule.addEventHandler("oncellclick",this.Div00_Grid00_oncellclick,this);
            this.div_schedule.form.btn_del.addEventHandler("onclick",this.Div00_btn_del_onclick,this);
            this.div_schedule.form.btnAll.addEventHandler("onclick",this.div_schedule_btnAll_onclick,this);
            this.div_schedule.form.btnAfter.addEventHandler("onclick",this.div_schedule_btnAfter_onclick,this);
>>>>>>> 16033e5541c84931c834d0d198cd703946ae2ecf
        };

        this.loadIncludeScript("colSchedule.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
