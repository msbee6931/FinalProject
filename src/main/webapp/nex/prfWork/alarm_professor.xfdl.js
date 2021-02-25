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
            obj.set_font("18pt \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","10","80","230","450",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("admin_alarm");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_default");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"41\"/><Column size=\"42\"/><Column size=\"68\"/><Column size=\"77\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" text=\"확인\"/><Cell col=\"2\" text=\"보낸이\"/><Cell col=\"3\" text=\"받는이\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:chk\"/><Cell col=\"1\" text=\"bind:confirm\"/><Cell col=\"2\" text=\"bind:sender\" displaytype=\"text\"/><Cell col=\"3\" text=\"bind:receiver\" displaytype=\"text\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("del_btn","135","542","102","36",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("삭제");
            obj.set_cssclass("btn_del");
            this.addChild(obj.name, obj);

            obj = new Button("check_btn","8","542","102","36",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("확인");
            obj.set_cssclass("btn_default");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","283","14","474","266",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("");
            obj.set_border("1px solid black");
            obj.set_cssclass("div_line");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","18","7","425","25",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("내용");
            obj.set_border("1px solid black");
            obj.set_textAlign("center");
            obj.set_font("16px/normal \"Arial\",\"-윤고딕320\"");
            obj.set_cssclass("sta_default");
            this.Div00.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","20","44","426","205",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_cssclass("txt_default");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div00_00","283","290","474","258",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("");
            obj.set_border("1px solid black");
            obj.set_cssclass("div_Line");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","23","14","425","25",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("0");
            obj.set_text("답장");
            obj.set_border("1px solid black");
            obj.set_textAlign("center");
            obj.set_font("16px/normal \"Arial\",\"-윤고딕320\"");
            obj.set_cssclass("sta_default");
            this.Div00_00.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","22","49","427","190",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("1");
            obj.set_cssclass("txt_default");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button00","650","558","104","36",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("전송");
            obj.set_cssclass("btn_default");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",800,600,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Div00.form.TextArea00","value","admin_alarm","contents");
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
        this.registerScript("alarm_professor.xfdl", function() {
        this.fn_callback = function(id,ErrorCode,ErrorMsg){
        	trace(id);
        	trace(ErrorMsg);
        	trace(ErrorCode);
        }

        this.Button00_onclick = function(obj,e)
        {

        		var reply = nexacro.wrapQuote(this.Div00_00.form.TextArea00.value);

        	   this.transaction(
                    "PMUpd"
                    ,"/PMUpd.nex"
                    ,"in_ds=admin_alarm:U"
                    ,""
                    ,"reply="+reply
                    ,"fn_callback"
                 )
        		 alert("등록되었습니다.");
        };

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
        			"PMLoad" //id
        			,"/PMLoad.nex"//url
        			,""// inData
        			,"admin_alarm=out_ds"// outData
        			,""//strArg
        			,"fn_callback"//callback
        		);
        };

        this.check_btn_onclick = function(obj,e)
        {
        	let arr = this.admin_alarm.extractRows("chk==1");

        	if(arr.length==0 || arr.length== -1){alert("선택된 항목이 없습니다.");return;}



        		   this.transaction(
                    "PMConfirm"
                    ,"/PMConfirm.nex"
                    ,"in_ds=admin_alarm:U"
                    ,"admin_alarm=out_ds"
                    ,""
                    ,"fn_callback"
                 )
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.alarm_admin_onload,this);
            this.Grid00.addEventHandler("oncellclick",this.Grid00_oncellclick,this);
            this.del_btn.addEventHandler("onclick",this.del_btn_onclick,this);
            this.check_btn.addEventHandler("onclick",this.check_btn_onclick,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };

        this.loadIncludeScript("alarm_professor.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
