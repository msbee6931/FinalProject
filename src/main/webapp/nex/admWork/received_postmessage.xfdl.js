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

            obj = new Div("Div00","30","10",null,null,"29","30",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("");
            obj.set_cssclass("div_line");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","9","319",null,null,"49",null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_binddataset("pst");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_default");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"49\"/><Column size=\"57\"/><Column size=\"109\"/><Column size=\"101\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"확인\"/><Cell col=\"2\" text=\"보낸이\"/><Cell col=\"3\" text=\"받는이\"/></Band><Band id=\"body\"><Cell text=\"bind:chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:confirm\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:sender\" textAlign=\"center\" displaytype=\"text\"/><Cell col=\"3\" text=\"bind:receiver\" textAlign=\"center\" displaytype=\"text\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div00","330",null,null,"189","10","49",null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_cssclass("div_line");
            this.Div00.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","8",null,null,"168","9","9",null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("0");
            obj.set_cssclass("txt_default");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Div("Div00_00","330","40",null,null,"10","275",null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_cssclass("div_line");
            this.Div00.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","8","8",null,null,"7","9",null,null,null,null,this.Div00.form.Div00_00.form);
            obj.set_taborder("0");
            obj.set_cssclass("txt_default");
            this.Div00.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static00","330","9","152","25",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("받은 메세지");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_default");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00","329","Div00_00:6","152","25",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("답장 쓰기");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_default");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("del_btn","219",null,"100","25",null,"13",null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("삭제");
            obj.set_cssclass("btn_del");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("send_btn",null,null,"100","25","10","14",null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("전송");
            obj.set_cssclass("btn_default");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00","153",null,"87","25",null,"44",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("확인");
            obj.set_cssclass("btn_default");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1080,520,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","Div00.form.Div00.form.TextArea00","value","pst","reply");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","Div00.form.Div00_00.form.TextArea00","value","pst","contents");
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

        	this.pst.deleteMultiRows(arr);

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
        		  var reply = nexacro.wrapQuote(this.Div00.form.Div00.form.TextArea00.value);
        		   this.transaction(
                    "PMUpd"
                    ,"/PMUpd.nex"
                    ,"in_ds=pst:U"
                    ,"pst=out_ds"
                    ,"reply="+reply
                    ,"fn_callback"
                 )
        		 alert("등록되었습니다.");
        };

        this.rest_onload = function(obj,e)
        {
        			this.transaction(
        			"PMReceivedP" //id
        			,"/PMReceivedP.nex"//url
        			,""// inData
        			,"pst=out_ds"// outData
        			,""//strArg
        			,"fn_callback"//callback
        		);
        };

        this.Button00_onclick = function(obj,e)
        {
        		let arr = this.pst.extractRows("chk==1");

        	if(arr.length==0 || arr.length== -1){alert("선택된 항목이 없습니다.");return;}



        		   this.transaction(
                    "PMConfirm"
                    ,"/PMConfirm.nex"
                    ,"in_ds=pst:U"
                    ,"pst=out_ds"
                    ,""
                    ,"fn_callback"
                 )
        };

        this.Div00_Grid00_onheadclick = function(obj,e)
        {
        				let flag = obj.getCellProperty("Head",0,"text");
        	let check = flag==0?1:0;
        	if(e.cell==0){
        		obj.setCellProperty("Head",0,"text",check);
        		for(let i = 0;i<this.pst.getRowCount();i++){
        			this.pst.setColumn(i,"chk",check);
        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.rest_onload,this);
            this.Div00.form.Grid00.addEventHandler("onheadclick",this.Div00_Grid00_onheadclick,this);
            this.Div00.form.del_btn.addEventHandler("onclick",this.Div00_del_btn_onclick,this);
            this.Div00.form.send_btn.addEventHandler("onclick",this.Div00_send_btn_onclick,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };

        this.loadIncludeScript("received_postmessage.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
