(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("stdReadTuition");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1080,520);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("tuition_ds", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"seq\" type=\"INT\" size=\"256\"/><Column id=\"std_code\" type=\"INT\" size=\"256\"/><Column id=\"std_grade\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"t_enter\" type=\"INT\" size=\"256\"/><Column id=\"t_class\" type=\"INT\" size=\"256\"/><Column id=\"t_std\" type=\"INT\" size=\"256\"/><Column id=\"t_grd\" type=\"INT\" size=\"256\"/><Column id=\"t_ore\" type=\"INT\" size=\"256\"/><Column id=\"tSum\" type=\"INT\" size=\"256\"/><Column id=\"t_date\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","0","0","29","520",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_visible("false");
            obj.set_background("RGBA(236,135,135,0.71)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","80","0","800","10",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_visible("false");
            obj.set_background("RGBA(236,135,135,0.71)");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","30","10",null,null,"29","30",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_cssclass("div_line");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","26","28",null,"66","45",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_seq","10","15","100","30",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("0");
            obj.set_text("학번");
            obj.set_cssclass("sta_default");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("sta_dept","228","15","100","30",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("1");
            obj.set_text("학과");
            obj.set_cssclass("sta_default");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("sta_grade","446","15","100","30",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("2");
            obj.set_text("학년");
            obj.set_cssclass("sta_default");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("sta_name","664","15","100","30",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("3");
            obj.set_text("이름");
            obj.set_cssclass("sta_default");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_seq","109","15","120","30",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("4");
            obj.set_readonly("true");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_dept","327","15","120","30",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("5");
            obj.set_readonly("true");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_grade","545","15","120","30",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("6");
            obj.set_readonly("true");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_name","763","15","120","30",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("7");
            obj.set_readonly("true");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00","1051","0","29","520",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_visible("false");
            obj.set_background("RGBA(236,135,135,0.71)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","100","490","800","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_visible("false");
            obj.set_background("RGBA(236,135,135,0.71)");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","68","93",null,null,"67","77",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("tuition_ds");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_default");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"학년\"/><Cell col=\"1\" text=\"학기 구분\"/><Cell col=\"2\" text=\"입학금\"/><Cell col=\"3\" text=\"수업료\"/><Cell col=\"4\" text=\"학생회비\"/><Cell col=\"5\" text=\"졸업앨범비\"/><Cell col=\"6\" text=\"오리엔테이션비\"/><Cell col=\"7\" text=\"총 합계\"/></Band><Band id=\"body\"><Cell text=\"bind:std_grade\" textAlign=\"center\" suppress=\"1\"/><Cell col=\"1\" text=\"bind:type\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:t_enter\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:t_class\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:t_std\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:t_grd\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:t_ore\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:tSum\" textAlign=\"center\"/></Band></Format></Formats>");
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
        this.registerScript("stdReadTuition.xfdl", function() {
        this.objApp = nexacro.getApplication();
        this.stdReadTuition_onload = function(obj,e)
        {
        	this.std_code=this.objApp.gds_students.getColumn(0,'s_seq');
        	this.deptCode=this.objApp.gds_students.getColumn(0,'deptCode');
        	var fRow = this.objApp.deptCode.findRow("code",this.deptCode);
        	var deptName = this.objApp.deptCode.getColumn(fRow,"name");
        	this.grade=this.objApp.gds_students.getColumn(0,'colGrade');
        	this.name=this.objApp.gds_students.getColumn(0,'name');

        	this.Div00.form.Div00.form.edt_seq.set_value(this.std_code);
        	this.Div00.form.Div00.form.edt_dept.set_value(deptName);
        	this.Div00.form.Div00.form.edt_grade.set_value(this.grade);
        	this.Div00.form.Div00.form.edt_name.set_value(this.name);

        		this.transaction(
        		"stdSelectOne.tuition",//id
        		"/tuition/stdSelectOne.tuition",//url (절대경로)
        		"",//in_ds:U
        		"tuition_ds=out_ds",//()_out_ds
        		"",//argument
        		"fn_callback_selectOne"
        		)
        };

        this.fn_callback_selectOne = function()
        {
        	trace(this.tuition_ds.saveXML());
        	for(var i=0;i<this.tuition_ds.getRowCount();i++)
        	{
        		var sDate =this.tuition_ds.getColumn(i,"t_date");
        		var mon = sDate.substr(5,2);
        		var sMonth = nexacro.toNumber(mon)
        		if(sMonth<8)
        		{
        			this.tuition_ds.setColumn(i,"type","1학기");
        		}
        		else
        		{
        			this.tuition_ds.setColumn(i,"type","2학기");
        		}
        	}
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.stdReadTuition_onload,this);
        };

        this.loadIncludeScript("stdReadTuition.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
