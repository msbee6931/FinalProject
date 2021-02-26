(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("stdReadScholarship");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1080,520);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("scholorship_ds", this);
            obj._setContents("<ColumnInfo><Column id=\"std_code\" type=\"INT\" size=\"256\"/><Column id=\"std_grade\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"s_kind\" type=\"INT\" size=\"256\"/><Column id=\"s_rec\" type=\"INT\" size=\"256\"/><Column id=\"s_smt\" type=\"INT\" size=\"256\"/><Column id=\"s_spt\" type=\"INT\" size=\"256\"/><Column id=\"s_etc\" type=\"INT\" size=\"256\"/><Column id=\"sSum\" type=\"INT\" size=\"256\"/><Column id=\"s_date\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Div("Div00","36","28",null,"66","35",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_seq","0","15","100","30",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("0");
            obj.set_text("학번");
            obj.set_cssclass("sta_default");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("sta_dept","218","15","100","30",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("1");
            obj.set_text("학과");
            obj.set_cssclass("sta_default");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("sta_grade","436","15","100","30",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("2");
            obj.set_text("학년");
            obj.set_cssclass("sta_default");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("sta_name","654","15","100","30",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("3");
            obj.set_text("이름");
            obj.set_cssclass("sta_default");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_seq","99","15","120","30",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("4");
            obj.set_readonly("true");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_dept","317","15","120","30",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("5");
            obj.set_readonly("true");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_grade","535","15","120","30",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("6");
            obj.set_readonly("true");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_name","753","15","120","30",null,null,null,null,null,null,this.Div00.form.Div00.form);
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

            obj = new Grid("Grid00","68","95",null,null,"67","75",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("scholorship_ds");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_default");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"95\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"학년\"/><Cell col=\"1\" text=\"학기\"/><Cell col=\"2\" text=\"선행장학금\"/><Cell col=\"3\" text=\"추천장학금\"/><Cell col=\"4\" text=\"성적우수장학금\"/><Cell col=\"5\" text=\"생활지원장학금\"/><Cell col=\"6\" text=\"기타장학금\"/><Cell col=\"7\" text=\"총 합계\"/></Band><Band id=\"body\"><Cell text=\"bind:std_grade\" textAlign=\"center\" suppress=\"1\"/><Cell col=\"1\" text=\"bind:type\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:s_kind\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:s_rec\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:s_smt\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:s_spt\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:s_etc\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:sSum\" textAlign=\"center\"/></Band></Format></Formats>");
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
        this.registerScript("stdReadScholarship.xfdl", function() {
        this.objApp = nexacro.getApplication();


        this.stdReadScholarship_onload = function(obj,e)
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
        		"stdSelectOne.scholarship",//id
        		"/scholarship/stdSelectOne.scholarship",//url (절대경로)
        		"",//in_ds:U
        		"scholorship_ds=out_ds",//()_out_ds
        		"",//argument
        		"fn_callback_selectOne"
        		)


        };

        this.fn_callback_selectOne=function()
        {

        	for(var i=0;i<this.scholorship_ds.getRowCount();i++)
        	{
        		var sDate =this.scholorship_ds.getColumn(i,"s_date");
        		var mon = sDate.substr(5,2);
        		var sMonth = nexacro.toNumber(mon)
        		if(sMonth<8)
        		{
        			this.scholorship_ds.setColumn(i,"type","1학기");
        		}
        		else
        		{
        			this.scholorship_ds.setColumn(i,"type","2학기");
        		}
        	}


        }



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.stdReadScholarship_onload,this);
        };

        this.loadIncludeScript("stdReadScholarship.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
