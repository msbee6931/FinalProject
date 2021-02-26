(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("myInfoModifyPro");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1080,520);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_professor_copy", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"p_seq\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"email\" type=\"STRING\" size=\"256\"/><Column id=\"contact\" type=\"STRING\" size=\"256\"/><Column id=\"address\" type=\"STRING\" size=\"256\"/><Column id=\"lecture\" type=\"STRING\" size=\"256\"/><Column id=\"pw\" type=\"STRING\" size=\"256\"/><Column id=\"secNumber\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","0","0","29","520",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_visible("false");
            obj.set_background("RGBA(236,135,135,0.71)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","80","0","800","10",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_visible("false");
            obj.set_background("RGBA(236,135,135,0.71)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","100","490","800","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_visible("false");
            obj.set_background("RGBA(236,135,135,0.71)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","1051","0","29","520",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_visible("false");
            obj.set_background("RGBA(236,135,135,0.71)");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","30","10",null,null,"29","30",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("");
            obj.set_cssclass("div_line");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_p_seq","450","80","150","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_readonly("true");
            obj.set_cssclass("edt_default");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_name","450","115","150","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_cssclass("edt_default");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_email","450","185","150","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_cssclass("edt_default");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_contact","450","220","150","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_cssclass("edt_default");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_address","450","255","150","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_cssclass("edt_default");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_modify","384","356","100","25",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("수정");
            obj.set_cssclass("btn_default");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_cancel","524","357","100","25",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("다시입력");
            obj.set_cssclass("btn_can");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00","350","80","100","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("교수번호");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","350","115","100","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_text("이름");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01","350","150","100","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_text("주민번호");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_02","350","185","100","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_text("이메일");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_03","350","220","100","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_text("전화번호");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_04","350","255","100","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_text("주소");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_pw","450","290","150","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("13");
            obj.set_cssclass("edt_default");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_04_00","350","290","100","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("14");
            obj.set_text("수정할비밀번호");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("mas_secNumber","450","150","150","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("15");
            obj.set_format("###### - #{######}");
            obj.set_type("string");
            obj.set_cssclass("med_default");
            this.Div00.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1080,520,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Div00.form.edt_p_seq","value","ds_professor_copy","p_seq");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Div00.form.edt_name","value","ds_professor_copy","name");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Div00.form.edt_email","value","ds_professor_copy","email");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","Div00.form.edt_contact","value","ds_professor_copy","contact");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","Div00.form.edt_address","value","ds_professor_copy","address");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Div00.form.mas_secNumber","value","ds_professor_copy","secNumber");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("myInfoModifyPro.xfdl", function() {
        this.fn_callback = function(id,ErrorCode,ErrorMsg){	//콜백함수
        	trace(id);
        	trace(ErrorMsg);
        	trace(ErrorCode);
        }


        this.Div00_btn_modify_onclick = function(obj,e)
        {
        	var cpw = this.Div00.form.edt_pw.value;
        	if(cpw == null){alert("수정할비밀번호입력하세요")
        	return;
        	}

        	var p_seq = this.ds_professor_copy.getColumn(e.row,"p_seq");
        	var pw = this.ds_professor_copy.getColumn(e.row,"pw");

        	let x = this.width/2-50;
        	let y = this.height/2-50;
        	let objCF = new ChildFrame();
        	objCF.init("passpop",x,y,200,200,0,0,"stdWork::passwordPop.xfdl");
        	objCF.set_showtitlebar(false);
        	objCF.showModal(this.getOwnerFrame(),{p_seq:p_seq, pw:pw},this,"fn_passcallback");

        };

        this.myInfoModifyPro_onload = function(obj,e)
        {
        	this.transaction(

        				"ds_myInfoPro" //1. strSvcID
        				,"/myInfoPro.nex" //2. strURL
        				,"" //3.strInDatasets - I,U,D Sds=Fds:U 변경된값만보내겟다, :A, :N
        				,"ds_professor_copy=out_ds" //4.strOutDatasets -select Fds=Sds
        				,"" //5.strArgument text값
        				,"fn_callback" //6.strCallbackFunc
        			);
        			//this.ds_professor_copy.filter("");
        };
        this.fn_passcallback = function(id,hash){
        	if(hash == ""){return;}
        	else{

        	var p_seq = this.Div00.form.edt_p_seq.value;
        	var name = this.Div00.form.edt_name.value;
        	var secNumber = this.Div00.form.mas_secNumber.value;
        	var email = this.Div00.form.edt_email.value;
        	var contact = this.Div00.form.edt_contact.value;
        	var address = this.Div00.form.edt_address.value;
        	var pw = this.Div00.form.edt_pw.value;
        	if(p_seq == null || p_seq == "undefined"){
        		this.alert("교수번호 입력해주세요");
        		return;
        	}else if(name == null || name == "undefined"){
        		alert("이름 입력해주세요");
        		return;
        	}else if(secNumber == null || secNumber == "undefined"){
        		alert("주민번호 입력해주세요");
        		return;
        	}else if(contact == null || contact == "undefined"){
        		alert("전화번호 입력해주세요");
        		return;
        	}else if(address == null || address == "undefined"){
        		alert("주소 입력해주세요");
        		return;
        	}

        	var shaObj = new jsSHA("SHA-256","TEXT");
        	shaObj.update(pw);
        	var hash = shaObj.getHash("HEX");
        	trace(hash);

        	var addRow = this.ds_professor_copy.addRow();
        	this.ds_professor_copy.setColumn(addRow,"p_seq",p_seq);
        	this.ds_professor_copy.setColumn(addRow,"name",name);
        	this.ds_professor_copy.setColumn(addRow,"secNumber",secNumber);
        	this.ds_professor_copy.setColumn(addRow,"email",email);
        	this.ds_professor_copy.setColumn(addRow,"contact",contact);
        	this.ds_professor_copy.setColumn(addRow,"address",address);
        	this.ds_professor_copy.setColumn(addRow,"pw",hash);

        	this.transaction(

        				"ds_myInfoPro" //1. strSvcID
        				,"/updateMyInfoPro.nex" //2. strURL
        				,"in_ds=ds_professor_copy:U" //3.strInDatasets - I,U,D Sds=Fds:U 변경된값만보내겟다, :A, :N
        				,"" //4.strOutDatasets -select Fds=Sds
        				,"" //5.strArgument text값
        				,"fn_callback" //6.strCallbackFunc
        			);

        	}
        }

        this.Div00_btn_cancel_onclick = function(obj,e)
        {
        	this.Div00.form.edt_pw.set_value("");
        	this.myInfoModifyPro_onload();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.myInfoModifyPro_onload,this);
            this.Div00.form.btn_modify.addEventHandler("onclick",this.Div00_btn_modify_onclick,this);
            this.Div00.form.btn_cancel.addEventHandler("onclick",this.Div00_btn_cancel_onclick,this);
        };

        this.loadIncludeScript("myInfoModifyPro.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
