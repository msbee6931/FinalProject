(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("deptSchedule_read_pop");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(400,300);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("deptSchedule_ds", this);
            obj._setContents("<ColumnInfo><Column id=\"seq\" type=\"STRING\" size=\"256\"/><Column id=\"deptCode\" type=\"STRING\" size=\"256\"/><Column id=\"writer\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"title\" type=\"STRING\" size=\"256\"/><Column id=\"sDate\" type=\"STRING\" size=\"256\"/><Column id=\"eDate\" type=\"STRING\" size=\"256\"/><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"content\" type=\"STRING\" size=\"256\"/><Column id=\"writeDate\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","10","64","40","20",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("일자");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_sDate","70","64","130","20",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("cal_default");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","10","91","60","20",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("일정구분");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_code","70","91","130","20",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            obj.set_cssclass("cmb_default");
            obj.set_innerdataset("ScheduleCode_ds");
            obj.set_readonly("true");
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
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_eDate","260","64","130","20",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("cal_default");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01","225","64","10","20",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02","10","10","40","20",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("작성자");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_name","70","10","320","20",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("edt_default");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ok","150","269","100","25",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("확인");
            obj.set_cssclass("btn_default");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",400,300,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edt_name","value","deptSchedule_ds","name");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edt_title","value","deptSchedule_ds","title");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","cal_sDate","value","deptSchedule_ds","sDate");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","cal_eDate","value","deptSchedule_ds","eDate");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","tea_content","value","deptSchedule_ds","content");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","cmb_code","value","deptSchedule_ds","code");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("deptSchedule_read_pop.xfdl", function() {
        this.seq = this.parent.seq;
        this.deptSchedule_read_pop_onload = function(obj,e)
        {
        	this.transaction(
        		"selectOneDeptSchedule",//id
        		"/schedule/selectOneDeptSchedule",//url (절대경로)
        		"",//in_ds:U
        		"deptSchedule_ds=out_ds",//()_out_ds
        		"seq="+this.seq,//argument
        		"fn_callback"
        		)
        };


        this.btn_ok_onclick = function(obj,e)
        {
        	this.close();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.deptSchedule_read_pop_onload,this);
            this.btn_ok.addEventHandler("onclick",this.btn_ok_onclick,this);
            this.deptSchedule_ds.addEventHandler("onrowsetchanged",this.deptSchedule_ds_onrowsetchanged,this);
        };

        this.loadIncludeScript("deptSchedule_read_pop.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
