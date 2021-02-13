(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("myInfoModify");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1080,520);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_students_copy", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"s_seq\" type=\"STRING\" size=\"256\"/><Column id=\"gender\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"age\" type=\"STRING\" size=\"256\"/><Column id=\"email\" type=\"STRING\" size=\"256\"/><Column id=\"contact\" type=\"STRING\" size=\"256\"/><Column id=\"address\" type=\"STRING\" size=\"256\"/><Column id=\"scholarship\" type=\"STRING\" size=\"256\"/><Column id=\"rest\" type=\"STRING\" size=\"256\"/><Column id=\"grade\" type=\"STRING\" size=\"256\"/><Column id=\"birth\" type=\"DATE\" size=\"256\"/><Column id=\"pw\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Static("Static01","30","9","200","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("나의 정보 수정");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","30","38","1021","452",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("");
            obj.set_border("1px solid #c1c1c1");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_s_seq","417","42","150","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_name","417","77","150","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_age","417","112","150","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_email","417","147","150","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_contact","417","182","150","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_address","417","217","150","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_pw","417","287","150","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_modify","394","351","50","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("수정");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_cancel","544","351","50","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_text("취소");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00","348","81","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("학번");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","348","116","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("이름");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01","348","151","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("나이");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_02","348","186","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("이메일");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_03","348","221","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("전화번호");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_04","348","256","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("주소");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_05","348","291","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("생일");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_06","348","326","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("수정할비밀번호");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_birth","449","291","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_dateformat("yyyy-MM-dd");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1080,520,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Div00.form.edt_s_seq","value","ds_students_copy","s_seq");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Div00.form.edt_name","value","ds_students_copy","name");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Div00.form.edt_age","value","ds_students_copy","age");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Div00.form.edt_email","value","ds_students_copy","email");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","Div00.form.edt_contact","value","ds_students_copy","contact");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","Div00.form.edt_address","value","ds_students_copy","address");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","cal_birth","value","ds_students_copy","birth");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("myInfoModify.xfdl", function() {
        this.fn_callback = function(id,ErrorCode,ErrorMsg){	//콜백함수
        	trace(id);
        	trace(ErrorMsg);
        	trace(ErrorCode);
        }


        this.Div00_btn_cancel_onclick = function(obj,e)
        {
        	this.close("");
        };

        this.Div00_btn_modify_onclick = function(obj,e)
        {
        	var cpw = this.Div00.form.edt_pw.value;
        	if(cpw == null){alert("수정할비밀번호입력하세요")
        	return;
        	}

        	var s_seq = this.ds_students_copy.getColumn(e.row,"s_seq");
        	var pw = this.ds_students_copy.getColumn(e.row,"pw");

        	let x = this.width/2-50;
        	let y = this.height/2-50;
        	let objCF = new ChildFrame();
        	objCF.init("passpop",x,y,200,200,0,0,"stdWork::passwordPop.xfdl");
        	objCF.set_showtitlebar(false);
        	objCF.showModal(this.getOwnerFrame(),{s_seq:s_seq, pw:pw},this,"fn_passcallback");

        };
        this.fn_passcallback = function(id,hash){
        	if(hash == ""){return;}
        	else{

        	var s_seq = this.Div00.form.edt_s_seq.value;
        	var name = this.Div00.form.edt_name.value;
        	trace(name);
        	var age = this.Div00.form.edt_age.value;
        	var email = this.Div00.form.edt_email.value;
        	var contact = this.Div00.form.edt_contact.value;
        	var address = this.Div00.form.edt_address.value;
        	var birth = this.cal_birth.value;
        	var pw = this.Div00.form.edt_pw.value;

        	var shaObj = new jsSHA("SHA-256","TEXT");
        	shaObj.update(pw);
        	var hash = shaObj.getHash("HEX");
        	trace(hash);

        	var addRow = this.ds_students_copy.addRow();
        	this.ds_students_copy.setColumn(addRow,"s_seq",s_seq);
        	this.ds_students_copy.setColumn(addRow,"name",name);
        	this.ds_students_copy.setColumn(addRow,"age",age);
        	this.ds_students_copy.setColumn(addRow,"email",email);
        	this.ds_students_copy.setColumn(addRow,"contact",contact);
        	this.ds_students_copy.setColumn(addRow,"address",address);
        	this.ds_students_copy.setColumn(addRow,"birth",birth)
        	this.ds_students_copy.setColumn(addRow,"pw",hash);

        	this.transaction(

        				"ds_myInfoStu" //1. strSvcID
        				,"/updateMyInfoStu.nex" //2. strURL
        				,"in_ds=ds_students_copy:U" //3.strInDatasets - I,U,D Sds=Fds:U 변경된값만보내겟다, :A, :N
        				,"" //4.strOutDatasets -select Fds=Sds
        				,"" //5.strArgument text값
        				,"fn_callback" //6.strCallbackFunc
        			);

        	}
        }

        this.myInfoModify_onload = function(obj,e)
        {
        	this.transaction(

        				"ds_myInfoStu" //1. strSvcID
        				,"/myInfoStu.nex" //2. strURL
        				,"" //3.strInDatasets - I,U,D Sds=Fds:U 변경된값만보내겟다, :A, :N
        				,"ds_students_copy=out_ds" //4.strOutDatasets -select Fds=Sds
        				,"" //5.strArgument text값
        				,"fn_callback" //6.strCallbackFunc
        			);
        			//this.ds_students_copy.filter("");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.myInfoModify_onload,this);
            this.Div00.form.btn_modify.addEventHandler("onclick",this.Div00_btn_modify_onclick,this);
            this.Div00.form.btn_cancel.addEventHandler("onclick",this.Div00_btn_cancel_onclick,this);
        };

        this.loadIncludeScript("myInfoModify.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
