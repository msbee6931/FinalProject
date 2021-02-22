(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("deptStudent");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1080,520);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_students", this);
            obj._setContents("<ColumnInfo><Column id=\"s_seq\" type=\"INT\" size=\"256\"/><Column id=\"pw\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"secNumber\" type=\"STRING\" size=\"256\"/><Column id=\"email\" type=\"STRING\" size=\"256\"/><Column id=\"contact\" type=\"STRING\" size=\"256\"/><Column id=\"adress\" type=\"STRING\" size=\"256\"/><Column id=\"scholarship\" type=\"STRING\" size=\"256\"/><Column id=\"rest\" type=\"STRING\" size=\"256\"/><Column id=\"grade\" type=\"STRING\" size=\"256\"/><Column id=\"gender\" type=\"STRING\" size=\"256\"/><Column id=\"deptCode\" type=\"STRING\" size=\"256\"/><Column id=\"colCode\" type=\"STRING\" size=\"256\"/><Column id=\"colGrade\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Static("Static00_01_00","100","490","800","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_visible("false");
            obj.set_background("RGBA(236,135,135,0.71)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","1051","0","29","520",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_visible("false");
            obj.set_background("RGBA(236,135,135,0.71)");
            this.addChild(obj.name, obj);

            obj = new Grid("gr_classList","29","70","411","420",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("ds_students");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"104\"/><Column size=\"93\"/><Column size=\"65\"/><Column size=\"68\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"학번\"/><Cell col=\"1\" text=\"성명\"/><Cell col=\"2\" text=\"학년\"/><Cell col=\"3\" text=\"성별\"/><Cell col=\"4\" text=\"재적상태\"/></Band><Band id=\"body\"><Cell text=\"bind:s_seq\"/><Cell col=\"1\" text=\"bind:name\"/><Cell col=\"2\" text=\"bind:colGrade\"/><Cell col=\"3\" text=\"bind:gender\"/><Cell col=\"4\" text=\"bind:rest\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Combo("co_grade","78","30","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var co_grade_innerdataset = new nexacro.NormalDataset("co_grade_innerdataset", obj);
            co_grade_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">&quot;&quot;</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">1학년</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">2학년</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">3학년</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">4학년</Col></Row></Rows>");
            obj.set_innerdataset(co_grade_innerdataset);
            obj.set_text("전체");
            obj.set_value("\"\"");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("sta_grade","45","30","30","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("학년");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch","410","30","30","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("btn_search");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_search","292","36","108","20",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new Combo("co_name","188","30","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var co_name_innerdataset = new nexacro.NormalDataset("co_name_innerdataset", obj);
            co_name_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">s_seq</Col><Col id=\"datacolumn\">학번</Col></Row><Row><Col id=\"codecolumn\">name</Col><Col id=\"datacolumn\">이름</Col></Row></Rows>");
            obj.set_innerdataset(co_name_innerdataset);
            obj.set_text("");
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
        this.registerScript("deptStudent.xfdl", function() {
        this.objApp = nexacro.getApplication();
        this.deptStudent_onload = function(obj,e)
        {
        	var deptCode= this.objApp.gds_professor.getColumn(0,"deptCode");
        	this.transaction(
        				"deptStudents"
        				,"/deptStudents.pro"
        				,""
        				,"ds_students=out_ds"
        				,"deptCode="+deptCode
        				,"fn_callback"
        			);
        };
        this.fn_callback =function(sId,errCd,errMsg){
        	 if (errCd < 0) {
        		trace("Error["+errCd+"]:"+errMsg);
             }
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.deptStudent_onload,this);
        };

        this.loadIncludeScript("deptStudent.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
