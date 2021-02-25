(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("tuition");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1080,520);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("tuition_ds", this);
            obj._setContents("<ColumnInfo><Column id=\"seq\" type=\"INT\" size=\"256\"/><Column id=\"std_code\" type=\"INT\" size=\"256\"/><Column id=\"std_grade\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"t_enter\" type=\"INT\" size=\"256\"/><Column id=\"t_class\" type=\"INT\" size=\"256\"/><Column id=\"t_std\" type=\"INT\" size=\"256\"/><Column id=\"t_grd\" type=\"INT\" size=\"256\"/><Column id=\"t_ore\" type=\"INT\" size=\"256\"/><Column id=\"tSum\" type=\"INT\" size=\"256\"/><Column id=\"t_date\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("students_ds", this);
            obj._setContents("<ColumnInfo><Column id=\"s_seq\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"age\" type=\"STRING\" size=\"256\"/><Column id=\"email\" type=\"STRING\" size=\"256\"/><Column id=\"contact\" type=\"STRING\" size=\"256\"/><Column id=\"adress\" type=\"STRING\" size=\"256\"/><Column id=\"scholarship\" type=\"STRING\" size=\"256\"/><Column id=\"rest\" type=\"STRING\" size=\"256\"/><Column id=\"grade\" type=\"STRING\" size=\"256\"/><Column id=\"birth\" type=\"STRING\" size=\"256\"/><Column id=\"pw\" type=\"STRING\" size=\"256\"/><Column id=\"gender\" type=\"STRING\" size=\"256\"/><Column id=\"deptCode\" type=\"STRING\" size=\"256\"/><Column id=\"colCode\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","0","0","29",null,null,"0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_visible("false");
            obj.set_background("RGBA(236,135,135,0.71)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","80","0","800","10",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_visible("false");
            obj.set_background("RGBA(236,135,135,0.71)");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","30","38","1021","452",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_border("1px solid #c1c1c1");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_std","9","71","420","330",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_binddataset("students_ds");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_default");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"학번\"/><Cell col=\"1\" text=\"이름\"/><Cell col=\"2\" text=\"학과\"/></Band><Band id=\"body\"><Cell text=\"bind:s_seq\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:name\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:deptCode\" textAlign=\"center\" displaytype=\"combotext\" combodataset=\"deptCode\" combocodecol=\"code\" combodatacol=\"name\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("grd_tuition","439","71","570","330",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_binddataset("tuition_ds");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_default");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"학번\"/><Cell col=\"1\" text=\"학년\"/><Cell col=\"2\" text=\"학기\"/><Cell col=\"3\" text=\"등록금 총 합계\"/></Band><Band id=\"body\"><Cell text=\"bind:std_code\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:std_grade\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:type\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:tSum\" textAlign=\"center\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_del","909","411","100","25",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("삭제");
            obj.set_cssclass("btn_del");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_entire","909","29","100","25",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("전체 보기");
            obj.set_cssclass("btn_default");
<<<<<<< HEAD
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div00","8","21","420","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_cssclass("div_line");
            this.Div00.addChild(obj.name, obj);

=======
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div00","8","21","420","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_cssclass("div_line");
            this.Div00.addChild(obj.name, obj);

>>>>>>> 8f5af974195c2ae46f84e2a8e006a0a0a22f93e8
            obj = new Combo("cmb_cate","15","7","80","25",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("0");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("cmb_default");
            var Div00_form_Div00_form_cmb_cate_innerdataset = new nexacro.NormalDataset("Div00_form_Div00_form_cmb_cate_innerdataset", obj);
            Div00_form_Div00_form_cmb_cate_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">01</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">02</Col><Col id=\"datacolumn\">학번</Col></Row><Row><Col id=\"codecolumn\">03</Col><Col id=\"datacolumn\">이름</Col></Row></Rows>");
            obj.set_innerdataset(Div00_form_Div00_form_cmb_cate_innerdataset);
            obj.set_text("Combo00");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_etcSearch","105","7","130","25",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("1");
            obj.set_displaynulltext("학번 또는 이름 검색");
            obj.set_cssclass("edt_default");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Button("btn_searchEtc","243","7","60","25",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("2");
            obj.set_background("");
            obj.set_cssclass("btn_search");
            obj.set_text("조회");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Button("btn_tuit","314","7","80","25",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("3");
            obj.set_text("입력");
            obj.set_cssclass("btn_insert");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","30","9","200","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text(" 등록금  관리");
            obj.set_cssclass("sta_title");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","1050","0","30",null,null,"0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_visible("false");
            obj.set_background("RGBA(236,135,135,0.71)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","100","490","800","30",null,null,null,null,null,null,this);
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
        this.registerScript("tuition.xfdl", function() {
        this.tuition_onload = function(obj,e)
        {

        	this.transaction(
        		"selectAllStd.students",//id
        		"/students/selectAllStd.students",//url (절대경로)
        		"",//in_ds:U
        		"students_ds=out_ds",//()_out_ds
        		"",//argument
        		"fn_callback_std"
        		)

        		this.transaction(
        		"selectAll.tuition",//id
        		"/tuition/selectAll.tuition",//url (절대경로)
        		"",//in_ds:U
        		"tuition_ds=out_ds",//()_out_ds
        		"",//argument
        		"fn_callback_tuition"
        		)



        };

        this.fn_callback_tuition = function()
        {
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
        };


        this.std_code="";
        this.Div00_grd_std_oncellclick = function(obj,e)
        {
        	this.std_code = this.students_ds.getColumn(e.row,"s_seq");
        	this.tuition_ds.filter("std_code=='"+this.std_code+"'");
        };

        this.Div00_btn_tuit_onclick = function(obj,e)
        {

        	//등록금 입력을 위한 모달창
        	var objCF = new ChildFrame();
        	objCF.init("tuition_insert_pop",400,100,400,400);
        	objCF.set_titletext(this.std_code+"등록금 입력");
        	objCF.set_formurl("admWork::tuition_insert_pop.xfdl");
        	objCF.showModal(
        		this.getOwnerFrame(),
        		{std_code:this.std_code}, // 학번
        		this,
        		"fn_callback_insertTuition"
        	);
        };

        this.fn_callback_insertTuition = function()
        {
        	this.reload();
        }



        this.Div00_grd_tuition_oncelldblclick = function(obj,e)
        {
        	var seq = this.tuition_ds.getColumn(e.row,"seq");
        	//등록금 수정을 위한 모달창
        	var objCF = new ChildFrame();
        	objCF.init("tuition_read_pop",400,100,400,400);
        	objCF.set_titletext("등록금 확인하기");
        	objCF.set_formurl("admWork::tuition_read_pop.xfdl");
        	objCF.showModal(
        		this.getOwnerFrame(),
        		{seq:seq}, // 학번+작성날짜
        		this,
        		"fn_callback_updateTuition"
        	);
        };

        this.fn_callback_updateTuition=function()
        {
        	this.reload();
        }


        this.seq="";
        this.Div00_grd_tuition_oncellclick = function(obj,e)
        {
        	this.seq=this.tuition_ds.getColumn(e.row,"seq");
        };

        this.Div00_btn_del_onclick = function(obj,e)
        {
        	alert(this.seq)
        	var nRow = this.tuition_ds.findRow("seq",this.seq);
        	this.tuition_ds.deleteRow(nRow);
        	this.transaction(
        		"deleteOne.tuition",//id
        		"/tuition/deleteOne.tuition",//url (절대경로)
        		"",//in_ds:U
        		"out_ds=tuition_ds",//()_out_ds
        		"seq="+this.seq,//argument
        		"fn_callback"
        		)
        };

        this.Div00_btn_searchEtc_onclick = function(obj,e)
        {
        	var cate = this.Div00.form.cmb_cate.value;
        	var value = this.Div00.form.edt_etcSearch.value;
        	if(cate == '01')
        	{
        		this.students_ds.filter("");
        	}
        	else if(cate == '02')
        	{
        		this.students_ds.filter("s_seq=='"+value+"'");
        	}
        	else if(cate == '03')
        	{
        		this.students_ds.filter("name=='"+value+"'");
        	}

        	cate="";
        };

        this.Div00_btn_entire_onclick = function(obj,e)
        {
        	this.tuition_ds.filter("");
        };

<<<<<<< HEAD
        this.Static01_onclick = function(obj,e)
        {

        };
=======
>>>>>>> 8f5af974195c2ae46f84e2a8e006a0a0a22f93e8

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.tuition_onload,this);
            this.Div00.form.grd_std.addEventHandler("oncellclick",this.Div00_grd_std_oncellclick,this);
            this.Div00.form.grd_tuition.addEventHandler("oncelldblclick",this.Div00_grd_tuition_oncelldblclick,this);
            this.Div00.form.grd_tuition.addEventHandler("oncellclick",this.Div00_grd_tuition_oncellclick,this);
            this.Div00.form.btn_del.addEventHandler("onclick",this.Div00_btn_del_onclick,this);
            this.Div00.form.btn_entire.addEventHandler("onclick",this.Div00_btn_entire_onclick,this);
            this.Div00.form.Div00.form.btn_searchEtc.addEventHandler("onclick",this.Div00_btn_searchEtc_onclick,this);
            this.Div00.form.Div00.form.btn_tuit.addEventHandler("onclick",this.Div00_btn_tuit_onclick,this);
            this.Static01.addEventHandler("onclick",this.Static01_onclick,this);
        };

        this.loadIncludeScript("tuition.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
