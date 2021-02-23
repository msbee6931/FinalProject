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
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"INT\" size=\"256\"/><Column id=\"confirm\" type=\"STRING\" size=\"256\"/><Column id=\"sender\" type=\"STRING\" size=\"256\"/><Column id=\"receiver\" type=\"STRING\" size=\"256\"/><Column id=\"contents\" type=\"STRING\" size=\"256\"/><Column id=\"seq\" type=\"STRING\" size=\"256\"/><Column id=\"reply\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj.set_cssclass("div_line");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","25","296","391",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_binddataset("pst");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"49\"/><Column size=\"121\"/><Column size=\"127\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"chk\"/><Cell col=\"1\" text=\"sender\"/><Cell col=\"2\" text=\"receiver\"/></Band><Band id=\"body\"><Cell text=\"bind:chk\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"bind:sender\" textAlign=\"center\" edittype=\"mask\" maskeditformat=\"#########\"/><Cell col=\"2\" text=\"bind:receiver\" textAlign=\"center\" edittype=\"mask\" maskeditformat=\"#########\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div00","320","240","679","172",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_cssclass("div_line");
            this.Div00.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","8","10","665","154",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("0");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Div("Div00_00","320","40","679","163",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_cssclass("div_line");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00","6","8","668","147",null,null,null,null,null,null,this.Div00.form.Div00_00.form);
            obj.set_taborder("0");
            obj.set_cssclass("edt_default");
            this.Div00.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static00","320","8","152","25",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("My contents");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_default");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00","319","209","152","25",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("reply");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_default");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("del_btn","198","418","100","28",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("삭제");
            obj.set_cssclass("btn_del");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("send_btn","889","417","100","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("전송");
            obj.set_cssclass("btn_default");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","30","9","200","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("받은 쪽지함");
            obj.set_cssclass("sta_title");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1080,520,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Div00.form.Div00_00.form.Edit00","value","pst","contents");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Div00.form.Div00.form.TextArea00","value","pst","reply");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("received_postmessage.xfdl", function() {
        this.fn_callback = function(id,ErrorCode,ErrorMsg){
        	trace(id);
        	trace(ErrorMsg);
        	trace(ErrorCode);
        }


        this.Div00_del_btn_onclick = function(obj,e)
        {
        		let arr = this.pst.extractRows("chk==1");

        	if(arr.length==0 || arr.length== -1){alert("선택된 항목이 없습니다.");return;}

        	this.admin_alarm.deleteMultiRows(arr);

        		   this.transaction(
                    "PMDel"
                    ,"/PMDel.nex"
                    ,"in_ds=pst:U"
                    ,""
                    ,""
                    ,"fn_callback"
                 )

        		 alert("삭제되었습니다.");
        };

        this.Div00_send_btn_onclick = function(obj,e)
        {
        		   this.transaction(
                    "PMUpd"
                    ,"/PMUpd.nex"
                    ,"in_ds=pst:U"
                    ,""
                    ,""
                    ,"fn_callback"
                 )

        		 alert("전송되었습니다");
        };

        this.rest_onload = function(obj,e)
        {
        			this.transaction(
        			"PMReceived" //id
        			,"/PMReceived.nex"//url
        			,""// inData
        			,"pst=out_ds"// outData
        			,""//strArg
        			,"fn_callback"//callback
        		);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.rest_onload,this);
            this.Div00.form.del_btn.addEventHandler("onclick",this.Div00_del_btn_onclick,this);
            this.Div00.form.send_btn.addEventHandler("onclick",this.Div00_send_btn_onclick,this);
        };

        this.loadIncludeScript("received_postmessage.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
