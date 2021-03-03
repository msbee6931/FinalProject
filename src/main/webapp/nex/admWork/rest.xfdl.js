(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("rest");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1080,520);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("rlist_ds", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"seq\" type=\"STRING\" size=\"256\"/><Column id=\"std_code\" type=\"STRING\" size=\"256\"/><Column id=\"title\" type=\"STRING\" size=\"256\"/><Column id=\"writeDate\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","0","0","30","520",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_visible("false");
            obj.set_background("RGBA(236,135,135,0.71)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","80","0","800","10",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_visible("false");
            obj.set_background("RGBA(236,135,135,0.71)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","1050","0","30","520",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_visible("false");
            obj.set_background("RGBA(236,135,135,0.71)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","100","490","800","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_visible("false");
            obj.set_background("RGBA(236,135,135,0.71)");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","30","10",null,null,"29","30",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Div00");
            obj.set_border("1px solid #c1c1c1");
            obj.set_cssclass("div_line");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","9","29",null,null,"10","59",null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_binddataset("rlist_ds");
            obj.set_cssclass("grd_default");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"32\"/><Column size=\"38\"/><Column size=\"80\"/><Column size=\"382\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"0\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"No\"/><Cell col=\"2\" text=\"학번\"/><Cell col=\"3\" text=\"제목\"/><Cell col=\"4\" text=\"작성날짜\"/></Band><Band id=\"body\"><Cell text=\"bind:chk\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:seq\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:std_code\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:title\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:writeDate\" displaytype=\"date\" textAlign=\"center\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_del",null,null,"100","25","40","55",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("삭제");
            obj.set_cssclass("btn_del");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1080,520,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Div00.form.edt_title01_00","value","students_ds","adress");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Div00.form.edt_title00_00","value","students_ds","birth");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Div00.form.edt_title00_01","value","students_ds","contact");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Div00.form.edt_title00_00_00","value","students_ds","name");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("rest.xfdl", function() {

        this.rest_onload = function(obj,e)
        {
        	this.transaction(
        		"selectAllRest",//id
        		"/absence/selectAllRest.absence",//url (절대경로)
        		"",//in_ds:U
        		"rlist_ds=out_ds",//()_out_ds
        		"",//argument
        		"fn_callback"
        	)
        };



        this.Div00_Grid00_oncelldblclick = function(obj,e)
        {
        	var seq = this.rlist_ds.getColumn(e.row,"seq");
        	var std_code = this.rlist_ds.getColumn(e.row,"std_code");

        	//내용 확인을 위한 모달 창
        	var objCF = new ChildFrame();
        	var x = this.width/2-500;
        	var y = this.height/2-300
        	objCF.init("rest_pop",x,y,400,400);
        	objCF.set_titletext("복학신청 자세히 보기");
        	objCF.set_formurl("admWork::rest_pop.xfdl");
        	objCF.showModal(
        		this.getOwnerFrame(),
        		{seq:seq, std_code:std_code}, // 모달창에 seq 값 넘기기
        		this,
        		"fn_callback_pop_s"
        	);
        };


        this.seq="";
        this.Div00_Grid00_oncellclick = function(obj,e)
        {
        	this.seq = this.rlist_ds.getColumn(e.row,"seq");
        };

        this.Div00_btn_del_onclick = function(obj,e)
        {
        	var objDs = this.rlist_ds;
        	var arr = objDs.extractRows("chk==1");
        	if(arr.length==0 || arr.length== -1)
        	{
        		alert("선택된 항목이 없습니다.");
        		return;
        	}
        	else if (objDs.getRowCount() == 0)
        	{
        		alert("선택된 항목이 없습니다.");
        		return;
        	}

        	objDs.deleteMultiRows(arr);

        	this.transaction(
        		"deleteRest.absence",//id
        		"/absence/deleteRest.absence",//url (절대경로)
        		"in_ds=rlist_ds:U",//in_ds:U
        		"",//()_out_ds
        		"seq="+this.seq,//argument
        		"fn_callback"
        	)

        	this.Div00.form.Grid00.setCellProperty("head",0,"text",0);
        };



        this.Div00_Grid00_onheadclick = function(obj,e)
        {
        	if(e.cell == 0)
            {
                this.gf_setCheckAll(obj, e);
            }
        };

        this.gv_isCheckAll = 0;
        this.gf_setCheckAll = function(obj, e)
        {
            var sColID = obj.getCellProperty("body", e.cell, "text").replace("bind:", "");

        	var sheadValue = obj.getCellProperty("head",e.cell,"text");

            if(sColID == "chk")
            {
        		sheadValue = (sheadValue =="1"? "0":"1");
        		obj.setCellProperty("head",e.cell,"text",sheadValue);

        		this.rlist_ds.set_enableevent(false);
        		for(var i=0; i< this.rlist_ds.getRowCount(); i++)
        		{
        			this.rlist_ds.setColumn(i, "chk",sheadValue);
        		}
        		this.rlist_ds.set_enableevent(true);
            }

        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.rest_onload,this);
            this.Div00.form.Grid00.addEventHandler("oncellclick",this.Div00_Grid00_oncellclick,this);
            this.Div00.form.Grid00.addEventHandler("oncelldblclick",this.Div00_Grid00_oncelldblclick,this);
            this.Div00.form.Grid00.addEventHandler("onheadclick",this.Div00_Grid00_onheadclick,this);
            this.btn_del.addEventHandler("onclick",this.Div00_btn_del_onclick,this);
        };

        this.loadIncludeScript("rest.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
