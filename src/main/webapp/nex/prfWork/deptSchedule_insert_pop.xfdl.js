(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("deptSchedule_insert_pop");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(400,300);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("deptSchedule_ds", this);
            obj._setContents("<ColumnInfo><Column id=\"seq\" type=\"STRING\" size=\"256\"/><Column id=\"writer\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"title\" type=\"STRING\" size=\"256\"/><Column id=\"sDate\" type=\"STRING\" size=\"256\"/><Column id=\"eDate\" type=\"STRING\" size=\"256\"/><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"content\" type=\"STRING\" size=\"256\"/><Column id=\"writeDate\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ScheduleCode_ds", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">01</Col><Col id=\"name\">[공지]</Col></Row><Row><Col id=\"code\">02</Col><Col id=\"name\">[학과]</Col></Row><Row><Col id=\"code\">03</Col><Col id=\"name\">[기타]</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","10","37","40","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("제목");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_title","70","37","320","20",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("edt_default");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","10","64","40","20",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("일자");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_sDate","70","64","130","20",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("cal_default");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","10","91","60","20",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("일정구분");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_code","70","91","130","20",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            obj.set_innerdataset("ScheduleCode_ds");
            obj.set_cssclass("cmb_default");
            obj.set_text("공지");
            obj.set_value("01");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","10","118","40","20",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("내용");
            this.addChild(obj.name, obj);

            obj = new TextArea("tea_content","10","140","380","120",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("txt_default");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_eDate","260","64","130","20",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("cal_default");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01","225","64","10","20",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ok","73","269","100","25",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("확인");
            obj.set_cssclass("btn_default");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancle","213","269","100","25",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("취소");
            obj.set_cssclass("btn_can");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02","10","10","40","20",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("작성자");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_name","70","10","320","20",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_cssclass("edt_default");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",400,300,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("deptSchedule_insert_pop.xfdl", function() {
        this.objApp = nexacro.getApplication();
        this.code=this.objApp.gds_professor.getColumn(0,'p_seq');
        this.writer=this.objApp.gds_professor.getColumn(0,'name');
        this.deptCode=this.objApp.gds_professor.getColumn(0,'deptCode');

        this.deptSchedule_insert_pop_onload = function(obj,e)
        {
        	var fRow=this.objApp.deptCode.findRow('code',this.deptCode);
        	var deptName =this.objApp.deptCode.getColumn(fRow,'name');
        	this.edt_name.set_value("["+deptName+"]"+" "+this.writer);
        };

        this.btn_cancle_onclick = function(obj,e)
        {
        	this.close();
        };



        this.btn_ok_onclick = function(obj,e)
        {
        	var name = this.edt_name.value;
        	var title = this.edt_title.value;
        	var sDate = this.cal_sDate.value;
        	var eDate = this.cal_eDate.value;
        	var code = this.cmb_code.value;
        	var content = this.tea_content.value;

        	var diff = eDate -sDate;
        	if(diff < 0 ){
        		alert("일자를 확인해주세요");
        	}
        	else{


        		var nRow = this.deptSchedule_ds.addRow();
        		this.deptSchedule_ds.setColumn(nRow,"writer",this.code);
        		this.deptSchedule_ds.setColumn(nRow,"name",name);
        		this.deptSchedule_ds.setColumn(nRow,"title",title);
        		this.deptSchedule_ds.setColumn(nRow,"sDate",sDate);
        		this.deptSchedule_ds.setColumn(nRow,"eDate",eDate);
        		this.deptSchedule_ds.setColumn(nRow,"code",code);
        		this.deptSchedule_ds.setColumn(nRow,"content",content);
        	}

        	this.transaction(
        		"insertDeptScheule",//id
        		"/schedule/insertDeptScheule",//url (절대경로)
        		"in_ds=deptSchedule_ds:U",//in_ds:U
        		"",//()_out_ds
        		"",//argument
        		"fn_callback"
        	)

        	this.close();
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.deptSchedule_insert_pop_onload,this);
            this.btn_ok.addEventHandler("onclick",this.btn_ok_onclick,this);
            this.btn_cancle.addEventHandler("onclick",this.btn_cancle_onclick,this);
            this.deptSchedule_ds.addEventHandler("onrowsetchanged",this.deptSchedule_ds_onrowsetchanged,this);
        };

        this.loadIncludeScript("deptSchedule_insert_pop.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
