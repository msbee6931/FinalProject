(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("passwordPop");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(200,200);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00","25","25","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("현재비밀번호를입력하세요");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_pw","25","85","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ok","40","160","40","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("확인");
            this.addChild(obj.name, obj);

            obj = new Button("btn_calcel","120","160","40","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("취소");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",200,200,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("passwordPop.xfdl", function() {


        this.btn_calcel_onclick = function(obj,e)
        {
        	this.close("");
        };

        this.btn_ok_onclick = function(obj,e)
        {
        	var pw = this.parent.pw;
        	var cpw = this.edt_pw.value;
        	var shaObj = new jsSHA("SHA-256","TEXT");
        	shaObj.update(cpw);
        	trace(pw);

        	var hash = shaObj.getHash("HEX");
        	if(pw.length<64){
        	var shaaObj = new jsSHA("SHA-256","TEXT");
        	shaaObj.update(pw);
        	var hush = shaaObj.getHash("HEX");
        	if(hush == hash){
        	if(this.confirm("수정하시겠습니까?")){
        	this.close(hash)
        	}else{this.close("");}
        	}
        	}else if(pw.length>=64){
        	if(pw == hash){
        	if(this.confirm("수정하시겠습니까?")){
        	this.close(hash)
        	}else{this.close("");}
        	}else{this.alert("비밀번호 다시입력해주세요");}
        	}

        };

        this.passwordPop_onload = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn_ok.addEventHandler("onclick",this.btn_ok_onclick,this);
            this.btn_calcel.addEventHandler("onclick",this.btn_calcel_onclick,this);
        };

        this.loadIncludeScript("passwordPop.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
