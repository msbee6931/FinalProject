(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("insertStudent");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(300,500);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_students_copy", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"s_seq\" type=\"STRING\" size=\"256\"/><Column id=\"gender\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"age\" type=\"STRING\" size=\"256\"/><Column id=\"email\" type=\"STRING\" size=\"256\"/><Column id=\"contact\" type=\"STRING\" size=\"256\"/><Column id=\"address\" type=\"STRING\" size=\"256\"/><Column id=\"scholarship\" type=\"STRING\" size=\"256\"/><Column id=\"rest\" type=\"STRING\" size=\"256\"/><Column id=\"grade\" type=\"STRING\" size=\"256\"/><Column id=\"birth\" type=\"DATE\" size=\"256\"/><Column id=\"pw\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Edit("edt_s_seq","85","20","175","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","10","20","50","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("학번");
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
            obj.set_text("장학금");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_06","10","265","50","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("휴학");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_07","10","300","50","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("성적");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_08","10","335","50","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("생일");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_09","10","370","75","30",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("초기비밀번호");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_10","10","405","50","30",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("성별");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_name","85","55","175","30",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_age","85","90","175","30",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_email","85","125","175","30",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_contact","85","160","175","30",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_address","85","195","175","30",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_scholarship","85","230","175","30",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_rest","85","265","175","30",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_grade","85","300","175","30",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_pw","85","370","175","30",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_gender","85","405","175","30",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            this.addChild(obj.name, obj);

            obj = new Button("btn_insert","85","455","50","30",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("입력");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel","210","455","50","30",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("취소");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_birth","85","335","175","30",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_dateformat("yyyy-MM-dd");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",300,500,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("insertStudent.xfdl", function() {
        this.fn_update_students = function(id,url){	//업데이트 따로 뺀것
          this.transaction(
                    id
                    ,url
                    ,"in_ds=ds_students:U"
                    ,""
                    ,""
                    ,"fn_callback"
                 )
        }
        this.fn_callback = function(id,ErrorCode,ErrorMsg){	//콜백함수
        	trace(id);
        	trace(ErrorMsg);
        	trace(ErrorCode);
        }



        this.btn_insert_onclick = function(obj,e)
        {
        	var s_seq = this.edt_s_seq.value;
        	var name = this.edt_name.value;
        	var age = this.edt_age.value;
        	var email = this.edt_email.value;
        	var contact = this.edt_contact.value;
        	var address = this.edt_address.value;
        	var scholarship = this.edt_scholarship.value;
        	var rest = this.edt_rest.value;
        	var grade = this.edt_grade.value;
        	var birth = this.cal_birth.value;
        	var pw = this.edt_pw.value;
        	var gender = this.edt_gender.value;

        	var addRow = this.ds_students_copy.addRow();
        	this.ds_students_copy.setColumn(addRow,"s_seq",s_seq);
        	this.ds_students_copy.setColumn(addRow,"name",name);
        	this.ds_students_copy.setColumn(addRow,"age",age);
        	this.ds_students_copy.setColumn(addRow,"email",email);
        	this.ds_students_copy.setColumn(addRow,"contact",contact);
        	this.ds_students_copy.setColumn(addRow,"address",address);
        	this.ds_students_copy.setColumn(addRow,"scholarship",scholarship);
        	this.ds_students_copy.setColumn(addRow,"rest",rest);
        	this.ds_students_copy.setColumn(addRow,"grade",grade);
        	this.ds_students_copy.setColumn(addRow,"birth",birth);
        	this.ds_students_copy.setColumn(addRow,"pw",pw);
        	this.ds_students_copy.setColumn(addRow,"gender",gender);

        	this.transaction(

        				"ds_insert" //1. strSvcID
        				,"/insertStudent.nex" //2. strURL
        				,"in_ds=ds_students_copy:U" //3.strInDatasets - I,U,D Sds=Fds:U 변경된값만보내겟다, :A, :N
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
            this.Static00_09.addEventHandler("onclick",this.Static00_09_onclick,this);
            this.btn_insert.addEventHandler("onclick",this.btn_insert_onclick,this);
            this.btn_cancel.addEventHandler("onclick",this.btn_cancel_onclick,this);
        };

        this.loadIncludeScript("insertStudent.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
