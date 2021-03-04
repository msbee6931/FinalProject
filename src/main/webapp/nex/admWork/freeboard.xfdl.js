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
            obj = new Dataset("free", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"INT\" size=\"256\"/><Column id=\"seq\" type=\"INT\" size=\"256\"/><Column id=\"writer\" type=\"STRING\" size=\"256\"/><Column id=\"contents\" type=\"STRING\" size=\"256\"/><Column id=\"title\" type=\"STRING\" size=\"256\"/><Column id=\"write_date\" type=\"STRING\" size=\"256\"/><Column id=\"view_count\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("search", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">seq</Col><Col id=\"data\">전체</Col></Row><Row><Col id=\"code\">title</Col><Col id=\"data\">제목</Col></Row></Rows>");
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

            obj = new Div("Div00","30","10",null,null,"30","30",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Div00");
            obj.set_cssclass("div_line");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","24","49",null,null,"618","40",null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_binddataset("free");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_default");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"58\"/><Column size=\"72\"/><Column size=\"111\"/><Column size=\"80\"/><Column size=\"56\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"작성자\"/><Cell col=\"2\" text=\"제목\"/><Cell col=\"3\" text=\"작성일\"/><Cell col=\"4\" text=\"조회수\"/></Band><Band id=\"body\"><Cell text=\"bind:chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:writer\" maskeditformat=\"#########\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:title\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:write_date\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:view_count\" textAlign=\"center\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div00",null,"13","568",null,"36","40",null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_cssclass("div_line");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","15","7","449","28",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("1");
            obj.set_text("Contents");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_default");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new WebBrowser("WebBrowser00","14","45","543","364",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("1");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Button("enlargement","476","6","80","28",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("2");
            obj.set_text("확대");
            obj.set_cssclass("btn_default");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","32","9","87","33",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("FreeBoard");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("del_btn",null,null,"100","30","36","4",null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("삭제");
            obj.set_cssclass("btn_del");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00","216","13","115","25",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_cssclass("edt_default");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00","340","13","60","25",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_search");
            obj.set_text("조회");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit01","350","444","38","25",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo00","134","24","93","24",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_innerdataset("search");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_cssclass("cmb_default");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1080,520,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Div00.form.Edit01","value","free","seq");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("freeboard.xfdl", function() {
        	this.objApp = nexacro.getApplication();
        	var login =this.objApp.gds_admin.getColumn(0,'a_seq');


        this.fn_callback = function(id,ErrorCode,ErrorMsg){
        	trace(id);
        	trace(ErrorMsg);
        	trace(ErrorCode);
        }

        this.rest_onload = function(obj,e)
        {
        		this.transaction(
        			"FBLoad" //id
        			,"/FBLoad.nex"//url
        			,""// inData
        			,"free=out_ds"// outData
        			,""//strArg
        			,"fn_callback"//callback
        		);
        };


        this.Div00_del_btn_onclick = function(obj,e)
        {
        	let arr = this.free.extractRows("chk==1");

        	if(arr.length==0 || arr.length== -1){alert("선택된 항목이 없습니다.");return;}

        	this.free.deleteMultiRows(arr);

        		   this.transaction(
                    "FBDel"
                    ,"/FBDel.nex"
                    ,"in_ds=free:U"
                    ,""
                    ,""
                    ,"fn_callback"
                 )
        };






        this.Div00_Button00_onclick = function(obj,e)
        {

        	var cmb = this.Combo00.value;
        	var edit = this.Div00.form.Edit00.value;
        	if(cmb == 'title')
        	{
        		this.free.filter(cmb+".indexOf('"+edit+"')>=0");
        	}else if(cmb=='seq'){
        		this.free.filter("");
        	}
        	this.Div00.form.Edit00.set_value("");
        };


        this.Div00_Grid00_oncellposchanged = function(obj,e)
        {
        	let seq = this.free.getColumnNF(e.row,"seq");

        	this.Div00.form.Div00.form.WebBrowser00.set_url("http://15.165.196.249/free/viewp?seq="+seq+"&login="+login);
        };



        this.Div00_Div00_enlargement_onclick = function(obj,e)
        {
        	var objCF = new ChildFrame();

        	objCF.init("freeEnlargement_pop",100,100,1000,600);

        	objCF.set_titletext("내용 확대");
        	objCF.set_formurl("admWork::freeEnlargement_pop.xfdl");
        	 var objParam = {param1:this.Div00.form.Edit01.value,
        					 param2:login}
        	objCF.showModal(
        		this.getOwnerFrame(),
        		objParam,
        		this,
        		""
        	);
        };


        this.Div00_Grid00_onheadclick = function(obj,e)
        {
        	let flag = obj.getCellProperty("Head",0,"text");
        	let check = flag==0?1:0;
        	if(e.cell==0){
        		obj.setCellProperty("Head",0,"text",check);
        		for(let i = 0;i<this.free.getRowCount();i++){
        			this.free.setColumn(i,"chk",check);
        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.rest_onload,this);
            this.Div00.form.Grid00.addEventHandler("oncellposchanged",this.Div00_Grid00_oncellposchanged,this);
            this.Div00.form.Grid00.addEventHandler("onheadclick",this.Div00_Grid00_onheadclick,this);
            this.Div00.form.Div00.form.enlargement.addEventHandler("onclick",this.Div00_Div00_enlargement_onclick,this);
            this.Div00.form.del_btn.addEventHandler("onclick",this.Div00_del_btn_onclick,this);
            this.Div00.form.Button00.addEventHandler("onclick",this.Div00_Button00_onclick,this);
            this.Div00.form.Edit01.addEventHandler("onchanged",this.Div00_Edit01_onchanged,this);
        };

        this.loadIncludeScript("freeboard.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
