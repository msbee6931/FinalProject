(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("deptSchedule");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1080,520);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("deptSchedule_ds", this);
            obj._setContents("<ColumnInfo><Column id=\"seq\" type=\"STRING\" size=\"256\"/><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"writer\" type=\"STRING\" size=\"256\"/><Column id=\"title\" type=\"STRING\" size=\"256\"/><Column id=\"sDate\" type=\"STRING\" size=\"256\"/><Column id=\"eDate\" type=\"STRING\" size=\"256\"/><Column id=\"schDate\" type=\"STRING\" size=\"256\"/><Column id=\"schDay\" type=\"STRING\" size=\"256\"/><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"content\" type=\"STRING\" size=\"256\"/><Column id=\"writeDate\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ScheduleCode_ds", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">01</Col><Col id=\"name\">[공지]</Col></Row><Row><Col id=\"code\">02</Col><Col id=\"name\">[학과]</Col></Row><Row><Col id=\"code\">03</Col><Col id=\"name\">[개인]</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cal", this);
            obj._setContents("<ColumnInfo><Column id=\"backgroundcolumn\" type=\"STRING\" size=\"256\"/><Column id=\"bordercolumn\" type=\"STRING\" size=\"256\"/><Column id=\"datecolumn\" type=\"STRING\" size=\"256\"/><Column id=\"textcolorcolumn\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Static("Static00_01_00","100","490","800","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_visible("false");
            obj.set_background("RGBA(236,135,135,0.71)");
            this.addChild(obj.name, obj);

            obj = new Div("div_schedule","30","38","1021","452",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Div00");
            obj.set_border("1px solid #c1c1c1");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_dept","29","76","350","350",null,null,null,null,null,null,this.div_schedule.form);
            obj.set_taborder("0");
            obj.set_type("monthonly");
            obj.set_innerdataset("ds_cal");
            obj.set_backgroundcolumn("backgroundcolumn");
            obj.set_bordercolumn("bordercolumn");
            obj.set_datecolumn("datecolumn");
            obj.set_textcolorcolumn("textcolorcolumn");
            this.div_schedule.addChild(obj.name, obj);

            obj = new Button("btn_insert","839","36","90","25",null,null,null,null,null,null,this.div_schedule.form);
            obj.set_taborder("1");
            obj.set_text("일정 등록");
            this.div_schedule.addChild(obj.name, obj);

            obj = new Grid("Grid00","429","76","500","350",null,null,null,null,null,null,this.div_schedule.form);
            obj.set_taborder("2");
            obj.set_binddataset("deptSchedule_ds");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"295\"/></Columns><Rows><Row size=\"30\"/></Rows><Band id=\"body\"><Cell text=\"bind:code\" cssclass=\"expr:code=='01'?'Expr_red':code=='02'?'Expr_blue':'Expr_yellow'\" displaytype=\"combotext\" combocodecol=\"code\" combodatacol=\"name\" textAlign=\"center\" combodataset=\"ScheduleCode_ds\"/><Cell col=\"1\" text=\"bind:title\" cssclass=\"expr:code=='01'?'Expr_red':code=='02'?'Expr_blue':'Expr_yellow'\" textAlign=\"center\"/></Band></Format></Formats>");
            this.div_schedule.addChild(obj.name, obj);

            obj = new Static("Static01","30","9","200","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("학과 스케줄");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00","464","87","10","10",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("");
            obj.set_background("#d23636");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_00_00","475","85","65","15",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("공지사항");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","541","87","10","10",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("");
            obj.set_background("#78a2dd");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","552","85","65","15",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("학과일정");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00","618","87","10","10",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("");
            obj.set_background("#ab9f1b");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00","629","85","65","15",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("개인일정");
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
        this.registerScript("deptSchedule.xfdl", function() {
        this.objApp = nexacro.getApplication();
        this.code=this.objApp.gds_professor.getColumn(0,'p_seq');
        this.writer=this.objApp.gds_professor.getColumn(0,'name');
        this.deptSchedule_onload = function(obj,e)
        {
        	this.transaction(
        		"selectDeptSchedule",//id
        		"/schedule/selectDeptSchedule",//url (절대경로)
        		"",//in_ds:U
        		"deptSchedule_ds=out_ds",//()_out_ds
        		"",//argument
        		"fn_callback"
        	)


        	//오늘 날짜 계산하기
        	var currDate = new Date();
            var year = currDate.getFullYear().toString().padLeft(4, "0");
            var month = (currDate.getMonth()+1).toString().padLeft(2, "0");
            var day = currDate.getDate().toString().padLeft(2, "0");

            currDate = year+month+day; // 오늘 날짜

        	//오늘 날짜 데이터셋 세팅
        	this.deptSchedule_ds.filter("schDate=='"+currDate+"'");
        };

        this.fn_callback = function(sId, errCd,errMsg){
        	if (errCd < 0) {
        		trace("sId["+sId+"]: Error["+errCd+"]:"+errMsg);
        	}
        	if(sId == "selectDeptSchedule"){
        		for(var i=0; i<this.deptSchedule_ds.getRowCount(); i++){
        			var sDate = this.deptSchedule_ds.getColumn(i,"sDate");
        			var eDate = this.deptSchedule_ds.getColumn(i,"eDate");
        			var code = this.deptSchedule_ds.getColumn(i,"code");
        			for(var j=0; j<=parseInt(eDate)-parseInt(sDate); j++){
        				if(code == "01"){
        					var nRow = this.ds_cal.findRow("datecolumn",parseInt(sDate)+j);
        					if(nRow == -1|| this.ds_cal.getRowCount()==0){
        						var addRow = this.ds_cal.addRow();
        						this.ds_cal.setColumn(addRow,"datecolumn",parseInt(sDate)+j);
        						this.ds_cal.setColumn(addRow,"backgroundcolumn","#d23636");
        						this.ds_cal.setColumn(addRow,"bordercolumn","1px solid red");
        						this.ds_cal.setColumn(addRow,"type","01");
        					}else{
        						var sCode = this.ds_cal.getColumn(nRow,"type");
        						if(parseInt(code) <= parseInt(sCode)){
        							this.ds_cal.setColumn(nRow,"datecolumn",parseInt(sDate)+j);
        							this.ds_cal.setColumn(nRow,"backgroundcolumn","#d23636");
        							this.ds_cal.setColumn(nRow,"bordercolumn","1px solid red");
        							this.ds_cal.setColumn(nRow,"type","01");
        						}
        					}
        				}else if(code == "02"){
        					var nRow = this.ds_cal.findRow("datecolumn",parseInt(sDate)+j);
        					if(nRow == -1|| this.ds_cal.getRowCount()==0){
        						var addRow = this.ds_cal.addRow();
        						this.ds_cal.setColumn(addRow,"datecolumn",parseInt(sDate)+j);
        						this.ds_cal.setColumn(addRow,"backgroundcolumn","#78a2dd");
        						this.ds_cal.setColumn(addRow,"bordercolumn","1px solid blue");
        						this.ds_cal.setColumn(addRow,"type","02");
        					}else{
        						var sCode = this.ds_cal.getColumn(nRow,"type");
        						if(parseInt(code) <= parseInt(sCode)){
        							this.ds_cal.setColumn(nRow,"datecolumn",parseInt(sDate)+j);
        							this.ds_cal.setColumn(nRow,"backgroundcolumn","#78a2dd");
        							this.ds_cal.setColumn(nRow,"bordercolumn","1px solid blue");
        							this.ds_cal.setColumn(nRow,"type","02");
        						}
        					}
        				}else if(code == "03"){
        					var nRow = this.ds_cal.findRow("datecolumn",parseInt(sDate)+j);
        					if(nRow == -1|| this.ds_cal.getRowCount()==0){
        						var addRow = this.ds_cal.addRow();
        						this.ds_cal.setColumn(addRow,"datecolumn",parseInt(sDate)+j);
        						this.ds_cal.setColumn(addRow,"backgroundcolumn","#ab9f1b");
        						this.ds_cal.setColumn(addRow,"bordercolumn","1px solid yellow");
        						this.ds_cal.setColumn(addRow,"type","03");
        					}
        				}
        			}
        		}
        	}
        };

        this.fn_callback_on=function()
        {
        	//오늘 날짜 데이터셋 세팅
        	this.deptSchedule_ds.filter("schDate=='"+currDate+"'");
        }


        //클릭 시 Grid 에 일정 띄우기
        this.Div00_cal_dept_ondayclick = function(obj,e)
        {
        	var clickedDate = e.date; // 클릭한 날짜

        	this.deptSchedule_ds.filter("Date=='"+clickedDate+"'"); // 날짜로 필터
        };


        //일정 등록 시 모달 창 띄우기
        this.Div00_btn_insert_onclick = function(obj,e)
        {
        	//모달창
        	var objCF = new ChildFrame();
        	objCF.init("deptSchedule_insert_pop",200,100,400,300);
        	objCF.set_titletext("일정 등록 하기");
        	objCF.set_formurl("prfWork::deptSchedule_insert_pop.xfdl");
        	objCF.showModal(
        		this.getOwnerFrame(),
        		{},
        		this,
        		"fn_callback_deptSchedule"
        	);
        };

        //콜백 성공하면 데이터셋 불러오기
        this.fn_callback_deptSchedule = function(suc) {
        	alert(suc)
        	this.transaction(
        		"selectDeptSchedule",//id
        		"/schedule/selectDeptSchedule",//url (절대경로)
        		"",//in_ds:U
        		"deptSchedule_ds=out_ds",//()_out_ds
        		"",//argument
        		"fn_callback"
        	)
        };

        //일정 상세보기 모달창 띄우기
        this.Div00_Grid00_oncelldblclick = function(obj,e)
        {

        	var seq = this.deptSchedule_ds.getColumn(e.row,"seq");
        	var schDate = this.deptSchedule_ds.getColumn(e.row,"schDate");
        	var id = this.deptSchedule_ds.getColumn(e.row,"id"); // 등록한 id

        	// 	id 일치하면
        	if(id == this.code)
        	{
        		var objCF = new ChildFrame();
        		objCF.init("deptSchedule_update_pop",200,100,400,350);
        		objCF.set_titletext("일정 상세보기");
        		objCF.set_formurl("prfWork::deptSchedule_update_pop.xfdl");
        		objCF.showModal(
        			this.getOwnerFrame(),
        			{seq:seq,schDate:schDate},
        			this,
        			"fn_callback_deptSchedule"
        		);

        	} else {
        		var objCF = new ChildFrame();
        		objCF.init("deptSchedule_read_pop",200,100,400,350);
        		objCF.set_titletext("일정 상세보기");
        		objCF.set_formurl("prfWork::deptSchedule_read_pop.xfdl");
        		objCF.showModal(
        			this.getOwnerFrame(),
        			{seq:seq,schDate:schDate},
        			this,
        			"fn_callback_deptSchedule"
        		);
        	}


        };





        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.deptSchedule_onload,this);
            this.div_schedule.form.cal_dept.addEventHandler("ondayclick",this.Div00_cal_dept_ondayclick,this);
            this.div_schedule.form.cal_dept.addEventHandler("onrbuttonup",this.Div00_cal_dept_onrbuttonup,this);
            this.div_schedule.form.btn_insert.addEventHandler("onclick",this.Div00_btn_insert_onclick,this);
            this.div_schedule.form.Grid00.addEventHandler("oncelldblclick",this.Div00_Grid00_oncelldblclick,this);
            this.deptSchedule_ds.addEventHandler("onrowsetchanged",this.deptSchedule_ds_onrowsetchanged,this);
        };

        this.loadIncludeScript("deptSchedule.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
