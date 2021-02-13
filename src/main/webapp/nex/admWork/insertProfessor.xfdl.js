(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("insertProfessor");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(300,350);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_professor_copy", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"p_seq\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"age\" type=\"STRING\" size=\"256\"/><Column id=\"email\" type=\"STRING\" size=\"256\"/><Column id=\"contact\" type=\"STRING\" size=\"256\"/><Column id=\"address\" type=\"STRING\" size=\"256\"/><Column id=\"lecture\" type=\"STRING\" size=\"256\"/><Column id=\"pw\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","10","20","50","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("교수번호");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_p_seq","85","20","175","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
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

            obj = new Static("Static00_05","10","230","50","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("강사");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_06","10","265","75","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("초기비밀번호");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_name","85","55","175","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_age","85","90","175","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_email","85","125","175","30",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_contact","85","160","175","30",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_address","85","195","175","30",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_lecture","85","230","175","30",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_pw","85","265","175","30",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            this.addChild(obj.name, obj);

            obj = new Button("btn_insert","85","300","50","30",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("입력");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel","210","300","50","30",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("취소");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",300,350,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("insertProfessor.xfdl", function() {
        this.fn_callback = function(id,ErrorCode,ErrorMsg){	//콜백함수
        	trace(id);
        	trace(ErrorMsg);
        	trace(ErrorCode);
        }


        this.btn_insert_onclick = function(obj,e)
        {
        	var p_seq = this.edt_p_seq.value;
        	var name = this.edt_name.value;
        	var age = this.edt_age.value;
        	var email = this.edt_email.value;
        	var contact = this.edt_contact.value;
        	var address = this.edt_address.value;
        	var lecture = this.edt_lecture.value;
        	var pw = this.edt_pw.value;

        	var addRow = this.ds_professor_copy.addRow();
        	this.ds_professor_copy.setColumn(addRow,"p_seq",p_seq);
        	this.ds_professor_copy.setColumn(addRow,"name",name);
        	this.ds_professor_copy.setColumn(addRow,"age",age);
        	this.ds_professor_copy.setColumn(addRow,"email",email);
        	this.ds_professor_copy.setColumn(addRow,"contact",contact);
        	this.ds_professor_copy.setColumn(addRow,"address",address);
        	this.ds_professor_copy.setColumn(addRow,"lecture",lecture);
        	this.ds_professor_copy.setColumn(addRow,"pw",pw);

        	this.transaction(

        				"ds_insertPro" //1. strSvcID
        				,"/insertProfessor.nex" //2. strURL
        				,"in_ds=ds_professor_copy:U" //3.strInDatasets - I,U,D Sds=Fds:U 변경된값만보내겟다, :A, :N
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

        this.loadIncludeScript("insertProfessor.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
