(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_login");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_radio", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"date\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">1</Col><Col id=\"date\">학생</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"date\">교수</Col></Row><Row><Col id=\"code\">3</Col><Col id=\"date\">관리자</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_login", this);
            obj._setContents("<ColumnInfo><Column id=\"s_seq\" type=\"STRING\" size=\"256\"/><Column id=\"p_seq\" type=\"STRING\" size=\"256\"/><Column id=\"a_seq\" type=\"STRING\" size=\"256\"/><Column id=\"pw\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_students", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"s_seq\" type=\"STRING\" size=\"256\"/><Column id=\"gender\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"age\" type=\"STRING\" size=\"256\"/><Column id=\"email\" type=\"STRING\" size=\"256\"/><Column id=\"contact\" type=\"STRING\" size=\"256\"/><Column id=\"address\" type=\"STRING\" size=\"256\"/><Column id=\"scholarship\" type=\"STRING\" size=\"256\"/><Column id=\"rest\" type=\"STRING\" size=\"256\"/><Column id=\"grade\" type=\"STRING\" size=\"256\"/><Column id=\"birth\" type=\"DATE\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_professor", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"p_seq\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"age\" type=\"STRING\" size=\"256\"/><Column id=\"email\" type=\"STRING\" size=\"256\"/><Column id=\"contact\" type=\"STRING\" size=\"256\"/><Column id=\"address\" type=\"STRING\" size=\"256\"/><Column id=\"lecture\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_admin", this);
            obj._setContents("<ColumnInfo><Column id=\"a_seq\" type=\"STRING\" size=\"256\"/><Column id=\"pw\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("loginForm","385","155","580","350",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_border("1px solid #c1c1c1");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","80","111","55","30",null,null,null,null,null,null,this.loginForm.form);
            obj.set_taborder("0");
            obj.set_text("ID");
            this.loginForm.addChild(obj.name, obj);

            obj = new Static("Static00_00","79","172","55","30",null,null,null,null,null,null,this.loginForm.form);
            obj.set_taborder("1");
            obj.set_text("PW");
            this.loginForm.addChild(obj.name, obj);

            obj = new Edit("edt_id","160","115","300","30",null,null,null,null,null,null,this.loginForm.form);
            obj.set_taborder("2");
            this.loginForm.addChild(obj.name, obj);

            obj = new Edit("edt_pw","160","174","300","30",null,null,null,null,null,null,this.loginForm.form);
            obj.set_taborder("3");
            this.loginForm.addChild(obj.name, obj);

            obj = new Button("btn_login","481","116","85","90",null,null,null,null,null,null,this.loginForm.form);
            obj.set_taborder("4");
            obj.set_text("로그인");
            this.loginForm.addChild(obj.name, obj);

            obj = new Radio("rad_chk","85","240","400","30",null,null,null,null,null,null,this.loginForm.form);
            obj.set_taborder("5");
            obj.set_innerdataset("ds_radio");
            obj.set_codecolumn("code");
            obj.set_datacolumn("date");
            obj.set_rowcount("1");
            this.loginForm.addChild(obj.name, obj);

            obj = new Static("Static00","387","107","180","50",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("2//qwer");
            obj.set_font("20px/normal \"Arial\",\"-윤고딕320\"");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_login.xfdl", function() {
        this.objApp = nexacro.getApplication();

        this.fn_callbackStu = function(id,ErrorCode,ErrorMsg,out_ds,nr){	//콜백함수
        	trace(id);
        	trace(ErrorMsg);
        	trace(ErrorCode);



        	trace(this.ds_students.getCount("s_seq"));



        	if(this.ds_students.getCount("s_seq") > 0){
        	this.objApp.mainframe.VFrameSet00.TopFrame.set_formurl("Student::Form_Top.xfdl");
        	this.objApp.mainframe.VFrameSet00.HFrameSet00.LeftFrame.set_formurl("Student::Form_Left.xfdl");
        	this.objApp.mainframe.VFrameSet00.HFrameSet00.VFrameSet00.ChildFrame00.set_formurl("Student::Form_Mdi.xfdl");
        	this.objApp.mainframe.VFrameSet00.BottomFrame.set_formurl("Student::Form_Bottom.xfdl");
        	this.objApp.mainframe.VFrameSet00.set_separatesize("0,50,*,60");
        	}else{
        	this.alert("아이디,비밀번호를 확인하세요.")
        	return;
        	}
        }
        this.fn_callbackPro=function(id,ErrorCode,ErrorMsg){
        	trace(id);
        	trace(ErrorMsg);
        	trace(ErrorCode);

        	trace(this,this.ds_professor.getCount("p_seq"));
        	if(this.ds_professor.getCount("p_seq") > 0){
        	this.objApp.mainframe.VFrameSet00.TopFrame.set_formurl("Professor::Form_Top.xfdl");
        	this.objApp.mainframe.VFrameSet00.HFrameSet00.LeftFrame.set_formurl("Professor::Form_Left.xfdl");
        	this.objApp.mainframe.VFrameSet00.HFrameSet00.VFrameSet00.ChildFrame00.set_formurl("Professor::Form_Mdi.xfdl");
        	this.objApp.mainframe.VFrameSet00.BottomFrame.set_formurl("Professor::Form_Bottom.xfdl");
        	this.objApp.mainframe.VFrameSet00.set_separatesize("0,50,*,60");
        	}else{
        	this.alert("아이디,비밀번호를 확인하세요.")
        	return;
        	}
        }
        this.fn_callbackAdm=function(id,ErrorCode,ErrorMsg){
        	trace(id);
        	trace(ErrorMsg);
        	trace(ErrorCode);
        	trace(this.ds_admin.getCount("a_seq"));
        	if(this.ds_admin.getCount("a_seq") > 0){
        	this.objApp.mainframe.VFrameSet00.TopFrame.set_formurl("Admin::Form_Top.xfdl");
        	this.objApp.mainframe.VFrameSet00.HFrameSet00.LeftFrame.set_formurl("Admin::Form_Left.xfdl");
        	this.objApp.mainframe.VFrameSet00.HFrameSet00.VFrameSet00.ChildFrame00.set_formurl("Admin::Form_Mdi.xfdl");
        	this.objApp.mainframe.VFrameSet00.BottomFrame.set_formurl("Admin::Form_Bottom.xfdl");
        	this.objApp.mainframe.VFrameSet00.set_separatesize("0,50,*,60");
        	}else{
        	this.alert("아이디,비밀번호를 확인하세요.");
        	return;
        	}
        }

        this.loginForm_btn_login_onclick = function(obj,e)
        {
        	var id = this.loginForm.form.edt_id.value;
        	var pw = this.loginForm.form.edt_pw.value;
        	trace(id);
        	trace(pw);
        	trace(this.loginForm.form.rad_chk.value);


        	if(this.loginForm.form.rad_chk.value == null){
        	alert("셋중 하나 선택해 주세요.")
        	return;
        	}
        	if(id == undefined || id == ""){
        		this.alert("아이디 입력해주세요.")
        	}else if(pw == undefined || pw == ""){
        		this.alert("비밀번호를 입력해주세요");
        	}
        	else{
        	if(this.loginForm.form.rad_chk.value == 1){
        		var shaObj = new jsSHA("SHA-256","TEXT");
        		shaObj.update(pw);
        		var hash = shaObj.getHash("HEX");
        		trace(hash);

        		var addRow = this.ds_login.addRow();
        		this.ds_login.setColumn(addRow,"s_seq",id);
        		this.ds_login.setColumn(addRow,"pw",hash);

        		this.transaction(

        					"ds_loginStu" //1. strSvcID
        					,"/loginStu.login" //2. strURL
        					,"in_ds=ds_login:U" //3.strInDatasets - I,U,D Sds=Fds:U 변경된값만보내겟다, :A, :N
        					,"ds_students=out_ds" //4.strOutDatasets -select Fds=Sds
        					,"" //5.strArgument text값
        					,"fn_callbackStu" //6.strCallbackFunc
        				);
        				trace(this.ds_login);
        	}else if(this.loginForm.form.rad_chk.value == 2){
        		trace("교수입니다");
        		var shaObj = new jsSHA("SHA-256","TEXT");
        		shaObj.update(pw);
        		var hash = shaObj.getHash("HEX");
        		trace(hash);

        		var addRow = this.ds_login.addRow();
        		this.ds_login.setColumn(addRow,"p_seq",id);
        		this.ds_login.setColumn(addRow,"pw",hash);

        		this.transaction(

        					"ds_loginPro" //1. strSvcID
        					,"/loginPro.login" //2. strURL
        					,"in_ds=ds_login:U" //3.strInDatasets - I,U,D Sds=Fds:U 변경된값만보내겟다, :A, :N
        					,"ds_professor=out_ds" //4.strOutDatasets -select Fds=Sds
        					,"" //5.strArgument text값
        					,"fn_callbackPro" //6.strCallbackFunc
        				);
        				trace(this.ds_login);
        	}else{
        		trace("관리잡니다");
        		var shaObj = new jsSHA("SHA-256","TEXT");
        		shaObj.update(pw);
        		var hash = shaObj.getHash("HEX");
        		trace(hash);

        		var addRow = this.ds_login.addRow();
        		this.ds_login.setColumn(addRow,"a_seq",id);
        		this.ds_login.setColumn(addRow,"pw",hash);

        		this.transaction(

        					"ds_loginAdm" //1. strSvcID
        					,"/loginAdm.login" //2. strURL
        					,"in_ds=ds_login:U" //3.strInDatasets - I,U,D Sds=Fds:U 변경된값만보내겟다, :A, :N
        					,"ds_admin=out_ds" //4.strOutDatasets -select Fds=Sds
        					,"" //5.strArgument text값
        					,"fn_callbackAdm" //6.strCallbackFunc
        				);
        				trace(this.ds_login);
        	}

        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.loginForm.form.btn_login.addEventHandler("onclick",this.loginForm_btn_login_onclick,this);
            this.loginForm.form.rad_chk.addEventHandler("onitemchanged",this.Div00_Radio00_onitemchanged,this);
        };

        this.loadIncludeScript("Form_login.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
