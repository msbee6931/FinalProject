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
            obj = new Dataset("reply", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"INT\" size=\"256\"/><Column id=\"seq\" type=\"INT\" size=\"256\"/><Column id=\"writer\" type=\"STRING\" size=\"256\"/><Column id=\"contents\" type=\"STRING\" size=\"256\"/><Column id=\"title\" type=\"STRING\" size=\"256\"/><Column id=\"write_date\" type=\"STRING\" size=\"256\"/><Column id=\"view_count\" type=\"STRING\" size=\"256\"/><Column id=\"reply\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("search", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">title</Col><Col id=\"data\">title</Col></Row><Row><Col id=\"code\">writer</Col><Col id=\"data\">writer</Col></Row></Rows>");
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
            obj.set_cssclass("div_line");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","24","45","376",null,null,"51",null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_binddataset("reply");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_default");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"51\"/><Column size=\"63\"/><Column size=\"124\"/><Column size=\"80\"/><Column size=\"56\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"확인\"/><Cell col=\"1\" text=\"작성자\"/><Cell col=\"2\" text=\"제목\"/><Cell col=\"3\" text=\"작성일\"/><Cell col=\"4\" text=\"조회수\"/></Band><Band id=\"body\"><Cell text=\"bind:chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:writer\" textAlign=\"center\" maskeditformat=\"#########\" displaytype=\"text\"/><Cell col=\"2\" text=\"bind:title\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:write_date\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:view_count\" textAlign=\"center\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div00","414","13",null,"221","12",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_cssclass("div_line");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","15","7",null,"28","107",null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("1");
            obj.set_text("Contents");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"Arial\",\"-윤고딕320\"");
            obj.set_cssclass("sta_default");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new WebBrowser("WebBrowser00","16","44",null,"167","17",null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("1");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Button("enlargement",null,"6","80","28","17",null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("2");
            obj.set_text("확대");
            obj.set_cssclass("btn_default");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Div("Div01","414","245",null,null,"10","51",null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("Div01");
            obj.set_cssclass("div_line");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","12","5",null,null,"19","147",null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("0");
            obj.set_text("Reply");
            obj.set_textAlign("center");
            obj.set_font("bold 16px/normal \"Arial\",\"-윤고딕320\"");
            obj.set_cssclass("sta_default");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","12","39",null,null,"19","35",null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("1");
            obj.set_cssclass("txt_default");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static00","32","8","348","33",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("RequestBoard");
            obj.set_font("bold italic 16px/normal \"Arial\",\"-윤고딕320\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00",null,null,"100","25","10","15",null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("전송");
            obj.set_cssclass("btn_default");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("del_btn","303",null,"100","25",null,"15",null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("삭제");
            obj.set_cssclass("btn_del");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo00","162","16","66","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_innerdataset("search");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_cssclass("cmb_default");
            obj.set_text("Combo00");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00","240","16","89","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_cssclass("edt_default");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit01","220",null,"41","26",null,"15",null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00","370","27","60","25",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_search");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1080,520,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Div00.form.Div01.form.TextArea00","value","reply","reply");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Div00.form.Edit01","value","reply","seq");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("requestboard.xfdl", function() {
        	this.objApp = nexacro.getApplication();
        	var login =this.objApp.gds_admin.getColumn(0,'a_seq');

        this.fn_callback = function(id,ErrorCode,ErrorMsg){
        	trace(id);
        	trace(ErrorMsg);
        	trace(ErrorCode);
        }

        this.Div00_Button00_onclick = function(obj,e)
        {
        	var reply = nexacro.wrapQuote(this.Div00.form.Div01.form.TextArea00.value);

        	 this.transaction(
                    "ReplyUpd"
                    ,"/ReplyUpd.nex"
                    ,"in_ds=reply:U"
                    ,""
                    ,"reply="+reply
                    ,"fn_callback"
                 )
        	alert("등록되었습니다");
        };

        this.rest_onload = function(obj,e)
        {
        	this.transaction(
        			"RBLoad" //id
        			,"/RBLoad.nex"//url
        			,""// inData
        			,"reply=out_ds"// outData
        			,""//strArg
        			,"fn_callback"//callback
        		);
        };

        this.Div00_del_btn_onclick = function(obj,e)
        {
        	let arr = this.reply.extractRows("chk==1");

        	if(arr.length==0 || arr.length== -1){alert("선택된 항목이 없습니다.");return;}

        	this.reply.deleteMultiRows(arr);

        		   this.transaction(
                    "RBDel"
                    ,"/RBDel.nex"
                    ,"in_ds=reply:U"
                    ,""
                    ,""
                    ,"fn_callback"
                 )
        };






        this.Div00_Button01_onclick = function(obj,e)
        {
        	let type = this.Div00.form.Combo00.value
        	let value=this.Div00.form.Edit00.value;
        	let filter = type+"='"+value+"'";
        	this.reply.filter(filter);
        };

        this.Div00_Grid00_oncellposchanged = function(obj,e)
        {
        	let seq = this.reply.getColumnNF(e.row,"seq");

        	this.Div00.form.Div00.form.WebBrowser00.set_url("http://15.165.196.249/request/viewp?seq="+seq+"&login="+login);

        };

        this.Div00_Div00_enlargement_onclick = function(obj,e)
        {

        	var objCF = new ChildFrame();
        	objCF.init("requestEnlargement_pop",100,100,1200,600);
        	objCF.set_titletext("내용 확대");
        	objCF.set_formurl("admWork::requestEnlargement_pop.xfdl");
        	 var objParam = {param1:this.Div00.form.Edit01.value,
        					 param2:login}
        	objCF.showModal(
        		this.getOwnerFrame(),
        		objParam,
        		this,
        		""
        	);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.rest_onload,this);
            this.Div00.form.Grid00.addEventHandler("oncellposchanged",this.Div00_Grid00_oncellposchanged,this);
            this.Div00.form.Div00.form.enlargement.addEventHandler("onclick",this.Div00_Div00_enlargement_onclick,this);
            this.Div00.form.Button00.addEventHandler("onclick",this.Div00_Button00_onclick,this);
            this.Div00.form.del_btn.addEventHandler("onclick",this.Div00_del_btn_onclick,this);
            this.Div00.form.Edit00.addEventHandler("onchanged",this.Div00_Edit00_onchanged,this);
            this.Button00.addEventHandler("onclick",this.Div00_Button00_onclick,this);
        };

        this.loadIncludeScript("requestboard.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
