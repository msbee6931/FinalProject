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
                this._setFormPosition(350,380);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_students_copy", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"s_seq\" type=\"STRING\" size=\"256\"/><Column id=\"gender\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"email\" type=\"STRING\" size=\"256\"/><Column id=\"contact\" type=\"STRING\" size=\"256\"/><Column id=\"address\" type=\"STRING\" size=\"256\"/><Column id=\"scholarship\" type=\"STRING\" size=\"256\"/><Column id=\"rest\" type=\"STRING\" size=\"256\"/><Column id=\"grade\" type=\"STRING\" size=\"256\"/><Column id=\"pw\" type=\"STRING\" size=\"256\"/><Column id=\"deptCode\" type=\"STRING\" size=\"256\"/><Column id=\"colCode\" type=\"STRING\" size=\"256\"/><Column id=\"colGrade\" type=\"STRING\" size=\"256\"/><Column id=\"secNumber\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("deptCode_copy", this);
            obj._setContents("<ColumnInfo><Column id=\"Code\" type=\"STRING\" size=\"256\"/><Column id=\"Value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Code\">1011</Col><Col id=\"Value\">국어국문학과</Col></Row><Row><Col id=\"Code\">1012</Col><Col id=\"Value\">영어영문학과</Col></Row><Row><Col id=\"Code\">1013</Col><Col id=\"Value\">국사학과</Col></Row><Row><Col id=\"Code\">1014</Col><Col id=\"Value\">철학과</Col></Row><Row><Col id=\"Code\">2021</Col><Col id=\"Value\">사회복지학과</Col></Row><Row><Col id=\"Code\">2022</Col><Col id=\"Value\">경제학부</Col></Row><Row><Col id=\"Code\">2023</Col><Col id=\"Value\">사회학과</Col></Row><Row><Col id=\"Code\">2024</Col><Col id=\"Value\">심리학과</Col></Row><Row><Col id=\"Code\">3031</Col><Col id=\"Value\">통계학과</Col></Row><Row><Col id=\"Code\">3032</Col><Col id=\"Value\">화학부</Col></Row><Row><Col id=\"Code\">3033</Col><Col id=\"Value\">생명과학부</Col></Row><Row><Col id=\"Code\">4041</Col><Col id=\"Value\">간호학부</Col></Row><Row><Col id=\"Code\">5051</Col><Col id=\"Value\">전기공학부</Col></Row><Row><Col id=\"Code\">5052</Col><Col id=\"Value\">컴퓨터공학부</Col></Row><Row><Col id=\"Code\">5053</Col><Col id=\"Value\">화학생물공학부</Col></Row><Row><Col id=\"Code\">5054</Col><Col id=\"Value\">건축학과</Col></Row><Row><Col id=\"Code\">5055</Col><Col id=\"Value\">산업공학과</Col></Row><Row><Col id=\"Code\">6061</Col><Col id=\"Value\">교육학과</Col></Row><Row><Col id=\"Code\">6062</Col><Col id=\"Value\">국어교육과</Col></Row><Row><Col id=\"Code\">6063</Col><Col id=\"Value\">영어교육과</Col></Row><Row><Col id=\"Code\">6064</Col><Col id=\"Value\">수학교육과</Col></Row><Row><Col id=\"Code\">6065</Col><Col id=\"Value\">체육교육과</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("colCode_Copy", this);
            obj._setContents("<ColumnInfo><Column id=\"Code\" type=\"STRING\" size=\"256\"/><Column id=\"Value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Code\">10</Col><Col id=\"Value\">인문대학</Col></Row><Row><Col id=\"Code\">20</Col><Col id=\"Value\">사회과학대학</Col></Row><Row><Col id=\"Code\">30</Col><Col id=\"Value\">자연과학대학</Col></Row><Row><Col id=\"Code\">40</Col><Col id=\"Value\">간호대학</Col></Row><Row><Col id=\"Code\">50</Col><Col id=\"Value\">공과대학</Col></Row><Row><Col id=\"Code\">60</Col><Col id=\"Value\">사범대학</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00_00","10","20","50","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("이름");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","10","55","50","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("주민번호");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02","10","90","50","30",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("이메일");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03","10","125","50","30",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("전화번호");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_04","10","160","50","30",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("주소");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_10","10","195","50","30",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("성별");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_name","85","20","175","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("edt_default");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_email","85","90","175","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("edt_default");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_contact","85","125","175","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("edt_default");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_address","85","160","175","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("edt_default");
            this.addChild(obj.name, obj);

            obj = new Button("btn_insert","95","345","50","30",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("입력");
            obj.set_cssclass("btn_default");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel","210","345","50","30",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("취소");
            obj.set_cssclass("btn_default");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_10_00","10","230","50","30",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("학과분류");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_10_01","10","265","50","30",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("학과");
            this.addChild(obj.name, obj);

            obj = new Combo("com_colCode","85","230","175","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_innerdataset("colCode_Copy");
            obj.set_codecolumn("Code");
            obj.set_datacolumn("Value");
            obj.set_cssclass("cmb_default");
            this.addChild(obj.name, obj);

            obj = new Combo("com_deptCode","85","265","175","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_innerdataset("deptCode_copy");
            obj.set_codecolumn("Code");
            obj.set_datacolumn("Value");
            obj.set_cssclass("cmb_default");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Combo("com_gender","85","195","175","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonly("true");
            obj.set_cssclass("cmb_default");
            var com_gender_innerdataset = new nexacro.NormalDataset("com_gender_innerdataset", obj);
            com_gender_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">M</Col><Col id=\"datacolumn\">남자</Col></Row><Row><Col id=\"codecolumn\">W</Col><Col id=\"datacolumn\">여자</Col></Row></Rows>");
            obj.set_innerdataset(com_gender_innerdataset);
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_10_01_00","10","300","50","30",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("학년");
            this.addChild(obj.name, obj);

            obj = new Combo("com_colGrade","85","300","175","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("cmb_default");
            var com_colGrade_innerdataset = new nexacro.NormalDataset("com_colGrade_innerdataset", obj);
            com_colGrade_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">1학년</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">2학년</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">3학년</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">4학년</Col></Row></Rows>");
            obj.set_innerdataset(com_colGrade_innerdataset);
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mas_secNumber","85","55","175","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_format("###### - #{######}");
            obj.set_type("string");
            obj.set_cssclass("med_default");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",350,380,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","cmb_colCode","value","ds_students_copy","colcode");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","cmb_deptCode","value","ds_students_copy","deptcode");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("insertStudent.xfdl", function() {
        var s_seq;
        var seq1;
        var seq2;
        var r_seq;

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
        this.fn_s_seqcallback = function(id,ErrorCode,ErrorMsg){	//콜백함수
        	trace(id);
        	trace(ErrorMsg);
        	trace(ErrorCode);


        	if(this.ds_students_copy.getCount() == 0){
        	this.ds_students_copy.filter("");
        	}else{
        	for(var i = 0; i< this.ds_students_copy.getCount(); i++){

        	r_seq = this.ds_students_copy.getColumn(i,"s_seq");

        	}
        	}

        }



        this.btn_insert_onclick = function(obj,e)
        {
        	var name = this.edt_name.value;
        	var secNumber = this.mas_secNumber.value;
        	var email = this.edt_email.value;
        	var contact = this.edt_contact.value;
        	var address = this.edt_address.value;
        	var gender = this.com_gender.value;
        	var colCode = this.com_colCode.value;
        	var deptCode = this.com_deptCode.value;
        	var colGrade = this.com_colGrade.text;

        	s_seq = seq1+deptCode+"001";
        	trace(s_seq);

        	var pw = this.mas_secNumber.text.substring(0,6);
        	if(this.ds_students_copy.getCount() == 0){
        		this.ds_students_copy.filter("");
        	}else{
        	for(var i = 0; i< this.ds_students_copy.getCount(); i++){

        	r_seq = this.ds_students_copy.getColumn(i,"s_seq");
        	if(s_seq == r_seq){
        		s_seq = seq1+deptCode;
        	}

        	}
        	}
        	if(this.ds_students_copy.getCount() == 0){
        		this.ds_students_copy.filter("");
        	}

        	trace(s_seq);

        	if(name == null || name == "undefined"){
        		this.alert("이름 입력해주세요");
        		return;
        	}else if(secNumber == null || secNumber == "undefined"){
        		this.alert("주민번호 입력해주세요.");
        		return;
        	}else if(email == null || email == "undefined"){
        		this.alert("이메일 입력해주세요");
        		return;
        	}else if(contact == null || contact == "undefined"){
        		this.alert("전화번호 입력해주세요");
        		return;
        	}else if(address == null || address == "undefined"){
        		this.alert("주소 입력해주세요");
        		return;
        	}else if(gender == null || gender == "undefined"){
        		this.alert("성별 입력해주세요");
        		return;
        	}else if(colCode == null || colCode == "undefined"){
        		this.alert("학과분류 입력해주세요");
        		return;
        	}else if(deptCode == null || deptCode == "undefined"){
        		this.alert("학과 입력해주세요");
        		return;
        	}else if(colGrade == null || colGrade == "undefined"){
        		this.alert("학년 입력해주세요");
        		return;
        	}

        	var addRow = this.ds_students_copy.addRow();
        	this.ds_students_copy.setColumn(addRow,"s_seq",s_seq);
        	this.ds_students_copy.setColumn(addRow,"name",name);
        	this.ds_students_copy.setColumn(addRow,"secNumber",secNumber);
        	this.ds_students_copy.setColumn(addRow,"email",email);
        	this.ds_students_copy.setColumn(addRow,"contact",contact);
        	this.ds_students_copy.setColumn(addRow,"address",address);
        	this.ds_students_copy.setColumn(addRow,"scholarship",0);
        	this.ds_students_copy.setColumn(addRow,"rest","N");
        	this.ds_students_copy.setColumn(addRow,"grade",0);
        	this.ds_students_copy.setColumn(addRow,"pw",pw);
        	this.ds_students_copy.setColumn(addRow,"gender",gender);
        	this.ds_students_copy.setColumn(addRow,"deptCode",deptCode);
        	this.ds_students_copy.setColumn(addRow,"colCode",colCode);
        	this.ds_students_copy.setColumn(addRow,"colGrade",colGrade);
        	trace(this.ds_students_copy.saveXML());

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

        this.mas_secNumber_oninput = function(obj,e)
        {

        	var test = this.mas_secNumber.text.substring(9,10);
        	trace(test);
        	var gender = this.com_gender.value;
        	if(test == 1){
        	this.com_gender.set_value("M");
        	}else if(test == 2){
        	this.com_gender.set_value("W");
        	}
        };

        this.insertStudent_onload = function(obj,e)
        {
        	var arrComboList = [this.com_colCode, this.com_deptCode];

        	this.gfnInitMultiCombo(arrComboList);


        };

        this.gfnInitMultiCombo = function(arrComboList)
        {
        	var i;
        	var nCount = arrComboList.length;
        	var objCombo;
        	var objChildCombo;

        	for(i=0;i<nCount;i++)
        	{
        		objCombo = arrComboList[i];

        		if(i!=nCount-1)
        		{
        			objChildCombo = arrComboList[i+1];
        			objCombo.childcombo = objChildCombo;
        			objCombo.addEventHandler("onitemchanged", this.cmbMultiCombo_onitemchanged, this);
        		}
        	}

        	this.gfnItemChangedMultiCombo(arrComboList[0], "-1");
        }

         /**
        * @description 	   : 콤보 아이템 변경 처리 함수
        * @param objCombo  : 아이템 변경할 콤보 컴포넌트
        * @param sValue    : 변경할 콤보 값
        * @return          : 없음
        */
        this.gfnItemChangedMultiCombo = function(objCombo, sValue)
        {
        	//하위 콤보 컴포넌트 가져오기
        	var objChildCombo = objCombo.childcombo;

        	//현재 컴포넌트 값 변경
        	objCombo.set_value(sValue);

        	//하위 콤보가 있을 경우
        	if(objChildCombo!=null)
        	{
        		//하위 콤보의 InnerDataset 가져오기
        		var objDs = objChildCombo.getInnerDataset();

        		//상위콤보 값을 기준으로 하위콤보 필터링
        		objDs.filter("Code.toString().indexOf('"+sValue+"')==0||Code=='-1'");

        		//콤보 아이템 변경 처리 함수 호출
        		this.gfnItemChangedMultiCombo(objChildCombo, "-1");
        	}
        }

        /**************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         **************************************************************************/

          /**
        * @description 	   : 콤보 아이템 변경 이벤트
        * @param obj       : 이벤트 발생한 콤보 컴포넌트
        * @param e         : 이벤트 오브젝트
        * @return          : 없음
        */
        this.cmbMultiCombo_onitemchanged = function(obj, e)
        {
        	//콤보 아이템 변경 처리 함수 호출
        	this.gfnItemChangedMultiCombo(obj, e.postvalue);
        }


        this.com_colGrade_onitemchanged = function(obj,e)
        {
        	var test = this.com_colGrade.value;
        	var sseq = this.com_deptCode.value;
        	if(test == 1){
        	seq1 = 21;
        	}else if(test == 2){
        	seq1 = 20;
        	}else if(test == 3){
        	seq1 = 19;
        	}else if(test == 4){
        	seq1 = 18;
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.insertStudent_onload,this);
            this.btn_insert.addEventHandler("onclick",this.btn_insert_onclick,this);
            this.btn_cancel.addEventHandler("onclick",this.btn_cancel_onclick,this);
            this.com_colGrade.addEventHandler("onitemchanged",this.com_colGrade_onitemchanged,this);
            this.mas_secNumber.addEventHandler("oninput",this.mas_secNumber_oninput,this);
        };

        this.loadIncludeScript("insertStudent.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
