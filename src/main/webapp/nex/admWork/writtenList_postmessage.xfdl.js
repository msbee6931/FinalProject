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
            obj = new Dataset("pst", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"INT\" size=\"256\"/><Column id=\"confirm\" type=\"STRING\" size=\"256\"/><Column id=\"sender\" type=\"STRING\" size=\"256\"/><Column id=\"receiver\" type=\"STRING\" size=\"256\"/><Column id=\"contents\" type=\"STRING\" size=\"256\"/><Column id=\"seq\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Div("Div00","30","39","1021","451",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("");
            obj.set_border("1px solid #c1c1c1");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","28","26","580","364",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_binddataset("pst");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"57\"/><Column size=\"66\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"296\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"chk\"/><Cell col=\"1\" text=\"confirm\"/><Cell col=\"2\" text=\"sender\"/><Cell col=\"3\" text=\"receiver\"/><Cell col=\"4\" text=\"contents\"/></Band><Band id=\"body\"><Cell text=\"bind:chk\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"bind:confirm\"/><Cell col=\"2\" text=\"bind:sender\"/><Cell col=\"3\" text=\"bind:receiver\"/><Cell col=\"4\" text=\"bind:contents\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div00","621","30","386","391",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_border("1px solid black");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00","23","90","353","279",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("0");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Div("Div00_00","666","39","310","61",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_border("1px solid black");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","31","9","253","43",null,null,null,null,null,null,this.Div00.form.Div00_00.form);
            obj.set_taborder("0");
            obj.set_text("Contents");
            obj.set_textAlign("center");
            obj.set_font("bold 26px/normal \"Arial\",\"-윤고딕320\"");
            this.Div00.form.Div00_00.addChild(obj.name, obj);

            obj = new Button("del_btn","499","392","109","33",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("삭제");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","30","9","200","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("내가쓴 쪽지함");
            obj.set_background("#c1c1c1");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1080,520,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Div00.form.Div00.form.Edit00","value","pst","contents");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("writtenList_postmessage.xfdl", function() {
        this.fn_callback = function(id,ErrorCode,ErrorMsg){
        	trace(id);
        	trace(ErrorMsg);
        	trace(ErrorCode);
        }

        this.rest_onload = function(obj,e)
        {
        	this.transaction(
        			"PMWritten" //id
        			,"/PMWritten.nex"//url
        			,""// inData
        			,"pst=out_ds"// outData
        			,""//strArg
        			,"fn_callback"//callback
        		);
        };

        this.Div00_del_btn_onclick = function(obj,e)
        {
        		let arr = this.pst.extractRows("chk==1");

        	if(arr.length==0 || arr.length== -1){alert("선택된 항목이 없습니다.");return;}

        	this.pst.deleteMultiRows(arr);

        		   this.transaction(
                    "PMDel"
                    ,"/PMDel.nex"
                    ,"in_ds=pst:U"
                    ,""
                    ,""
                    ,"fn_callback"
                 )
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.rest_onload,this);
            this.Div00.form.del_btn.addEventHandler("onclick",this.Div00_del_btn_onclick,this);
        };

        this.loadIncludeScript("writtenList_postmessage.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
