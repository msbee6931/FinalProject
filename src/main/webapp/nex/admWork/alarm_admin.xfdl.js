(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("alarm_admin");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("admin_alarm", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"INT\" size=\"256\"/><Column id=\"confirm\" type=\"STRING\" size=\"256\"/><Column id=\"sender\" type=\"STRING\" size=\"256\"/><Column id=\"receiver\" type=\"STRING\" size=\"256\"/><Column id=\"contents\" type=\"STRING\" size=\"256\"/><Column id=\"reply\" type=\"STRING\" size=\"256\"/><Column id=\"seq\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","26","18","218","46",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Post Message");
            obj.set_cssclass("sta_title");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","10","80","230","450",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("admin_alarm");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"41\"/><Column size=\"92\"/><Column size=\"99\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" text=\"보낸이\"/><Cell col=\"2\" text=\"받는이\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:chk\"/><Cell col=\"1\" text=\"bind:sender\" edittype=\"mask\" maskeditformat=\"#########\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:receiver\" edittype=\"mask\" maskeditformat=\"#########\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("del_btn","135","542","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("삭제");
            obj.set_cssclass("btn_del");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","283","14","474","266",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("");
            obj.set_cssclass("div_line");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","18","7","425","25",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("내가 쓴 내용");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_default");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00","20","45","424","201",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_cssclass("edt_default");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div00_00","283","290","474","258",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("");
            obj.set_cssclass("div_line");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","23","14","425","25",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("0");
            obj.set_text("받은 답장");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_default");
            this.Div00_00.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","26","49","422","200",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("1");
            obj.set_cssclass("textarea_default");
            this.Div00_00.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",800,600,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Div00.form.Edit00","value","admin_alarm","contents");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Div00_00.form.TextArea00","value","admin_alarm","reply");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("alarm_admin.xfdl", function() {
        this.fn_callback = function(id,ErrorCode,ErrorMsg){
        	trace(id);
        	trace(ErrorMsg);
        	trace(ErrorCode);
        }



        this.del_btn_onclick = function(obj,e)
        {
        	let arr = this.admin_alarm.extractRows("chk==1");

        	if(arr.length==0 || arr.length== -1){alert("선택된 항목이 없습니다.");return;}

        	this.admin_alarm.deleteMultiRows(arr);

        		   this.transaction(
                    "PMDel"
                    ,"/PMDel.nex"
                    ,"in_ds=admin_alarm:U"
                    ,""
                    ,""
                    ,"fn_callback"
                 )
        };

        this.alarm_admin_onload = function(obj,e)
        {
        	this.transaction(
        			"PMReceived" //id
        			,"/PMReceived.nex"//url
        			,""// inData
        			,"admin_alarm=out_ds"// outData
        			,""//strArg
        			,"fn_callback"//callback
        		);
        };




        this.Div00_Edit00_oninput = function(obj,e)
        {
        	alert("내용은 바꾸실수 없습니다.\n 바뀐 내용은 저장되지 않습니다.");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.alarm_admin_onload,this);
            this.del_btn.addEventHandler("onclick",this.del_btn_onclick,this);
            this.Div00.form.Edit00.addEventHandler("oninput",this.Div00_Edit00_oninput,this);
        };

        this.loadIncludeScript("alarm_admin.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
