(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("NoticeLocation");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new WebBrowser("web_notice","0","0","800","600",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",800,600,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("NoticeLocation.xfdl", function() {
        this.NoticeLocation_onload = function(obj,e)
        {
        	var part = this.parent.part;
        	trace(part);
        	if(part == "A"){
        		this.web_notice.set_url("http://localhost/normalList.notice?page=1");
        	}else if(part =="B"){
        		this.web_notice.set_url("http://localhost/academicList.notice?page=1");
        	}else if(part =="C"){
        		this.web_notice.set_url("http://localhost/scholarList.notice?page=1");
        	}else if(part =="D"){
        		this.web_notice.set_url("http://localhost/employmentList.notice?page=1");
        	}else{
        		alert("에러!! 지속적인 에러 발생시 관리자에게 문의해주세요");
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.NoticeLocation_onload,this);
        };

        this.loadIncludeScript("NoticeLocation.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
