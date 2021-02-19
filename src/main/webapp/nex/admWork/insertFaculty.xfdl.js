(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("insertFaculty");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(300,310);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_faculty_copy", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"f_seq\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"age\" type=\"STRING\" size=\"256\"/><Column id=\"email\" type=\"STRING\" size=\"256\"/><Column id=\"contact\" type=\"STRING\" size=\"256\"/><Column id=\"address\" type=\"STRING\" size=\"256\"/><Column id=\"pw\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","10","20","75","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("교직원번호");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_f_seq","85","20","175","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("edt_default");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","10","55","50","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("이름");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","10","90","50","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("나이");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02","10","125","50","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("이메일");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03","10","160","50","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("전화번호");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_04","10","195","50","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("주소");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_06","10","230","75","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("초기비밀번호");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_name","85","55","175","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("edt_default");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_age","85","90","175","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("edt_default");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_email","85","125","175","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("edt_default");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_contact","85","160","175","30",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("edt_default");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_address","85","195","175","30",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("edt_default");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_pw","85","230","175","30",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_cssclass("edt_default");
            this.addChild(obj.name, obj);

            obj = new Button("btn_insert","40","270","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("입력");
            obj.set_cssclass("btn_default");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel","155","270","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("취소");
            obj.set_cssclass("btn_can");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",300,310,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("insertFaculty.xfdl", function() {
        this.fn_callback = function(id,ErrorCode,ErrorMsg){	//콜백함수
        	trace(id);
        	trace(ErrorMsg);
        	trace(ErrorCode);
        }
        this.btn_insert_onclick = function(obj,e)
        {
        	var f_seq = this.edt_f_seq.value;
        	var name = this.edt_name.value;
        	var age = this.edt_age.value;
        	var email = this.edt_email.value;
        	var contact = this.edt_contact.value;
        	var address = this.edt_address.value;
        	var pw = this.edt_pw.value;

        	var addRow = this.ds_faculty_copy.addRow();
        	this.ds_faculty_copy.setColumn(addRow,"f_seq",f_seq);
        	this.ds_faculty_copy.setColumn(addRow,"name",name);
        	this.ds_faculty_copy.setColumn(addRow,"age",age);
        	this.ds_faculty_copy.setColumn(addRow,"email",email);
        	this.ds_faculty_copy.setColumn(addRow,"contact",contact);
        	this.ds_faculty_copy.setColumn(addRow,"address",address);
        	this.ds_faculty_copy.setColumn(addRow,"pw",pw);

        	this.transaction(

        				"ds_insertFac" //1. strSvcID
        				,"/insertFaculty.nex" //2. strURL
        				,"in_ds=ds_faculty_copy:U" //3.strInDatasets - I,U,D Sds=Fds:U 변경된값만보내겟다, :A, :N
        				,"" //4.strOutDatasets -select Fds=Sds
        				,"" //5.strArgument text값
        				,"fn_callback" //6.strCallbackFunc
        			);
        			this.close("");
        };

        this.btn_cancel_onclick = function(obj,e)
        {
        	this.close("");
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn_insert.addEventHandler("onclick",this.btn_insert_onclick,this);
            this.btn_cancel.addEventHandler("onclick",this.btn_cancel_onclick,this);
        };

        this.loadIncludeScript("insertFaculty.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
