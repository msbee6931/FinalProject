(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("RejectMsg");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(300,400);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00","20","20","49","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("과목코드");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new TextArea("reason","20","90","260","258",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","20","70","60","20",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("거절 사유");
            this.addChild(obj.name, obj);

            obj = new Static("sta_classSeq","79","28","201","25",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("");
            obj.set_padding("0px 0px 0px 5px");
            obj.set_wordWrap("char");
            obj.set_cssclass("sta_line");
            this.addChild(obj.name, obj);

            obj = new Button("btn_send","45","358","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("보내기");
            obj.set_cssclass("btn_default");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel","155","358","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("취소");
            obj.set_cssclass("btn_can");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",300,400,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("rejectMsg.xfdl", function() {

        this.btn_cancel_onclick = function(obj,e)
        {
        	this.close("");
        };

        this.rejectMsg_onload = function(obj,e)
        {
        	var classSeq = this.parent.classSeq;
        	var msg = this.parent.msg;
        	var view = this.parent.view;
        	if(view == 'Y'){
        		this.btn_send.set_visible(false);
        		this.btn_cancel.move(105,358)
        	}
        	this.sta_classSeq.set_text(classSeq);
        	this.reason.set_value(msg);
        };

        this.btn_send_onclick = function(obj,e)
        {
        	var classSeq = this.sta_classSeq.text;
        	var reason = this.reason.text;
        	var send = classSeq + "|" + reason;
        	if(reason == ""){
        		alert("거절 사유를 입력해주세요");
        	}else{
        		this.close(send);
        	}
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.rejectMsg_onload,this);
            this.sta_classSeq.addEventHandler("onclick",this.sta_classSeq_onclick,this);
            this.btn_send.addEventHandler("onclick",this.btn_send_onclick,this);
            this.btn_cancel.addEventHandler("onclick",this.btn_cancel_onclick,this);
        };

        this.loadIncludeScript("rejectMsg.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
